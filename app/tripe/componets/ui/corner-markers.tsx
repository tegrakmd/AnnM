export function CornerMarkers() {
  return (
    <>
      <div
        aria-hidden="true"
        className="mask-radial-from-15% before:bg-foreground/25 after:bg-foreground/25 absolute size-3 -translate-x-1/2 -translate-y-1/2 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px"
      />
      <div
        aria-hidden="true"
        className="mask-radial-from-15% before:bg-foreground/25 after:bg-foreground/25 absolute right-0 size-3 -translate-y-1/2 translate-x-1/2 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px"
      />
      <div
        aria-hidden="true"
        className="mask-radial-from-15% before:bg-foreground/25 after:bg-foreground/25 absolute bottom-0 right-0 size-3 translate-x-1/2 translate-y-1/2 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px"
      />
      <div
        aria-hidden="true"
        className="mask-radial-from-15% before:bg-foreground/25 after:bg-foreground/25 absolute bottom-0 size-3 -translate-x-1/2 translate-y-1/2 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px"
      />
    </>
  )
}
