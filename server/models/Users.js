import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    photo: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "active",
    },
    email_verified_at: {
      type: Date,
      default: null,
    },
    password: {
      type: String,
      required: true,
      select: false, // 🔥 IMPORTANT (hide by default)
    },
    remember_token: {
      type: String,
      default: null,
    },
    latitude: {
      type: String,
      default: null,
    },
    longitude: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;