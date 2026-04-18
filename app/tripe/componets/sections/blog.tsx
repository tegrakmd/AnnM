import { ModeToggle } from "@/components/modeToggle";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Productlinks = [
  {
    title: "Features",
    href: "/",
  },
  {
    title: "Solution ",
    href: "/",
  },
  {
    title: "Services",
    href: "/",
  },
  {
    title: "Partnerships",
    href: "/",
  },
  {
    title: "Mobile App",
    href: "/",
  },
];
const CompanyLinks = [
  {
    title: "About",
    href: "/",
  },
  {
    title: "Licence ",
    href: "/",
  },
  {
    title: "Privacy",
    href: "/",
  },

]

export default function BlogPage() {
  return (
    <main role="main" className="bg-indigo-900/10 min-h-screen">
      <section>
        <div className="@container bg-accent/20">
          <article>
            <div className="@container grid grid-cols-[auto_1fr_auto] xl:grid-cols-[1fr_auto_1fr]">
              <div aria-hidden="true" className="p-[0.5px]">
                <div className="bg-card/75 h-full w-2 rounded lg:w-12 xl:w-full"></div>
              </div>
              <div className="max-w-276 xl:min-w-276 mx-auto w-full p-[0.5px]">
                <div
                  data-slot="content"
                  className="bg-card/75 h-full rounded p-6 lg:p-12">
                  <header className="mx-auto max-w-2xl">
                    <nav aria-label="breadcrumb" data-slot="breadcrumb">
                      <ol
                        data-slot="breadcrumb-list"
                        className="text-muted-foreground wrap-break-words flex flex-wrap items-center gap-1.5 text-sm sm:gap-2.5">
                        <li
                          data-slot="breadcrumb-item"
                          className="inline-flex items-center gap-1.5">
                          <Link
                            href="#"
                            data-slot="breadcrumb-link"
                            className="hover:text-foreground transition-colors">
                            Home
                          </Link>
                        </li>
                        <li
                          data-slot="breadcrumb-separator"
                          role="presentation"
                          aria-hidden="true"
                          className="[&>svg]:size-3.5">
                          <ChevronRight />
                        </li>
                        <li
                          data-slot="breadcrumb-item"
                          className="inline-flex items-center gap-1.5">
                          <a
                            data-slot="breadcrumb-link"
                            className="hover:text-foreground transition-colors text-foreground"
                            href="#">
                            Company
                          </a>
                        </li>
                      </ol>
                    </nav>
                    <h1 className="bg-linear-to-b from-emerald-300 to-emerald-600 dark:from-emerald-200 dark:to-emerald-500 bg-clip-text text-transparent my-6 text-balance text-4xl font-bold md:text-5xl font-['Caveat']">
                      Build your Safe Tripe
                    </h1>
                    <p className="text-muted-foreground text-xl">
                      Uncover the benefits and challenges of adopting a remote
                      work culture in modern businesses.
                    </p>
                  </header>
                </div>
              </div>
              <div aria-hidden="true" className="p-[0.5px]">
                <div className="bg-card/75 h-full w-2 rounded lg:w-12 xl:w-full"></div>
              </div>
            </div>

            <div className="@container grid grid-cols-[auto_1fr_auto] xl:grid-cols-[1fr_auto_1fr]">
              <div aria-hidden="true" className="p-[0.5px]">
                <div className="bg-card/75 h-full w-2 rounded lg:w-12 xl:w-full"></div>
              </div>
              <div className="max-w-276 xl:min-w-276 mx-auto w-full p-[0.5px]">
                <div
                  data-slot="content"
                  className="bg-card/75 h-full rounded p-6 lg:px-12">
                  <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                        <div className="ring-border-illustration bg-card aspect-square size-8 overflow-hidden rounded-md border border-transparent shadow-md shadow-black/5 ring-1">
                          <Image
                            alt="Tegra kmd"
                            loading="lazy"
                            width="460"
                            height="460"
                            decoding="async"
                            className="size-full object-cover"
                            src="/delbaB.jpeg"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="text-foreground line-clamp-1 text-sm">
                          Tegra kmd
                        </span>
                      </div>
                    </div>
                    <time
                      className="text-muted-foreground text-sm"
                      dateTime="2025-10-29T05:35:09.463Z">
                      October 29, 2025
                    </time>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="p-[0.5px]">
                <div className="bg-card/75 h-full w-2 rounded lg:w-12 xl:w-full"></div>
              </div>
            </div>

            <div className="@container grid grid-cols-[auto_1fr_auto] xl:grid-cols-[1fr_auto_1fr]">
              <div aria-hidden="true" className="p-[0.5px]">
                <div className="bg-card/75 h-full w-2 rounded lg:w-12 xl:w-full"></div>
              </div>
              <div className="max-w-276 xl:min-w-276 mx-auto w-full p-[0.5px]">
                <div
                  data-slot="content"
                  className="bg-card/75 h-full rounded p-6 lg:p-12">
                  <div className="mx-auto max-w-2xl">
                    <div className="relative mb-12 overflow-hidden rounded-xl ring ring-border border-2 border-transparent shadow-md shadow-primary/15">
                      <Image
                        alt="Embracing Remote Work Culture"
                        width="1200"
                        height="675"
                        decoding="async"
                        className="aspect-video w-full object-cover"
                        src="/bz.avif"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                        In the last decade, remote work has evolved from a niche
                        concept into a global movement reshaping how teams
                        operate. What started as a temporary solution during
                        global crises has become a permanent shift in how
                        companies define productivity, collaboration, and
                        employee satisfaction.
                      </p>
                      <h2
                        id="the-rise-of-flexibility"
                        className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold">
                        The Rise of Flexibility
                      </h2>
                      <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                        Remote work has opened doors to a new level of
                        flexibility. Employees can now tailor their workdays to
                        match their personal energy levels, environments, and
                        responsibilities. For many, this has resulted in{" "}
                        <strong className="text-foreground font-semibold">
                          improved mental health
                        </strong>{" "}
                        and a healthier{" "}
                        <strong className="text-foreground font-semibold">
                          work–life balance
                        </strong>
                        .
                      </p>
                      <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                        Companies, in turn, are recognizing that{" "}
                        <strong className="text-foreground font-semibold">
                          results matter more than location
                        </strong>
                        . The traditional 9-to-5 model is being replaced by
                        asynchronous collaboration, where output takes
                        precedence over office presence.
                      </p>
                      <h2
                        id="the-benefits-for-businesses"
                        className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold">
                        The Benefits for Businesses
                      </h2>
                      <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                        Organizations embracing remote work often see a direct
                        impact on their bottom line:
                      </p>
                      <ul className="text-muted-foreground mb-4 ml-6 list-disc space-y-2">
                        <li className="leading-relaxed">
                          <strong className="text-foreground font-semibold">
                            Wider talent pool:
                          </strong>{" "}
                          Companies are no longer limited by geography when
                          hiring.
                        </li>
                        <li className="leading-relaxed">
                          <strong className="text-foreground font-semibold">
                            Lower operational costs:
                          </strong>{" "}
                          Less spending on office space, equipment, and
                          utilities.
                        </li>
                        <li className="leading-relaxed">
                          <strong className="text-foreground font-semibold">
                            Higher retention:
                          </strong>{" "}
                          Employees value autonomy, which fosters loyalty and
                          trust.
                        </li>
                      </ul>
                      <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                        Beyond numbers, remote-first companies tend to nurture a
                        more{" "}
                        <strong className="text-foreground font-semibold">
                          inclusive and diverse workforce
                        </strong>
                        , since barriers like relocation and commuting are
                        removed.
                      </p>
                      <h2
                        id="the-challenges-to-overcome"
                        className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold">
                        The Challenges to Overcome
                      </h2>
                      <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                        However, adopting remote work isn’t without challenges.
                        Communication gaps, time zone differences, and feelings
                        of isolation can affect team dynamics.
                      </p>
                      <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                        To succeed, companies must{" "}
                        <strong className="text-foreground font-semibold">
                          intentionally design
                        </strong>{" "}
                        their remote culture — investing in the right tools,
                        establishing clear expectations, and creating
                        opportunities for informal connection. Virtual coffee
                        chats, async stand-ups, and annual in-person retreats
                        are all effective ways to bridge the gap.
                      </p>
                      <h2
                        id="building-a-sustainable-remote-culture"
                        className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold">
                        Building a Sustainable Remote Culture
                      </h2>
                      <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                        True remote culture is built on{" "}
                        <strong className="text-foreground font-semibold">
                          trust, transparency, and communication
                        </strong>
                        . Leaders need to model flexibility while ensuring
                        accountability. Regular feedback loops, clear
                        documentation, and a culture of recognition make remote
                        work sustainable in the long term.
                      </p>
                      <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                        Ultimately, embracing remote work isn’t just about where
                        people work — it’s about{" "}
                        <strong className="text-foreground font-semibold">
                          how teams connect, create, and grow together
                        </strong>{" "}
                        in a digital-first world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="p-[0.5px]">
                <div className="bg-card/75 h-full w-2 rounded lg:w-12 xl:w-full"></div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <footer role="contentinfo" className="bg-accent/20">
        <div className="@container  grid grid-cols-[auto_1fr_auto] xl:grid-cols-[1fr_auto_1fr]">
          <div aria-hidden="true" className="p-[0.5px]">
            <div className="bg-card/75 h-full w-2 rounded lg:w-12 xl:w-full"></div>
          </div>
          <div className="max-w-276 xl:min-w-276 mx-auto w-full p-[0.5px]">
            <div data-slot="content" className="bg-card/75 h-full rounded">
              <div className="h-12"></div>
            </div>
          </div>
          <div aria-hidden="true" className="p-[0.5px]">
            <div className="bg-card/75 h-full w-2 rounded lg:w-12 xl:w-full"></div>
          </div>
        </div>
        <div className="@container grid grid-cols-[auto_1fr_auto] xl:grid-cols-[1fr_auto_1fr]">
          <div aria-hidden="true" className="p-[0.5px]">
            <div className="bg-card/75 h-full w-2 rounded lg:w-12 xl:w-full"></div>
          </div>
          <div className="max-w-276 xl:min-w-276 mx-auto w-full">
            <div className="**:data-grid-content:bg-card/75 **:data-grid-content:h-full **:data-grid-content:rounded grid *:p-[0.5px]">
              <div className="@4xl:grid-cols-5 grid gap-px">
                <div
                  data-grid-content="true"
                  className="@4xl:col-span-2 space-y-6 p-6 lg:p-12">
                  {/* <Link
                    aria-label="go home"
                    className="block size-fit"
                    href="#">
                    <svg
                      className="text-foreground h-6 w-full"
                      viewBox="0 0 797 220"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.9543 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.6923 220 96.1803 220C87.2442 220 80 212.756 80 203.82V100ZM28 20C23.5817 20 20 23.5817 20 28V72C20 76.4183 23.5817 80 28 80H80V28C80 23.5817 76.4183 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
                        fill="url(#paint_logo)"></path>
                      <path
                        d="M272.366 96.0719V150.886C272.366 154.6 273.205 157.296 274.884 158.973C276.682 160.531 279.679 161.309 283.874 161.309H296.461V178.383H280.278C271.048 178.383 263.975 176.226 259.06 171.913C254.145 167.599 251.688 160.59 251.688 150.886V96.0719H240V79.3582H251.688V54.7368H272.366V79.3582H296.461V96.0719H272.366ZM306.723 128.421C306.723 118.477 308.761 109.671 312.837 102.003C317.032 94.3346 322.666 88.4039 329.739 84.2105C336.932 79.8973 344.843 77.7407 353.474 77.7407C361.266 77.7407 368.039 79.2982 373.793 82.4133C379.667 85.4086 384.342 89.1827 387.818 93.7356V79.3582H408.497V178.383H387.818V163.646C384.342 168.318 379.607 172.212 373.613 175.327C367.62 178.442 360.787 180 353.115 180C344.604 180 336.812 177.843 329.739 173.53C322.666 169.097 317.032 162.987 312.837 155.199C308.761 147.291 306.723 138.365 306.723 128.421ZM387.818 128.78C387.818 121.951 386.38 116.021 383.503 110.988C380.746 105.956 377.09 102.122 372.534 99.4865C367.979 96.8507 363.064 95.5327 357.79 95.5327C352.515 95.5327 347.6 96.8507 343.045 99.4865C338.49 102.003 334.774 105.777 331.897 110.809C329.14 115.721 327.761 121.592 327.761 128.421C327.761 135.25 329.14 141.241 331.897 146.393C334.774 151.545 338.49 155.498 343.045 158.254C347.72 160.89 352.635 162.208 357.79 162.208C363.064 162.208 367.979 160.89 372.534 158.254C377.09 155.618 380.746 151.784 383.503 146.752C386.38 141.6 387.818 135.61 387.818 128.78ZM444.052 66.2388C440.336 66.2388 437.219 64.9807 434.702 62.4647C432.184 59.9487 430.926 56.8336 430.926 53.1194C430.926 49.4052 432.184 46.2901 434.702 43.7741C437.219 41.258 440.336 40 444.052 40C447.648 40 450.705 41.258 453.222 43.7741C455.74 46.2901 456.999 49.4052 456.999 53.1194C456.999 56.8336 455.74 59.9487 453.222 62.4647C450.705 64.9807 447.648 66.2388 444.052 66.2388ZM454.122 79.3582V178.383H433.623V79.3582H454.122ZM454.122 79.3582V178.383H433.623V79.3582H454.122ZM499.735 45.3915V178.383H479.236V45.3915H499.735ZM518.017 128.421C518.017 118.477 520.055 109.671 524.13 102.003C528.326 94.3346 533.96 88.4039 541.033 84.2105C548.225 79.8973 556.137 77.7407 564.768 77.7407C572.56 77.7407 579.333 79.2982 585.087 82.4133C590.961 85.4086 595.636 89.1827 599.112 93.7356V79.3582H619.791V178.383H599.112V163.646C595.636 168.318 590.901 172.212 584.907 175.327C578.913 178.442 572.08 180 564.408 180C555.897 180 548.105 177.843 541.033 173.53C533.96 169.097 528.326 162.987 524.13 155.199C520.055 147.291 518.017 138.365 518.017 128.421ZM599.112 128.78C599.112 121.951 597.674 116.021 594.797 110.988C592.04 105.956 588.383 102.122 583.828 99.4865C579.273 96.8507 574.358 95.5327 569.084 95.5327C563.809 95.5327 558.894 96.8507 554.339 99.4865C549.784 102.003 546.068 105.777 543.191 110.809C540.433 115.721 539.055 121.592 539.055 128.421C539.055 135.25 540.433 141.241 543.191 146.393C546.068 151.545 549.784 155.498 554.339 158.254C559.014 160.89 563.929 162.208 569.084 162.208C574.358 162.208 579.273 160.89 583.828 158.254C588.383 155.618 592.04 151.784 594.797 146.752C597.674 141.6 599.112 135.61 599.112 128.78ZM665.415 93.7356C668.412 88.7035 672.368 84.8096 677.283 82.0539C682.318 79.1784 688.251 77.7407 695.084 77.7407V98.9474H689.87C681.838 98.9474 675.724 100.984 671.529 105.058C667.453 109.131 665.415 116.2 665.415 126.264V178.383H644.917V79.3582H665.415V93.7356ZM751.328 128.96L797 178.383H769.309L732.627 135.789V178.383H712.129V45.3915H732.627V122.67L768.59 79.3582H797L751.328 128.96Z"
                        fill="currentColor"></path>
                      <defs>
                        <linearGradient
                          id="paint_logo"
                          x1="90"
                          y1="0"
                          x2="90"
                          y2="220"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#9B99FE"></stop>
                          <stop offset="1" stopColor="#2BC8B7"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </Link> */}
                  <span className="bg-linear-to-b from-emerald-300 to-emerald-600 dark:from-emerald-200 dark:to-emerald-500 bg-clip-text text-transparent sm:font-['Caveat'] sm:text-2xl  block">Websites</span>
                  <p className="text-muted-foreground text-balance">
                    Website is a platform for building fast your platform applications.
                  </p>
                </div>
                <div className="@4xl:col-span-3 grid gap-px sm:grid-cols-3">
                  <div
                    data-grid-content="true"
                    className="space-y-4 p-6 text-sm lg:p-12">
                    <span className="block font-medium">Product</span>
                    <div className="flex flex-wrap gap-4 sm:flex-col">
                      {Productlinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          className="text-muted-foreground hover:text-primary block duration-150"
                        >
                          <span>{link.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div
                    data-grid-content="true"
                    className="space-y-4 p-6 text-sm lg:p-12">
                    <span className="block font-medium">Company</span>
                    <div className="flex flex-wrap gap-4 sm:flex-col">
                      {CompanyLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          className="text-muted-foreground hover:text-primary block duration-150"
                        >
                          <span>{link.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div
                    data-grid-content="true"
                    className="space-y-4 p-6 lg:p-12">
                    <span className="block font-medium">Community</span>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X/Twitter"
                        className="text-muted-foreground hover:text-primary block"
                        href="#">
                        <svg
                          className="size-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                        </svg>
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-muted-foreground hover:text-primary block"
                        href="#">
                        <svg
                          className="size-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  data-grid-content="true"
                  className="flex flex-wrap items-center justify-between gap-4 p-6 lg:px-12">
                  <span className="text-muted-foreground text-sm">
                    © 2026 Tailark, All rights reserved{" "}
                  </span>
                  <div><ModeToggle /> </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="p-[0.5px]">
            <div className="bg-card/75 h-full w-2 rounded lg:w-12 xl:w-full"></div>
          </div>
        </div>
        <div className="@container grid grid-cols-[auto_1fr_auto] xl:grid-cols-[1fr_auto_1fr]">
          <div aria-hidden="true" className="p-[0.5px]">
            <div className="bg-card/75 h-full w-2 rounded lg:w-12 xl:w-full"></div>
          </div>
          <div className="max-w-276 xl:min-w-276 mx-auto w-full p-[0.5px]">
            <div data-slot="content" className="bg-card/75 h-full rounded">
              <div className="h-6"></div>
            </div>
          </div>
          <div aria-hidden="true" className="p-[0.5px]">
            <div className="bg-card/75 h-full w-2 rounded lg:w-12 xl:w-full"></div>
          </div>
        </div>
        <div className="@container grid grid-cols-[auto_1fr_auto] xl:grid-cols-[1fr_auto_1fr]">
          <div aria-hidden="true" className="p-[0.5px]">
            <div className="bg-card/75 h-full w-2 rounded lg:w-12 xl:w-full"></div>
          </div>
          <div className="max-w-276 xl:min-w-276 mx-auto w-full p-[0.5px]">
            <div data-slot="content" className="bg-card/75 h-full rounded">
              <div className="h-12"></div>
            </div>
          </div>
          <div aria-hidden="true" className="p-[0.5px]">
            <div className="bg-card/75 h-full w-2 rounded lg:w-12 xl:w-full"></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
