/** Pied de page minimaliste. */
export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center">
        <p className="font-display text-base font-semibold">RENOV IA</p>
        <p className="text-sm text-muted-foreground">
          Visualisez votre intérieur autrement. Images générées à titre d'inspiration.
        </p>
        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} RENOV IA
        </p>
      </div>
    </footer>
  );
}