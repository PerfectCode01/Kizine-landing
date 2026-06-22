import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import { Link } from "react-router-dom";

export default function VisionSection() {
  return (
    <section className="bg-white py-10 lg:py-20">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-[var(--color-primary)]/10 bg-[var(--color-primary)]/5 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--color-primary)]">
            Notre vision
          </span>

          <h2
            className="mt-8 text-4xl font-black leading-[1.05] tracking-tight text-[var(--color-primary-dark)] sm:text-5xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Une nouvelle façon de
            <br />
            distribuer les repas localement.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
            KIZINE connecte les cuisines, restaurants et consommateurs à travers
            une plateforme simple qui facilite la commande, la précommande et la
            distribution alimentaire à l'échelle locale.
          </p>

          {/* <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-4xl font-black text-[var(--color-primary)]">
                24/7
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Commandes et précommandes
              </p>
            </div>

            <div>
              <p className="text-4xl font-black text-[var(--color-primary)]">
                Local
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Restaurants et cuisines partenaires
              </p>
            </div>

            <div>
              <p className="text-4xl font-black text-[var(--color-primary)]">
                Simple
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Une expérience rapide et fluide
              </p>
            </div>
          </div> */}

          <div className="mt-14">
            <Link to="/about">
              <Button variant="secondary">
                <span className="inline-flex items-center gap-2">
                  <span>
                      En savoir plus
                  </span>
                  <ArrowRight size={18} />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}