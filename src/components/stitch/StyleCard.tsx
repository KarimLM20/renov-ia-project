import { MaterialIcon } from "./MaterialIcon";
import { cn } from "@/lib/utils";
import type { DesignStyle } from "@/data/styles";

interface StyleCardProps {
  style: DesignStyle;
  selected: boolean;
  disabled?: boolean;
  onToggle: (id: string) => void;
}

/** Carte de style sélectionnable (maquette Stitch « Choisir le style »). */
export function StyleCard({ style, selected, disabled = false, onToggle }: StyleCardProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      disabled={disabled && !selected}
      onClick={() => onToggle(style.id)}
      className={cn(
        "group relative h-[240px] overflow-hidden rounded-[2rem] border border-transparent shadow-[0px_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-m3/30",
        !disabled && "hover:-translate-y-1",
        selected && "border-primary-m3 shadow-[0px_4px_20px_rgba(137,76,50,0.15)]",
        disabled && !selected && "cursor-not-allowed opacity-50",
      )}
    >
      <img
        src={style.image}
        alt={`Style ${style.name}`}
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-4 text-left">
        <span className="font-headline text-[20px] font-medium leading-tight text-white md:text-headline-md">
          {style.name}
        </span>
        <span className="font-body text-label-sm text-white/80">{style.description}</span>
      </div>
      <span
        className={cn(
          "bg-primary-m3 text-on-primary-m3 absolute right-4 top-4 flex size-8 items-center justify-center rounded-full shadow-lg transition-all duration-200",
          selected ? "scale-100 opacity-100" : "scale-50 opacity-0",
        )}
      >
        <MaterialIcon name="check" className="text-[20px]" />
      </span>
    </button>
  );
}