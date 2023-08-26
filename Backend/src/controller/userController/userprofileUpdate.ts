import { Request, Response } from "express";
import User, { UserDocument } from "../../model/users";

export const updateUserProfile = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const updates = { ...req.body };
  console.log("Received payload:", updates);

  try {
    // Find the user by ID and update the profile information
    const user: UserDocument | null = await User.findByIdAndUpdate(
      userId,
      updates,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ error: "Internal server error" });
  }
};
