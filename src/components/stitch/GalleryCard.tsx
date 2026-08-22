import { Link } from "@tanstack/react-router";
import type { GalleryItem } from "@/data/gallery";

const RATIO_CLASS: Record<GalleryItem["ratio"], string> = {
  tall: "aspect-[3/4]",
  medium: "aspect-[4/5]",
  square: "aspect-square",
};

/** Vignette de la galerie masonry « Inspirations ». */
export function GalleryCard({ item }: { item: GalleryItem }) {
  const content = (
    <>
      <img
        src={item.image}
        alt={`${item.title} — ${item.subtitle}`}
        loading="lazy"
        className={`w-full ${RATIO_CLASS[item.ratio]} object-cover transition-transform duration-500 group-hover:scale-[1.04]`}
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="font-body text-label-md font-semibold text-white">{item.title}</p>
        <p className="font-body text-label-sm text-white/80">{item.subtitle}</p>
      </div>
    </>
  );

  const className =
    "masonry-item group relative block cursor-pointer overflow-hidden rounded-[24px] bg-surface-m3 shadow-[0px_10px_40px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0px_16px_50px_rgba(0,0,0,0.12)]";

  if (item.detailId) {
    return (
      <Link to="/inspiration/$id" params={{ id: item.detailId }} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
