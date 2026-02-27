import React from "react";
export const CrossedPistols: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    {/* Simplified representation of the crossed pistols icon from the image */}
    <path
      d="M20 70 L45 45 M20 75 L50 45"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M80 70 L55 45 M80 75 L50 45"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M40 40 Q50 30 60 40 Q50 50 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="50" cy="45" r="3" fill="currentColor" />
    <path d="M30 60 L15 85 L25 90 L40 65" fill="currentColor" opacity="0.8" />
    <path d="M70 60 L85 85 L75 90 L60 65" fill="currentColor" opacity="0.8" />
  </svg>
);
// const : INtitailisartion_

export interface CreditData {
  year: string;
  title: string;
  director: string;
  starring: string[];
  basedOn: string;
  adaptedBy: string;
}
export type ThemeVariant = "dark" | "light";

export interface CreditCardProps extends CreditData {
  variant: ThemeVariant;
  media?: React.ReactNode;
}

export function Cartises() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-800 to-neutral-900 flex flex-col items-center justify-center p-4 sm:p-8 space-y-12">
      <div className="w-full flex flex-col space-y-24 max-w-5xl">
        {/* Version Dark sur fond neutre */}
        <section className="w-full">
          <div className="relative group">
            <CreditCard
              {...nightManagerData}
              variant="dark"
              media="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=400"
            />
          </div>
        </section>

        {/* Version Light sur le même fond pour tester la lisibilité */}

        <div className="max-w-3xl mx-auto px-4">
          <div className=" sm:p-8 rounded-sm ">
            <CreditCard
              {...nightManagerData}
              variant="light"
              media={
                <CrossedPistols className="text-black w-12 h-12 sm:w-16 sm:h-16" />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// =================
const nightManagerData: CreditData = {
  year: "2016",
  title: "THE NIGHT MANAGER",
  director: "SUSANNE BIER",
  starring: [
    "TOM HIDDLESTON",
    "HUGH LAURIE",
    "OLIVIA COLMAN",
    "DAVID HAREWOOD",
    "ELIZABETH DEBICKI",
    "TOM HOLLANDER",
  ],
  basedOn: "THE NIGHT MANAGER BY JOHN LE CARRÉ",
  adaptedBy: "DAVID FARR",
};
// =================

// =================

// =================

const CreditCard: React.FC<CreditCardProps> = ({
  year,
  title,
  director,
  starring,
  basedOn,
  adaptedBy,
  variant,
  media,
}) => {
  const isDark = variant === "dark";

  const colors = {
    // Fond transparent avec un léger flou pour la lisibilité
    bg: "bg-transparent backdrop-blur-[2px]",
    text: isDark ? "text-white" : "text-black",
    border: isDark ? "border-white/30" : "border-black/30",
  };

  const Cell: React.FC<{
    children?: React.ReactNode;
    className?: string;
    align?: "left" | "right";
  }> = ({ children, className = "", align = "left" }) => (
    <div
      className={`p-2 sm:p-4 min-h-[60px] sm:min-h-[80px] flex items-center ${align === "right" ? "justify-end text-right" : "justify-start text-left"} ${className}`}>
      {children}
    </div>
  );

  return (
    <div
      className={`relative ${colors.bg} ${colors.text} p-4 sm:p-8 md:p-12 select-none uppercase tracking-tighter overflow-hidden group transition-all duration-500 w-full`}>
      {/* Texture de grain subtile */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-noise"></div>

      <div
        className={`relative w-full max-w-2xl mx-auto border ${colors.border}`}>
        {/* Grille responsive : on garde les 2 colonnes pour l'identité visuelle mais on adapte le contenu */}
        <div className="grid grid-cols-2">
          {/* Row 1: Year & Title */}
          <Cell className={`border-r ${colors.border}`}></Cell>
          <Cell align="right" className={`border-b ${colors.border}`}>
            <div>
              <p className="text-[10px] sm:text-sm font-bold">{year}</p>
              <p className="text-sm sm:text-lg leading-tight font-bold">
                {title}
              </p>
            </div>
          </Cell>

          {/* Row 2: Direction */}
          <Cell align="right" className={`border-r border-b ${colors.border}`}>
            <div className="leading-none">
              <p className="text-[8px] sm:text-[10px] mb-1 opacity-70">
                DIRECTION
              </p>
              <p className="text-xs sm:text-base font-bold">BY {director}</p>
            </div>
          </Cell>
          <Cell className={`border-b ${colors.border}`}></Cell>

          {/* Row 3: Media & Starring */}
          <Cell
            className={`border-r border-b ${colors.border} flex justify-center items-center overflow-hidden`}>
            {media ? (
              <div className="w-full h-full flex items-center justify-center p-1 sm:p-2">
                {typeof media === "string" ? (
                  <img
                    src={media}
                    alt="Scene"
                    className="object-cover w-full h-full filter grayscale contrast-125"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center">
                    {media}
                  </div>
                )}
              </div>
            ) : (
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-current/5 animate-pulse"></div>
            )}
          </Cell>
          <Cell
            align="left"
            className={`border-b ${colors.border} items-start py-2 sm:py-4`}>
            <div className="leading-tight">
              <p className="text-[8px] sm:text-[10px] mb-1 font-bold opacity-70">
                STARRING
              </p>
              <div className="space-y-0.5">
                {starring.map((name, idx) => (
                  <p key={idx} className="text-[10px] sm:text-sm">
                    {name}
                  </p>
                ))}
              </div>
            </div>
          </Cell>

          {/* Row 4: Source Material */}
          <Cell align="right" className={`border-r border-b ${colors.border}`}>
            <div className="leading-tight">
              <p className="text-[8px] sm:text-[10px] mb-1 opacity-70">
                BASED ON
              </p>
              <p className="text-[9px] sm:text-[11px] font-bold">{basedOn}</p>
            </div>
          </Cell>
          <Cell className={`border-b ${colors.border}`}></Cell>

          {/* Row 5: Adaptation */}
          <Cell className={`border-r ${colors.border}`}></Cell>
          <Cell align="left">
            <div className="leading-none">
              <p className="text-[8px] sm:text-[10px] mb-1 opacity-70">
                ADAPTED
              </p>
              <p className="text-xs sm:text-base font-bold">BY {adaptedBy}</p>
            </div>
          </Cell>
        </div>

        {/* Marqueurs esthétiques aux coins */}
        <div
          className={`absolute -top-0.5 -left-0.5 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-current`}></div>
        <div
          className={`absolute -top-0.5 -right-0.5 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-current`}></div>
        <div
          className={`absolute -bottom-0.5 -left-0.5 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-current`}></div>
        <div
          className={`absolute -bottom-0.5 -right-0.5 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-current`}></div>

        {/* Marqueurs de centre */}
        <div
          className={`absolute top-1/2 left-0 -translate-x-0.5 -translate-y-0.5 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-current`}></div>
        <div
          className={`absolute top-1/2 right-0 translate-x-0.5 -translate-y-0.5 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-current`}></div>
      </div>
    </div>
  );
};
// =================

// =================

// =================
