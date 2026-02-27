import Image from "next/image";
import Link from "next/link";

export default function FeatureSectionDeux() {
  return (
    <div className="">
      <section className="@container overflow-hidden py-24">
        {/* Top Navigation / Tabs */}
        <div className="border-foreground/10 border-y border-dashed">
          <div className="mx-auto max-w-5xl px-4 sm:px-14">
            <div className="relative flex">
              <div
                aria-hidden="true"
                className="before:bg-foreground absolute -bottom-px h-px before:absolute before:inset-x-4 before:inset-y-0 before:rounded-full"
                style={{ left: 0, width: 124 }}
              />
              <button
                data-state="expanded"
                className="active:scale-98 group cursor-pointer px-4 duration-200">
                <div className="flex items-center justify-center gap-3 py-4 duration-200">
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
                    className="lucide lucide-brain size-4 shrink-0 transition-colors text-foreground">
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                    <path d="M6 18a4 4 0 0 1-1.967-.516" />
                    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                  </svg>
                  <span className="group-hover:text-foreground text-sm font-medium transition-colors text-foreground">
                    Source
                  </span>
                </div>
              </button>

              <button
                data-state="collapsed"
                className="active:scale-98 group cursor-pointer px-4 duration-200">
                <div className="flex items-center justify-center gap-3 py-4 duration-200">
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
                    className="lucide lucide-bot size-4 shrink-0 transition-colors text-muted-foreground group-hover:text-foreground">
                    <path d="M12 8V4H8" />
                    <rect width="16" height="12" x="4" y="8" rx="2" />
                    <path d="M2 14h2" />
                    <path d="M20 14h2" />
                    <path d="M15 13v2" />
                    <path d="M9 13v2" />
                  </svg>
                  <span className="group-hover:text-foreground text-sm font-medium transition-colors text-muted-foreground">
                    Smart
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="mx-auto my-1 max-w-5xl px-2 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Left Column: Text & Features */}
            <div className="relative p-6 sm:p-12">
              <div
                aria-hidden="true"
                className="mask-y-from-80% border-foreground/10 pointer-events-none absolute -inset-x-1 -inset-y-56 border-x border-dashed"
              />
              <div className="flex h-full flex-col gap-12">
                <div className="max-w-sm text-balance">
                  <h3 className="text-foreground text-4xl font-medium">
                    Accelerate development with AI-powered assistance
                  </h3>
                  <p className="text-muted-foreground my-6">
                    Switch between GPT, Claude, and Gemini from a unified
                    interface with seamless provider switching.
                  </p>
                  <Link
                    href="#"
                    className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm shadow-black/10 border border-transparent bg-card ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-8 rounded-md px-3 text-xs">
                    Learn more{" "}
                    <span className="border-l-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
                  </Link>
                </div>
                <div className="mt-auto max-w-sm">
                  <ul className="text-muted-foreground mt-auto space-y-3 pt-8 text-sm">
                    <li className="flex items-center gap-3">
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
                        className="lucide lucide-shield-check *:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <span className="text-foreground font-medium">SOC 2</span>
                    </li>
                    <li className="flex items-center gap-3">
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
                        className="lucide lucide-shield-check *:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <span className="text-foreground font-medium">
                        ISO 27001
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
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
                        className="lucide lucide-shield-check *:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <span className="text-foreground font-medium">GDPR</span>
                    </li>
                    <li className="flex items-center gap-3">
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
                        <path d="M5 22h14" />
                        <path d="M5 2h14" />
                        <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                        <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
                      </svg>
                      <span>
                        <span className="text-foreground font-medium">
                          99.9%
                        </span>{" "}
                        uptime
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Visual UI Card */}
            <div className="relative h-fit">
              <div
                aria-hidden="true"
                className="mask-y-from-80% border-foreground/10 pointer-events-none absolute -inset-x-1 -inset-y-56 border-x border-dashed"
              />
              <div className="aspect-7/8 relative overflow-hidden rounded-xl">
                <div
                  className="scale-85 relative z-10 flex h-full items-center justify-center"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    transform: "none",
                  }}>
                  <div aria-hidden="true" className="max-w-92 relative">
                    <div className="bg-card/95 ring-border-illustration shadow-black/6.5 rounded-2xl p-6 pb-16 pt-2 shadow-xl ring-1">
                      <div className="divide-y border-b text-xs *:flex *:h-10 *:items-center *:py-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-foreground/50">To:</span>
                            <div className="bg-illustration ring-border-illustration shadow-black/6.5 flex cursor-pointer gap-1 rounded-full p-0.5 pr-2.5 shadow-md ring-1">
                              <div className="before:border-foreground/20 relative size-4 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border">
                                <Image
                                  alt="Shadcn"
                                  src="https://avatars.githubusercontent.com/u/124599?v=4"
                                  width={20}
                                  height={20}
                                  className="object-cover"
                                />
                              </div>
                              <span className="text-xs font-medium">
                                Shadcn
                              </span>
                            </div>
                          </div>
                          <div className="bg-foreground/10 flex size-6 rounded-full border">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-plus m-auto size-3.5">
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <span className="text-foreground/50">Cc:</span>
                        </div>
                        <div className="flex gap-1">
                          <span className="text-foreground/50">Subject:</span>
                        </div>
                        <div className="flex gap-1">
                          <span className="text-foreground/50">From:</span>
                        </div>
                      </div>
                      <div className="text-muted-foreground mt-6 space-y-2 text-sm/6">
                        <p>
                          Web applications with{" "}
                          <span className="bg-linear-to-r from-primary rounded to-emerald-500 bg-clip-text px-0.5 text-transparent">
                            React and TypeScript
                          </span>{" "}
                          using best practices.
                        </p>
                        <p className="mt-3">Sent from my iPhone</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Image Setup */}
                <div className="absolute inset-0 " style={{ opacity: 1 }}>
                  <div className="dither absolute inset-0 opacity-65 dark:opacity-35">
                    <Image
                      alt="feature background image"
                      src="https://images.unsplash.com/photo-1600223260976-32a509b23602?q=80&w=2340&auto=format&fit=crop"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="size-full object-cover"
                    />
                  </div>
                  <Image
                    alt="feature background overlay"
                    src="https://images.unsplash.com/photo-1600223260976-32a509b23602?q=80&w=2340&auto=format&fit=crop"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="size-full object-cover opacity-65 dark:opacity-35"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="border-foreground/10 h-px border-t border-dashed"
        />
        <div className="border-foreground/10 border-b border-dashed">
          <div className="mx-auto max-w-5xl px-4 sm:px-14">
            <div className="relative flex">
              <div
                aria-hidden="true"
                className="before:bg-foreground absolute -bottom-px h-px before:absolute before:inset-x-4 before:inset-y-0 before:rounded-full"
                style={{ left: 0, width: 124 }}
              />
              <button
                data-state="expanded"
                className="active:scale-98 group cursor-pointer px-4 duration-200">
                <div className="flex items-center justify-center gap-3 py-4 duration-200">
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
                    className="lucide lucide-bot size-4 shrink-0 transition-colors  text-foreground">
                    <path d="M12 8V4H8" />
                    <rect width="16" height="12" x="4" y="8" rx="2" />
                    <path d="M2 14h2" />
                    <path d="M20 14h2" />
                    <path d="M15 13v2" />
                    <path d="M9 13v2" />
                  </svg>
                  <span className="group-hover:text-foreground text-sm font-medium transition-colors text-foreground">
                    Source
                  </span>
                </div>
              </button>

              <button
                data-state="collapsed"
                className="active:scale-98 group cursor-pointer px-4 duration-200">
                <div className="flex items-center justify-center gap-3 py-4 duration-200">
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
                    className="lucide lucide-brain size-4 shrink-0  text-muted-foreground group-hover:text-foreground">
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                    <path d="M6 18a4 4 0 0 1-1.967-.516" />
                    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                  </svg>
                  <span className="group-hover:text-foreground text-sm font-medium transition-colors text-muted-foreground">
                    Smart
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
