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
    <article className="group relative space-y-6 rounded-xl">

      {/* <div className="bg-card/75 ring-border-illustration hover:bg-card/50 rounded-xl border border-transparent p-0.5 shadow-md ring-1">
        <div className="before:border-border-illustration relative aspect-video overflow-hidden rounded-[10px] before:absolute before:inset-0 before:rounded-[10px] before:border">
          <Image
            alt="Sustainability in Tech: A Growing Focus"
            loading="eager"
            width="6394"
            height="4500"
            decoding="async"
            data-nimg="1" className="h-full w-full object-cover" style={{ color: "transparent" }}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            src="/upload.png" />
        </div>
        </div> */}

      {/* <div className="bg-card/75 ring-border-illustration hover:bg-card/50 rounded-xl border border-transparent p-0.5 shadow-md ring-1 transition-colors duration-200">
        <div className="before:border-border-illustration relative aspect-video overflow-hidden rounded-[10px] bg-muted before:absolute before:inset-0 before:rounded-[10px] before:border">
      
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/20 to-secondary/20">
            <span className="text-muted-foreground sr-only text-sm">Post Image</span>
            <Image
              alt="Cutting-Edge Innovations in Data Analytics"
              src="/upload.png"
              width={1200}
              height={1200}
              loading="lazy"
              className=""
            />
          </div>
        </div>
      </div> */}
      <div className="bg-card/75 ring-border-illustration hover:bg-card/50 rounded-xl border border-transparent p-0.5 shadow-md ring-1">
        <div className="before:border-border-illustration relative aspect-video overflow-hidden rounded-[10px] before:absolute before:inset-0 before:rounded-[10px] before:border">
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/20 to-secondary/20">
            <span className="text-muted-foreground sr-only text-sm">Post Image</span>
            <Image
              alt="Cover Image Blog"
              src="/upload.png"
              loading="eager"
              width="6394"
              height="4500"
              decoding="async"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="aspect-video size-full object-cover"
              style={{ color: "transparent" }}

            // referrerPolicy="no-referrer"
            />
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
          {/* <div className="space-y-2">
         
            {post.author && (
              <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                <div className="ring-border-illustration bg-card aspect-square size-6 overflow-hidden rounded-md border border-transparent shadow-md shadow-black/15 ring-1">
                  <Image
                    alt="Tegra Kmd"
                    width={460}
                    height={460}
                    className="size-full object-cover"
                    src="/avat.webp"
                  />
                </div>
                <span className="text-foreground line-clamp-1 text-sm">
                  Tegra Kmd
                </span>
              </div>
            )}
          </div> */}
          <div className="grid grid-cols-[1fr_auto] items-center gap-2 pt-4">
            <div className="space-y-2">
              <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                <div className="ring-border-illustration bg-card aspect-square size-6 overflow-hidden rounded-md border border-transparent shadow-md shadow-black/15 ring-1">
                  <Image alt="Shadcn" loading="lazy" width="460" height="460" decoding="async" data-nimg="1" className="size-full object-cover" style={{ color: "transparent" }} src="/avat.webp" />
                </div>
                <span className="text-muted-foreground line-clamp-1 text-sm">Shadcn</span>
              </div>
            </div>
            <div className="flex h-6 items-center">
              <Link href={`/BlP/posts/${post.slug}`} className="text-primary group-hover:text-foreground flex items-center gap-1 text-sm font-medium transition-colors duration-200">
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
