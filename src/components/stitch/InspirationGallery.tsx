import { InspirationCard } from "./InspirationCard";
import { INSPIRATIONS, type Inspiration } from "@/data/inspirations";

/** Section « Inspiration Avant / Après » en défilement horizontal. */
export function InspirationGallery({ items = INSPIRATIONS }: { items?: Inspiration[] }) {
  return (
    <section className="relative px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="mb-10 flex flex-col gap-2 text-center md:text-left">
        <h3 className="font-headline text-headline-lg-mobile text-on-background-m3 md:text-headline-lg">
          Inspiration Avant / Après
        </h3>
        <p className="font-body text-body-md text-on-surface-variant">
          Glissez pour voir la magie opérer sur différents espaces.
        </p>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-gutter overflow-x-auto pb-8">
        {items.map((item) => (
          <InspirationCard key={item.id} inspiration={item} />
        ))}
      </div>
    </section>
  );
}