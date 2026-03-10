import { getPost } from "@/lib/post";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Mdx } from "@/features/mdx/Mdx";

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
    <div className="@container propse pt-22 pb-16 md:pb-24 md:pt-32">
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
                  <span

                    className="hover:text-foreground transition-colors"
                  >
                    {post.title}
                  </span>
                </li>
              </ol>
            </nav>

            {/* Title and date */}
            <header className="my-8 ">
              <time
                className="text-muted-foreground text-sm"
                dateTime={post.publishedAt.toISOString()} >
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
                    <span className="text-muted-foreground sr-only text-sm">Post Cover</span>
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

              {/* Article body */}
              {/* <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  In the last decade, remote work has evolved from a niche
                  concept into a global movement reshaping how teams operate.
                  What started as a temporary solution during global crises has
                  become a permanent shift in how companies define productivity,
                  collaboration, and employee satisfaction.
                </p>

                <h2
                  id="the-rise-of-flexibility"
                  className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold">
                  The Rise of Flexibility
                </h2>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  Remote work has opened doors to a new level of flexibility.
                  Employees can now tailor their workdays to match their
                  personal energy levels, environments, and responsibilities.
                  For many, this has resulted in{" "}
                  <strong className="text-foreground font-semibold">
                    improved mental health
                  </strong>{" "}
                  and a healthier{" "}
                  <strong className="text-foreground font-semibold">
                    work–life balance
                  </strong>
                  .
                </p>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  Companies, in turn, are recognizing that{" "}
                  <strong className="text-foreground font-semibold">
                    results matter more than location
                  </strong>
                  . The traditional 9-to-5 model is being replaced by
                  asynchronous collaboration, where output takes precedence over
                  office presence.
                </p>

                <h2
                  id="the-benefits-for-businesses"
                  className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold">
                  The Benefits for Businesses
                </h2>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  Organizations embracing remote work often see a direct impact
                  on their bottom line:
                </p>
                <ul className="text-muted-foreground mb-4 ml-6 list-disc space-y-2">
                  <li className="leading-relaxed">
                    <strong className="text-foreground font-semibold">
                      Wider talent pool:
                    </strong>{" "}
                    Companies are no longer limited by geography when hiring.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground font-semibold">
                      Lower operational costs:
                    </strong>{" "}
                    Less spending on office space, equipment, and utilities.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground font-semibold">
                      Higher retention:
                    </strong>{" "}
                    Employees value autonomy, which fosters loyalty and trust.
                  </li>
                </ul>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  Beyond numbers, remote-first companies tend to nurture a more{" "}
                  <strong className="text-foreground font-semibold">
                    inclusive and diverse workforce
                  </strong>
                  , since barriers like relocation and commuting are removed.
                </p>

                <h2
                  id="the-challenges-to-overcome"
                  className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold">
                  The Challenges to Overcome
                </h2>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  However, adopting remote work isn’t without challenges.
                  Communication gaps, time zone differences, and feelings of
                  isolation can affect team dynamics.
                </p>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  To succeed, companies must{" "}
                  <strong className="text-foreground font-semibold">
                    intentionally design
                  </strong>{" "}
                  their remote culture — investing in the right tools,
                  establishing clear expectations, and creating opportunities
                  for informal connection. Virtual coffee chats, async
                  stand-ups, and annual in-person retreats are all effective
                  ways to bridge the gap.
                </p>

                <h2
                  id="building-a-sustainable-remote-culture"
                  className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold">
                  Building a Sustainable Remote Culture
                </h2>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  True remote culture is built on{" "}
                  <strong className="text-foreground font-semibold">
                    trust, transparency, and communication
                  </strong>
                  . Leaders need to model flexibility while ensuring
                  accountability. Regular feedback loops, clear documentation,
                  and a culture of recognition make remote work sustainable in
                  the long term.
                </p>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  Ultimately, embracing remote work isn’t just about where
                  people work — it’s about{" "}
                  <strong className="text-foreground font-semibold">
                    how teams connect, create, and grow together
                  </strong>{" "}
                  in a digital-first world.
                </p>
              </div> */}
              <Mdx>{post.content}</Mdx>
            </div>

            {/* Right sidebar (sticky) */}
            <div className="h-fit lg:sticky lg:top-20 lg:pl-12">
              {/* Table of contents - visible on large screens */}
              <div className="max-lg:hidden">
                <nav>
                  <h4 className="text-foreground mb-4 text-sm font-semibold">
                    On this page
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="#the-rise-of-flexibility"
                        className="text-muted-foreground hover:text-foreground block transition-colors">
                        The Rise of Flexibility
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#the-benefits-for-businesses"
                        className="text-muted-foreground hover:text-foreground block transition-colors">
                        The Benefits for Businesses
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#the-challenges-to-overcome"
                        className="text-muted-foreground hover:text-foreground block transition-colors">
                        The Challenges to Overcome
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#building-a-sustainable-remote-culture"
                        className="text-muted-foreground hover:text-foreground block transition-colors">
                        Building a Sustainable Remote Culture
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Authors */}
              <div className="mt-6">
                <h4 className="text-foreground mb-4 text-sm font-semibold">
                  Written by
                </h4>
                <div className="flex flex-col gap-4">
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
                  <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                    <div className="ring-border-illustration bg-card aspect-square size-6 overflow-hidden rounded-md border border-transparent shadow-md shadow-black/15 ring-1">
                      <Image
                        alt="Méschac Irung"
                        width={460}
                        height={460}
                        className="size-full object-cover"
                        src="https://cdn.sanity.io/images/6e6amfga/production/131cd2b198cd8041d178678bd99aefae87bc3902-400x400.jpg"
                      />
                    </div>
                    <span className="text-foreground line-clamp-1 text-sm">
                      Méschac Irung
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}


