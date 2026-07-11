import { Search, FlaskConical, Rocket } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnostic",
    duration: "1 à 2 semaines",
    description:
      "Analyse de vos processus, données et outils pour identifier les cas d'usage IA à plus fort impact — avec des gains chiffrés et un plan d'action réaliste.",
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "POC piloté",
    duration: "3 à 6 semaines",
    description:
      "Mise en place d'un prototype ciblé avec vos équipes, sur un périmètre maîtrisé et mesurable, avant tout engagement à grande échelle.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Déploiement",
    duration: "En continu",
    description:
      "Généralisation progressive de la solution, formation des équipes et suivi des indicateurs pour un impact durable.",
  },
];

export function Method() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Méthode YEESAL AI"
          title="Une approche structurée, du diagnostic au déploiement"
          description="Chaque étape sécurise la suivante. Vous savez toujours où vous en êtes, ce que ça coûte et ce que ça rapporte."
        />
        <StaggerGroup className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Connecting line (desktop) */}
          <div
            className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-gradient-to-r from-electric-200 via-electric-400 to-electric-200 md:block"
            aria-hidden
          />
          {steps.map((step) => (
            <StaggerItem key={step.number} className="relative">
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-electric-300 shadow-lg shadow-navy-950/20">
                  <step.icon className="h-6 w-6" aria-hidden />
                </span>
              </div>
              <div className="mt-5">
                <p className="font-display text-sm font-semibold text-electric-600">
                  {step.number} —{" "}
                  <span className="text-navy-900/70">{step.duration}</span>
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-900/65">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal className="mt-14 text-center">
          <Button href="/diagnostic" size="lg">
            Commencer par un diagnostic
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
