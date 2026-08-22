import type { FileRouteTypes } from "@/routeTree.gen";

export type AppRoute = FileRouteTypes["to"];

export interface NavItem {
  label: string;
  icon: string;
  to: AppRoute;
}

/** Navigation principale (barre du bas mobile + nav desktop). */
export const PRIMARY_NAV: NavItem[] = [
  { label: "Accueil", icon: "home", to: "/" },
  { label: "Mes rénos", icon: "architecture", to: "/" },
  { label: "Inspirations", icon: "auto_awesome", to: "/inspirations" },
  { label: "Profil", icon: "person", to: "/" },
];