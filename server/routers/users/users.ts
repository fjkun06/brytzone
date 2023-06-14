import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  _id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User extends Document {
  username: string;
  password: string;
  role: string;
  _id: string;
}
const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    _id: { type: String, required: true },
  },
  { timestamps: true }
);

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  role: {
    type: String,
    default: "Basic",
    required: true,
  },
  _id: { type: String, required: true },
});

export const JWTUser = mongoose.model("jwtuser", UserSchema);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
