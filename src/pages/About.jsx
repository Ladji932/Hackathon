function About() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-600">
        À propos
      </p>
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
        Up Sport! et Solimouv’
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold">Up Sport!</h2>
          <p className="text-slate-600">
            Présentation de l’association, de sa mission et de son engagement.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold">Solimouv’</h2>
          <p className="text-slate-600">
            Présentation du festival, de ses objectifs et de son impact.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About