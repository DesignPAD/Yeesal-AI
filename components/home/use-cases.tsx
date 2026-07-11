import Link from "next/link";
import {
  ArrowUpRight,
  MessageSquareText,
  Mic,
  Users,
  ClipboardList,
  UserPlus,
  Activity,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const useCases = [
  {
    icon: MessageSquareText,
    title: "Service client WhatsApp",
    description:
      "Un agent IA connecté à votre base de connaissances répond 24/7, suit les dossiers et escalade vers vos équipes si nécessaire.",
    href: "/solutions/agents",
  },
  {
    icon: Mic,
    title: "Réunions Wolof → compte rendu FR",
    description:
      "Analyse d'enregistrements audio en wolof et génération de comptes rendus structurés en français pour vos directions et partenaires.",
    href: "/solutions/data",
  },
  {
    icon: Users,
    title: "Recrutement & RH",
    description:
      "Pré-qualification des candidatures, réponses automatiques aux candidats et tableaux de bord de suivi pour les équipes RH.",
    href: "/solutions/automatisation",
  },
  {
    icon: ClipboardList,
    title: "Reporting ONG",
    description:
      "Consolidation automatique des données terrain et génération de rapports structurés pour bailleurs et directions pays.",
    href: "/solutions/data",
  },
  {
    icon: UserPlus,
    title: "Onboarding collaborateurs",
    description:
      "Un agent interne répond aux questions des nouveaux collaborateurs et partage les bons contenus dès le premier jour.",
    href: "/solutions/agents",
  },
  {
    icon: Activity,
    title: "Suivi des opérations",
    description:
      "Collecte structurée des informations opérationnelles et vues synthétiques en temps réel pour les responsables.",
    href: "/solutions/automatisation",
  },
];

export function UseCases() {
  return (
    <section className="bg-navy-50/50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Cas d'usage"
          title="Des scénarios concrets, pensés pour le terrain"
          description="Inspirés des besoins réels des entreprises, ONG et institutions au Sénégal et en Afrique de l'Ouest."
        />
        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <StaggerItem key={useCase.title}>
              <Link
                href={useCase.href}
                className="group flex h-full flex-col rounded-3xl border border-navy-950/[0.07] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-electric-500/30 hover:shadow-xl hover:shadow-navy-950/[0.06]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-electric-300 transition-colors duration-300 group-hover:bg-electric-500 group-hover:text-white">
                  <useCase.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-navy-950">
                  {useCase.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy-900/65">
                  {useCase.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-ui text-sm font-semibold text-electric-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Explorer
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
