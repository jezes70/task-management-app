import { Request, Response } from "express";
import User from "../../model/users";

// User Verification
export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { otp } = req.body;
    console.log(otp);

    const user = await User.findById(userId);
    console.log(user);

    if (!user) {
      return res.status(400).json({
        message: "User not found, kindly create an account",
      });
    }

    console.log(typeof user.otp, typeof otp);
    console.log(user.otp, otp);

    if (user.otp != otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (user.expiry < new Date()) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    user.status = "verified";
    user.otp = null;
    user.expiry = null;
    await user.save();

    return res
      .status(200)
      .json({ message: "User verified successfully, proceed to Login", user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
