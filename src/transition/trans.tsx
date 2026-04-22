"use client";

import { useTransitionRouter } from "next-view-transitions";


export function CustomLink({ href, children }: { href: string; children: React.ReactNode }) {
    const router = useTransitionRouter();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push(href, {
            onTransitionReady: async () => {
                // Custom animation using Web Animations API
                const transition = document.startViewTransition(() => {
                    // DOM update happens automatically

                });

                await transition.ready;
                // Add custom animations here
            }
        });
    };

    return <a href={href} onClick={handleClick}>{children}</a>;
}