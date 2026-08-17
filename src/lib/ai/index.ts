import { mockProvider } from "./mockProvider";
import { lovableProvider } from "./lovableProvider";
import type { AIProvider } from "./types";

/**
 * Point d'entrée unique de la couche IA.
 * `lovable-ai` effectue une vraie transformation de la photo importée.
 */
const providers: Record<string, AIProvider> = {
  mock: mockProvider,
  "lovable-ai": lovableProvider,
};

const ACTIVE_PROVIDER = "lovable-ai";

export function getAIProvider(): AIProvider {
  return providers[ACTIVE_PROVIDER] ?? mockProvider;
}

export type { AIProvider, GenerationRequest, GenerationResult } from "./types";
