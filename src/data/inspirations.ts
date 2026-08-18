import scandinave from "@/assets/styles/scandinave.jpg";
import minimaliste from "@/assets/styles/minimaliste.jpg";
import heroRoom from "@/assets/hero-room.jpg";
import rustique from "@/assets/styles/rustique.jpg";

export interface Inspiration {
  id: string;
  title: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
}

/** Données simulées du carrousel « Inspiration Avant / Après ». */
export const INSPIRATIONS: Inspiration[] = [
  {
    id: "salon-scandinave",
    title: "Salon Scandinave",
    subtitle: "Transformation en 30 secondes",
    beforeImage: heroRoom,
    afterImage: scandinave,
  },
  {
    id: "cuisine-minimaliste",
    title: "Cuisine Minimaliste",
    subtitle: "Style Terracotta & Blanc",
    beforeImage: rustique,
    afterImage: minimaliste,
  },
];