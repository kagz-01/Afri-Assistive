import { Link } from "@tanstack/react-router";
import { t } from "@/lib/i18n";
import { useAfriStore } from "@/lib/store";
import { Wordmark } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { A11yBar } from "./a11y-bar";

export function SiteHeader() {
  const locale = useAfriStore((s) => s.locale);
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl min-w-0 items-center justify-between gap-2 px-3 sm:gap-3 sm:px-4">
        <Wordmark compact />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          <Link
            to="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-forest hover:bg-cream"
          >
            {t(locale, "navHome")}
          </Link>
          <Link
            to="/request"
            className="rounded-md px-3 py-2 text-sm font-medium text-forest hover:bg-cream"
          >
            {t(locale, "navRequest")}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <A11yBar />
          <Button asChild size="sm" className="shrink-0 px-3">
            <Link to="/app">
              <span className="sm:hidden">{locale === "sw" ? "Jukwaa" : "Platform"}</span>
              <span className="hidden sm:inline">{t(locale, "navPlatform")}</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const locale = useAfriStore((s) => s.locale);
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-ink">{t(locale, "footerRights")}</p>
        <p className="text-xs text-muted-ink">{t(locale, "demoNote")}</p>
      </div>
    </footer>
  );
}
