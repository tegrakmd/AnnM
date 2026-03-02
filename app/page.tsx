// import { ModeToggle } from "@/components/modeToggle";

import { SectionSecond } from "./_landing/section/second";
import { HeroSection } from "./_landing/section/hero";
// import { Cartises } from "./_landing/section/cartis";
import { Account } from "./_landing/section/Count";
import { MainSection } from "./_landing/section/MainSection";

import { FeatureSection } from "./_landing/section/features";
import { Herro } from "./_landing/section/herro";
import { FirstT } from "./tripe/componets/firstT";
import { Sou } from "./sou";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-ubuntu">
      {/* <ModeToggle /> */}
      <Herro />
      <MainSection />
      <FeatureSection />
      <SectionSecond />
      <FirstT />
      {/* <HeroSection /> */}
      {/* <Cartises /> */}
      <Sou />
      <Account />
    </div>
  );
}
