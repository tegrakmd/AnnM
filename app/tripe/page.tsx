import { GridPipelineSection } from "./componets/sections/grid-pipeline-section";
import { PipelineSection } from "./componets/sections/pipeline-section";
import { RegistrySetupSection } from "./componets/sections/registry-setup-section";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <PipelineSection />
        <GridPipelineSection />
        <RegistrySetupSection />
      </main>
    </>
  );
}
