export const sendMessageToBot = async (message, history) => {
  const res = await fetch("/api/chatbot", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, history }),
  });

  if (!res.ok) throw new Error("Erreur API");

  return res.json();
};