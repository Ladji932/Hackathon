import { useState } from "react";
import { sendMessageToBot } from "../services/chatbot";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const data = await sendMessageToBot(input, newMessages);

      setMessages([
        ...newMessages,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Bouton */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg"
      >
        💬
      </button>

      {/* Fenêtre */}
      {open && (
        <div className="w-80 h-96 bg-white rounded-2xl shadow-xl mt-2 flex flex-col">
          <div className="p-3 border-b font-bold">
            Assistant Solimouv
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-200"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {loading && <div className="text-sm">...</div>}
          </div>

          {/* Input */}
          <div className="p-2 flex gap-2 border-t">
            <input
              className="flex-1 border rounded px-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pose ta question..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 rounded"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}