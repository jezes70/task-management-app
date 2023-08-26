import express from "express";
import { createTask } from "../../controller/taskController/createTask";
import { updateTask } from "../../controller/taskController/updateTask";
import { deleteTask } from "../../controller/taskController/deleteTask";
import { markTask } from "../../controller/taskController/markTask";
import { assignTask } from "../../controller/taskController/assignTask";
import { searchTask } from "../../controller/taskController/searchTask";
import { sortTask } from "../../controller/taskController/sortTask";
import { getAllTasks } from "../../controller/taskController/getAllTask";
import { authenticateUser } from "../../middlewares/userAuth";

const router = express.Router();

router.post("/createTask", authenticateUser, createTask);
router.put("/:taskId", authenticateUser, updateTask);
router.put("/:taskId/assign", authenticateUser, assignTask);
router.patch("/:taskId", authenticateUser, markTask);
router.get("/searchTask", authenticateUser, searchTask);
router.get("/getTask", authenticateUser, getAllTasks);
router.get("/sortTask", authenticateUser, sortTask);
router.delete("/:taskId", authenticateUser, deleteTask);

export default router;
