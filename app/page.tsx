import Link from "next/link";
import HeroSection from "./components/HeroSection";

const faqs = [
  {
    question: "Qu’est-ce que YEESAL AI fait concrètement ?",
    answer:
      "Nous concevons et déployons des agents IA, des automatisations de workflows et des solutions data pour aider les organisations à gagner du temps, améliorer l’expérience client et prendre de meilleures décisions.",
  },
  {
    question: "À qui s’adresse YEESAL AI ?",
    answer:
      "Nous travaillons avec des entreprises privées, des ONG et des institutions au Sénégal et en Afrique, en collaboration avec les équipes direction, IT, opérations, service client et RH.",
  },
  {
    question: "Qu’est-ce qu’un Diagnostic YEESAL AI ?",
    answer:
      "C’est une analyse structurée de vos processus, données et outils existants pour identifier les opportunités IA/automatisation les plus pertinentes, chiffrer les gains potentiels et définir un plan d’action réaliste.",
  },
  {
    question: "Combien de temps prend un projet type ?",
    answer:
      "Un premier POC peut être mis en place en quelques semaines après le Diagnostic, puis déployé progressivement en fonction de votre organisation et de vos contraintes opérationnelles.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900">
      {/* Hero */}
      <HeroSection />

      {/* Solutions overview */}
      <section className="border-t border-slate-100 bg-white px-4 md:px-6">
        <div className="mx-auto max-w-6xl py-16 sm:py-20">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-slate-900">
              Solutions YEESAL AI
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
              Trois piliers complémentaires pour créer un impact mesurable dans
              votre organisation.
            </p>
            <Link
              href="/solutions"
              className="mt-4 inline-flex items-center justify-center text-sm font-semibold text-[#1581BF] underline-offset-4 hover:underline"
            >
              Découvrir toutes les solutions
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Link
              href="/solutions/agents"
              className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#1581BF] hover:bg-white"
            >
              <div>
                <h3 className="font-[family-name:var(--font-poppins))] text-base font-semibold text-slate-900">
                  Agents IA
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Agents WhatsApp, web et internes connectés à votre base de
                  connaissances pour répondre, orienter et escalader vers vos
                  équipes.
                </p>
              </div>
              <span className="mt-4 text-sm font-medium text-[#1581BF]">
                En savoir plus →
              </span>
            </Link>

            <Link
              href="/solutions/automatisation"
              className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#0AFF5C] hover:bg-white"
            >
              <div>
                <h3 className="font-[family-name:var(--font-poppins))] text-base font-semibold text-slate-900">
                  Automatisation
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Optimisation de vos workflows, traitement documentaire et
                  intégrations avec vos outils (Google, Microsoft, CRM, etc.).
                </p>
              </div>
              <span className="mt-4 text-sm font-medium text-[#1581BF]">
                En savoir plus →
              </span>
            </Link>

            <Link
              href="/solutions/data"
              className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#1581BF] hover:bg-white"
            >
              <div>
                <h3 className="font-[family-name:var(--font-poppins))] text-base font-semibold text-slate-900">
                  Data & aide à la décision
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Structuration et exploitation de vos données pour éclairer les
                  décisions stratégiques et opérationnelles.
                </p>
              </div>
              <span className="mt-4 text-sm font-medium text-[#1581BF]">
                En savoir plus →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Nos cas d’usages */}
      <section className="border-t border-slate-100 bg-slate-50/60 px-4 md:px-6">
        <div className="mx-auto max-w-6xl py-16 sm:py-20">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-slate-900">
              Nos cas d&apos;usages
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
              Des scénarios concrets inspirés des besoins des entreprises, ONG
              et institutions au Sénégal.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Service client WhatsApp",
                short: "Répondre aux demandes 24/7 sur WhatsApp Business.",
                long: "Un agent IA connecté à votre base de connaissances pour gérer les questions fréquentes, suivre les dossiers et escalader vers vos équipes si nécessaire.",
                href: "/solutions/agents",
              },
              {
                title: "Réunions Wolof → compte rendu FR",
                short: "Suivi des réunions dans la langue de travail.",
                long: "Analyse d’enregistrements audio en wolof et génération de comptes rendus structurés en français pour les directions et les partenaires.",
                href: "/solutions/data",
              },
              {
                title: "Recrutement & RH",
                short: "Automatiser une partie du tri et du suivi.",
                long: "Pré-qualification des candidatures, réponses automatiques aux candidats et tableaux de bord de suivi pour les équipes RH.",
                href: "/solutions/automatisation",
              },
              {
                title: "Reporting ONG",
                short: "Standardiser et fiabiliser vos rapports.",
                long: "Consolidation automatique des données terrain, génération de rapports structurés pour bailleurs et directions pays.",
                href: "/solutions/data",
              },
              {
                title: "Onboarding collaborateurs",
                short: "Accueillir et informer dès le premier jour.",
                long: "Agent interne disponible sur vos canaux pour répondre aux questions des nouveaux collaborateurs et partager les bons contenus.",
                href: "/solutions/agents",
              },
              {
                title: "Suivi des opérations",
                short: "Remonter les informations clés en temps réel.",
                long: "Collecte structurée des informations opérationnelles et mise à disposition de vues synthétiques pour les responsables.",
                href: "/solutions/automatisation",
              },
            ].map((useCase) => (
              <Link
                key={useCase.title}
                href={useCase.href}
                className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#1581BF]"
              >
                <div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-base font-semibold text-slate-900">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 group-hover:hidden">
                    {useCase.short}
                  </p>
                  <p className="mt-2 hidden text-sm text-slate-600 group-hover:block">
                    {useCase.long}
                  </p>
                </div>
                <span className="mt-4 text-sm font-medium text-[#1581BF]">
                  En savoir plus →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode YEESAL AI */}
      <section className="border-t border-slate-100 bg-white px-4 md:px-6">
        <div className="mx-auto max-w-6xl py-16 sm:py-20">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-slate-900">
              Méthode YEESAL AI
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
              Une approche structurée pour sécuriser vos décisions et maximiser
              l’impact des projets IA et automatisation.
            </p>
          </div>

          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Diagnostic",
                description:
                  "Analyse de votre contexte, de vos processus et de vos données pour identifier les meilleurs cas d’usage.",
              },
              {
                title: "POC piloté",
                description:
                  "Mise en place d’un prototype ciblé avec vos équipes, sur un périmètre maîtrisé et mesurable.",
              },
              {
                title: "Déploiement",
                description:
                  "Généralisation progressive de la solution, accompagnement des équipes et suivi des indicateurs.",
              },
            ].map((step, index) => (
              <li key={step.title} className="relative">
                <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1581BF] text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-base font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA banner */}
      <section className="border-t border-slate-100 bg-gradient-to-r from-[#020617] via-[#020617] to-[#020617] px-4 md:px-6">
        <div className="mx-auto max-w-6xl py-12 sm:py-16">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-xl font-semibold text-white sm:text-2xl">
              Prêt à explorer vos opportunités IA&nbsp;?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Un Diagnostic structuré permet d’identifier rapidement les cas
              d’usage à fort impact et de sécuriser votre feuille de route.
            </p>
            <Link
              href="/diagnostic"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1581BF] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#10659b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AFF5C] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Demander un Diagnostic
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-100 bg-white px-4 md:px-6">
        <div className="mx-auto max-w-6xl py-16 sm:py-20">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-slate-900">
              Questions fréquentes
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
              Quelques réponses rapides. Pour aller plus loin, nous pouvons
              organiser un Diagnostic dédié à votre organisation.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition hover:border-[#1581BF]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-sm font-medium text-slate-900">
                    {item.question}
                  </span>
                  <span className="text-xs text-slate-500 group-open:hidden">
                    +
                  </span>
                  <span className="hidden text-xs text-slate-500 group-open:inline">
                    –
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-slate-600">
            Vous avez une question spécifique&nbsp;?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#1581BF] underline-offset-4 hover:underline"
            >
              Contactez YEESAL AI
            </Link>
            .
          </div>
        </div>
      </section>
    </main>
  );
}
