import { Github } from "@/components/ui/svgs/github";
import { PlanetWeb } from "@/components/ui/svgs/planetWeb";
import { X } from "@/components/ui/svgs/x";
import Image from "next/image";
import Link from "next/link";

export function AsideBar() {
  return (
    <div>
      <aside className="mb-8 lg:mb-0 lg:sticky lg:top-20 lg:self-start lg:w-64 shrink-0">
        <MyUserProfil />
        <Network />
      </aside>
    </div>
  );
}
const MyUserProfil = () => {
  return (
    <div>
      <div className=" w-fit  overflow-hidden  ring-black/10 relative  rounded-2xl shadow-md shadow-black/6.5 ring-1 border-2 border-white dark:ring-white/10 dark:border-black">
        <Image
          src="/upload.png"
          alt="tegrakmd"
          width={140}
          height={140}
          className="size-14  object-cover "
        />
      </div>
      <h1 className="mt-3 text-lg font-medium">Tegra kmd</h1>
      <p className="-mt-0.5 text-sm text-muted-foreground">@_tegrakmd</p>
    </div>
  );
};
const Network = () => {
  return (
    <div className="mt-3 flex gap-3">
      <Link
        href="https://x.com/tegrakmd"
        target="_blank"
        rel="noopener"
        aria-label="X"
        className="text-muted-foreground hover:text-foreground transition-colors">
        <X />
      </Link>

      <Link
        href="https://github.com/tegrakmd"
        target="_blank"
        rel="noopener"
        aria-label="GitHub"
        className="text-muted-foreground hover:text-foreground transition-colors">
        <Github />
      </Link>

      <Link
        href="https://tegrakmd.me"
        target="_blank"
        rel="noopener"
        aria-label="Website"
        className="text-muted-foreground hover:text-foreground transition-colors">
        <PlanetWeb />
      </Link>

      <button className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tabler-icon tabler-icon-rss ">
          <path d="M4 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M4 4a16 16 0 0 1 16 16"></path>
          <path d="M4 11a9 9 0 0 1 9 9"></path>
        </svg>
      </button>
    </div>
  );
};
