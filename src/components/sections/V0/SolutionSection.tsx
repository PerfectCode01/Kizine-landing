import { BarChart3, Boxes, MapPinned, ShoppingCart, Users } from "lucide-react";
import Container from "../../ui/Container";

const modules = [
  { icon: <ShoppingCart size={22} />, label: "Ventes" },
  { icon: <Boxes size={22} />, label: "Stock" },
  { icon: <MapPinned size={22} />, label: "Logistique" },
  { icon: <BarChart3 size={22} />, label: "Données" },
  { icon: <Users size={22} />, label: "Clients" },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="relative overflow-hidden bg-[#F8FFFB] py-28">
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <h2
            className="mt-6 text-5xl leading-none text-[var(--color-primary-dark)] md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Un système central pour connecter toute votre activité.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            KIZINE rassemble les professionnels, les clients, les commandes, les
            stocks et la logistique dans une infrastructure unique.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-6xl rounded-[48px] bg-[var(--color-primary-dark)] p-6 shadow-2xl md:p-10">
          <div className="absolute -top-6 left-10 rounded-2xl bg-[var(--color-secondary)] px-5 py-3 text-sm font-bold text-black shadow-xl">
            Infrastructure locale
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[36px] bg-white p-8 md:p-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-primary)]">
                    KIZINE CORE
                  </p>
                  <h3
                    className="mt-2 text-5xl text-[var(--color-primary-dark)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Une seule source de vérité.
                  </h3>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {modules.map((module) => (
                  <div
                    key={module.label}
                    className="flex items-center gap-4 rounded-3xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      {module.icon}
                    </div>

                    <span className="font-bold text-[var(--color-primary-dark)]">
                      {module.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[36px] bg-white/10 p-8 text-white">
              <p className="text-sm font-semibold text-[var(--color-secondary)]">
                Ce que KIZINE change
              </p>

              <h3
                className="mt-4 text-5xl leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Moins de dispersion. Plus de maîtrise.
              </h3>

              <p className="mt-6 leading-relaxed text-white/70">
                Au lieu de gérer plusieurs outils séparés, les professionnels
                travaillent avec un système connecté qui synchronise les
                opérations essentielles.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-3xl bg-white/10 p-5">
                  Professionnels connectés à leurs opérations
                </div>

                <div className="rounded-3xl bg-white/10 p-5">
                  Clients connectés aux offres disponibles
                </div>

                <div className="rounded-3xl bg-white/10 p-5">
                  Logistique connectée aux commandes locales
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}