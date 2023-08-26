import mongoose, { Schema, Document } from "mongoose";

export interface AdminDocument extends Document {
  username: string;
  password: string;
  email: string;
  role: string;
  lastLogin: Date;
}

const AdminSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ["admin"], default: "admin" },
    lastLogin: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model<AdminDocument>("Admin", AdminSchema);

export default Admin;
