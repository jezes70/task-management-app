import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import db from "./config/config";

import adminRoutes from "./routes/adminRoute/adminsRoute";
import userRoutes from "./routes/userRoute/userRoute";
import taskRoute from "./routes/taskRoute/taskRoute";
import patientRoute from "./routes/patientRoute/patientRoute";
import logoutRoute from "./routes/logoutRoute/logoutRoute";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Only allow requests from this URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
};

db()
  .then(() => {})
  .catch((err) => {
    console.log("Error connecting to database:", err.message);
  });

app.use(express.json());
app.use(cookieParser());
app.use(logger("dev"));
app.use(cors(corsOptions));

app.use("/task", taskRoute);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/patient", patientRoute);
app.use("/logout", logoutRoute);

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
