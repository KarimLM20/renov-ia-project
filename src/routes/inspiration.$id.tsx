import { createFileRoute, notFound } from "@tanstack/react-router";

import { InspirationDetail } from "@/components/stitch/InspirationDetail";
import { getInspiration } from "@/data/inspirations";

export const Route = createFileRoute("/inspiration/$id")({
  loader: ({ params }) => {
    const inspiration = getInspiration(params.id);
    if (!inspiration) throw notFound();
    return { inspiration };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Inspiration introuvable — RENOV IA" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.inspiration.title} — Inspiration RENOV IA`;
    const description = loaderData.inspiration.description.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: InspirationNotFound,
  component: InspirationDetailPage,
});

function InspirationDetailPage() {
  const { inspiration } = Route.useLoaderData();
  return <InspirationDetail inspiration={inspiration} />;
}

function InspirationNotFound() {
  return (
    <div className="bg-surface-m3 font-body flex min-h-screen flex-col items-center justify-center gap-4 px-margin-mobile text-center">
      <h1 className="font-headline text-headline-lg-mobile text-on-surface-m3">
        Inspiration introuvable
      </h1>
      <p className="font-body text-body-md text-on-surface-variant">
        Cette fiche n'existe pas ou a été déplacée.
      </p>
    </div>
  );
}