import { Question } from "../models/questionModel.js";

export async function addQuestion(req, res) {
  try {
    const question = new Question(req.body);
    await question.save(res.status(201).send({ message: "Question Created" }));
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Error adding question", message: error.message });
  }
}
