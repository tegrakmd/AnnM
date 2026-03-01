import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BlockImageCard } from "./comps/block-image-card";
const imageClasses =
  "ring-foreground/7.5 relative overflow-hidden rounded-xl shadow-md shadow-black/4 ring-1 border-4 border-white";
export default function Home() {
  return (
    <>
      <section className="overflow-hidden pb-24">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
          <div className="max-w-lg">
            <h1 className="text-foreground text-balance text-4xl font-medium leading-10 tracking-tight">
              Build modern marketing websites with Shadcn blocks
            </h1>

            <Button asChild className="mt-5 rounded-full">
              <Link href="/hero-section">
                Explore blocks{" "}
                <span className="border-l-primary-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <h2 className="sr-only">Free Kits</h2>
          <div
            aria-hidden
            className="mask-x-from-75% pointer-events-none absolute -inset-x-32 inset-y-0 border-y"
          />
          <div className="relative mx-auto max-w-7xl px-4">
            <div
              aria-hidden
              className="mask-y-from-85% pointer-events-none absolute -inset-y-32 inset-x-4 border-x"
            />
            <div className="bg-foreground/4 relative">
              <div className="grid gap-1.5 p-1.5 lg:grid-cols-2">
                <div className="bg-card inset-ring-border inset-ring-1 relative z-10 overflow-hidden rounded-2xl px-6 pt-6 shadow-md shadow-black/5">
                  <div className="not-dark:mask-t-from-65% absolute inset-0 -z-10">
                    <Image
                      src="/upload.png"
                      alt="tailark hero section background"
                      className="size-full object-cover object-top opacity-50 dark:opacity-15"
                      width={987}
                      height={1481}
                      sizes="(max-width: 1280px) 100vw, (min-width: 1280px) 960px"
                    />
                  </div>

                  <div className="-mb-4">
                    <div className="mb-4 space-y-1">
                      <h3 className="text-sm font-medium">
                        <Link
                          href="/veil"
                          className="before:absolute before:inset-0">
                          Tailark Veil
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        For super minimalist, distraction-free websites.
                      </p>
                    </div>
                    <ImageWrapper>
                      <Image
                        src="/upload.png"
                        alt="Tailark Quartz libre pricing page"
                        width={936}
                        height={541}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 936px"
                        className="object-cover dark:hidden"
                      />
                      <Image
                        src="/upload.png"
                        alt="Tailark Quartz libre pricing page"
                        width={936}
                        height={541}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 936px"
                        className="not-dark:hidden object-cover"
                      />
                      <Image
                        src="/upload.png"
                        alt="Tailark Quartz libre pricing page"
                        width={936}
                        height={616}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 936px"
                        className="object-cover dark:hidden"
                      />
                      <Image
                        src="/upload.png"
                        alt="Tailark Quartz libre pricing page"
                        width={936}
                        height={616}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 936px"
                        className="not-dark:hidden object-cover"
                      />
                      <Image
                        src="/upload.png"
                        alt="Tailark Quartz libre pricing page"
                        width={936}
                        height={178}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 936px"
                        className="object-cover dark:hidden"
                      />
                      <Image
                        src="/upload.png"
                        alt="Tailark Quartz libre pricing page"
                        width={936}
                        height={178}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 936px"
                        className="not-dark:hidden object-cover"
                      />
                      <Image
                        src="/upload.png"
                        alt="Tailark Quartz libre pricing page"
                        width={936}
                        height={533}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 936px"
                        className="object-cover dark:hidden"
                      />
                      <Image
                        src="/upload.png"
                        alt="Tailark Quartz libre pricing page"
                        width={936}
                        height={533}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 936px"
                        className="not-dark:hidden object-cover"
                      />
                    </ImageWrapper>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="ring-foreground/6.5 bg-card relative z-10 overflow-hidden rounded-2xl p-6 shadow-md shadow-black/5 ring-1">
                    <div className="mb-4 space-y-1">
                      <h3 className="text-sm font-medium">
                        <Link
                          href="/hero-section"
                          className="before:absolute before:inset-0 before:z-10">
                          Tailark Dusk
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Perfect for dark mode websites
                      </p>
                    </div>
                    <ImageWrapper className="max-xl:aspect-45/52 *:aspect-auto">
                      <div className={cn("aspect-45/52")}>
                        <Image
                          src="/upload.png"
                          alt="Tailark Dusk features section"
                          width={960}
                          height={1097.33}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 936px"
                          className="size-full object-cover dark:hidden"
                        />
                        <Image
                          src="/upload.png"
                          alt="Tailark Dusk features section"
                          width={960}
                          height={1097.33}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 936px"
                          className="not-dark:hidden size-full object-cover"
                        />
                      </div>
                    </ImageWrapper>
                  </div>
                  <div className="ring-foreground/6.5 bg-card relative z-10 overflow-hidden rounded-2xl p-6 shadow-md shadow-black/5 ring-1">
                    <div className="mb-4 space-y-1">
                      <h3 className="text-sm font-medium">
                        <Link
                          href="/mist"
                          className="before:absolute before:inset-0 before:z-10">
                          Tailark Mist
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Notion-inspired marketing blocks
                      </p>
                    </div>
                    <div className="relative">
                      <div className="peer -m-2 overflow-hidden p-2 duration-300 ease-in-out [clip-path:inset(0px_50%_0px_0px)] hover:[clip-path:inset(0px_25%_0px_0px)]">
                        <div className={cn(imageClasses, "aspect-72/38")}>
                          <Image
                            src="/upload.png"
                            alt="Tailark Mist hero section"
                            width={960}
                            height={493.33}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 936px"
                            className="size-full object-cover object-top"
                          />
                        </div>
                      </div>
                      <div className="peer/dark absolute -inset-x-2 -bottom-2 top-0 p-2 duration-300 ease-in-out [clip-path:inset(0px_0px_0px_50%)] hover:[clip-path:inset(0px_0px_0px_25%)] peer-hover:[clip-path:inset(0px_0px_0px_75%)]">
                        <div className={cn(imageClasses, "aspect-72/38")}>
                          <Image
                            src="/upload.png"
                            alt="Tailark Mist features section"
                            width={960}
                            height={482.66}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 936px"
                            className="size-full object-cover object-top"
                          />
                        </div>
                      </div>
                      <div
                        aria-hidden
                        className="z-1 pointer-events-none absolute inset-0 flex duration-300 ease-in-out peer-hover/dark:translate-x-[-25.5%] peer-hover:translate-x-[25.5%]">
                        <div className="mx-auto h-full w-0.5 rounded bg-white shadow shadow-black/25" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-12 overflow-hidden pb-24">
        <div
          aria-hidden="true"
          className="mask-x-from-75% pointer-events-none absolute -inset-x-32 -inset-y-px h-px border-t border-dashed"
        />

        <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <span className="mb-6 block text-sm text-indigo-500 dark:text-indigo-400">
              Pro
            </span>
            <h2 className="text-foreground text-balance text-4xl font-medium leading-10 tracking-tight">
              Build enterprise-grade websites, faster.
            </h2>
            <p className="text-muted-foreground mt-4 text-balance text-base">
              Tailark Pro is your complete Shadcn kit, packed with pages, blocks
              and illustration crafted for speed and quality.
            </p>
            <Button asChild className="mt-6 rounded-full">
              <Link href="https://pro.tailark.com">
                Explore pro{" "}
                <span className="border-l-primary-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full">
          <div
            aria-hidden
            className="mask-x-from-75% pointer-events-none absolute -inset-x-32 inset-y-0 border-y"
          />
          <div className="relative mx-auto max-w-7xl px-4">
            <div
              aria-hidden
              className="mask-y-from-85% pointer-events-none absolute -inset-y-32 inset-x-4 border-x"
            />
            <div className="bg-foreground/4 relative overflow-hidden">
              <div className="grid grid-cols-2 gap-1.5 p-1.5 sm:grid-cols-3">
                <div className="space-y-1.5">
                  <BlockImageCard
                    name="features-carousel-2"
                    alt="Tailark pro features carousel 2"
                    height={271}
                  />
                  <div className="ring-foreground/6.5 bg-card relative z-10 overflow-hidden rounded-2xl shadow-md shadow-black/5 ring-1">
                    <div className="aspect-20/22 overlflow-hidden rounded-2xl">
                      <Image
                        src="/upload.png"
                        alt="Tailark Quartz libre pricing page"
                        width={440}
                        height={557}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 520px"
                        className="size-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <BlockImageCard
                    name="features-11"
                    alt="Tailark pro features 11"
                    height={245}
                  />
                  <div className="ring-foreground/6.5 bg-card relative z-10 overflow-hidden rounded-2xl shadow-md shadow-black/5 ring-1">
                    <div className="aspect-20/22 overlflow-hidden rounded-2xl">
                      <Image
                        src="/upload.png"
                        alt="Tailark Quartz libre pricing page"
                        width={440}
                        height={557}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 520px"
                        className="size-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid space-y-1.5">
                  <BlockImageCard
                    name="hero-section-15"
                    alt="Tailark pro hero section 15"
                    height={397}
                  />
                  <div className="ring-foreground/6.5 bg-card relative z-10 overflow-hidden rounded-2xl shadow-md shadow-black/5 ring-1">
                    <div className="aspect-20/22 overlflow-hidden rounded-2xl">
                      <Image
                        src="/upload.png"
                        alt="Tailark Quartz libre pricing page"
                        width={440}
                        height={557}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 520px"
                        className="size-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <BlockImageCard
                    name="hero-section-12"
                    alt="Tailark pro call to action 1"
                    height={158}
                  />
                  <BlockImageCard
                    name="hero-section-16"
                    alt="Tailark pro hero section 16"
                    height={445}
                  />
                </div>
                <div className="grid grid-rows-[auto_1fr] gap-1.5 max-sm:hidden">
                  <div className="space-y-1.5">
                    <BlockImageCard
                      name="team-3"
                      alt="Tailark pro team 3"
                      height={257}
                    />
                    <BlockImageCard
                      name="bento-13"
                      alt="Tailark pro bento 13"
                      height={428}
                    />
                    <BlockImageCard
                      name="investors-2"
                      alt="Tailark pro investors 2"
                      height={271}
                    />

                    <BlockImageCard
                      name="secondary-hero-2"
                      alt="Tailark pro secondary hero 2"
                      height={388}
                    />
                  </div>
                  <div className="bg-card ring-foreground/6.5 flex items-center justify-center rounded-2xl p-8 shadow-md shadow-black/5 ring-1">
                    <p className="text-muted-foreground max-w-xs text-balance text-center text-base">
                      200+ Blocks, 43 Pages, 123 Illustrations now - more
                      shipped progressively
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="relative mt-12 overflow-hidden pb-24">
        <div
          aria-hidden="true"
          className="mask-x-from-75% pointer-events-none absolute -inset-x-32 -inset-y-px h-px border-t border-dashed"
        />

        <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <span className="mb-6 block text-sm text-indigo-500 dark:text-indigo-400">
              Pro
            </span>
            <h2 className="text-foreground text-balance text-4xl font-medium leading-10 tracking-tight">
              Build enterprise-grade websites, faster.
            </h2>
            <p className="text-muted-foreground mt-4 text-balance text-base">
              Tailark Pro is your complete Shadcn kit, packed with pages, blocks
              and illustration crafted for speed and quality.
            </p>
            <Button asChild className="mt-6 rounded-full">
              <Link href="https://pro.tailark.com">
                Explore pro{" "}
                <span className="border-l-primary-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="mask-x-from-75% pointer-events-none absolute -inset-x-32 inset-y-0 border-y"
          />
          <div className="relative mx-auto max-w-7xl px-4">
            <div
              aria-hidden
              className="mask-y-from-85% pointer-events-none absolute -inset-y-32 inset-x-4 border-x"
            />
            <div className="bg-foreground/4 relative overflow-hidden">
              <div className="grid grid-cols-2 gap-1.5 p-1.5 sm:grid-cols-3">
                <div className="space-y-1.5">
                  <BlockImageCard
                    name="features-carousel-2"
                    alt="Tailark pro features carousel 2"
                    height={271}
                  />
                  <div className="ring-foreground/6.5 bg-card relative z-10 overflow-hidden rounded-2xl shadow-md shadow-black/5 ring-1">
                    <div className="aspect-20/22 overlflow-hidden rounded-2xl">
                      <Image
                        src="https://pro.tailark.com/pages/grid-2-landing-one.png"
                        alt="Tailark Quartz libre pricing page"
                        width={440}
                        height={557}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 520px"
                        className="size-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <BlockImageCard
                    name="features-11"
                    alt="Tailark pro features 11"
                    height={245}
                  />
                  <div className="ring-foreground/6.5 bg-card relative z-10 overflow-hidden rounded-2xl shadow-md shadow-black/5 ring-1">
                    <div className="aspect-20/22 overlflow-hidden rounded-2xl">
                      <Image
                        src="https://pro.tailark.com/pages/libre-pricing-one.png"
                        alt="Tailark Quartz libre pricing page"
                        width={440}
                        height={557}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 520px"
                        className="size-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid space-y-1.5">
                  <BlockImageCard
                    name="hero-section-15"
                    alt="Tailark pro hero section 15"
                    height={397}
                  />
                  <div className="ring-foreground/6.5 bg-card relative z-10 overflow-hidden rounded-2xl shadow-md shadow-black/5 ring-1">
                    <div className="aspect-20/22 overlflow-hidden rounded-2xl">
                      <Image
                        src="https://pro.tailark.com/pages/dark-landing-one.png"
                        alt="Tailark Quartz libre pricing page"
                        width={440}
                        height={557}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 520px"
                        className="size-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <BlockImageCard
                    name="call-to-action-1"
                    alt="Tailark pro call to action 1"
                    height={158}
                  />
                  <BlockImageCard
                    name="hero-section-16"
                    alt="Tailark pro hero section 16"
                    height={445}
                  />
                </div>
                <div className="grid grid-rows-[auto_1fr] gap-1.5 max-sm:hidden">
                  <div className="space-y-1.5">
                    <BlockImageCard
                      name="team-3"
                      alt="Tailark pro team 3"
                      height={257}
                    />
                    <BlockImageCard
                      name="bento-13"
                      alt="Tailark pro bento 13"
                      height={428}
                    />
                    <BlockImageCard
                      name="investors-2"
                      alt="Tailark pro investors 2"
                      height={271}
                    />

                    <BlockImageCard
                      name="secondary-hero-2"
                      alt="Tailark pro secondary hero 2"
                      height={388}
                    />
                  </div>
                  <div className="bg-card ring-foreground/6.5 flex items-center justify-center rounded-2xl p-8 shadow-md shadow-black/5 ring-1">
                    <p className="text-muted-foreground max-w-xs text-balance text-center text-base">
                      200+ Blocks, 43 Pages, 123 Illustrations now - more
                      shipped progressively
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const ImageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-card shadow-black/1.5 rounded-xl [--color-border-illustration:--alpha(var(--color-foreground)/6.5%)] [box-shadow:0_0_0_1px_var(--color-border-illustration),0_2px_4px_-0.5px_var(--tw-shadow-color),0_4px_8px_-1px_var(--tw-shadow-color),0_8px_16px_-2px_var(--tw-shadow-color),0_16px_32px_-4px_var(--tw-shadow-color),0_24px_48px_-6px_var(--tw-shadow-color),0_32px_64px_-8px_var(--tw-shadow-color),0_40px_80px_-10px_var(--tw-shadow-color),0_48px_96px_-12px_var(--tw-shadow-color)] dark:shadow-black/5",
        className
      )}>
      <div className="aspect-20/39 overflow-hidden rounded-xl">{children}</div>
    </div>
  );
};
