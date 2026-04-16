function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-600">
        Contact
      </p>
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
        Nous contacter
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold">Organisation</h2>
          <p className="mb-3 text-slate-600">
            Pour toute question sur Solimouv’ ou Up Sport!.
          </p>
          <a className="text-red-600 hover:underline" href="mailto:contact@solimouv.fr">
            contact@solimouv.fr
          </a>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold">Infos pratiques</h2>
          <p className="text-slate-600">
            Adresse, horaires, accès et informations complémentaires à venir.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Contact