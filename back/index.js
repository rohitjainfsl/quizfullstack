import express from "express";
import "dotenv/config";
import connectToDB from "./db.js";
import cors from "cors";
import quizRouter from "./routes/quizRouter.js";

const app = express();
const PORT = process.env.PORT;

await connectToDB();

app.use(
  cors({
    origin: process.env.FRONTEND_PATH,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/quiz", quizRouter);

app.listen(PORT, () => console.log("Server started at port " + PORT));
