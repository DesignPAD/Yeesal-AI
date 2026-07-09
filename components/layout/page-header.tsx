import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      className="relative overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-44"
      style={{ background: "linear-gradient(180deg, #eef3ff 0%, #ffffff 100%)" }}
    >
      <div
        className="absolute inset-0 bg-grid-light mask-fade-b opacity-60"
        aria-hidden
      />
      <div
        className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-electric-400/15 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.22em] text-electric-600">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-navy-950 text-balance sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-900/70 sm:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
