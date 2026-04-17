import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "QuizQuestion",
      required: true,
    },
    selectedOptionValue: {
      type: String,
      required: true,
      trim: true,
    },
    selectedOptionLabel: {
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

const quizSubmissionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    answers: {
      type: [answerSchema],
      default: [],
    },
    result: {
      type: String,
      default: "",
      trim: true,
    },
    scoreBySport: {
      type: Map,
      of: Number,
      default: {},
    },
    completedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const QuizSubmission = mongoose.model("QuizSubmission", quizSubmissionSchema);

export default QuizSubmission;