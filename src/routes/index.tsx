import { createFileRoute } from "@tanstack/react-router";

import { TopAppBar } from "@/components/stitch/TopAppBar";
import { BottomNavigation } from "@/components/stitch/BottomNavigation";
import { HeroSection } from "@/components/stitch/HeroSection";
import { InspirationGallery } from "@/components/stitch/InspirationGallery";

const TITLE = "RENOV IA — Transformez votre intérieur grâce à l'IA";
const DESCRIPTION =
  "Prenez une photo de votre pièce et découvrez votre futur intérieur : plus de 30 styles de décoration générés par l'IA, avec comparateur avant / après.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

/** Écran d'accueil — intégration fidèle de la maquette Stitch. */
function HomePage() {
  return (
    <div className="bg-surface-m3 text-on-background-m3 min-h-screen pb-[100px] pt-16 md:pb-0 md:pt-0">
      <TopAppBar />
      <main className="mx-auto w-full max-w-[1440px] overflow-hidden">
        <HeroSection />
        <InspirationGallery />
      </main>
      <BottomNavigation active="Accueil" />
    </div>
  );
}
