import express from "express";

import { signup, login } from "../Controller/userController.js";
import User from "../Model/User.js";

const router = express.Router();

// AUTH
router.post("/signup", signup);
router.post("/login", login);

// 🔥 GET QR CODE USER
router.get("/me/qr", async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: "userId requis" });
    }

    const user = await User.findById(userId).select(
      "firstName qrCodeToken points rewardUnlocked"
    );

    if (!user) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    const qrValue = `https://hiking-soonest-requesting-corn.trycloudflare.com/api/users/scan/${user.qrCodeToken}`;

    res.status(200).json({
      qrValue,
      points: user.points,
      rewardUnlocked: user.rewardUnlocked,
    });
  } catch (error) {
    console.error("Erreur QR :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// 🔥 SCAN QR (GET)
router.get("/scan/:token", async (req, res) => {
  try {
    const { token } = req.params;

    const user = await User.findOne({ qrCodeToken: token });

    if (!user) {
      return res.status(404).send("QR code invalide");
    }

    user.points += 10;

    if (user.points >= 100) {
      user.points = 100;
      user.rewardUnlocked = true;
    }

    await user.save();

    return res.send(`
      <html>
        <body style="font-family: sans-serif; padding: 24px; text-align: center;">
          <h1>Scan validé 🎉</h1>
          <p>${user.points} / 100 points</p>
          <p>${user.rewardUnlocked ? "Séance gratuite débloquée 🎁" : "Continue pour débloquer ton cadeau !"}</p>
        </body>
      </html>
    `);
  } catch (error) {
    console.error("Erreur scan GET :", error);
    res.status(500).send("Erreur serveur");
  }
});

// 🔥 SCAN QR (POST)
router.post("/scan/:token", async (req, res) => {
  try {
    const { token } = req.params;

    const user = await User.findOne({ qrCodeToken: token });

    if (!user) {
      return res.status(404).json({ message: "QR code invalide" });
    }

    user.points += 10;

    if (user.points >= 100) {
      user.points = 100;
      user.rewardUnlocked = true;
    }

    await user.save();

    res.status(200).json({
      message: "Scan validé 🎉",
      points: user.points,
      rewardUnlocked: user.rewardUnlocked,
    });
  } catch (error) {
    console.error("Erreur scan :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

export default router;