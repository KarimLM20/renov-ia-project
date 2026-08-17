/**
 * Contrat commun à tous les fournisseurs de génération d'image.
 * Permet de brancher plus tard OpenAI Images, Gemini, Flux, SDXL...
 * sans toucher à l'interface.
 */
export interface GenerationRequest {
  /** Photo d'origine importée par l'utilisateur (object URL ou data URL). */
  imageUrl: string;
  /** Fichier source, utile pour un upload vers un stockage distant. */
  file?: File | undefined;
  roomId: string;
  styleId: string;
}

export interface GenerationResult {
  /** Image générée à afficher dans le comparateur Avant / Après. */
  imageUrl: string;
  provider: string;
  createdAt: number;
}

export interface AIProvider {
  name: string;
  generate(request: GenerationRequest, signal?: AbortSignal): Promise<GenerationResult>;
}