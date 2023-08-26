import { Request, Response } from "express";
import User, { UserDocument } from "../../model/users";
import { generateToken } from "../../utils/notifications";
import { loginUserSchema, variables } from "../../utils/utils";
import bcrypt from "bcryptjs";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const validationResult = loginUserSchema.validate(req.body, variables);

    if (validationResult.error) {
      return res
        .status(400)
        .json({ error: validationResult.error.details[0].message });
    }

    const { email, password } = req.body;

    const user: UserDocument | null = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.status !== "verified") {
      return res.status(401).json({ error: "User account not verified" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = await generateToken(user, res);

    return res.status(200).json({ message: "Login successful", user, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
