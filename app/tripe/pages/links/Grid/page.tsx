import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PipelineSection } from "@app/tripe/componets/sections/pipeline-section";

export default function Home() {
  return (
    <>
      <main className="min-h-screen ">
        <Button>
          <Link href="/tripe">retour</Link>
        </Button>
        <PipelineSection />
      </main>
    </>
  );
}
