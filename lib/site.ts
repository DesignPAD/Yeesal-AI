export const siteConfig = {
  name: "YEESAL AI",
  url: "https://yessalai.com",
  description:
    "YEESAL AI conçoit des agents IA, des automatisations et des solutions data pour les entreprises, ONG et institutions au Sénégal et en Afrique.",
  tagline: "L'intelligence artificielle au service des organisations africaines",
  locale: "fr_SN",
  email: "contact@yessalai.com",
  whatsapp: "https://wa.me/221779437133",
  whatsappNumber: "221779437133",
  address: "Dakar, Sénégal",
} as const;

export const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Diagnostic", href: "/diagnostic" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  solutions: [
    { label: "Agents IA", href: "/solutions/agents" },
    { label: "Automatisation", href: "/solutions/automatisation" },
    { label: "Data & décision", href: "/solutions/data" },
    { label: "Toutes les solutions", href: "/solutions" },
  ],
  company: [
    { label: "Diagnostic IA", href: "/diagnostic" },
    { label: "Portail client", href: "/portail" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [{ label: "Mentions légales & confidentialité", href: "/legal" }],
} as const;
