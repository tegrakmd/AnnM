"use client";

export interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  scale?: number;
  className?: string;
  containerClassName?: string;
  overlayColor?: string;
}

export interface SectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  reverse?: boolean;
}

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useRef, useEffect, useState, useCallback } from "react";

/**
 * Linear Interpolation helper
 */
const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  speed = 0.15,
  scale = 1.3,
  className = "",
  containerClassName = "",
  overlayColor = "rgba(0,0,0,0.1)",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Animation State
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const rafId = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Bounds tracking
  const bounds = useRef({ top: 0, height: 0 });

  const updateBounds = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      bounds.current = {
        top: rect.top + window.scrollY,
        height: rect.height,
      };
    }
  }, []);

  useEffect(() => {
    // Initial bounds setup
    updateBounds();
    window.addEventListener("resize", updateBounds);

    // Setup Intersection Observer to pause logic when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    // Animation Loop
    const animate = () => {
      if (isVisible && imageRef.current) {
        // Calculate scroll relative to the container center
        const scrollMiddle = window.scrollY + window.innerHeight / 2;
        const containerMiddle = bounds.current.top + bounds.current.height / 2;
        const relativeScroll = scrollMiddle - containerMiddle;

        targetTranslateY.current = relativeScroll * speed;

        // Smoothly interpolate
        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          0.1
        );

        // Precision check to avoid micro-renders
        if (
          Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.05
        ) {
          imageRef.current.style.transform = `translate3d(0, ${currentTranslateY.current}px, 0) scale(${scale})`;
        }
      }
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateBounds);
      observer.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible, speed, scale, updateBounds]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full h-full bg-neutral-900 ${containerClassName}`}>
      {/* Loading Placeholder */}
      <div
        className={`absolute inset-0 bg-neutral-800 transition-opacity duration-1000 ${isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      />
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onLoad={() => {
          setIsLoaded(true);
          updateBounds();
        }}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-1000 will-change-transform",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        style={{
          transform: `translate3d(0, 0, 0) scale(${scale})`,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      />
    </div>
  );
};

export default ParallaxImage;
// "use client";
// import React, { useRef, useEffect } from "react";

// import { useLenis } from "lenis/react";
// import Image from "next/image";

// // const lerp = (start, end, factor) => start + (end - start) * factor;
// const lerp = (start: number, end: number, factor: number) =>
//   start + (end - start) * factor;

// const ParallaxImage = ({ src, alt }) => {
//   const imageRaf = useRef(null);
//   const bounds = useRef(null);
//   const currentTranslateY = useRef(0);
//   const targetTranslateY = useRef(0);
//   const rafId = useRef(null);

//   useEffect(() => {
//     const updateBounds = () => {
//       if (imageRaf.current) {
//         const rect = imageRaf.current.getBoundingClientRect();
//         bounds.current = {
//           top: rect.top + window.scrollY,
//           bottom: rect.bottom + window.scrollY,
//         };
//       }
//     };

//     updateBounds();
//     window.addEventListener("resize", updateBounds);
//     const animate = () => {
//       if (imageRaf.current) {
//         currentTranslateY.current = lerp(
//           currentTranslateY.current,
//           targetTranslateY.current,
//           0.1
//         );
//         if (
//           Math.abs(currentTranslateY.current - targetTranslateY.current > 0.01)
//         ) {
//           imageRaf.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`;
//         }
//       }
//       rafId.current = requestAnimationFrame(animate);
//     };
//     animate();
//     return () => {
//       window.removeEventListener("resize", updateBounds);
//       if (rafId.current) {
//         cancelAnimationFrame(rafId.current);
//       }
//     };
//   }, []);

//   useLenis(({ scroll }) => {
//     if (!bounds.current) return;
//     const relativeScroll = scroll - bounds.current.top;
//     targetTranslateY.current = relativeScroll * 0.2;
//   });
//   return (
//     <Image
//       ref={imageRaf}
//       src={src}
//       alt={alt}
//       fill
//       className="object-cover will-change-transform"
//       style={{
//         willChange: "transform",
//         transform: "translateY(0px) scale(1.25)",
//       }}
//     />
//   );
// };

// ===================================================================================================

// export default ParallaxImage;
// "use client";
// import React, { useRef, useEffect } from "react";
// // Assurez-vous d'importer Lenis et useLenis correctement selon votre version installée
// import { useLenis } from "lenis/react";

// const lerp = (start, end, factor) => start + (end - start) * factor;

// const ParallaxImage = ({ src, alt }) => {
//   const imageRaf = useRef(null);
//   const bounds = useRef(null);
//   const currentTranslateY = useRef(0);
//   const targetTranslateY = useRef(0);
//   const rafId = useRef(null);

//   useEffect(() => {
//     const updateBounds = () => {
//       if (imageRaf.current) {
//         const rect = imageRaf.current.getBoundingClientRect();
//         bounds.current = {
//           // On calcule la position absolue par rapport au haut du document
//           top: rect.top + window.scrollY,
//           bottom: rect.bottom + window.scrollY,
//         };
//       }
//     };

//     // Mettre à jour les limites au chargement et au redimensionnement
//     updateBounds();
//     window.addEventListener("resize", updateBounds);

//     // Boucle d'animation indépendante pour l'interpolation (Lerp)
//     const animate = () => {
//       if (imageRaf.current) {
//         currentTranslateY.current = lerp(
//           currentTranslateY.current,
//           targetTranslateY.current,
//           0.1
//         );

//         // CORRECTION 1 : La parenthèse fermante de Math.abs était mal placée.
//         // Avant : Math.abs(curr - target > 0.01) -> évaluait un booléen
//         // Après : Math.abs(curr - target) > 0.01 -> évalue la différence numérique
//         if (
//           Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.01
//         ) {
//           imageRaf.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`;
//         }
//       }
//       rafId.current = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", updateBounds);
//       if (rafId.current) {
//         cancelAnimationFrame(rafId.current);
//       }
//     };
//   }, []);

//   useLenis(({ scroll }) => {
//     if (!bounds.current) return;

//     // Calculer la position relative de défilement par rapport à l'élément
//     const relativeScroll = scroll - bounds.current.top;
//     targetTranslateY.current = relativeScroll * 0.2;
//   });

//   return (
//     <div style={{ overflow: "hidden", height: "100%", width: "100%" }}>
//       {/* J'ai ajouté un wrapper div avec overflow: hidden, sinon l'image risque de dépasser */}
//       <img
//         ref={imageRaf}
//         src={src}
//         alt={alt}
//         // Il est conseillé d'ajouter onLoad pour recalculer les bounds une fois l'image chargée
//         onLoad={() => {
//           if (imageRaf.current) {
//             const rect = imageRaf.current.getBoundingClientRect();
//             bounds.current = {
//               top: rect.top + window.scrollY,
//               bottom: rect.bottom + window.scrollY,
//             };
//           }
//         }}
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover", // Assure que l'image remplit le conteneur
//           willChange: "transform",
//           // CORRECTION 2 : Manquait la parenthèse fermante après 1.25
//           transform: "translateY(0px) scale(1.25)",
//         }}
//       />
//     </div>
//   );
// };

// export default ParallaxImage;

// ===================================================================================================
