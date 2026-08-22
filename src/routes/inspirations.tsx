import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { TopAppBar } from "@/components/stitch/TopAppBar";
import { BottomNavigation } from "@/components/stitch/BottomNavigation";
import { GalleryCard } from "@/components/stitch/GalleryCard";
import { MaterialIcon } from "@/components/stitch/MaterialIcon";
import {
  GALLERY_ITEMS,
  GALLERY_ROOM_FILTERS,
  GALLERY_STYLE_FILTERS,
  type GalleryRoom,
} from "@/data/gallery";

const TITLE = "Galerie d'inspirations déco — RENOV IA";
const DESCRIPTION =
  "Parcourez des centaines d'inspirations d'intérieurs générées par l'IA : salon, cuisine, chambre, salle de bain, en Japandi, Scandinave, Minimaliste et plus encore.";

export const Route = createFileRoute("/inspirations")({
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
  component: InspirationsGalleryPage,
});

/** Écran « Inspirations » : galerie masonry filtrable (maquette Stitch). */
function InspirationsGalleryPage() {
  const [room, setRoom] = useState<GalleryRoom | "all">("all");
  const [style, setStyle] = useState<string | null>(null);

  const items = useMemo(
    () =>
      GALLERY_ITEMS.filter(
        (item) =>
          (room === "all" || item.room === room) && (!style || item.style === style),
      ),
    [room, style],
  );

  return (
    <div className="bg-surface-m3 text-on-background-m3 font-body min-h-screen pb-[128px] pt-20 md:pb-16">
      <TopAppBar />

      <main className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin-desktop">
        <header className="mb-6 pt-2">
          <h1 className="font-headline text-headline-lg-mobile text-on-surface-m3 md:text-headline-lg font-semibold tracking-tight">
            Inspirations
          </h1>
          <p className="font-body text-body-md text-on-surface-variant mt-1">
            Piochez des idées, puis lancez votre rénovation en un geste.
          </p>
        </header>

        {/* Filtres pièce */}
        <div className="no-scrollbar -mx-margin-mobile mb-4 overflow-x-auto px-margin-mobile pb-2 md:mx-0 md:px-0">
          <div className="flex w-max space-x-3">
            {GALLERY_ROOM_FILTERS.map((filter) => {
              const active = room === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setRoom(filter.id)}
                  aria-pressed={active}
                  className={`font-body text-label-md whitespace-nowrap rounded-full border px-6 py-2.5 transition-colors ${
                    active
                      ? "border-primary-m3 bg-primary-m3 text-on-primary-m3"
                      : "border-outline-variant text-on-surface-variant hover:border-primary-m3 hover:text-primary-m3"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtres style */}
        <div className="no-scrollbar -mx-margin-mobile mb-8 overflow-x-auto px-margin-mobile pb-2 md:mx-0 md:px-0">
          <div className="flex w-max space-x-3">
            {GALLERY_STYLE_FILTERS.map((name) => {
              const active = style === name;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setStyle(active ? null : name)}
                  aria-pressed={active}
                  className={`font-body text-label-md flex items-center gap-2 whitespace-nowrap rounded-full border px-6 py-2.5 transition-colors ${
                    active
                      ? "border-primary-m3 text-primary-m3 bg-primary-m3/10"
                      : "border-outline-variant text-on-surface-variant hover:border-primary-m3 hover:text-primary-m3"
                  }`}
                >
                  {name}
                  {active ? <MaterialIcon name="close" className="text-[18px]" /> : null}
                </button>
              );
            })}
          </div>
        </div>

        {items.length > 0 ? (
          <div className="masonry-grid">
            {items.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="border-outline-variant text-on-surface-variant rounded-[24px] border border-dashed p-12 text-center">
            <MaterialIcon name="image_search" className="text-[32px]" />
            <p className="font-body text-body-md mt-2">
              Aucune inspiration pour ce filtre. Essayez une autre combinaison.
            </p>
          </div>
        )}
      </main>

      <BottomNavigation active="Inspirations" />
    </div>
  );
}
