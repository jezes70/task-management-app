import express, { Request, Response } from "express";
import Patient, { PatientDocument } from "../../model/patient";

export const searchPatient = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, search } = req.query;

    let query: any = {}; // Build query based on filters

    if (firstName) {
      query.firstName = firstName;
    }

    if (lastName) {
      query.lastName = lastName;
    }

    if (search) {
      // Add search logic to query
      query.$or = [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
      ];
    }

    const patients: PatientDocument[] = await Patient.find(query).exec();

    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching patients" });
  }
};
