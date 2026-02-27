import { ShieldCheck, User } from "lucide-react";
import { StepNumber } from "../ui/step-connector";
// import { BarChartDemo } from "../ui/bar-chart-demo";
import { Testimonial } from "../ui/testimonial";
import { WindowDots } from "../ui/gantt-chart-demo";
import { CornerMarkers } from "../ui/corner-markers";

export function GridPipelineSection() {
  return (
    <section className="bg-background overflow-hidden border-t">
      <div className="mx-auto max-w-5xl px-6 py-24 xl:px-0">
        <div className="relative">
          <CornerMarkers />

          <div className="grid grid-cols-1 divide-y border md:grid-cols-3 md:divide-x md:divide-y-0">
            {/* Left Column */}
            <div className="w-full p-6 md:p-8 lg:p-12">
              <h2 className="text-foreground mb-6 text-3xl font-semibold">
                Set up your pipeline in minutes
              </h2>
              <p className="text-muted-foreground text-lg">
                Our powerful analytics platform helps you visualize complex
                data, identify trends, and make data-driven decisions with
                confidence.
              </p>
            </div>

            {/* Right Column (Steps) */}
            <div className="col-span-2 divide-y *:p-6 md:*:p-8 lg:*:p-12">
              {/* Step 1 - Collaborative Analysis */}
              <div className="group space-y-6">
                <div>
                  <StepNumber number={1} variant="filled" />
                  <h3 className="text-foreground my-4 text-lg font-semibold">
                    Collaborative Analysis
                  </h3>
                  <p className="text-muted-foreground">
                    Add comments, share insights, and work together with your
                    team to extract maximum. From real-time dashboards to custom
                    reports, we{"'"}ve got your data needs covered.
                  </p>
                </div>
                <div
                  aria-hidden="true"
                  className="bg-illustration ring-border-illustration shadow-black/6.5 overflow-hidden rounded-2xl border border-transparent p-8 shadow-md ring-1">
                  <div>
                    <h3 className="text-foreground mb-1 font-semibold">
                      Monitoring
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      January - June 2024
                    </p>
                  </div>
                  {/* <BarChartDemo /> */}
                </div>
              </div>

              {/* Step 2 - Send Invoice */}
              <div className="group space-y-6">
                <div>
                  <StepNumber number={2} variant="filled" />
                  <h3 className="text-foreground my-4 text-lg font-semibold">
                    Send Invoice
                  </h3>
                  <p className="text-muted-foreground">
                    Add comments, share insights, and work together with your
                    team to extract maximum. From real-time dashboards to custom
                    reports, we{"'"}ve got your data needs covered.
                  </p>
                </div>
                <IdentityVerificationCard />
              </div>

              {/* Step 3 - Code Example */}
              <div className="group space-y-6">
                <div>
                  <StepNumber number={3} variant="filled" />
                  <h3 className="text-foreground my-4 text-lg font-semibold">
                    Send Invoice
                  </h3>
                  <p className="text-muted-foreground">
                    Add comments, share insights, and work together with your
                    team to extract maximum. From real-time dashboards to custom
                    reports, we{"'"}ve got your data needs covered.
                  </p>
                </div>
                <CodeExampleCard />

                <Testimonial
                  quote="It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly."
                  name="Glodie Lukose"
                  handle="@glodie"
                  avatarSeed="glodie2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IdentityVerificationCard() {
  return (
    <div
      aria-hidden="true"
      className="bg-illustration ring-border-illustration shadow-black/6.5 flex flex-col items-center justify-center rounded-2xl border border-transparent p-8 shadow-md ring-1">
      <div className="mb-4 flex size-8 rounded-full border border-dashed">
        <ShieldCheck className="text-muted-foreground m-auto size-4" />
      </div>
      <div className="group relative m-auto mb-6 size-fit scale-90">
        <div
          className="absolute -inset-6 z-10 opacity-15 mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "5px 5px",
          }}
        />
        <div className="absolute inset-0 animate-spin opacity-50 blur-lg duration-[3s]">
          <div className="animate-hue-rotate absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 to-indigo-300" />
        </div>
        <div className="animate-scan absolute inset-x-12 inset-y-0 z-10">
          <div className="absolute inset-x-0 m-auto h-6 rounded-full bg-white/50 blur-2xl" />
        </div>
        <div className="relative z-10 m-auto aspect-2/3 w-24 overflow-hidden rounded-lg border border-white/20 shadow-2xl">
          <img
            src="/avat.webp"
            className="size-full object-cover grayscale"
            alt="Anna"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-x-0 bottom-2 z-10 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white">
              Anna Johnson
            </p>
          </div>
        </div>
      </div>
      <button className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-card px-3 text-xs font-medium shadow-sm ring-1 ring-foreground/10 transition-colors hover:bg-muted/50">
        <User className="size-3" />
        Upload Image
      </button>
    </div>
  );
}

function CodeExampleCard() {
  return (
    <div
      aria-hidden="true"
      className="bg-illustration ring-border-illustration shadow-black/6.5 overflow-hidden rounded-2xl border border-transparent text-sm shadow-md ring-1">
      <div className="mb-4 mt-4 px-4">
        <WindowDots />
      </div>
      <div className="mask-y-from-95% bg-muted/30 p-4 font-mono text-[13px] leading-relaxed">
        <pre className="text-foreground">
          <code>
            {`<?php

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.example.com/data');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'key' => 'value',
    'anotherKey' => 'anotherValue',
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
]);

$response = curl_exec($ch);

curl_close($ch);

echo $response;`}
          </code>
        </pre>
      </div>
    </div>
  );
}
