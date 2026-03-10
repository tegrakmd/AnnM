"use client";

import Image from "next/image";

type CoverImageProps = {
  src: string;
  alt: string;
};

export function CoverImage({ src, alt }: CoverImageProps) {
  return (
    <div className="bg-card/75 ring-border-illustration hover:bg-card/50 mb-12 rounded-xl border border-transparent p-0.5 shadow-md ring-1">
      <div className="relative aspect-video overflow-hidden rounded-[10px] before:border-border-illustration before:absolute before:inset-0 before:rounded-[10px] before:border">
        <div className="flex size-full items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
          <span className="sr-only text-sm text-muted-foreground">
            Post Cover
          </span>

          <Image
            src={src}
            alt={alt}
            width={1200}
            height={675}
            loading="lazy"
            className="aspect-video size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
