import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const MESSAGES = [
  "Analyse de votre pièce...",
  "Compréhension des volumes...",
  "Création du design...",
  "Application des matériaux...",
  "Finalisation...",
];

const MESSAGE_DURATION = 3000;
const PROGRESS_INTERVAL = 50;
const TOTAL_DURATION = MESSAGES.length * MESSAGE_DURATION;
const PROGRESS_INCREMENT = 100 / (TOTAL_DURATION / PROGRESS_INTERVAL);

/** Écran de génération IA « Stitch » — gradient animé, carrousel de messages et barre de progression. */
export function LoadingScreen() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Carrousel de messages.
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % MESSAGES.length);
    }, MESSAGE_DURATION);
    return () => clearInterval(interval);
  }, []);

  // Barre de progression.
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + PROGRESS_INCREMENT, 100));
    }, PROGRESS_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center px-margin-mobile text-center">
      <div className="loading-gradient relative mb-12 h-64 w-64 overflow-hidden rounded-xl shadow-[0px_10px_40px_rgba(0,0,0,0.04)] md:h-80 md:w-80">
        <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5" />
      </div>

      <div className="relative mb-8 flex h-12 w-full max-w-md flex-col items-center justify-center overflow-hidden">
        {MESSAGES.map((msg, index) => {
          const offset = index - messageIndex;
          const isVisible = offset === 0;
          const isBelow = offset === 1 || offset === -(MESSAGES.length - 1);
          const isAbove = offset === -1 || offset === MESSAGES.length - 1;

          return (
            <div
              key={msg}
              className={cn(
                "absolute w-full text-center font-body text-body-lg text-on-surface-variant transition-all duration-700 ease-in-out",
                isVisible && "translate-y-0 opacity-100",
                isBelow && "translate-y-6 opacity-0",
                isAbove && "-translate-y-6 opacity-0",
                !isVisible && !isBelow && !isAbove && "translate-y-6 opacity-0",
              )}
            >
              {msg}
            </div>
          );
        })}
      </div>

      <div className="h-1 w-48 overflow-hidden rounded-full bg-surface-variant">
        <div
          className="h-full rounded-full bg-tertiary-m3 transition-all duration-75 ease-linear"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
}
