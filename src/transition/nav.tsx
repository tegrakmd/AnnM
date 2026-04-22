// components/Navigation.tsx
"use client";

import { Link } from "next-view-transitions";

export function Navigation() {
    return (
        <nav className="flex gap-4  fixed top-0 left-1/2 -translate-x-1/2 z-50 items-center w-fit justify-center pt-6">
            <Link href="/">Home</Link>
            <Link href="/tripe">tripe</Link>
            <Link href="/Portfolio">Portfolio</Link>
            <Link href="/portfolioDeux">Portfolio2</Link>
        </nav>
    );
}

// For programmatic navigation, use the useTransitionRouter hook:

// tsx
// "use client";

import { useTransitionRouter } from "next-view-transitions";

export function NavigateButton() {
    const router = useTransitionRouter();

    return (
        <button onClick={() => router.push("/about")}>
            Go to About
        </button>
    );
}