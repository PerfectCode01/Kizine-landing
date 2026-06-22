import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Network,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const faqs = [
  {
    category: "KIZINE",
    icon: <HelpCircle size={20} />,
    questions: [
      {
        question: "Qu’est-ce que KIZINE ?",
        answer:
          "KIZINE est une infrastructure de distribution alimentaire locale qui facilite l’approvisionnement, la production, la distribution et la livraison alimentaire à Kinshasa.",
      },
      {
        question: "KIZINE est-il seulement une application ?",
        answer:
          "Non. L’application est l’interface visible côté utilisateur. Derrière, KIZINE connecte les acteurs de la chaîne alimentaire locale.",
      },
    ],
  },
  {
    category: "Commande",
    icon: <ShoppingBag size={20} />,
    questions: [
      {
        question: "Comment commander sur KIZINE ?",
        answer:
          "L’utilisateur choisit un repas disponible, l’ajoute au panier, valide sa commande et suit les étapes prévues jusqu’à la livraison.",
      },
      {
        question: "C’est quoi la précommande ?",
        answer:
          "La précommande permet de planifier un repas à l’avance afin de réduire l’attente et mieux organiser la production.",
      },
      {
        question: "La précommande est-elle obligatoire ?",
        answer:
          "Non. Selon la disponibilité, l’utilisateur peut commander immédiatement ou précommander pour un moment précis.",
      },
    ],
  },
  {
    category: "Livraison",
    icon: <Truck size={20} />,
    questions: [
      {
        question: "KIZINE livre dans quelles zones ?",
        answer:
          "KIZINE se développe progressivement à Kinshasa. Les zones couvertes évoluent selon l’organisation opérationnelle et les partenaires disponibles.",
      },
      {
        question: "Que se passe-t-il si ma zone n’est pas couverte ?",
        answer:
          "L’application vous indiquera que le service n’est pas encore disponible à votre adresse.",
      },
    ],
  },
  {
    category: "Partenariats",
    icon: <Store size={20} />,
    questions: [
      {
        question: "Qui peut devenir partenaire KIZINE ?",
        answer:
          "Restaurants, cuisines, fournisseurs, acteurs logistiques et professionnels de l’alimentation peuvent rejoindre l’écosystème KIZINE.",
      },
      {
        question: "Comment proposer un partenariat ?",
        answer:
          "Vous pouvez contacter l’équipe KIZINE via la page Contact. Nous étudions les demandes liées à la production, la distribution ou la livraison alimentaire.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>("KIZINE-0");

  const toggleItem = (id: string) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,rgb(2,84,63)_0%,rgb(0,143,108)_55%,rgb(2,84,63)_100%)] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[rgb(255,209,45)]/25 blur-[120px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[rgb(252,246,184)]/15 blur-[120px]" />

        <Container>
          <motion.div
            className="relative mx-auto max-w-4xl text-center"
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[rgb(252,246,184)] backdrop-blur-md">
              <HelpCircle size={15} />
              FAQ KIZINE
            </span>

            <h1
              className="mt-7 text-5xl font-black leading-[1.02] tracking-tight text-[rgb(252,246,184)] sm:text-6xl lg:text-8xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Questions fréquentes.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Les réponses essentielles sur KIZINE, la commande, la livraison et
              les partenariats.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* FAQ CONTENT */}
      <section className="relative bg-[linear-gradient(180deg,rgb(252,246,184,0.24)_0%,#ffffff_100%)] py-16 lg:py-24">
        <div className="pointer-events-none absolute -left-40 top-20 h-[320px] w-[320px] rounded-full bg-[rgb(0,143,108)]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-[360px] w-[360px] rounded-full bg-[rgb(255,209,45)]/18 blur-[110px]" />

        <Container>
          <div className="mx-auto max-w-4xl">
            <motion.div
              className="-mt-28 mb-10 rounded-[30px] border border-white bg-white p-6 text-center shadow-[0_24px_70px_rgba(2,84,63,0.10)] sm:p-8"
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="mx-auto flex h-13 w-13 items-center justify-center rounded-2xl bg-[rgb(0,143,108)]/10 text-[rgb(0,143,108)]">
                <Network size={26} />
              </div>

              <h2
                className="mt-5 text-3xl font-black leading-tight text-[rgb(2,84,63)] sm:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                KIZINE en quelques réponses.
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Une lecture simple pour comprendre notre rôle dans la
                distribution alimentaire locale.
              </p>
            </motion.div>

            <div className="space-y-5">
              {faqs.map((group, groupIndex) => (
                <motion.div
                  key={group.category}
                  className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_18px_55px_rgba(2,84,63,0.07)]"
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: groupIndex * 0.04,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-5 sm:px-7">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[rgb(0,143,108)]/10 text-[rgb(0,143,108)]">
                      {group.icon}
                    </div>

                    <h2 className="text-xl font-black tracking-tight text-[rgb(2,84,63)] sm:text-2xl">
                      {group.category}
                    </h2>
                  </div>

                  <div>
                    {group.questions.map((item, index) => {
                      const id = `${group.category}-${index}`;
                      const isOpen = openItem === id;

                      return (
                        <div
                          key={id}
                          className="border-b border-gray-100 last:border-b-0"
                        >
                          <button
                            type="button"
                            onClick={() => toggleItem(id)}
                            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-[rgb(0,143,108)]/5 sm:px-7"
                          >
                            <span className="text-sm font-black leading-snug text-[rgb(2,84,63)] sm:text-base">
                              {item.question}
                            </span>

                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white text-[rgb(0,143,108)] shadow-sm transition ${
                                isOpen
                                  ? "rotate-180 bg-[rgb(0,143,108)] text-white"
                                  : ""
                              }`}
                            >
                              <ChevronDown size={17} />
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.22,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden"
                              >
                                <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 sm:px-7 sm:text-base">
                                  {item.answer}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] border border-[rgb(0,143,108)]/10 bg-[linear-gradient(135deg,rgb(252,246,184)_0%,#ffffff_48%,#f5fbf8_100%)] px-6 py-14 text-center shadow-[0_28px_80px_rgba(2,84,63,0.10)] md:rounded-[52px] md:px-12 md:py-20">
            <div className="relative mx-auto max-w-2xl">
              <h2
                className="text-3xl font-black leading-[1.05] tracking-tight text-[rgb(2,84,63)] sm:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Une autre question ?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Contactez-nous pour une demande d’information, un partenariat ou
                une précision sur KIZINE.
              </p>

              <div className="mt-8 flex justify-center">
                <Button href="/contact">
                  <span className="inline-flex items-center gap-2">
                    Nous contacter
                    <ArrowRight size={18} />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}