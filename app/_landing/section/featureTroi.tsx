import Image from "next/image";

export default function EngineFeatureSection() {
  return (
    <section className="@container overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
          {/* Left Column: Heading & Navigation */}
          <div className="grid pt-6 max-lg:row-span-2 max-lg:grid-rows-subgrid lg:pb-6">
            <div className="text-balance">
              <h2 className="text-foreground text-4xl font-medium">
                Ship with confidence using Tailark engine
              </h2>
              <p className="text-muted-foreground mt-6 text-lg">
                Streamline your workflow with tools designed to enhance
                productivity at every step.
              </p>
            </div>

            <div className="-ml-6 mt-auto flex flex-col">
              <button className="active:scale-98 relative flex cursor-pointer items-center gap-2 py-2 pr-6 text-left text-sm font-medium duration-200 text-muted-foreground hover:text-foreground/75">
                <div className="size-4" />
                AI Models
              </button>
              <button className="active:scale-98 relative flex cursor-pointer items-center gap-2 py-2 pr-6 text-left text-sm font-medium duration-200 text-foreground">
                <div className="size-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-4">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.1"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      transform="rotate(-90 12 12)"
                      strokeDasharray="62.83"
                      strokeDashoffset="62.83">
                      <animate
                        attributeName="stroke-dashoffset"
                        from="62.83"
                        to="0"
                        dur="6000ms"
                        fill="freeze"
                      />
                    </circle>
                  </svg>
                </div>
                Global Reach
              </button>
              <button className="active:scale-98 relative flex cursor-pointer items-center gap-2 py-2 pr-6 text-left text-sm font-medium duration-200 text-muted-foreground hover:text-foreground/75">
                <div className="size-4" />
                Smart Agent
              </button>
            </div>
          </div>

          {/* Right Area: Large Visual Card & Description */}
          <div className="relative grid max-lg:row-span-2 max-lg:grid-rows-subgrid lg:col-span-2 lg:grid-cols-7 lg:gap-0">
            {/* Visual Card Column */}
            <div className="relative lg:col-span-4">
              {/* Decorative Dashed Lines */}
              <div
                aria-hidden="true"
                className="mask-x-from-45% border-foreground/15 pointer-events-none absolute -inset-x-1 -inset-y-8 rotate-45 border-y border-dashed"
              />
              <div
                aria-hidden="true"
                className="mask-y-from-75% border-foreground/15 pointer-events-none absolute -inset-x-1 -inset-y-24 border-x border-dashed"
              />

              <div className="corner-tr-bevel corner-bl-bevel bg-muted aspect-4/5 lg:aspect-3/4 relative overflow-hidden rounded-xl rounded-bl-[3rem] rounded-tr-[3rem] lg:h-full">
                {/* Floating UI Card */}
                <div className="scale-85 relative z-10 flex h-full items-center justify-center">
                  <div
                    aria-hidden="true"
                    className="ring-border-illustration bg-card/90 shadow-black/6.5 min-w-80 rounded-3xl p-2 shadow-lg ring-1">
                    <div className="flex items-start justify-between px-2 pt-2">
                      <div className="space-y-1">
                        <div className="text-muted-foreground text-xs font-medium">
                          Meeting Invitation
                        </div>
                        <div className="text-base font-semibold">
                          Product Strategy Review
                        </div>
                      </div>
                      <div className="bg-foreground/5 flex size-9 items-center justify-center rounded-full">
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
                          className="lucide lucide-video size-4">
                          <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                          <rect x="2" y="6" width="14" height="12" rx="2" />
                        </svg>
                      </div>
                    </div>

                    <div className="bg-illustration ring-border-illustration mb-2 mt-3 space-y-3 rounded-2xl p-4 ring-1">
                      <div className="flex items-center gap-3 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="size-4.5 text-foreground/50">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>Wed, Jan 29 · 2:00 - 3:30 PM</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="size-4.5 text-foreground/50">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span className="text-foreground cursor-pointer underline underline-offset-2">
                          meet.google.com/abc-defg-hij
                        </span>
                      </div>

                      {/* Avatars */}
                      <div className="flex items-center gap-3 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="size-4.5 text-foreground/50">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <div className="flex -space-x-1.5">
                          {[47919550, 31113941, 68236786, 99137927].map(
                            (id) => (
                              <div
                                key={id}
                                className="bg-background size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                <Image
                                  alt="User Avatar"
                                  src={`https://avatars.githubusercontent.com/u/${id}?v=4`}
                                  width={24}
                                  height={24}
                                  className="rounded-full object-cover"
                                />
                              </div>
                            )
                          )}
                          <div className="ring-background bg-muted text-muted-foreground flex size-6 items-center justify-center rounded-full text-[10px] font-medium ring-1">
                            +4
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 pl-3 pr-0.5 pb-2">
                      <span className="text-sm font-semibold">Going?</span>
                      <div className="flex">
                        <div className="hover:bg-foreground/5 flex h-7 cursor-pointer items-center justify-center rounded-full px-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                          Yes
                        </div>
                        <div className="hover:bg-foreground/5 text-foreground/65 flex h-7 cursor-pointer items-center justify-center rounded-full px-2 text-sm font-medium">
                          No
                        </div>
                        <div className="hover:bg-foreground/5 text-foreground/65 flex h-7 cursor-pointer items-center justify-center rounded-full px-2 text-sm font-medium">
                          Maybe
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    alt="feature background"
                    src="https://images.unsplash.com/photo-1721111648084-5e4f18a8635c?q=80&w=2340"
                    fill
                    className="size-full object-cover opacity-75 dark:opacity-50"
                  />
                </div>
              </div>
            </div>

            {/* Feature Description Column */}
            <div className="flex flex-col justify-center gap-3 lg:col-span-3 lg:pl-12">
              <h3 className="text-foreground text-lg font-medium">
                Global Reach
              </h3>
              <p className="text-muted-foreground text-balance text-sm">
                Work with teammates across the globe with real-time presence
                indicators, seamless syncing, and automatic conflict resolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
