import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeUrl: string;
  afterUrl: string;
  beforeLabel?: string;
  afterLabel?: string;
}

/**
 * Comparateur Avant / Après avec curseur déplaçable.
 * Compatible souris, tactile et clavier (flèches gauche/droite).
 */
export function BeforeAfterSlider({
  beforeUrl,
  afterUrl,
  beforeLabel = "Avant",
  afterLabel = "Après",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: PointerEvent) => updateFromClientX(e.clientX);
    const onUp = () => setIsDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [isDragging, updateFromClientX]);

  return (
    <div
      ref={containerRef}
      onPointerDown={(e) => {
        setIsDragging(true);
        updateFromClientX(e.clientX);
      }}
      className="relative w-full touch-none overflow-hidden rounded-4xl border border-border shadow-[var(--shadow-lift)] select-none"
    >
      {/* Image générée (après) : couche de fond */}
      <img
        src={afterUrl}
        alt="Votre pièce après transformation"
        className="aspect-4/3 w-full object-cover"
        draggable={false}
      />

      {/* Image originale (avant) : révélée par le curseur */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeUrl}
          alt="Votre pièce avant transformation"
          className="size-full object-cover"
          draggable={false}
        />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-medium backdrop-blur">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-medium backdrop-blur">
        {afterLabel}
      </span>

      {/* Poignée */}
      <div
        className="absolute inset-y-0 w-0.5 bg-background/90"
        style={{ left: `${position}%` }}
      >
        <button
          type="button"
          role="slider"
          aria-label="Comparer avant et après"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
            if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
          }}
          className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-[var(--shadow-soft)] transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="size-4 -mr-1" />
          <ChevronRight className="size-4 -ml-1" />
        </button>
      </div>
    </div>
  );
}