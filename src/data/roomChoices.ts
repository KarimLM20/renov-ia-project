import salon from "@/assets/rooms/salon.jpg";
import cuisine from "@/assets/rooms/cuisine.jpg";
import chambre from "@/assets/rooms/chambre.jpg";
import salleDeBain from "@/assets/rooms/salle-de-bain.jpg";
import bureau from "@/assets/rooms/bureau.jpg";
import salleAManger from "@/assets/rooms/salle-a-manger.jpg";
import entree from "@/assets/rooms/entree.jpg";
import exterieur from "@/assets/rooms/exterieur.jpg";

export interface RoomChoice {
  id: string;
  name: string;
  image: string;
  alt: string;
  /** Mise en avant façon bento (grande carte). */
  feature?: "hero" | "wide";
}

/** Pièces proposées à l'écran « Choisir la pièce » (maquette Stitch). */
export const ROOM_CHOICES: RoomChoice[] = [
  {
    id: "salon",
    name: "Salon",
    image: salon,
    alt: "Salon minimaliste lumineux aux tons neutres",
    feature: "hero",
  },
  { id: "cuisine", name: "Cuisine", image: cuisine, alt: "Cuisine moderne épurée blanche et bois" },
  { id: "chambre", name: "Chambre", image: chambre, alt: "Chambre apaisante au lit bas et lin blanc" },
  {
    id: "salle-de-bain",
    name: "Salle de bain",
    image: salleDeBain,
    alt: "Salle de bain haut de gamme avec baignoire îlot",
  },
  { id: "bureau", name: "Bureau", image: bureau, alt: "Bureau à domicile minimaliste en chêne" },
  {
    id: "salle-a-manger",
    name: "Salle à manger",
    image: salleAManger,
    alt: "Salle à manger élégante avec grande table en bois",
    feature: "wide",
  },
  { id: "entree", name: "Entrée", image: entree, alt: "Entrée épurée avec console et miroir rond" },
  { id: "exterieur", name: "Extérieur", image: exterieur, alt: "Terrasse extérieure contemporaine" },
];