import Link from "next/link";

export default function Blade() {
  return (
    <>
      <main>
        <div className="relative border-b">
          <div className="px-7 relative pt-6 pb-12 max-w-2xl mx-auto md:px-6">
            <div className="flex items-center gap-2">
              {" "}
              <h1 className="text-lg font-semibold text-title">Blog</h1>{" "}
              <a
                href="/rss.xml"
                title="RSS Feed"
                aria-label="Subscribe to Tailtips blog"
                className="btn variant-ghost sz-sm icon-only -my-1">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                  dataSlot="icon"
                  className="size-4">
                  <path
                    fillRule="evenodd"
                    d="M2 2.75A.75.75 0 0 1 2.75 2C8.963 2 14 7.037 14 13.25a.75.75 0 0 1-1.5 0c0-5.385-4.365-9.75-9.75-9.75A.75.75 0 0 1 2 2.75Zm0 4.5a.75.75 0 0 1 .75-.75 6.75 6.75 0 0 1 6.75 6.75.75.75 0 0 1-1.5 0C8 10.35 5.65 8 2.75 8A.75.75 0 0 1 2 7.25ZM3.5 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
                    clipRule="evenodd"></path>
                </svg>{" "}
              </a>{" "}
            </div>
            <p className="text-sm mt-3">Free TailwindCSS </p>
          </div>
        </div>
        <div>
          <div className="px-7 relative pt-12 pb-56 max-w-2xl mx-auto md:px-6 min-h-dvh">
            <div className="-mx-(--card-padding) [--card-padding:0.75rem] grid gap-y-4 ">
              <Link
                href="/blog/aspect-ratio"
                className="h-fit grid gap-4 items-center grid-cols-[auto_1fr] group relative hover:bg-muted/40 rounded-xl px-4 py-3 ">
                <span className="text-muted-foreground text-sm">
                  <time>Jan 17, 2025</time>
                </span>{" "}
                <h2 className="text-title">
                  TailwindCSS Tip : How to prevent Layout Shifts With Aspect
                  Ratio
                </h2>{" "}
              </Link>
              <Link
                href="/blog/focus-within-and-focus-visible"
                className="h-fit grid gap-4 items-center grid-cols-[auto_1fr] group relative hover:bg-muted/40 rounded-xl px-4 py-3 ">
                <span className="text-muted-foreground  text-sm">
                  <time>Jan 17, 2025</time>
                </span>
                <h2 className="text-title">
                  TailwindCSS Tip : Use of focus-within and focus-visible
                </h2>
              </Link>
              <Link
                href="/blog/grid-template"
                className="h-fit grid gap-4 items-center grid-cols-[auto_1fr] group relative hover:bg-muted/40 rounded-xl px-4 py-3 ">
                <span className="text-muted-foreground  text-sm">
                  <time>Jan 17, 2025</time>
                </span>
                <h2 className="text-title">TailwindCSS Tip : Grid Template</h2>
              </Link>
              <Link
                href="/blog/perfect-inner-outer-radius"
                className="h-fit grid gap-4 items-center grid-cols-[auto_1fr] group relative hover:bg-muted/40 rounded-xl px-4 py-3 ">
                <span className="text-muted-foreground  text-sm">
                  <time>Jan 17, 2025</time>
                </span>
                <h2 className="text-title">
                  TailwindCSS Tip : How to Create perfect Inner-Outer Border
                  Radius
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
