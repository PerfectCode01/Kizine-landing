import { FaApple, FaGooglePlay } from "react-icons/fa";

import Container from "../../ui/Container";
import Button from "../../ui/Button";

export default function FinalCTASection() {
  return (
    <section className="bg-white pb-10 pt-8 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[34px] border border-[var(--color-primary)]/10 bg-[linear-gradient(135deg,#fffdf4_0%,#ffffff_45%,#f5fbf8_100%)] px-6 py-16 shadow-[0_30px_90px_rgba(2,84,63,0.10)] md:rounded-[56px] md:px-12 md:py-24">
          <div className="pointer-events-none absolute -left-28 top-0 h-[320px] w-[320px] rounded-full bg-[var(--color-primary)]/12 blur-[100px]" />
          <div className="pointer-events-none absolute -right-28 bottom-0 h-[320px] w-[320px] rounded-full bg-[var(--color-secondary)]/20 blur-[100px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <h2
              className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-[var(--color-primary-dark)] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Votre prochain repas vous attend.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Téléchargez l’application KIZINE et découvrez les repas
              disponibles autour de vous, à commander maintenant ou à
              précommander pour plus tard.
            </p>

            <div className="mx-auto mt-10 flex w-full max-w-[360px] gap-3 sm:max-w-none sm:justify-center">
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

            <p className="mt-6 text-xs font-semibold text-gray-500 sm:text-sm">
              Livraison locale · Précommande · Repas frais
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}