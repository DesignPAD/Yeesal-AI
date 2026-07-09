import { ArrowRight, BadgeCheck } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import type { Solution } from "@/components/solutions/data";

export function SolutionDetail({ solution }: { solution: Solution }) {
  return (
    <>
      <PageHeader
        eyebrow={solution.eyebrow}
        title={solution.title}
        description={solution.description}
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {solution.benefits.map((benefit) => (
            <span
              key={benefit}
              className="inline-flex items-center gap-2 font-ui text-sm font-medium text-navy-900/70"
            >
              <BadgeCheck className="h-4 w-4 text-mint-600" aria-hidden />
              {benefit}
            </span>
          ))}
        </div>
      </PageHeader>

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Fonctionnalités"
            title={solution.headline}
          />
          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2">
            {solution.features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="flex h-full gap-5 rounded-3xl border border-navy-950/[0.07] bg-navy-50/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-electric-500/30 hover:bg-white hover:shadow-xl hover:shadow-navy-950/[0.06]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-electric-300">
                    <feature.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-navy-950">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="bg-navy-50/50 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Cas d'usage"
            title="Ce que ça change au quotidien"
          />
          <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
            {solution.useCases.map((useCase) => (
              <StaggerItem key={useCase.title}>
                <div className="h-full rounded-3xl border border-navy-950/[0.07] bg-white p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                    <useCase.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-navy-950">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                    {useCase.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-3 sm:flex-row">
              <Button href="/diagnostic" size="lg">
                Demander un diagnostic
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                Discuter de votre projet
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
