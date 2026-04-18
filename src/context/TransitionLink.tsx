"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "@/context/TransitionContext";
import { ReactNode } from "react";
import Link from "next/link";

interface TransitionLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export const TransitionLink = ({ href, children, className }: TransitionLinkProps) => {
    const router = useRouter();
    const { playOutro, playIntro } = useTransition();

    const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        await playOutro();        // overlay covers screen
        router.push(href);        // navigate to new route
        await playIntro();        // overlay slides away
    };

    return (
        <Link href={href} onClick={handleClick} className={className}>
            {children}
        </Link>
    );
};