import { Button } from "@/components/ui/button";
import Link from "next/link";

import CurvedMarquee from "@app/tripe/componets/sections/Marquee";

export default function Home() {
  return (
    <>
      <main className="min-h-screen ">
        <Button>
          <Link href="/tripe">retour</Link>
        </Button>
        <CurvedMarquee />
      </main>
    </>
  );
}
