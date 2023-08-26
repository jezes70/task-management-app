import Joi from "joi";

export const createAdminValidator = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().trim().lowercase().required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{4}$/)
    .required()
    .label("Password")
    .messages({
      "string.pattern.base": "Password must contain only alphabets and numbers",
    }),
});

export const createUserValidator = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userName: Joi.string().required(),
  employeeId: Joi.string().required(),
  email: Joi.string().trim().lowercase().required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{4,8}$/)
    .required()
    .label("Password")
    .messages({
      "string.pattern.base": "Password must contain only alphabets and numbers",
    }),
  confirm_password: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .label("Confirm password")
    .messages({ "any.only": "Confirm password does not match" }),
});

export const loginUserSchema = Joi.object().keys({
  email: Joi.string().trim().lowercase().required(),
  password: Joi.string()
    .min(4)
    .regex(/^[a-zA-Z0-9]{4,15}$/)
    .required(),
});

export const loginAdminSchema = Joi.object({
  email: Joi.string().trim().required(),
  password: Joi.string().min(4).required(),
});

export const variables = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};

// types.ts

import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

// Extend the Request interface to include the userId property
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

// Define the interface for the JWT payload (you can add more fields if needed)
export interface MyJwtPayload extends JwtPayload {
  userId: string;
}
