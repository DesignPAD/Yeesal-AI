import Link from "next/link";
import Image from "next/image";

const solutions = [
  {
    id: "agents",
    badge: "Prêt à l'emploi",
    title: "Agents IA",
    headline: "L'intelligence conversationnelle au service de vos équipes",
    description:
      "Nos agents IA s'intègrent à vos canaux (WhatsApp Business, web, interne) et s'appuient sur votre base de connaissances pour répondre aux demandes, qualifier les leads et escalader vers un humain lorsque nécessaire.",
    benefits: [
      "Disponibles 24/7",
      "Alignés à votre métier",
      "Escalade humaine fluide",
    ],
    cta: "Découvrir les agents IA",
    href: "/solutions/agents",
    image: "https://images.unsplash.com/photo-1531746795393-6c090729593e?w=800&q=80",
    imageAlt: "Équipe et collaboration digitale",
  },
  {
    id: "automatisation",
    badge: "Prêt à l'emploi",
    title: "Automatisation",
    headline: "Automatisez vos tâches répétitives avec l'IA",
    description:
      "Nos automatisations sont conçues pour se déployer sur vos outils existants : workflows, traitement documentaire, reporting et intégrations (Google, Microsoft, CRM). Sans migration lourde, sans perturber vos équipes.",
    benefits: [
      "Intégrées à vos systèmes",
      "Gain de temps immédiat",
      "Moins d'erreurs, plus de qualité",
    ],
    cta: "Découvrir l'automatisation",
    href: "/solutions/automatisation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    imageAlt: "Tableau de bord et données",
  },
  {
    id: "data",
    badge: "Solution clé",
    title: "Data & aide à la décision",
    headline: "Éclairez vos décisions avec vos données",
    description:
      "Nous vous aidons à structurer, exploiter et valoriser vos données : tableaux de bord, rapports automatisés, indicateurs pour les directions et les opérations.",
    benefits: [
      "Données structurées et fiables",
      "Reporting automatisé",
      "Pilotage en temps réel",
    ],
    cta: "Découvrir la data & décision",
    href: "/solutions/data",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    imageAlt: "Analyse et décision data",
  },
  {
    id: "sur-mesure",
    badge: "Sur-mesure",
    title: "Solutions sur-mesure",
    headline: "Une solution conçue pour votre activité",
    description:
      "Quand vos enjeux dépassent les briques prêtes à l'emploi, nous concevons avec vous une architecture IA et d'automatisation adaptée à vos processus uniques.",
    benefits: ["Conçu pour vous", "Impact mesurable", "Évolutif"],
    cta: "En discuter",
    href: "/contact",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    imageAlt: "Collaboration et sur-mesure",
  },
];

const totalSteps = solutions.length;

export default function SolutionsPage() {
  return (
    <main className="min-h-screen text-slate-900">
      {/* Intro — subtle blue gradient for clarity */}
      <section
        className="border-b border-slate-100 px-4 md:px-6"
        style={{
          background:
            "linear-gradient(135deg, rgba(21,129,191,0.06) 0%, rgba(255,255,255,0.98) 40%, #ffffff 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl py-16 sm:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1581BF]">
              Nos solutions
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Trouvez la solution qui correspond à votre besoin
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-700">
              Agents IA, automatisation des workflows, data & aide à la décision
              ou solutions sur-mesure : YEESAL AI structure son offre pour vous
              guider vers le bon levier d&apos;impact.
            </p>
          </div>
        </div>
      </section>

      {/* Solution blocks — elegant two-column with gradient background + image */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className="border-b border-slate-100 px-4 md:px-6"
          style={{
            background:
              index % 2 === 0
                ? "linear-gradient(90deg, rgba(21,129,191,0.07) 0%, rgba(255,255,255,1) 35%, #ffffff 100%)"
                : "linear-gradient(90deg, #ffffff 0%, rgba(21,129,191,0.05) 65%, rgba(21,129,191,0.08) 100%)",
          }}
        >
          <div className="mx-auto max-w-6xl py-14 sm:py-20">
            {/* Step indicator */}
            <div className="mb-8 flex items-center gap-2">
              <span className="rounded-full bg-[#1581BF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#1581BF]">
                {solution.badge}
              </span>
              <span className="text-slate-300">—</span>
              <span className="text-sm font-medium text-slate-500">
                {index + 1} — {totalSteps}
              </span>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              {/* Left: image */}
              <div className="relative order-2 lg:order-1">
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60">
                  <Image
                    src={solution.image}
                    alt={solution.imageAlt}
                    width={800}
                    height={500}
                    className="h-[280px] w-full object-cover sm:h-[340px]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: content */}
              <div className="order-1 lg:order-2">
                <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-[#1581BF] sm:text-3xl">
                  {solution.title}
                </h2>
                <div className="mt-2 h-1 w-12 rounded-full bg-[#1581BF]/40" />
                <p className="mt-5 text-lg font-medium leading-snug text-slate-900">
                  {solution.headline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  {solution.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {solution.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1581BF]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={solution.href}
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1581BF] to-[#10659b] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#1581BF]/25 transition hover:from-[#10659b] hover:to-[#0d5488] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AFF5C] focus-visible:ring-offset-2"
                  >
                    {solution.cta}
                  </Link>
                  <Link
                    href="/diagnostic"
                    className="inline-flex items-center justify-center rounded-xl border border-[#1581BF] bg-white px-6 py-3 text-sm font-semibold text-[#1581BF] transition hover:bg-[#1581BF]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AFF5C] focus-visible:ring-offset-2"
                  >
                    Demander un Diagnostic
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Integrations-style CTA — central box on subtle gradient */}
      <section
        className="px-4 md:px-6"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, rgba(21,129,191,0.05) 50%, rgba(21,129,191,0.08) 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl py-16 sm:py-20">
          <div className="flex flex-col items-center text-center">
            <div className="max-w-xl rounded-2xl border border-slate-200/80 bg-white/95 p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100">
              <h2 className="font-[family-name:var(--font-poppins)] text-xl font-semibold text-slate-900 sm:text-2xl">
                Intégrez l&apos;IA dans vos outils quotidiens et gagnez en
                productivité
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Google, Microsoft, CRM, WhatsApp… Nous nous connectons à vos
                plateformes pour déployer agents et automatisations sans
                perturber vos habitudes.
              </p>
              <Link
                href="/diagnostic"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1581BF] to-[#10659b] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#1581BF]/25 transition hover:from-[#10659b] hover:to-[#0d5488] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AFF5C] focus-visible:ring-offset-2"
              >
                Demander un Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA banner — blue gradient */}
      <section
        className="px-4 md:px-6"
        style={{
          background:
            "linear-gradient(135deg, #0a2540 0%, #1581BF 45%, #0d5488 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl py-16 sm:py-20">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-white sm:text-3xl">
              Vous ne savez pas par où commencer ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-200">
              Un Diagnostic YEESAL AI permet d&apos;identifier rapidement les
              solutions les plus pertinentes pour votre organisation.
            </p>
            <Link
              href="/diagnostic"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-semibold text-[#1581BF] shadow-lg transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AFF5C] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Demander un Diagnostic
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
