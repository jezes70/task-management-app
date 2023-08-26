import express from "express";
import { createPatient } from "../../controller/patientController/createPatient";
import { searchPatient } from "../../controller/patientController/searchPatient";
import { getPatient } from "../../controller/patientController/getPatient";

const router = express.Router();

router.post("/createPatient", createPatient);
router.get("/searchPatient", searchPatient);
router.get("/getPatients", getPatient);

export default router;
