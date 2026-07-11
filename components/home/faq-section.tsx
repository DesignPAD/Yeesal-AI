import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { faqs } from "@/lib/faq";

export function FaqSection() {
  return (
    <section className="bg-navy-50/50 py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions fréquentes"
          description="Les réponses aux questions que l'on nous pose le plus souvent."
        />
        <Reveal className="mt-12">
          <Accordion items={faqs.slice(0, 5)} />
        </Reveal>
        <Reveal className="mt-8 text-center">
          <Link
            href="/faq"
            className="group inline-flex items-center gap-1.5 font-ui text-sm font-semibold text-electric-600 transition-colors hover:text-electric-700"
          >
            Voir toutes les questions
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
