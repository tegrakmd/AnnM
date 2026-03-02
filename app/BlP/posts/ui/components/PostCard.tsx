import Link from "next/link";
import { PostType } from "@/lib/post";
import { ChevronRight } from "lucide-react";

export function PostCard({ post }: { post: PostType }) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group relative space-y-6 rounded-xl">
      <div className="bg-card/75 ring-border-illustration hover:bg-card/50 rounded-xl border border-transparent p-0.5 shadow-md ring-1 transition-colors duration-200">
        <div className="before:border-border-illustration relative aspect-video overflow-hidden rounded-[10px] bg-muted before:absolute before:inset-0 before:rounded-[10px] before:border">
          {/* Placeholder pour image - à remplacer avec image réelle si disponible */}
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/20 to-secondary/20">
            <span className="text-muted-foreground text-sm">Post Image</span>
          </div>
        </div>
      </div>

      <div className="grid gap-3 p-0.5">
        <time
          className="text-muted-foreground text-sm"
          dateTime={post.publishedAt.toISOString()}>
          {formattedDate}
        </time>

        <h2 className="text-foreground text-balance text-lg font-semibold md:text-xl">
          <Link
            href={`/BlP/posts/${post.slug}`}
            className="before:absolute before:inset-0 hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h2>

        <p className="text-muted-foreground line-clamp-2">{post.description}</p>

        <div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
          <div className="space-y-2">
            {/* Placeholder pour auteur si disponible */}
            {post.author && (
              <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                <div className="ring-border-illustration bg-card aspect-square size-6 overflow-hidden rounded-md border border-transparent shadow-md shadow-black/15 ring-1">
                  <div className="w-full h-full bg-muted flex items-center justify-center text-xs">
                    A
                  </div>
                </div>
                <span className="text-muted-foreground line-clamp-1 text-sm">
                  Author
                </span>
              </div>
            )}
          </div>

          <Link
            href={`/BlP/posts/${post.slug}`}
            className="text-primary group/link hover:text-foreground flex items-center gap-1 text-sm font-medium transition-colors duration-200">
            Read
            <ChevronRight className="size-3.5 translate-y-px duration-200 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
