// components/TextReveal.tsx
"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

interface TextRevealProps {
    children: string;
    delay?: number;
    duration?: number;
    stagger?: number;
    className?: string;
}

export function TextReveal({
    children,
    delay = 0,
    duration = 0.8,
    stagger = 0.02,
    className = "",
}: TextRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const splitRef = useRef<SplitType | null>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            // Split text into characters
            splitRef.current = new SplitType(containerRef.current, { types: "chars" });

            gsap.fromTo(
                splitRef.current.chars,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration,
                    stagger,
                    delay,
                    ease: "power3.out",
                }
            );
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
}

// // components/SmoothScroll.tsx
// "use client";

// import { ReactLenis } from "@studio-freight/react-lenis";

// export function SmoothScroll({ children }: { children: React.ReactNode }) {
//     return (
//         <ReactLenis
//             root
//             options={{
//                 duration: 1.2,
//                 easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//                 smoothWheel: true,
//                 smoothTouch: false,
//             }}
//         >
//             {children}
//         </ReactLenis>
//     );
// }