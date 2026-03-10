import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { z } from "zod";

// Déclarez d'abord le schéma avec uniquement les champs présents dans les frontmatter
const PostFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  author: z.boolean().optional(), // rendez author facultatif si absent dans le frontmatter
  published: z.boolean().optional().default(false), // rendez published facultatif si absent dans le frontmatter (je veux dire dans le cadre si c'est prod ou en developpement)
  imageCover: z.string(),
});

// Type avec le vrai contenu
export type PostType = z.infer<typeof PostFrontmatterSchema> & {
  slug: string;
  content: string;

  imageCover: string;
};

const postsDirectory = path.join(process.cwd(), "app/content");

export const getPosts = async (): Promise<PostType[]> => {
  const files = await fs.readdir(postsDirectory);
  const fileNames = files.filter((f) => f.endsWith(".mdx"));
  const posts: PostType[] = [];

  for await (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = await fs.readFile(fullPath, "utf-8");
    const frontMatter = matter(fileContent);
    // Le contenu markdown réel est dans frontMatter.content

    // Validez uniquement les champs du frontmatter (pas content)
    const safeData = PostFrontmatterSchema.safeParse(frontMatter.data);

    if (!safeData.success) {
      console.error(
        `Erreur parcing file: ${fileName}" - ${safeData.error.issues.map((i) => i.message).join(", ")}`
      );
      continue;
    }

    // Si le post n'est pas publié et que l'on est en production, on skip
    if (!safeData.data.published && process.env.NODE_ENV !== "development") {
      continue;
    }

    posts.push({
      ...safeData.data,
      slug: fileName.replace(/^(\d+)-/, "").replace(".mdx", ""),
      content: frontMatter.content,
    });
  }
  return posts;
};

export const getPost = async (slug: string): Promise<PostType | undefined> => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};
