import { getPost } from "@/lib/post";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Mdx } from "@/features/mdx/Mdx";
import { extractHeadings } from "@/lib/mdx-utils";
import { TableOfContents } from "@/components/TableOfContents";
import { AuthorsSection } from "@/components/AuthorsSection";
import { getAuthorsBySlug } from "@/data/authors";

export const metadata: Metadata = {
  title: "Cutting-Edge Innovations in Data Analytics",
  description:
    "Explore how remote work is reshaping teams and discover the latest trends in data analytics.",
};
export default async function RoutePagePost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="@container propse pt-22 pb-16 md:pb-24 md:pt-32 font-ubuntu">
      <div className="relative mx-auto max-w-5xl px-6">
        <article>
          <div className="w-full max-w-2xl">
            {/* Breadcrumb navigation */}
            <nav aria-label="breadcrumb" data-slot="breadcrumb">
              <ol
                data-slot="breadcrumb-list"
                className="text-muted-foreground wrap-break-words flex flex-wrap items-center gap-1.5 text-sm sm:gap-2.5">
                <li
                  data-slot="breadcrumb-item"
                  className="inline-flex items-center gap-1.5">
                  <Link
                    data-slot="breadcrumb-link"
                    className="hover:text-foreground transition-colors"
                    href="/BlP">
                    Blog
                  </Link>
                </li>
                <li
                  data-slot="breadcrumb-separator"
                  role="presentation"
                  aria-hidden="true"
                  className="[&>svg]:size-3.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </li>
                <li
                  data-slot="breadcrumb-item"
                  className="inline-flex items-center gap-1.5">
                  <span className="hover:text-foreground transition-colors">
                    {post.title}
                  </span>
                </li>
              </ol>
            </nav>

            {/* Title and date */}
            <header className="my-8 ">
              <time
                className="text-muted-foreground text-sm"
                dateTime={post.publishedAt.toISOString()}>
                {formattedDate}
              </time>
              <h1 className="text-foreground text-balance text-3xl font-semibold md:text-4xl md:leading-tight ">
                {post.title}
              </h1>
            </header>
          </div>

          {/* Main content + sidebar layout */}
          <div
            className="grid lg:grid-cols-[auto_1fr] lg:gap-6"
            style={{ scrollBehavior: "smooth" }}>
            {/* Left column (article) */}
            <div className="lg:max-w-2xl">
              {/* Cover Image Blog */}
              <div className="bg-card/75 ring-border-illustration hover:bg-card/50 rounded-xl border border-transparent p-0.5 shadow-md ring-1 mb-12">
                <div className="before:border-border-illustration relative aspect-video overflow-hidden rounded-[10px] before:absolute before:inset-0 before:rounded-[10px] before:border">
                  <div className="size-full flex items-center justify-center bg-linear-to-br from-primary/20 to-secondary/20">
                    <span className="text-muted-foreground sr-only text-sm">
                      Post Cover
                    </span>
                    <Image
                      alt="Cutting-Edge Innovations in Data Analytics"
                      src={post.imageCover}
                      width={1200}
                      height={1200}
                      loading="lazy"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <Mdx>{post.content}</Mdx>
            </div>

            {/* Right sidebar (sticky) */}
            <div className="h-fit lg:sticky lg:top-20 lg:pl-12">
              {/* Table of contents - visible on large screens */}
              <div className="max-lg:hidden">
                <TableOfContents headings={extractHeadings(post.content)} />
              </div>
              {/* Authors */}
              <AuthorsSection
                authors={
                  post.authors && post.authors.length > 0
                    ? getAuthorsBySlug(post.authors)
                    : getAuthorsBySlug(["tegra_kmd", "meschac_irung"])
                }
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
