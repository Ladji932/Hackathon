import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function QuizResult() {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state?.result;

  useEffect(() => {
    if (result) {
      localStorage.setItem("quizResult", result);
    }
  }, [result]);

  if (!result) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f6f6f6] px-4">
        <div className="rounded-3xl bg-white p-6 shadow">
          <p className="mb-4">Aucun résultat trouvé.</p>
          <button
            onClick={() => navigate("/quiz")}
            className="rounded-full bg-[#245fdd] px-5 py-3 text-white"
          >
            Refaire le quiz
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f6f6] px-4">
      <div className="w-full max-w-md rounded-[28px] bg-[#6f5c43] p-6 text-white shadow-xl">
        <h1 className="mb-4 text-3xl font-bold">Résultat</h1>

        <p className="mb-6 text-lg">
          Ton sport idéal est :{" "}
          <span className="font-bold uppercase text-[#f4a631]">{result}</span>
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="rounded-full bg-[#f4a631] px-5 py-3 font-semibold text-black"
        >
          Aller au dashboard
        </button>
      </div>
    </main>
  );
}

export default QuizResult;