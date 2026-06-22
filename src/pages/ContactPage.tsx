import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  Store,
  Truck,
  Utensils,
  Wheat,
} from "lucide-react";
import { motion } from "framer-motion";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const contactCards = [
  {
    icon: <Mail size={22} />,
    title: "Email",
    value: "contact@kizine.app",
  },
  {
    icon: <Phone size={22} />,
    title: "Téléphone",
    value: "+243 XXX XXX XXX",
  },
  {
    icon: <MapPin size={22} />,
    title: "Kinshasa",
    value: "RDC",
  },
  {
    icon: <Clock size={22} />,
    title: "Réponse",
    value: "Sous 24h",
  },
];

const partners = [
  {
    icon: <Store size={24} />,
    title: "Restaurants & cuisines",
    text: "Diffusez vos menus et organisez vos commandes.",
  },
  {
    icon: <Wheat size={24} />,
    title: "Fournisseurs",
    text: "Participez à une chaîne alimentaire plus efficace.",
  },
  {
    icon: <Truck size={24} />,
    title: "Logistique",
    text: "Contribuez à une distribution locale plus fiable.",
  },
];

const reasons = [
  "Demande d’information",
  "Partenariat restaurant",
  "Partenariat fournisseur",
  "Partenariat logistique",
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,rgb(2,84,63)_0%,rgb(0,143,108)_55%,rgb(2,84,63)_100%)] pt-28 pb-16 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute -right-32 top-0 h-[360px] w-[360px] rounded-full bg-[rgb(255,209,45)]/25 blur-[110px] lg:h-[420px] lg:w-[420px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[rgb(252,246,184)]/15 blur-[110px] lg:h-[360px] lg:w-[360px]" />

        <Container>
          <motion.div
            className="relative mx-auto max-w-5xl text-center"
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[rgb(252,246,184)] backdrop-blur-md">
              Contact
            </span>

            <h1
              className="mt-6 text-4xl font-black leading-[1.02] tracking-tight text-[rgb(252,246,184)] sm:text-6xl lg:text-8xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Construisons ensemble l’avenir alimentaire local.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-lg">
              Une question, une collaboration ou une proposition de partenariat ?
              Notre équipe est à votre écoute.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* CONTACT CARDS */}
      <section className="relative bg-[rgb(252,246,184)]/25 py-12 lg:py-20">
        <Container>
          <div className="-mt-24 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {contactCards.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-[24px] border border-white bg-white p-4 shadow-[0_18px_55px_rgba(2,84,63,0.10)] sm:rounded-[30px] sm:p-6"
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgb(0,143,108)]/10 text-[rgb(0,143,108)]">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-base font-black text-[rgb(2,84,63)] sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs font-bold text-[rgb(0,143,108)] sm:text-sm">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FORM */}
      <section id="contact-form" className="relative bg-white py-16 lg:py-28">
        <div className="pointer-events-none absolute -left-40 top-20 h-[320px] w-[320px] rounded-full bg-[rgb(0,143,108)]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-[360px] w-[360px] rounded-full bg-[rgb(255,209,45)]/20 blur-[110px]" />

        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.62fr_0.38fr] lg:gap-10">
            <motion.form
              className="rounded-[30px] border border-gray-100 bg-white p-5 shadow-[0_24px_70px_rgba(2,84,63,0.09)] sm:p-8 lg:rounded-[36px] lg:p-10"
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <span className="inline-flex rounded-full bg-[rgb(0,143,108)]/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-[rgb(0,143,108)]">
                Parlons-en
              </span>

              <h2
                className="mt-5 text-3xl font-black leading-tight text-[rgb(2,84,63)] sm:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Envoyez-nous un message.
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-bold text-[rgb(2,84,63)]">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="mt-2 w-full rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4 text-sm outline-none transition focus:border-[rgb(0,143,108)] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-[rgb(2,84,63)]">
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    placeholder="vous@email.com"
                    className="mt-2 w-full rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4 text-sm outline-none transition focus:border-[rgb(0,143,108)] focus:bg-white"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-bold text-[rgb(2,84,63)]">
                  Sujet
                </label>
                <input
                  type="text"
                  placeholder="Partenariat, information, support..."
                  className="mt-2 w-full rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4 text-sm outline-none transition focus:border-[rgb(0,143,108)] focus:bg-white"
                />
              </div>

              <div className="mt-4">
                <label className="text-sm font-bold text-[rgb(2,84,63)]">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Écrivez votre message..."
                  className="mt-2 w-full resize-none rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4 text-sm outline-none transition focus:border-[rgb(0,143,108)] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[rgb(2,84,63)] px-6 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(2,84,63,0.22)] transition hover:-translate-y-0.5 hover:bg-[rgb(0,143,108)] sm:w-auto"
              >
                Envoyer le message
                <Send size={18} />
              </button>
            </motion.form>

            <motion.aside
              className="rounded-[30px] bg-[rgb(2,84,63)] p-6 text-white shadow-[0_24px_70px_rgba(2,84,63,0.16)] lg:rounded-[36px] lg:p-10"
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[rgb(252,246,184)]">
                <Utensils size={24} />
              </div>

              <h3
                className="mt-6 text-3xl font-black leading-tight text-[rgb(252,246,184)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Pourquoi nous contacter ?
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                KIZINE collabore avec les acteurs de l’approvisionnement, de la
                production, de la distribution et de la livraison alimentaire.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white/90 backdrop-blur-md"
                  >
                    ✓ {reason}
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </Container>
      </section>

      {/* PARTNERS */}
      <section className="relative bg-[linear-gradient(180deg,#ffffff_0%,#f8faf9_100%)] py-16 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[rgb(0,143,108)]/10 bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[rgb(0,143,108)] shadow-sm">
              Partenariats
            </span>

            <h2
              className="mt-6 text-3xl font-black leading-[1.05] tracking-tight text-[rgb(2,84,63)] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Un écosystème construit ensemble.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-lg">
              Restaurants, cuisines, fournisseurs ou partenaires logistiques :
              KIZINE connecte les acteurs essentiels de la chaîne alimentaire.
            </p>
          </div>

          {/* Mobile carousel */}
          <div className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-4 lg:hidden">
            {partners.map((item, index) => (
              <motion.div
                key={item.title}
                className="min-w-[80%] snap-center rounded-[30px] border border-gray-100 bg-white p-6 shadow-[0_20px_60px_rgba(2,84,63,0.09)]"
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgb(0,143,108)]/10 text-[rgb(0,143,108)]">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-black text-[rgb(2,84,63)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Desktop grid */}
          <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-3">
            {partners.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-[36px] border border-gray-100 bg-white p-8 shadow-[0_22px_65px_rgba(2,84,63,0.07)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(2,84,63,0.12)]"
                initial={{ y: 28, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[rgb(0,143,108)]/10 text-[rgb(0,143,108)]">
                  {item.icon}
                </div>

                <h3 className="mt-7 text-2xl font-black tracking-tight text-[rgb(2,84,63)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* VISION */}
      <section className="relative overflow-hidden bg-[rgb(2,84,63)] py-16 lg:py-28">
        <div className="pointer-events-none absolute -right-40 top-0 h-[360px] w-[360px] rounded-full bg-[rgb(255,209,45)]/20 blur-[110px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[rgb(252,246,184)]/10 blur-[110px]" />

        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2
              className="text-3xl font-black leading-[1.05] tracking-tight text-[rgb(252,246,184)] sm:text-5xl lg:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Plus qu’une application, une infrastructure alimentaire.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-lg">
              Notre ambition est de connecter les acteurs de la chaîne
              alimentaire locale au sein d’un même écosystème numérique et
              opérationnel.
            </p>

            <div className="mt-8 flex justify-center">
              <Button href="#contact-form">
                <span className="inline-flex items-center gap-2">
                  Prendre contact
                  <ArrowRight size={18} />
                </span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}