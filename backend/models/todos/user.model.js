import mongoose from "mongoose";

// Defining user schema model
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Defining model creation timestamps for keep tracking updated time and creation time
);

// Exporting created model
export const User = mongoose.model("User", userSchema); // Here we are exporting userSchema model with in User variable by mongoose.model() method, mongoose.model() method will take two params first one is model name and second one is which model it will be.
