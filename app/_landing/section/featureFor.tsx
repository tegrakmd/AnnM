// app/components/UnifiedPlatform.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Globe,
  Bot,
  Play,
  Target,
  NotepadText,
  LassoSelect,
  ShieldCheck,
  Hourglass,
} from "lucide-react";

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ComplianceItem {
  icon: React.ReactNode;
  label: string;
  isCertification?: boolean;
  value?: string;
}

export function FeatureForSection() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(["ai-models"])
  );

  const features: FeatureItem[] = [
    {
      id: "ai-models",
      icon: <Brain className="size-4 shrink-0" />,
      title: "AI Models",
      description:
        "Switch between GPT, Claude, and Gemini from a unified interface.",
    },
    {
      id: "global-reach",
      icon: <Globe className="size-4 shrink-0" />,
      title: "Global Reach",
      description: "Collaborate in real time with teammates across the globe.",
    },
    {
      id: "smart-agent",
      icon: <Bot className="size-4 shrink-0" />,
      title: "Smart Agent",
      description: "Automate repetitive tasks with context-aware AI agents.",
    },
  ];

  const complianceItems: ComplianceItem[] = [
    {
      icon: <ShieldCheck className="size-4 dark:text-emerald-500/25" />,
      label: "SOC 2",
      isCertification: true,
    },
    {
      icon: <ShieldCheck className="size-4 dark:text-emerald-500/25" />,
      label: "ISO 27001",
      isCertification: true,
    },
    {
      icon: <ShieldCheck className="size-4 dark:text-emerald-500/25" />,
      label: "GDPR",
      isCertification: true,
    },
    {
      icon: <Hourglass className="size-4 dark:text-blue-500/25" />,
      label: "99.9% uptime",
      value: "99.9%",
    },
  ];

  const toggleItem = (id: string): void => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const isExpanded = (id: string): boolean => expandedItems.has(id);

  return (
    <section className=" @container overflow-hidden py-24">
      <div className="mx-auto max-w-5xl px-2 md:px-6">
        <div className="bg-foreground/10 grid gap-px rounded-2xl p-px md:grid-cols-2">
          {/* Left Column - Features */}
          <div className="bg-background relative rounded-[15px]">
            <div className="flex h-full flex-col gap-12 px-6 pt-6 sm:p-12 sm:pb-6">
              <div className="text-balance">
                <h2 className="text-foreground text-4xl font-medium">
                  Ship with confidence using our unified platform
                </h2>
                <p className="text-muted-foreground mb-6 mt-4">
                  Streamline your workflow with tools designed to enhance
                  productivity at every step.
                </p>
                <Link
                  href="#"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm shadow-black/10 border border-transparent bg-card ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-8 rounded-md px-3 text-xs">
                  Learn more
                </Link>
              </div>

              <div className="mt-auto grid divide-y transition-all duration-300">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    data-expanded={isExpanded(feature.id)}
                    className="not-first:border-t not-first:border-t-card group relative grid grid-rows-[auto_1fr]">
                    <button
                      onClick={() => toggleItem(feature.id)}
                      className="group flex w-full cursor-pointer items-center gap-3 py-4 text-left">
                      <div
                        className={`transition-colors ${
                          isExpanded(feature.id)
                            ? "text-foreground"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}>
                        {feature.icon}
                      </div>
                      <h3
                        className={`font-medium transition-colors ${
                          isExpanded(feature.id)
                            ? "text-foreground"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}>
                        {feature.title}
                      </h3>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ${
                        isExpanded(feature.id)
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}>
                      <div className="overflow-hidden">
                        <p className="text-muted-foreground text-balance pb-6 pl-7">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Preview & Social Proof */}
          <div className="bg-background relative overflow-hidden rounded-[15px]">
            <div className="aspect-3/4 relative overflow-hidden rounded-[15px] md:h-full">
              <div className="scale-85 relative z-10 flex h-full items-center justify-center">
                <div aria-hidden="true" className="min-w-sm max-w-md px-6 pt-1">
                  <div className="bg-illustration/95 shadow-black/4 ring-border-illustration z-1 relative rounded-2xl p-6 shadow-md ring-1">
                    <div className="mask-t-from-5% bg-illustration/50 mask-t-to-65% absolute inset-0 rounded-2xl backdrop-blur"></div>

                    <span className="text-muted-foreground text-xs">
                      Today{" "}
                      <span className="bg-foreground/50 size-0.5 rounded-full"></span>{" "}
                      <span>09:15 AM</span>
                    </span>

                    <div className="mt-1 text-lg font-semibold">
                      Marketing Website Launch
                    </div>

                    <div className="bg-foreground/10 group relative mb-4 mt-3 h-fit w-fit cursor-pointer overflow-hidden rounded-full p-px shadow shadow-black/5">
                      <div className="bg-linear-to-br/increasing mask-r-to-75% mask-r-from-25% duration-2000 absolute inset-0 aspect-square -translate-y-1/3 animate-spin from-emerald-400 via-blue-500 to-indigo-400 opacity-50"></div>
                      <div className="group-hover:bg-illustration bg-background/95 relative flex h-8 items-center gap-1.5 rounded-full px-3 text-sm duration-100">
                        <Play className="fill-foreground size-3" />
                        03:47
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="*:not-first:text-foreground/50 flex gap-5 border-b *:-mb-px *:flex *:cursor-pointer *:items-center *:gap-1.5 *:py-2 *:text-sm *:[&>svg]:size-3.5">
                        <div className="border-primary border-b">
                          <Target className="size-3.5" />
                          <span>Summary</span>
                        </div>
                        <div>
                          <NotepadText className="size-3.5" />
                          <span>Transcript</span>
                        </div>
                        <div>
                          <LassoSelect className="size-3.5" />
                          <span>Creations</span>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <p className="text-muted-foreground">
                          Key decisions from today's marketing sync:
                        </p>
                        <ul className="text-muted-foreground list-disc space-y-1.5 pl-4">
                          <li>
                            <span className="text-foreground font-medium">
                              Launch date confirmed:
                            </span>{" "}
                            Monday, March 18th at 9 AM EST
                          </li>
                          <li>
                            <span className="text-foreground font-medium">
                              Hero section:
                            </span>{" "}
                            New animated product showcase with A/B testing
                            enabled
                          </li>
                          <li>
                            <span className="text-foreground font-medium">
                              SEO improvements:
                            </span>{" "}
                            Meta tags updated, sitemap regenerated, Core Web
                            Vitals optimized
                          </li>
                        </ul>
                        <p className="text-muted-foreground">
                          Next steps: QA review by Friday, staging deployment
                          Thursday EOD.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Image */}
              <div className="before:border-foreground/10 absolute inset-0 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[15px] before:border">
                <div className="dither absolute inset-0 opacity-75 dark:opacity-25">
                  <Image
                    alt="feature background image"
                    fill
                    className="size-full object-cover opacity-50"
                    sizes="100vw"
                    src="https://images.unsplash.com/photo-1723869791623-3b6a012f996b?q=80&w=2340&auto=format&fit=crop"
                  />
                </div>
                <Image
                  alt="feature background image"
                  fill
                  className="size-full object-cover opacity-75 dark:opacity-40"
                  sizes="100vw"
                  src="https://images.unsplash.com/photo-1723869791623-3b6a012f996b?q=80&w=2340&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>

          {/* Bottom Row - Compliance & Testimonial */}
          <div className="bg-background rounded-[15px] p-6 sm:p-12">
            <ul className="text-muted-foreground mt-auto space-y-3 text-sm">
              {complianceItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-foreground font-medium">
                    {item.isCertification ? item.label : item.value}
                  </span>
                  {!item.isCertification && (
                    <span className="text-muted-foreground">
                      {item.label.replace(item.value || "", "")}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background flex flex-col justify-end rounded-[15px] p-6 sm:p-12">
            <div className="relative mt-auto max-w-xl">
              <p className="text-foreground max-w-xs text-balance">
                &ldquo;Looks really good. Did you design in code or Figma
                first?&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="before:border-foreground/10 relative size-10 overflow-hidden rounded-lg shadow before:absolute before:inset-0 before:rounded-lg before:border">
                  <Image
                    alt="Shadcn Avatar"
                    width={56}
                    height={56}
                    className="size-full object-cover"
                    src="https://avatars.githubusercontent.com/u/124599?v=4"
                  />
                </div>
                <div className="space-y-0.5">
                  <p className="text-foreground text-sm font-medium">Shadcn</p>
                  <span className="text-muted-foreground block text-xs">
                    Creator of Shadcn UI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
