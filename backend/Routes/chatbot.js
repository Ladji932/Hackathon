import express from "express";
import axios from "axios";

const router = express.Router();

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

router.post("/", async (req, res) => {
  try {
    const { message, history } = req.body;

    const systemPrompt = `
Tu es l’assistant officiel du Solimouv Festival.

Ton rôle :
- Répondre en français uniquement
- Être clair, court et utile
- Aider sur :
  - le festival
  - les activités sportives
  - le programme
  - le quiz et recommandations
  - les points et récompenses
  - l’adhésion

Règles :
- Ton ton est sympa, dynamique et motivant
- Tu donnes des réponses concrètes
- Si tu ne sais pas → propose une alternative utile
- Pas de blabla inutile

Contexte :
Solimouv est un festival sportif interactif avec :
- quiz personnalisé
- QR codes pour gagner des points
- récompenses (séances gratuites)
`;

    const response = await axios.post(
      "https://api.anthropic.com/v1/messages",
      {
        model: "claude-3-7-sonnet-20250219",
        max_tokens: 500,
        system: systemPrompt,
        messages: [
          ...(history || []),
          { role: "user", content: message },
        ],
      },
      {
        headers: {
          "x-api-key": ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
      }
    );

    const reply = response.data.content[0].text;

    res.json({ reply });
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      error: "Erreur chatbot",
      details: error.message,
    });
  }
});

export default router;