import { Link } from "@tanstack/react-router";

import { MaterialIcon } from "./MaterialIcon";
import type { Renovation } from "@/data/renovations";

/** Carte projet « Mes rénovations » avec double visuel Avant / Après. */
export function RenovationCard({ renovation }: { renovation: Renovation }) {
  return (
    <article className="group overflow-hidden rounded-[24px] bg-surface-m3 shadow-[0px_10px_40px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0px_16px_50px_rgba(0,0,0,0.12)]">
      {/* Double image Avant / Après */}
      <div className="relative aspect-[4/3] w-full">
        <div className="absolute inset-0 flex">
          <div className="relative w-1/2 overflow-hidden">
            <img
              src={renovation.beforeImage}
              alt={`Avant — ${renovation.title}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <span className="font-body text-label-sm absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-white backdrop-blur-sm">
              Avant
            </span>
          </div>
          <div className="relative w-1/2 overflow-hidden border-l border-white/40">
            <img
              src={renovation.afterImage}
              alt={`Après — ${renovation.title}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <span className="font-body text-label-sm bg-primary-m3/80 absolute right-3 top-3 rounded-full px-2.5 py-1 text-white backdrop-blur-sm">
              Après
            </span>
          </div>
        </div>
      </div>

      {/* Infos */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-headline text-headline-md text-on-surface-m3 leading-tight">
            {renovation.title}
          </h3>
          <span className="font-body text-label-sm shrink-0 rounded-full bg-secondary-container-m3 px-3 py-1 text-on-secondary-container-m3">
            {renovation.style}
          </span>
        </div>

        <div className="mt-2 flex items-center gap-1.5 text-on-surface-variant">
          <MaterialIcon name="calendar_today" className="text-[16px]" />
          <span className="font-body text-label-md">{renovation.date}</span>
        </div>

        <Link
          to="/renovation/$id"
          params={{ id: renovation.id }}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary-m3 px-6 py-3 font-body text-label-md font-semibold text-on-primary-m3 transition-transform duration-200 hover:bg-primary-m3/90 active:scale-95"
        >
          Ouvrir le projet
        </Link>
      </div>
    </article>
  );
}
