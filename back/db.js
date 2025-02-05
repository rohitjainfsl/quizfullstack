import mongoose from "mongoose";
import "dotenv/config";

async function connectToDB() {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.4ont6qs.mongodb.net/quizFullstack?retryWrites=true&w=majority`
  );
  console.log("connected to DB");
}
export default connectToDB;
