import Container from "../../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3
              className="text-2xl text-[var(--color-primary-dark)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              KIZINE
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Commandez, précommandez et recevez vos repas simplement.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm font-medium text-gray-600">
            <a href="#menu" className="hover:text-[var(--color-primary)]">
              Menu
            </a>

            <a href="/vision" className="hover:text-[var(--color-primary)]">
              Vision
            </a>

            <a href="#download" className="hover:text-[var(--color-primary)]">
              Télécharger
            </a>

            <a href="/contact" className="hover:text-[var(--color-primary)]">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} KIZINE. Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
}