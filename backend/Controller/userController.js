import User from "../Model/User.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";

// SIGNUP
export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !email || !password) {
      return res.status(400).json({
        message: "firstName, email et password sont requis",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "Utilisateur déjà existant",
      });
    }

    // 🔥 HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 🔥 GENERATE QR TOKEN UNIQUE
    const qrCodeToken = crypto.randomBytes(24).toString("hex");

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      qrCodeToken,
      points: 40,
      rewardUnlocked: false,
    });

    return res.status(201).json({
      message: "Inscription réussie",
      user,
    });
  } catch (error) {
    console.error("Erreur signup :", error);
    return res.status(500).json({
      message: "Erreur serveur",
    });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "email et password sont requis",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Utilisateur introuvable",
      });
    }

    // 🔥 COMPARE HASH
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Mot de passe incorrect",
      });
    }

    return res.status(200).json({
      message: "Connexion réussie",
      user,
    });
  } catch (error) {
    console.error("Erreur login :", error);
    return res.status(500).json({
      message: "Erreur serveur",
    });
  }
};