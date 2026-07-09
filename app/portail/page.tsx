import type { Metadata } from "next";
import { Lock, FolderKanban, MessagesSquare, FileClock } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Portail client — Bientôt disponible",
  description:
    "Le portail client YEESAL AI donnera un accès sécurisé à vos projets, livrables et échanges. Ouverture prochaine.",
  alternates: { canonical: "/portail" },
  robots: { index: false },
};

const features = [
  {
    icon: FolderKanban,
    title: "Suivi de vos projets",
    description:
      "L'avancement de vos POC et déploiements, les jalons et les prochaines étapes, en temps réel.",
  },
  {
    icon: FileClock,
    title: "Livrables & historique",
    description:
      "Tous vos rapports, comptes rendus et documents projet, archivés et accessibles à tout moment.",
  },
  {
    icon: MessagesSquare,
    title: "Échanges centralisés",
    description:
      "Un canal unique et sécurisé pour vos questions, demandes et validations.",
  },
];

export default function PortailPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portail client"
        title="Votre espace projet sécurisé arrive bientôt"
        description="Le portail client YEESAL AI donnera aux organisations accompagnées un accès sécurisé à leurs projets, livrables et échanges."
      >
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-navy-950/10 bg-white/70 px-4 py-2 font-ui text-xs font-medium text-navy-900/70 backdrop-blur-sm">
          <Lock className="h-3.5 w-3.5 text-electric-500" aria-hidden />
          Authentification sécurisée · Ouverture prochaine
        </div>
      </PageHeader>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <StaggerGroup className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="h-full rounded-3xl border border-navy-950/[0.07] bg-navy-50/40 p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-electric-300">
                    <feature.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h2 className="mt-5 font-display text-lg font-semibold tracking-tight text-navy-950">
                    {feature.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-14 text-center">
            <p className="text-sm text-navy-900/65">
              Client YEESAL AI&nbsp;? En attendant l&apos;ouverture du portail,
              votre équipe projet reste joignable directement.
            </p>
            <div className="mt-6">
              <Button href="/contact">Contacter votre équipe projet</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
