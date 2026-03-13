import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Ubuntu, Caveat } from "next/font/google";
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
// import { GeistPixelSquare, GeistPixelGrid, GeistPixelCircle, GeistPixelTriangle, GeistPixelLine } from 'geist/font/pixel';
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import LenisWrapper from "@/components/LenisWrapper";
import { ModeToggle } from "@/components/modeToggle";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});
const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AnnM - Portfolio & Projets",
  description:
    "Découvrez mes projets, compétences et réalisations en développement web et design.",
  keywords: [
    "portfolio",
    "développement web",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "AnnM" }],
  metadataBase: new URL("https://www.mwezipartners.com"),
  openGraph: {
    title: "AnnM - Portfolio & Projets",
    description:
      "Découvrez mes projets, compétences et réalisations en développement web et design.",
    url: "/",
    siteName: "AnnM",
    images: [
      {
        url: "/goodbg.avif",
        width: 1200,
        height: 630,
        alt: "AnnM - Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnnM - Portfolio & Projets",
    description:
      "Découvrez mes projets, compétences et réalisations en développement web et design.",
    images: ["/goodbg.avif"],
    creator: "@tgrkmd",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="no-scrollbar">
      <body className={cn(inter.variable, ubuntu.variable, caveat.variable)}>
        <div className="bg-gray-600 dark:bg-gray-950 before:fixed before:inset-0 before:-z-40 dark:before:[background-image:url('/grainy-bg.svg')] dark:before:opacity-[.015]"></div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LenisWrapper>
            <div className="fixed w-fit top-2  left-1/5 z-10 ">
              <ModeToggle />
            </div>
            {children}
          </LenisWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
