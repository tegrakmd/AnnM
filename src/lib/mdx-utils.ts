/**
 * Utilitaires pour extraire et traiter le contenu MDX
 */

interface Heading {
  id: string;
  text: string;
  level: number;
}

/**
 * Extrait les en-têtes (h2, h3) du contenu MDX
 * @param content Contenu MDX brut
 * @returns Liste des en-têtes avec leurs IDs
 */
export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^## (.+)$|^### (.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1] || match[2];
    const level = match[1] ? 2 : 3;

    // Génère un ID à partir du texte (slug)
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    headings.push({
      id,
      text,
      level,
    });
  }

  return headings;
}

/**
 * Transforme le contenu MDX pour ajouter les IDs aux en-têtes
 * @param content Contenu MDX brut
 * @returns Contenu MDX avec IDs ajoutés
 */
export function addHeadingIds(content: string): string {
  return content
    .replace(/^## (.+)$/gm, (match, heading) => {
      const id = heading
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      return `## ${heading}\n{#${id}}`;
    })
    .replace(/^### (.+)$/gm, (match, heading) => {
      const id = heading
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      return `### ${heading}\n{#${id}}`;
    });
}
