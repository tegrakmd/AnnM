"use client";

import { createContext, useContext, useRef, ReactNode } from "react";
import gsap from "gsap";

type TransitionContextType = {
    playOutro: () => Promise<void>;
    playIntro: () => Promise<void>;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export const useTransition = () => {
    const ctx = useContext(TransitionContext);
    if (!ctx) throw new Error("useTransition must be used within TransitionProvider");
    return ctx;
};

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    // Initialize the timeline once
    const initTimeline = () => {
        if (!overlayRef.current) return;
        tl.current = gsap.timeline({ paused: true })
            .set(overlayRef.current, { x: "100%" }) // start off‑screen right
            .to(overlayRef.current, {
                duration: 0.6,
                x: "0%",
                ease: "power2.inOut",
            })
            .to(overlayRef.current, {
                duration: 0.6,
                x: "-100%",
                ease: "power2.inOut",
            });
    };

    const playOutro = () => {
        return new Promise<void>((resolve) => {
            if (!tl.current) {
                initTimeline();
            }
            tl.current!.eventCallback("onComplete", null); // clear any previous
            tl.current!.play(0); // go to start and play
            // Resolve when overlay covers the screen (end of first tween)
            gsap.delayedCall(0.6, resolve); // matches duration of first tween
        });
    };

    const playIntro = () => {
        return new Promise<void>((resolve) => {
            if (!tl.current) {
                initTimeline();
                // If timeline didn't exist, we need to jump to the second tween
                tl.current!.progress(0.5);
            }
            // The intro is the second half of the timeline
            tl.current!.play(0.5);
            gsap.delayedCall(0.6, resolve);
        });
    };

    return (
        <TransitionContext.Provider value={{ playOutro, playIntro }}>
            {children}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-50 bg-black pointer-events-none"
                style={{ transform: "translateX(100%)" }}
            />
        </TransitionContext.Provider>
    );
};