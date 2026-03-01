import Image from "next/image";
import Link from "next/link";

export default function Allthink() {
  return (
    <div className="w-full min-h-dvh flex flex-col gap-4 items-center justify-center ">
      <ul className="flex items-center gap-4">
        <li>
          <Link href="./tripe/pages/links/Grid">Grid</Link>
        </li>
        <li>
          <Link href="./tripe/pages/links/Pipile">Pipiline</Link>
        </li>
        <li>
          <Link href="./tripe/pages/links/blog">BlogPage</Link>
        </li>
        <li>
          <Link href="./tripe/pages/links/blogMdx">BlogMdx</Link>
        </li>
        <li>
          <Link href="./tripe/pages/links/marquee">Marquee</Link>
        </li>
        <li>
          <Link href="./tripe/pages/links/Register">Register</Link>
        </li>
        <li>
          <Link href="./Saas/tripeTruest">Tailark</Link>
        </li>
        {/* /home/tegrakmd/Bureau/Apps/ann/app/Saas/tripeTruest */}
      </ul>
      <div
        aria-hidden="true"
        className="@4xl:aspect-auto flex aspect-video items-center justify-center">
        <div className="relative mx-auto flex w-fit gap-3">
          <div className="border-border-illustration absolute -inset-x-6 inset-y-0 border-y border-dashed"></div>
          <div className="border-border-illustration absolute -inset-y-6 inset-x-0 border-x border-dashed"></div>
          <div className="dark:ring-background dark:border-border-illustration border-border-illustration bg-foreground/65 relative flex aspect-square size-16 items-center rounded-[7px] border border-white/25 p-3 text-white shadow-lg shadow-black/35 ring ring-black dark:bg-zinc-900">
            <span className="absolute right-2 top-1 block text-sm">fn</span>
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
              className="lucide lucide-globe mt-auto size-4">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
          </div>
          <div className="dark:ring-background dark:border-border-illustration bg-foreground/65 relative flex aspect-square size-16 items-center justify-center rounded-[7px] border border-white/25 p-3 shadow-lg shadow-black/35 ring ring-black dark:bg-zinc-900">
            <span className="text-white">K</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" group-hover:bg-card/50 in-data-[theme=dark]:group-hover:bg-black not-dark:in-data-[theme=dark]:bg-black/95 z-1 peer relative flex h-full items-center justify-center p-8 py-12 *:scale-90  dark:group-hover:bg-black/50">
        <div aria-hidden="true" className="relative select-none">
          <div className="relative space-y-2 py-4">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-px bg-[length:1px_4px] bg-repeat-y opacity-25 [background-image:linear-gradient(180deg,var(--color-foreground)_1px,transparent_1px)]"
            />
            <div className="pl-5">
              <div className="text-foreground before:border-muted-foreground before:bg-background before:ring-background relative mt-0.5 inline-flex items-center gap-2 text-sm font-medium before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:ring">
                <div className="text-muted-foreground text-xs">06 AM</div>Poll
                Created
              </div>
            </div>
            <div className="bg-illustration ring-border-illustration shadow-black/6.5 relative -mx-5 flex rounded-xl border border-transparent py-1 pl-2 pr-4 text-xs shadow ring-1">
              <div className="before:border-primary before:bg-background before:ring-background relative ml-7 mt-0.5 inline-flex items-center gap-2 text-sm font-medium before:absolute before:inset-y-0 before:-left-[19px] before:my-auto before:size-[5px] before:rounded-full before:border before:ring">
                <div className="flex items-center -space-x-1">
                  <div className="bg-background size-6 rounded border overflow-hidden  shadow shadow-zinc-950/5 ">
                    <Image
                      alt="Tegra kmd"
                      loading="lazy"
                      width="120"
                      height="120"
                      decoding="async"
                      className="size-full object-cover"
                      src="/avat.webp"
                    />
                  </div>
                  <div className="bg-background size-6 rounded border overflow-hidden shadow shadow-zinc-950/5 ">
                    <Image
                      alt="Tegra kmd"
                      loading="lazy"
                      width="120"
                      height="120"
                      decoding="async"
                      className="size-full  object-cover"
                      src="/avat.webp"
                    />
                  </div>
                </div>
                +50 Users voted
              </div>
            </div>
            <div className="pl-5">
              <div className="text-foreground before:border-muted-foreground before:bg-background before:ring-background relative mt-0.5 inline-flex items-center gap-2 text-sm font-medium before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:ring">
                <div className="text-muted-foreground text-xs">01 PM</div>Poll
                Closed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
