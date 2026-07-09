import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales & confidentialité",
  description:
    "Mentions légales, protection des données personnelles et engagements de confidentialité de YEESAL AI.",
  alternates: { canonical: "/legal" },
};

const sections = [
  {
    title: "Éditeur du site",
    content: [
      `Le site est édité par ${siteConfig.name}, société basée à Dakar, Sénégal.`,
      `Contact : ${siteConfig.email}`,
    ],
  },
  {
    title: "Hébergement",
    content: [
      "Le site est hébergé sur une infrastructure cloud sécurisée. Les informations détaillées d'hébergement peuvent être communiquées sur demande à l'adresse de contact ci-dessus.",
    ],
  },
  {
    title: "Protection des données personnelles",
    content: [
      "Les informations transmises via les formulaires du site (nom, email, organisation, message) sont utilisées exclusivement pour répondre à votre demande. Elles ne sont ni vendues, ni partagées avec des tiers à des fins commerciales.",
      "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer, écrivez-nous à l'adresse de contact ci-dessus.",
    ],
  },
  {
    title: "Confidentialité des projets clients",
    content: [
      "YEESAL AI s'engage contractuellement à la confidentialité des données, documents et processus de ses clients. Les données traitées dans le cadre d'un projet restent la propriété exclusive du client.",
      "Nos architectures sont conçues pour limiter les accès aux seules personnes habilitées et pour garantir la traçabilité des traitements.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Ce site n'utilise pas de cookies publicitaires. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés.",
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      "L'ensemble des contenus du site (textes, visuels, logo, marque YEESAL AI) est protégé. Toute reproduction sans autorisation préalable est interdite.",
    ],
  },
];

export default function LegalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Informations légales"
        title="Mentions légales & confidentialité"
        description="Nos engagements en matière de transparence, de protection des données et de confidentialité."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl font-semibold tracking-tight text-navy-950">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.content.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed text-navy-900/70"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
