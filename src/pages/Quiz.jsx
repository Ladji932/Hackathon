import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Quiz() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchQuestions = async () => {
    try {
      console.log("Chargement des questions...");

      const res = await axios.get("https://hackathon-2-3fxn.onrender.com/api/quiz/questions");

      console.log("Réponse brute API :", res);
      console.log("res.data :", res.data);
      console.log("Type res.data :", typeof res.data);
      console.log("Est-ce un tableau ?", Array.isArray(res.data));

      setQuestions(res.data);
    } catch (error) {
      console.error("Erreur chargement quiz :", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchQuestions();
}, []);
  const handlePrevious = () => {
    if (currentIndex === 0) return;
    setAnswers((prev) => prev.slice(0, -1));
    setCurrentIndex((prev) => prev - 1);
  };

  const handleSelectOption = async (option) => {
    const currentQuestion = questions[currentIndex];

    const updatedAnswers = [
      ...answers,
      {
        questionId: currentQuestion._id,
        selectedOptionValue: option.value,
      },
    ];

    setAnswers(updatedAnswers);

    const isLastQuestion = currentIndex === questions.length - 1;

    if (!isLastQuestion) {
      setCurrentIndex((prev) => prev + 1);
      return;
    }

    try {
      const res = await axios.post("https://hackathon-2-3fxn.onrender.com/api/quiz/submissions", {
        userId: user?._id,
        answers: updatedAnswers,
      });

      navigate("/quiz-result", {
        state: {
          result: res.data.submission?.result,
          submission: res.data.submission,
        },
      });
    } catch (error) {
      console.error("Erreur envoi quiz :", error.response?.data || error.message);
      alert("Impossible d'envoyer le quiz");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f6f6f6]">
        <p className="text-slate-600">Chargement du quiz...</p>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f6f6f6]">
        <p className="text-slate-600">Aucune question disponible.</p>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <main className="min-h-screen bg-[#f6f6f6] px-4 py-8">
      <div className="mx-auto max-w-md">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="mb-4 text-2xl text-[#245fdd] disabled:opacity-30"
        >
          ←
        </button>

        <div className="mb-4 rounded-[24px] bg-[#f8efe2] px-4 py-5">
          <p className="mb-2 text-sm text-[#e38811]">
            Quizz - Quel sport est fait pour vous ?
          </p>
          <h1 className="text-[28px] font-semibold leading-tight text-[#1b1b1b]">
            {currentQuestion.title}
          </h1>
        </div>

        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelectOption(option)}
              className="w-full rounded-full bg-[#f4a631] px-5 py-4 text-lg font-medium text-black transition hover:opacity-90"
            >
              {option.label}
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Question {currentIndex + 1} / {questions.length}
        </p>
      </div>
    </main>
  );
}

export default Quiz;