import { MaterialIcon } from "./MaterialIcon";
import { cn } from "@/lib/utils";
import type { RoomChoice } from "@/data/roomChoices";

interface RoomCardProps {
  room: RoomChoice;
  selected?: boolean;
  onSelect: (id: string) => void;
}

/** Carte de pièce en style bento (maquette Stitch « Choisir la pièce »). */
export function RoomCard({ room, selected = false, onSelect }: RoomCardProps) {
  const large = room.feature === "hero";

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect(room.id)}
      className={cn(
        "group focus-visible:ring-primary-m3/30 relative overflow-hidden rounded-[3rem] shadow-[0px_10px_40px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-4",
        "aspect-[4/5]",
        room.feature === "hero" && "sm:aspect-square sm:col-span-2 sm:row-span-2",
        room.feature === "wide" && "sm:col-span-2 sm:aspect-auto",
        selected && "ring-primary-m3 ring-4",
      )}
    >
      <img
        src={room.image}
        alt={room.alt}
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 z-10 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />
      <div className="from-surface-container-high/90 via-surface-container-high/20 absolute inset-0 z-20 bg-gradient-to-t to-transparent" />
      <div
        className={cn(
          "absolute bottom-0 left-0 z-30 flex w-full items-end justify-between",
          large ? "p-6" : "p-5",
        )}
      >
        <h3
          className={cn(
            "font-headline text-headline-md text-on-surface-m3 text-left",
            large ? "font-semibold" : "font-medium",
          )}
        >
          {room.name}
        </h3>
        <span
          className={cn(
            "bg-primary-m3 text-on-primary-m3 flex items-center justify-center rounded-full transition-all duration-300",
            large ? "size-10 translate-y-4" : "size-8 translate-y-2",
            selected
              ? "translate-y-0 opacity-100"
              : "opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
          )}
        >
          <MaterialIcon name={selected ? "check" : "arrow_forward"} className={large ? "" : "text-[16px]"} />
        </span>
      </div>
    </button>
  );
}