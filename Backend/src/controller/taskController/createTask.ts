import express, { Request, Response } from "express";
import Task, { TaskDocument } from "../../model/task";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, patientName, dueDate } = req.body;
    const assignedTo = req.userId; // from auth middleware

    const newTask: TaskDocument = new Task({
      title,
      description,
      patientName,
      dueDate,
      assignedTo,
    });

    const savedTask: TaskDocument = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating task" });
  }
};

export default createTask;
