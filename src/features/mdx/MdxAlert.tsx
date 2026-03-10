"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Info, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";

type CalloutVariant = "info" | "warning" | "success" | "tip";

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}

const icons = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle2,
  tip: Lightbulb,
};

const styles = {
  info: "border-blue-500/30 bg-blue-500/5 text-blue-700 dark:text-blue-400",
  warning:
    "border-yellow-500/30 bg-yellow-500/5 text-yellow-700 dark:text-yellow-400",
  success:
    "border-green-500/30 bg-green-500/5 text-green-700 dark:text-green-400",
  tip: "border-purple-500/30 bg-purple-500/5 text-purple-700 dark:text-purple-400",
};

export function Callout({ variant = "info", title, children }: CalloutProps) {
  const Icon = icons[variant];

  return (
    <div
      className={cn(
        "my-6 flex gap-4 rounded-lg border p-4 text-sm ",
        styles[variant]
      )}>
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      <div className="space-y-1 mdx-content">
        {title && <p className="font-semibold text-base leading-none">{title}</p>}
        <div className="leading-relaxed ">{children}</div>
      </div>
    </div>
  );
}
