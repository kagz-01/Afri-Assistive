import { Contrast, Languages, Type } from "lucide-react";
import { t } from "@/lib/i18n";
import { useAfriStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

export function A11yBar({ inverse = false }: { inverse?: boolean }) {
  const locale = useAfriStore((s) => s.locale);
  const textScale = useAfriStore((s) => s.textScale);
  const contrast = useAfriStore((s) => s.contrast);
  const setLocale = useAfriStore((s) => s.setLocale);
  const setTextScale = useAfriStore((s) => s.setTextScale);
  const setContrast = useAfriStore((s) => s.setContrast);

  const nextScale = textScale === "md" ? "lg" : textScale === "lg" ? "xl" : "md";

  return (
    <div className="flex items-center gap-1">
      <Button
        variant={inverse ? "ghost" : "ghost"}
        size="sm"
        className={inverse ? "text-ivory hover:bg-forest-deep hover:text-leaf" : ""}
        onClick={() => setLocale(locale === "en" ? "sw" : "en")}
        aria-label={t(locale, "lang")}
      >
        <Languages className="size-4" />
        <span className="hidden sm:inline">{t(locale, "lang")}</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={inverse ? "text-ivory hover:bg-forest-deep hover:text-leaf" : ""}
        onClick={() => setTextScale(nextScale)}
        aria-label="Change text size"
      >
        <Type className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={inverse ? "text-ivory hover:bg-forest-deep hover:text-leaf" : ""}
        onClick={() => setContrast(!contrast)}
        aria-pressed={contrast}
        aria-label="High contrast"
      >
        <Contrast className="size-4" />
      </Button>
    </div>
  );
}
