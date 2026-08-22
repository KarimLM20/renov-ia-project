import salon from "@/assets/rooms/salon.jpg";
import cuisine from "@/assets/rooms/cuisine.jpg";
import chambre from "@/assets/rooms/chambre.jpg";
import salleDeBain from "@/assets/rooms/salle-de-bain.jpg";
import salleAManger from "@/assets/rooms/salle-a-manger.jpg";
import bureau from "@/assets/rooms/bureau.jpg";
import entree from "@/assets/rooms/entree.jpg";
import exterieur from "@/assets/rooms/exterieur.jpg";
import japandi from "@/assets/styles/japandi.jpg";
import scandinave from "@/assets/styles/scandinave.jpg";
import minimaliste from "@/assets/styles/minimaliste.jpg";
import moderne from "@/assets/styles/moderne.jpg";
import boheme from "@/assets/styles/boheme.jpg";
import industriel from "@/assets/styles/industriel.jpg";

export type GalleryRoom =
  | "salon"
  | "cuisine"
  | "chambre"
  | "salle-de-bain"
  | "bureau"
  | "salle-a-manger"
  | "entree"
  | "exterieur";

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  room: GalleryRoom;
  style: string;
  /** Ratio d'affichage dans la grille masonry. */
  ratio: "tall" | "medium" | "square";
  /** Fiche détail associée, si elle existe. */
  detailId?: string;
}

/** Filtres de pièce affichés en chips horizontales. */
export const GALLERY_ROOM_FILTERS: { id: GalleryRoom | "all"; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "salon", label: "Salon" },
  { id: "cuisine", label: "Cuisine" },
  { id: "chambre", label: "Chambre" },
  { id: "salle-de-bain", label: "Salle de bain" },
  { id: "bureau", label: "Bureau" },
  { id: "salle-a-manger", label: "Salle à manger" },
  { id: "entree", label: "Entrée" },
  { id: "exterieur", label: "Extérieur" },
];

export const GALLERY_STYLE_FILTERS = [
  "Japandi",
  "Scandinave",
  "Minimaliste",
  "Moderne",
  "Bohème",
  "Industriel",
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "salon-minimaliste",
    title: "Salon Minimaliste",
    subtitle: "Style Japandi",
    image: salon,
    room: "salon",
    style: "Japandi",
    ratio: "tall",
    detailId: "salon-scandinave",
  },
  {
    id: "salle-de-bain-travertin",
    title: "Salle de bain Travertin",
    subtitle: "Pierre & Chêne",
    image: salleDeBain,
    room: "salle-de-bain",
    style: "Minimaliste",
    ratio: "tall",
  },
  {
    id: "cuisine-epuree",
    title: "Cuisine Épurée",
    subtitle: "Marbre & Laiton",
    image: cuisine,
    room: "cuisine",
    style: "Moderne",
    ratio: "medium",
    detailId: "cuisine-minimaliste",
  },
  {
    id: "chambre-sereine",
    title: "Chambre Sereine",
    subtitle: "Bois naturel & Lin",
    image: chambre,
    room: "chambre",
    style: "Scandinave",
    ratio: "square",
  },
  {
    id: "salle-a-manger-conviviale",
    title: "Salle à manger conviviale",
    subtitle: "Chêne massif",
    image: salleAManger,
    room: "salle-a-manger",
    style: "Scandinave",
    ratio: "medium",
  },
  {
    id: "bureau-focus",
    title: "Bureau Focus",
    subtitle: "Lignes nettes",
    image: bureau,
    room: "bureau",
    style: "Minimaliste",
    ratio: "tall",
  },
  {
    id: "salon-japandi",
    title: "Salon Japandi",
    subtitle: "Sérénité japonaise",
    image: japandi,
    room: "salon",
    style: "Japandi",
    ratio: "square",
  },
  {
    id: "entree-accueillante",
    title: "Entrée accueillante",
    subtitle: "Première impression",
    image: entree,
    room: "entree",
    style: "Moderne",
    ratio: "medium",
  },
  {
    id: "salon-boheme",
    title: "Salon Bohème",
    subtitle: "Textiles & Rotin",
    image: boheme,
    room: "salon",
    style: "Bohème",
    ratio: "tall",
  },
  {
    id: "loft-industriel",
    title: "Loft Industriel",
    subtitle: "Métal & Brique",
    image: industriel,
    room: "salon",
    style: "Industriel",
    ratio: "medium",
  },
  {
    id: "chambre-scandinave",
    title: "Chambre Scandinave",
    subtitle: "Douceur nordique",
    image: scandinave,
    room: "chambre",
    style: "Scandinave",
    ratio: "square",
  },
  {
    id: "cuisine-moderne",
    title: "Cuisine Moderne",
    subtitle: "Îlot central",
    image: moderne,
    room: "cuisine",
    style: "Moderne",
    ratio: "tall",
  },
  {
    id: "terrasse-lumineuse",
    title: "Terrasse lumineuse",
    subtitle: "Extérieur repensé",
    image: exterieur,
    room: "exterieur",
    style: "Minimaliste",
    ratio: "medium",
  },
  {
    id: "sejour-minimaliste",
    title: "Séjour Minimaliste",
    subtitle: "Épure absolue",
    image: minimaliste,
    room: "salon",
    style: "Minimaliste",
    ratio: "square",
  },
];
