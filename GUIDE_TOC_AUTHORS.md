# Guide: Table des Matières Dynamique et Auteurs Interactifs

## Vue d'ensemble

Le système est maintenant entièrement interactif :

✅ **Table des matières (ToC)** : Extraite automatiquement du contenu MDX
✅ **Mise en évidence active** : Le lien actuel est en surbrillance lors du scroll
✅ **Auteurs dynamiques** : Configurés via le frontmatter du post
✅ **IDs d'en-têtes automatiques** : Générés automatiquement pour chaque h2 et h3

---

## Configuration d'un Post

### 1. Structure du Frontmatter

```yaml
---
title: "Votre Titre"
publishedAt: "2026-03-10"
published: true
description: "Description du post"
imageCover: "/path/to/image.avif"
authors:
  - tegra_kmd
  - meschac_irung
---
```

### 2. Auteurs Disponibles

Les auteurs sont définis dans `/src/data/authors.ts` :

```typescript
export const AUTHORS: Record<string, Author> = {
  tegra_kmd: {
    name: "Tegra Kmd",
    image: "/avat.webp",
    bio: "Developer & Content Creator",
  },
  meschac_irung: {
    name: "Méschac Irung",
    image: "https://cdn.sanity.io/images/.../...",
    bio: "Data Analyst & Tech Writer",
  },
};
```

### 3. Ajouter un nouvel auteur

Modifiez `/src/data/authors.ts` :

```typescript
export const AUTHORS: Record<string, Author> = {
  // ... autres auteurs

  mon_slug: {
    name: "Mon Nom",
    image: "/path/to/avatar.webp",
    bio: "Ma bio",
  },
};
```

Puis utilisez le slug dans le frontmatter du post :

```yaml
authors:
  - mon_slug
```

---

## Contenu du Post

### Structure des En-têtes

```markdown
## Section Principale

Contenu...

## Autre Section

### Sous-section

Contenu...
```

**Important** :

- Les en-têtes h2 (`##`) apparaissent comme sections principales dans la ToC
- Les en-têtes h3 (`###`) apparaissent indentés comme sous-sections
- Les IDs sont générés automatiquement à partir du texte de l'en-tête

### Exemple

```markdown
## The Rise of Flexibility

Remote work has opened doors...

### Benefits for Employees

Employees can now...

## The Benefits for Businesses

Organizations embracing...
```

La table des matières générée ressemblera à :

```
✓ The Rise of Flexibility
    ✓ Benefits for Employees
✓ The Benefits for Businesses
```

---

## Composants

### TableOfContents

Composant client qui affiche la table des matières interactive.

**Props:**

```typescript
interface TableOfContentsProps {
  headings: Heading[]; // Extrait avec extractHeadings()
}
```

**Comportement:**

- ✨ Met en surbrillance le heading actuel lors du scroll
- 🔗 Smooth scroll au clic sur un lien
- 📱 Masqué sur petit écrans (max-lg:hidden)

### AuthorsSection

Composant client qui affiche les auteurs du post.

**Props:**

```typescript
interface AuthorsSectionProps {
  authors: Author[];
}
```

---

## Utilitaires

### extractHeadings()

Extrait tous les en-têtes h2 et h3 du contenu MDX.

```typescript
import { extractHeadings } from "@/lib/mdx-utils";

const headings = extractHeadings(post.content);
// Retourne: Array<{ id: string, text: string, level: number }>
```

### getAuthorsBySlug()

Récupère les auteurs par leurs slugs.

```typescript
import { getAuthorsBySlug } from "@/data/authors";

const authors = getAuthorsBySlug(["tegra_kmd", "meschac_irung"]);
```

---

## Fichiers Modifiés

1. **`/src/lib/mdx-utils.ts`** - Utilitaires d'extraction d'en-têtes
2. **`/src/components/TableOfContents.tsx`** - Composant ToC interactif
3. **`/src/components/AuthorsSection.tsx`** - Composant auteurs
4. **`/src/features/mdx/mdx-heading-wrapper.tsx`** - Wrapper pour en-têtes
5. **`/src/features/mdx/mdx-components.tsx`** - Configuration MDX
6. **`/src/data/authors.ts`** - Base de données des auteurs
7. **`/src/lib/post.ts`** - Schéma post (ajout de `authors`)
8. **`/app/BlP/posts/[slug]/page.tsx`** - Page du post (intégration)

---

## Améliorations Possibles

1. **Auteurs depuis une CMS** : Intégrer Sanity ou Contentful
2. **Génération TOC côté serveur** : Cache pour meilleure performance
3. **Partage au scroll** : Copier l'URL avec le heading actuel
4. **Lecture estimée** : Afficher le temps de lecture dans la sidebar
5. **Widgets personnalisés MDX** : Plus de composants riches (Tabs, Accordions, etc.)
