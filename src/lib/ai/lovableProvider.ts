import { DESIGN_STYLES } from "@/data/styles";
import { ROOMS } from "@/data/rooms";
import type { AIProvider, GenerationRequest, GenerationResult } from "./types";

/** Convertit une source image (object URL / File) en data URL base64. */
async function toDataUrl(request: GenerationRequest): Promise<string> {
  const blob = request.file ?? (await (await fetch(request.imageUrl)).blob());
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Lecture du fichier impossible"));
    reader.readAsDataURL(blob);
  });
}

function buildPrompt(roomId: string, styleId: string): string {
  const room = ROOMS.find((r) => r.id === roomId);
  const style = DESIGN_STYLES.find((s) => s.id === styleId);
  return [
    `Rénove cette photo réelle d'une pièce de type "${room?.name ?? roomId}".`,
    `Applique un style de décoration "${style?.name ?? styleId}" (${style?.description ?? ""}).`,
    "Conserve strictement la même pièce : même perspective, même angle de vue, mêmes dimensions,",
    "mêmes emplacements de fenêtres, portes et murs porteurs.",
    "Remplace uniquement le mobilier, les revêtements, les couleurs, l'éclairage et la décoration.",
    "Rendu photoréaliste haute qualité, éclairage naturel cohérent avec la photo d'origine.",
  ].join(" ");
}

/** Génération réelle via la passerelle IA de Lovable. */
export const lovableProvider: AIProvider = {
  name: "lovable-ai",
  async generate(request: GenerationRequest, signal?: AbortSignal): Promise<GenerationResult> {
    const imageDataUrl = await toDataUrl(request);

    const response = await fetch("/api/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: buildPrompt(request.roomId, request.styleId), imageDataUrl }),
      ...(signal ? { signal } : {}),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      throw new Error(`Génération impossible (${response.status}) ${detail}`);
    }

    const payload = (await response.json()) as {
      data?: Array<{ b64_json?: string; url?: string }>;
    };
    const item = payload.data?.[0];
    const imageUrl = item?.b64_json ? `data:image/png;base64,${item.b64_json}` : item?.url;
    if (!imageUrl) throw new Error("Aucune image renvoyée par le modèle");

    return { imageUrl, provider: "lovable-ai", createdAt: Date.now() };
  },
};
