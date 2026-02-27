import Link from "next/link";
import { CodeBlock } from "../ui/code-block";
import { Card } from "@/components/ui/card";
import { WindowDots } from "../ui/gantt-chart-demo";

export function RegistrySetupSection() {
  return (
    <section
      id="registry-setup"
      className="mx-auto max-w-5xl border-t px-6 py-24 xl:px-0">
      <h2 className="text-foreground text-xl font-medium">Registry Setup</h2>
      <p className="text-muted-foreground mt-4">
        Use the shadcn CLI to generate your API key and configure the registry.
      </p>

      {/* <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]"> */}
      {/* <div className="mt-8 grid grid-cols-1 gap-12 "> */}
      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr] relative">
        <div className="sticky top-5 size-fit ">
          <AsideBAr />
        </div>
        <div className="space-y-0">
          <SetupStep number={1}>
            <h4 className="text-foreground font-medium">Generate API key</h4>
            <p className="text-muted-foreground">
              Go to the{" "}
              <a className="text-primary font-medium hover:underline" href="#">
                Dashboard
              </a>{" "}
              and click on the {'"'}Generate API Key{'"'} button and copy the
              key.
            </p>
          </SetupStep>

          <SetupStep number={2}>
            <h4 className="text-foreground font-medium">
              {"Add API key to your `.env.local` or `.env`"}
            </h4>
            <CodeBlock code="TAILARK_API_KEY=your_api_key_here">
              TAILARK_API_KEY=your_api_key_here
            </CodeBlock>
          </SetupStep>

          <SetupStep number={3}>
            <h4 className="text-foreground font-medium">
              Add Tailark Pro namespace
            </h4>
            <p className="text-muted-foreground">
              Add the following code to your `components.json` file:
            </p>
            <CodeBlock code="pnpm dlx shadcn@latest add @tailark-pro/{name}">
              {"pnpm dlx shadcn@latest add @tailark-pro/{name}"}
            </CodeBlock>
          </SetupStep>

          <SetupStep number={4}>
            <h4 className="text-foreground font-medium">
              Start using Tailark Pro
            </h4>
            <p className="text-muted-foreground">
              Now you can start installing Tailark Pro blocks and pages with
              ease.
            </p>
            <CodeBlock code="pnpm dlx shadcn@latest add @tailark-pro/{name}">
              {"pnpm dlx shadcn@latest add @tailark-pro/{name}"}
            </CodeBlock>
          </SetupStep>
          {/*  */}
          <SetupStep number={5} isLast>
            <h4 className="text-foreground font-medium">
              Start using Tailark Pro
            </h4>
            <p className="text-muted-foreground">
              Now you can start installing Tailark Pro blocks and pages with
              ease.
            </p>
            <CodeBlock code="pnpm dlx shadcn@latest add @tailark-pro/{name}">
              {"pnpm dlx shadcn@latest add @tailark-pro/{name}"}
            </CodeBlock>
          </SetupStep>
          {/* Security Notes */}
          <SecurityNotes />
          <Table />
        </div>
      </div>
    </section>
  );
}

function SetupStep({
  number,
  isLast = false,
  children,
}: {
  number: number;
  isLast?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <div className="grid grid-rows-[auto_1fr] gap-2 pb-2">
        <div className="flex size-6 items-center justify-center rounded-full border font-mono text-xs">
          {number}
        </div>
        <div
          // className={`mx-auto w-px bg-[linear-gradient(180deg,var(--color-foreground)_1px,transparent_1px)] bg-repeat-y opacity-25 dark:opacity-10 ${isLast ? "mask-b-from-65%" : ""}`}
          className={`mx-auto w-px bg-[linear-gradient(180deg,var(--color-foreground)_1px,transparent_1px)] bg-repeat-y opacity-25 dark:opacity-10 ${isLast ? "mask-b-from-65%" : ""}`}
          style={{ backgroundSize: "1px 4px" }}
        />
      </div>
      <div className="space-y-4 pb-12 md:pb-16">{children}</div>
    </div>
  );
}

function SecurityNotes() {
  return (
    <div className="h-fit  rounded-xl border border-amber-500/20 bg-amber-500/10 p-6 text-sm text-muted-foreground">
      <p className="mb-4 font-medium text-amber-900">
        Important Security Notes:
      </p>
      <ul className="list-inside list-disc space-y-2 text-amber-900/80">
        <li>Never commit your API key to version control</li>
        <li>{"Keep your .env.local file in .gitignore"}</li>
        <li>Store your key securely in environment variables</li>
        <li>
          Manage your API keys from the{" "}
          <Link className="font-medium underline" href="#">
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
}
function AsideBAr() {
  return (
    <div className="h-fit  rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-sm text-muted-foreground">
      <p className="mb-4 font-medium text-emerald-900">
        Liste des Process a suivres{" "}
      </p>
      <ul className="list-inside list-disc space-y-2 text-emerald-900/80">
        <li>Avoir sa Carte Jaunes et le vacccin </li>
        <li>{"Keep your .env.local file in .gitignore"}</li>
        <li>Obtenir sont Visa</li>
        <li>Retour aux pays [RDC]</li>
      </ul>
    </div>
  );
}
export function Table() {
  return (
    <div className="mt-16" aria-hidden="true">
      <div className="relative">
        <Card className="rounded-none">
          <div className="absolute inset-y-0 left-0 w-48 border-r ">
            <div className="p-4 size-full flex items-start justify-between">
              <WindowDots />
            </div>
          </div>
          <div className="ml-auto h-full w-full bg-background">
            <div className="h-5 border-b" />
            <div className="relative h-80">
              {/* <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-40" /> */}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
