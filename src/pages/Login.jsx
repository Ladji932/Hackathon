import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5001/api/users/login",
        formData
      );

      console.log("LOGIN SUCCESS :", res.data);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Connexion réussie ✅");

      navigate("/dashboard");
    } catch (error) {
      console.error("LOGIN ERROR :", error.response?.data || error.message);
      alert("Erreur connexion ❌");
    }
  };

  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-5 py-16">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-600">
          Connexion
        </p>
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">
          Se connecter
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="vous@example.com"
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white hover:bg-slate-800"
          >
            Connexion
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;