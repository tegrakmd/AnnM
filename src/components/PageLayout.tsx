import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export default function PageLayout(
  props: PropsWithChildren<{ className?: string }>
) {
  return (
    <section className={cn("w-full relative", props.className)}>
      {props.children}
    </section>
  );
}
