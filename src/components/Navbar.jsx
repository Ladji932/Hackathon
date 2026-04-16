import { NavLink } from "react-router-dom"

function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition hover:text-red-500 ${
      isActive ? "text-red-600" : "text-slate-600"
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <NavLink to="/" className="text-xl font-bold text-slate-900">
          Solimouv’
        </NavLink>

        <div className="flex flex-wrap items-center gap-4">
          <nav
            className="flex flex-wrap items-center gap-4"
            aria-label="Navigation principale"
          >
            <NavLink to="/" className={linkClass}>
              Accueil
            </NavLink>
            <NavLink to="/apropos" className={linkClass}>
              À propos
            </NavLink>
            <NavLink to="/programme" className={linkClass}>
              Programme
            </NavLink>
            <NavLink to="/associations" className={linkClass}>
              Associations
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              Connexion
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-red-700 text-white"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`
              }
            >
              Inscription
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar