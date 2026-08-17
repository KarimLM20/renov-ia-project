import { mockProvider } from "./mockProvider";
import type { AIProvider } from "./types";

/**
 * Point d'entrée unique de la couche IA.
 * Pour brancher un vrai fournisseur : créer un module exportant un `AIProvider`
 * (appel serveur via createServerFn) et l'enregistrer ici.
 */
const providers: Record<string, AIProvider> = {
  mock: mockProvider,
};

const ACTIVE_PROVIDER = "mock";

export function getAIProvider(): AIProvider {
  return providers[ACTIVE_PROVIDER] ?? mockProvider;
}

export type { AIProvider, GenerationRequest, GenerationResult } from "./types";