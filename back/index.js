import express from "express";
import cors from "cors";
import connection from "./db/index.js";
import AdminRouter from "./routes/admin.js";
import UserRouter from "./routes/user.js";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Quiz App",
      version: "1.0.0",
      description: "A simple quiz app",
    },
    servers: [
      {
        url: "https://fullstackquiz.vercel.app",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specifications = swaggerJSDoc(options);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specifications));

const apiUrl = window.location.origin;

// Set up middleware and routes
app.use(cors({ origin: apiUrl }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "pug");

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
