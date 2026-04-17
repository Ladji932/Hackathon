import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Program() {
  const targetDate = new Date("2027-05-06T00:00:00");

  const getTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        years: "00",
        months: "00",
        days: "00",
      };
    }

    const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));

    const years = Math.floor(totalDays / 365);
    const remainingDaysAfterYears = totalDays % 365;
    const months = Math.floor(remainingDaysAfterYears / 30);
    const days = remainingDaysAfterYears % 30;

    return {
      years: String(years).padStart(2, "0"),
      months: String(months).padStart(2, "0"),
      days: String(days).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const activities = [
    {
      title: "BASKIN",
      association: "Par Novosports",
      time: "9h15",
      level: "Initiations",
      description:
        "Une version inclusive du basket où chacun trouve sa place, quels que soient ses capacités ou son expérience.",
    },
    {
      title: "YOGA",
      association: "Par Yoga and Sport With Refugees",
      time: "10h00",
      level: "Tous niveaux",
      description:
        "Séance douce et accessible à tous pour se reconnecter à son corps, respirer et relâcher les tensions dans un cadre bienveillant.",
    },
    {
      title: "CÉCIFOOT",
      association: "Par UFOLEP",
      time: "11h00",
      level: "Débutants",
      description:
        "Découverte du foot adapté aux personnes malvoyantes pour expérimenter le jeu autrement et sensibiliser au handicap.",
    },
    {
      title: "ZUMBA",
      association: "Par Moove Toi",
      time: "14h00",
      level: "Tous niveaux",
      description:
        "Session dynamique et festive pour bouger en musique, accessible à tous dans une ambiance collective.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-5 py-10">
      <section className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="mb-4 text-[34px] font-extrabold leading-none text-[#1f57f0] md:text-[58px]">
            Le Festival Solimouv’
          </h1>

          <p className="mx-auto mb-8 max-w-4xl text-[16px] leading-7 text-[#2a2a2a] md:text-[22px]">
            Des activités variées, des rencontres enrichissantes, et une
            atmosphère où chacun trouve sa place, quel que soit son niveau ou
            ses capacités.
          </p>

          {/* Compte à rebours */}
          <div className="mb-8 flex items-start justify-center gap-2 md:gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-[#eef2e4] text-[44px] font-light text-[#83b82c] md:h-28 md:w-28 md:text-[72px]">
                {timeLeft.years}
              </div>
              <span className="mt-2 text-[16px] font-semibold text-[#342414] md:text-[22px]">
                Années
              </span>
            </div>

            <div className="pt-4 text-[42px] font-light text-[#83b82c] md:pt-6 md:text-[72px]">
              :
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-[#eef2e4] text-[44px] font-light text-[#83b82c] md:h-28 md:w-28 md:text-[72px]">
                {timeLeft.months}
              </div>
              <span className="mt-2 text-[16px] font-semibold text-[#342414] md:text-[22px]">
                Mois
              </span>
            </div>

            <div className="pt-4 text-[42px] font-light text-[#83b82c] md:pt-6 md:text-[72px]">
              :
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-[#eef2e4] text-[44px] font-light text-[#83b82c] md:h-28 md:w-28 md:text-[72px]">
                {timeLeft.days}
              </div>
              <span className="mt-2 text-[16px] font-semibold text-[#342414] md:text-[22px]">
                Jours
              </span>
            </div>
          </div>

          <Link
            to="/reservation"
            className="inline-flex min-h-[52px] min-w-[280px] items-center justify-center rounded-full bg-[#245fdd] px-8 text-[18px] font-medium text-white transition hover:bg-[#1d4fc0] md:min-w-[360px]"
          >
            Je réserve ma place
          </Link>
        </div>

        {/* Programmation */}
        <div className="mt-16">
          <h2 className="mb-8 text-center text-[34px] font-extrabold text-[#1f57f0] md:mb-12 md:text-[58px]">
            Programmation
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {activities.map((activity) => (
              <article
                key={`${activity.title}-${activity.time}`}
                className="rounded-[24px] bg-[#edf1f7] px-6 py-5"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[20px] font-bold text-[#1f57f0] md:text-[28px]">
                      {activity.title}
                    </h3>
                    <p className="text-[16px] text-[#1f57f0] md:text-[22px]">
                      {activity.association}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[16px] font-semibold text-[#1f57f0] md:text-[22px]">
                      {activity.time}
                    </p>
                    <p className="text-[15px] text-[#1f57f0] md:text-[20px]">
                      {activity.level}
                    </p>
                  </div>
                </div>

                <p className="text-[16px] leading-7 text-[#1f1f1f] md:text-[22px] md:leading-9">
                  {activity.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Program;