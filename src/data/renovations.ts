import salon from "@/assets/rooms/salon.jpg";
import cuisine from "@/assets/rooms/cuisine.jpg";
import chambre from "@/assets/rooms/chambre.jpg";
import salleDeBain from "@/assets/rooms/salle-de-bain.jpg";
import bureau from "@/assets/rooms/bureau.jpg";
import salleAManger from "@/assets/rooms/salle-a-manger.jpg";
import scandinave from "@/assets/styles/scandinave.jpg";
import industriel from "@/assets/styles/industriel.jpg";
import japandi from "@/assets/styles/japandi.jpg";
import minimaliste from "@/assets/styles/minimaliste.jpg";
import moderne from "@/assets/styles/moderne.jpg";
import luxury from "@/assets/styles/luxury.jpg";

export interface Renovation {
  id: string;
  title: string;
  style: string;
  /** Date affichée, déjà formatée en français. */
  date: string;
  beforeImage: string;
  afterImage: string;
}

/** Projets de rénovation de l'utilisateur (données de démonstration). */
export const RENOVATIONS: Renovation[] = [
  {
    id: "salon-principal",
    title: "Salon Principal",
    style: "Scandinave",
    date: "12 Octobre 2023",
    beforeImage: salon,
    afterImage: scandinave,
  },
  {
    id: "cuisine-ouverte",
    title: "Cuisine Ouverte",
    style: "Industriel",
    date: "05 Septembre 2023",
    beforeImage: cuisine,
    afterImage: industriel,
  },
  {
    id: "chambre-maitre",
    title: "Chambre Maître",
    style: "Japandi",
    date: "28 Août 2023",
    beforeImage: chambre,
    afterImage: japandi,
  },
  {
    id: "salle-de-bain",
    title: "Salle de Bain",
    style: "Minimaliste",
    date: "14 Août 2023",
    beforeImage: salleDeBain,
    afterImage: minimaliste,
  },
  {
    id: "bureau-atelier",
    title: "Bureau Atelier",
    style: "Moderne",
    date: "02 Juillet 2023",
    beforeImage: bureau,
    afterImage: moderne,
  },
  {
    id: "salle-a-manger",
    title: "Salle à Manger",
    style: "Luxury",
    date: "19 Juin 2023",
    beforeImage: salleAManger,
    afterImage: luxury,
  },
];
