// components/TransitionOverlay.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export function TransitionOverlay() {
    const overlayRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(
                overlayRef.current,
                { x: "100%" },
                { x: "0%", duration: 0.6, ease: "power2.inOut" }
            ).to(overlayRef.current, {
                x: "-100%",
                duration: 0.6,
                ease: "power2.inOut",
                delay: 0.1,
            });
        });

        return () => ctx.revert();
    }, [pathname]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 bg-black pointer-events-none"
            style={{ transform: "translateX(100%)" }}
        />
    );
}