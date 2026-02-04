import { ModeToggle } from "@/components/modeToggle";

import { SectionSecond } from "./_landing/section/second";
import { HeroSection } from "./_landing/section/hero";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-ubuntu">
      <ModeToggle />
      <SectionSecond />
      <HeroSection />
    </div>
  );
}
