import { Request, Response } from "express";
import Task, { TaskDocument } from "../../model/task";

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks: TaskDocument[] = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching tasks" });
  }
};
