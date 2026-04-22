// app/providers.tsx
"use client";

import { ViewTransitions } from "next-view-transitions";

export function Providers({ children }: { children: React.ReactNode }) {
    return <ViewTransitions>{children}</ViewTransitions>;
}