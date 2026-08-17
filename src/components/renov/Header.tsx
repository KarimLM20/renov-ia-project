import { Sparkles } from "lucide-react";

/** En-tête fixe et discret, présent sur tout le parcours. */
export function Header({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <button
          onClick={onLogoClick}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
        >
          <span className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Sparkles className="size-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">RENOV IA</span>
        </button>
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          Bêta gratuite
        </span>
      </div>
    </header>
  );
}