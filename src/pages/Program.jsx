function Program() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-600">
        Programme
      </p>
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
        Ateliers et temps forts
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold">Atelier 1</h2>
          <p className="text-slate-600">Description courte de l’atelier.</p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold">Atelier 2</h2>
          <p className="text-slate-600">Description courte de l’atelier.</p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold">Temps fort</h2>
          <p className="text-slate-600">Moment clé du festival à mettre en avant.</p>
        </article>
      </div>
    </section>
  )
}

export default Program