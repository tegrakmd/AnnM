import { Button } from "@/components/ui/button";
import { Github } from "@/components/ui/svgs/github";
import { X } from "@/components/ui/svgs/x";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { Annonces } from "../page";

type Kmd = {
  Profil: string;
  Name: string;
  Role: string;
  Alt: string;
  Id: number;
};
const Admins: Kmd[] = [
  {
    Name: "Tegra kmd",
    Role: "Software Engineer",
    Profil: "/avat.webp",
    Alt: "tegra kmd",
    Id: 1,
  },
];
type Phases = {
  id: number;
  titles: string;
};
const PhaseItem: Phases[] = [
  { id: 1, titles: "All 158 blocks fully optimized and responsive" },
  { id: 2, titles: "Registry is ready, stable, and production-ready" },
  { id: 3, titles: "4 new block categories launche" },
  { id: 4, titles: "First complete pages delivered" },
];

export function HeroSection() {
  return (
    <section className="w-full ">
      <div className="mx-auto max-w-4xl space-y-12 mt-18 md:mt-40 md:px-2  ">
        {Admins.map((uss) => (
          <div key={uss.Id} className="space-y-7 md:space-y-6 px-4">
            <div className="flex items-center gap-4 md:space-y-4 ">
              <div className="size-18 md:size-26 overflow-hidden ring-black/10 relative  rounded-2xl shadow-md shadow-black/6.5 ring-1 border-2 border-white dark:ring-white/10 dark:border-black">
                <Image
                  alt={uss.Alt}
                  src={uss.Profil}
                  loading="lazy"
                  width={140}
                  height={140}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col space-y-2 text-3xl md:text-4xl">
                <h1>{uss.Name}</h1>
                <span className="text-sm md:text-xl text-muted-foreground">
                  {uss.Role}
                </span>
              </div>
            </div>

            <div className="w-full  space-y-4">
              <p className="tracking-wider  leading-tight text-sm sm:text-lg w-full text-muted-foreground">
                Hello ,I'm a<CodeText>{uss.Role}</CodeText>
                passioned par l'experiance utilisateur, "tu veux un site
                minimaliste , Elengant, Epurer, Moderne, Monumnets ,your are in
                the best place you are welcome".
              </p>
              <div className="flex items-center gap-2 ">
                <Button variant="outline" asChild className="rounded-sm ">
                  <Link href="/portfolioDeux">Portfolio 2</Link>
                </Button>
                <Button variant="outline" asChild className="rounded-sm ">
                  <Link href="#">
                    <Github />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="rounded-sm ">
                  <Link href="#">
                    <X />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
        <div className="px-4">
          <div className="text-foreground my-8 rounded-xl border border-emerald-500/15 bg-emerald-500/5 p-6">
            <h3 className="mb-4 font-medium text-emerald-900 dark:text-emerald-400">
              Phase 1 Complete
            </h3>
            {PhaseItem.map((Phas) => (
              <ul
                key={Phas.id}
                className="dark:text-foreground/85 list-outside list-disc space-y-2 pl-4 text-sm selection:text-cyan-600">
                <li className="text-base text-balance">{Phas.titles}</li>
              </ul>
            ))}
          </div>
        </div>
        <Annonces />
      </div>
    </section>
  );
}
const CodeText = (props: PropsWithChildren) => {
  return (
    <span
      className={cn(
        "ring-border ring-1 border-transparent bg-muted/2 px-1 py-px rounded inline-block"
      )}
      {...props}>
      {props.children}
    </span>
  );
};
const CocoCode = ({
  className,
  props,
}: {
  className?: string;
  props?: PropsWithChildren;
}) => {
  return (
    <span
      className={cn(
        "ring-border ring-1 border-transparent bg-muted/2 px-1 py-px rounded inline-block",
        className
      )}
      {...props}>
      {props?.children}
    </span>
  );
};
