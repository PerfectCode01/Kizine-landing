import { ChefHat, Store, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../../ui/Container";

const partners = [
  {
    icon: <Store size={24} />,
    title: "Restaurants du quartier",
    text: "Des établissements proches de vous proposent leurs menus chaque jour.",
  },
  {
    icon: <ChefHat size={24} />,
    title: "Cuisines locales",
    text: "Des cuisines indépendantes partagent leurs spécialités avec votre zone.",
  },
  {
    icon: <UtensilsCrossed size={24} />,
    title: "Traiteurs et concepts food",
    text: "De nouvelles offres rejoignent progressivement l’écosystème KIZINE.",
  },
];

export default function PartnerRestaurantsSection() {
  return (
    <section className="bg-[var(--color-primary-dark)] py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              Partenaires
            </span>

            <h2
              className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Des restaurants et cuisines locales sur KIZINE.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg lg:justify-self-end">
            Chaque établissement apporte son menu, son rythme et sa spécialité
            pour enrichir l’offre disponible autour de vous.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.title}
              className="rounded-[32px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                {partner.icon}
              </div>

              <h3 className="mt-8 text-xl font-bold text-white">
                {partner.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-base">
                {partner.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}