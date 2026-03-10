# 🎬 Quick Start - Table des Matières & Auteurs Interactifs

## ⚡ Usage Rapide

### Créer un Post Avec ToC + Auteurs

1. **Créer le fichier MDX** `app/content/my-post.mdx`

```markdown
---
title: "Mon Titre"
publishedAt: "2026-03-10"
published: true
description: "Ma description"
imageCover: "/image.avif"
authors:
  - tegra_kmd
  - meschac_irung
---

## Ma Première Section

Contenu...

### Sous-section

Plus de contenu...

## Deuxième Section

Fin du contenu.
```

2. **C'est tout !** ✨

La page du post affichera automatiquement :

- ✅ Table des matières avec "Ma Première Section", "Deuxième Section"
- ✅ Les deux auteurs configurés
- ✅ Navigation interactive au scroll

---

## 👤 Gérer les Auteurs

### Voir les auteurs existants

Fichier : `/src/data/authors.ts`

```typescript
export const AUTHORS = {
  tegra_kmd: {
    /* auteur 1 */
  },
  meschac_irung: {
    /* auteur 2 */
  },
};
```

### Ajouter un nouvel auteur

Dans `/src/data/authors.ts` :

```typescript
export const AUTHORS: Record<string, Author> = {
  tegra_kmd: {
    name: "Tegra Kmd",
    image: "/avat.webp",
    bio: "Developer & Content Creator",
  },
  meschac_irung: {
    name: "Méschac Irung",
    image: "https://cdn.sanity.io/...",
    bio: "Data Analyst & Tech Writer",
  },
  // ➕ AJOUTER ICI
  mon_id: {
    name: "Mon Nom",
    image: "/mon-avatar.jpg",
    bio: "Ma description",
  },
};
```

Puis utiliser dans un post :

```yaml
authors:
  - mon_id
```

---

## 🎯 Comment Ça Marche

### 1. **Extraction Auto des En-têtes**

```
Contenu MDX:
  ## Section 1        ──→  Heading { id: "section-1", level: 2 }
  ### Sous-sec        ──→  Heading { id: "sous-sec", level: 3 }
  ## Section 2        ──→  Heading { id: "section-2", level: 2 }
                              ↓
                         TableOfContents
                              ↓
                        Affichage interactif
```

### 2. **Auteurs Configurables**

```
Frontmatter:
  authors:
    - tegra_kmd      ──→  Lookup dans AUTHORS
    - meschac_irung       ────→  AuthorsSection
                             ↓
                        Affichage avec images
```

### 3. **Navigation Interactive**

```
ToC Link → Click → Scroll Smooth
   ↓
Intersection Observer Detects Scroll
   ↓
Active Link Highlighted
   ↓
User Experience ✨
```

---

## 📋 Structure Requise (Minimal)

### Pour un Post Complet

```yaml
---
title: string              ✓ Requis
publishedAt: date          ✓ Requis
published: boolean         ✓ Requis (dev: false, prod: true)
description: string        ✓ Requis
imageCover: string         ✓ Requis
authors: string[]          ✓ Recommandé (autrement: défauts)
---

## Heading 1

Content...

### Sub-heading

Content...
```

### Pour un Post Minimal

```yaml
---
title: "Mon Post"
publishedAt: "2026-03-10"
published: true
description: "Description"
imageCover: "/image.avif"
---
## Section

Content here...
```

Si pas d'auteurs spécifiés → Les auteurs par défaut s'affichent

---

## 🎨 Personnalisation

### Modifier le Look de la ToC

Fichier : `/src/components/TableOfContents.tsx`

```typescript
// Couleurs actives
className={`block transition-colors ${
  activeId === heading.id
    ? 'text-foreground font-medium'    // ← Modifier ici
    : 'text-muted-foreground hover:text-foreground'
}`}
```

### Modifier le Timing du Scroll

Fichier : `/src/components/TableOfContents.tsx`

```typescript
const observer = new IntersectionObserver(
  (entries) => {
    /* ... */
  },
  {
    rootMargin: "-100px 0px -66%", // ← Ajuster ces valeurs
  }
);
```

---

## 📚 Fichiers Clés à Connaître

| Fichier                               | Rôle                        | À Modifier Pour              |
| ------------------------------------- | --------------------------- | ---------------------------- |
| `/src/data/authors.ts`                | Base de données des auteurs | Ajouter/modifier des auteurs |
| `/src/lib/mdx-utils.ts`               | Logique d'extraction        | Ajuster la slugification     |
| `/src/components/TableOfContents.tsx` | ToC interactive             | Styles, timing               |
| `/src/components/AuthorsSection.tsx`  | Affichage auteurs           | Styles auteurs               |
| `/app/BlP/posts/[slug]/page.tsx`      | Page du post                | Intégration                  |
| `/app/content/*.mdx`                  | Contenu des posts           | Vos articles !               |

---

## 🚀 Exemples

### Exemple 1 : Post Simple

```yaml
---
title: "Mon Premier Post"
publishedAt: "2026-03-10"
published: true
description: "Mon premier post"
imageCover: "/bz.avif"
authors:
  - tegra_kmd
---

## Introduction

Bonjour !

## Conclusion

Au revoir !
```

**Résultat** :

- ToC avec 2 entrées
- Auteur : Tegra Kmd
- Navigation interactive

### Exemple 2 : Post Complexe

```yaml
---
title: "Post Avancé"
publishedAt: "2026-03-10"
published: true
description: "Un post complexe"
imageCover: "/goodbg.avif"
authors:
  - tegra_kmd
  - meschac_irung
---
## Chapitre 1

### Sous-chapitre 1.1
...
### Sous-chapitre 1.2
...
## Chapitre 2

### Sous-chapitre 2.1
...
## Conclusion
```

**Résultat** :

- ToC avec 5 entrées (2 chapitres, 3 sous-chapitres, 1 conclusion)
- 2 auteurs
- Navigation multi-niveaux

---

## ❓ FAQ

**Q: Que se passe-t-il si je n'ajoute pas d'auteurs ?**
A: Les auteurs par défaut s'affichent (tegra_kmd + meschac_irung)

**Q: Puis-je avoir plusieurs auteurs ?**
A: Oui ! `authors: [autor1, autor2, autor3]`

**Q: Comment changer l'ordre des auteurs ?**
A: L'ordre dans le YAML est respecté. Mettez le plus important d'abord.

**Q: Les en-têtes doivent être h2/h3 ?**
A: Oui, seuls h2 (`##`) et h3 (`###`) sont traités

**Q: Comment publier un post ?**
A: Mettez `published: true` dans le frontmatter

**Q: Puis-je modifier un auteur ?**
A: Oui, dans `/src/data/authors.ts`

**Q: Ça marche sur mobile ?**
A: La ToC est masquée sur mobile (responsive), mais tout fonctionne

---

## 💡 Tips & Tricks

- 🎯 Utilisez des titres clairs pour meilleure navigation
- 📏 2-5 niveaux de titres est optimal pour la lisibilité
- 🎨 Les auteurs s'affichent en sticky sidebar sur desktop
- ⚡ Extraction en temps réel (pas de build extra)
- 🔄 Changements en temps réel en dev mode

---

**Besoin d'aide ?** Consultez `/GUIDE_TOC_AUTHORS.md` pour plus de détails !
