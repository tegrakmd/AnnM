import { MessageArea } from "@app/_landing/section/second";
import { Projects } from "./sections/JobSection";
import { HeroSection } from "./sections/heroSection";
import { EngeneerCat } from "./sections/Others";
import { OpenRoleDeux } from "./sections/dataFilter";
import { FeatureSection } from "@app/_landing/section/features";
import FeatureSectionDeux from "@app/_landing/section/featuresDeux";
import EngineFeatureSection from "@app/_landing/section/featureTroi";
import { FeatureForSection } from "@app/_landing/section/featureFor";
import { FeaturesFive } from "@app/_landing/section/featureFiveS";

export function Annonces() {
  return (
    <div className="mb-4">
      <span className="group bg-background mx-auto flex max-w-fit items-stretch justify-between overflow-hidden whitespace-nowrap rounded-full  border   pl-2 pr-2.5 py-1.5 shadow-sm transition-all duration-200 hover:shadow-md">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center rounded-full shrink-0 whitespace-nowrap font-medium tabular-nums tracking-[0.2px] text-[11px] h-5 px-1.5 gap-0.5 bg-teal-800 text-teal-300">
            New
          </div>
          <span className="text-sm font-medium text-v0-gray-1000 sm:hidden">
            The new v0 is here.
          </span>
          <span className="hidden text-sm font-medium text-v0-gray-1000 sm:inline">
            Introducing the new v0, built for production apps and sites
          </span>
        </div>
        <div className="ml-2.5 flex items-center border-l border-v0-gray-alpha-200 pl-2.5">
          <span className="text-sm font-medium text-v0-gray-1000">
            Learn More
          </span>
        </div>
      </span>
    </div>
  );
}
export default function Home() {
  return <>
    <div className="overflow-hidden px-4 has-not-data-home:before:absolute has-not-data-home:before:inset-x-0 has-not-data-home:before:h-100 has-not-data-home:before:bg-linear-to-b has-not-data-home:before:from-zinc-100 has-data-home:bg-zinc-50 supports-[overflow:clip]:overflow-clip sm:px-6 dark:has-not-data-home:before:hidden dark:has-data-home:bg-zinc-950">
      <div className="relative mx-auto w-full max-w-6xl before:absolute before:inset-y-0 before:-left-12 before:w-px before:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] after:absolute after:inset-y-0 after:-right-12 after:w-px after:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))]">
        <NarutoH />
        <div className="relative ">
          <div className=" flex flex-col gap-y-6  ">
            <HeroSection />
            <Projects />
            <EngeneerCat />
            <FeatureSection />
            <FeatureSectionDeux />
            <EngineFeatureSection />
            <MessageArea />
            <FeatureForSection />
            <FeaturesFive />
            <OpenRoleDeux />
          </div>
        </div>
        <Blobobo />
      </div>
    </div>
  </>;
}
const Blobobo = () => {
  return (
    <div className="relative mt-16 py-8 before:absolute before:-inset-x-32 before:top-0 before:h-px before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] md:mt-20">
      <div
        className="before:absolute before:-top-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] before:bg-ring/50 after:absolute after:-right-12 after:-top-px after:z-10 after:-mr-px after:size-[3px] after:bg-ring/50"
        aria-hidden="true"></div>
      <div className="h-10"></div>
    </div>
  )
}
const NarutoH = () => {
  return (
    <div className="relative mb-14 before:absolute before:-inset-x-32 before:bottom-0 before:h-px before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))]">
      <div className="before:absolute before:-bottom-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] before:bg-ring/50 after:absolute after:-right-12 after:-bottom-px after:z-10 after:-mr-px after:size-[3px] after:bg-ring/50"></div>
      <div className="h-10"></div>
    </div>
  )
}