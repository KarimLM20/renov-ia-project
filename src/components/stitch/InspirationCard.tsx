import { MaterialIcon } from "./MaterialIcon";
import type { Inspiration } from "@/data/inspirations";

/** Carte « Avant / Après » du carrousel d'inspiration. */
export function InspirationCard({ inspiration }: { inspiration: Inspiration }) {
  return (
    <article className="group glass-panel relative flex min-w-[85vw] snap-center flex-col gap-4 overflow-hidden rounded-[32px] p-6 md:min-w-[600px]">
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
        <div
          className="bg-surface-container-high absolute inset-0 size-full bg-cover bg-center"
          style={{ backgroundImage: `url(${inspiration.beforeImage})` }}
          role="img"
          aria-label={`Avant — ${inspiration.title}`}
        />
        <div
          className="absolute inset-y-0 left-[60%] z-10 w-[40%] border-l-2 border-white/50 bg-cover bg-center transition-all duration-500 group-hover:left-0 group-hover:w-full"
          style={{ backgroundImage: `url(${inspiration.afterImage})` }}
          role="img"
          aria-label={`Après — ${inspiration.title}`}
        />
        <div className="absolute left-0 top-1/2 z-20 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
          <MaterialIcon name="code" className="text-primary-m3 text-[14px]" />
        </div>
        <span className="font-body text-label-sm absolute left-4 top-4 z-0 rounded-full bg-black/50 px-3 py-1 text-white backdrop-blur-sm">
          Avant
        </span>
        <span className="font-body text-label-sm bg-primary-m3/80 absolute right-4 top-4 z-20 rounded-full px-3 py-1 text-white backdrop-blur-sm">
          Après
        </span>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <div>
          <h4 className="font-headline text-headline-md text-on-background-m3">{inspiration.title}</h4>
          <p className="font-body text-body-md text-on-surface-variant">{inspiration.subtitle}</p>
        </div>
        <button
          type="button"
          aria-label={`Voir ${inspiration.title}`}
          className="bg-surface-container-low hover:bg-tertiary-fixed text-tertiary-m3 flex size-12 items-center justify-center rounded-full transition-colors"
        >
          <MaterialIcon name="arrow_forward" />
        </button>
      </div>
    </article>
  );
}