import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")); // 👈 check login

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive
        ? "text-[#3433a7]"
        : "text-slate-600 hover:text-[#3433a7]"
    }`;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <NavLink to="/" className="text-lg font-semibold text-slate-900">
          Solimouv’
        </NavLink>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
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

        {/* Partie droite */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              {/* Mon espace */}
              <NavLink
                to="/dashboard"
                className="rounded-lg border border-[#3433a7] px-4 py-2 text-sm font-medium text-[#3433a7] hover:bg-[#3433a7] hover:text-white transition"
              >
                Mon espace
              </NavLink>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="text-sm text-slate-500 hover:text-red-600"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Connexion
              </NavLink>

              <NavLink
                to="/signup"
                className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
              >
                Inscription
              </NavLink>
            </>
          )}
        </div>

      </div>
    </header>
  );
}

export default Navbar;