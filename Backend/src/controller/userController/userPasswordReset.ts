import { Request, Response } from "express";
import User from "../../model/users";
import { GeneratePassword, GenerateSalt } from "../../utils/notifications";

// Change Password
export const changePassword = async (req: Request, res: Response) => {
  try {
    const { email, newPassword } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Generate new salt and password hash
    const salt = await GenerateSalt();
    const hashedPassword = await GeneratePassword(newPassword, salt);

    // Update user's password
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Password changed successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
