function Login() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-5 py-16">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-600">
          Connexion
        </p>
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">
          Se connecter
        </h1>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="vous@example.com"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="password">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Connexion
          </button>
        </form>
      </div>
    </section>
  )
}

export default Login