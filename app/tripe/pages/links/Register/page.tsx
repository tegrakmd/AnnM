import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RegistrySetupSection } from "@app/tripe/componets/sections/registry-setup-section";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Button>
        <Link href="/tripe">retour</Link>
      </Button>
      <RegistrySetupSection />
    </main>
  );
}
