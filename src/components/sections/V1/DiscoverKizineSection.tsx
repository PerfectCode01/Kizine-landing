import { motion } from "framer-motion";

import Container from "../../ui/Container";

import restaurantImage from "../../../assets/v1/ecosystem-restaurants.png";
import scheduleImage from "../../../assets/v1/ecosystem-schedule.png";
import deliveryImage from "../../../assets/v1/ecosystem-delivery.png";

const sections = [
  {
    number: "01",
    label: "Restaurants",
    title: "Des cuisines locales, prêtes à vous servir.",
    description:
      "Découvrez les établissements qui proposent leurs repas sur KIZINE chaque jour.",
    image: restaurantImage,
  },
  {
    number: "02",
    label: "Commande flexible",
    title: "Commandez maintenant ou planifiez plus tard.",
    description:
      "Choisissez le moment qui vous convient, que ce soit pour tout de suite ou pour plus tard.",
    image: scheduleImage,
  },
  {
    number: "03",
    label: "Livraison locale",
    title: "Votre repas arrive au bon moment.",
    description:
      "Des commandes préparées et livrées dans votre zone, selon le créneau choisi.",
    image: deliveryImage,
  },
];

export default function DiscoverKizineSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[var(--color-secondary-light)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary-dark)]">
            Découvrez KIZINE
          </span>

          <h2
            className="mt-6 text-4xl font-bold tracking-tight text-[var(--color-primary-dark)] md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Une nouvelle façon de commander vos repas.
          </h2>
        </div>

        <div className="mt-20 grid gap-8">
          {sections.map((section, index) => (
            <motion.article
              key={section.title}
              className={`group relative overflow-hidden rounded-[40px] md:rounded-[56px] ${
                index === 1 ? "lg:ml-auto lg:w-[82%]" : "lg:w-[92%]"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <img
                src={section.image}
                alt={section.title}
                className="h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[620px]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-end">
                <div className="max-w-2xl p-8 md:p-14 lg:p-16">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-[var(--color-primary-dark)]">
                      {section.number}
                    </span>

                    <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      {section.label}
                    </span>
                  </div>

                  <h3
                    className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {section.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                    {section.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}