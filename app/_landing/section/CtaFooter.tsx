

export default function CTASection() {
    return (
        <section className=" relative from-50% to-50% pt-12 md:pt-24">
            <div className="mx-auto max-w-5xl px-6">
                <div
                    data-slot="card"
                    className="ring-border bg-card text-card-foreground shadow-black/6.5 rounded-xl ring-1 relative overflow-hidden p-12 shadow-lg md:px-32 md:py-20"
                >
                    {/* Decorative background SVG */}
                    <svg
                        className="text-muted pointer-events-none absolute inset-0 size-full translate-y-3/4"
                        viewBox="0 0 180 220"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.9543 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.6923 220 96.1803 220C87.2442 220 80 212.756 80 203.82V100ZM28 20C23.5817 20 20 23.5817 20 28V72C20 76.4183 23.5817 80 28 80H80V28C80 23.5817 76.4183 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
                            fill="currentColor"
                        />
                        <defs>
                            <linearGradient
                                id="paint_logo"
                                x1="90"
                                y1="0"
                                x2="90"
                                y2="220"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9B99FE" />
                                <stop offset="1" stopColor="#2BC8B7" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Content */}
                    <div className="relative text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                            Create, Sell and Grow
                        </h2>
                        <p className="text-muted-foreground mb-6 mt-4 text-balance">
                            Join a community of over 1000+ companies and developers who have
                            already discovered the power of Tailark.
                        </p>
                        <Link
                            className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-md border-[0.5px] border-white/10 shadow-black/15 [&_svg]:drop-shadow-sm text-shadow-sm bg-primary ring-1 ring-(--ring-color) [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
                            href="#"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    );
}

import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear(); // Optionnel : rendre l'année dynamique

    return (
        <footer role="contentinfo" className=" py-12 sm:py-20">
            <div className=" space-y-16 ">
                {/* Top section: logo + description + navigation */}
                <div className="grid gap-12 md:grid-cols-5">
                    {/* Logo and description */}
                    <div className="space-y-6 md:col-span-2 md:space-y-12">
                        <Link
                            href="/"
                            aria-label="go home"
                            className="block size-fit"
                        >
                            <svg
                                className="text-foreground h-5 w-full"
                                viewBox="0 0 797 220"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.9543 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.6923 220 96.1803 220C87.2442 220 80 212.756 80 203.82V100ZM28 20C23.5817 20 20 23.5817 20 28V72C20 76.4183 23.5817 80 28 80H80V28C80 23.5817 76.4183 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M272.366 96.0719V150.886C272.366 154.6 273.205 157.296 274.884 158.973C276.682 160.531 279.679 161.309 283.874 161.309H296.461V178.383H280.278C271.048 178.383 263.975 176.226 259.06 171.913C254.145 167.599 251.688 160.59 251.688 150.886V96.0719H240V79.3582H251.688V54.7368H272.366V79.3582H296.461V96.0719H272.366ZM306.723 128.421C306.723 118.477 308.761 109.671 312.837 102.003C317.032 94.3346 322.666 88.4039 329.739 84.2105C336.932 79.8973 344.843 77.7407 353.474 77.7407C361.266 77.7407 368.039 79.2982 373.793 82.4133C379.667 85.4086 384.342 89.1827 387.818 93.7356V79.3582H408.497V178.383H387.818V163.646C384.342 168.318 379.607 172.212 373.613 175.327C367.62 178.442 360.787 180 353.115 180C344.604 180 336.812 177.843 329.739 173.53C322.666 169.097 317.032 162.987 312.837 155.199C308.761 147.291 306.723 138.365 306.723 128.421ZM387.818 128.78C387.818 121.951 386.38 116.021 383.503 110.988C380.746 105.956 377.09 102.122 372.534 99.4865C367.979 96.8507 363.064 95.5327 357.79 95.5327C352.515 95.5327 347.6 96.8507 343.045 99.4865C338.49 102.003 334.774 105.777 331.897 110.809C329.14 115.721 327.761 121.592 327.761 128.421C327.761 135.25 329.14 141.241 331.897 146.393C334.774 151.545 338.49 155.498 343.045 158.254C347.72 160.89 352.635 162.208 357.79 162.208C363.064 162.208 367.979 160.89 372.534 158.254C377.09 155.618 380.746 151.784 383.503 146.752C386.38 141.6 387.818 135.61 387.818 128.78ZM444.052 66.2388C440.336 66.2388 437.219 64.9807 434.702 62.4647C432.184 59.9487 430.926 56.8336 430.926 53.1194C430.926 49.4052 432.184 46.2901 434.702 43.7741C437.219 41.258 440.336 40 444.052 40C447.648 40 450.705 41.258 453.222 43.7741C455.74 46.2901 456.999 49.4052 456.999 53.1194C456.999 56.8336 455.74 59.9487 453.222 62.4647C450.705 64.9807 447.648 66.2388 444.052 66.2388ZM454.122 79.3582V178.383H433.623V79.3582H454.122ZM499.735 45.3915V178.383H479.236V45.3915H499.735ZM518.017 128.421C518.017 118.477 520.055 109.671 524.13 102.003C528.326 94.3346 533.96 88.4039 541.033 84.2105C548.225 79.8973 556.137 77.7407 564.768 77.7407C572.56 77.7407 579.333 79.2982 585.087 82.4133C590.961 85.4086 595.636 89.1827 599.112 93.7356V79.3582H619.791V178.383H599.112V163.646C595.636 168.318 590.901 172.212 584.907 175.327C578.913 178.442 572.08 180 564.408 180C555.897 180 548.105 177.843 541.033 173.53C533.96 169.097 528.326 162.987 524.13 155.199C520.055 147.291 518.017 138.365 518.017 128.421ZM599.112 128.78C599.112 121.951 597.674 116.021 594.797 110.988C592.04 105.956 588.383 102.122 583.828 99.4865C579.273 96.8507 574.358 95.5327 569.084 95.5327C563.809 95.5327 558.894 96.8507 554.339 99.4865C549.784 102.003 546.068 105.777 543.191 110.809C540.433 115.721 539.055 121.592 539.055 128.421C539.055 135.25 540.433 141.241 543.191 146.393C546.068 151.545 549.784 155.498 554.339 158.254C559.014 160.89 563.929 162.208 569.084 162.208C574.358 162.208 579.273 160.89 583.828 158.254C588.383 155.618 592.04 151.784 594.797 146.752C597.674 141.6 599.112 135.61 599.112 128.78ZM665.415 93.7356C668.412 88.7035 672.368 84.8096 677.283 82.0539C682.318 79.1784 688.251 77.7407 695.084 77.7407V98.9474H689.87C681.838 98.9474 675.724 100.984 671.529 105.058C667.453 109.131 665.415 116.2 665.415 126.264V178.383H644.917V79.3582H665.415V93.7356ZM751.328 128.96L797 178.383H769.309L732.627 135.789V178.383H712.129V45.3915H732.627V122.67L768.59 79.3582H797L751.328 128.96Z"
                                    fill="currentColor"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint_logo"
                                        x1="90"
                                        y1="0"
                                        x2="90"
                                        y2="220"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9B99FE" />
                                        <stop offset="1" stopColor="#2BC8B7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </Link>
                        <p className="text-muted-foreground text-balance text-sm">
                            Tailark is a platform for building AI-powered applications.
                        </p>
                    </div>

                    {/* Navigation links */}
                    <div className="col-span-3 grid gap-6 sm:grid-cols-3">
                        <div className="space-y-4 text-sm">
                            <span className="block font-medium">Product</span>
                            <div className="flex flex-wrap gap-4 sm:flex-col">
                                <Link href="#" className="text-muted-foreground hover:text-primary block duration-150">
                                    <span>Features</span>
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-primary block duration-150">
                                    <span>Solution</span>
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-primary block duration-150">
                                    <span>Partnerships</span>
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-primary block duration-150">
                                    <span>Mobile App</span>
                                </Link>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm">
                            <span className="block font-medium">Company</span>
                            <div className="flex flex-wrap gap-4 sm:flex-col">
                                <Link href="#" className="text-muted-foreground hover:text-primary block duration-150">
                                    <span>About</span>
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-primary block duration-150">
                                    <span>Licence</span>
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-primary block duration-150">
                                    <span>Privacy</span>
                                </Link>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <span className="block font-medium">Community</span>
                            <div className="flex flex-wrap gap-3 text-sm">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X/Twitter"
                                    className="text-muted-foreground hover:text-primary block"
                                    href="#"
                                >
                                    <svg
                                        className="size-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                                        />
                                    </svg>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="text-muted-foreground hover:text-primary block"
                                    href="#"
                                >
                                    <svg
                                        className="size-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div
                    aria-hidden="true"
                    className="h-px bg-[length:6px_1px] bg-repeat-x opacity-25 [background-image:linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)]"
                />
                {/* {}  */}
                <Next />
                {/* Bottom section: copyright + status */}
                <div className="flex flex-wrap justify-between gap-4">
                    <span className="text-muted-foreground text-sm">
                        © {currentYear} Tailark, All rights reserved
                    </span>
                    <div className="ring-foreground/5 bg-card flex items-center gap-2 rounded-full border border-transparent py-1 pl-2 pr-4 shadow ring-1">
                        <div className="relative flex size-3">
                            <span className="duration-1500 absolute inset-0 block size-full animate-pulse rounded-full bg-emerald-100" />
                            <span className="relative m-auto block size-1 rounded-full bg-emerald-500" />
                        </div>
                        <span className="text-sm">All Systems Normal</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
const Next = () => {
    return (
        <section className="bg-background py-24"><div className="@container mx-auto max-w-5xl px-2" >
            <div className="mx-auto max-w-4xl"  ><div className="mx-auto max-w-2xl px-6" ><h1 className="text-balance text-4xl font-semibold md:text-5xl lg:tracking-tight">Contact Us</h1><p className="text-muted-foreground mt-4 text-balance text-lg">Find answers to your questions and get support for our services.</p>
            </div><div className="@lg:grid-cols-2 @lg:gap-y-12 mx-auto mt-10 grid max-w-2xl gap-3" ><div className="flex flex-col rounded-xl border p-6" ><h2 className="font-medium">Contact Sales</h2><p className="text-muted-foreground mb-4 mt-2 text-balance">Get in touch with our sales team for more information.</p><a className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-sm shadow-black/10 border border-transparent bg-card ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-8 rounded-md px-3 text-xs mt-auto w-fit" href="#link">Talk to sales</a></div><div className="flex flex-col rounded-xl border p-6" ><h2 className="text-lg font-medium">Help and Support</h2><p className="text-muted-foreground mb-4 mt-2 text-balance">Find answers to your questions and get support for our services.</p><div className="mt-auto flex flex-wrap gap-1" ><a className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-sm shadow-black/10 border border-transparent bg-card ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-8 rounded-md px-3 text-xs w-fit" href="#link">Contact Support</a><a className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-foreground/5 hover:text-foreground h-8 rounded-md px-3 text-xs text-primary w-fit" href="mailto:hey@tailark.com">hey@tailark.com</a></div></div><div className="flex flex-col p-6" ><h2 className="text-muted-foreground mb-2 text-sm">General</h2><a className="hover:decoration-primary font-medium hover:underline" href="mailto:hello@tailark.com">hello@tailark.com</a></div><div className="flex flex-col p-6" ><h2 className="text-muted-foreground mb-2 text-sm">Support</h2><a className="hover:decoration-primary font-medium hover:underline" href="mailto:support@tailark.com">support@tailark.com</a></div><div className="flex flex-col p-6" ><h2 className="text-muted-foreground mb-2 text-sm">X/Twitter</h2><a className="hover:decoration-primary font-medium hover:underline" href="https://twitter.com/tailarkui ">@tailarkui</a></div>
                    <div className="flex flex-col p-6" ><h2 className="text-muted-foreground mb-2 text-sm">GitHub</h2><a className="hover:decoration-primary font-medium hover:underline" href="https://github.com/tailark">@tailark</a></div></div></div></div></section>
    )
}