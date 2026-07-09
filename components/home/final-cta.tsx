import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function FinalCta() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-electric-500 px-6 py-20 text-center shadow-2xl shadow-electric-500/25 sm:px-16 sm:py-24">
            <div className="absolute inset-0 bg-grid-dark" aria-hidden />
            <div
              className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-white/15 blur-3xl"
              aria-hidden
            />
            {/* Outlined display-type watermark — tone-on-tone deep blue so it
                reads as an embossed pattern instead of washed-out white */}
            <span
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-tech text-[14vw] uppercase leading-none tracking-[0.12em] text-transparent [-webkit-text-stroke:1.5px_rgba(9,53,155,0.45)]"
              aria-hidden
            >
              Yeesal&nbsp;AI
            </span>

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-5xl">
                Prêt à mettre l&apos;IA au travail dans votre
                organisation&nbsp;?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">
                Parlons de vos processus, de vos données et de vos objectifs.
                En quelques semaines, un premier cas d&apos;usage peut être en
                production.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact" variant="white" size="lg" className="w-full sm:w-auto">
                  Demander une démo
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
                <Button
                  href="/diagnostic"
                  variant="outline-light"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Demander un diagnostic
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
