# YEESAL AI — Stack technique & choix d'architecture

Ce document explique les technologies utilisées sur le site yessalai.com et **pourquoi** chacune a été retenue.

---

## Vue d'ensemble

| Couche | Technologie | Rôle |
|---|---|---|
| Framework | **Next.js 16** (App Router) | Rendu, routing, SEO, optimisation |
| UI | **React 19** + **TypeScript strict** | Composants typés et fiables |
| Styles | **Tailwind CSS v4** | Design system par tokens |
| Animations | **Framer Motion** | Animations fluides et accessibles |
| Icônes | **Lucide** | Icônes SVG légères et cohérentes |
| Polices | **next/font** (local + Google) | Chargement optimisé, zéro layout shift |
| Outillage | **ESLint 9**, **sharp** | Qualité de code, génération d'assets |
| Hébergement cible | **Vercel** | Déploiement continu depuis GitHub |

---

## Choix détaillés

### Next.js 16 (App Router)

**Pourquoi :**
- **100 % statique** : les 16 routes sont pré-rendues au build (`prerendered as static content`). Le site se sert depuis un CDN — rapide partout, y compris sur les connexions mobiles d'Afrique de l'Ouest, et quasi gratuit à héberger.
- **SEO natif** : metadata par page, Open Graph, `sitemap.xml` et `robots.txt` générés par le framework, favicons par convention de fichiers (`app/icon.png`).
- **Évolutif sans réécriture** : le jour où YEESAL AI ajoute un portail client, de l'authentification, un dashboard ou une API, l'App Router accueille les routes serveur, les layouts imbriqués et les server actions dans la même base de code.

### TypeScript (mode strict)

**Pourquoi :** détection des erreurs à la compilation plutôt qu'en production. Exemple concret : les données des solutions (`components/solutions/data.ts`) sont typées — impossible d'oublier un champ en ajoutant une nouvelle solution.

### Tailwind CSS v4

**Pourquoi :**
- Le design system vit dans **un seul fichier** (`app/globals.css`, bloc `@theme`) : thème clair « Behance-style » (fonds quasi blancs, titres encre `#0a0b14`), accent bleu électrique unique (`--color-electric-500: #0d5cff`), polices, easings. Changer la couleur de marque = changer cette variable.
- Pas de CSS mort : seules les classes utilisées sont générées.
- La v4 se configure en CSS natif (plus de `tailwind.config.js`), ce qui simplifie la maintenance.

### Framer Motion

**Pourquoi :**
- Animations déclaratives (apparitions au scroll, hero géométrique, compteurs animés) avec des transitions à 60 FPS (transform/opacity uniquement).
- **Accessibilité intégrée** : chaque animation respecte `prefers-reduced-motion` via `useReducedMotion()` — les utilisateurs sensibles au mouvement voient un site statique.
- Chargé uniquement dans les composants clients qui en ont besoin (le reste du site est du HTML statique).

### Polices — next/font

| Police | Usage | Chargement |
|---|---|---|
| **« Helvetica Neue » (pile système)** | Titres et display (look Behance) | Aucun fichier — police système, zéro octet téléchargé |
| **Delta Block** (CC0) | Accents décoratifs techno (filigrane, chiffres clés) | Fichier local (`assets/fonts/`) |
| **Poppins** | UI : navigation, boutons, labels | Google Fonts, self-hosted au build |
| **Inter** | Texte courant (petits textes) — fallback Helvetica | Google Fonts, self-hosted au build |

**Pourquoi une pile système pour les titres :** rendu immédiat sans téléchargement (zéro layout shift, meilleur LCP) et l'esthétique neutre « grotesque » recherchée. Montserrat (variable) reste disponible dans `assets/fonts/` si la marque revient à une police dédiée.

**Pourquoi next/font pour le reste :** les fichiers sont servis depuis notre propre domaine (pas de requête vers Google au runtime — meilleur pour la vie privée et le RGPD), avec `font-display: swap` et des métriques de fallback calculées automatiquement → **zéro Cumulative Layout Shift**.

> ⚠️ **Equinox** n'a pas été intégrée : sa licence est « personal use only » (usage commercial payant — voir `brand-src/equinox/IMPORTAN!! Readme First.txt`). **Delta Block** (domaine public/CC0, `brand-src/delta-block/License.txt`) la remplace pour le même rendu techno, en toute légalité. Si vous achetez la licence Equinox, le remplacement se fait en une ligne dans `app/layout.tsx`.

### Lucide (icônes)

**Pourquoi :** SVG purs (pas de fonte d'icônes), tree-shakés — seules les ~40 icônes utilisées sont embarquées. Style cohérent avec l'esthétique minimale du site.

### sharp (outillage, dev uniquement)

**Pourquoi :** génération des déclinaisons du logo (favicon `app/icon.png`, icône Apple, carte Open Graph 1200×630) à partir des fichiers de marque source. Ne fait pas partie du bundle du site.

---

## Architecture du code

```
app/                    Routes (App Router) : pages, sitemap, robots, favicons
assets/fonts/           Polices embarquées au build (non exposées publiquement)
brand-src/              Sources de marque (fonts brutes, licences) — non déployé sur le site
components/
  home/                 Sections de la page d'accueil (1 fichier = 1 section)
  layout/               Navbar, footer, en-tête de page interne
  solutions/            Données typées + template partagé des pages solutions
  forms/                Formulaires (contact, diagnostic) → WhatsApp pré-rempli
  ui/                   Primitives réutilisables : Button, Container, Accordion…
  motion/               Wrappers d'animation (Reveal, Stagger)
lib/                    Config centrale (site.ts : domaine, email, WhatsApp), FAQ, utils
public/brand/           Assets publics : logo, OG, photos
```

**Principes appliqués :**
- **Une source de vérité** : coordonnées, domaine et numéro WhatsApp vivent dans `lib/site.ts` ; les 3 pages solutions partagent un seul template alimenté par des données typées.
- **Client components au minimum** : seuls la navbar, le hero, les formulaires et les compteurs sont interactifs ; tout le reste est rendu côté serveur.
- **Prêt pour le SaaS** : la structure accepte `app/(dashboard)/`, `app/api/`, l'authentification et la facturation sans réorganisation.

---

## Performance, accessibilité, SEO

- **Rendu 100 % statique**, aucune image distante (tout est servi localement, optimisé par `next/image`).
- **Accessibilité** : HTML sémantique, ARIA sur le menu mobile et l'accordéon, focus visible partout, contrastes conformes, `prefers-reduced-motion` respecté.
- **SEO** : metadata + canonical par page, Open Graph/Twitter Cards, JSON-LD (`Organization` global, `FAQPage` sur /faq), sitemap et robots générés, portail client exclu de l'indexation.

---

## Formulaires sans backend (choix assumé)

Les formulaires contact et diagnostic ouvrent **WhatsApp** (`wa.me/221779437133`) avec un message pré-rempli. Pourquoi : au Sénégal, WhatsApp Business est le canal où les prospects répondent réellement, et cela évite de maintenir un backend pour un site vitrine. Le jour où un CRM/backend arrive, seule la fonction `handleSubmit` de chaque formulaire change.
