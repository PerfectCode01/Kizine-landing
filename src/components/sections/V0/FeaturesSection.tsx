import {
  BarChart3,
  Boxes,
  ClipboardList,
  PackagePlus,
  ShoppingBag,
  Truck,
} from "lucide-react";
import Container from "../../ui/Container";

const modules = [
  {
    icon: <PackagePlus size={20} />,
    title: "Catalogue",
    text: "Produits, prix, disponibilité",
  },
  {
    icon: <ClipboardList size={20} />,
    title: "Commandes",
    text: "Réception, suivi, préparation",
  },
  {
    icon: <Boxes size={20} />,
    title: "Stock",
    text: "Inventaire et ruptures",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Ventes",
    text: "Performances et revenus",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-[var(--color-secondary-light)] px-4 py-2 text-sm font-semibold text-[var(--color-primary-dark)]">
            Fonctionnalités
          </span>

          <h2
            className="mt-6 text-5xl leading-none text-[var(--color-primary-dark)] md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Une Pro App modulaire pour piloter l'activité au quotidien.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            KIZINE donne aux restaurants les modules essentiels pour gérer leurs
            produits, suivre les commandes, contrôler le stock et vendre plus
            efficacement.
          </p>
        </div>

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {modules.map((module) => (
              <div
                key={module.title}
                className="group flex items-center gap-5 rounded-[28px] border border-gray-100 bg-[#F8FFFB] p-5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                  {module.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--color-primary-dark)]">
                    {module.title}
                  </h3>
                  <p className="mt-1 text-gray-500">{module.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative rounded-[48px] bg-[var(--color-primary-dark)] p-5 shadow-2xl">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[var(--color-secondary)]/30 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-[var(--color-primary)]/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-[38px] bg-white p-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-primary)]">
                    Restaurant Pro
                  </p>
                  <h3 className="text-2xl font-bold text-[var(--color-primary-dark)]">
                    Tableau de bord
                  </h3>
                </div>

                <span className="rounded-full bg-[var(--color-secondary)] px-4 py-2 text-sm font-bold text-black">
                  Actif
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <MiniStat label="Commandes" value="24" />
                <MiniStat label="Revenus" value="148k" />
                <MiniStat label="Produits" value="36" />
              </div>

              <div className="mt-6 rounded-[28px] bg-[#F8FFFB] p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-[var(--color-primary-dark)]">
                    Flux opérationnel
                  </h4>
                  <Truck
                    size={22}
                    className="text-[var(--color-primary)]"
                  />
                </div>

                <div className="mt-6 space-y-4">
                  <FlowItem
                    icon={<ShoppingBag size={18} />}
                    title="Nouvelle commande"
                    text="Client • Poulet braisé"
                  />
                  <FlowItem
                    icon={<Boxes size={18} />}
                    title="Stock vérifié"
                    text="Disponible en cuisine"
                  />
                  <FlowItem
                    icon={<Truck size={18} />}
                    title="Distribution"
                    text="Zone locale active"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-[28px] bg-[var(--color-primary-dark)] p-5 text-white">
                <p className="text-sm text-white/60">Module complémentaire</p>
                <h4 className="mt-1 text-xl font-bold">
                  Publication vers l'application client
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-gray-50 p-4">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-[var(--color-primary-dark)]">
        {value}
      </p>
    </div>
  );
}

function FlowItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
        {icon}
      </div>

      <div>
        <p className="font-bold text-[var(--color-primary-dark)]">{title}</p>
        <p className="text-sm text-gray-500">{text}</p>
      </div>
    </div>
  );
}