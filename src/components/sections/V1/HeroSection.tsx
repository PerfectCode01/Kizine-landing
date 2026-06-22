import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

import Container from "../../ui/Container";
import Button from "../../ui/Button";

import heroPhone from "../../../assets/v1/hero-phone-off.png";
import heroMeal from "../../../assets/v1/hero-meal2.png";

const colors = {
  viride: "rgb(0,143,108)",
  sapin: "rgb(2,84,63)",
  aureolin: "rgb(255,209,45)",
  champagne: "rgb(252,246,184)",
};

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12 lg:py-0"
      style={{
        background: `linear-gradient(135deg, ${colors.sapin} 0%, ${colors.viride} 55%, ${colors.sapin} 100%)`,
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[rgb(255,209,45)]/25 blur-[80px]" />
        <div className="absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[rgb(252,246,184)]/18 blur-[80px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,246,184,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,209,45,0.16),transparent_35%)]" />

      <Container className="w-full">
        <div className="relative grid items-center gap-10 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            className="relative z-20 flex flex-col items-center text-center lg:items-start lg:text-left"
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1
              className="font-energy mx-auto mt-5 max-w-2xl text-5xl font-black leading-tight text-[rgb(252,246,184)] md:text-7xl lg:mx-0 lg:text-8xl lg:leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Votre cuisine
              <br />
              connectée
            </h1>

            <p className="font-heebo mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-white/80 sm:text-base md:text-xl lg:mx-0">
              Commandez et précommandez vos repas auprès de nos partenaires.
              Une expérience alimentaire simple, locale et connectée.
            </p>

            <div className="mt-20 flex w-full gap-3 sm:w-auto sm:justify-center lg:justify-start">
              <Button href="#download">
                <span className="flex items-center gap-2 sm:gap-3">
                  <FaApple className="shrink-0 text-[20px] sm:text-[24px]" />
                  <span className="flex min-w-0 flex-col leading-none text-left">
                    <span className="truncate text-[8px] font-medium sm:text-[10px]">
                      Télécharger sur
                    </span>
                    <span className="truncate text-[11px] font-black sm:text-sm md:text-base">
                      App Store
                    </span>
                  </span>
                </span>
              </Button>

              <Button href="#download">
                <span className="flex items-center gap-2 sm:gap-3">
                  <FaGooglePlay className="shrink-0 text-[18px] sm:text-[22px]" />
                  <span className="flex min-w-0 flex-col leading-none text-left">
                    <span className="truncate text-[8px] font-medium sm:text-[10px]">
                      Disponible sur
                    </span>
                    <span className="truncate text-[11px] font-black sm:text-sm md:text-base">
                      Google Play
                    </span>
                  </span>
                </span>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold text-white/85 sm:text-sm lg:justify-start">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">
                ✓ Livraison locale
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">
                ✓ Précommande
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">
                ✓ Repas frais
              </span>
            </div>
          </motion.div>

          <motion.img
            src={heroPhone}
            alt="Application KIZINE"
            className="hidden lg:relative lg:z-20 lg:block lg:w-[430px] lg:drop-shadow-2xl"
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          />

          <div className="pointer-events-none hidden overflow-visible lg:absolute lg:inset-y-0 lg:left-1/2 lg:right-0 lg:flex lg:items-center lg:justify-center">
            <motion.div
              className="absolute h-[520px] w-[520px] rounded-full bg-[rgb(255,209,45)]/20 blur-[80px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            />

            <motion.img
              src={heroMeal}
              alt="Plat KIZINE"
              className="pointer-events-none absolute z-30 rotate-[-8deg] drop-shadow-2xl lg:-bottom-10 lg:-right-16 lg:w-[500px] xl:-right-24 xl:w-[580px]"
              initial={{ y: 50, opacity: 0, rotate: -12 }}
              animate={{ y: 0, opacity: 1, rotate: -8 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            />

            <motion.div
              className="absolute z-30 rounded-full border border-[rgb(252,246,184)]/20 bg-[rgb(252,246,184)] px-4 py-2 text-sm font-bold text-[rgb(2,84,63)] shadow-xl lg:left-10 lg:top-1/4"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              Livraison rapide
            </motion.div>

            <motion.div
              className="absolute z-30 rounded-3xl border border-white/15 bg-white/95 px-5 py-4 shadow-2xl lg:right-10 lg:top-1/3"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <p className="text-sm font-black text-[rgb(2,84,63)]">
                Plat du jour
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Poulet braisé disponible
              </p>
            </motion.div>

            <motion.div
              className="absolute z-40 rounded-full bg-[rgb(255,209,45)] px-5 py-3 text-sm font-black text-[rgb(2,84,63)] shadow-xl lg:bottom-20 lg:right-24"
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            >
              Précommandez maintenant
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}