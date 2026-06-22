import { Clock, ShieldCheck, Truck } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../../ui/Container";
import Button from "../../ui/Button";

import preorderMeal from "../../../assets/v1/hero-meal.png";

const benefits = [
  {
    icon: <Clock size={22} />,
    title: "Gagnez du temps",
    text: "Votre repas est déjà prévu avant votre arrivée.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Repas réservé",
    text: "Précommandez avant les ruptures et sécurisez votre plat.",
  },
  {
    icon: <Truck size={22} />,
    title: "Livraison planifiée",
    text: "Recevez votre commande au moment qui vous convient.",
  },
];

export default function PreorderSection() {
  return (
    <section
      id="preorder"
      className="relative overflow-hidden bg-[#FFFCF4] py-24 md:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[var(--color-primary)]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[var(--color-secondary)]/25 blur-[120px]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary-dark)] shadow-sm">
            Précommande
          </span>

          <h2
            className="mt-6 text-5xl leading-none text-[var(--color-primary-dark)] md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ne faites plus la queue.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Réservez votre repas à l'avance et recevez-le au moment qui vous
            convient.
          </p>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            className="relative flex min-h-[420px] items-center justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute h-[360px] w-[360px] rounded-full bg-[var(--color-secondary)]/30 blur-[100px]" />

            <img
              src={preorderMeal}
              alt="Repas en précommande KIZINE"
              className="relative z-10 w-full max-w-[520px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.22)]"
            />
          </motion.div>

          <div className="space-y-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm"
                initial={{ y: 28, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {benefit.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-primary-dark)]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 leading-relaxed text-gray-500">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="pt-3">
              <Button href="#menu">Précommander maintenant</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}