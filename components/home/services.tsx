import Link from "next/link";
import { ArrowUpRight, Bot, Workflow, BarChart3, Puzzle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SolutionsBackdrop } from "@/components/home/solutions-backdrop";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Bot,
    title: "Agents IA",
    description:
      "Assistants conversationnels sur WhatsApp, web et en interne, connectés à votre base de connaissances. Ils répondent, qualifient et escaladent vers vos équipes.",
    href: "/solutions/agents",
    accent: "text-electric-500 bg-electric-50",
    span: "lg:col-span-3",
  },
  {
    icon: Workflow,
    title: "Automatisation",
    description:
      "Workflows optimisés, traitement documentaire et intégrations à vos outils existants — Google, Microsoft, CRM — sans migration lourde.",
    href: "/solutions/automatisation",
    accent: "text-mint-600 bg-mint-400/10",
    span: "lg:col-span-3",
  },
  {
    icon: BarChart3,
    title: "Data & aide à la décision",
    description:
      "Structuration et exploitation de vos données : tableaux de bord, rapports automatisés et indicateurs fiables pour piloter votre organisation.",
    href: "/solutions/data",
    accent: "text-navy-700 bg-navy-100",
    span: "lg:col-span-2",
  },
  {
    icon: Puzzle,
    title: "Solutions sur-mesure",
    description:
      "Quand vos enjeux dépassent les briques standard, nous concevons une architecture IA adaptée à vos processus uniques.",
    href: "/contact",
    accent: "text-electric-600 bg-electric-100",
    span: "lg:col-span-4",
  },
];

export function Services() {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #eef3ff 45%, #ffffff 100%)",
      }}
    >
      {/* Subtle grid + diffuse blue halos, echoing the hero */}
      <div
        className="absolute inset-0 bg-grid-light opacity-50 mask-fade-b"
        aria-hidden
      />
      <div
        className="absolute -left-40 top-16 h-96 w-96 rounded-full bg-electric-400/15 blur-[110px]"
        aria-hidden
      />
      <div
        className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-electric-300/20 blur-[100px]"
        aria-hidden
      />
      <SolutionsBackdrop />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Nos solutions"
          title="Une plateforme, trois leviers d'impact"
          description="Des briques complémentaires, conçues pour les réalités des organisations africaines et déployées sans perturber vos équipes."
        />
        <StaggerGroup className="mt-14 grid gap-5 lg:grid-cols-6">
          {services.map((service) => (
            <StaggerItem key={service.title} className={service.span}>
              <Link
                href={service.href}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-[#E7EEFF] bg-white p-8 shadow-[0_8px_30px_rgba(10,11,20,0.05)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-electric-500/40 hover:shadow-[0_24px_60px_rgba(13,92,255,0.14)]"
              >
                <div>
                  <span
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-2xl",
                      service.accent,
                    )}
                  >
                    <service.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-navy-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-900/65">
                    {service.description}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-1.5 font-ui text-sm font-semibold text-electric-600">
                  En savoir plus
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
