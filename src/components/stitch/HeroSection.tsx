import { Link } from "@tanstack/react-router";
import { MaterialIcon } from "./MaterialIcon";

const STATS = [
  { value: "+1M", label: "rénovations" },
  { value: "30+", label: "styles" },
] as const;

/** Section héros de l'accueil (maquette Stitch). */
export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-margin-mobile pb-16 pt-16 text-center md:px-margin-desktop md:pt-32">
      <div className="ambient-glow-bg" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8">
        <div className="glass-panel mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2">
          <MaterialIcon name="auto_awesome" filled className="text-primary-m3 text-[14px]" />
          <span className="font-body text-label-md text-on-surface-variant">
            Propulsé par l'IA générative
          </span>
        </div>

        <h2 className="font-headline text-headline-lg-mobile text-on-background-m3 tracking-tight md:text-headline-xl">
          Transformez votre intérieur grâce à l'IA
        </h2>
        <p className="font-body text-body-md text-on-surface-variant max-w-2xl md:text-body-lg">
          Prenez une photo et découvrez votre futur intérieur.
        </p>

        <div className="mt-6 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link
            to="/piece"
            className="bg-primary-m3 text-on-primary-m3 font-body text-label-md flex h-14 items-center justify-center gap-2 rounded-full px-8 shadow-[0px_8px_20px_rgba(137,76,50,0.2)] transition-all hover:opacity-90 active:scale-95"
          >
            <MaterialIcon name="photo_camera" />
            Prendre une photo
          </Link>
          <Link
            to="/piece"
            className="bg-surface-container-lowest border-outline-variant text-on-surface-m3 font-body text-label-md hover:bg-surface-variant flex h-14 items-center justify-center gap-2 rounded-full border px-8 transition-all active:scale-95"
          >
            <MaterialIcon name="upload" />
            Importer une photo
          </Link>
        </div>

        <div className="glass-panel mt-16 flex w-full max-w-3xl flex-wrap justify-center gap-8 rounded-2xl px-12 py-6 md:gap-16">
          {STATS.map((stat, index) => (
            <div key={stat.label} className="contents">
              {index > 0 && <div className="bg-outline-variant/30 hidden h-12 w-px sm:block" />}
              <div className="flex flex-col items-center">
                <span className="font-headline text-headline-md text-primary-m3">{stat.value}</span>
                <span className="font-body text-label-sm text-on-surface-variant mt-1 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
          <div className="bg-outline-variant/30 hidden h-12 w-px sm:block" />
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="font-headline text-headline-md text-primary-m3">4.9</span>
              <MaterialIcon name="star" filled className="text-primary-m3 text-[14px]" />
            </div>
            <span className="font-body text-label-sm text-on-surface-variant mt-1 uppercase tracking-widest">
              sur 5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}