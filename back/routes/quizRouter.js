import express from "express";
import { registerUser } from "../controllers/user.js";
import { addQuestion } from "../controllers/question.js";
import { addCategory, getCategories } from "../controllers/category.js";

const quizRouter = express.Router();

quizRouter.post("/user/save", registerUser);
quizRouter.post("/category/save", addCategory);
quizRouter.post("/question/save", addQuestion);
quizRouter.get("/category/get", getCategories);

export default quizRouter;
