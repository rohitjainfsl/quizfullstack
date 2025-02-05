import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  options: [{ type: String, required: true }],
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

export const Question = mongoose.model("Question", questionSchema);
