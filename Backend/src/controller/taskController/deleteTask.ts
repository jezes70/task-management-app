import express, { Request, Response } from "express";
import Task, { TaskDocument } from "../../model/task";

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.taskId;
    console.log(taskId);

    const deletedTask: TaskDocument | null = await Task.findByIdAndDelete(
      taskId
    );

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting task" });
  }
};
