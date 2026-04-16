import { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas ❌");
      return;
    }

    try {
      const payload = {
        firstName: formData.firstName,
        email: formData.email,
        password: formData.password,
      };

      const res = await axios.post(
        "http://localhost:5001/api/users/signup",
        payload
      );

      console.log("SUCCESS :", res.data);
      alert("Inscription réussie 🚀");
    } catch (error) {
      console.error("ERROR :", error.response?.data || error.message);
      alert("Erreur inscription ❌");
    }
  };

  return (
    <section className="min-h-screen bg-[#f7f7fb]">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Partie gauche */}
        <div className="flex items-center justify-center px-6 py-10 lg:px-16">
          <div className="w-full max-w-xl">
            <button className="mb-8 text-sm text-slate-500 transition hover:text-slate-700">
              ← Retour au site
            </button>

            {/* Steps */}
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1f1f1f] text-sm font-semibold text-white">
                1
              </div>
              <div className="text-sm uppercase tracking-wide text-slate-500">
                Étape 1 sur 2
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-500">
                2
              </div>
            </div>

            <h1 className="mb-2 text-4xl font-bold tracking-tight text-[#181c2a]">
              Créer ton compte citoyen
            </h1>
            <p className="mb-8 text-base text-slate-500">
              Rejoins une communauté engagée pour une nouvelle politique
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">
                    Prénom
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="ex : Jean"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="h-14 w-full rounded-xl border border-transparent bg-[#f1f2f6] px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#3d3aa8] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">
                    Nom
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="ex : Dupont"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="h-14 w-full rounded-xl border border-transparent bg-[#f1f2f6] px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#3d3aa8] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jean.dupont@exemple.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-14 w-full rounded-xl border border-transparent bg-[#f1f2f6] px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#3d3aa8] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-14 w-full rounded-xl border border-transparent bg-[#f1f2f6] px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#3d3aa8] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  Confirmez le mot de passe
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="********"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="h-14 w-full rounded-xl border border-transparent bg-[#f1f2f6] px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#3d3aa8] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="h-14 w-full rounded-xl bg-[#3433a7] text-sm font-semibold text-white transition hover:bg-[#2b2a8d]"
              >
                Continuer
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-slate-500">
              Déjà membre ?{" "}
              <a href="/login" className="font-semibold text-[#3433a7] hover:underline">
                Se connecter
              </a>
            </p>

            <p className="mt-6 text-center text-xs leading-5 text-slate-400">
              Tous les champs sont requis. En cliquant sur Continuer, vous acceptez
              nos CGU et notre Politique de Confidentialité.
            </p>
          </div>
        </div>

        {/* Partie droite */}
        <div className="relative hidden overflow-hidden bg-[#3433a7] lg:flex lg:flex-col lg:items-center lg:justify-center">
          <div className="absolute inset-0 bg-[#3433a7]" />

<div className="relative z-10 w-full max-w-lg px-8">
  <div className="relative">

    {/* Shadow arrière (le plus loin) */}
    <div className="absolute -top-6 -right-6 z-0 h-full w-full rotate-[6deg] rounded-2xl bg-white/20" />

    {/* Shadow milieu */}
    <div className="absolute -top-3 -right-3 z-0 h-full w-full rotate-[3deg] rounded-2xl bg-white/40" />

    {/* Carte principale */}
    <div className="relative z-10 rounded-2xl bg-white p-8 shadow-xl">
      <div className="mb-4 text-6xl leading-none text-slate-200">“</div>

      <p className="text-3xl font-semibold leading-tight text-[#2a2a2a]">
        J&apos;ai longtemps cherché un moyen de m&apos;impliquer sans tomber
        dans la politique politicienne.
        <span className="text-[#3433a7]"> Les Voies </span>
        m&apos;apporte enfin des analyses concrètes et des solutions qui
        s&apos;inspirent de ce qui marche ailleurs.
      </p>

      <div className="mt-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-slate-600">
          MD
        </div>
        <div>
          <p className="font-medium text-slate-800">Marie Dupont</p>
          <p className="text-sm text-slate-500">
            Citoyenne engagée, Lyon
          </p>
        </div>
      </div>
    </div>

  </div>
</div>          {/* Bas bloc avantages */}
          <div className="relative z-10 mt-20 w-full max-w-3xl px-8 text-center text-white">
            <h2 className="text-3xl font-semibold tracking-tight">
              REPRENEZ LE POUVOIR SUR L&apos;INFO
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-36 bg-white/60" />

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-2xl">
                  🛡️
                </div>
                <p className="font-semibold">Indépendance</p>
                <p className="mt-1 text-sm text-white/80">
                  Informations 100% neutres
                </p>
              </div>

              <div>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-2xl">
                  👥
                </div>
                <p className="font-semibold">Communauté</p>
                <p className="mt-1 text-sm text-white/80">
                  + 5 000 citoyens engagés
                </p>
              </div>

              <div>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-2xl">
                  ⏱️
                </div>
                <p className="font-semibold">Rapidité</p>
                <p className="mt-1 text-sm text-white/80">
                  L’essentiel en 5 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;