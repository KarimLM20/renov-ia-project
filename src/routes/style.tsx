import { createFileRoute, useNavigate, useRouter } from "@tanstack/react-router";
import { useState } from "react";

import { MaterialIcon } from "@/components/stitch/MaterialIcon";
import { StyleCard } from "@/components/stitch/StyleCard";
import { DESIGN_STYLES } from "@/data/styles";

const TITLE = "Choisir le style de décoration — RENOV IA";
const DESCRIPTION =
  "Scandinave, Moderne, Japandi, Minimaliste… Sélectionnez jusqu'à 3 styles pour guider l'IA RENOV dans la création de votre futur intérieur.";
const MAX_SELECTION = 3;

export const Route = createFileRoute("/style")({
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
  component: StyleChoicePage,
});

/** Écran « Quel style vous inspire ? » (maquette Stitch). */
function StyleChoicePage() {
  const [selected, setSelected] = useState<string[]>([]);
  const navigate = useNavigate();
  const router = useRouter();

  const toggle = (id: string) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : current.length >= MAX_SELECTION
          ? current
          : [...current, id],
    );
  };

  return (
    <div className="bg-surface-m3 text-on-background-m3 font-body min-h-screen pb-40 pt-20">
      <header className="bg-surface-m3/80 fixed top-0 z-50 flex h-16 w-full items-center justify-between px-margin-mobile shadow-sm backdrop-blur-md md:px-margin-desktop">
        <button
          type="button"
          aria-label="Revenir en arrière"
          onClick={() => router.history.back()}
          className="text-on-surface-variant hover:bg-surface-variant/50 flex items-center justify-center rounded-full p-2 transition-colors active:scale-95"
        >
          <MaterialIcon name="arrow_back" />
        </button>
        <h1 className="font-headline text-headline-md text-primary-m3 font-bold tracking-tight">
          RENOV IA
        </h1>
        <span className="bg-secondary-container-m3 border-outline-variant/30 flex size-10 items-center justify-center overflow-hidden rounded-full border">
          <MaterialIcon name="person" filled className="text-on-secondary-container-m3 text-[20px]" />
        </span>
      </header>

      <main className="mx-auto w-full max-w-[1440px] px-margin-mobile md:px-margin-desktop">
        <section className="mx-auto mb-section-gap max-w-2xl pt-8 text-center">
          <div className="bg-surface-container-m3 border-outline-variant/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <MaterialIcon name="palette" className="text-primary-m3 text-[16px]" />
            <span className="font-body text-label-md text-on-surface-variant">Étape 4 sur 6</span>
          </div>
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface-m3 mb-4">
            Quel style vous inspire ?
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant">
            Sélectionnez jusqu'à 3 styles pour guider notre IA dans la création de votre futur
            intérieur.
          </p>
        </section>

        <section className="mb-section-gap grid grid-cols-2 gap-gutter md:grid-cols-3 lg:grid-cols-4">
          {DESIGN_STYLES.map((style) => (
            <StyleCard
              key={style.id}
              style={style}
              selected={selected.includes(style.id)}
              disabled={selected.length >= MAX_SELECTION}
              onToggle={toggle}
            />
          ))}
        </section>
      </main>

      <div className="pointer-events-none fixed inset-x-0 bottom-12 z-40 flex justify-center px-margin-mobile">
        <button
          type="button"
          disabled={selected.length === 0}
          onClick={() => void navigate({ to: "/upload" })}
          className="bg-primary-m3 text-on-primary-m3 pointer-events-auto flex h-[56px] items-center gap-2 rounded-[16px] px-8 shadow-[0px_10px_40px_rgba(137,76,50,0.3)] transition-all hover:opacity-90 active:scale-95 disabled:pointer-events-none disabled:opacity-40"
        >
          <span className="font-body text-label-md font-semibold">Continuer</span>
          <MaterialIcon name="arrow_forward" className="text-[20px]" />
        </button>
      </div>
    </div>
  );
}