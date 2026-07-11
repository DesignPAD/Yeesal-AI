import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ — Vos questions sur l'IA et nos solutions",
  description:
    "Sécurité des données, délais, langues, fonctionnement des projets : les réponses aux questions fréquentes sur YEESAL AI et ses solutions.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        eyebrow="FAQ"
        title="Questions fréquentes"
        description="Sécurité des données, confidentialité, délais, langues : tout ce qu'il faut savoir avant de démarrer un projet avec YEESAL AI."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <Accordion items={[...faqs]} />
          </Reveal>

          <Reveal className="mt-16 rounded-3xl bg-navy-950 p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
              Vous avez une question spécifique&nbsp;?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-navy-100/65">
              Nous pouvons organiser un échange dédié à votre organisation pour
              répondre en détail à vos questions.
            </p>
            <div className="mt-7">
              <Button href="/contact" variant="white">
                Contacter YEESAL AI
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
