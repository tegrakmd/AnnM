"use client"

import { Copy } from "lucide-react"

interface CodeBlockProps {
  code: string
  children: React.ReactNode
}

export function CodeBlock({ code, children }: CodeBlockProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
  }

  return (
    <div className="group relative">
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 z-20 inline-flex h-7 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-muted/10 px-3 text-xs font-medium text-foreground shadow ring-1 ring-foreground/10 backdrop-blur transition-colors hover:bg-foreground/5"
      >
        <Copy className="size-3 opacity-50" />
        Copy
      </button>
      <div className="overflow-hidden rounded-lg border border-foreground/10 bg-card p-4 font-mono text-[13px] leading-snug mask-y-from-90%">
        <pre className="text-foreground">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  )
}
