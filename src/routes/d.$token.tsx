import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { DeviceQr } from "@/components/device-qr";
import { SiteFooter, SiteHeader } from "@/components/layout/site-header";
import { DeviceBadge } from "@/components/status";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MODELS } from "@/lib/demo-data";
import { t } from "@/lib/i18n";
import { useAfriStore } from "@/lib/store";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/d/$token")({ component: PassportPage });

function PassportPage() {
  const { token } = Route.useParams();
  const locale = useAfriStore((s) => s.locale);
  const devices = useAfriStore((s) => s.devices);
  const openTicket = useAfriStore((s) => s.openTicket);
  const device = devices.find((d) => d.qrToken === token);
  const model = MODELS.find((m) => m.id === device?.modelId);
  const [issue, setIssue] = useState("");

  if (!device || !model) {
    return (
      <div className="min-h-svh bg-ivory">
        <SiteHeader />
        <main id="main" className="mx-auto max-w-lg px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold text-forest">
            {locale === "sw" ? "Pasipoti haijapatikana" : "Passport not found"}
          </h1>
          <p className="mt-3 text-muted-ink">
            {locale === "sw" ? "Nambari ya QR si sahihi." : "That QR token is not on the registry."}
          </p>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-svh bg-ivory">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-lg px-4 py-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-teal-deep">
          {locale === "sw" ? "Pasipoti ya kifaa" : "Device passport"}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-forest">{model.name}</h1>
        <p className="mt-2 text-sm text-muted-ink">{t(locale, "noPii")}</p>
        <div className="mt-6">
          <DeviceQr
            token={device.qrToken}
            caption={locale === "sw" ? "Alama ya pasipoti" : "Passport mark"}
          />
          <p className="mt-3 text-center text-sm text-ink">
            {locale === "sw"
              ? "Alama ina anwani ya ukurasa huu tu. Hakuna jina. Inatengenezwa kifaa kinapotolewa, si wakati wa kuchanganua."
              : "The mark is only the address of this page. It has no name. It is minted when the device is released, not when someone scans."}
          </p>
        </div>
        <Card className="mt-6 rounded-xl p-6">
          <CardContent className="grid gap-4 p-0">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-ink">{t(locale, "serial")}</span>
              <span className="font-mono text-sm tabular-nums">{device.serial}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-ink">{locale === "sw" ? "Hali" : "Status"}</span>
              <DeviceBadge status={device.status} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-ink">{locale === "sw" ? "Imetengenezwa" : "Manufactured"}</span>
              <span className="tabular-nums">{formatDate(device.manufacturedAt, locale)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-ink">{t(locale, "warranty")}</span>
              <span className="tabular-nums">{formatDate(device.warrantyUntil, locale)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-ink">{locale === "sw" ? "Kiwango" : "Standard"}</span>
              <span>{model.standard}</span>
            </div>
            {device.safetyNotice ? (
              <p className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{device.safetyNotice}</p>
            ) : null}
          </CardContent>
        </Card>

        <form
          className="mt-8 grid gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (!issue.trim()) return;
            openTicket(device.id, issue.trim(), "USER_REPORT");
            toast.success(locale === "sw" ? "Tiketi ya ukarabati imefunguliwa." : "Repair ticket opened.");
            setIssue("");
          }}
        >
          <Label htmlFor="issue">{t(locale, "reportFault")}</Label>
          <Textarea
            id="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            placeholder={locale === "sw" ? "Eleza hitilafu…" : "Describe the fault…"}
          />
          <Button type="submit">{t(locale, "reportFault")}</Button>
        </form>
        <Button asChild variant="ghost" className="mt-4">
          <Link to="/app/service">{locale === "sw" ? "Fungua ukarabati" : "Open repairs desk"}</Link>
        </Button>
      </main>
      <SiteFooter />
    </div>
  );
}
