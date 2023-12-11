import exp from "constants";
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    mobile: {
      type: Number,
      require: true,
      min: 10,
      max: 10,
    },
    email: {
      type: String,
      require: true,
    },
    github: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const Student =
  mongoose.models.todo || mongoose.model("todo", studentSchema);
