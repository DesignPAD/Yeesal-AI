import type { Metadata } from "next";
import {
  ClipboardCheck,
  Target,
  TrendingUp,
  Map,
  CalendarClock,
  FileCheck2,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { DiagnosticForm } from "@/components/forms/diagnostic-form";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Diagnostic IA — Identifiez vos opportunités",
  description:
    "Le Diagnostic YEESAL AI analyse vos processus, données et outils pour identifier les cas d'usage IA à plus fort impact, avec gains chiffrés et plan d'action.",
  alternates: { canonical: "/diagnostic" },
};

const deliverables = [
  {
    icon: Target,
    title: "Cartographie des opportunités",
    description:
      "Les cas d'usage IA et automatisation les plus pertinents pour votre organisation, priorisés par impact et faisabilité.",
  },
  {
    icon: TrendingUp,
    title: "Gains chiffrés",
    description:
      "Une estimation concrète du temps, des coûts et de la qualité gagnés pour chaque cas d'usage identifié.",
  },
  {
    icon: Map,
    title: "Plan d'action réaliste",
    description:
      "Une feuille de route par étapes, avec un premier POC ciblé, un budget indicatif et des critères de succès mesurables.",
  },
];

const steps = [
  {
    icon: CalendarClock,
    title: "Entretien de cadrage",
    description:
      "Un échange de 45 minutes avec vos équipes pour comprendre votre contexte, vos processus et vos priorités.",
  },
  {
    icon: ClipboardCheck,
    title: "Analyse structurée",
    description:
      "Nous analysons vos processus, données et outils existants pour identifier les leviers à plus fort impact.",
  },
  {
    icon: FileCheck2,
    title: "Restitution",
    description:
      "Vous recevez un rapport clair avec les opportunités priorisées, les gains estimés et le plan d'action recommandé.",
  },
];

export default function DiagnosticPage() {
  return (
    <>
      <PageHeader
        eyebrow="Diagnostic YEESAL AI"
        title="Sachez exactement où l'IA peut faire gagner votre organisation"
        description="Avant d'investir, mesurez. Le Diagnostic analyse vos processus, données et outils pour identifier les opportunités IA les plus rentables — et celles à éviter."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Livrables"
            title="Ce que vous recevez"
          />
          <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
            {deliverables.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-3xl border border-navy-950/[0.07] bg-navy-50/40 p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-electric-300">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-navy-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="bg-navy-50/50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Déroulement"
            title="Trois étapes, une à deux semaines"
          />
          <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="h-full rounded-3xl border border-navy-950/[0.07] bg-white p-7">
                  <p className="font-display text-sm font-semibold text-electric-600">
                    Étape 0{index + 1}
                  </p>
                  <span className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-electric-50 text-electric-600">
                    <step.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-navy-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section id="formulaire" className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Prise de rendez-vous"
            title="Demandez votre diagnostic"
            description="Remplissez ce formulaire : nous revenons vers vous sous 24h ouvrées pour planifier l'entretien de cadrage."
          />
          <Reveal className="mt-12">
            <div className="rounded-3xl border border-navy-950/[0.07] bg-navy-50/30 p-6 sm:p-10">
              <DiagnosticForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
