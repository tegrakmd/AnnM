"use client";

import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  level: number;
  children?: React.ReactNode;
}

/**
 * Wrapper pour les en-têtes MDX qui ajoute automatiquement les IDs
 */
export function HeadingWithId({ level, children, ...props }: HeadingProps) {
  // Génère l'ID à partir du texte enfant
  let id = "";
  if (typeof children === "string") {
    id = children
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  if (level === 2) {
    return (
      <h2 id={id} {...props}>
        {children}
      </h2>
    );
  }
  if (level === 3) {
    return (
      <h3 id={id} {...props}>
        {children}
      </h3>
    );
  }
  if (level === 4) {
    return (
      <h4 id={id} {...props}>
        {children}
      </h4>
    );
  }

  return (
    <h2 id={id} {...props}>
      {children}
    </h2>
  );
}
