import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  Activity,
  ClipboardList,
  FileText,
  Hammer,
  LayoutDashboard,
  Menu,
  QrCode,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { Wordmark } from "@/components/brand/logo";
import { A11yBar } from "@/components/layout/a11y-bar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { t } from "@/lib/i18n";
import { ROLES, useAfriStore } from "@/lib/store";
import type { Role } from "@/lib/types";
import { cn } from "@/lib/utils";

const NAV: { to: "/app" | "/app/queue" | "/app/workshop" | "/app/devices" | "/app/service" | "/app/claims" | "/app/impact"; key: "platformHome" | "queue" | "workshop" | "devices" | "service" | "claims" | "impact"; icon: typeof LayoutDashboard; roles: Role[] }[] = [
  { to: "/app", key: "platformHome", icon: LayoutDashboard, roles: ["beneficiary", "referrer", "clinician", "technician", "hub", "partner", "admin"] },
  { to: "/app/queue", key: "queue", icon: ClipboardList, roles: ["referrer", "clinician", "admin"] },
  { to: "/app/workshop", key: "workshop", icon: Hammer, roles: ["technician", "admin"] },
  { to: "/app/devices", key: "devices", icon: QrCode, roles: ["technician", "clinician", "hub", "partner", "admin", "beneficiary"] },
  { to: "/app/service", key: "service", icon: Wrench, roles: ["hub", "beneficiary", "clinician", "admin"] },
  { to: "/app/claims", key: "claims", icon: FileText, roles: ["clinician", "partner", "admin"] },
  { to: "/app/impact", key: "impact", icon: Activity, roles: ["partner", "admin", "clinician"] },
];

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const locale = useAfriStore((s) => s.locale);
  const role = useAfriStore((s) => s.role);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const items = NAV.filter((n) => n.roles.includes(role));
  return (
    <nav className="flex flex-col gap-1" aria-label="Platform">
      {items.map((item) => {
        const active = item.to === "/app" ? pathname === "/app" : pathname.startsWith(item.to);
        const Icon = item.icon;
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={cn(
              "flex min-h-11 items-center gap-3 rounded-md px-3 text-sm font-medium",
              active ? "bg-forest text-ivory" : "text-forest hover:bg-cream",
            )}
          >
            <Icon className="size-4" />
            {t(locale, item.key)}
          </Link>
        );
      })}
    </nav>
  );
}

export function AppShell() {
  const locale = useAfriStore((s) => s.locale);
  const role = useAfriStore((s) => s.role);
  const setRole = useAfriStore((s) => s.setRole);
  const resetPilot = useAfriStore((s) => s.resetPilot);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-svh bg-ivory">
      <div className="flex min-h-svh">
        <aside className="sticky top-0 hidden h-svh w-64 shrink-0 flex-col border-r border-line bg-paper p-4 lg:flex">
          <Wordmark compact to="/app" />
          <p className="mt-6 mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-ink">
            {t(locale, "role")}
          </p>
          <label className="sr-only" htmlFor="role-select">
            {t(locale, "role")}
          </label>
          <select
            id="role-select"
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="h-11 w-full rounded-md border border-line bg-ivory px-3 text-sm text-forest"
          >
            {ROLES.map((r) => (
              <option key={r.id} value={r.id}>
                {locale === "sw" ? r.sw : r.en}
              </option>
            ))}
          </select>
          <div className="mt-6 flex-1 overflow-y-auto">
            <NavLinks />
          </div>
          <p className="pt-4 text-xs leading-relaxed text-muted-ink">{t(locale, "demoNote")}</p>
          <button type="button" onClick={() => resetPilot()} className="mt-2 text-left text-xs text-teal-deep">
            {locale === "sw" ? "Weka upya rekodi za majaribio" : "Reset pilot records"}
          </button>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-3 border-b border-line bg-ivory/90 px-3 backdrop-blur-md lg:px-6">
            <div className="flex items-center gap-2 lg:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Open menu">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <Wordmark compact to="/app" />
                  </SheetHeader>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as Role)}
                    className="h-11 w-full rounded-md border border-line bg-ivory px-3 text-sm"
                  >
                    {ROLES.map((r) => (
                      <option key={r.id} value={r.id}>
                        {locale === "sw" ? r.sw : r.en}
                      </option>
                    ))}
                  </select>
                  <NavLinks onNavigate={() => setOpen(false)} />
                  <button type="button" onClick={() => resetPilot()} className="mt-6 text-left text-xs text-teal-deep">
                    {locale === "sw" ? "Weka upya rekodi za majaribio" : "Reset pilot records"}
                  </button>
                </SheetContent>
              </Sheet>
              <Wordmark compact to="/app" />
              <span className="max-w-24 truncate text-xs font-medium text-forest">
                {ROLES.find((r) => r.id === role)?.[locale === "sw" ? "sw" : "en"]}
              </span>
            </div>
            <p className="hidden text-sm font-medium text-forest lg:block">
              {ROLES.find((r) => r.id === role)?.[locale === "sw" ? "sw" : "en"]}
            </p>
            <div className="ml-auto flex items-center gap-2">
              <A11yBar />
              <Button asChild variant="outline" size="sm">
                <Link to="/">{locale === "sw" ? "Tovuti" : "Public site"}</Link>
              </Button>
            </div>
          </header>
          <main id="main" className="flex-1 px-3 py-6 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
