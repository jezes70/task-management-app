import express, { Request, Response } from "express";
import Patient, { PatientDocument } from "../../model/patient";

export const createPatient = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, gender, height, weight } = req.body;

    const newPatient: PatientDocument = new Patient({
      firstName,
      lastName,
      gender,
      height,
      weight,
    });

    const savedPatient: PatientDocument = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating patient" });
  }
};
