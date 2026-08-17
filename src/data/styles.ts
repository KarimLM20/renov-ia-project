/**
 * Catalogue des styles de décoration proposés à l'utilisateur.
 * Les visuels servent aussi d'images de démonstration ("mock") pour la
 * génération IA tant qu'aucun fournisseur réel n'est branché.
 */
import moderne from "@/assets/styles/moderne.jpg";
import scandinave from "@/assets/styles/scandinave.jpg";
import industriel from "@/assets/styles/industriel.jpg";
import minimaliste from "@/assets/styles/minimaliste.jpg";
import japandi from "@/assets/styles/japandi.jpg";
import contemporain from "@/assets/styles/contemporain.jpg";
import boheme from "@/assets/styles/boheme.jpg";
import classique from "@/assets/styles/classique.jpg";
import rustique from "@/assets/styles/rustique.jpg";
import luxury from "@/assets/styles/luxury.jpg";

export interface DesignStyle {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const DESIGN_STYLES: DesignStyle[] = [
  { id: "moderne", name: "Moderne", description: "Lignes nettes, palette neutre", image: moderne },
  { id: "scandinave", name: "Scandinave", description: "Bois clair et douceur", image: scandinave },
  { id: "industriel", name: "Industriel", description: "Brique, métal, caractère", image: industriel },
  { id: "minimaliste", name: "Minimaliste", description: "L'essentiel, rien de plus", image: minimaliste },
  { id: "japandi", name: "Japandi", description: "Zen et naturel", image: japandi },
  { id: "contemporain", name: "Contemporain", description: "Courbes et lumière", image: contemporain },
  { id: "boheme", name: "Bohème", description: "Textures et couleurs chaudes", image: boheme },
  { id: "classique", name: "Classique", description: "Élégance intemporelle", image: classique },
  { id: "rustique", name: "Rustique", description: "Bois brut et authenticité", image: rustique },
  { id: "luxury", name: "Luxury", description: "Marbre, laiton, velours", image: luxury },
];