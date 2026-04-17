import mongoose from "mongoose";

const optionSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
    },
    value: {
      type: String,
      required: true,
      trim: true,
    },
    sportTags: {
      type: [String],
      default: [],
    },
  },
  { _id: false }
);

const quizQuestionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      default: "Quizz - Quel sport est fait pour vous ?",
      trim: true,
    },
    order: {
      type: Number,
      required: true,
      unique: true,
    },
    options: {
      type: [optionSchema],
      validate: {
        validator: (value) => value.length >= 2,
        message: "Une question doit avoir au moins 2 options.",
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const QuizQuestion = mongoose.model("QuizQuestion", quizQuestionSchema);

export default QuizQuestion;