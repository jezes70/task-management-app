import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtsecret } from "../config";
import { MyJwtPayload } from "../utils/utils";

export const authenticateAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token =
      req.headers.authorization?.split(" ")[1] ||
      req.query.token ||
      req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const decodedToken = jwt.verify(token, jwtsecret) as MyJwtPayload;
    if (decodedToken.role !== "admin") {
      return res.status(403).json({ message: "Permission denied" });
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
