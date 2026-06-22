import Button from "../../ui/Button";
import Container from "../../ui/Container";

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--color-primary-dark)] py-28 text-white">
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[var(--color-primary)]/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[var(--color-secondary)]/20 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-secondary)]">
            Programme pilote
          </span>

          <h2
            className="mt-6 text-5xl leading-none md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Prêt à rejoindre le réseau KIZINE ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Faites partie des premiers professionnels à construire l'avenir de la
            distribution alimentaire locale.
          </p>

          <div className="mt-10 flex justify-center">
            <Button href="mailto:contact@kizine.app">
              Rejoindre le programme pilote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}