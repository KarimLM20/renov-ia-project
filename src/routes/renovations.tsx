import { createFileRoute } from "@tanstack/react-router";

import { TopAppBar } from "@/components/stitch/TopAppBar";
import { BottomNavigation } from "@/components/stitch/BottomNavigation";
import { RenovationCard } from "@/components/stitch/RenovationCard";
import { RENOVATIONS } from "@/data/renovations";

const TITLE = "Mes rénovations — RENOV IA";
const DESCRIPTION =
  "Retrouvez tous vos projets de rénovation générés par l'IA, avec comparateur avant / après, style et date.";

export const Route = createFileRoute("/renovations")({
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
  component: RenovationsPage,
});

/** Écran « Mes rénovations » : liste des projets utilisateur. */
function RenovationsPage() {
  return (
    <div className="bg-surface-m3 text-on-background-m3 font-body min-h-screen pb-[128px] pt-20 md:pb-16">
      <TopAppBar />

      <main className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin-desktop">
        <header className="mb-8 pt-2">
          <h1 className="font-headline text-headline-lg-mobile text-on-surface-m3 md:text-headline-lg font-semibold tracking-tight">
            Mes rénovations
          </h1>
          <p className="font-body text-body-md text-on-surface-variant mt-1">
            Vos projets, votre évolution.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RENOVATIONS.map((renovation) => (
            <RenovationCard key={renovation.id} renovation={renovation} />
          ))}
        </div>
      </main>

      <BottomNavigation active="Mes rénos" />
    </div>
  );
}
