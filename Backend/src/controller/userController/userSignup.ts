import { Request, Response } from "express";
import User, { UserDocument } from "../../model/users";
import { createUserValidator } from "../../utils/utils";
import {
  generateOtp,
  generateToken,
  sendVerificationOTP,
  GeneratePassword,
  GenerateSalt,
} from "../../utils/notifications";

// User Registration
export const createUser = async (req: Request, res: Response) => {
  try {
    const {
      email,
      firstName,
      lastName,
      userName,
      employeeId,
      password,
      confirm_password,
    } = req.body;

    const validationResult = createUserValidator.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json({
        error: validationResult.error.details[0].message,
      });
    }

    const salt = await GenerateSalt();
    const hashedPassword = await GeneratePassword(password, salt);

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: "Email already exists",
      });
    }

    const { otp, expiry } = generateOtp();
    const token = await generateToken(email, res);
    await sendVerificationOTP(email, otp);

    const newUser: UserDocument = await User.create({
      firstName,
      lastName,
      userName,
      employeeId,
      email,
      password: hashedPassword,
      otp,
      expiry,
      status: "pending",
      role: "user",
    });

    return res.status(200).json({
      message: "Proceed to verify your account",
      user: newUser,
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
