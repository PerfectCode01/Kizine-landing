import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Vision", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto max-w-7xl rounded-[2rem] border border-white/60 bg-white/90 px-4 py-3 shadow-[0_10px_40px_rgba(2,84,63,0.08)] backdrop-blur-md md:rounded-full md:px-5 md:py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="KIZINE"
              className="h-8 w-auto md:h-9"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-2 md:flex">
            {links.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`
                    rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "bg-[rgb(0,143,108)] text-white shadow-lg shadow-[rgb(0,143,108)]/20"
                        : "text-gray-700 hover:bg-[rgb(0,143,108)]/5 hover:text-[rgb(0,143,108)]"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(0,143,108)] text-white transition hover:scale-105 md:hidden"
            aria-label="Ouvrir le menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="mt-4 border-t border-gray-100 pt-4 md:hidden">
            <div className="flex flex-col gap-2">
              {links.map((link) => {
                const isActive = location.pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300
                      ${
                        isActive
                          ? "bg-[rgb(0,143,108)] text-white"
                          : "text-gray-700 hover:bg-[rgb(0,143,108)]/5 hover:text-[rgb(0,143,108)]"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}