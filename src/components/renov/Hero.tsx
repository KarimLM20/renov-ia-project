import { Camera, ImagePlus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroRoom from "@/assets/hero-room.jpg";

const HIGHLIGHTS = ["Résultat instantané", "Plus de 30 styles", "Haute qualité", "Gratuit"];

interface HeroProps {
  onImport: () => void;
  onCapture: () => void;
}

/** Section d'accroche de la page d'accueil. */
export function Hero({ onImport, onCapture }: HeroProps) {
  return (
    <section className="surface-warm relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
        <div className="appear">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            Décoration augmentée par l'IA
          </span>
          <h1 className="mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Transformez votre intérieur grâce à l'IA
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Importez une photo et découvrez votre future décoration en quelques secondes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="h-13 rounded-full px-7 text-base" onClick={onImport}>
              <ImagePlus className="size-5" />
              Importer une photo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-13 rounded-full border-border bg-card px-7 text-base"
              onClick={onCapture}
            >
              <Camera className="size-5" />
              Prendre une photo
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="size-4 text-sage" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="appear [animation-delay:120ms]">
          <div className="overflow-hidden rounded-4xl border border-border shadow-[var(--shadow-lift)]">
            <img
              src={heroRoom}
              alt="Salon lumineux réaménagé par RENOV IA"
              width={1280}
              height={960}
              className="aspect-4/3 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}