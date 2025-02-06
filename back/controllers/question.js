import { Category } from "../models/categoryModel.js";
import { Question } from "../models/questionModel.js";

export async function addQuestion(req, res) {
  try {
    const { question, answer, options, category } = req.body;
    const questionToAdd = new Question({
      question,
      answer,
      options,
      category: category.toLowerCase(),
    });
    await questionToAdd.save(res.status(201).send({ message: "Question Created" }));
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Error adding question", message: error.message });
  }
}
export async function getQuestions(req, res) {
  try {
    const questions = await Question.find({});
    if (!questions || questions.length === 0)
      return res.status(400).send({ error: "No questions found" });

    return res.send(questions);
  } catch (error) {
    return res.status(500).send({
      error: "Error fetching questions",
      message: error.message,
    });
  }
}

export async function getQuestionsByCategory(req, res) {
  try {
    const { category } = req.params;
    if (!category)
      return res.status(404).send({ error: "Not a valid category" });

    const categoryExists = await Category.find({
      name: category.toLowerCase(),
    });

    if (!categoryExists)
      return res.status(404).send({ error: "Not a valid category" });

    const questions = await Question.find({ category });
    if (!questions || questions.length === 0)
      return res.status(400).send({ error: "No questions found" });

    return res.send(questions);
  } catch (error) {
    return res.status(500).send({
      error: "Error fetching questions by category",
      message: error.message,
    });
  }
}
