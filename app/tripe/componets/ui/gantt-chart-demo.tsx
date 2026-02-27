export function GanttChartDemo() {
  return (
    <div className="mt-16" aria-hidden="true">
      <div className="ring-border-illustration bg-illustration overflow-hidden rounded-2xl border border-t border-transparent shadow-md shadow-black/10 ring-1">
        <div className="space-y-4 px-4 pt-4">
          <WindowDots />

          {/* Mock Gantt Header */}
          <div className="flex items-center justify-between border-b border-foreground/5 pb-2">
            <div className="flex gap-4 text-xs font-medium text-muted-foreground">
              <div className="text-foreground border-b border-foreground">
                Gantt Chart
              </div>
              <div>Timeline</div>
              <div>Board</div>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-background size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    src={`https://picsum.photos/seed/${i}/40/40`}
                    className="rounded-full"
                    alt="Avatar"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mock Gantt Body */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-6 divide-x divide-foreground/5">
              {[...Array(6)].map((_, i) => (
                <div key={i} />
              ))}
            </div>
            <div className="relative space-y-3 p-4">
              <GanttBar
                label="Collaborative Editing"
                width="w-3/4"
                color="indigo"
              />
              <GanttBar
                label="Real-time Video Chat"
                width="w-1/2"
                color="emerald"
                offset="translate-x-1/4"
              />
              <GanttBar
                label="AI Scene Analysis"
                width="w-2/3"
                color="amber"
                offset="translate-x-1/3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GanttBar({
  label,
  width,
  color,
  offset,
}: {
  label: string;
  width: string;
  color: "indigo" | "emerald" | "amber";
  offset?: string;
}) {
  const colorMap = {
    indigo: "bg-indigo-400/20 border-indigo-400/30 text-indigo-700",
    emerald: "bg-emerald-400/20 border-emerald-400/30 text-emerald-700",
    amber: "bg-amber-400/20 border-amber-400/30 text-amber-700",
  };

  return (
    <div
      className={`h-6 ${width} ${offset ?? ""} flex items-center rounded-md border px-2 text-[10px] font-medium ${colorMap[color]}`}>
      {label}
    </div>
  );
}

export function WindowDots() {
  return (
    <div className="flex gap-1.5">
      <div className="bg-foreground/5 border-foreground/15 size-2 rounded-full border" />
      <div className="bg-foreground/5 border-foreground/15 size-2 rounded-full border" />
      <div className="bg-foreground/5 border-foreground/15 size-2 rounded-full border" />
    </div>
  );
}
