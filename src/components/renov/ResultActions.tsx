import { Download, Palette, RefreshCw, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResultActionsProps {
  onDownload: () => void;
  onShare: () => void;
  onRegenerate: () => void;
  onChangeStyle: () => void;
}

/** Actions disponibles sous le comparateur. */
export function ResultActions({
  onDownload,
  onShare,
  onRegenerate,
  onChangeStyle,
}: ResultActionsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Button size="lg" className="rounded-full px-7" onClick={onDownload}>
        <Download className="size-4" />
        Télécharger
      </Button>
      <Button size="lg" variant="outline" className="rounded-full bg-card" onClick={onShare}>
        <Share2 className="size-4" />
        Partager
      </Button>
      <Button size="lg" variant="outline" className="rounded-full bg-card" onClick={onRegenerate}>
        <RefreshCw className="size-4" />
        Nouvelle génération
      </Button>
      <Button size="lg" variant="ghost" className="rounded-full" onClick={onChangeStyle}>
        <Palette className="size-4" />
        Changer de style
      </Button>
    </div>
  );
}