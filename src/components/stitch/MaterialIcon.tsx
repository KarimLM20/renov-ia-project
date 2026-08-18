import { cn } from "@/lib/utils";

interface MaterialIconProps {
  /** Nom du glyphe Material Symbols (ex : "home", "auto_awesome"). */
  name: string;
  /** Version pleine du glyphe. */
  filled?: boolean;
  className?: string;
}

/** Icône Material Symbols, alignée sur les maquettes Stitch. */
export function MaterialIcon({ name, filled = false, className }: MaterialIconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("material-symbols-outlined leading-none select-none", className)}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  );
}