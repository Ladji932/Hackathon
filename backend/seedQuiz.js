const mongoose = require("mongoose");
const QuizQuestion = require("./Model/QuizQuestion");

mongoose
  .connect("mongodb://127.0.0.1:27017/hackathon")
  .then(async () => {
    console.log("MongoDB connecté pour seed");

    await QuizQuestion.deleteMany({});
    console.log("Anciennes questions supprimées");

    const inserted = await QuizQuestion.insertMany([
      {
        title: "Quelle ambiance vous correspond ?",
        subtitle: "Quizz - Quel sport est fait pour vous ?",
        order: 1,
        isActive: true,
        options: [
          { label: "En salle", value: "indoor", sportTags: ["yoga", "zumba"] },
          { label: "En équipe", value: "team", sportTags: ["baskin"] },
          { label: "Seul(e) à mon rythme", value: "solo", sportTags: ["yoga"] },
          { label: "En plein air", value: "outdoor", sportTags: ["cecifoot"] },
        ],
      },
      {
        title: "Qu’est-ce qui vous motive à bouger ?",
        subtitle: "Quizz - Quel sport est fait pour vous ?",
        order: 2,
        isActive: true,
        options: [
          { label: "Me dépasser", value: "challenge", sportTags: ["baskin"] },
          { label: "Me détendre", value: "relax", sportTags: ["yoga"] },
          { label: "Partager avec d'autres", value: "share", sportTags: ["zumba", "baskin"] },
          { label: "Prendre soin de mon corps", value: "health", sportTags: ["yoga"] },
        ],
      },
      {
        title: "Votre rapport à l’effort ?",
        subtitle: "Quizz - Quel sport est fait pour vous ?",
        order: 3,
        isActive: true,
        options: [
          { label: "Dépense intense", value: "intense", sportTags: ["zumba", "baskin"] },
          { label: "Effort doux et régulier", value: "soft", sportTags: ["yoga"] },
          { label: "J’aime varier", value: "varied", sportTags: ["zumba"] },
          { label: "Je débute doucement", value: "beginner", sportTags: ["cecifoot", "yoga"] },
        ],
      },
      {
        title: "Rapport au contact avec les autres ?",
        subtitle: "Quizz - Quel sport est fait pour vous ?",
        order: 4,
        isActive: true,
        options: [
          { label: "La confrontation directe", value: "direct", sportTags: ["baskin"] },
          { label: "Garder mes distances", value: "distance", sportTags: ["yoga"] },
          { label: "Coopérer sans se confronter", value: "cooperate", sportTags: ["cecifoot"] },
          { label: "L’ambiance avant tout", value: "fun", sportTags: ["zumba"] },
        ],
      },
      {
        title: "Temps consacré au sport par semaine ?",
        subtitle: "Quizz - Quel sport est fait pour vous ?",
        order: 5,
        isActive: true,
        options: [
          { label: "Moins d’1h", value: "lt1", sportTags: ["yoga"] },
          { label: "1 à 3h", value: "1to3", sportTags: ["cecifoot", "yoga"] },
          { label: "3 à 5h", value: "3to5", sportTags: ["baskin", "zumba"] },
          { label: "Plus de 5h", value: "gt5", sportTags: ["baskin"] },
        ],
      },
    ]);

    console.log("Questions insérées :", inserted.length);
    process.exit();
  })
  .catch((err) => {
    console.error("Erreur seed :", err);
    process.exit(1);
  });