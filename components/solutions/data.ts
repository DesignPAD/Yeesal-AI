import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Workflow,
  BarChart3,
  MessageSquareText,
  Globe,
  BookOpenText,
  PhoneForwarded,
  FileText,
  Plug,
  RefreshCw,
  LayoutDashboard,
  FileBarChart,
  Database,
  Mic,
  Users,
  ClipboardList,
  UserPlus,
  Activity,
  ShieldCheck,
} from "lucide-react";

export type SolutionFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type SolutionUseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Solution = {
  slug: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  headline: string;
  description: string;
  benefits: string[];
  features: SolutionFeature[];
  useCases: SolutionUseCase[];
  metaTitle: string;
  metaDescription: string;
};

export const solutions: Solution[] = [
  {
    slug: "agents",
    icon: Bot,
    eyebrow: "Agents IA",
    title: "Des agents IA qui parlent la langue de vos clients",
    headline: "L'intelligence conversationnelle au service de vos équipes",
    description:
      "Nos agents IA s'intègrent à vos canaux — WhatsApp Business, site web, outils internes — et s'appuient sur votre base de connaissances pour répondre, qualifier et escalader vers un humain lorsque nécessaire.",
    benefits: [
      "Disponibles 24/7",
      "Alignés à votre métier",
      "Escalade humaine fluide",
    ],
    features: [
      {
        icon: MessageSquareText,
        title: "Agents WhatsApp Business",
        description:
          "Répondez aux demandes clients là où elles arrivent : sur WhatsApp, dans un français naturel, avec le contexte de votre entreprise.",
      },
      {
        icon: Globe,
        title: "Agents web",
        description:
          "Un assistant intégré à votre site qui informe, oriente et qualifie les visiteurs avant de les transmettre à vos équipes commerciales.",
      },
      {
        icon: BookOpenText,
        title: "Base de connaissances",
        description:
          "Vos documents, FAQ et procédures deviennent la mémoire de l'agent : les réponses restent justes, cohérentes et à jour.",
      },
      {
        icon: PhoneForwarded,
        title: "Escalade humaine",
        description:
          "Dès qu'une demande dépasse le périmètre de l'agent, elle est transférée à la bonne personne avec tout l'historique de la conversation.",
      },
    ],
    useCases: [
      {
        icon: MessageSquareText,
        title: "Service client 24/7",
        description:
          "Gestion des questions fréquentes, suivi de dossiers et information usagers, sans temps d'attente.",
      },
      {
        icon: UserPlus,
        title: "Onboarding collaborateurs",
        description:
          "Un agent interne qui accompagne les nouveaux arrivants et répond à leurs questions dès le premier jour.",
      },
      {
        icon: Users,
        title: "Qualification de leads",
        description:
          "Les prospects sont qualifiés automatiquement et transmis à vos commerciaux avec un contexte complet.",
      },
    ],
    metaTitle: "Agents IA — WhatsApp, web et interne",
    metaDescription:
      "Agents IA en français connectés à votre base de connaissances : service client WhatsApp 24/7, assistants web et agents internes, avec escalade humaine.",
  },
  {
    slug: "automatisation",
    icon: Workflow,
    eyebrow: "Automatisation",
    title: "Automatisez les tâches répétitives, libérez vos équipes",
    headline: "Vos workflows optimisés, sans migration lourde",
    description:
      "Nos automatisations se déploient sur vos outils existants : workflows, traitement documentaire, reporting et intégrations Google, Microsoft ou CRM — sans perturber vos équipes.",
    benefits: [
      "Intégrées à vos systèmes",
      "Gain de temps immédiat",
      "Moins d'erreurs, plus de qualité",
    ],
    features: [
      {
        icon: RefreshCw,
        title: "Workflows automatisés",
        description:
          "Les tâches récurrentes — saisies, relances, notifications, validations — s'exécutent seules, de façon fiable et traçable.",
      },
      {
        icon: FileText,
        title: "Traitement documentaire",
        description:
          "Extraction, classement et synthèse automatique de vos documents : factures, contrats, rapports, candidatures.",
      },
      {
        icon: Plug,
        title: "Intégrations natives",
        description:
          "Connexion à vos outils quotidiens : Google Workspace, Microsoft 365, CRM, ERP et messageries professionnelles.",
      },
      {
        icon: ShieldCheck,
        title: "Fiabilité et contrôle",
        description:
          "Chaque automatisation est supervisée : vous gardez la main, avec des points de validation humaine où c'est nécessaire.",
      },
    ],
    useCases: [
      {
        icon: Users,
        title: "Recrutement & RH",
        description:
          "Pré-qualification des candidatures, réponses automatiques et tableaux de bord de suivi RH.",
      },
      {
        icon: Activity,
        title: "Suivi des opérations",
        description:
          "Collecte structurée des informations terrain et remontée en temps réel vers les responsables.",
      },
      {
        icon: FileText,
        title: "Gestion documentaire",
        description:
          "Factures, contrats et courriers traités, classés et résumés automatiquement.",
      },
    ],
    metaTitle: "Automatisation — Workflows & traitement documentaire",
    metaDescription:
      "Automatisation des workflows, traitement documentaire et intégrations Google, Microsoft, CRM pour les organisations africaines. Gain de temps immédiat.",
  },
  {
    slug: "data",
    icon: BarChart3,
    eyebrow: "Data & décision",
    title: "Transformez vos données en décisions",
    headline: "Des indicateurs fiables pour piloter votre organisation",
    description:
      "Nous structurons et exploitons vos données pour éclairer vos décisions stratégiques et opérationnelles : tableaux de bord, rapports automatisés et analyses sur mesure.",
    benefits: [
      "Données structurées et fiables",
      "Reporting automatisé",
      "Pilotage en temps réel",
    ],
    features: [
      {
        icon: Database,
        title: "Structuration des données",
        description:
          "Vos données éparpillées — fichiers, formulaires, messages — deviennent une base propre, cohérente et exploitable.",
      },
      {
        icon: LayoutDashboard,
        title: "Tableaux de bord",
        description:
          "Des vues claires et actualisées pour les directions et les opérations : chacun voit ce qui compte pour lui.",
      },
      {
        icon: FileBarChart,
        title: "Rapports automatisés",
        description:
          "Les rapports périodiques — bailleurs, direction, partenaires — se génèrent seuls, dans un format standardisé.",
      },
      {
        icon: Mic,
        title: "Analyse audio Wolof → FR",
        description:
          "Vos réunions en wolof deviennent des comptes rendus structurés en français, livrés le jour même.",
      },
    ],
    useCases: [
      {
        icon: ClipboardList,
        title: "Reporting ONG",
        description:
          "Consolidation des données terrain et rapports standardisés pour bailleurs et directions pays.",
      },
      {
        icon: Mic,
        title: "Comptes rendus de réunions",
        description:
          "Analyse d'enregistrements en wolof et synthèses en français pour la direction.",
      },
      {
        icon: LayoutDashboard,
        title: "Pilotage d'activité",
        description:
          "Indicateurs commerciaux et opérationnels consolidés dans un tableau de bord unique.",
      },
    ],
    metaTitle: "Data & aide à la décision",
    metaDescription:
      "Structuration de données, tableaux de bord, rapports automatisés et analyse audio wolof → français pour piloter votre organisation avec des indicateurs fiables.",
  },
];

export function getSolution(slug: string): Solution {
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) throw new Error(`Solution inconnue : ${slug}`);
  return solution;
}
