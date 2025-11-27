# Evolys - Landing Page

Site web pour Evolys, expert en investissement immobilier et mandataire à Rouen.

## 🚀 Technologies utilisées

- **Next.js 16** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Framework CSS utility-first
- **Framer Motion** - Animations fluides et professionnelles
- **React Icons** - Bibliothèque d'icônes

## 📦 Installation

```bash
npm install
```

## 🛠️ Développement

Lancer le serveur de développement :

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build

Créer une version de production :

```bash
npm run build
```

Lancer la version de production :

```bash
npm start
```

## 📁 Structure du projet

```
landing-evolys/
├── app/
│   ├── globals.css          # Styles globaux et configuration Tailwind
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Page d'accueil
├── components/
│   ├── sections/             # Composants de sections
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── StatsBand.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── Journey.tsx
│   │   ├── Founders.tsx
│   │   ├── Investment.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   └── ui/                   # Composants UI réutilisables
│       └── Logo.tsx
├── lib/
│   └── utils.ts              # Utilitaires (cn helper)
└── public/                   # Assets statiques
```

## 🎨 Palette de couleurs

- **Bleu principal** : `#00B4D8`
- **Bleu clair** : `#48CAE4`
- **Bleu foncé** : `#0077B6`
- **Bleu très foncé** : `#023E8A`
- **Accent** : `#90E0EF`
- **Sombre** : `#0A0A0A`
- **Gris** : `#6b7280`

## ✨ Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Animations fluides avec Framer Motion
- ✅ Navigation sticky avec effet de scroll
- ✅ Sections optimisées pour la conversion
- ✅ Composants réutilisables et maintenables
- ✅ Performance optimisée avec Next.js
- ✅ SEO-friendly

## 📝 Sections principales

1. **Hero** - Section d'accueil avec CTA
2. **Stats Band** - Statistiques clés
3. **Services** - Grille de services offerts
4. **Process** - Méthodologie en 4 étapes
5. **Journey** - Timeline verticale de l'entreprise
6. **Founders** - Présentation des fondateurs
7. **Investment** - Section investissement
8. **Testimonials** - Témoignages clients
9. **CTA** - Call-to-action avec informations de contact
10. **Footer** - Pied de page complet

## 🔧 Personnalisation

Pour modifier les couleurs, éditez `app/globals.css` et les variables CSS personnalisées.

Pour ajouter de nouvelles sections, créez un composant dans `components/sections/` et importez-le dans `app/page.tsx`.

## 📄 Licence

Ce projet est destiné à un usage commercial pour Evolys.
