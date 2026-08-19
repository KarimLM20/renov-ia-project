import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

import { TopAppBar } from "@/components/stitch/TopAppBar";
import { BottomNavigation } from "@/components/stitch/BottomNavigation";
import { RoomCard } from "@/components/stitch/RoomCard";
import { ROOM_CHOICES } from "@/data/roomChoices";

const TITLE = "Choisir la pièce à rénover — RENOV IA";
const DESCRIPTION =
  "Salon, cuisine, chambre, salle de bain… Sélectionnez la pièce à réinventer : l'IA RENOV adapte ses suggestions à la fonction de votre espace.";

export const Route = createFileRoute("/piece")({
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
  component: RoomChoicePage,
});

/** Écran « Quelle pièce souhaitez-vous réinventer ? » (maquette Stitch). */
function RoomChoicePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelect = (id: string) => {
    setSelected(id);
    void navigate({ to: "/upload", search: { room: id } as never });
  };

  return (
    <div className="bg-surface-m3 text-on-background-m3 font-body min-h-screen pb-[112px] pt-20 md:pb-8">
      <TopAppBar />

      <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-section-gap px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <section className="mt-8 flex flex-col items-center justify-center text-center md:mt-16">
          <h1 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface-m3 mb-4">
            Quelle pièce souhaitez-vous réinventer ?
          </h1>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
            Sélectionnez l'espace que vous désirez transformer. Notre IA adaptera ses suggestions
            architecturales à la fonction de votre pièce.
          </p>
        </section>

        <section className="grid w-full grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ROOM_CHOICES.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              selected={selected === room.id}
              onSelect={handleSelect}
            />
          ))}
        </section>

        <div className="mb-12 mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => handleSelect("autre")}
            className="bg-surface-variant text-on-surface-variant hover:bg-surface-dim font-body text-label-md rounded-[2rem] px-8 py-3 transition-colors duration-200"
          >
            Autre pièce (personnalisée)
          </button>
        </div>
      </main>

      <BottomNavigation active="Accueil" />
    </div>
  );
}