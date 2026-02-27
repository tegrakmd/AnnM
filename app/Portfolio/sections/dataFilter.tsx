"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Category =
  | "all"
  | "engineering"
  | "marketing"
  | "compliance"
  | "data"
  | "finance";

type Job = {
  title: string;
  href: string;
  location: string;
  type: "Full-time" | "Part-time";
  category: Exclude<Category, "all">;
};

const categories: Category[] = [
  "all",
  "engineering",
  "marketing",
  "compliance",
  "data",
  "finance",
];

const jobs: Job[] = [
  {
    title: "AI Engineer",
    href: "#",
    location: "San Francisco",
    type: "Full-time",
    category: "engineering",
  },
  {
    title: "Design Engineer",
    href: "#",
    location: "San Francisco",
    type: "Full-time",
    category: "engineering",
  },
  {
    title: "Product Engineer",
    href: "#",
    location: "Remote",
    type: "Full-time",
    category: "engineering",
  },
  {
    title: "Backend Engineer",
    href: "#",
    location: "San Francisco",
    type: "Full-time",
    category: "engineering",
  },
  {
    title: "Software Engineer",
    href: "#",
    location: "New York",
    type: "Full-time",
    category: "engineering",
  },
  {
    title: "Marketing Manager",
    href: "#",
    location: "New York",
    type: "Full-time",
    category: "marketing",
  },
  {
    title: "Content Strategist",
    href: "content-strategist",
    location: "Remote",
    type: "Part-time",
    category: "marketing",
  },
  {
    title: "Compliance Officer",
    href: "#",
    location: "San Francisco",
    type: "Full-time",
    category: "compliance",
  },
  {
    title: "Regulatory Analyst",
    href: "#",
    location: "New York",
    type: "Full-time",
    category: "compliance",
  },
  {
    title: "Data Scientist",
    href: "#",
    location: "Remote",
    type: "Full-time",
    category: "data",
  },
  {
    title: "Data Analyst",
    href: "#",
    location: "San Francisco",
    type: "Full-time",
    category: "data",
  },
  {
    title: "Financial Analyst",
    href: "#",
    location: "New York",
    type: "Full-time",
    category: "finance",
  },
  {
    title: "Accountant",
    href: "#",
    location: "San Francisco",
    type: "Part-time",
    category: "finance",
  },
];

export function OpenRoleDeux() {
  const [activeCategory, setActiveCategory] = useState("all");

  const getJobNumber = (category: Category) => {
    if (category === "all") return jobs.length;
    return jobs.filter((job) => job.category === category).length;
  };
  const filteredJobs =
    activeCategory === "all"
      ? jobs
      : jobs.filter((job) => job.category === activeCategory);

  return (
    <section className=" py-16 md:py-32 px-2" id="open-Deux">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-balance text-4xl font-semibold max-md:px-6">
          Open Roles
        </h2>

        <div className="mt-12 grid max-md:gap-6 md:grid-cols-3">
          <div className=" bg-background sm:bg-transparent  sticky top-0 z-10 flex h-fit max-md:gap-2 pt-2 max-md:overflow-x-auto max-md:border-b max-md:px-4 max-md:pb-2  md:top-4  md:flex-col gap-2 md:pt-4 no-scrollbar">
            {categories.map((category) => (
              <Button
                key={category}
                variant={"outline"}
                onClick={() => setActiveCategory(category)}
                data-active={activeCategory === category}
                className={cn(
                  "shadow-sm  border  text-muted-foreground ",
                  "data-[active=true]:shadow-black/2 data-[active=true]:bg-indigo-400/20 data-[active=true]:text-indigo-500 font-medium ",
                  "not-data-[active=true]:hover:bg-card ",
                  "h-8 w-fit cursor-pointer rounded-lg px-3 text-sm capitalize shadow shadow-transparent  transition-all "
                )}>
                {category}
                <span className="font-mono  text-xs ml-2 font-medium">
                  {getJobNumber(category)}
                </span>
              </Button>
            ))}
          </div>

          <div className="@container max-md:px-2 md:col-span-2">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="not-last:space-y-0.5 not-last:pb-0.5 group">
                <div className="hover:bg-foreground/5 @3xl:grid-cols-2 relative grid gap-1 overflow-hidden rounded-xl p-4 transition-colors">
                  <Link
                    href={job.href}
                    className="font-medium after:absolute after:inset-0">
                    {job.title}
                  </Link>

                  <div className="flex items-center">
                    <div>
                      <span className="text-muted-foreground">
                        {job.location}
                      </span>
                      <span className="text-muted-foreground">
                        <span className="capitalize">
                          {job.type.split("-")[0]}
                        </span>
                        -{job.type.split("-")[1]}
                      </span>
                    </div>

                    <div className="group-hover:ring-border group-hover:bg-card  ml-auto flex h-6 items-center rounded-full px-2  dark:group-hover:ring-1 transition-all">
                      <ArrowRight className="not-group-hover:opacity-50 group-hover:text-indigo-400 size-3.5" />
                    </div>
                  </div>
                </div>

                {/* Séparateur pointillé */}
                <div
                  aria-hidden="true"
                  className="mx-4 h-px bg-[length:4px_1px] bg-repeat-x opacity-20 [background-image:linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] group-last:hidden"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
