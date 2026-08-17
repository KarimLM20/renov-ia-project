import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const STEPS = [
  "Analyse de votre pièce...",
  "Création du design...",
  "Application du style...",
  "Finalisation...",
];

/** Écran d'attente animé pendant la génération IA. */
export function LoadingScreen() {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(4);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
    }, 1900);
    const progressTimer = setInterval(() => {
      // Progression asymptotique : n'atteint jamais 100 % avant le résultat.
      setProgress((p) => Math.min(p + (98 - p) * 0.06, 97));
    }, 120);
    return () => {
      clearInterval(stepTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center gap-6 py-10 text-center appear">
      <span className="relative flex size-20 items-center justify-center rounded-full bg-secondary">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/10" />
        <Sparkles className="size-8 animate-pulse text-primary" />
      </span>

      <div>
        <h2 className="text-2xl">Votre nouvelle pièce arrive</h2>
        <p key={stepIndex} className="mt-2 text-sm text-muted-foreground appear">
          {STEPS[stepIndex]}
        </p>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}