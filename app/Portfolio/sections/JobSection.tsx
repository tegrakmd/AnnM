import Link from "next/link";
import { openRoles } from "@/data/Works";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section className=" py-16 md:py-20 ">
      <div className="mx-auto max-w-4xl space-y-8 md:space-y-12 px-2 ">
        {/* Header */}
        <div className="max-w-xl px-4">
          <h2 className="text-balance text-xl md:text-4xl ">My Works</h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Join our team and help shape the future.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {openRoles.map((category) => (
            <div
              key={category.name}
              className="bg-accent dark:bg-muted/50 overflow-hidden rounded-2xl p-1">
              <div className="px-4 py-3">
                <h3 className="text-muted-foreground text-xs font-medium uppercase">
                  {category.name}
                </h3>
              </div>

              <div className="ring-border bg-background shadow-black/6.5 overflow-hidden rounded-xl shadow-md ring-1">
                {category.roles.map((role, index) => (
                  <div
                    key={role.title}
                    className="not-last:border-b not-last:border-dashed group">
                    <div className="hover:bg-accent/30 dark:hover:bg-foreground/5 relative flex flex-wrap items-center gap-1 gap-x-2 px-4 py-3">
                      <Link
                        href={role.href}
                        className=" after:absolute after:inset-0 max-md:w-full">
                        {role.title}
                      </Link>

                      <span className="bg-foreground/35 size-0.5 rounded-full max-md:hidden" />

                      <span className="text-muted-foreground text-sm">
                        {role.location}
                      </span>

                      <div className="group-hover:bg-foreground/6.5 group-hover:border-border ml-auto flex h-7 items-center gap-1.5 rounded-full border border-transparent pl-3 pr-2">
                        <span className="not-group-hover:opacity-0 text-xs font-medium duration-100">
                          Visite
                        </span>
                        <FlexLeft className="text-muted-foreground group-hover:text-indigo-500 size-4 transition-colors" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FlexLeft = ({ className }: { className?: string }) => {
  return (
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
      className={(cn("lucide lucide-arrow-right"), className)}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
};
