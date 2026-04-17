import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";
import logo from "../assets/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const rawUser = localStorage.getItem("user");
  let user = null;

  try {
    user = rawUser ? JSON.parse(rawUser) : null;
  } catch {
    user = null;
  }

  const isLoggedIn = !!user;

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("quizResult");
    setIsOpen(false);
    navigate("/login");
  };

  const navItems = [
    { to: "/programme", label: "Programmation" },
    { to: "/actualites", label: "Actualités" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f2f2f2]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
        {/* Logo */}
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="Solimouv Festival"
            className="h-10 w-auto object-contain md:h-12"
          />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="rounded-full bg-[#2f5bd3] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#244bb5]"
            >
              {item.label}
            </NavLink>
          ))}

          {isLoggedIn ? (
            <>
              <NavLink
                to="/dashboard"
                className="flex items-center gap-2 rounded-full border border-[#2f5bd3] bg-white px-4 py-2 text-sm font-medium text-[#2f5bd3] transition hover:bg-[#f0f4ff]"
              >
                <User size={16} />
                Profil
              </NavLink>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
              >
                <LogOut size={16} />
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="rounded-full border border-[#2f5bd3] px-5 py-2 text-sm font-medium text-[#2f5bd3] transition hover:bg-[#f0f4ff]"
              >
                Connexion
              </NavLink>

              <NavLink
                to="/signup"
                className="rounded-full bg-[#2f5bd3] px-6 py-2 text-sm font-medium text-white transition hover:bg-[#244bb5]"
              >
                Inscription
              </NavLink>
            </>
          )}
        </nav>

        {/* Burger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2f5bd3] text-white transition-all duration-300 hover:bg-[#244bb5] md:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-[#f2f2f2] transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div
          className={`px-5 pb-4 pt-3 transition-all duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-3"
          }`}
        >
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-[#2f5bd3] px-5 py-3 text-center text-sm font-medium text-white"
              >
                {item.label}
              </NavLink>
            ))}

            {isLoggedIn ? (
              <>
                <NavLink
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-[#2f5bd3]"
                >
                  Profil
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="rounded-full bg-red-500 px-5 py-3 text-center text-sm font-medium text-white"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-[#2f5bd3] px-5 py-3 text-center text-sm font-medium text-[#2f5bd3]"
                >
                  Connexion
                </NavLink>

                <NavLink
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-[#2f5bd3] px-5 py-3 text-center text-sm font-medium text-white"
                >
                  Inscription
                </NavLink>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;