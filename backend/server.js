import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/routes.js";
import quizQuestionRoutes from "./Routes/quizQuestions.js";
import quizSubmissionRoutes from "./Routes/quizSubmissions.js";
import chatbotRoutes from "./Routes/chatbot.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API OK");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/hackathon")
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.log("Erreur Mongo :", err));

app.use("/api/users", userRoutes);
app.use("/api/quiz/questions", quizQuestionRoutes);
app.use("/api/quiz/submissions", quizSubmissionRoutes);
app.use("/api/chatbot", chatbotRoutes);

app.listen(5001, "0.0.0.0", () => {
  console.log("Server running on port 5001");
});