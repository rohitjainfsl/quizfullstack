//CORS: Cross Origin Resource Sharing

import express from "express";
import cors from "cors";
import connection from "./db/connection.js";
import User from "./models/user.js";
import Question from "./models/question.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {});

app.post("/register", async (req, res) => {
  //   console.log(req.body);

  const { name, email, phone, username, password } = req.body;

  const newUser = new User({
    name,
    email,
    phone,
    username,
    password,
  });

  await newUser.save();

  res.end("Done");
});

app.post("/login", async (req, res) => {
    const {username, password} = req.body
    const storedUser = await User.findOne({username})

    console.log(username, storedUser, password)
    if(storedUser){
        if(storedUser.password === password){
            res.status(200).end("success")
        }
        else    res.status(401).end("invalid")
    }
    else{
        res.status(401).end("invalid")
    }
});

app.get("/wall", async (req, res) => {
  const questions = await Question.find()
  res.status(200).end(JSON.stringify(questions))
})

connection.then(() =>
  app.listen(8080, () => {
    console.log("Server started at port 8080");
  })
);
