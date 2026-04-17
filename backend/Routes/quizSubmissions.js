const express = require("express");
const router = express.Router();

const QuizQuestion = require("../Model/QuizQuestion");
const QuizSubmission = require("../Model/QuizSubmission");

router.post("/", async (req, res) => {
  try {
    const { userId, answers } = req.body;

    if (!userId || !Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({ message: "Données invalides." });
    }

    const questions = await QuizQuestion.find({ isActive: true });

    const questionMap = new Map();
    questions.forEach((q) => {
      questionMap.set(String(q._id), q);
    });

    const formattedAnswers = [];
    const scoreBySport = {};

    for (const answer of answers) {
      const question = questionMap.get(answer.questionId);

      if (!question) continue;

      const selectedOption = question.options.find(
        (opt) => opt.value === answer.selectedOptionValue
      );

      if (!selectedOption) continue;

      formattedAnswers.push({
        question: question._id,
        selectedOptionValue: selectedOption.value,
        selectedOptionLabel: selectedOption.label,
        sportTags: selectedOption.sportTags,
      });

      selectedOption.sportTags.forEach((tag) => {
        scoreBySport[tag] = (scoreBySport[tag] || 0) + 1;
      });
    }

    let result = "";
    let maxScore = -1;

    for (const sport in scoreBySport) {
      if (scoreBySport[sport] > maxScore) {
        maxScore = scoreBySport[sport];
        result = sport;
      }
    }

    const submission = await QuizSubmission.create({
      user: userId,
      answers: formattedAnswers,
      result,
      scoreBySport,
    });

    res.status(201).json({
      message: "Quiz enregistré avec succès",
      submission,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
});

module.exports = router;