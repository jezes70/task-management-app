import mongoose, { Schema, Document } from "mongoose";

export interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  userName: string;
  employeeId: string;
  email: string;
  password: string;
  status: string;
  otp: number | any;
  expiry: Date | any;
}

const UserSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    employeeId: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value: string) => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Invalid email format",
      },
    },
    password: { type: String, required: true },
    status: { type: String },
    role: { type: String },
    otp: { type: Number },
    expiry: { type: Date },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
