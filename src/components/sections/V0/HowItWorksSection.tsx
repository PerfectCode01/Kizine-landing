import Container from "../../ui/Container";

import step1 from "../../../assets/image1.png";
import step2 from "../../../assets/image2.png";
import step3 from "../../../assets/image3.png";
import step4 from "../../../assets/image4.png";

const steps = [
  {
    number: "01",
    title: "Configurez votre activité",
    text: "Définissez vos informations, vos horaires, votre zone d'activité et les bases de votre espace professionnel.",
    image: step1,
  },
  {
    number: "02",
    title: "Publiez vos produits",
    text: "Ajoutez vos plats, vos prix, vos disponibilités et préparez votre catalogue pour les clients.",
    image: step2,
  },
  {
    number: "03",
    title: "Recevez vos commandes",
    text: "Centralisez les demandes, suivez leur préparation et coordonnez la distribution locale.",
    image: step3,
  },
  {
    number: "04",
    title: "Développez votre activité",
    text: "Suivez vos performances, comprenez vos ventes et améliorez votre organisation au quotidien.",
    image: step4,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[var(--color-secondary-light)] px-4 py-2 text-sm font-semibold text-[var(--color-primary-dark)]">
            Comment ça marche
          </span>

          <h2
            className="mt-6 text-5xl leading-none text-[var(--color-primary-dark)] md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Commencez à vendre en quelques étapes.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            KIZINE accompagne les professionnels depuis la configuration de leur
            activité jusqu'à la gestion quotidienne de leurs opérations.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {steps.map((step, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={step.number}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  isReverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-[40px] shadow-2xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-[360px] w-full object-cover"
                  />
                </div>

                <div>
                  <span className="text-sm font-bold text-[var(--color-primary)]">
                    ÉTAPE {step.number}
                  </span>

                  <h3
                    className="mt-4 text-4xl leading-none text-[var(--color-primary-dark)] md:text-5xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}