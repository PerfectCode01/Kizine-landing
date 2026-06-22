import Container from "../../ui/Container";
import Button from "../../ui/Button";
import HeroNetwork from "./HeroNetwork";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f7fffb] to-[var(--color-secondary-light)]">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[var(--color-secondary)]/30 blur-3xl" />
      <div className="absolute top-40 -left-32 h-96 w-96 rounded-full bg-[var(--color-primary)]/20 blur-3xl" />

      <Container>
        <div className="relative grid min-h-screen items-center gap-12 pt-32 pb-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-[var(--color-primary-dark)] shadow-sm">
              Plateforme de distribution alimentaire locale
            </span>

            <h1
              className="mt-6 text-6xl leading-none text-[var(--color-primary-dark)] md:text-7xl lg:text-8xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Gérez.
              <br />
              Vendez.
              <br />
              Distribuez.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              KIZINE centralise les opérations des professionnels de
              l'alimentation et facilite la distribution locale grâce à un
              système connecté, simple et évolutif.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact">Rejoindre KIZINE</Button>

              <Button href="#how-it-works" variant="secondary">
                Découvrir comment ça marche
              </Button>
            </div>
          </div>
          <div className="relative">
            <HeroNetwork />
          </div>    
        </div>
      </Container>
    </section>
  );
}