import { createFileRoute, notFound } from "@tanstack/react-router";

import { TopAppBar } from "@/components/stitch/TopAppBar";
import { BottomNavigation } from "@/components/stitch/BottomNavigation";
import { BeforeAfterSlider } from "@/components/renov/BeforeAfterSlider";
import { RENOVATIONS } from "@/data/renovations";

export const Route = createFileRoute("/renovation/$id")({
  loader: ({ params }) => {
    const renovation = RENOVATIONS.find((r) => r.id === params.id);
    if (!renovation) throw notFound();
    return renovation;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Projet de rénovation"} — RENOV IA` },
      {
        name: "description",
        content: loaderData
          ? `Projet ${loaderData.title} au style ${loaderData.style}. Comparez avant et après.`
          : "Découvrez les projets de rénovation avant et après avec RENOV IA.",
      },
      { property: "og:title", content: `${loaderData?.title ?? "Projet de rénovation"} — RENOV IA` },
      {
        property: "og:description",
        content: loaderData
          ? `Projet ${loaderData.title} au style ${loaderData.style}. Comparez avant et après.`
          : "Découvrez les projets de rénovation avant et après avec RENOV IA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RenovationDetailPage,
});

/** Détail d'un projet de rénovation avec comparateur interactif. */
function RenovationDetailPage() {
  const renovation = Route.useLoaderData();

  return (
    <div className="bg-surface-m3 text-on-background-m3 font-body min-h-screen pb-[128px] pt-20 md:pb-16">
      <TopAppBar />

      <main className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin-desktop">
        <header className="mb-6 pt-2">
          <h1 className="font-headline text-headline-lg-mobile text-on-surface-m3 md:text-headline-lg font-semibold tracking-tight">
            {renovation.title}
          </h1>
          <p className="font-body text-body-md text-on-surface-variant mt-1">
            {renovation.style} · {renovation.date}
          </p>
        </header>

        <BeforeAfterSlider
          beforeUrl={renovation.beforeImage}
          afterUrl={renovation.afterImage}
          beforeLabel="Avant"
          afterLabel="Après"
        />
      </main>

      <BottomNavigation active="Mes rénos" />
    </div>
  );
}
