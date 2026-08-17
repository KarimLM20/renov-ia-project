/** Types de pièces proposés à l'étape 2 du parcours. */
import {
  Sofa,
  CookingPot,
  BedDouble,
  Bath,
  Briefcase,
  Utensils,
  DoorOpen,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface Room {
  id: string;
  name: string;
  icon: LucideIcon;
}

export const ROOMS: Room[] = [
  { id: "salon", name: "Salon", icon: Sofa },
  { id: "cuisine", name: "Cuisine", icon: CookingPot },
  { id: "chambre", name: "Chambre", icon: BedDouble },
  { id: "salle-de-bain", name: "Salle de bain", icon: Bath },
  { id: "bureau", name: "Bureau", icon: Briefcase },
  { id: "salle-a-manger", name: "Salle à manger", icon: Utensils },
  { id: "entree", name: "Entrée", icon: DoorOpen },
  { id: "autre", name: "Autre", icon: Sparkles },
];