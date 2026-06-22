import { CalendarClock, Truck, Utensils } from "lucide-react";

import Container from "../../ui/Container";

import stepDiscover from "../../../assets/v1/image1.png";
import stepMoment from "../../../assets/v1/image2.png";
import stepDelivery from "../../../assets/v1/image3.png";

const steps = [
  {
    number: "01",
    icon: <Utensils size={22} />,
    image: stepDiscover,
    title: "Découvrez les repas",
    text: "Explorez les menus proposés par les restaurants et cuisines partenaires près de chez vous.",
  },
  {
    number: "02",
    icon: <CalendarClock size={22} />,
    image: stepMoment,
    title: "Choisissez votre moment",
    text: "Commandez immédiatement ou programmez votre repas pour plus tard selon votre emploi du temps.",
  },
  {
    number: "03",
    icon: <Truck size={22} />,
    image: stepDelivery,
    title: "Recevez votre commande",
    text: "Livraison ou retrait, récupérez votre repas au moment qui vous convient.",
  },
];

export default function OrderingFlowSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8faf9_100%)] py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-20 h-[360px] w-[360px] rounded-full bg-[var(--color-primary)]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[var(--color-secondary)]/20 blur-[120px]" />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/15 bg-[var(--color-primary)]/10 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--color-primary)]">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
            Comment ça marche ?
          </span>

          <h2
            className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-[var(--color-primary-dark)] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Commandez maintenant ou
            <br className="hidden sm:block" />
            <span className="text-[var(--color-primary)]">
              {" "}
              planifiez plus tard.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base md:text-lg">
            Une expérience simple et fluide : trouvez votre repas, choisissez le
            bon moment, puis recevez votre commande sans complication.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="pointer-events-none absolute left-[16.5%] right-[16.5%] top-16 hidden h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/25 to-transparent lg:block" />

          <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-8 scrollbar-hide lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0">
            {steps.map((step) => (
              <div
                key={step.title}
                className="group relative min-w-[84%] snap-center rounded-[30px] bg-white/80 p-2 shadow-[0_18px_55px_rgba(2,84,63,0.08)] ring-1 ring-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(2,84,63,0.14)] sm:min-w-[58%] lg:min-w-0 lg:rounded-[36px] lg:hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-[24px] bg-gray-100 lg:rounded-[30px]">
                  <div className="relative h-[210px] overflow-hidden sm:h-[240px] lg:h-[280px]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/35 bg-white/90 text-[var(--color-primary)] shadow-xl backdrop-blur-md sm:h-12 sm:w-12">
                      {step.icon}
                    </div>

                    <div className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/20 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                      Étape {step.number}
                    </div>

                    <h3 className="absolute bottom-5 left-5 right-5 text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
                      {step.title}
                    </h3>
                  </div>

                  <div className="relative bg-white px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7">
                    <div className="absolute -top-6 right-5 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[var(--color-primary-dark)] text-xs font-black text-white shadow-xl">
                      {step.number}
                    </div>

                    <p className="pr-8 text-sm leading-relaxed text-gray-500 sm:text-base">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-1 flex justify-center gap-2 lg:hidden">
            {steps.map((step) => (
              <span
                key={step.number}
                className="h-2 w-2 rounded-full bg-[var(--color-primary)]/30"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}