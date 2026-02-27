import { Button } from "@/components/ui/button";
import Link from "next/link";

import { GridPipelineSection } from "@app/tripe/componets/sections/grid-pipeline-section";

export default function Home() {
  return (
    <>
      <main className="min-h-screen ">
        <Button>
          <Link href="/tripe">retour</Link>
        </Button>
        <GridPipelineSection />
      </main>
    </>
  );
}
