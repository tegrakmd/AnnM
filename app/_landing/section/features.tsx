import { Atom } from "lucide-react";
import Image from "next/image";

export function FeatureSection() {
  return (
    <section className="@container overflow-hidden py-24">
      <div className="mx-auto max-w-5xl">
        <MistKitLogo />
        {/* Main Content Grid / Graphic */}
        <div className="relative max-sm:pr-1 sm:pl-1 md:px-4">
          {/* Left Navigation/Tabs */}
          <div className="lg:bottom-22 pl-6 max-sm:pb-6 sm:absolute sm:bottom-20 sm:left-0 sm:z-20 sm:pl-8 sm:pt-4 md:bottom-14 md:pl-6 lg:pl-10">
            <div className="mt-auto flex flex-col">
              <button className="active:scale-98 relative flex w-fit cursor-pointer items-center gap-2.5 pb-3 pt-2 text-left text-sm font-medium duration-200 md:px-6 text-foreground">
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
                  className="lucide lucide-hourglass text-muted-foreground size-4 dark:text-blue-500/25">
                  <path d="M5 22h14"></path>
                  <path d="M5 2h14"></path>
                  <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
                </svg>
                AI Models
              </button>

              <button className="active:scale-98 relative flex w-fit cursor-pointer items-center gap-2.5 pb-3 pt-2 text-left text-sm font-medium duration-200 md:px-6 text-muted-foreground hover:text-foreground/75">
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
                  className="lucide lucide-globe size-4">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                Global Reach
              </button>

              <button className="active:scale-98 relative flex w-fit cursor-pointer items-center gap-2.5 pb-3 pt-2 text-left text-sm font-medium duration-200 md:px-6 text-muted-foreground hover:text-foreground/75">
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
                  className="lucide lucide-bot size-4">
                  <path d="M12 8V4H8" />
                  <rect width="16" height="12" x="4" y="8" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
                </svg>
                Smart Agent
              </button>
            </div>
          </div>

          {/* Overlapping UI Card Graphic */}
          <div className="mask-[url('/illustration-mask.svg')] mask-cover max-sm:mask-right md:mask-contain mask-no-repeat relative">
            <div className="absolute inset-0">
              <div className="scale-80 relative z-10 flex h-full items-center justify-center">
                <div aria-hidden="true" className="min-w-sm max-w-md px-6 pt-1">
                  <div className="bg-illustration/95 shadow-black/4 ring-border-illustration z-1 relative rounded-2xl p-6 shadow-md ring-1 backdrop-blur-sm">
                    <div className="mask-t-from-5% bg-illustration/50 mask-t-to-65% absolute inset-0 rounded-2xl backdrop-blur"></div>

                    {/* Card Header */}
                    <span className="text-muted-foreground text-xs flex items-center gap-1.5 relative z-10">
                      Today
                      <span className="bg-foreground/50 size-1 rounded-full"></span>{" "}
                      09:15 AM
                    </span>
                    <div className="mt-1 text-lg font-semibold relative z-10">
                      Marketing Website Launch
                    </div>

                    {/* Audio/Play Pill */}
                    <div className="bg-foreground/10 group relative mb-4 mt-3 h-fit w-fit cursor-pointer overflow-hidden rounded-full p-px shadow shadow-black/5 z-10">
                      <div className="bg-linear-to-br/increasing mask-r-to-75% mask-r-from-25% duration-5000 absolute inset-0 aspect-square -translate-y-1/3 animate-spin from-emerald-400 via-blue-500 to-indigo-400 opacity-50"></div>
                      <div className="group-hover:bg-illustration bg-background/95 relative flex h-8 items-center gap-1.5 rounded-full px-3 text-sm duration-100">
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
                          className="lucide lucide-play fill-foreground *:not-first:opacity-50 size-3">
                          <polygon points="6 3 20 12 6 21 6 3" />
                        </svg>
                        03:47
                      </div>
                    </div>

                    {/* Inner Card Tabs */}
                    <div className="space-y-4 relative z-10">
                      <div className="flex gap-5 border-b *:-mb-px *:flex *:cursor-pointer *:items-center *:gap-1.5 *:py-2 *:text-sm *:[&>svg]:size-3.5 text-muted-foreground">
                        <div className="border-primary border-b text-foreground">
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
                            className="lucide lucide-target">
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="6" />
                            <circle cx="12" cy="12" r="2" />
                          </svg>
                          <span>Summary</span>
                        </div>
                        <div>
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
                            className="lucide lucide-notepad-text">
                            <path d="M8 2v4" />
                            <path d="M12 2v4" />
                            <path d="M16 2v4" />
                            <rect width="16" height="18" x="4" y="4" rx="2" />
                            <path d="M8 10h6" />
                            <path d="M8 14h8" />
                            <path d="M8 18h5" />
                          </svg>
                          <span>Transcript</span>
                        </div>
                        <div>
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
                            className="lucide lucide-lasso-select">
                            <path d="M7 22a5 5 0 0 1-2-4" />
                            <path d="M7 16.93c.96.43 1.96.74 2.99.91" />
                            <path d="M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" />
                            <path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                            <path d="M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z" />
                          </svg>
                          <span>Creations</span>
                        </div>
                      </div>

                      {/* Inner Card Content */}
                      <div className="space-y-3 text-sm">
                        <p className="text-muted-foreground">
                          Key decisions from today's marketing sync:
                        </p>
                        <ul className="text-muted-foreground list-disc space-y-1.5 pl-4">
                          <li>
                            <span className="text-foreground font-medium">
                              Launch date confirmed:
                            </span>
                            Monday, March 18th at 9 AM EST
                          </li>
                          <li>
                            <span className="text-foreground font-medium">
                              Hero section:
                            </span>
                            New animated product showcase with A/B testing
                            enabled
                          </li>
                          <li>
                            <span className="text-foreground font-medium">
                              SEO improvements:
                            </span>
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
            </div>

            {/* Background Image using next/image */}
            <div className="@max-xl:aspect-5/7  aspect-6/5 pointer-events-none md:aspect-video relative overflow-hidden rounded-xl">
              <div className="dither  inset-0 opacity-65 dark:opacity-25">
                <Image
                  src="https://images.unsplash.com/photo-1723873591148-342982be8bca?q=80&w=2340&auto=format&fit=crop"
                  alt="AI Models Interface Background"
                  fill
                  className="size-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                  priority
                />
              </div>
              <Image
                src="https://images.unsplash.com/photo-1723873591148-342982be8bca?q=80&w=2340&auto=format&fit=crop"
                alt="AI Models Interface Background"
                fill
                className="size-full object-cover opacity-65 dark:opacity-35"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export const MistKitLogo = () => (
  <div className="inset-ring inset-ring-foreground/25 bg-linear-to-b dark:inset-shadow-2xs inset-shadow-white/25 rounded-(--radius) from-primary to-foreground/50 relative flex size-11 translate-y-0.5 items-center justify-center shadow-lg shadow-black/20 dark:shadow-white/10">
    <Atom className="mask-b-from-25% z-1 relative size-6 fill-white stroke-white drop-shadow-sm" />
    <Atom className="z-2 absolute inset-0 m-auto size-6 fill-white stroke-white opacity-65 drop-shadow-sm" />
    <Atom
      strokeDasharray="1 2"
      className="absolute inset-0 m-auto size-10 stroke-white stroke-[0.2px] opacity-65 drop-shadow-sm"
    />
  </div>
);
