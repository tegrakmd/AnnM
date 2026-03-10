import Link from "next/link";
import { PostType } from "@/lib/post";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function PostCard({ post }: { post: PostType }) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group relative space-y-4 rounded-xl">

      <div className="bg-card/75 ring-border-illustration hover:bg-card/50 rounded-xl border border-transparent p-0.5 shadow-md ring-1">
        <div className="before:border-border-illustration relative aspect-video overflow-hidden rounded-[10px] before:absolute before:inset-0 before:rounded-[10px] before:border">
          <div className=" size-full flex items-center justify-center bg-linear-to-br from-primary/20 to-secondary/20">
            {/* <span className=" sr-only text-sm">Post ImageCover</span> */}
            <Image
              alt="Cover Image Blog"
              loading="lazy"
              width="6394"
              height="4500"
              decoding="async"
              className="aspect-video size-full object-cover absolute z-20"
              style={{ color: "transparent" }}
              src={post.imageCover}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-1 p-0.5">
        <time
          className="text-muted-foreground text-sm"
          dateTime={post.publishedAt.toISOString()}>
          {formattedDate}
        </time>

        <h2 className=" text-balance text-lg font-semibold md:text-xl">
          <Link
            href={`/BlP/posts/${post.slug}`}
            className="before:absolute text-primary before:inset-0 hover:text-primary/80 transition-colors decoration-0">
            {post.title}
          </Link>
        </h2>

        <p className="text-muted-foreground line-clamp-2">{post.description}</p>

        <div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
          <div className="grid grid-cols-[1fr_auto] items-center gap-2 pt-4">
            <div className="space-y-2">
              <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                <div className="ring-border-illustration bg-card aspect-square size-6 overflow-hidden rounded-md border border-transparent shadow-md shadow-black/15 ring-1">
                  <Image alt="Shadcn" loading="lazy" width="460" height="460" decoding="async" data-nimg="1" className="size-full object-cover" style={{ color: "transparent" }} src={post.imageCover} />
                </div>
                <span className="text-muted-foreground line-clamp-1 text-sm">Tegra kmd</span>
              </div>
            </div>
            <div className="flex h-6 items-center">
              <Link href={`/BlP/posts/${post.slug}`} className="text-primary group-hover:text-foreground flex items-center gap-1 text-sm font-medium transition-colors duration-200 ">
                Read
                <ChevronRight className="size-3.5 text-primary group-hover:text-foreground flex items-center gap-1 text-sm font-medium transition-colors duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );

}
