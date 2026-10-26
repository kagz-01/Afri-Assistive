import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { DeviceQr } from "@/components/device-qr";
import { DeviceBadge } from "@/components/status";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MODELS } from "@/lib/demo-data";
import { useAfriStore } from "@/lib/store";
import type { FitRecord } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/app/devices")({ component: DevicesPage });

export const FIT_ROWS: { key: keyof FitRecord; en: string; sw: string }[] = [
  { key: "seat", en: "Seat depth and cushion match the prescription", sw: "Kina cha kiti na mto vinaendana na maagizo" },
  { key: "footrest", en: "Footrest clears the ground", sw: "Kiegemeo cha mguu hakigusi ardhi" },
  { key: "brakes", en: "Brakes hold", sw: "Breki zinashika" },
  { key: "pressure", en: "Pressure points checked", sw: "Sehemu za shinikizo zimekaguliwa" },
  { key: "trained", en: "User trained in their language", sw: "Mtumiaji amefundishwa kwa lugha yake" },
  { key: "caregiver", en: "Caregiver named, or the user is independent", sw: "Mlezi ametajwa, au mtumiaji anajitegemea" },
];

export const EMPTY_FIT: FitRecord = {
  seat: false,
  footrest: false,
  brakes: false,
  pressure: false,
  trained: false,
  caregiver: false,
};

function DevicesPage() {
  const locale = useAfriStore((s) => s.locale);
  const role = useAfriStore((s) => s.role);
  const devices = useAfriStore((s) => s.devices);
  const people = useAfriStore((s) => s.people);
  const acceptDelivery = useAfriStore((s) => s.acceptDelivery);
  const [fitting, setFitting] = useState<string | null>(null);
  const [fit, setFit] = useState<FitRecord>(EMPTY_FIT);
  const sw = locale === "sw";
  const ready = FIT_ROWS.every((row) => fit[row.key] === true);
  const canFit = role === "clinician" || role === "admin";
  const showName = role === "clinician" || role === "admin" || role === "technician" || role === "hub" || role === "beneficiary";
  const visible =
    role === "beneficiary"
      ? devices.filter((d) => d.ownerPersonId && d.status !== "loan")
      : devices;

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="font-display text-3xl font-semibold text-forest">{sw ? "Rejista ya vifaa" : "Device registry"}</h1>
      <p className="mt-2 text-ink">
        {role === "partner"
          ? sw
            ? "Nambari, aina na kaunti. Majina yanabaki kwenye rekodi ya kliniki."
            : "Serial, model, and county. Names stay on the clinic record."
          : role === "beneficiary"
            ? sw
              ? "Nyumba za mfano kwenye simu hii. Kufaa ni kazi ya kliniki."
              : "Sample households on this phone. The fit lock stays with the clinic."
            : sw
              ? "Kifaa hakiwezi kuwasilishwa hadi orodha ya kufaa iwe kamili. Hii inafungua ufuatiliaji wa wiki 2, miezi 6 na mwaka 1."
              : "A device cannot be handed over until the fit lock is complete. That opens the 2-week, 6-month and 12-month checks."}
      </p>
      <ul className="mt-6 grid gap-4">
        {visible.map((d) => {
          const model = MODELS.find((m) => m.id === d.modelId);
          const owner = people.find((p) => p.id === d.ownerPersonId);
          const parts = (model?.partSkus ?? [])
            .map((sku) => sku)
            .join(" · ");
          return (
            <li key={d.id}>
              <Card className="flex flex-col gap-4 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-sm tabular-nums text-teal-deep">{d.serial}</p>
                  <h2 className="font-display text-xl font-semibold text-forest">{model?.name}</h2>
                  <p className="text-sm text-muted-ink">
                    {showName && owner ? `${owner.name} · ${d.county}` : d.county} · {formatDate(d.manufacturedAt, locale)}
                  </p>
                  {parts ? <p className="mt-1 text-xs text-muted-ink">{sw ? "Sehemu pacha" : "Parts twin"} · {parts}</p> : null}
                  {d.fit?.at ? (
                    <p className="mt-1 text-xs text-teal-deep">
                      {sw ? "Imefaa" : "Fitted"} {formatDate(d.fit.at, locale)}
                      {d.fit.by ? ` · ${d.fit.by}` : ""}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col items-start gap-3 sm:items-end">
                  <DeviceQr token={d.qrToken} quiet />
                  <div className="flex flex-wrap items-center gap-2">
                  <DeviceBadge status={d.status} />
                  <Button asChild variant="outline" size="sm">
                    <Link to="/d/$token" params={{ token: d.qrToken }}>
                      QR
                    </Link>
                  </Button>
                  {d.status === "in_stock" && d.ownerPersonId && canFit ? (
                    <Button
                      size="sm"
                      onClick={() => {
                        setFit(EMPTY_FIT);
                        setFitting(d.id);
                      }}
                    >
                      {sw ? "Kufuli ya kufaa" : "Fit lock"}
                    </Button>
                  ) : null}
                  </div>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>

      <Dialog open={!!fitting} onOpenChange={(o) => !o && setFitting(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{sw ? "Kufuli ya kufaa" : "Fit lock"}</DialogTitle>
            <DialogDescription>
              {sw
                ? "Zote sita zinahitajika. Hakuna uwasilishaji nusu."
                : "All six are required. There is no half delivery."}
            </DialogDescription>
          </DialogHeader>
          <ul className="grid gap-3">
            {FIT_ROWS.map((row) => (
              <li key={row.key} className="flex items-start gap-3">
                <Checkbox
                  id={`fit-${row.key}`}
                  checked={fit[row.key] === true}
                  onCheckedChange={(v) => setFit((f) => ({ ...f, [row.key]: v === true }))}
                />
                <label htmlFor={`fit-${row.key}`} className="text-sm text-ink">
                  {sw ? row.sw : row.en}
                </label>
              </li>
            ))}
          </ul>
          <Button
            disabled={!ready || !fitting}
            onClick={() => {
              if (!fitting) return;
              const err = acceptDelivery(fitting, fit);
              if (err) {
                toast.error(err);
                return;
              }
              toast.success(sw ? "Imefaa. Ufuatiliaji umeandikwa." : "Fitted. Follow-up is now on the clock.");
              setFitting(null);
            }}
          >
            {sw ? "Wasilisha kifaa" : "Hand over the device"}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}