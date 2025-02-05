import express from "express";
import {
  registerUser,
  getCategories,
  addCategory,
} from "../controllers/user.js";

const quizRouter = express.Router();

quizRouter.post("/user/save", registerUser);
quizRouter.get("/category/get", getCategories);
quizRouter.post("/category/add", addCategory);

export default quizRouter;
