import { Request, Response } from "express";
import Admin, { AdminDocument } from "../../model/admins";

import { loginAdminSchema } from "../../utils/utils";
import { generateTokenAdmin } from "../../utils/notifications";
import { variables } from "../../utils/utils";
import bcrypt from "bcryptjs";

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const trimmedEmail = email.trim();

    const validationResult = loginAdminSchema.validate(req.body, variables);

    if (validationResult.error) {
      return res
        .status(400)
        .json({ error: validationResult.error.details[0].message });
    }

    const admin: AdminDocument | null = await Admin.findOne({
      email: trimmedEmail,
    });

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, admin.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateTokenAdmin(admin, res); // Use generateTokenAdmin

    return res.status(200).json({ message: "Login successful", admin, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export { generateToken, loginAdminSchema, AdminDocument };
