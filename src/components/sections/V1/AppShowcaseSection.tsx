import { CalendarClock, MapPin, ShoppingBag } from "lucide-react";

import Container from "../../ui/Container";
import Button from "../../ui/Button";

const features = [
  {
    icon: <ShoppingBag size={22} />,
    title: "Commandez",
    text: "Découvrez les repas disponibles et passez commande rapidement.",
  },
  {
    icon: <CalendarClock size={22} />,
    title: "Précommandez",
    text: "Réservez votre repas à l'avance et choisissez le bon moment.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Suivez",
    text: "Gardez une visibilité claire sur votre commande jusqu'à la livraison.",
  },
];

export default function AppShowcaseSection() {
  return (
    <section id="app" className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="inline-flex rounded-full bg-[var(--color-secondary-light)] px-4 py-2 text-sm font-semibold text-[var(--color-primary-dark)]">
              L'application KIZINE
            </span>

            <h2
              className="mt-6 text-5xl leading-none text-[var(--color-primary-dark)] md:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Une seule app pour toute votre expérience alimentaire.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              Depuis votre téléphone, commandez, précommandez et suivez vos
              repas avec une expérience simple, rapide et connectée.
            </p>

            <div className="mt-8">
              <Button href="#download">Télécharger l'application</Button>
            </div>
          </div>

          <div className="grid gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-5 rounded-[32px] border border-gray-100 bg-[#F8FFFB] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-primary-dark)]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-gray-500">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}