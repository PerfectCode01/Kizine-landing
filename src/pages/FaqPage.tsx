import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  HelpCircle,
  MapPin,
  Network,
  PackageCheck,
  ShoppingBag,
  Store,
  Truck,
  Utensils,
  Wheat,
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
          "KIZINE est une infrastructure de distribution alimentaire locale. Elle vise à mieux organiser l’approvisionnement, la production, la distribution et la livraison alimentaire à Kinshasa.",
      },
      {
        question: "KIZINE est-il seulement une application de commande ?",
        answer:
          "Non. L’application est une interface visible pour les utilisateurs, mais KIZINE construit surtout un écosystème qui connecte les acteurs de la chaîne alimentaire locale.",
      },
      {
        question: "Pourquoi parler d’infrastructure alimentaire ?",
        answer:
          "Parce que KIZINE ne se limite pas à vendre des repas. La plateforme structure les flux entre fournisseurs, cuisines, restaurants, livreurs et consommateurs.",
      },
    ],
  },
  {
    category: "Écosystème",
    icon: <Network size={20} />,
    questions: [
      {
        question: "Quels acteurs KIZINE connecte-t-il ?",
        answer:
          "KIZINE connecte progressivement les fournisseurs, restaurants, cuisines, points de distribution, livreurs et consommateurs au sein d’un même écosystème.",
      },
      {
        question: "Quel est le rôle des restaurants et cuisines ?",
        answer:
          "Les restaurants et cuisines participent à la production alimentaire. KIZINE leur apporte des outils pour présenter leurs offres, recevoir des commandes et mieux organiser la distribution.",
      },
      {
        question: "Les fournisseurs peuvent-ils rejoindre KIZINE ?",
        answer:
          "Oui. Les fournisseurs font partie de la vision KIZINE, car l’approvisionnement est un maillon essentiel pour rendre la chaîne alimentaire plus fiable.",
      },
    ],
  },
  {
    category: "Commande & précommande",
    icon: <ShoppingBag size={20} />,
    questions: [
      {
        question: "À quoi sert la commande sur KIZINE ?",
        answer:
          "La commande permet aux utilisateurs d’accéder plus simplement aux repas disponibles autour d’eux, tout en aidant les acteurs alimentaires à mieux gérer la demande.",
      },
      {
        question: "C’est quoi la précommande ?",
        answer:
          "La précommande permet d’anticiper un besoin alimentaire. Elle aide les utilisateurs à planifier leurs repas et les cuisines à mieux organiser leur production.",
      },
      {
        question: "La précommande est-elle obligatoire ?",
        answer:
          "Non. Elle complète la commande classique. Selon la disponibilité, l’utilisateur peut commander immédiatement ou planifier son repas pour un moment précis.",
      },
    ],
  },
  {
    category: "Distribution & livraison",
    icon: <Truck size={20} />,
    questions: [
      {
        question: "Comment KIZINE organise la livraison ?",
        answer:
          "La livraison est pensée comme un maillon de distribution. KIZINE cherche à mieux coordonner les commandes, les zones, les délais et les opérations de terrain.",
      },
      {
        question: "KIZINE livre dans quelles zones ?",
        answer:
          "KIZINE se développe à partir de Kinshasa. Les zones couvertes évoluent progressivement selon l’organisation opérationnelle et les partenaires disponibles.",
      },
      {
        question: "Que se passe-t-il si ma zone n’est pas couverte ?",
        answer:
          "L’application pourra vous indiquer que le service n’est pas encore disponible à votre adresse. L’objectif est d’étendre la couverture de manière maîtrisée.",
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
          "Restaurants, cuisines, fournisseurs, acteurs logistiques et autres professionnels de l’alimentation peuvent rejoindre l’écosystème KIZINE.",
      },
      {
        question: "Comment proposer un partenariat ?",
        answer:
          "Vous pouvez contacter l’équipe KIZINE via la page Contact. Les demandes sont étudiées selon leur lien avec l’approvisionnement, la production, la distribution ou la livraison alimentaire.",
      },
      {
        question: "KIZINE travaille-t-il avec des acteurs logistiques ?",
        answer:
          "Oui. La logistique est essentielle pour construire une distribution alimentaire plus fiable, plus locale et mieux coordonnée.",
      },
    ],
  },
];

const quickPoints = [
  {
    icon: <Wheat size={20} />,
    label: "Approvisionnement",
  },
  {
    icon: <Utensils size={20} />,
    label: "Production",
  },
  {
    icon: <PackageCheck size={20} />,
    label: "Distribution",
  },
  {
    icon: <Truck size={20} />,
    label: "Livraison",
  },
];

const supportTopics = [
  "Comprendre KIZINE",
  "Rejoindre l’écosystème",
  "Commande & précommande",
  "Zones de livraison",
  "Partenariats restaurants",
  "Partenariats logistiques",
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>("KIZINE-0");

  const toggleItem = (id: string) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO — gardé */}
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
              Retrouvez les réponses essentielles sur KIZINE, son écosystème, la
              commande, la précommande, la distribution et les partenariats.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="relative bg-[rgb(252,246,184)]/25 py-16 lg:py-24">
        <Container>
          <div className="-mt-28 grid gap-6 lg:grid-cols-[0.45fr_0.55fr] lg:gap-8">
            <motion.div
              className="rounded-[36px] border border-white bg-white p-7 shadow-[0_25px_80px_rgba(2,84,63,0.10)] lg:p-8"
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgb(0,143,108)]/10 text-[rgb(0,143,108)]">
                <Network size={26} />
              </div>

              <h2
                className="mt-6 text-3xl font-black leading-tight text-[rgb(2,84,63)] sm:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Une infrastructure alimentaire locale.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                KIZINE organise les maillons essentiels de la chaîne alimentaire
                pour rendre l’accès aux repas plus simple, plus fiable et mieux
                connecté.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-4 sm:grid-cols-2"
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
            >
              {quickPoints.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[28px] border border-white bg-white p-6 shadow-[0_18px_55px_rgba(2,84,63,0.08)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgb(0,143,108)]/10 text-[rgb(0,143,108)]">
                    {item.icon}
                  </div>

                  <p className="mt-5 text-lg font-black text-[rgb(2,84,63)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ CONTENT */}
      <section className="relative bg-white py-20 lg:py-28">
        <div className="pointer-events-none absolute -left-40 top-20 h-[360px] w-[360px] rounded-full bg-[rgb(0,143,108)]/10 blur-[110px]" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[rgb(255,209,45)]/20 blur-[120px]" />

        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
            {/* LEFT INFO */}
            <motion.aside
              className="h-fit rounded-[36px] bg-[rgb(2,84,63)] p-7 text-white shadow-[0_30px_90px_rgba(2,84,63,0.18)] lg:sticky lg:top-28"
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[rgb(252,246,184)]">
                <MapPin size={26} />
              </div>

              <h2
                className="mt-6 text-3xl font-black leading-tight text-[rgb(252,246,184)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                KIZINE connecte les acteurs alimentaires.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Cette FAQ explique comment la plateforme organise les flux entre
                les acteurs de l’approvisionnement, de la production, de la
                distribution et de la livraison.
              </p>

              <div className="mt-7 space-y-3">
                {supportTopics.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white/90 backdrop-blur-md"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[26px] bg-white p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[rgb(0,143,108)]">
                  Besoin d’une précision ?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Contactez-nous pour toute demande liée à l’écosystème KIZINE
                  ou à un partenariat.
                </p>
              </div>
            </motion.aside>

            {/* QUESTIONS */}
            <div className="space-y-6">
              {faqs.map((group, groupIndex) => (
                <motion.div
                  key={group.category}
                  className="overflow-hidden rounded-[34px] border border-gray-100 bg-white shadow-[0_25px_80px_rgba(2,84,63,0.08)]"
                  initial={{ y: 28, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: groupIndex * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex items-center gap-3 border-b border-gray-100 bg-[linear-gradient(135deg,#ffffff_0%,#f6fbf8_100%)] p-5 sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgb(0,143,108)]/10 text-[rgb(0,143,108)]">
                      {group.icon}
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[rgb(0,143,108)]">
                        Catégorie
                      </p>
                      <h2 className="mt-1 text-2xl font-black tracking-tight text-[rgb(2,84,63)]">
                        {group.category}
                      </h2>
                    </div>
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
                            <span className="text-base font-black text-[rgb(2,84,63)] sm:text-lg">
                              {item.question}
                            </span>

                            <span
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white text-[rgb(0,143,108)] shadow-sm transition ${
                                isOpen ? "rotate-180 bg-[rgb(0,143,108)] text-white" : ""
                              }`}
                            >
                              <ChevronDown size={18} />
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.25,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden"
                              >
                                <p className="px-5 pb-6 text-sm leading-relaxed text-gray-600 sm:px-7 sm:text-base">
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
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8faf9_100%)] py-20 lg:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-[38px] border border-[rgb(0,143,108)]/10 bg-[linear-gradient(135deg,rgb(252,246,184)_0%,#ffffff_42%,#f5fbf8_100%)] px-6 py-16 text-center shadow-[0_35px_100px_rgba(2,84,63,0.12)] md:rounded-[60px] md:px-12 md:py-24">
            <div className="pointer-events-none absolute -left-28 top-0 h-[320px] w-[320px] rounded-full bg-[rgb(0,143,108)]/12 blur-[100px]" />
            <div className="pointer-events-none absolute -right-28 bottom-0 h-[320px] w-[320px] rounded-full bg-[rgb(255,209,45)]/25 blur-[100px]" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgb(0,143,108)]/10 text-[rgb(0,143,108)]">
                <BarChart3 size={28} />
              </div>

              <h2
                className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-[rgb(2,84,63)] sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Vous souhaitez rejoindre l’écosystème KIZINE ?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                Restaurants, fournisseurs, cuisines ou partenaires logistiques :
                construisons ensemble une distribution alimentaire plus locale,
                plus fiable et mieux connectée.
              </p>

              <div className="mt-9 flex justify-center">
                <Button href="/contact">
                  <span className="inline-flex items-center gap-2">
                    Prendre contact
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