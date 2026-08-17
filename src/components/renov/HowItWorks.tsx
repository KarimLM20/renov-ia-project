import { ImagePlus, Palette, Wand2 } from "lucide-react";

const STEPS = [
  { icon: ImagePlus, title: "Importez", text: "Une photo de votre pièce, depuis votre mobile ou votre ordinateur." },
  { icon: Palette, title: "Choisissez", text: "La pièce concernée puis le style qui vous ressemble." },
  { icon: Wand2, title: "Comparez", text: "Faites glisser le curseur entre l'avant et l'après." },
];

/** Explication du parcours en trois temps. */
export function HowItWorks() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 md:py-20">
      <div className="grid gap-4 sm:grid-cols-3">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <article
              key={step.title}
              style={{ animationDelay: `${index * 80}ms` }}
              className="card-premium hover-lift appear p-7"
            >
              <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-xl">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}