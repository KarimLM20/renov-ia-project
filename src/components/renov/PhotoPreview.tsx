import { ArrowRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhotoPreviewProps {
  imageUrl: string;
  onContinue: () => void;
  onReplace: () => void;
}

/** Aperçu de la photo importée avant de poursuivre le parcours. */
export function PhotoPreview({ imageUrl, onContinue, onReplace }: PhotoPreviewProps) {
  return (
    <div className="mx-auto w-full max-w-2xl appear">
      <div className="card-premium overflow-hidden p-2">
        <img
          src={imageUrl}
          alt="Photo importée de votre pièce"
          className="aspect-4/3 w-full rounded-3xl object-cover"
        />
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button size="lg" className="rounded-full px-8" onClick={onContinue}>
          Continuer
          <ArrowRight className="size-4" />
        </Button>
        <Button size="lg" variant="ghost" className="rounded-full" onClick={onReplace}>
          <RefreshCw className="size-4" />
          Changer de photo
        </Button>
      </div>
    </div>
  );
}