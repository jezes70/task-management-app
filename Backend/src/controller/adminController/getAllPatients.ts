import express, { Request, Response } from "express";
import Patient, { PatientDocument } from "../../model/patient";

export const getAllPatient = async (req: Request, res: Response) => {
  try {
    const patients: PatientDocument[] = await Patient.find().exec();

    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching patients" });
  }
};
