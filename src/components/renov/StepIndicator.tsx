import { cn } from "@/lib/utils";

/** Fil d'Ariane visuel : l'utilisateur sait toujours où il en est. */
export function StepIndicator({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div className="mx-auto flex max-w-xl items-center justify-center gap-2 px-5">
      {steps.map((step, index) => (
        <div key={step} className="flex flex-1 flex-col items-center gap-2">
          <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className={cn(
                "h-full rounded-full bg-primary transition-all duration-700 ease-out",
                index <= current ? "w-full" : "w-0",
              )}
            />
          </div>
          <span
            className={cn(
              "hidden text-xs transition-colors sm:block",
              index === current ? "font-medium text-foreground" : "text-muted-foreground",
            )}
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  );
}