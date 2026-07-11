# YEESAL AI — Site vitrine

Site public de **YEESAL AI**, entreprise d'intelligence artificielle basée à Dakar (Sénégal) : agents IA en français, automatisation de workflows et solutions data pour les entreprises, ONG et institutions africaines.

## Stack

- **Next.js** (App Router, rendu statique) + **React** + **TypeScript strict**
- **Tailwind CSS v4** — design tokens dans `app/globals.css` (`@theme`)
- **Framer Motion** — animations (avec support `prefers-reduced-motion`)
- **Lucide** — icônes

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
npm run lint
```

## Structure

```
app/                  Pages (App Router) + sitemap, robots, favicons
components/
  home/               Sections de la page d'accueil (hero, services, …)
  layout/             Navbar, footer, en-tête de page
  solutions/          Données + template des pages solutions
  forms/              Formulaires contact & diagnostic
  ui/                 Primitives réutilisables (Button, Container, Accordion, …)
  motion/             Wrappers d'animation (Reveal, Stagger)
lib/                  Config du site (lib/site.ts), FAQ, utilitaires
public/brand/         Logo, marque et image Open Graph
```

## Points d'entrée utiles

- **Coordonnées & liens de navigation** : `lib/site.ts` (email, WhatsApp, URL canonique)
- **Polices** : titres en pile système « Helvetica Neue » (`--font-display` dans `app/globals.css`, aucun fichier embarqué) ; Poppins (UI), Inter (texte) et Delta Block (accents décoratifs) via `app/layout.tsx`
- **Formulaires** : sans backend pour l'instant (ouverture de WhatsApp avec message pré-rempli) ; brancher une API dans `components/forms/*` le moment venu

## Déploiement

Voir [DEPLOY.md](DEPLOY.md) (GitHub + Vercel + domaine yessalai.com).
