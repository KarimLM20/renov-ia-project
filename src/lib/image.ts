/** Règles de validation des photos importées. */
export const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
export const MAX_SIZE_BYTES = 15 * 1024 * 1024; // 15 Mo

export function validateImageFile(file: File): string | null {
  if (!ACCEPTED_TYPES.includes(file.type)) {
    return "Format non supporté. Utilisez JPEG, PNG ou WEBP.";
  }
  if (file.size > MAX_SIZE_BYTES) {
    return "Image trop lourde. Taille maximale : 15 Mo.";
  }
  return null;
}

/** Déclenche le téléchargement d'une image depuis une URL. */
export async function downloadImage(url: string, filename: string) {
  const response = await fetch(url);
  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}