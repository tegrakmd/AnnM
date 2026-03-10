# 🎯 Système de Table des Matières et Auteurs Interactifs

## 📋 Ce qui a été mis en place

Votre système de blog est maintenant entièrement interactif avec :

### ✨ Table des Matières (ToC) Dynamique

- 📊 Extraction automatique des en-têtes H2 et H3 du contenu MDX
- 🎯 Suivi de la position active lors du scroll (Intersection Observer)
- 🔗 Navigation fluide vers les sections
- 📱 Responsive (masqué sur petit écrans)

### 👥 Auteurs Dynamiques

- 💾 Base de données centralisée des auteurs
- 🏷️ Configuration par slug dans le frontmatter du post
- 🖼️ Images et bios automatiquement affichées

### 🔑 En-têtes Auto-indexés

- 🆔 IDs générés automatiquement pour chaque H2/H3
- 🔤 Slugification intelligente du texte
- ↔️ Compatibilité avec la navigation interne

---

## 📁 Fichiers Créés/Modifiés

### Nouveaux Fichiers

```
src/
├── lib/
│   └── mdx-utils.ts                           # Utilitaires d'extraction d'en-têtes
├── components/
│   ├── TableOfContents.tsx                    # Composant ToC interactif (client)
│   └── AuthorsSection.tsx                     # Composant auteurs (client)
├── data/
│   └── authors.ts                             # Base de données des auteurs
└── features/mdx/
    └── mdx-heading-wrapper.tsx                # Wrapper pour en-têtes MDX

app/content/
└── 002-async-work.mdx                         # Post d'exemple avec toutes les features
```

### Fichiers Modifiés

```
src/
├── features/mdx/
│   └── mdx-components.tsx                     # Ajout des composants H2/H3
└── lib/
    └── post.ts                                # Ajout du champ 'authors' au schéma

app/
├── BlP/posts/[slug]/
│   └── page.tsx                               # Intégration ToC et auteurs
└── content/
    └── 001-vlog.mdx                           # Ajout des auteurs
```

---

## 🚀 Comment Utiliser

### 1. **Ajouter un Nouveau Post**

```yaml
---
title: "Mon Super Article"
publishedAt: "2026-03-10"
published: true
description: "Description courte"
imageCover: "/path/to/image.avif"
authors:
  - tegra_kmd
  - meschac_irung
---
## Ma Première Section
...
### Sous-section
...
## Deuxième Section
...
```

### 2. **Ajouter un Nouvel Auteur**

Modifiez `/src/data/authors.ts` :

```typescript
export const AUTHORS: Record<string, Author> = {
  // ... autres auteurs

  mon_pseudo: {
    name: "Mon Nom",
    image: "/path/to/avatar.jpg",
    bio: "Ma courte biographie",
  },
};
```

### 3. **Utiliser l'Auteur dans un Post**

```yaml
---
authors:
  - mon_pseudo
---
```

---

## 💡 Fonctionnalités Clés

### 🔍 Table des Matières Intelligente

```typescript
// La ToC est générée automatiquement du contenu :
const headings = extractHeadings(post.content);
// Retourne :
// [
//   { id: "my-section", text: "My Section", level: 2 },
//   { id: "my-subsection", text: "My Subsection", level: 3 },
// ]
```

### 🎨 Styling Actif

Lors du scroll, l'élément actif est mis en surbrillance :

- **Lien actif** : `text-foreground font-medium`
- **Lien inactif** : `text-muted-foreground hover:text-foreground`

### 🔗 Navigation Fluide

Au clic sur un lien de la ToC :

1. Scroll smooth vers la section
2. Surlignage automatique de l'en-tête
3. URL de la page conservée (anchors)

### 👨‍💼 Gestion des Auteurs

```typescript
// Les auteurs sont affichés automatiquement :
const authors = getAuthorsBySlug(post.authors || []);
// Si aucun auteur, les defaults sont affichés
```

---

## 📊 Structure des Données

### Heading Interface

```typescript
interface Heading {
  id: string; // "the-rise-of-flexibility"
  text: string; // "The Rise of Flexibility"
  level: number; // 2 ou 3
}
```

### Author Interface

```typescript
interface Author {
  name: string; // "Tegra Kmd"
  image: string; // "/avat.webp"
  bio?: string; // "Developer & Content Creator"
  email?: string; // "email@example.com"
}
```

### Post with Authors

```typescript
interface PostType {
  // ... champs existants
  authors?: string[]; // ["tegra_kmd", "meschac_irung"]
}
```

---

## 🎯 Comportement

### Sur Large Écrans (lg+)

- ✅ Sidebar ToC visible et sticky au scroll
- ✅ Auteurs affichés sous la ToC
- ✅ Suivi actif lors du scroll

### Sur Mobile (< lg)

- ❌ Sidebar ToC masquée
- ✅ Auteurs non affichés (mais données chargées)

---

## 🔧 Configuration Personnalisée

### Modifier le Comportement du Scroll

Dans `/src/components/TableOfContents.tsx`, ajustez `rootMargin` :

```typescript
const observer = new IntersectionObserver(
  (entries) => {
    /* ... */
  },
  {
    rootMargin: "-100px 0px -66%", // Ajustez ces valeurs
  }
);
```

### Ajouter des Styles Personnalisés

Les classes Tailwind utilisées :

- `text-foreground` : Texte actif
- `text-muted-foreground` : Texte inactif
- `hover:text-foreground` : Au survol

---

## 📚 Exemple Complet

Fichier : `/app/content/002-async-work.mdx`

```markdown
---
title: "L'Avenir du Travail Asynchrone"
authors:
  - tegra_kmd
---

## Introduction

...

## Les Avantages de l'Asynchrone

### Flexibilité Maximale

...

### Meilleure Documentation

...

## Conclusion

...
```

**Résultat** :

- ToC avec 3 entrées (Introduction, Avantages, Conclusion)
- Sous-entrées pour les sous-sections
- Auteur Tegra Kmd affiché
- Navigation interactive au scroll

---

## ✅ Points de Vérification

- [x] ToC générée dynamiquement
- [x] En-têtes avec IDs auto-générés
- [x] Suivi actif au scroll
- [x] Navigation fluide
- [x] Auteurs configurables
- [x] Responsive design
- [x] Sticky sidebar
- [x] Exemple de post complet

---

## 🚀 Prochaines Étapes (Optionnel)

1. **Intégrer avec une CMS** : Sanity, Contentful
2. **Partage au clic** : Copier URL avec anchor
3. **Temps de lecture** : Estimer et afficher
4. **Commentaires** : Giscus, Disqus
5. **Newsletter** : CTA pour s'abonner
6. **SEO** : JSON-LD Schema pour articles

---

## 📞 Support

Pour toute question sur l'implémentation, consultez :

- `/GUIDE_TOC_AUTHORS.md` - Guide détaillé
- `/src/lib/mdx-utils.ts` - Logique d'extraction
- `/src/components/TableOfContents.tsx` - Composant ToC
- `/src/data/authors.ts` - Gestion des auteurs
