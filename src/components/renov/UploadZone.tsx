import { useCallback, useRef, useState } from "react";
import { Camera, ImagePlus, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ACCEPTED_TYPES, validateImageFile } from "@/lib/image";

interface UploadZoneProps {
  onFileSelected: (file: File) => void;
}

/** Zone d'import : glisser-déposer, clic, ou appareil photo sur mobile. */
export function UploadZone({ onFileSelected }: UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = useCallback(
    (file?: File | null) => {
      if (!file) return;
      const validationError = validateImageFile(file);
      if (validationError) {
        setError(validationError);
        return;
      }
      setError(null);
      onFileSelected(file);
    },
    [onFileSelected],
  );

  return (
    <div className="mx-auto w-full max-w-2xl appear">
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFile(e.dataTransfer.files?.[0]);
        }}
        className={cn(
          "card-premium flex cursor-pointer flex-col items-center gap-4 border-dashed px-6 py-14 text-center transition-all duration-300",
          isDragging ? "scale-[1.01] border-primary bg-secondary" : "hover:border-primary/50",
        )}
      >
        <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary">
          <UploadCloud className="size-7" />
        </span>
        <div>
          <p className="text-lg font-medium">Glissez votre photo ici</p>
          <p className="mt-1 text-sm text-muted-foreground">
            ou cliquez pour parcourir vos fichiers
          </p>
        </div>
        <p className="text-xs text-muted-foreground/80">JPEG, PNG ou WEBP · 15 Mo maximum</p>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button
          variant="outline"
          className="rounded-full bg-card"
          onClick={() => inputRef.current?.click()}
        >
          <ImagePlus className="size-4" />
          Importer une photo
        </Button>
        <Button
          variant="outline"
          className="rounded-full bg-card"
          onClick={() => cameraRef.current?.click()}
        >
          <Camera className="size-4" />
          Prendre une photo
        </Button>
      </div>

      {error && (
        <p className="mt-4 text-center text-sm text-destructive appear" role="alert">
          {error}
        </p>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_TYPES.join(",")}
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
      <input
        ref={cameraRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  );
}