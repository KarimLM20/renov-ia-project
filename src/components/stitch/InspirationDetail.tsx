import { Link, useRouter } from "@tanstack/react-router";

import { MaterialIcon } from "./MaterialIcon";
import type { Inspiration } from "@/data/inspirations";

const FUTURE_FEATURES = [
  {
    icon: "engineering",
    title: "Artisans recommandés",
    description: "Trouvez des pros pour ce style.",
  },
  {
    icon: "straighten",
    title: "Mesures automatiques",
    description: "Générez un plan détaillé.",
  },
];

/** Fiche détail d'une inspiration (maquette Stitch « Détails inspirations »). */
export function InspirationDetail({ inspiration }: { inspiration: Inspiration }) {
  const router = useRouter();

  return (
    <div className="bg-surface-m3 text-on-background-m3 font-body min-h-screen pb-24">
      <header className="bg-surface-m3/80 fixed top-0 z-50 flex h-16 w-full items-center justify-between px-margin-mobile shadow-sm backdrop-blur-md md:px-margin-desktop">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Revenir en arrière"
            onClick={() => router.history.back()}
            className="text-on-surface-variant hover:bg-surface-variant/50 flex items-center justify-center rounded-full p-2 transition-colors active:scale-95"
          >
            <MaterialIcon name="arrow_back" />
          </button>
          <span className="font-headline text-headline-md text-primary-m3 font-bold tracking-tight">
            RENOV IA
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Partager cette inspiration"
            className="text-on-surface-variant hover:bg-surface-variant/50 rounded-full p-2 transition-colors active:scale-95"
          >
            <MaterialIcon name="share" />
          </button>
          <button
            type="button"
            aria-label="Ajouter aux favoris"
            className="text-on-surface-variant hover:bg-surface-variant/50 rounded-full p-2 transition-colors active:scale-95"
          >
            <MaterialIcon name="favorite" />
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1440px] px-margin-mobile pt-16 md:px-margin-desktop">
        <section className="relative mb-10 mt-6 aspect-4/3 overflow-hidden rounded-[32px] shadow-[0px_10px_40px_rgba(0,0,0,0.04)] md:aspect-21/9">
          <img
            src={inspiration.afterImage}
            alt={`Rendu ${inspiration.title}`}
            className="size-full object-cover"
          />
          <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/50 to-transparent p-6 md:p-10">
            <div>
              <span className="font-body text-label-sm mb-3 inline-block rounded-full bg-black/30 px-3 py-1 uppercase tracking-wider text-white backdrop-blur-md">
                {inspiration.tag}
              </span>
              <h1 className="font-headline text-headline-lg-mobile md:text-headline-xl text-white">
                {inspiration.title}
              </h1>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          <div className="flex flex-col gap-8 md:col-span-8">
            <section className="bg-surface-container-lowest rounded-[32px] p-6 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] md:p-8">
              <h2 className="font-headline text-headline-md text-on-surface-m3 mb-4">
                À propos de ce style
              </h2>
              <p className="font-body text-body-lg text-on-surface-variant">
                {inspiration.description}
              </p>
            </section>

            <section className="bg-surface-container-lowest rounded-[32px] p-6 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] md:p-8">
              <h2 className="font-headline text-headline-md text-on-surface-m3 mb-4">
                Avant / Après
              </h2>
              <div className="group relative aspect-video w-full overflow-hidden rounded-2xl">
                <img
                  src={inspiration.afterImage}
                  alt={`Après — ${inspiration.title}`}
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-y-0 left-0 z-10 w-1/2 overflow-hidden border-r-2 border-white/50 transition-all duration-300 ease-in-out group-hover:w-3/4">
                  <img
                    src={inspiration.beforeImage}
                    alt={`Avant — ${inspiration.title}`}
                    className="absolute inset-0 h-full w-[200%] max-w-none object-cover"
                  />
                </div>
                <div className="absolute inset-y-0 left-1/2 z-20 -ml-4 flex items-center transition-all duration-300 ease-in-out group-hover:left-3/4">
                  <span className="flex size-8 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm">
                    <MaterialIcon name="swap_horiz" className="text-primary-m3 text-[16px]" />
                  </span>
                </div>
                <span className="font-body text-label-sm absolute bottom-4 left-4 z-20 rounded-full bg-black/50 px-3 py-1 text-white backdrop-blur-md">
                  Avant
                </span>
                <span className="font-body text-label-sm absolute bottom-4 right-4 z-20 rounded-full bg-black/50 px-3 py-1 text-white backdrop-blur-md">
                  Après
                </span>
              </div>
            </section>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FUTURE_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-surface-container-low border-outline-variant/30 hover:bg-surface-container-m3 flex items-start gap-4 rounded-[28px] border p-6 transition-colors"
                >
                  <span className="bg-secondary-container-m3 text-on-secondary-container-m3 flex size-12 shrink-0 items-center justify-center rounded-full">
                    <MaterialIcon name={feature.icon} />
                  </span>
                  <div>
                    <h3 className="font-body text-label-md text-on-surface-m3">{feature.title}</h3>
                    <p className="font-body text-body-md text-on-surface-variant mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="flex flex-col gap-6 md:col-span-4">
            <div className="bg-surface-container-lowest/80 border-outline-variant/20 sticky top-24 rounded-[32px] border p-6 shadow-[0px_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              <h2 className="font-headline text-headline-md text-on-surface-m3 mb-2">
                Prêt à transformer ?
              </h2>
              <p className="font-body text-body-md text-on-surface-variant mb-6">
                Appliquez ce style directement sur vos propres photos de pièces.
              </p>
              <Link
                to="/piece"
                className="bg-primary-m3 text-on-primary-m3 font-body text-label-md flex h-14 w-full items-center justify-center gap-2 rounded-2xl shadow-md transition-all hover:opacity-90 active:scale-95"
              >
                <MaterialIcon name="auto_awesome" filled className="text-[20px]" />
                Utiliser ce style
              </Link>
              <button
                type="button"
                className="border-outline-m3 text-on-surface-m3 font-body text-label-md hover:bg-surface-container-low mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-2xl border transition-all active:scale-95"
              >
                <MaterialIcon name="bookmark_add" className="text-[20px]" />
                Sauvegarder l'idée
              </button>
            </div>

            <section className="bg-surface-container-lowest rounded-[32px] p-6 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
              <h2 className="font-headline text-headline-md text-on-surface-m3 mb-4">
                Palette de couleurs
              </h2>
              <div className="flex flex-wrap gap-4">
                {inspiration.palette.map((color) => (
                  <div key={color.name} className="flex w-16 flex-col items-center gap-2">
                    <span
                      className="border-outline-variant/20 size-14 rounded-full border shadow-inner"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="font-body text-label-sm text-on-surface-variant text-center">
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-surface-container-lowest rounded-[32px] p-6 shadow-[0px_10px_40px_rgba(0,0,0,0.04)]">
              <h2 className="font-headline text-headline-md text-on-surface-m3 mb-4">
                Matériaux clés
              </h2>
              <ul className="space-y-3">
                {inspiration.materials.map((material) => (
                  <li key={material} className="flex items-center gap-3">
                    <MaterialIcon name="check_circle" filled className="text-secondary-m3" />
                    <span className="font-body text-body-md text-on-surface-m3">{material}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}