import { Request, Response } from "express";
import User from "../../model/users";
import { Types as mongooseTypes } from "mongoose";

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const objectIdUserId = new mongooseTypes.ObjectId(id);
    const deletedUser = await User.findByIdAndDelete(objectIdUserId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};
