import mongoose from "mongoose";

// Defining sub_todo schema model
const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true } // Defining model creation timestamps for keep tracking updated time and creation time
);

// Exporting created model
export const Todo = mongoose.model("Todo", todoSchema); // Here we are exporting TodoSchema model with in Todo variable by mongoose.model() method, mongoose.model() method will take two params first one is model name and second one is which model it will be.
