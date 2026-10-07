import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { DeviceBadge } from "@/components/status";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MODELS } from "@/lib/demo-data";
import { useAfriStore } from "@/lib/store";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/app/devices")({ component: DevicesPage });

function DevicesPage() {
  const locale = useAfriStore((s) => s.locale);
  const role = useAfriStore((s) => s.role);
  const devices = useAfriStore((s) => s.devices);
  const people = useAfriStore((s) => s.people);
  const acceptDelivery = useAfriStore((s) => s.acceptDelivery);

  const visible =
    role === "beneficiary"
      ? devices.filter((d) => d.ownerPersonId === "p1")
      : devices;

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="font-display text-3xl font-semibold text-forest">
        {locale === "sw" ? "Rejista ya vifaa" : "Device registry"}
      </h1>
      <p className="mt-2 text-ink">
        {locale === "sw"
          ? "Kila kifaa kina nambari, QR na historia. Mwonekano wa umma haufichi taarifa za afya."
          : "Every device has a serial, a QR token and a history. The public face never shows health data."}
      </p>
      <ul className="mt-6 grid gap-4">
        {visible.map((d) => {
          const model = MODELS.find((m) => m.id === d.modelId);
          const owner = people.find((p) => p.id === d.ownerPersonId);
          return (
            <li key={d.id}>
              <Card className="flex flex-col gap-4 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-sm tabular-nums text-teal-deep">{d.serial}</p>
                  <h2 className="font-display text-xl font-semibold text-forest">{model?.name}</h2>
                  <p className="text-sm text-muted-ink">
                    {role === "beneficiary" ? d.county : owner ? `${owner.name} · ${d.county}` : d.county} ·{" "}
                    {formatDate(d.manufacturedAt, locale)}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <DeviceBadge status={d.status} />
                  <Button asChild variant="outline" size="sm">
                    <Link to="/d/$token" params={{ token: d.qrToken }}>
                      QR
                    </Link>
                  </Button>
                  {d.status === "in_stock" ? (
                    <Button
                      size="sm"
                      onClick={() => {
                        acceptDelivery(d.id);
                        toast.success(locale === "sw" ? "Uwasilishaji umekubaliwa" : "Delivery accepted");
                      }}
                    >
                      {locale === "sw" ? "Kubali uwasilishaji" : "Accept delivery"}
                    </Button>
                  ) : null}
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
