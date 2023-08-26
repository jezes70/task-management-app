import express from "express";
import { createAdminValidator } from "../../utils/utils";
import {
  getAllUsers,
  getUser,
} from "../../controller/adminController/getAllUsers";
import { getAllPatient } from "../../controller/adminController/getAllPatients";
import { createAdmin } from "../../controller/adminController/adminSignup";
import { loginAdmin } from "../../controller/adminController/adminLogin";
import { deletePatient } from "../../controller/adminController/deletePatient";
import { deleteUser } from "../../controller/adminController/deleteUser";
import { authenticateAdmin } from "../../middlewares/adminAuth";

const router = express.Router();

router.post("/register", createAdmin);
router.post("/login", authenticateAdmin, loginAdmin);

// User Route
router.get("/getUsers", authenticateAdmin, getAllUsers);
router.get("/getUser/:id", authenticateAdmin, getUser);

//patient Route
router.get("/getPatients", authenticateAdmin, getAllPatient);
router.delete("/deletePatient/:patientId", authenticateAdmin, deletePatient);
router.delete("/deleteUser/:id", authenticateAdmin, deleteUser);

export default router;
