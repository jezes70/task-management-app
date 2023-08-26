import { Response } from "express";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserDocument } from "../model/users";
import { port, server, user, password, jwtsecret } from "../config";
import { AdminDocument } from "../model/admins";

export const generateOtp = () => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  const expiry = new Date();
  expiry.setTime(new Date().getTime() + 30 * 60 * 1000);
  return { otp, expiry };
};

// export const generateToken = (user: UserDocument, res: Response) => {
//   const payload = {
//     id: user.id,
//     email: user.email,
//   };

//   try {
//     const token = jwt.sign(payload, jwtsecret, { expiresIn: "30d" });
//     res.cookie("token", token, {
//       httpOnly: true,
//       maxAge: 30 * 24 * 60 * 60 * 1000,
//     });
//     return token;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Error generating token");
//   }
// };

// export const validateToken = (user: UserDocument, token: string) => {
//   try {
//     const decodedToken: any = jwt.verify(token, jwtsecret);
//     if (decodedToken.id !== user.id || decodedToken.email !== user.email) {
//       return false;
//     }
//     const expiry = new Date(decodedToken.exp * 1000);
//     if (expiry.getTime() < new Date().getTime()) {
//       return false;
//     }
//     return true;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// };

// Common interface for User, Admin, and Partner documents
interface UserOrAdminDocument {
  id: string;
  email: string;
}

export const generateToken = (
  user: UserDocument | AdminDocument,
  res: Response
) => {
  const payload: UserOrAdminDocument = {
    id: user.id,
    email: user.email,
  };

  try {
    const token = jwt.sign(payload, jwtsecret, { expiresIn: "30d" });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    return token;
  } catch (error) {
    console.error(error);
    throw new Error("Error generating token");
  }
};

export const generateTokenAdmin = (admin: AdminDocument, res: Response) => {
  const payload = {
    id: admin.id,
    email: admin.email,
    role: "admin", // Set the role to "admin"
  };

  try {
    const token = jwt.sign(payload, jwtsecret, { expiresIn: "30d" });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    return token;
  } catch (error) {
    console.error(error);
    throw new Error("Error generating token");
  }
};

export const validateToken = (
  user: UserDocument | AdminDocument,
  token: string
) => {
  try {
    const decodedToken: any = jwt.verify(token, jwtsecret);
    if (decodedToken.id !== user.id || decodedToken.email !== user.email) {
      return false;
    }
    const expiry = new Date(decodedToken.exp * 1000);
    if (expiry.getTime() < new Date().getTime()) {
      return false;
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const GenerateSalt = async () => {
  return await bcrypt.genSalt();
};

export const GeneratePassword = async (password: string, salt: string) => {
  return await bcrypt.hash(password, salt);
};

export const sendVerificationOTP = async (email: string, otp: number) => {
  try {
    const transporter = nodemailer.createTransport({
      host: server,
      port: port,
      secure: false,
      auth: {
        user: user,
        pass: password,
      },
    });

    const mailOptions = {
      from: "Tobechukwu <Ukadavid7@gmail.com>",
      to: email,
      subject: "Account Verification OTP",
      html: `
  <div style="max-width:700px; font-size:110%; border:10px solid #ddd; 
  padding:50px 20px; margin:auto; ">
  <h2 style="text-transform:uppercase; text-align:center; color:teal;">
  Welcome to MediGuard
  </h2>
  <p>Hi there, your otp is ${otp}, it will expire in 30mins</p>
  </div>
  `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
    throw new Error("Error sending account verification OTP");
  }
};

export const sendVerificationEmail = async (email: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: server,
      port: port,
      auth: {
        user: user,
        pass: password,
      },
    });

    const mailOptions = {
      from: "Tobechukwu <Ukadavid7@gmail.com>",
      to: email,
      subject: "Account Verification Successful",
      html: `
        <div style="max-width:700px; font-size:110%; border:10px solid #ddd; padding:50px 20px; margin:auto;">
          <h2 style="text-transform:uppercase; text-align:center; color:teal;">Welcome to MediGuard</h2>
          <p>Your account has been verified and activated by the admin.</p>
          <p>Thank you for joining MediGuard. You can now login to your account and access all the features.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
    throw new Error("Error sending verification email");
  }
};

export const sendPasswordResetOTP = async (email: string, otp: number) => {
  try {
    const transporter = nodemailer.createTransport({
      host: server,
      port: port,
      auth: {
        user: user,
        pass: password,
      },
    });

    const mailOptions = {
      from: "Tobechukwu <ukadavid7@gmail.com>",
      to: email,
      subject: "Password Reset OTP",
      html: `
   <div style="max-width:700px; font-size:110%; border:10px solid #ddd; 
  padding:50px 20px; margin:auto; ">
  <p>Your OTP to reset your password is:</p>
    <h1>${otp}</h1>
    <p>Please enter this OTP to reset your password.</p>
    <p>Note that the OTP is only valid for 30 minutes.</p>
    <p>If you did not make this request, please ignore this email.</p>
    `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
    throw new Error("Error sending password reset OTP");
  }
};
