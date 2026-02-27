type StepConnectorProps = {
  variant?: "curve-right" | "curve-left" | "fade-bottom";
};

export function StepConnector({ variant = "curve-right" }: StepConnectorProps) {
  if (variant === "fade-bottom") {
    return (
      <div className="relative" aria-hidden="true">
        <div className="bg-border border-background absolute inset-x-0 top-2 mx-auto w-0.5 border-r h-[calc(4rem+0.75px)]" />
        <div className="bg-border border-background absolute inset-x-0 bottom-0 mx-auto w-0.5 border-r mask-b-from-35% top-62" />
        <div className="absolute inset-x-0 h-40 top-20">
          <div className="absolute left-0 top-0 h-40 w-1/2 -translate-x-2 rounded-l-full border-y border-l">
            <div className="size-full rounded-l-full border-y border-l border-background" />
          </div>
          <div className="absolute -bottom-2 right-1/2 size-2.5 translate-x-px rounded-tr-full border-r border-t border-background">
            <div className="size-full rounded-tr-full border-r border-t" />
          </div>
          <div className="absolute -top-[7px] right-1/2 size-[9px] translate-x-px rounded-br-full border-b border-r border-background">
            <div className="size-full rounded-br-full border-b border-r" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative" aria-hidden="true">
      <div className="bg-border border-background absolute inset-x-0 top-2 mx-auto w-0.5 border-r bottom-[15.45rem]" />
      <div className="bg-border border-background absolute inset-x-0 bottom-0 mx-auto w-0.5 border-r h-18" />
      <div className="absolute inset-x-0 h-40 bottom-20 translate-x-[0.5px] -scale-x-100">
        <div className="absolute left-0 top-0 h-40 w-1/2 -translate-x-2 rounded-l-full border-y border-l border-background">
          <div className="size-full rounded-l-full border-y border-l" />
        </div>
        <div className="absolute -bottom-2 right-1/2 size-2.5 translate-x-px rounded-tr-full border-r border-t">
          <div className="size-full rounded-tr-full border-r border-t border-background" />
        </div>
        <div className="absolute -top-[7px] right-1/2 size-[9px] translate-x-px rounded-br-full border-b border-r">
          <div className="size-full rounded-br-full border-b border-r border-background" />
        </div>
      </div>
    </div>
  );
}

type StepNumberProps = {
  number: number;
  variant?: "ring" | "filled";
};

export function StepNumber({ number, variant = "ring" }: StepNumberProps) {
  if (variant === "filled") {
    return (
      <span className="bg-foreground/5 text-foreground font-mono flex size-7 items-center justify-center rounded-full text-sm font-medium">
        {number}
      </span>
    );
  }

  return (
    <span className="bg-background ring-foreground/10 text-foreground relative flex size-6 items-center justify-center rounded-full border border-transparent font-mono text-xs font-medium shadow ring-1 ">
      {number}
    </span>
  );
}
