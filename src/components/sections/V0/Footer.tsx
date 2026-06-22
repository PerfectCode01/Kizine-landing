import { Link } from "react-router-dom";
import Container from "../../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#021F18] py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3
              className="text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              KIZINE
            </h3>

            <p className="mt-3 max-w-sm text-white/60">
              Votre cuisine connectée. Une infrastructure locale pour gérer,
              vendre et distribuer autrement.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Navigation</h4>

            <div className="mt-4 space-y-3 text-white/60">
              <Link to="/" className="block hover:text-white">
                Accueil
              </Link>
              <Link to="/faq" className="block hover:text-white">
                Comment ça marche
              </Link>
              <Link to="/contact" className="block hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold">Contact</h4>

            <div className="mt-4 space-y-3 text-white/60">
              <p>contact@kizine.app</p>
              <p>Kinshasa, RDC</p>
              <p>Programme pilote restaurants</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/40">
          © 2026 KIZINE. Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
}