import express from "express";
import cors from "cors"
import connection from "./db/index.js";
import AdminRouter from './routes/admin.js'
import UserRouter from './routes/user.js'

const app = express();

// Set up middleware and routes
app.use(cors({origin: "http://localhost:5173"}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "pug")

app.use("/admin", AdminRouter);
app.use("/user", UserRouter);

// Set up server
const port = process.env.PORT || 8000;

connection
  .then(() =>
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    })
  )
  .catch((err) => {
    console.log("Error connecting to MongoDB Atlas", err);
  });
