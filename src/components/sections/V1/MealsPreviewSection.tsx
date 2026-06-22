import { ArrowRight, Sparkles } from "lucide-react";

import Container from "../../ui/Container";

import mealsImage from "../../../assets/v1/meal1.jpg";

export default function MealsPreviewSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-20 h-[360px] w-[360px] rounded-full bg-[var(--color-primary)]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[var(--color-secondary)]/20 blur-[120px]" />

      <Container>
        <div className="relative overflow-hidden rounded-[34px] bg-[var(--color-primary-dark)] shadow-[0_30px_90px_rgba(2,84,63,0.18)] ring-1 ring-black/5 md:rounded-[56px]">
          <img
            src={mealsImage}
            alt="Repas disponibles sur KIZINE"
            className="h-[560px] w-full object-cover md:h-[640px] lg:h-[680px]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

          <div className="pointer-events-none absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full bg-[var(--color-secondary)]/25 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-28 left-10 h-[300px] w-[300px] rounded-full bg-white/10 blur-[90px]" />

          <div className="absolute inset-0 flex items-end">
            <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-md">
                  <Sparkles size={14} />
                  Repas disponibles
                </span>

                <h2
                  className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Découvrez ce qui vous attend autour de vous.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base md:mt-6 md:text-lg">
                  Des cuisines locales aux restaurants partenaires, retrouvez
                  chaque jour de nouvelles options depuis l’application.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#download-app"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-[var(--color-primary)]/30 transition hover:bg-[var(--color-primary-dark)] sm:px-7 sm:py-4"
                  >
                    Voir ce qui vous attend
                    <ArrowRight size={18} />
                  </a>

                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-xs font-semibold text-white/85 backdrop-blur-md sm:text-sm">
                    Nouveaux repas chaque jour
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute right-5 top-5 hidden rounded-3xl border border-white/15 bg-white/90 px-5 py-4 shadow-2xl backdrop-blur-md md:block">
            <p className="text-xs font-black uppercase tracking-wider text-[var(--color-primary)]">
              Disponible près de vous
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--color-primary-dark)]">
              Restaurants & cuisines locales
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}