# ✅ Checklist de Déploiement - Système ToC + Auteurs Interactif

## 📋 Avant de Déployer en Production

### 🔍 Phase 1: Vérification du Code (5 min)

- [ ] Aucune erreur TypeScript

  ```bash
  # Vérifier dans VS Code ou
  # npm run build (ou votre commande build)
  ```

- [ ] Aucune erreur ESLint

  ```bash
  # npm run lint (si configuré)
  ```

- [ ] Tous les fichiers créés

  ```bash
  src/lib/mdx-utils.ts ✓
  src/components/TableOfContents.tsx ✓
  src/components/AuthorsSection.tsx ✓
  src/data/authors.ts ✓
  src/features/mdx/mdx-heading-wrapper.tsx ✓
  app/content/002-async-work.mdx ✓
  ```

- [ ] Tous les fichiers modifiés
  ```bash
  src/features/mdx/mdx-components.tsx ✓
  src/lib/post.ts ✓
  app/BlP/posts/[slug]/page.tsx ✓
  app/content/001-vlog.mdx ✓
  ```

### 🧪 Phase 2: Tests Fonctionnels (10 min)

#### ToC Extraction

- [ ] Post avec 2+ en-têtes se génère une ToC
- [ ] En-têtes h2 et h3 sont extraits
- [ ] IDs sont auto-générés (slugified)
- [ ] Pas d'en-têtes dupliquées

#### Navigation ToC

- [ ] Cliquer sur un lien ToC scroll vers la section
- [ ] Scroll smooth (pas jump direct)
- [ ] URL avec anchor fonctionne (ex: `/post#section-name`)
- [ ] Lien actif est surlighté lors du scroll

#### Auteurs

- [ ] Auteurs définis s'affichent
- [ ] Images se chargent correctement
- [ ] Pas d'auteur = auteurs par défaut
- [ ] Ordre des auteurs respecté

#### Responsive

- [ ] ToC visible sur desktop (lg+)
- [ ] ToC masquée sur mobile (< lg)
- [ ] Auteurs affichés sur tous les appareils
- [ ] Pas de overflow ou layout issues

### 🎨 Phase 3: Tests UX (5 min)

- [ ] Sidebar sticky fonctionne sur desktop
- [ ] Scroll fluide et pas saccadé
- [ ] Highlight actif est visible
- [ ] Pas de clignotement lors du scroll
- [ ] Images auteurs se chargent rapidement
- [ ] Pas de contenu qui jump lors du chargement

### 📊 Phase 4: Performance (5 min)

- [ ] PageSpeed Insights (Lighthouse)

  ```
  Performance: > 80
  Accessibility: > 90
  Best Practices: > 90
  SEO: > 90
  ```

- [ ] Pas de console errors

  ```
  Ouvrir DevTools → Console
  Vérifier qu'aucune erreur rouge
  ```

- [ ] Pas de 404s pour ressources
  ```
  Network tab → vérifier tous les statuts 200
  ```

### 🔐 Phase 5: Sécurité (2 min)

- [ ] Pas de contenu sensible en hardcoded
- [ ] URLs d'images valides et HTTPS
- [ ] Pas d'injection XSS possible
- [ ] Pas de données utilisateur exposées

### 🌍 Phase 6: SEO (5 min)

- [ ] Meta description présente
- [ ] Heading h1 unique par page
- [ ] Structure heading logique (h2 → h3)
- [ ] Pas de heading vides
- [ ] Images ont alt text
- [ ] URLs sont SEO-friendly

## 📝 Phase 7: Contenu (3 min)

- [ ] Au moins 1 post published

  ```yaml
  published: true # dans le frontmatter
  ```

- [ ] Posts ont tous les champs requis

  ```yaml
  title: ✓
  publishedAt: ✓
  published: ✓
  description: ✓
  imageCover: ✓
  ```

- [ ] Auteurs assignés existent dans AUTHORS DB
- [ ] Pas de typos dans les auteur slugs

## 🚀 Phase 8: Déploiement (2 min)

### Build

```bash
# Lancer le build
npm run build  # ou yarn build ou pnpm build

# Vérifier aucune erreur
✓ Build completed without errors
```

### Tests Post-Build

- [ ] Fichier build contient le code
- [ ] Tous les assets statiques générés
- [ ] Aucun warning dans le build log

### Déploiement

```bash
# Deployer selon votre setup
# Vercel: vercel deploy
# Netlify: netlify deploy
# etc.
```

- [ ] Déploiement réussi
- [ ] Site accessible en production
- [ ] Pas d'erreurs en console (DevTools)

## 🔄 Phase 9: Post-Déploiement (5 min)

### Tests en Production

- [ ] Page d'accueil charge
- [ ] Page blog affiche les posts
- [ ] Post avec ToC charge correctement
- [ ] ToC interactive fonctionne
- [ ] Auteurs s'affichent
- [ ] Images se chargent
- [ ] Responsive sur mobile

### Monitoring

- [ ] Pas d'erreurs 500
- [ ] Pas d'erreurs JavaScript
- [ ] Metrics normales
- [ ] Performance acceptable

### Analytics (si configuré)

- [ ] Page views tracked
- [ ] Events tracked
- [ ] Pas d'erreurs tracking

## 📚 Phase 10: Documentation (3 min)

- [ ] README.md à jour
- [ ] QUICK_START.md lisible
- [ ] GUIDE_TOC_AUTHORS.md complet
- [ ] Commentaires dans le code clairs

## 🎯 Rollback Plan

Si quelque chose ne va pas :

### Erreur Mineure (CSS/Style)

```bash
# Rollback code
git revert <commit>

# Ou fix rapide
# Éditer le fichier CSS/component
# Rebuild et redeploy
```

### Erreur TypeScript

```bash
# Vérifier les erreurs
npm run build

# Corriger dans le code
# Renumérer le build
```

### Erreur d'Extraction ToC

```bash
# Rollback des changements dans:
# src/lib/mdx-utils.ts
# src/features/mdx/mdx-heading-wrapper.tsx

# Vérifier les regex
# Tester avec simple content
```

### Erreur Auteurs

```bash
# Vérifier src/data/authors.ts
# Vérifier post.ts schema
# Vérifier slugs dans frontmatter
```

## 📞 Support & Escalation

### Pour les Questions

- Relire QUICK_START.md
- Consulter GUIDE_TOC_AUTHORS.md
- Vérifier ARCHITECTURE_VISUAL.md

### Pour les Bugs

1. Identifier le composant affecté
2. Vérifier les logs console
3. Voir les fichiers source
4. Rollback si nécessaire

### Pour les Améliorations

- Consulter "Améliorations Possibles" dans GUIDE_TOC_AUTHORS.md

---

## 📊 Checklist Rapide (Pour les Pressés)

```
CODE QUALITY
☐ No TypeScript errors
☐ No ESLint errors
☐ All files created
☐ All files modified

FUNCTIONAL
☐ ToC generates correctly
☐ Navigation works
☐ Authors display
☐ Responsive design

PERFORMANCE
☐ Lighthouse > 80
☐ No console errors
☐ Images load fast

CONTENT
☐ Posts published
☐ Authors exist
☐ No typos

DEPLOYMENT
☐ Build succeeds
☐ Site accessible
☐ All features work
```

---

## 🎉 Après le Déploiement

### Communiquer

- [ ] Informer l'équipe que c'est live
- [ ] Partager la documentation
- [ ] Proposer des trainings si besoin

### Monitorer

- [ ] Vérifier les metrics la première semaine
- [ ] Recueillir les feedbacks utilisateurs
- [ ] Noter les bugs potentiels

### Itérer

- [ ] Améliorer le système basé sur les retours
- [ ] Ajouter des features supplémentaires
- [ ] Optimiser la performance

---

## 📅 Timeline Recommandée

```
Vendredi (Déploiement)
├─ 09h00 - Vérification Code (Phase 1) ........... 5 min
├─ 09h05 - Tests Fonctionnels (Phase 2) ........ 10 min
├─ 09h15 - Tests UX (Phase 3) ................... 5 min
├─ 09h20 - Build (Phase 8) ...................... 5 min
├─ 09h25 - Déploiement .......................... 5 min
├─ 09h30 - Tests Production (Phase 9) ........... 5 min
└─ 09h35 - ✅ GO LIVE! (ou bug fix)

Total: ~30 minutes
```

---

**✅ Une fois cet checklist complété, vous êtes prêt pour la production !**

Besoin d'aide ? Consultez `/DOCUMENTATION_INDEX.md` pour trouver la bonne documentation.
