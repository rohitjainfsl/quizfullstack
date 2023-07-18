import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: Number,
        required: true
    },
    options: {
        type: Array,
        required: true
    }
})


const Question = mongoose.model("question", questionSchema)

export default Question