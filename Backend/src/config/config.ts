import mongoose from "mongoose";
import { MONGODB_URI } from "./index";

const db = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI, {});
    console.log("MongoDB connected Successfully");
  } catch (err) {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(1);
  }
};
export default db;
