import express from "express";
import { registerUser, getCategories } from "../controllers/user.js";

const quizRouter = express.Router();

quizRouter.post("/user/save", registerUser);
quizRouter.get("/category/get", getCategories);

export default quizRouter;
