import express, { Request, Response } from "express";
import Patient, { PatientDocument } from "../../model/patient";

export const deletePatient = async (req: Request, res: Response) => {
  try {
    const patientId = req.params.patientId;
    console.log(patientId);
    const deletedPatient: PatientDocument | null =
      await Patient.findByIdAndDelete(patientId);

    if (!deletedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting patient" });
  }
};
