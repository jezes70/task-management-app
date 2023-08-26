import express, { Request, Response } from "express";
import Task, { TaskDocument } from "../../model/task";

// PUT /tasks/:taskId
export const updateTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.taskId;
    const { title, description, dueDate, priority, completed } = req.body;

    const updatedTask: TaskDocument | null = await Task.findByIdAndUpdate(
      taskId,
      {
        title,
        description,
        dueDate,
        priority,
        completed,
      },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating task" });
  }
};
