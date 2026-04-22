// "use client";

// import { createContext, useContext, useRef, ReactNode } from "react";
// import gsap from "gsap";

// type TransitionContextType = {
//     playOutro: () => Promise<void>;
//     playIntro: () => Promise<void>;
// };

// const TransitionContext = createContext<TransitionContextType | null>(null);

// export const useTransition = () => {
//     const ctx = useContext(TransitionContext);
//     if (!ctx) throw new Error("useTransition must be used within TransitionProvider");
//     return ctx;
// };

// export const TransitionProvider = ({ children }: { children: ReactNode }) => {
//     const overlayRef = useRef<HTMLDivElement>(null);
//     const tl = useRef<gsap.core.Timeline | null>(null);

//     // Initialize the timeline once
//     const initTimeline = () => {
//         if (!overlayRef.current) return;
//         tl.current = gsap.timeline({ paused: true })
//             .set(overlayRef.current, { y: "100%" }) // start off‑screen right
//             .to(overlayRef.current, {
//                 duration: 0.6,
//                 y: "0%",
//                 ease: "power2.inOut",
//             })
//             .to(overlayRef.current, {
//                 duration: 0.6,
//                 y: "-100%",
//                 ease: "power2.inOut",
//             });
//     };

//     const playOutro = () => {
//         return new Promise<void>((resolve) => {
//             if (!tl.current) {
//                 initTimeline();
//             }
//             tl.current!.eventCallback("onComplete", null); // clear any previous
//             tl.current!.play(0); // go to start and play
//             // Resolve when overlay covers the screen (end of first tween)
//             gsap.delayedCall(0.6, resolve); // matches duration of first tween
//         });
//     };

//     const playIntro = () => {
//         return new Promise<void>((resolve) => {
//             if (!tl.current) {
//                 initTimeline();
//                 // If timeline didn't exist, we need to jump to the second tween
//                 tl.current!.progress(0.5);
//             }
//             // The intro is the second half of the timeline
//             tl.current!.play(0.5);
//             gsap.delayedCall(0.6, resolve);
//         });
//     };

//     return (
//         <TransitionContext.Provider value={{ playOutro, playIntro }}>
//             {children}
//             <div
//                 ref={overlayRef}
//                 className="fixed inset-0 z-50 bg-black dark:bg-white pointer-events-none"
//                 style={{ transform: "translateY(100%)" }}
//             />
//         </TransitionContext.Provider>
//     );
// };
// "use client";

// import { createContext, useContext, useRef, ReactNode } from "react";
// import gsap from "gsap";

// type TransitionContextType = {
//     playOutro: () => Promise<void>;
//     playIntro: () => Promise<void>;
// };

// const TransitionContext = createContext<TransitionContextType | null>(null);

// export const useTransition = () => {
//     const ctx = useContext(TransitionContext);
//     if (!ctx) throw new Error("useTransition must be used within TransitionProvider");
//     return ctx;
// };

// export const TransitionProvider = ({ children }: { children: ReactNode }) => {
//     const pathRef = useRef<SVGPathElement>(null);
//     const tl = useRef<gsap.core.Timeline | null>(null);

//     const initTimeline = () => {
//         if (!pathRef.current) return;

//         // Define the three key states for the curved overlay path.
//         // You'll need to customize these values to match your screen dimensions and desired curve.
//         const hiddenState = "M 0 0 L 100 0 L 100 100 L 0 100 Z"; // Start off-screen (adjust as needed)
//         const coveringState = "M 0 0 Q 50 100, 100 0 L 100 100 L 0 100 Z"; // Covers the screen
//         const revealingState = "M 0 0 L -100 0 L -100 100 L 0 100 Z"; // Exit off-screen

//         tl.current = gsap.timeline({ paused: true })
//             .set(pathRef.current, { attr: { d: hiddenState } }) // Start hidden
//             .to(pathRef.current, {
//                 duration: 0.8,
//                 attr: { d: coveringState },
//                 ease: "power2.inOut",
//             })
//             .to(pathRef.current, {
//                 duration: 0.8,
//                 attr: { d: revealingState },
//                 ease: "power2.inOut",
//             });
//     };

//     const playOutro = () => {
//         return new Promise<void>((resolve) => {
//             if (!tl.current) initTimeline();
//             tl.current!.eventCallback("onComplete", null);
//             tl.current!.play(0);
//             gsap.delayedCall(0.8, resolve); // Match the duration of the first tween
//         });
//     };

//     const playIntro = () => {
//         return new Promise<void>((resolve) => {
//             if (!tl.current) {
//                 initTimeline();
//                 tl.current!.progress(0.5);
//             }
//             tl.current!.play(0.5);
//             gsap.delayedCall(0.8, resolve); // Match the duration of the second tween
//         });
//     };

//     return (
//         <TransitionContext.Provider value={{ playOutro, playIntro }}>
//             {children}
//             <div
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     pointerEvents: "none",
//                     zIndex: 1000,
//                 }}
//             >
//                 <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
//                     <path ref={pathRef} fill="#1a1a1a" />
//                 </svg>
//             </div>
//         </TransitionContext.Provider>
//     );
// };