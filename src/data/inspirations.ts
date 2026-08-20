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
  /** Étiquette affichée sur le héros de la fiche détail. */
  tag: string;
  /** Texte « À propos de ce style ». */
  description: string;
  palette: { name: string; hex: string }[];
  materials: string[];
}

/** Données simulées du carrousel « Inspiration Avant / Après ». */
export const INSPIRATIONS: Inspiration[] = [
  {
    id: "salon-scandinave",
    title: "Salon Scandinave",
    subtitle: "Transformation en 30 secondes",
    beforeImage: heroRoom,
    afterImage: scandinave,
    tag: "Minimalisme chaleureux",
    description:
      "Ce design marie l'élégance du minimalisme architectural avec la chaleur des matériaux naturels. L'utilisation stratégique de la lumière naturelle et des espaces négatifs crée une atmosphère respirable et luxueuse. Parfait pour les espaces de vie ouverts cherchant à allier fonctionnalité moderne et confort intemporel.",
    palette: [
      { name: "Lin Blanc", hex: "#f4f3f0" },
      { name: "Gris Nuage", hex: "#e3e2df" },
      { name: "Sable Doux", hex: "#d8c2ba" },
      { name: "Terre Cuite", hex: "#894c32" },
      { name: "Sauge", hex: "#565f48" },
    ],
    materials: ["Bois de chêne clair", "Tissus bouclette", "Céramique mate"],
  },
  {
    id: "cuisine-minimaliste",
    title: "Cuisine Minimaliste",
    subtitle: "Style Terracotta & Blanc",
    beforeImage: rustique,
    afterImage: minimaliste,
    tag: "Épure contemporaine",
    description:
      "Une cuisine pensée comme un espace de vie : façades sans poignées, plans de travail continus et rangements invisibles. Les touches de terracotta réchauffent le blanc dominant et donnent du caractère à une composition volontairement sobre.",
    palette: [
      { name: "Blanc Craie", hex: "#ffffff" },
      { name: "Lin Blanc", hex: "#f4f3f0" },
      { name: "Sable Doux", hex: "#d8c2ba" },
      { name: "Terre Cuite", hex: "#894c32" },
      { name: "Graphite", hex: "#53433e" },
    ],
    materials: ["Plan de travail en pierre", "Chêne huilé", "Laiton brossé"],
  },
];

export function getInspiration(id: string): Inspiration | undefined {
  return INSPIRATIONS.find((item) => item.id === id);
}