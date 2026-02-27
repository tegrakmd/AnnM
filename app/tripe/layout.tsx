import LenisWrapper from "@/components/LenisWrapper";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-illustration/60 h-full w-full">
      <div className="bg-gray-600 dark:bg-gray-950 before:fixed before:inset-0 before:-z-40 dark:before:[background-image:url('/grainy-bg.svg')] dark:before:opacity-[.015]"></div>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <LenisWrapper>{children}</LenisWrapper>
      </ThemeProvider>
    </div>
  );
}
