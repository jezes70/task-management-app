import { Request, Response } from "express";

// *********************************************************************** //
// Logout
export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
