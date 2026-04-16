const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./Routes/routes");

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API OK");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/hackathon")
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.log("Erreur Mongo :", err));

app.use("/api/users", userRoutes);

app.listen(5001, () => {
  console.log("Server running on port 5000");
});