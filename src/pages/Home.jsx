import { Link } from "react-router-dom";
import { Share2 } from "lucide-react";
import homeImage from "../assets/home-image.png";

function Home() {
  const quizDone = !!localStorage.getItem("quizResult");

  return (
    <main className="bg-[#f3f3f3]">
      <section className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
        {/* HERO */}
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          {/* Texte */}
          <div className="order-1">
            <h1 className="mb-3 text-[34px] font-extrabold leading-none text-[#1f57f0] md:text-[56px]">
              Le Festival
              <br />
              Solimouv’
            </h1>

            <p className="mb-6 max-w-md text-[18px] leading-7 text-[#2d2d2d]">
              Des activités variées, des rencontres enrichissantes, et une
              atmosphère où chacun trouve sa place, quel que soit son niveau ou
              ses capacités.
            </p>

            <Link
              to="/reservation"
              className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#1f57f0] px-6 text-[18px] font-medium text-white transition hover:bg-[#1849cf] md:w-[320px]"
            >
              Je réserve ma place
            </Link>
          </div>

          {/* Image */}
          <div className="order-2">
            <div className="overflow-hidden rounded-[36px] bg-white shadow-sm">
              <img
                src={homeImage}
                alt="Festival Solimouv"
                className="h-[360px] w-full object-cover md:h-[520px]"
              />
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2">
          {/* Card Quiz */}
          <div className="rounded-[28px] bg-[#f1e8dc] p-5 shadow-sm">
            <p className="mb-2 text-[18px] font-medium text-[#f49a16]">
              Quizz - 2 minutes
            </p>

            <h2 className="mb-3 text-[28px] font-semibold leading-tight text-[#171717]">
              Quel sport est fait pour vous ?
            </h2>

            <p className="mb-6 text-[18px] leading-7 text-[#222222]">
              Pas facile de savoir par où commencer. Quelques questions simples,
              et on vous propose le sport qui vous correspond.
            </p>

            <div className="flex items-center gap-3">
              {!quizDone ? (
                <>
                  <Link
                    to="/quiz"
                    className="flex-1 rounded-full bg-[#f4a631] px-6 py-4 text-center text-[18px] font-medium text-[#1f1f1f] transition hover:bg-[#ea9b21]"
                  >
                    Je découvre mon sport
                  </Link>

                  <button
                    type="button"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f4a631] text-white transition hover:bg-[#ea9b21]"
                  >
                    <Share2 size={22} />
                  </button>
                </>
              ) : (
                <Link
                  to="/dashboard"
                  className="w-full rounded-full bg-[#1f57f0] px-6 py-4 text-center text-[18px] font-medium text-white transition hover:bg-[#1849cf]"
                >
                  Voir mon résultat
                </Link>
              )}
            </div>
          </div>

          {/* Card Adhésion */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#eef1f7] p-5 shadow-sm">
            <div className="pointer-events-none absolute -right-10 -bottom-16 text-[280px] leading-none text-[#f4a631]/90">
              ↜
            </div>

            <div className="relative z-10">
              <h2 className="mb-3 text-[28px] font-semibold leading-tight text-[#171717]">
                Adhérer à <span className="text-[#f49a16]">Up Sport</span>,
                c’est choisir un sport qui ne laisse personne sur le banc.
              </h2>

              <p className="mb-6 text-[18px] leading-7 text-[#222222]">
                Ensemble, construisons une pratique sportive inclusive et
                accessible à tous.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  to="/adhesion"
                  className="rounded-full bg-[#1f57f0] px-8 py-4 text-[18px] font-medium text-white transition hover:bg-[#1849cf]"
                >
                  Je contribue
                </Link>

                <button
                  type="button"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1f57f0] text-white transition hover:bg-[#1849cf]"
                >
                  <Share2 size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* A PROPOS */}
        <div className="mt-12 md:mt-16">
          <div className="mx-auto max-w-[430px] md:max-w-3xl">
            <h2 className="mb-5 text-[30px] font-extrabold leading-[1.05] text-[#171717] md:text-[48px]">
              À propos de <span className="text-[#f49a16]">Solimouv</span> :
              <br />
              L'histoire de notre festival
              <br />
              du sport <span className="text-[#1f57f0] inclusif">inclusif</span> à Paris
            </h2>

            <div className="space-y-4 text-[16px] leading-7 text-[#222222] md:text-[18px]">
              <p>
                Derrière chaque grand événement, il y a une équipe de passionnés
                et une conviction profonde. Le Festival Solimouv est né d’une
                idée simple mais puissante : le terrain de sport doit être un
                espace où chacun a sa place, sans jugement ni barrière.
              </p>

              <p>
                Porté par l’association Up Sport ! et soutenu par un solide
                réseau de partenaires, Solimouv est aujourd’hui le rendez-vous
                incontournable du sport solidaire et inclusif en Île-de-France.
              </p>
            </div>

            <Link
              to="/reservation"
              className="mt-6 inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#1f57f0] px-6 text-[18px] font-medium text-white transition hover:bg-[#1849cf] md:w-[320px]"
            >
              Je réserve ma place
            </Link>

            <div className="mt-6 space-y-4">
              <div className="relative overflow-hidden rounded-[18px] bg-[#eef1f7] p-5 shadow-sm">
                <div className="pointer-events-none absolute -left-8 bottom-0 h-12 w-40 rounded-t-full bg-[#b8dd61] opacity-80" />
                <div className="relative z-10">
                  <h3 className="mb-3 text-[24px] font-bold leading-tight text-[#171717]">
                    Nos <span className="text-[#f49a16]">valeurs</span> :
                    <br />
                    Les 2 piliers de notre engagement sportif
                  </h3>

                  <p className="text-[16px] leading-7 text-[#222222]">
                    Le Festival Solimouv ne se limite pas à la performance
                    physique. Notre démarche repose sur des fondations solides,
                    pensées pour avoir un impact social durable :
                  </p>
                </div>
              </div>

              <div className="rounded-[18px] bg-[#f8efe2] p-5 shadow-sm">
                <h3 className="mb-3 text-[22px] font-bold leading-tight text-[#171717]">
                  <span className="text-[#f49a16]">La Mixité</span> et la{" "}
                  <span className="text-[#f49a16]">Tolérance</span> :
                </h3>

                <p className="text-[16px] leading-7 text-[#222222]">
                  Solimouv est une safe space (un espace sécurisant). Nous
                  célébrons la diversité intersectionnelle et luttons activement
                  contre les discriminations (notamment envers la communauté
                  LGBTQIA+).
                </p>
              </div>

              <div className="rounded-[18px] bg-[#f8efe2] p-5 shadow-sm">
                <h3 className="mb-3 text-[22px] font-bold leading-tight text-[#171717]">
                  <span className="text-[#f49a16]">L’Accessibilité</span>{" "}
                  (Sport adapté et Parasport) :
                </h3>

                <p className="text-[16px] leading-7 text-[#222222]">
                  Nous mettons en lumière des disciplines pensées pour les
                  personnes à mobilité réduite (PMR) ou en situation de handicap
                  cognitif, prouvant que le mouvement appartient à tous.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-[32px] font-extrabold leading-[1.05] text-[#1f57f0] md:text-[42px]">
                Rejoignez le mouvement
                <br />
                Solimouv !
              </h3>

              <div className="space-y-4 text-[16px] leading-7 text-[#222222] md:text-[18px]">
                <p>
                  Solimouv est plus qu’un festival, c’est un état d’esprit.
                </p>

                <p>
                  Que vous souhaitiez découvrir de nouvelles pratiques,
                  débattre des enjeux du sport pour tous, ou vous engager en
                  tant que bénévole ou partenaire financier, votre place est
                  parmi nous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;