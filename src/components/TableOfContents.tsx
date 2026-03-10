"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Crée un Intersection Observer pour tracker l'en-tête visible
    const headingElements = headings.map((heading) => {
      const element = document.getElementById(heading.id);
      return { id: heading.id, element };
    });

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleId = "";
        let maxIntersection = 0;

        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio > maxIntersection
          ) {
            maxIntersection = entry.intersectionRatio;
            visibleId = entry.target.id;
          }
        });

        if (visibleId) {
          setActiveId(visibleId);
        }
      },
      {
        rootMargin: "-100px 0px -66%",
      }
    );

    headingElements.forEach(({ element }) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="space-y-3">
      <h4 className="text-foreground mb-4 text-sm font-semibold">
        Sur cette page
      </h4>
      <ul className="space-y-3 text-sm">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? "ml-4" : ""}>
            <Link
              href={`#${heading.id}`}
              className={`block transition-colors ${
                activeId === heading.id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(heading.id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  setActiveId(heading.id);
                }
              }}>
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
