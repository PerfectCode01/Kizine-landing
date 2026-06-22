import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "" },
    { label: "A propos", href: "about" },
    { label: "Faq", href: "faq" },
    { label: "Contact", href: "contact" },

  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto max-w-7xl rounded-[2rem] border border-white/60 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md md:rounded-full md:px-5 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="KIZINE" className="h-8 w-auto md:h-9" />
          </Link>

          <div className="hidden items-center gap-8 text-sm font-semibold text-gray-700 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                to={`/${link.href}`}
                className="transition hover:text-[var(--color-primary)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-white md:hidden"
            aria-label="Ouvrir le menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 border-t border-gray-100 pt-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm font-semibold text-gray-700">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={`/${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="rounded-full px-4 py-3 transition hover:bg-gray-50 hover:text-[var(--color-primary)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}