import { Request, Response } from "express";
import User from "../../model/users";
import { Types as mongooseTypes } from "mongoose";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "Users successfully fetched", users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "An error occurred while fetching users" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const objectIdUserId = new mongooseTypes.ObjectId(id);
    res
      .status(200)
      .json({ message: "User successfully fetched", objectIdUserId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "An error occurred while fetching user" });
  }
};
