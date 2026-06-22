import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CookingPot,
  MapPin,
  Network,
  PackageCheck,
  ShoppingBag,
  Store,
  Truck,
  Utensils,
  Wheat,
} from "lucide-react";
import { motion } from "framer-motion";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

import mealsImage from "../assets/v1/meal1.jpg";
import heroMeal from "../assets/v1/hero-meal2.png";

const colors = {
  viride: "rgb(0,143,108)",
  sapin: "rgb(2,84,63)",
  aureolin: "rgb(255,209,45)",
  champagne: "rgb(252,246,184)",
};

const chainItems = [
  {
    icon: <Wheat size={24} />,
    title: "Approvisionnement",
    text: "Organisation des flux entre fournisseurs et acteurs de production.",
  },
  {
    icon: <CookingPot size={24} />,
    title: "Production",
    text: "Restaurants, cuisines et unités de préparation alimentaire.",
  },
  {
    icon: <PackageCheck size={24} />,
    title: "Distribution",
    text: "Gestion de la disponibilité et de la circulation des repas et produits.",
  },
  {
    icon: <Truck size={24} />,
    title: "Livraison",
    text: "Acheminement des commandes vers les consommateurs.",
  },
];

const tools = [
  {
    icon: <Store size={24} />,
    title: "Catalogue numérique",
    text: "Présenter les produits et repas disponibles.",
  },
  {
    icon: <ShoppingBag size={24} />,
    title: "Commande",
    text: "Simplifier les achats et les réservations.",
  },
  {
    icon: <Utensils size={24} />,
    title: "Précommande",
    text: "Anticiper la demande et mieux organiser la production.",
  },
  {
    icon: <Truck size={24} />,
    title: "Livraison",
    text: "Coordonner les opérations de terrain.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Données",
    text: "Mieux comprendre les besoins du marché local.",
  },
];

const ecosystem = [
  "Producteurs",
  "Fournisseurs",
  "Restaurants",
  "Cuisines",
  "Livreurs",
  "Consommateurs",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section
        className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{
          background: `radial-gradient(circle at 80% 20%, rgba(255,209,45,0.22), transparent 30%),
          linear-gradient(135deg, ${colors.sapin} 0%, ${colors.viride} 52%, ${colors.sapin} 100%)`,
        }}
      >
        <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[rgb(255,209,45)]/25 blur-[120px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[rgb(252,246,184)]/15 blur-[120px]" />

        <Container>
          <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
            <motion.div
              className="relative z-10 text-center lg:text-left"
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[rgb(252,246,184)] backdrop-blur-md">
                KIZINE
              </span>

              <h1
                className="mt-7 text-5xl font-black leading-[0.98] tracking-tight text-[rgb(252,246,184)] sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Infrastructure de distribution alimentaire locale
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:mx-0">
                Nous organisons l’approvisionnement, la production, la
                distribution et la livraison alimentaire à Kinshasa.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Button href="#vision">
                  <span className="inline-flex items-center gap-2">
                    Découvrir notre vision
                    <ArrowRight size={18} />
                  </span>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ scale: 0.92, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: -6 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="absolute inset-0 rounded-full bg-[rgb(255,209,45)]/20 blur-[90px]" />
              <img
                src={heroMeal}
                alt="Repas KIZINE"
                className="relative z-10 w-full max-w-[560px] drop-shadow-[0_35px_90px_rgba(0,0,0,0.35)]"
              />

              <div className="absolute bottom-6 left-2 z-20 rounded-[28px] border border-white/15 bg-white/90 px-6 py-5 shadow-2xl backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[rgb(0,143,108)]">
                  Chaîne alimentaire
                </p>
                <p className="mt-1 text-lg font-black text-[rgb(2,84,63)]">
                  Produire. Distribuer. Livrer.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* PROBLEM */}
      <section className="relative bg-white py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div
              className="relative overflow-hidden rounded-[38px] shadow-[0_35px_100px_rgba(2,84,63,0.14)] md:rounded-[56px]"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img
                src={mealsImage}
                alt="Distribution alimentaire locale"
                className="h-[430px] w-full object-cover lg:h-[560px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(2,84,63)]/85 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/15 bg-white/90 p-6 shadow-2xl backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[rgb(0,143,108)]">
                  Le défi
                </p>
                <p className="mt-2 text-xl font-black leading-tight text-[rgb(2,84,63)]">
                  Des flux alimentaires encore trop fragmentés.
                </p>
              </div>
            </motion.div>

            <div>
              <span className="inline-flex rounded-full border border-[rgb(0,143,108)]/10 bg-[rgb(0,143,108)]/5 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[rgb(0,143,108)]">
                Le constat
              </span>

              <h2
                className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-[rgb(2,84,63)] sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                L’alimentation locale manque souvent de coordination.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                Entre les fournisseurs, les cuisines, les restaurants, les
                livreurs et les consommateurs, les flux alimentaires restent
                largement fragmentés.
              </p>

              <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                Cette fragmentation crée des pertes de temps, des coûts
                supplémentaires et une expérience moins fluide pour l’ensemble
                des acteurs.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Approvisionnement dispersé",
                  "Production difficile à anticiper",
                  "Distribution peu structurée",
                  "Livraison moins prévisible",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_12px_35px_rgba(2,84,63,0.05)]"
                  >
                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-[rgb(0,143,108)]"
                    />
                    <p className="text-sm font-semibold text-gray-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CHAIN */}
      <section className="relative bg-[rgb(252,246,184)]/30 py-20 lg:py-28">
        <div className="pointer-events-none absolute -left-40 top-20 h-[360px] w-[360px] rounded-full bg-[rgb(0,143,108)]/10 blur-[110px]" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[rgb(255,209,45)]/20 blur-[120px]" />

        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[rgb(0,143,108)] shadow-sm">
              Notre réponse
            </span>

            <h2
              className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-[rgb(2,84,63)] sm:text-5xl lg:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Une infrastructure pour relier chaque maillon de la chaîne.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              KIZINE construit un écosystème qui connecte les différents acteurs
              de la distribution alimentaire locale.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {chainItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-[34px] border border-white bg-white p-7 shadow-[0_25px_80px_rgba(2,84,63,0.08)]"
                initial={{ y: 28, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgb(0,143,108)]/10 text-[rgb(0,143,108)]">
                  {item.icon}
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-[rgb(0,143,108)]">
                  0{index + 1}
                </p>

                <h3 className="mt-2 text-2xl font-black tracking-tight text-[rgb(2,84,63)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ECOSYSTEM */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <span className="inline-flex rounded-full border border-[rgb(0,143,108)]/10 bg-[rgb(0,143,108)]/5 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[rgb(0,143,108)]">
                Écosystème
              </span>

              <h2
                className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-[rgb(2,84,63)] sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Un réseau alimentaire connecté.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                KIZINE agit comme un point de coordination entre les acteurs qui
                participent à l’approvisionnement, à la production, à la
                distribution et à la livraison alimentaire.
              </p>
            </div>

            <motion.div
              className="relative rounded-[38px] border border-gray-100 bg-[linear-gradient(135deg,#ffffff_0%,#f6fbf8_100%)] p-6 shadow-[0_30px_90px_rgba(2,84,63,0.10)] sm:p-8 lg:p-10"
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {ecosystem.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-gray-100 bg-white px-4 py-5 text-center text-sm font-black text-[rgb(2,84,63)] shadow-[0_12px_35px_rgba(2,84,63,0.05)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[30px] bg-[rgb(2,84,63)] p-8 text-center shadow-2xl">
                <Network
                  size={34}
                  className="mx-auto text-[rgb(252,246,184)]"
                />
                <p className="mt-4 text-3xl font-black text-[rgb(252,246,184)]">
                  KIZINE
                </p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70">
                  Une couche digitale et opérationnelle pour mieux organiser la
                  chaîne alimentaire locale.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* TOOLS */}
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8faf9_100%)] py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[rgb(0,143,108)]/10 bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[rgb(0,143,108)] shadow-sm">
              Ce que nous construisons
            </span>

            <h2
              className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-[rgb(2,84,63)] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Des outils pour mieux distribuer.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-[36px] border border-gray-100 bg-white p-8 shadow-[0_22px_65px_rgba(2,84,63,0.07)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(2,84,63,0.12)]"
                initial={{ y: 28, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgb(0,143,108)]/10 text-[rgb(0,143,108)]">
                  {item.icon}
                </div>

                <h3 className="mt-7 text-2xl font-black tracking-tight text-[rgb(2,84,63)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* VISION */}
      <section
        id="vision"
        className="relative overflow-hidden bg-[rgb(2,84,63)] py-20 lg:py-28"
      >
        <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[rgb(255,209,45)]/20 blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-[rgb(252,246,184)]/10 blur-[120px]" />

        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[rgb(252,246,184)] backdrop-blur-md">
              Vision
            </span>

            <h2
              className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-[rgb(252,246,184)] sm:text-5xl lg:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Construire l’infrastructure alimentaire des villes africaines.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Nous croyons qu’une meilleure coordination des acteurs
              alimentaires peut rendre les villes plus efficaces, plus
              accessibles et plus résilientes.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              KIZINE développe progressivement les briques nécessaires pour
              organiser une distribution alimentaire plus moderne, plus locale
              et mieux connectée.
            </p>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-[38px] border border-[rgb(0,143,108)]/10 bg-[linear-gradient(135deg,rgb(252,246,184)_0%,#ffffff_42%,#f5fbf8_100%)] px-6 py-16 text-center shadow-[0_35px_100px_rgba(2,84,63,0.12)] md:rounded-[60px] md:px-12 md:py-24">
            <div className="pointer-events-none absolute -left-28 top-0 h-[320px] w-[320px] rounded-full bg-[rgb(0,143,108)]/12 blur-[100px]" />
            <div className="pointer-events-none absolute -right-28 bottom-0 h-[320px] w-[320px] rounded-full bg-[rgb(255,209,45)]/25 blur-[100px]" />

            <div className="relative mx-auto max-w-3xl">
              <MapPin
                size={38}
                className="mx-auto text-[rgb(0,143,108)]"
              />

              <h2
                className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-[rgb(2,84,63)] sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Rejoignez l’écosystème KIZINE.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                Restaurants, fournisseurs, partenaires logistiques ou acteurs de
                l’alimentation : construisons ensemble une distribution
                alimentaire plus moderne et mieux connectée.
              </p>

              <div className="mt-9">
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