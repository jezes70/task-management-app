import mongoose, { Schema, Document } from "mongoose";

export interface TaskDocument extends Document {
  title: string;
  description: string;
  assignedTo: string;
  patientName: string;
  dueDate: Date;
  completed: Boolean;
}
const taskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  patientName: { type: String },
  dueDate: { type: Date },
  completed: { type: Boolean, default: false },
});
const Task = mongoose.model<TaskDocument>("Task", taskSchema);

export default Task;
