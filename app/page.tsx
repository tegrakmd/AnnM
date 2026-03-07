// import { ModeToggle } from "@/components/modeToggle";

import { SectionSecond } from "./_landing/section/second";
import { HeroSection } from "./_landing/section/hero";
// import { Cartises } from "./_landing/section/cartis";
import { Account } from "./_landing/section/Count";
import { MainSection } from "./_landing/section/MainSection";

import { FeatureSection } from "./_landing/section/features";
import { Herro } from "./_landing/section/herro";
import { FirstT } from "./tripe/componets/firstT";
// import { Sou } from "./_landing/GangX-x/sou";
import HelpRouteSection from "./_landing/section/Dsi";
import CTASection from "./_landing/section/CtaFooter";
// import { PagesSection } from "./_landing/section/pullUp";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen font-ubuntu">
      {/* <ModeToggle /> */}
      <Herro />
      <MainSection />
      <HelpRouteSection />
      <CTASection />
      <FeatureSection />
      <SectionSecond />
      <FirstT />
      {/* <HeroSection /> */}
      {/* <Cartises /> */}
      {/* <Sou /> */}
      <Account />
      {/* <PagesSection /> */}
    </div>
  );
}
