import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SectionSecond() {
  return (
    <section className="bg-background overflow-hidden pb-8 pt-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* En-tête (Titre et boutons) */}
        <div className="mb-20 text-center *:mx-auto ">
          <span className="dark:text-white text-primary text-sm  relative border-border-illustration border rounded-sm px-4  dark:bg-accent/30 py-1">
            Tegra kmd
            <AvaMax
              image="/avat.webp"
              className="absolute -top-10 left-16 z-10"
            />
          </span>
          <h1 className="mt-6 max-w-2xl text-balance text-4xl -tracking-wider  font-medium md:text-5xl lg:text-6xl">
            Streamline Your Invoicing Process.
          </h1>
          <p className="text-muted-foreground mb-6 mt-4 max-w-3xl text-balance tracking-tight text-sm md:text-lg">
            Simple and secure user authentication, complete with everything you
            need out-of-the-box to provide a secure experience for your users.
          </p>
          <div className="flex items-center justify-center">
            <Link
              className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-md border-[0.5px] border-white/10 shadow-black/15 [&_svg]:drop-shadow-sm text-shadow-sm bg-primary ring-1 ring-(--ring-color) [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 text-xs"
              href="#link">
              Get Started
            </Link>
            <Link
              className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm shadow-black/15 border border-transparent bg-card ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-8 rounded-md px-3 text-xs ml-3!"
              href="#link">
              Get a demo
            </Link>
          </div>
        </div>

        <div className="relative h-fit">
          {/* Lignes de fond en pointillés */}
          <div className="absolute inset-0 mx-auto flex max-w-5xl flex-col justify-between pointer-events-none">
            <div className="border-foreground/10 dark:border-foreground/5 h-px border-b border-dashed"></div>
            <div className="border-foreground/10 dark:border-foreground/5 h-px border-b border-dashed"></div>
            <div className="border-foreground/10 dark:border-foreground/5 h-px border-b border-dashed"></div>
            <div className="border-foreground/10 dark:border-foreground/5 h-px border-b border-dashed"></div>
            <div className="border-foreground/10 dark:border-foreground/5 h-px border-b border-dashed"></div>
          </div>

          <div className="absolute inset-0 m-auto max-w-4xl pointer-events-none">
            {/* Note: Assurez-vous d'avoir configuré les largeurs w-1/11 dans votre tailwind.config si ce n'est pas natif */}
            <div className="w-1/12 border-foreground/10 dark:border-foreground/5 absolute -inset-y-4 left-0 border-l border-dashed"></div>
            <div className="w-1/12 left-1/12 border-foreground/10 dark:border-foreground/5 absolute -inset-y-4 border-l border-dashed"></div>
            <div className="w-1/12 left-2/12 border-foreground/10 dark:border-foreground/5 absolute -inset-y-4 border-l border-dashed"></div>
            <div className="w-1/12 left-3/12 border-foreground/10 dark:border-foreground/5 absolute -inset-y-4 border-l border-dashed"></div>
            <div className="w-1/12 left-4/12 border-foreground/10 dark:border-foreground/5 absolute -inset-y-4 border-l border-dashed"></div>
            <div className="w-1/12 left-5/12 border-foreground/10 dark:border-foreground/5 absolute -inset-y-4 border-l border-dashed"></div>
            <div className="w-1/12 left-6/12 border-foreground/10 dark:border-foreground/5 absolute -inset-y-4 border-l border-dashed"></div>
            <div className="w-1/12 left-7/12 border-foreground/10 dark:border-foreground/5 absolute -inset-y-4 border-l border-dashed"></div>
            <div className="w-1/12 left-8/12 border-foreground/10 dark:border-foreground/5 absolute -inset-y-4 border-l border-dashed"></div>
            <div className="w-1/12 left-9/12 border-foreground/10 dark:border-foreground/5 absolute -inset-y-4 border-l border-dashed"></div>
            <div className="w-1/12 left-10/12 border-foreground/10 dark:border-foreground/5 absolute -inset-y-4 border-l border-dashed"></div>
            <div className="w-1/12 left-11/12 border-foreground/10 dark:border-foreground/5 absolute -inset-y-4 border-l border-dashed"></div>
            <div className="w-1/12 left-12/12 border-foreground/10 dark:border-foreground/5 absolute -inset-y-4 border-l border-dashed"></div>
            {/* Ajout simplifié pour les lignes verticales visuelles */}
          </div>

          <div className="relative mx-auto grid max-w-4xl px-px max-md:gap-6 md:grid-cols-11">
            {/* --- VOTRE BLOC EXACT (Vercel/Supabase/Firebase) --- */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:col-span-3">
              <div className="relative origin-top -translate-y-5 scale-75">
                {/* Vercel Card */}
                <div className="bg-illustration not-first:absolute nth-2:rotate-15 nth-3:-rotate-19 not-first:inset-0 nth-2:top-12 nth-3:top-24 ring-border-illustration shadow-black/6.5 row-span-3 grid h-fit w-28 grid-rows-subgrid gap-3 rounded-xl p-3 pb-6 shadow-md ring-1">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-medium leading-tight">
                      Vercel
                      <br /> Usage
                    </div>
                    <div className="shrink-0 *:size-5 *:fill-foreground">
                      <svg
                        viewBox="0 0 256 222"
                        width="1em"
                        height="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid">
                        <path
                          fill="currentColor"
                          d="m128 0 128 221.705H0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-1.5 self-start">
                    <div className="space-y-1.5">
                      <div className="flex gap-2">
                        <div className="bg-foreground/10 h-1 flex-1 rounded-full"></div>
                        <div className="bg-foreground/10 h-1 w-8 rounded-full"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-foreground/10 h-1 flex-1 rounded-full"></div>
                        <div className="bg-foreground/10 h-1 w-8 rounded-full"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-foreground/10 h-1 w-full rounded-full"></div>
                      </div>
                      <div className="flex gap-1">
                        <div className="bg-foreground/10 h-1 w-1/3 rounded-full"></div>
                        <div className="bg-foreground/10 h-1 w-1/3 rounded-full"></div>
                      </div>
                      <div className="mt-4 flex gap-1">
                        <div className="bg-foreground/10 h-1 w-2/3 rounded-full"></div>
                        <div className="bg-foreground/10 h-1 w-1/3 rounded-full"></div>
                      </div>
                      <div className="flex gap-1">
                        <div className="bg-foreground/10 h-1 w-1/3 rounded-full"></div>
                        <div className="bg-foreground/10 h-1 w-1/3 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supabase Card */}
                <div className="bg-illustration not-first:absolute nth-2:rotate-15 nth-3:-rotate-19 not-first:inset-0 nth-2:top-12 nth-3:top-24 ring-border-illustration shadow-black/6.5 row-span-3 grid h-fit w-28 grid-rows-subgrid gap-3 rounded-xl p-3 pb-6 shadow-md ring-1">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-medium leading-tight">
                      Supabase
                      <br /> Usage
                    </div>
                    <div className="shrink-0 *:size-5">
                      <svg viewBox="0 0 109 113" fill="none">
                        <path
                          d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                          fill="url(#paint0_linear)"></path>
                        <path
                          d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                          fill="url(#paint1_linear)"
                          fillOpacity="0.2"></path>
                        <path
                          d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
                          fill="#3ECF8E"></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="53.9738"
                            y1="54.974"
                            x2="94.1635"
                            y2="71.8295"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#249361"></stop>
                            <stop offset="1" stopColor="#3ECF8E"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear"
                            x1="36.1558"
                            y1="30.578"
                            x2="54.4844"
                            y2="65.0806"
                            gradientUnits="userSpaceOnUse">
                            <stop></stop>
                            <stop offset="1" stopOpacity="0"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-1.5 self-start">
                    <div className="space-y-1.5">
                      <div className="flex gap-2">
                        <div className="bg-foreground/10 h-1 flex-1 rounded-full"></div>
                        <div className="bg-foreground/10 h-1 w-8 rounded-full"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-foreground/10 h-1 flex-1 rounded-full"></div>
                        <div className="bg-foreground/10 h-1 w-8 rounded-full"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-foreground/10 h-1 w-full rounded-full"></div>
                      </div>
                      <div className="flex gap-1">
                        <div className="bg-foreground/10 h-1 w-1/3 rounded-full"></div>
                        <div className="bg-foreground/10 h-1 w-1/3 rounded-full"></div>
                      </div>
                      <div className="mt-4 flex gap-1">
                        <div className="bg-foreground/10 h-1 w-2/3 rounded-full"></div>
                        <div className="bg-foreground/10 h-1 w-1/3 rounded-full"></div>
                      </div>
                      <div className="flex gap-1">
                        <div className="bg-foreground/10 h-1 w-1/3 rounded-full"></div>
                        <div className="bg-foreground/10 h-1 w-1/3 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Firebase Card */}
                <div className="bg-illustration not-first:absolute nth-2:rotate-15 nth-3:-rotate-19 not-first:inset-0 nth-2:top-12 nth-3:top-24 ring-border-illustration shadow-black/6.5 row-span-3 grid h-fit w-28 grid-rows-subgrid gap-3 rounded-xl p-3 pb-6 shadow-md ring-1">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-medium leading-tight">
                      Firebase
                      <br /> Usage
                    </div>
                    <div className="shrink-0 *:size-5">
                      <svg fill="none" viewBox="0 0 600 600">
                        <path
                          fill="#FF9100"
                          d="M213.918 560.499c23.248 9.357 48.469 14.909 74.952 15.834 35.84 1.252 69.922-6.158 100.391-20.234-36.537-14.355-69.627-35.348-97.869-61.448-18.306 29.31-45.382 52.462-77.474 65.848Z"></path>
                        <path
                          fill="#FFC400"
                          d="M291.389 494.66c-64.466-59.622-103.574-145.917-100.269-240.568.108-3.073.27-6.145.46-9.216a166.993 166.993 0 0 0-36.004-5.241 167.001 167.001 0 0 0-51.183 6.153c-17.21 30.145-27.594 64.733-28.888 101.781-3.339 95.611 54.522 179.154 138.409 212.939 32.093-13.387 59.168-36.51 77.475-65.848Z"></path>
                        <path
                          fill="#FF9100"
                          d="M291.39 494.657c14.988-23.986 24.075-52.106 25.133-82.403 2.783-79.695-50.792-148.251-124.942-167.381-.19 3.071-.352 6.143-.46 9.216-3.305 94.651 35.803 180.946 100.269 240.568Z"></path>
                        <path
                          fill="#DD2C00"
                          d="M308.231 20.858C266 54.691 232.652 99.302 212.475 150.693c-11.551 29.436-18.81 61.055-20.929 94.2 74.15 19.13 127.726 87.686 124.943 167.38-1.058 30.297-10.172 58.39-25.134 82.404 28.24 26.127 61.331 47.093 97.868 61.447 73.337-33.9 125.37-106.846 128.383-193.127 1.952-55.901-19.526-105.724-49.875-147.778-32.051-44.477-159.5-194.36-159.5-194.36Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-1.5 self-start">
                    <div className="space-y-1.5">
                      <div className="flex gap-2">
                        <div className="bg-foreground/10 h-1 flex-1 rounded-full"></div>
                        <div className="bg-foreground/10 h-1 w-8 rounded-full"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-foreground/10 h-1 flex-1 rounded-full"></div>
                        <div className="bg-foreground/10 h-1 w-8 rounded-full"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-foreground/10 h-1 w-full rounded-full"></div>
                      </div>
                      <div className="flex gap-1">
                        <div className="bg-foreground/10 h-1 w-1/3 rounded-full"></div>
                        <div className="bg-foreground/10 h-1 w-1/3 rounded-full"></div>
                      </div>
                      <div className="mt-4 flex gap-1">
                        <div className="bg-foreground/10 h-1 w-2/3 rounded-full"></div>
                        <div className="bg-foreground/10 h-1 w-1/3 rounded-full"></div>
                      </div>
                      <div className="flex gap-1">
                        <div className="bg-foreground/10 h-1 w-1/3 rounded-full"></div>
                        <div className="bg-foreground/10 h-1 w-1/3 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* --- FIN DE VOTRE BLOC EXACT --- */}

            {/* Flèche de transition 1 */}
            <div className="flex items-center justify-center max-md:pt-4 dark:opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-big-right fill-illustration dark:fill-foreground stroke-illustration dark:stroke-foreground m-auto size-6 drop-shadow-sm max-md:hidden">
                <path d="M6 9h6V5l7 7-7 7v-4H6V9z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-big-down fill-illustration dark:fill-foreground stroke-illustration dark:stroke-foreground mt-auto size-6 drop-shadow-sm md:hidden">
                <path d="M15 6v6h4l-7 7-7-7h4V6h6z"></path>
              </svg>
            </div>

            {/* Carte du Milieu (Signature) */}
            <div className="-ml-px flex flex-col items-center justify-center overflow-hidden border-r border-t max-md:mx-auto max-md:size-fit md:col-span-3">
              <div className="shadow-black/6.5 bg-illustration ring-border pt-22 size-56 -translate-y-4 translate-x-4 rounded-bl-xl p-6 shadow ring-1">
                <div className="relative w-fit translate-y-3 border border-blue-500/50 px-5 py-3">
                  <div className="absolute -inset-0.5 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <div className="size-1 bg-blue-500"></div>
                      <div className="size-1 bg-blue-500"></div>
                      <div className="size-1 bg-blue-500"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="size-1 bg-blue-500"></div>
                      <div className="size-1 bg-blue-500"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="size-1 bg-blue-500"></div>
                      <div className="size-1 bg-blue-500"></div>
                      <div className="size-1 bg-blue-500"></div>
                    </div>
                  </div>
                  {/* SVG Signature simplifiée */}
                  <svg
                    height="40"
                    viewBox="0 0 204 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 text-foreground">
                    <path
                      d="M0.672 62.976C0.224 62.976 0 62.592 0 61.824C0 61.184 0.128 60.416 0.384 59.52..."
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="border-t px-4 pt-2">
                  <div className="text-xs">Méschac Irung</div>
                  <div className="text-foreground/65 text-[10px]">
                    Founder, CEO
                  </div>
                </div>
              </div>
            </div>

            {/* Flèche de transition 2 */}
            <div className="flex items-center justify-center dark:opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-big-right fill-illustration dark:fill-foreground stroke-illustration dark:stroke-foreground m-auto size-6 drop-shadow-sm max-md:hidden">
                <path d="M6 9h6V5l7 7-7 7v-4H6V9z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-big-down fill-illustration dark:fill-foreground stroke-illustration dark:stroke-foreground mt-auto size-6 drop-shadow-sm md:hidden">
                <path d="M15 6v6h4l-7 7-7-7h4V6h6z"></path>
              </svg>
            </div>

            {/* Carte de fin (Facture) */}
            <div className="flex items-center justify-center md:col-span-3">
              <CartoBlue
                title="Shadcn"
                description="Added corresponding “ghost” stroke lines for both series."
                reply="Reply..."
                image="/avat.webp"
              />
            </div>
          </div>
        </div>
      </div>
      <MessageArea />

      <CartoBlue
        title="Tegra kmd"
        description="Added corresponding “ghost” stroke lines for both series."
        reply="Reply..."
        image="/avat.webp"
      />
      <LogoMax />
    </section>
  );
}
export const CartoBlue = ({
  title,
  description,
  reply,
  image,
}: CartoBlueProps) => {
  return (
    <div className="bg-foreground/3 max-w-2xs ring-border-illustration shadow-black/6.5 overflow-hidden rounded-xl shadow ring-1 mx-auto">
      <div className="text-muted-foreground bg-illustration border-border-illustration border-dashed -mx-px rounded-lg border-x border-b p-3 text-sm">
        <div className="mb-3 flex items-center gap-2">
          <div className="before:border-foreground/15 shadow-black/6.5 relative size-5 md:size-7 overflow-hidden rounded-full shadow before:absolute before:inset-0 before:rounded-full before:border">
            <Image
              alt="shadcn"
              loading="lazy"
              width={82}
              height={82}
              decoding="async"
              data-nimg="1"
              className="rounded-full grayscale-100"
              src={image}
              style={{ color: "transparent" }}
            />
          </div>
          <span className="text-foreground text-xs">{title}</span>
        </div>
        <span>{description}</span>
      </div>
      <div className="text-muted-foreground px-3 py-2 text-xs">
        <span>{reply}</span>
      </div>
    </div>
  );
};

// All Functions Messages And Alls Thinks
export function MessageArea() {
  return (
    <section className="bg-linear-to-b  py-12 ">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-6">
            <RightMessage />
            <LeftMessage />
          </div>
        </div>
      </div>
    </section>
  );
}
interface CartoBlueProps {
  image: string;
  title: string;
  description: string;
  reply: string;
}

const AvaMax = ({
  image,
  className,
  ...props
}: {
  image: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-primary shadow-black/6.5  h-fit shrink-0 cursor-pointer w-fit rounded-r-full rounded-t-full p-1 shadow-md",
        className
      )}
      {...props}>
      <div className="before:border-foreground/20 relative size-6 overflow-hidden rounded-full border shadow-md before:absolute before:inset-0 before:rounded-full before:border">
        <Image
          alt="avatar"
          loading="lazy"
          className=" object-cover"
          fill
          decoding="async"
          src={image}
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  );
};

const LogoMax = () => {
  return (
    <div className="min-w-xs mask-x-from-75% relative py-6 w-fit mx-auto">
      <div className="relative">
        <svg
          className="absolute inset-0 m-auto size-14 blur-md dark:opacity-50"
          viewBox="0 0 296 298"
          fill="none">
          <mask
            id="gemini__a"
            width="296"
            height="298"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}>
            <path
              fill="#3186FF"
              d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"></path>
          </mask>
          <g mask="url(#gemini__a)">
            <g filter={`url(#gemini__b)`}>
              <ellipse
                cx="163"
                cy="149"
                fill="#3689FF"
                rx="196"
                ry="159"></ellipse>
            </g>
            <g filter={`url(#gemini__c)`}>
              <ellipse
                cx="33.5"
                cy="142.5"
                fill="#F6C013"
                rx="68.5"
                ry="72.5"></ellipse>
            </g>
            <g filter={`url(#gemini__d)`}>
              <ellipse
                cx="19.5"
                cy="148.5"
                fill="#F6C013"
                rx="68.5"
                ry="72.5"></ellipse>
            </g>
            <g filter={`url(#gemini__e)`}>
              <path
                fill="#FA4340"
                d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"></path>
            </g>
            <g filter={`url(#gemini__f)`}>
              <path
                fill="#FA4340"
                d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"></path>
            </g>
            <g filter={`url(#gemini__g)`}>
              <path
                fill="#14BB69"
                d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"></path>
            </g>
            <g filter="url(#gemini__h)">
              <path
                fill="#14BB69"
                d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"></path>
            </g>
          </g>
          <defs>
            <filter
              id="gemini__b"
              width="464"
              height="390"
              x="-69"
              y="-46"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_69_17998"
                stdDeviation="18"></feGaussianBlur>
            </filter>
            <filter
              id="gemini__c"
              width="265"
              height="273"
              x="-99"
              y="6"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_69_17998"
                stdDeviation="32"></feGaussianBlur>
            </filter>
            <filter
              id="gemini__d"
              width="265"
              height="273"
              x="-113"
              y="12"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_69_17998"
                stdDeviation="32"></feGaussianBlur>
            </filter>
            <filter
              id="gemini__e"
              width="299.5"
              height="329"
              x="-41.5"
              y="-130"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_69_17998"
                stdDeviation="32"></feGaussianBlur>
            </filter>
            <filter
              id="gemini__f"
              width="299.5"
              height="329"
              x="-45"
              y="-153"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_69_17998"
                stdDeviation="32"></feGaussianBlur>
            </filter>
            <filter
              id="gemini__g"
              width="299.5"
              height="329"
              x="-41"
              y="91"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_69_17998"
                stdDeviation="32"></feGaussianBlur>
            </filter>
            <filter
              id="gemini__h"
              width="299.5"
              height="329"
              x="-39"
              y="132"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_69_17998"
                stdDeviation="32"></feGaussianBlur>
            </filter>
          </defs>
        </svg>
        <div
          className={cn(
            "ring-border-illustration dark:ring-foreground/15 shadow-black/6.5 inset-shadow-sm dark:inset-shadow-foreground/6.5 not-dark:bg-illustration absolute inset-0 m-auto size-14 rounded-full shadow-lg ring-1"
          )}
        />
        <div className="flex items-center gap-6">
          <div className="rotate-x-5 not-nth-3:opacity-75 flex size-12 items-center gap-2.5 *:m-auto [&amp;&gt;svg]:size-6">
            <svg
              viewBox="0 0 24 24"
              style={{ flex: "0 0 auto", lineHeight: "1" }}>
              <path
                fill="#4D6BFE"
                d="M23.748 4.482c-.254-.124-.364.113-.512.234-.051.039-.094.09-.137.136-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.156-.708-.311-.955-.65-.172-.241-.219-.51-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.093.172.187.129.323-.082.28-.18.552-.266.833-.055.179-.137.217-.329.14a5.526 5.526 0 0 1-1.736-1.18c-.857-.828-1.631-1.742-2.597-2.458a11.365 11.365 0 0 0-.689-.471c-.985-.957.13-1.743.388-1.836.27-.098.093-.432-.779-.428-.872.004-1.67.295-2.687.684a3.055 3.055 0 0 1-.465.137 9.597 9.597 0 0 0-2.883-.102c-1.885.21-3.39 1.102-4.497 2.623C.082 8.606-.231 10.684.152 12.85c.403 2.284 1.569 4.175 3.36 5.653 1.858 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.133-.284 4.994-1.86.47.234.962.327 1.78.397.63.059 1.236-.03 1.705-.128.735-.156.684-.837.419-.961-2.155-1.004-1.682-.595-2.113-.926 1.096-1.296 2.746-2.642 3.392-7.003.05-.347.007-.565 0-.845-.004-.17.035-.237.23-.256a4.173 4.173 0 0 0 1.545-.475c1.396-.763 1.96-2.015 2.093-3.517.02-.23-.004-.467-.247-.588zM11.581 18c-2.089-1.642-3.102-2.183-3.52-2.16-.392.024-.321.471-.235.763.09.288.207.486.371.739.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.167-1.361-.802-2.5-1.86-3.301-3.307-.774-1.393-1.224-2.887-1.298-4.482-.02-.386.093-.522.477-.592a4.696 4.696 0 0 1 1.529-.039c2.132.312 3.946 1.265 5.468 2.774.868.86 1.525 1.887 2.202 2.891.72 1.066 1.494 2.082 2.48 2.914.348.292.625.514.891.677-.802.09-2.14.11-3.054-.614zm1-6.44a.306.306 0 0 1 .415-.287.302.302 0 0 1 .2.288.306.306 0 0 1-.31.307.303.303 0 0 1-.304-.308zm3.11 1.596c-.2.081-.399.151-.59.16a1.245 1.245 0 0 1-.798-.254c-.274-.23-.47-.358-.552-.758a1.73 1.73 0 0 1 .016-.588c.07-.327-.008-.537-.239-.727-.187-.156-.426-.199-.688-.199a.559.559 0 0 1-.254-.078.253.253 0 0 1-.114-.358c.028-.054.16-.186.192-.21.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.391.451.462.576.685.914.176.265.336.537.445.848.067.195-.019.354-.25.452z"></path>
            </svg>
          </div>
          <div className="rotate-x-5 not-nth-3:opacity-75 flex size-12 items-center gap-2.5 *:m-auto [&amp;&gt;svg]:size-6">
            <svg xmlSpace="preserve" viewBox="0 0 75 75">
              <path
                d="M24.3 44.7c2 0 6-.1 11.6-2.4 6.5-2.7 19.3-7.5 28.6-12.5 6.5-3.5 9.3-8.1 9.3-14.3C73.8 7 66.9 0 58.3 0h-36C10 0 0 10 0 22.3s9.4 22.4 24.3 22.4z"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "rgb(57, 89, 77)",
                }}></path>
              <path
                d="M30.4 60c0-6 3.6-11.5 9.2-13.8l11.3-4.7C62.4 36.8 75 45.2 75 57.6 75 67.2 67.2 75 57.6 75H45.3c-8.2 0-14.9-6.7-14.9-15z"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "rgb(209, 142, 226)",
                }}></path>
              <path
                d="M12.9 47.6C5.8 47.6 0 53.4 0 60.5v1.7C0 69.2 5.8 75 12.9 75c7.1 0 12.9-5.8 12.9-12.9v-1.7c-.1-7-5.8-12.8-12.9-12.8z"
                style={{ fill: "rgb(255, 119, 89)" }}></path>
            </svg>
          </div>
          <div className="rotate-x-5 not-nth-3:opacity-75 flex size-12 items-center gap-2.5 *:m-auto [&amp;&gt;svg]:size-6">
            <svg viewBox="0 0 296 298" fill="none">
              <mask
                id="gemini__a"
                width="296"
                height="298"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}>
                <path
                  fill="#3186FF"
                  d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"></path>
              </mask>
              <g mask="url(#gemini__a)">
                <g filter={`url(#gemini__b)`}>
                  <ellipse
                    cx="163"
                    cy="149"
                    fill="#3689FF"
                    rx="196"
                    ry="159"></ellipse>
                </g>
                <g filter={`url(#gemini__c)`}>
                  <ellipse
                    cx="33.5"
                    cy="142.5"
                    fill="#F6C013"
                    rx="68.5"
                    ry="72.5"></ellipse>
                </g>
                <g filter={`url(#gemini__d)`}>
                  <ellipse
                    cx="19.5"
                    cy="148.5"
                    fill="#F6C013"
                    rx="68.5"
                    ry="72.5"></ellipse>
                </g>
                <g filter={`url(#gemini__e)`}>
                  <path
                    fill="#FA4340"
                    d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"></path>
                </g>
                <g filter={`url(#gemini__f)`}>
                  <path
                    fill="#FA4340"
                    d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"></path>
                </g>
                <g filter={`url(#gemini__g)`}>
                  <path
                    fill="#14BB69"
                    d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"></path>
                </g>
                <g filter={`url(#gemini__h)`}>
                  <path
                    fill="#14BB69"
                    d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"></path>
                </g>
              </g>
              <defs>
                <filter
                  id="gemini__b"
                  width="464"
                  height="390"
                  x="-69"
                  y="-46"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_69_17998"
                    stdDeviation="18"></feGaussianBlur>
                </filter>
                <filter
                  id="gemini__c"
                  width="265"
                  height="273"
                  x="-99"
                  y="6"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_69_17998"
                    stdDeviation="32"></feGaussianBlur>
                </filter>
                <filter
                  id="gemini__d"
                  width="265"
                  height="273"
                  x="-113"
                  y="12"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_69_17998"
                    stdDeviation="32"></feGaussianBlur>
                </filter>
                <filter
                  id="gemini__e"
                  width="299.5"
                  height="329"
                  x="-41.5"
                  y="-130"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_69_17998"
                    stdDeviation="32"></feGaussianBlur>
                </filter>
                <filter
                  id="gemini__f"
                  width="299.5"
                  height="329"
                  x="-45"
                  y="-153"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_69_17998"
                    stdDeviation="32"></feGaussianBlur>
                </filter>
                <filter
                  id="gemini__g"
                  width="299.5"
                  height="329"
                  x="-41"
                  y="91"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse">
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_69_17998"
                    stdDeviation="32"></feGaussianBlur>
                </filter>
                <filter
                  id="gemini__h"
                  width="299.5"
                  height="329"
                  x="-39"
                  y="132"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_69_17998"
                    stdDeviation="32"></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>
          <div className="rotate-x-5 not-nth-3:opacity-75 flex size-12 items-center gap-2.5 *:m-auto [&amp;&gt;svg]:size-6">
            <svg
              className="fill-foreground"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 260">
              <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
            </svg>
          </div>
          <div className="rotate-x-5 not-nth-3:opacity-75 flex size-12 items-center gap-2.5 *:m-auto [&amp;&gt;svg]:size-6">
            <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 233">
              <path d="M186.18182 0h46.54545v46.54545h-46.54545z"></path>
              <path
                fill="#F7D046"
                d="M209.45454 0h46.54545v46.54545h-46.54545z"></path>
              <path d="M0 0h46.54545v46.54545H0zM0 46.54545h46.54545V93.0909H0zM0 93.09091h46.54545v46.54545H0zM0 139.63636h46.54545v46.54545H0zM0 186.18182h46.54545v46.54545H0z"></path>
              <path
                fill="#F7D046"
                d="M23.27273 0h46.54545v46.54545H23.27273z"></path>
              <path
                fill="#F2A73B"
                d="M209.45454 46.54545h46.54545V93.0909h-46.54545zM23.27273 46.54545h46.54545V93.0909H23.27273z"></path>
              <path d="M139.63636 46.54545h46.54545V93.0909h-46.54545z"></path>
              <path
                fill="#F2A73B"
                d="M162.90909 46.54545h46.54545V93.0909h-46.54545zM69.81818 46.54545h46.54545V93.0909H69.81818z"></path>
              <path
                fill="#EE792F"
                d="M116.36364 93.09091h46.54545v46.54545h-46.54545zM162.90909 93.09091h46.54545v46.54545h-46.54545zM69.81818 93.09091h46.54545v46.54545H69.81818z"></path>
              <path d="M93.09091 139.63636h46.54545v46.54545H93.09091z"></path>
              <path
                fill="#EB5829"
                d="M116.36364 139.63636h46.54545v46.54545h-46.54545z"></path>
              <path
                fill="#EE792F"
                d="M209.45454 93.09091h46.54545v46.54545h-46.54545zM23.27273 93.09091h46.54545v46.54545H23.27273z"></path>
              <path d="M186.18182 139.63636h46.54545v46.54545h-46.54545z"></path>
              <path
                fill="#EB5829"
                d="M209.45454 139.63636h46.54545v46.54545h-46.54545z"></path>
              <path d="M186.18182 186.18182h46.54545v46.54545h-46.54545z"></path>
              <path
                fill="#EB5829"
                d="M23.27273 139.63636h46.54545v46.54545H23.27273z"></path>
              <path
                fill="#EA3326"
                d="M209.45454 186.18182h46.54545v46.54545h-46.54545zM23.27273 186.18182h46.54545v46.54545H23.27273z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="text-foreground/65 mt-4 text-center text-xs   font-medium">
        Gemini Max
      </div>
    </div>
  );
};
const RightMessage = () => {
  return (
    <div className="w-full">
      <div className="before:mask-x-from-75% before:border-foreground/10 relative before:absolute before:inset-0 before:border-y before:border-dashed">
        <div className="relative mx-auto max-w-lg">
          <div className="w-fit max-w-3/4 bg-linear-to-b from-card to-indigo-500/5  ring-foreground/10 inset-ring inset-ring-background/50 ml-auto  rounded-t-2xl rounded-bl-2xl rounded-br p-3 text-sm text-indigo-950 shadow-md shadow-indigo-600/10 ring-1 selection:bg-indigo-900/10 selection:text-indigo-700 dark:text-indigo-50/65 dark:selection:text-indigo-300">
            <div className="text-xs md:text-sm">
              Distinctio provident nobis repudiandae deleniti necessitatibus.to
              accelerate the development of marketing websites.
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto overflow-hidden mt-1  max-w-lg flex items-end justify-end gap-2">
        <span className="text-muted-foreground block text-xs">Tegra kmd</span>

        <div className="before:border-foreground/20 relative size-6 md:size-8 overflow-hidden  rounded-t-2xl rounded-bl-2xl rounded-br  border shadow-md before:absolute before:inset-0 before:rounded-md before:border">
          <Image
            alt="avatar"
            loading="lazy"
            className=" object-cover"
            fill
            decoding="async"
            src="/avat.webp"
          />
        </div>
      </div>
    </div>
  );
};

const LeftMessage = () => {
  return (
    <div className="h-30">
      <div className="before:mask-x-from-75% before:border-foreground/10 relative before:absolute before:inset-0 before:border-y before:border-dashed">
        <div className="relative mx-auto max-w-lg">
          <div className="max-w-3/4 bg-linear-to-b from-card ring-foreground/10 inset-ring inset-ring-background/50 w-fit rounded-t-2xl rounded-bl rounded-br-2xl to-emerald-500/5 p-3 text-sm text-emerald-950 shadow-md shadow-emerald-600/10 ring-1 selection:bg-emerald-900/10 selection:text-emerald-700 dark:text-emerald-50/65 dark:selection:text-emerald-300">
            <div className="text-xs md:text-sm">
              Tailark is a collection of pre-built, responsive UI blocks and
              components designed to accelerate the development of marketing
              websites.
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto overflow-hidden mt-1  max-w-lg flex items-end justify-star gap-2">
        <div className="before:border-foreground/20 relative size-6 md:size-8 overflow-hidden  rounded-t-2xl rounded-bl rounded-br-2xl  border shadow-md before:absolute before:inset-0 before:rounded-md before:border">
          <Image
            alt="avatar"
            loading="lazy"
            className=" object-cover"
            fill
            decoding="async"
            src="/avat.webp"
          />
        </div>
        <span className="text-muted-foreground block text-xs text-shadow-blue-400">
          Frederick Bk
        </span>
      </div>
    </div>
  );
};
