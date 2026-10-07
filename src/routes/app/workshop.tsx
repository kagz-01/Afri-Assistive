import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { MODELS, QA_ITEMS } from "@/lib/demo-data";
import { t } from "@/lib/i18n";
import { useAfriStore } from "@/lib/store";

export const Route = createFileRoute("/app/workshop")({ component: WorkshopPage });

function WorkshopPage() {
  const locale = useAfriStore((s) => s.locale);
  const workOrders = useAfriStore((s) => s.workOrders);
  const people = useAfriStore((s) => s.people);
  const referrals = useAfriStore((s) => s.referrals);
  const toggleQa = useAfriStore((s) => s.toggleQa);
  const releaseWorkOrder = useAfriStore((s) => s.releaseWorkOrder);
  const [activeId, setActiveId] = useState(workOrders.find((w) => w.status !== "released")?.id ?? workOrders[0]?.id);

  const active = workOrders.find((w) => w.id === activeId) ?? workOrders[0];
  const referral = referrals.find((r) => r.id === active?.referralId);
  const person = people.find((p) => p.id === referral?.personId);
  const model = MODELS.find((m) => m.id === active?.modelId);
  const allPass = QA_ITEMS.every((i) => active?.qa?.[i.key]);

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="font-display text-3xl font-semibold text-forest">
        {locale === "sw" ? "Warsha na ukaguzi" : "Workshop and QA"}
      </h1>
      <p className="mt-2 text-ink">{t(locale, "qaGate")}</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
        <ul className="space-y-2">
          {workOrders.map((w) => {
            const m = MODELS.find((x) => x.id === w.modelId);
            return (
              <li key={w.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(w.id)}
                  className={`w-full rounded-lg border px-3 py-3 text-left ${w.id === active?.id ? "border-forest bg-paper" : "border-line hover:bg-cream"}`}
                >
                  <span className="block text-sm font-medium text-forest">{m?.name}</span>
                  <span className="text-xs uppercase tracking-wide text-muted-ink">{w.status.replace("_", " ")}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {active && model ? (
          <Card className="rounded-xl p-6">
            <p className="text-sm text-muted-ink">
              {person?.name} · {person?.county} · {locale === "sw" ? "Tarehe" : "Due"} {active.dueDate}
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-forest">{model.name}</h2>
            <p className="text-sm text-muted-ink">
              {locale === "sw" ? "Fundi" : "Technician"}: {active.assignedTo} · {model.standard}
            </p>
            <ul className="mt-6 space-y-3">
              {QA_ITEMS.map((item) => (
                <li key={item.key}>
                  <label className="flex min-h-11 items-center gap-3 rounded-md bg-cream px-3">
                    <Checkbox
                      checked={!!active.qa?.[item.key]}
                      onCheckedChange={() => toggleQa(active.id, item.key)}
                      disabled={active.status === "released"}
                    />
                    <span className="text-sm">{item.label}</span>
                  </label>
                </li>
              ))}
            </ul>
            <Button
              className="mt-6"
              disabled={!allPass || active.status === "released"}
              onClick={() => {
                const device = releaseWorkOrder(active.id);
                if (!device) {
                  toast.error(t(locale, "qaGate"));
                  return;
                }
                toast.success(
                  locale === "sw"
                    ? `Imetolewa ${device.serial}`
                    : `Released ${device.serial}`,
                );
              }}
            >
              {t(locale, "releaseDevice")}
            </Button>
            {active.deviceId ? (
              <Button asChild variant="ghost" className="mt-2">
                <Link to="/app/devices">{locale === "sw" ? "Fungua rejista" : "Open registry"}</Link>
              </Button>
            ) : null}
          </Card>
        ) : null}
      </div>
    </div>
  );
}
