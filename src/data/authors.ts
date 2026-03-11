export interface Author {
  name: string;
  image: string;
  bio?: string;
  email?: string;
}

export const AUTHORS: Record<string, Author> = {
  tegra_kmd: {
    name: "Tegra Kmd",
    image: "/avat.webp",
    bio: "Developer & Content Creator",
  },
  meschac_irung: {
    name: "Méschac Irung",
    image:
      "https://cdn.sanity.io/images/6e6amfga/production/131cd2b198cd8041d178678bd99aefae87bc3902-400x400.jpg",
    bio: "Data Analyst & Tech Writer",
  },
  Delba_B: {
    name: "Delba B",
    image: "/delbaB.jpeg",
    bio: "Software dev",
  },
};
// delbaB.jpeg;
/**
 * Récupère les auteurs par leurs slugs
 */
export function getAuthorsBySlug(slugs: string[]): Author[] {
  return slugs
    .map((slug) => AUTHORS[slug])
    .filter((author) => author !== undefined);
}
