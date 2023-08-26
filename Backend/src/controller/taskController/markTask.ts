import express, { Request, Response } from "express";
import Task, { TaskDocument } from "../../model/task";

export const markTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.taskId;

    const updatedTask: TaskDocument | null = await Task.findByIdAndUpdate(
      taskId,
      {
        completed: true,
      },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error marking task as completed" });
  }
};
