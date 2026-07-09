import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Puzzle } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { solutions } from "@/components/solutions/data";

export const metadata: Metadata = {
  title: "Solutions IA — Agents, automatisation, data",
  description:
    "Agents IA en français, automatisation des workflows et solutions data pour les entreprises, ONG et institutions africaines. Trouvez le bon levier d'impact.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos solutions"
        title="Trouvez la solution qui correspond à votre besoin"
        description="Agents IA, automatisation des workflows, data & aide à la décision ou solutions sur-mesure : YEESAL AI structure son offre pour vous guider vers le bon levier d'impact."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="space-y-6">
          {solutions.map((solution, index) => (
            <Reveal key={solution.slug}>
              <Link
                href={`/solutions/${solution.slug}`}
                className="group grid gap-8 rounded-3xl border border-navy-950/[0.07] bg-navy-50/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-electric-500/30 hover:bg-white hover:shadow-xl hover:shadow-navy-950/[0.06] sm:p-10 lg:grid-cols-[1fr_1.4fr] lg:items-center"
              >
                <div>
                  <p className="font-display text-sm font-semibold text-electric-600">
                    0{index + 1}
                  </p>
                  <span className="mt-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-950 text-electric-300">
                    <solution.icon className="h-7 w-7" aria-hidden />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-navy-950">
                    {solution.eyebrow}
                  </h2>
                  <p className="mt-1.5 text-base font-medium text-navy-900/75">
                    {solution.headline}
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-navy-900/65">
                    {solution.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {solution.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="inline-flex items-center gap-2 font-ui text-sm font-medium text-navy-900/75"
                      >
                        <BadgeCheck
                          className="h-4 w-4 text-mint-600"
                          aria-hidden
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-7 inline-flex items-center gap-1.5 font-ui text-sm font-semibold text-electric-600">
                    Découvrir en détail
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          {/* Sur-mesure */}
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-8 sm:p-10">
              <div
                className="absolute inset-0 bg-grid-dark mask-fade-b"
                aria-hidden
              />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
                <div>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-electric-500/15 text-electric-300">
                    <Puzzle className="h-7 w-7" aria-hidden />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-white">
                    Solutions sur-mesure
                  </h2>
                  <p className="mt-1.5 text-base font-medium text-navy-100/75">
                    Une solution conçue pour votre activité
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-navy-100/65">
                    Quand vos enjeux dépassent les briques prêtes à l&apos;emploi,
                    nous concevons avec vous une architecture IA et
                    d&apos;automatisation adaptée à vos processus uniques —
                    évolutive et mesurable.
                  </p>
                  <div className="mt-7">
                    <Button href="/contact" variant="white">
                      En discuter avec nous
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy-50/50 py-20 sm:py-24">
        <Container>
          <StaggerGroup className="mx-auto max-w-2xl text-center">
            <StaggerItem>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 text-balance sm:text-4xl">
                Vous ne savez pas par où commencer&nbsp;?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy-900/65">
                Un Diagnostic YEESAL AI identifie rapidement les solutions les
                plus pertinentes pour votre organisation — avec des gains
                chiffrés et un plan d&apos;action concret.
              </p>
              <div className="mt-8">
                <Button href="/diagnostic" size="lg">
                  Demander un diagnostic
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </Container>
      </section>
    </>
  );
}
