function Home() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-600">
            Festival solidaire et sportif
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Bienvenue sur Solimouv’
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Une PWA pour découvrir le festival, les ateliers, les associations
            partenaires et toutes les informations utiles.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/programme"
              className="rounded-full bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Voir le programme
            </a>
            <a
              href="/contact"
              className="rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Nous contacter
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Infos clés</h2>
          <ul className="space-y-3 text-slate-600">
            <li>Application installable sur mobile et desktop</li>
            <li>Navigation simple et rapide</li>
            <li>Programme et partenaires accessibles facilement</li>
            <li>Base prête pour intégrer les maquettes UX</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home