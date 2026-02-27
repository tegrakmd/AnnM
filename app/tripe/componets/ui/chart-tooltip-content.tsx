interface ChartTooltipContentProps {
  active?: boolean
  payload?: Array<{
    name: string
    value: number
    color: string
  }>
  label?: string
  showLabel?: boolean
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  showLabel,
}: ChartTooltipContentProps) {
  if (!active || !payload?.length) return null

  return (
    <div className="border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl">
      {showLabel && label && <div className="font-medium">{label}</div>}
      <div className="grid gap-1.5">
        {payload.map((p, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="size-2.5 rounded-[2px]"
              style={{ backgroundColor: p.color }}
            />
            <div className="flex flex-1 items-center justify-between gap-4">
              <span className="text-muted-foreground">{p.name}</span>
              <span className="text-foreground font-mono font-medium">
                {p.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
