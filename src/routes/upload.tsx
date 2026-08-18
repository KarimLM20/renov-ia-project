import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/renov/Header";
import { Footer } from "@/components/renov/Footer";
import { Hero } from "@/components/renov/Hero";
import { HowItWorks } from "@/components/renov/HowItWorks";
import { UploadZone } from "@/components/renov/UploadZone";
import { PhotoPreview } from "@/components/renov/PhotoPreview";
import { RoomSelector } from "@/components/renov/RoomSelector";
import { StyleSelector } from "@/components/renov/StyleSelector";
import { LoadingScreen } from "@/components/renov/LoadingScreen";
import { BeforeAfterSlider } from "@/components/renov/BeforeAfterSlider";
import { ResultActions } from "@/components/renov/ResultActions";
import { StepIndicator } from "@/components/renov/StepIndicator";
import { useRenovationFlow } from "@/hooks/useRenovationFlow";
import { downloadImage } from "@/lib/image";

const TITLE = "RENOV IA — Transformez votre intérieur grâce à l'IA";
const DESCRIPTION =
  "Importez une photo de votre pièce et découvrez votre future décoration en quelques secondes, avec un comparateur avant / après.";

export const Route = createFileRoute("/upload")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STEP_LABELS = ["Photo", "Pièce", "Style", "Résultat"];

/** Page unique orchestrant tout le parcours Avant / Après. */
function Index() {
  const flow = useRenovationFlow();
  const workspaceRef = useRef<HTMLDivElement>(null);

  // Amène l'utilisateur sur l'étape courante en douceur.
  useEffect(() => {
    if (flow.step === "home") return;
    workspaceRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [flow.step]);

  const stepIndex =
    flow.step === "room" ? 1 : flow.step === "style" || flow.step === "loading" ? 2 : flow.step === "result" ? 3 : 0;

  const handleShare = async () => {
    const shareData = { title: "RENOV IA", text: "Regardez la transformation de ma pièce !", url: window.location.href };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        toast.success("Lien copié dans le presse-papier");
      }
    } catch {
      /* partage annulé par l'utilisateur */
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onLogoClick={flow.reset} />

      <main className="flex-1">
        {flow.step === "home" && (
          <>
            <Hero onImport={() => flow.setStep("upload")} onCapture={() => flow.setStep("upload")} />
            <HowItWorks />
          </>
        )}

        <div ref={workspaceRef} className="scroll-mt-20">
          {flow.step !== "home" && (
            <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
              <StepIndicator steps={STEP_LABELS} current={stepIndex} />

              {/* Étape 1 — import */}
              {flow.step === "upload" && (
                <div className="mt-10">
                  <SectionTitle
                    title="Importez votre photo"
                    subtitle="Une photo bien cadrée donne le meilleur résultat."
                  />
                  <UploadZone onFileSelected={flow.selectFile} />
                </div>
              )}

              {/* Aperçu */}
              {flow.step === "preview" && flow.originalUrl && (
                <div className="mt-10">
                  <SectionTitle title="Votre photo" subtitle="Tout est bon ? Passons à la suite." />
                  <PhotoPreview
                    imageUrl={flow.originalUrl}
                    onContinue={() => flow.setStep("room")}
                    onReplace={() => flow.setStep("upload")}
                  />
                </div>
              )}

              {/* Étape 2 — pièce */}
              {flow.step === "room" && (
                <div className="mt-10">
                  <SectionTitle
                    title="Quelle pièce transformer ?"
                    subtitle="Sélectionnez le type de pièce sur la photo."
                  />
                  <RoomSelector value={flow.roomId} onChange={flow.setRoomId} />
                  <NavRow
                    onBack={() => flow.setStep("preview")}
                    nextLabel="Choisir un style"
                    onNext={() => flow.setStep("style")}
                    nextDisabled={!flow.roomId}
                  />
                </div>
              )}

              {/* Étape 3 — style */}
              {flow.step === "style" && (
                <div className="mt-10">
                  <SectionTitle
                    title="Choisissez votre style"
                    subtitle="Chaque style réinvente votre pièce à sa manière."
                  />
                  <StyleSelector value={flow.styleId} onChange={flow.setStyleId} />
                  {flow.error && (
                    <p className="mt-6 text-center text-sm text-destructive">{flow.error}</p>
                  )}
                  <NavRow
                    onBack={() => flow.setStep("room")}
                    nextLabel="Générer"
                    nextIcon={<Sparkles className="size-4" />}
                    onNext={flow.generate}
                    nextDisabled={!flow.styleId}
                  />
                </div>
              )}

              {/* Étape 4 — génération */}
              {flow.step === "loading" && (
                <div className="mt-10">
                  <LoadingScreen />
                </div>
              )}

              {/* Résultat */}
              {flow.step === "result" && flow.originalUrl && flow.generatedUrl && (
                <div className="mt-10 appear">
                  <SectionTitle
                    title="Votre pièce, réinventée"
                    subtitle="Déplacez le curseur pour comparer l'avant et l'après."
                  />
                  <div className="mx-auto max-w-3xl">
                    <BeforeAfterSlider
                      beforeUrl={flow.originalUrl}
                      afterUrl={flow.generatedUrl}
                    />
                    <div className="mt-8">
                      <ResultActions
                        onDownload={() =>
                          void downloadImage(flow.generatedUrl!, "renov-ia.jpg").catch(() =>
                            toast.error("Téléchargement impossible"),
                          )
                        }
                        onShare={handleShare}
                        onRegenerate={flow.generate}
                        onChangeStyle={() => flow.setStep("style")}
                      />
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

/** Titre de section réutilisable. */
function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-8 text-center appear">
      <h2 className="text-3xl">{title}</h2>
      <p className="mt-2 text-muted-foreground">{subtitle}</p>
    </div>
  );
}

/** Barre de navigation entre les étapes. */
function NavRow({
  onBack,
  onNext,
  nextLabel,
  nextDisabled,
  nextIcon,
}: {
  onBack: () => void;
  onNext: () => void;
  nextLabel: string;
  nextDisabled?: boolean;
  nextIcon?: React.ReactNode;
}) {
  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      <Button variant="ghost" className="rounded-full" onClick={onBack}>
        <ArrowLeft className="size-4" />
        Retour
      </Button>
      <Button size="lg" className="rounded-full px-8" onClick={onNext} disabled={nextDisabled}>
        {nextIcon}
        {nextLabel}
        {!nextIcon && <ArrowRight className="size-4" />}
      </Button>
    </div>
  );
}
