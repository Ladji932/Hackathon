import {
  User,
  Gift,
  ChevronRight,
  Bookmark,
  Lightbulb,
  Heart,
  SlidersHorizontal,
  LogOut,
  CheckCircle2,
  Circle,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const rawUser = localStorage.getItem("user");
  const rawQuizResult = localStorage.getItem("quizResult");

  let user = null;

  try {
    user = rawUser ? JSON.parse(rawUser) : null;
  } catch {
    user = null;
  }

  const quizResult = rawQuizResult ? rawQuizResult.toLowerCase() : "";

  const sportContent = {
    zumba: {
      title: "Zumba",
      description:
        "Une activité dynamique et festive pour bouger en musique dans une ambiance collective.",
    },
    baskin: {
      title: "Baskin",
      description:
        "Un basket inclusif et collectif où chacun trouve sa place, quel que soit son niveau.",
    },
    yoga: {
      title: "Yoga",
      description:
        "Une pratique douce pour se reconnecter à son corps, respirer et relâcher les tensions.",
    },
    cecifoot: {
      title: "Cécifoot",
      description:
        "Une découverte du football adapté pour expérimenter le jeu autrement et sensibiliser au handicap.",
    },
  };

  const recommendedSport = sportContent[quizResult];

  const points = 40;
  const maxPoints = 100;
  const progress = (points / maxPoints) * 100;

  const steps = [
    { label: "Créer mon compte", done: true },
    { label: "Réaliser mon quiz", done: true },
    { label: "Inscription au festival", done: false },
    { label: "Participer à une activité", done: false },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("quizResult");
    navigate("/login");
  };

  return (
    <main className="min-h-screen bg-[#f3f3f3] md:bg-[#efefef]">
      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#f7f7f7] px-6 pt-6 pb-0 md:my-6 md:max-w-[520px] md:rounded-[28px] md:border md:border-neutral-200 md:shadow-sm">
        {/* User */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1649d8] text-white shadow-sm">
            <User size={24} />
          </div>

          <h1 className="text-[22px] font-semibold text-[#1f1f1f] md:text-[24px]">
            Bonjour, {user?.firstName || "Noam"} !
          </h1>
        </div>

        {/* Recommandation quiz */}
        {recommendedSport && (
          <div className="mb-6 rounded-2xl bg-[#6f5c43] p-5 text-white shadow-sm">
            <p className="mb-2 text-sm text-white/70">Ton sport recommandé</p>

            <h2 className="mb-3 text-2xl font-bold text-[#f4a631]">
              {recommendedSport.title}
            </h2>

            <p className="mb-4 text-sm leading-6 text-white/85">
              {recommendedSport.description}
            </p>

            <Link
              to="/programme"
              className="inline-flex items-center rounded-full bg-[#f4a631] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Voir les activités
            </Link>
          </div>
        )}

        {/* Progression */}
        <div className="mb-8">
          <p className="mb-4 text-[15px] text-[#4a4a4a] md:text-[16px]">
            Encore {maxPoints - points} points avant ton cours offert !
          </p>

          <div className="relative mb-2">
            <div className="h-4 w-full rounded-full bg-[#d9d9d9]" />
            <div
              className="absolute left-0 top-0 h-4 rounded-full bg-[#9be000]"
              style={{ width: `${progress}%` }}
            />
            <div className="absolute right-0 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6a437] text-white shadow">
              <Gift size={18} />
            </div>
          </div>

          <div className="flex justify-between text-[13px] text-[#707070]">
            <span>{points} points</span>
            <span>{maxPoints} points</span>
          </div>
        </div>

        {/* Checklist */}
        <div className="mb-6 rounded-2xl border border-[#e3e3e3] bg-white p-4 shadow-sm">
          <h2 className="mb-4 text-[16px] font-semibold text-[#1f57f0] md:text-[17px]">
            Mes premières foulées
          </h2>

          <div className="space-y-3">
            {steps.map((step) => (
              <div
                key={step.label}
                className={`flex items-center gap-2 text-[15px] ${
                  step.done ? "text-[#8d8d8d] line-through" : "text-[#333333]"
                }`}
              >
                {step.done ? (
                  <CheckCircle2 size={17} className="text-[#1f57f0]" />
                ) : (
                  <Circle size={17} className="text-[#d0d0d0]" />
                )}
                <span>{step.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl bg-[#fff4e8] px-3 py-3 text-center text-[13px] font-medium leading-5 text-[#ff8a00]">
            Continue comme ça ! Chaque étape te rapproche de ton objectif 🚀
          </div>
        </div>

        {/* Menu NAV */}
        <div className="mb-8 space-y-2">
          <Link
            to="/selection"
            className="flex w-full items-center justify-between rounded-xl bg-[#1649d8] px-4 py-4 text-white shadow-sm"
          >
            <div className="flex items-center gap-3">
              <Bookmark size={18} />
              <span className="text-[16px] font-medium">Ma sélection</span>
            </div>
            <ChevronRight size={18} />
          </Link>

          <Link
            to="/interactions"
            className="flex w-full items-center gap-3 rounded-xl px-2 py-3 text-[#f59e0b]"
          >
            <Lightbulb size={18} />
            <span className="text-[16px] font-medium">Mes interactions</span>
          </Link>

          <Link
            to="/donations"
            className="flex w-full items-center gap-3 rounded-xl px-2 py-3 text-[#f59e0b]"
          >
            <Heart size={18} />
            <span className="text-[16px] font-medium">Adhésion & Dons</span>
          </Link>

          <Link
            to="/preferences"
            className="flex w-full items-center gap-3 rounded-xl px-2 py-3 text-[#f59e0b]"
          >
            <SlidersHorizontal size={18} />
            <span className="text-[16px] font-medium">Mes préférences</span>
          </Link>

          <div className="my-2 border-t border-[#dddddd]" />

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-2 py-3 text-[#ef4444]"
          >
            <LogOut size={18} />
            <span className="text-[16px] font-medium">Se déconnecter</span>
          </button>
        </div>

        {/* Bloc texte */}
        <div className="mb-10">
          <h2 className="mb-4 text-[24px] font-bold leading-[1.2] text-[#202020] md:text-[32px]">
            Up Sport! : Unissez vos forces, partagez l'effort, vivez l'inclusion.
          </h2>

          <p className="mb-6 text-[16px] leading-7 text-[#2c2c2c]">
            rejoins une communauté bienveillante où chaque séance est un pas de
            plus vers l'inclusion, le partage et l'épanouissement, sans aucune
            barrière sociale ou financière
          </p>

          <Link
            to="/adhesion"
            className="block w-full rounded-xl bg-[#1649d8] px-4 py-4 text-center text-[18px] font-semibold text-white"
          >
            Adhérer
          </Link>
        </div>

        {/* Footer */}
        <div className="border-t border-[#d8d8d8] px-0 py-6 text-[12px] text-[#6f6f6f]">
          © 2026 Les Voies. Tous droits réservés.
        </div>
      </div>
    </main>
  );
}

export default Dashboard;