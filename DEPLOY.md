# Déploiement YEESAL AI — GitHub + Vercel + yessalai.com

## 1. Pousser le projet sur GitHub

Dans le dossier du projet (PowerShell) :

```powershell
cd "c:\Users\LENEVO X11 SLIM\Desktop\PAD, Le REDOUTABLE\WEBSITE PROJECTS\yeesal-ai"

# Si pas encore fait : initialiser Git
git init

# Tout ajouter et committer
git add .
git commit -m "Site YEESAL AI prêt pour déploiement"

# Branche main
git branch -M main

# Remplacer TON-USERNAME par ton identifiant GitHub
git remote add origin https://github.com/TON-USERNAME/yeesal-ai.git

# Premier push
git push -u origin main
```

**Créer le dépôt sur GitHub** (si besoin) : [github.com/new](https://github.com/new) → nom du repo : `yeesal-ai` → Create repository, puis exécuter les commandes ci-dessus en adaptant l’URL.

---

## 2. Connecter GitHub à Vercel

1. Va sur **[vercel.com](https://vercel.com)** et connecte-toi (avec ton compte **GitHub**).
2. Clique **Add New…** → **Project**.
3. Choisis **Import** à côté du dépôt **yeesal-ai** (ou **Import Git Repository** si tu ne le vois pas, et autorise Vercel à accéder à tes repos GitHub).
4. **Framework Preset** : Next.js (détecté automatiquement).  
   **Root Directory** : laisser vide.  
   **Build Command** : `npm run build` (par défaut).  
   **Output Directory** : laisser par défaut.
5. Clique **Deploy**. Après 1–2 minutes, le site est en ligne sur une URL du type `yeesal-ai.vercel.app`.

---

## 3. Ajouter ton domaine yessalai.com

1. Dans **Vercel** : ouvre ton projet → onglet **Settings** → **Domains**.
2. Dans **Domain**, saisis **yessalai.com** → **Add**.
3. Vercel affiche les enregistrements DNS à configurer chez ton registrar (ex. OVH, Namecheap, Google Domains, etc.) :
   - Soit **A** : `76.76.21.21`
   - Soit **CNAME** : `cname.vercel-dns.com` (souvent pour `www`)
4. Chez ton **registrar** (là où tu as acheté le domaine) :
   - Va dans la gestion DNS du domaine.
   - Ajoute les enregistrements indiqués par Vercel (A et/ou CNAME).
   - Pour avoir à la fois **yessalai.com** et **www.yessalai.com**, ajoute les deux comme proposé par Vercel.
5. La propagation DNS peut prendre de 5 minutes à 48 h. Une fois faite, Vercel activera automatiquement le HTTPS pour ton domaine.

---

## 4. Résumé

| Étape              | Où / Quoi |
|--------------------|-----------|
| Code               | GitHub (dépôt `yeesal-ai`) |
| Hébergement       | Vercel (lié au dépôt GitHub) |
| Domaine personnalisé | yessalai.com dans Vercel → Domains + DNS chez ton registrar |

À chaque **push** sur `main`, Vercel redéploiera automatiquement le site.
