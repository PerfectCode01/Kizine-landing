import { BarChart3, PackageOpen, Route, Workflow } from "lucide-react";
import Container from "../../ui/Container";

const problems = [
  {
    icon: <Workflow size={22} />,
    title: "Trop d'outils",
    text: "Commandes, stocks, ventes et livraisons sont souvent gérés séparément.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Peu de visibilité",
    text: "Les décisions sont prises sans données claires sur l'activité réelle.",
  },
  {
    icon: <Route size={22} />,
    title: "Livraisons isolées",
    text: "La distribution manque de coordination dans une zone maîtrisée.",
  },
  {
    icon: <PackageOpen size={22} />,
    title: "Croissance freinée",
    text: "L'énergie part dans la gestion au lieu d'aller vers le développement.",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-24 text-white">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[var(--color-primary)]/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[var(--color-secondary)]/20 blur-3xl" />

      <Container>
        <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-secondary)]">
              Le problème
            </span>

            <h2
              className="mt-6 text-5xl leading-none md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Les opérations alimentaires sont encore trop dispersées.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Entre les commandes, les stocks, les ventes, la livraison et la
              relation client, les professionnels perdent du temps à gérer des
              processus qui devraient être connectés.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[40px] bg-white/10 p-4 backdrop-blur-md">
              <div className="rounded-[32px] bg-white p-5 text-gray-900 shadow-2xl">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <p className="text-sm text-gray-500">Aujourd'hui</p>
                    <h3 className="text-xl font-bold text-[var(--color-primary-dark)]">
                      Opérations fragmentées
                    </h3>
                  </div>

                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                    À optimiser
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {problems.map((problem) => (
                    <div
                      key={problem.title}
                      className="flex gap-4 rounded-3xl border border-gray-100 bg-gray-50 p-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                        {problem.icon}
                      </div>

                      <div>
                        <h4 className="font-bold text-[var(--color-primary-dark)]">
                          {problem.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-gray-500">
                          {problem.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-3xl bg-[var(--color-secondary)] px-6 py-4 text-sm font-bold text-black shadow-xl md:block">
              Trop de temps perdu
            </div>

            <div className="absolute -right-6 -top-6 hidden rounded-3xl bg-white px-6 py-4 text-sm font-bold text-[var(--color-primary-dark)] shadow-xl md:block">
              Données dispersées
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}