# 🔍 Vérification Post-Installation

Utilisez ce script pour vérifier que tout est installé correctement.

## ✅ Vérifications Manuelles

### 1. Fichiers Créés

Vérifiez que ces fichiers existent :

```bash
# Utilitaires
ls src/lib/mdx-utils.ts

# Composants
ls src/components/TableOfContents.tsx
ls src/components/AuthorsSection.tsx

# Données
ls src/data/authors.ts

# MDX
ls src/features/mdx/mdx-heading-wrapper.tsx

# Content
ls app/content/002-async-work.mdx
```

Résultat attendu : 0 erreurs (tous les fichiers existent)

### 2. Fichiers Modifiés

Vérifiez que ces fichiers contiennent les bon code :

```bash
# Vérifier TableOfContents importée dans page.tsx
grep "TableOfContents" app/BlP/posts/[slug]/page.tsx

# Vérifier AuthorsSection importée dans page.tsx
grep "AuthorsSection" app/BlP/posts/[slug]/page.tsx

# Vérifier mdx-components.tsx a les imports
grep "HeadingWithId" src/features/mdx/mdx-components.tsx

# Vérifier post.ts a le champ authors
grep "authors" src/lib/post.ts
```

Résultat attendu : Trouver les imports/utilisations

### 3. Import/Exports

```bash
# Vérifier les exports de mdx-utils.ts
grep "export function" src/lib/mdx-utils.ts

# Vérifier les exports de authors.ts
grep "export" src/data/authors.ts
```

Résultat attendu :

- extractHeadings()
- AUTHORS object
- getAuthorsBySlug()

## 🧪 Test dans le Navigateur

### Accès au Post

1. Démarrer le serveur dev

   ```bash
   npm run dev
   ```

2. Aller à `http://localhost:3000/BlP`

3. Cliquer sur un post (ex: "vlog" ou "async-work")

### Vérifications Visuelles

- [ ] La page se charge sans erreur
- [ ] La table des matières s'affiche dans la sidebar (desktop)
- [ ] Les auteurs s'affichent sous la ToC
- [ ] Les en-têtes du post ont des IDs dans l'HTML
- [ ] Aucune erreur dans la console (F12)

### Vérifications Interactives

- [ ] Cliquer sur un lien de la ToC
      → La page scroll vers la section

- [ ] Scroller manuellement
      → Le lien actif change de couleur

- [ ] Sur mobile (< 768px)
      → La sidebar est masquée

## 🐛 Troubleshooting

### Erreur: "TableOfContents is not defined"

```bash
# Vérifier l'import
grep "import.*TableOfContents" app/BlP/posts/[slug]/page.tsx

# Vérifier que le composant existe
ls -la src/components/TableOfContents.tsx
```

### Erreur: "extractHeadings is not defined"

```bash
# Vérifier l'import
grep "import.*extractHeadings" app/BlP/posts/[slug]/page.tsx

# Vérifier que la fonction existe
grep "export function extractHeadings" src/lib/mdx-utils.ts
```

### Erreur: "getAuthorsBySlug is not defined"

```bash
# Vérifier l'import
grep "import.*getAuthorsBySlug" app/BlP/posts/[slug]/page.tsx

# Vérifier que la fonction existe
grep "export function getAuthorsBySlug" src/data/authors.ts
```

### ToC ne se génère pas

```bash
# Vérifier que le post a les en-têtes h2/h3
grep "^## " app/content/001-vlog.mdx

# Vérifier que extractHeadings() est appelé
grep "extractHeadings" app/BlP/posts/[slug]/page.tsx
```

### Auteurs ne s'affichent pas

```bash
# Vérifier le frontmatter du post
head -n 15 app/content/001-vlog.mdx

# Vérifier que AUTHORS DB existe
cat src/data/authors.ts | head -n 20
```

### Erreur TypeScript au build

```bash
# Lancer le type check
npm run type-check

# Ou voir les erreurs
npm run build
```

## 📊 Checklist de Vérification

```
✓ Tous les fichiers créés existent
✓ Tous les fichiers modifiés contiennent le bon code
✓ Aucune erreur TypeScript
✓ Aucune erreur ESLint
✓ Le serveur dev démarre sans erreur
✓ La page du post se charge
✓ La ToC s'affiche
✓ Les auteurs s'affichent
✓ Navigation ToC fonctionne
✓ Scroll tracking fonctionne
✓ Responsive design OK
✓ Console sans erreur
```

## 🚀 Prochaines Étapes

Si tout passe :

1. ✅ Système opérationnel
2. 📝 Créer des posts
3. 🎨 Personnaliser le style
4. 🚀 Déployer en production

Si erreurs :

1. 🔍 Consulter Troubleshooting ci-dessus
2. 📚 Lire `/QUICK_START.md`
3. 📖 Lire `/GUIDE_TOC_AUTHORS.md`
4. 💬 Demander de l'aide

---

**Besoin d'aide ?** → Consultez `/DOCUMENTATION_INDEX.md`
