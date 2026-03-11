"use client";

import Image from "next/image";

export interface Author {
  name: string;
  image: string;
}

interface AuthorsSectionProps {
  authors: Author[];
  showTitle?: boolean;
}

export function AuthorsSection({
  authors,
  showTitle = true,
}: AuthorsSectionProps) {
  if (!authors || authors.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      {showTitle && (
        <h4 className="text-foreground mb-4 text-sm font-semibold">
          Écrit par
        </h4>
      )}
      <div className="flex flex-col gap-4">
        {authors.map((author) => (
          <div
            key={author.name}
            className="grid grid-cols-[auto_1fr] items-center gap-2">
            <div className="ring-border-illustration bg-card aspect-square size-6 overflow-hidden rounded-md border border-transparent shadow-md shadow-black/15 ring-1">
              <Image
                alt={author.name}
                width={460}
                height={460}
                className="size-full object-cover"
                src={author.image}
              />
            </div>
            <span className="text-foreground line-clamp-1 text-sm">
              {author.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
