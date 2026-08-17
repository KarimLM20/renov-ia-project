import { ROOMS } from "@/data/rooms";
import { cn } from "@/lib/utils";

interface RoomSelectorProps {
  value: string | null;
  onChange: (roomId: string) => void;
}

/** Grille de sélection du type de pièce. */
export function RoomSelector({ value, onChange }: RoomSelectorProps) {
  return (
    <div className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
      {ROOMS.map((room, index) => {
        const Icon = room.icon;
        const selected = value === room.id;
        return (
          <button
            key={room.id}
            onClick={() => onChange(room.id)}
            style={{ animationDelay: `${index * 40}ms` }}
            className={cn(
              "card-premium hover-lift appear flex flex-col items-center gap-3 px-3 py-6",
              selected && "border-primary bg-secondary ring-2 ring-primary/30",
            )}
          >
            <span
              className={cn(
                "flex size-12 items-center justify-center rounded-2xl transition-colors",
                selected ? "bg-primary text-primary-foreground" : "bg-secondary text-primary",
              )}
            >
              <Icon className="size-5" />
            </span>
            <span className="text-sm font-medium">{room.name}</span>
          </button>
        );
      })}
    </div>
  );
}