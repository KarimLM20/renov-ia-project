import { Link } from "@tanstack/react-router";
import { MaterialIcon } from "./MaterialIcon";
import { PRIMARY_NAV } from "@/config/navigation";

/** Barre de navigation inférieure (mobile uniquement). */
export function BottomNavigation({ active = "Accueil" }: { active?: string }) {
  return (
    <nav className="bg-surface-m3/80 fixed bottom-0 z-50 flex h-20 w-full items-center justify-around rounded-t-[2rem] px-margin-mobile shadow-[0px_-10px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl md:hidden">
      {PRIMARY_NAV.map((item) => {
        const isActive = item.label === active;
        return (
          <Link
            key={item.label}
            to={item.to}
            className={
              isActive
                ? "bg-primary-container-m3 text-on-primary-container-m3 flex flex-col items-center justify-center rounded-[1.5rem] px-4 py-1 transition-all duration-200 active:scale-90"
                : "text-secondary-m3 hover:bg-secondary-container-m3/50 flex flex-col items-center justify-center px-4 py-1 transition-all duration-200 active:scale-90"
            }
          >
            <MaterialIcon name={item.icon} filled={isActive} className="mb-1" />
            <span className="font-body text-label-sm">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}