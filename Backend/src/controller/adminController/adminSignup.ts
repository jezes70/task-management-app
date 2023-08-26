import { Request, Response } from "express";
import Admin, { AdminDocument } from "../../model/admins";
import { validationResult } from "express-validator";
import {
  GeneratePassword,
  GenerateSalt,
  generateTokenAdmin,
} from "../../utils/notifications";
import { createAdminValidator } from "../../utils/utils";

// Admin Signup
export const createAdmin = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;

    const validationResult = createAdminValidator.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json({
        error: validationResult.error.details[0].message,
      });
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    const salt = await GenerateSalt();
    const hashedPassword = await GeneratePassword(password, salt);

    const newAdmin: AdminDocument = new Admin({
      username,
      password: hashedPassword,
      email,
      role: "admin",
    });

    await newAdmin.save();

    const token = generateTokenAdmin(email, res);

    return res.status(201).json({
      message: "Admin created successfully",
      newAdmin,
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
