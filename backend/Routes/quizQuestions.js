const express = require("express");
const router = express.Router();
const QuizQuestion = require("../Model/QuizQuestion");

router.get("/", async (req, res) => {
  try {
    console.log("GET /api/quiz/questions appelé");

    const questions = await QuizQuestion.find({ isActive: true }).sort({ order: 1 });

    console.log("Questions trouvées :", questions.length);
    console.log("Contenu questions :", JSON.stringify(questions, null, 2));

    res.status(200).json(questions);
  } catch (error) {
    console.error("Erreur GET /api/quiz/questions :", error);
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
});

module.exports = router;