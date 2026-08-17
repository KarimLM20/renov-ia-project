import { useCallback, useEffect, useRef, useState } from "react";
import { getAIProvider } from "@/lib/ai";

export type FlowStep = "home" | "upload" | "preview" | "room" | "style" | "loading" | "result";

/**
 * État central du parcours RENOV IA.
 * Isolé dans un hook pour rester testable et réutilisable
 * (futures fonctionnalités : historique, comptes, projets...).
 */
export function useRenovationFlow() {
  const [step, setStep] = useState<FlowStep>("home");
  const [file, setFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [roomId, setRoomId] = useState<string | null>(null);
  const [styleId, setStyleId] = useState<string | null>(null);
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Libère l'object URL quand la photo change ou au démontage.
  useEffect(() => {
    return () => {
      if (originalUrl) URL.revokeObjectURL(originalUrl);
    };
  }, [originalUrl]);

  const selectFile = useCallback((nextFile: File) => {
    setFile(nextFile);
    setOriginalUrl((previous) => {
      if (previous) URL.revokeObjectURL(previous);
      return URL.createObjectURL(nextFile);
    });
    setStep("preview");
  }, []);

  const generate = useCallback(async () => {
    if (!originalUrl || !roomId || !styleId) return;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setError(null);
    setStep("loading");
    try {
      const result = await getAIProvider().generate(
        { imageUrl: originalUrl, file: file ?? undefined, roomId, styleId },
        controller.signal,
      );
      setGeneratedUrl(result.imageUrl);
      setStep("result");
    } catch (err) {
      if ((err as Error)?.name === "AbortError") return;
      setError("La génération a échoué. Veuillez réessayer.");
      setStep("style");
    }
  }, [originalUrl, roomId, styleId, file]);

  const reset = useCallback(() => {
    abortRef.current?.abort();
    setStep("home");
    setFile(null);
    setOriginalUrl((previous) => {
      if (previous) URL.revokeObjectURL(previous);
      return null;
    });
    setRoomId(null);
    setStyleId(null);
    setGeneratedUrl(null);
    setError(null);
  }, []);

  return {
    step,
    setStep,
    originalUrl,
    roomId,
    setRoomId,
    styleId,
    setStyleId,
    generatedUrl,
    error,
    selectFile,
    generate,
    reset,
  };
}