import Link from "next/link";

import {
  AudioLines,
  ChevronRight,
  ImageIcon,
  Lightbulb,
  MessageCircle,
  Mic2,
  Paperclip,
  Plus,
  ShoppingBag,
  Telescope,
} from "lucide-react";
// import { Supabase } from "/components/ui/svgs/supabase";
// import { Slack } from "/components/ui/svgs/slack";
// import { Twilio } from "/components/ui/svgs/twilio";
// import { Linear } from "/components/ui/svgs/linear";
// import { Figma } from "/components/ui/svgs/figma";
// import { Vercel } from "/components/ui/svgs/vercel";
// import { Firebase } from "/components/ui/svgs/firebase";
// import { ClerkIconLight as Clerk } from "/components/ui/svgs/clerk";
// import { Claude } from "/components/ui/svgs/claude";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github } from "@/components/ui/svgs/github";

export function Sou() {
  return (
    <>
      <main className="overflow-hidden">
        <section className="">
          <div className="relative py-40">
            <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] aspect-2/3 absolute inset-0 opacity-75 blur-xl md:aspect-square lg:aspect-video dark:opacity-5">
              <Image
                src="https://images.unsplash.com/photo-1685013640715-8701bbaa2207?q=80&w=2198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="hero background"
                width={2198}
                height={1685}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="relative z-10 mx-auto w-full max-w-5xl sm:pl-6">
              <div className="flex items-center justify-between max-md:flex-col">
                <div className="max-w-md max-sm:px-6">
                  <h1 className="text-balance  text-4xl sm:text-5xl">
                    Ship faster. Integrate smarter.
                  </h1>
                  <p className="text-muted-foreground mt-4 text-balance">
                    Veil is your all-in-one engine for adding seamless
                    integrations to your app.
                  </p>

                  <Button asChild className="mt-6 pr-1.5">
                    <Link href="#link">
                      <span className="text-nowrap">Start Building</span>
                      <ChevronRight className="opacity-50" />
                    </Link>
                  </Button>
                </div>
                <Listy />
                <div className="rotate-x-12 size-fit">
                  <BlocIso />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <div
          aria-hidden
          className="perspective-near mask-radial-at-left mask-radial-from-65% mask-radial-to-90% mask-radial-[75%_100%] min-w-2xl mb-6 ml-auto max-w-3xl scale-90 py-12 pl-6 sm:mb-12 md:pl-12 lg:mb-20">
          <div className="rotate-x-12 bg-muted rotate-y-2 rotate-z-10 relative flex h-56 -rotate-12 flex-col rounded-3xl border py-4 pl-4">
            <div className="bg-card ring-border shadow-foreground/10 bottom-15 absolute left-4 min-w-56 rounded-2xl p-1 shadow-xl ring-1 dark:shadow-black/25">
              <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
                <Paperclip />
                <span>Add photos and files</span>
              </div>
              <span className="bg-size-[6px_1px] mx-3 my-0.5 block h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-bottom bg-repeat-x opacity-30 dark:opacity-15" />
              <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
                <ImageIcon />
                <span>Create image</span>
              </div>
              <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
                <Lightbulb />
                <span>Thinking</span>
              </div>
              <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
                <Telescope />
                <span>Deep research</span>
              </div>
              <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
                <ShoppingBag />
                <span>Shopping research</span>
              </div>
              <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
                <Github />
                <span>Open source access</span>
              </div>
            </div>

            <div className="bg-card ring-border shadow-foreground/6.5 dark:shadow-black/6.5 shadow-xs mt-auto flex h-fit justify-between gap-3 rounded-full p-2 ring-1">
              <div className="flex items-center gap-2">
                <div className="bg-muted flex size-9 cursor-pointer rounded-full *:m-auto *:size-4">
                  <Plus />
                </div>
                <div className="text-muted-foreground text-sm">
                  Ask anything...
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                <div className="hover:bg-muted flex size-9 cursor-pointer rounded-full *:m-auto *:size-4">
                  <Mic2 />
                </div>
                <div className="bg-foreground text-background flex size-9 cursor-pointer rounded-full *:m-auto *:size-4 hover:brightness-110">
                  <AudioLines />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl">
            Ship faster. Integrate smarter.
          </h1>
          <p className="text-muted-foreground mt-4 text-balance">
            Veil is your all-in-one engine for adding seamless integrations to
            your app.
          </p>

          <Button asChild className="mt-6 pr-1.5">
            <Link href="#link">
              <span className="text-nowrap">Start Building</span>
              <ChevronRight className="opacity-50" />
            </Link>
          </Button>
        </div>
      </div>
      <main className="overflow-hidden">
        <section>
          <div className="relative py-32">
            <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] mask-t-from-50% aspect-2/3 lg:aspect-9/4 absolute inset-0 md:aspect-square dark:opacity-5">
              <Image
                src="/upload.png"
                alt="hero background"
                width={2268}
                height={1740}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
              <div
                aria-hidden
                className="perspective-near mask-radial-at-left mask-radial-from-65% mask-radial-to-90% mask-radial-[75%_100%] min-w-2xl mb-6 ml-auto max-w-3xl scale-90 py-12 pl-6 sm:mb-12 md:pl-12 lg:mb-20">
                <div className=" bg-muted dark:bg-muted/15   relative flex h-56  flex-col rounded-3xl border py-4 pl-4">
                  {/* <div className="bg-card ring-border shadow-foreground/10 bottom-15 absolute left-4 min-w-56 rounded-2xl p-1 shadow-xl ring-1 dark:shadow-black/25">
                    <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
                      <Paperclip />
                      <span>Add photos and files</span>
                    </div>
                    <span className="bg-size-[6px_1px] mx-3 my-0.5 block h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-bottom bg-repeat-x opacity-30 dark:opacity-15" />
                    <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
                      <ImageIcon />
                      <span>Create image</span>
                    </div>
                    <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
                      <Lightbulb />
                      <span>Thinking</span>
                    </div>
                    <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
                      <Telescope />
                      <span>Deep research</span>
                    </div>
                    <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
                      <ShoppingBag />
                      <span>Shopping research</span>
                    </div>
                    <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
                      <Github />
                      <span>Open source access</span>
                    </div>
                  </div> */}
                  <BlocIso />
                  <div className="bg-card ring-border shadow-foreground/6.5 dark:shadow-black/6.5 shadow-xs mt-auto flex h-fit justify-between gap-3 rounded-full p-2 ring-1">
                    <div className="flex items-center gap-2">
                      <div className="bg-muted flex size-9 cursor-pointer rounded-full *:m-auto *:size-4">
                        <Plus />
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Ask anything...
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <div className="hover:bg-muted flex size-9 cursor-pointer rounded-full *:m-auto *:size-4">
                        <Mic2 />
                      </div>
                      <div className="bg-foreground text-background flex size-9 cursor-pointer rounded-full *:m-auto *:size-4 hover:brightness-110">
                        <AudioLines />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto max-w-md text-center">
                <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl">
                  Ship faster. Integrate smarter.
                </h1>
                <p className="text-muted-foreground mt-4 text-balance">
                  Veil is your all-in-one engine for adding seamless
                  integrations to your app.
                </p>

                <Button asChild className="mt-6 pr-1.5">
                  <Link href="#link">
                    <span className="text-nowrap">Start Building</span>
                    <ChevronRight className="opacity-50" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export function Listy() {
  return (
    <>
      <div
        aria-hidden
        className="mask-y-from-50% relative max-md:mx-auto max-md:*:scale-90">
        {[
          "How do I integrate Supabase authentication?",
          "Set up real-time subscriptions with Firebase",
          "Connect Slack notifications to my app",
          "Implement Twilio SMS verification",
          "Add Linear issue tracking integration",
          "Set up Figma design sync",
          "Deploy to Vercel with environment variables",
          "Configure Clerk user management",
          "Build an AI assistant with Claude",
          "Create a webhook endpoint for Stripe",
          "Set up OAuth with multiple providers",
          "Implement rate limiting for API endpoints",
        ].map((prompt, index) => (
          <div
            key={index}
            className="text-muted-foreground flex items-center gap-2 px-14 py-2 text-sm">
            <MessageCircle className="size-3.5 opacity-50" />
            <span className="text-nowrap">{prompt}</span>
          </div>
        ))}
        <div className="bg-card min-w-sm ring-border shadow-foreground/6.5 dark:shadow-black/6.5 absolute inset-0 m-auto mt-auto flex h-fit justify-between gap-3 rounded-full p-2 shadow-xl ring-1 sm:inset-2">
          <div className="flex items-center gap-2">
            <div className="hover:bg-muted flex size-9 cursor-pointer rounded-full *:m-auto *:size-4">
              <Plus />
            </div>
            <div className="text-muted-foreground text-sm">Ask anything...</div>
          </div>
          <div className="flex items-center gap-0.5">
            <div className="hover:bg-muted flex size-9 cursor-pointer rounded-full *:m-auto *:size-4">
              <Mic2 />
            </div>
            <div className="bg-foreground text-background flex size-9 cursor-pointer rounded-full *:m-auto *:size-4 hover:brightness-110">
              <AudioLines />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function BlocIso() {
  return (
    <>
      <div className="bg-card ring-border shadow-foreground/10 bottom-15 absolute left-4 min-w-56 rounded-2xl p-1 shadow-xl ring-1 dark:shadow-primary/5">
        <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
          <Paperclip />
          <span>Add photos and files</span>
        </div>
        <span className="bg-size-[6px_1px] mx-3 my-0.5 block h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-bottom bg-repeat-x opacity-30 dark:opacity-15" />
        <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
          <ImageIcon />
          <span>Create image</span>
        </div>
        <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
          <Lightbulb />
          <span>Thinking</span>
        </div>
        <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
          <Telescope />
          <span>Deep research</span>
        </div>
        <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
          <ShoppingBag />
          <span>Shopping research</span>
        </div>
        <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm [&>svg]:size-4 [&>svg]:opacity-65">
          <Github />
          <span>Open source access</span>
        </div>
      </div>
    </>
  );
}
