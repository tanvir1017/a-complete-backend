import mongoose from "mongoose";

// Defining sub_todo schema model
const subTodoSchema = new mongoose.Schema(
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
  },
  { timestamps: true } // Defining model creation timestamps for keep tracking updated time and creation time
);

// Exporting created model
export const SubTodo = mongoose.model("SubTodo", subTodoSchema); // Here we are exporting subTodoSchema model with in SubTodo variable by mongoose.model() method, mongoose.model() method will take two params first one is model name and second one is which model it will be.
