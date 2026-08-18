import { Link } from "@tanstack/react-router";
import { MaterialIcon } from "./MaterialIcon";
import { PRIMARY_NAV } from "@/config/navigation";

/** Barre supérieure fixe (mobile + desktop) des maquettes Stitch. */
export function TopAppBar() {
  const desktopNav = PRIMARY_NAV.filter((item) => item.label !== "Profil");

  return (
    <header className="bg-surface-m3/80 fixed top-0 z-50 flex h-16 w-full items-center justify-between px-margin-mobile shadow-sm backdrop-blur-md md:px-margin-desktop">
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="text-on-surface-variant hover:bg-surface-variant flex items-center justify-center rounded-full p-2 transition-all active:scale-95 md:hidden"
        >
          <MaterialIcon name="menu" />
        </button>
        <h1 className="font-headline text-headline-md text-primary-m3 font-bold tracking-tight">
          RENOV IA
        </h1>
      </div>

      <nav className="hidden items-center gap-8 md:flex">
        {desktopNav.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="font-body text-label-md text-on-surface-variant transition-opacity hover:opacity-80"
            activeProps={{ className: "text-primary-m3 font-bold" }}
            activeOptions={{ exact: true }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center">
        <button
          type="button"
          aria-label="Profil"
          className="bg-secondary-container-m3 border-outline-variant flex size-8 items-center justify-center overflow-hidden rounded-full border transition-opacity hover:opacity-80"
        >
          <MaterialIcon name="person" filled className="text-on-secondary-container-m3 text-[20px]" />
        </button>
      </div>
    </header>
  );
}