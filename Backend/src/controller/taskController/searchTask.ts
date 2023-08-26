import express, { Request, Response } from "express";
import Task, { TaskDocument } from "../../model/task";

export const searchTask = async (req: Request, res: Response) => {
  try {
    const { assignedTo, dueDate, priority, search } = req.query;

    let query: any = {}; // Build query based on filters

    if (assignedTo) {
      query.assignedTo = assignedTo;
    }

    if (dueDate) {
      query.dueDate = dueDate;
    }

    if (priority) {
      query.priority = priority;
    }

    if (search) {
      // Add search logic to query
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const tasks: TaskDocument[] = await Task.find(query)
      .populate("assignedTo", "username")
      .exec();

    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching tasks" });
  }
};
