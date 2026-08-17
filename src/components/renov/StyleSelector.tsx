import { Check } from "lucide-react";
import { DESIGN_STYLES } from "@/data/styles";
import { cn } from "@/lib/utils";

interface StyleSelectorProps {
  value: string | null;
  onChange: (styleId: string) => void;
}

/** Cartes visuelles de sélection du style de décoration. */
export function StyleSelector({ value, onChange }: StyleSelectorProps) {
  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {DESIGN_STYLES.map((style, index) => {
        const selected = value === style.id;
        return (
          <button
            key={style.id}
            onClick={() => onChange(style.id)}
            style={{ animationDelay: `${index * 35}ms` }}
            className={cn(
              "appear hover-lift group relative overflow-hidden rounded-3xl border text-left transition-colors",
              selected ? "border-primary ring-2 ring-primary/30" : "border-border",
            )}
          >
            <img
              src={style.image}
              alt={`Style ${style.name}`}
              loading="lazy"
              width={768}
              height={768}
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-3 pt-10">
              <p className="text-sm font-semibold text-background">{style.name}</p>
              <p className="text-[11px] text-background/75">{style.description}</p>
            </div>
            {selected && (
              <span className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-4" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}