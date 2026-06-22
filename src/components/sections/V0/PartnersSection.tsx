import { Bike, ShoppingBag, Store } from "lucide-react";
import Container from "../../ui/Container";

const audiences = [
  {
    icon: <Store size={28} />,
    title: "Professionnels",
    items: ["Restaurants", "Dark kitchens", "Traiteurs"],
    text: "Gérez vos opérations, publiez vos produits et développez votre présence locale.",
  },
  {
    icon: <ShoppingBag size={28} />,
    title: "Clients",
    items: ["Découverte", "Commande", "Suivi"],
    text: "Accédez facilement aux offres alimentaires disponibles dans votre zone.",
  },
  {
    icon: <Bike size={28} />,
    title: "Logistique",
    items: ["Livraisons", "Zones", "Coordination"],
    text: "Organisez la distribution locale avec plus de visibilité et d'efficacité.",
  },
];

export default function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-28 text-white">
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[var(--color-primary)]/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[var(--color-secondary)]/20 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-secondary)]">
            Pour qui ?
          </span>

          <h2
            className="mt-6 text-5xl leading-none md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Une plateforme, plusieurs acteurs.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Chaque participant bénéficie d'outils adaptés à son rôle dans
            l'écosystème alimentaire local.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-[36px] bg-white/10 p-8 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[var(--color-secondary)] text-black">
                {audience.icon}
              </div>

              <h3
                className="mt-8 text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {audience.title}
              </h3>

              <p className="mt-4 leading-relaxed text-white/70">
                {audience.text}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {audience.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}