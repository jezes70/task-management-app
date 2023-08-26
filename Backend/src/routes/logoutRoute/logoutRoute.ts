import express from "express";

import { logout } from "../../controller/logoutController/logoutController";
import { authenticateUser } from "../../middlewares/userAuth";

const router = express.Router();

router.get("/logout", authenticateUser, logout);

export default router;
