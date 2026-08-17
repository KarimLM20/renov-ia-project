import { DESIGN_STYLES } from "@/data/styles";
import type { AIProvider, GenerationRequest, GenerationResult } from "./types";

/** Latence simulée (ms) pour reproduire le ressenti d'une vraie génération. */
const MIN_DELAY = 5000;
const MAX_DELAY = 9000;

/**
 * Fournisseur de démonstration : renvoie le visuel du style choisi.
 * À remplacer par un provider réel (voir `src/lib/ai/index.ts`).
 */
export const mockProvider: AIProvider = {
  name: "mock",
  async generate(request: GenerationRequest, signal?: AbortSignal): Promise<GenerationResult> {
    const delay = MIN_DELAY + Math.random() * (MAX_DELAY - MIN_DELAY);

    await new Promise<void>((resolve, reject) => {
      const timer = setTimeout(resolve, delay);
      signal?.addEventListener("abort", () => {
        clearTimeout(timer);
        reject(new DOMException("Génération annulée", "AbortError"));
      });
    });

    const style = DESIGN_STYLES.find((s) => s.id === request.styleId);

    return {
      imageUrl: style?.image ?? request.imageUrl,
      provider: "mock",
      createdAt: Date.now(),
    };
  },
};