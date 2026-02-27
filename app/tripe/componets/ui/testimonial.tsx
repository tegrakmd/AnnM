interface TestimonialProps {
  quote: string
  name: string
  handle: string
  avatarSeed: string
}

export function Testimonial({
  quote,
  name,
  handle,
  avatarSeed,
}: TestimonialProps) {
  return (
    <blockquote className="before:bg-emerald-500 relative mt-12 max-w-xl pl-4 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
      <p className="text-muted-foreground italic">{`"${quote}"`}</p>
      <div className="mt-6 flex items-center gap-2">
        <div className="bg-background size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5">
          <img
            src={`https://picsum.photos/seed/${avatarSeed}/40/40`}
            className="rounded-full"
            alt={name}
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground text-sm">{handle}</span>
      </div>
    </blockquote>
  )
}
