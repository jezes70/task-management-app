import { Request, Response } from "express";
import User from "../../model/users";
import { generateOtp, sendVerificationOTP } from "../../utils/notifications";

// Forgot Password
export const forgotPasswordOTP = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const { otp, expiry } = generateOtp();
    user.otp = otp;
    user.expiry = expiry;
    await user.save();

    await sendVerificationOTP(email, otp);

    return res.status(200).json({ message: "OTP sent for password reset" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
