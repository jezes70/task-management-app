import express, { Request, Response } from "express";
import Task, { TaskDocument } from "../../model/task";

export const sortTask = async (req: Request, res: Response) => {
  try {
    const { assignedTo, dueDate, priority, search, sortBy } = req.query as {
      assignedTo?: string;
      dueDate?: string;
      priority?: string;
      search?: string;
      sortBy?: string;
    };

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
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const sortOptions: any = {}; // Sorting options
    if (sortBy) {
      sortOptions[sortBy] = 1; // 1 for ascending, -1 for descending
    }

    const tasks: TaskDocument[] = await Task.find(query)
      .populate("assignedTo", "username")
      .sort(sortOptions) // Apply sorting
      .exec();

    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching tasks" });
  }
};
