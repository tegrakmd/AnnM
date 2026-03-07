import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, MoonStar } from "lucide-react";
import Link from "next/link";
export function AnnoncePro() {
  return (
    <div className="group relative mx-auto flex w-fit items-center gap-3 text-sm max-md:justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="size-4 text-emerald-600 dark:text-emerald-300">
        <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192Z" />
        <path
          className="opacity-60"
          d="M6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684Z"
        />
        <path
          className="opacity-50"
          d="M13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z"
        />
      </svg>

      <span className="text-muted-foreground group-hover:text-foreground font-medium">Introducing Veil Kit</span>
      <Link
        href="/veil"
        aria-label="Veil"
        className="before:absolute before:-inset-4">
        <div className="relative size-3">
          <ChevronRight
            aria-hidden
            strokeWidth={2.5}
            className="not-group-hover:-translate-x-2 size-3 translate-y-px opacity-50 duration-200 group-hover:opacity-100"
          />
          <ChevronRight
            aria-hidden
            strokeWidth={2.5}
            className="absolute inset-0 size-3 -translate-x-2 translate-y-px opacity-0 duration-200 group-hover:-translate-x-1 group-hover:opacity-25"
          />
          <ChevronRight
            aria-hidden
            strokeWidth={2.5}
            className="absolute inset-0 size-3 -translate-x-3 translate-y-px opacity-0 duration-200 group-hover:-translate-x-2 group-hover:opacity-10"
          />
        </div>
      </Link>
    </div>
  )
}
export function Herro() {
  return (
    <section className="relative w-full h-full [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)] mt-12 md:mt-32 font-poppins">
      <div className=" max-w-7xl px-4 py-12 mx-auto ">
        <div className="mx-auto max-w-xl text-center">
          <AnnoncePro />

          <h1 className="mb-7 mt-9 text-balance text-3xl  tracking-tight">
            Build modern marketing websites with
            {/* <Dusk1 /> */}
            {/* <span className="text-muted-foreground">for</span> */}
            {/* Modern */}
            <span className="bg-linear-to-b from-emerald-300 to-emerald-600 bg-clip-text text-transparent sm:font-['Caveat'] sm:text-5xl dark:from-emerald-200 dark:to-emerald-500">
              Websites.
            </span>
          </h1>
          <p className="text-forground/60 mx-auto mb-6 mt-4 max-w-md text-balance text-lg ">
            Modern, Responsive, pre-built UI blocks designed for marketing
            websites.
          </p>
          <div>
            <Button asChild>
              <Link
                href="./tripe"
                className="text-shadow-sm ring-1 ring-(--ring-color) [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] text-primary-foreground hover:bg-primary/90 border-[0.5px] border-white/10 text-xs">
                Tripe
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
type Dusk1Props = {
  className?: string;
};
export const Dusk1 = ({ className }: Dusk1Props) => (
  <div
    className={cn(
      "border-background dark:inset-ring dark:inset-ring-white/25 bg-linear-to-b dark:inset-shadow-2xs dark:inset-shadow-white/25 rounded-(--radius) relative flex size-9 translate-y-0.5 items-center justify-center border from-purple-300 to-blue-600 shadow-lg shadow-black/20 ring-1 ring-black/10 dark:border-0 dark:shadow-white/10 dark:ring-black/50",
      className
    )}>
    <div className="absolute inset-x-0 inset-y-2.5 border-y border-dotted border-white/25"></div>
    <div className="absolute inset-x-2.5 inset-y-0 border-x border-dotted border-white/25"></div>
    <MoonStar className="mask-b-from-25% size-6 fill-white stroke-white drop-shadow-sm" />
    <MoonStar className="absolute inset-0 m-auto size-6 fill-white stroke-white opacity-65 drop-shadow-sm" />
  </div>
);

const Annonce7 = ({
  className,
  ...props
}: {
  className?: string;
  props?: React.ComponentProps<typeof Link>;
}) => {
  return (
    <Link
      href="/"
      className={cn(
        "rounded-(--radius) dark:hover:bg-muted/25 ring-foreground/25 mx-auto flex w-fit items-center gap-2 p-1 pr-3 shadow-sm ring-1 duration-200 hover:scale-[1.025]",
        className
      )}
      {...props}>
      <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
        New
      </span>
      <span className="line-clamp-1 text-sm">Complete pages Off All Plans</span>
      <span className="bg-border block h-4 w-px"></span>
      <ArrowRight className="size-4" />
    </Link>
  );
};

export { Annonce7 };
