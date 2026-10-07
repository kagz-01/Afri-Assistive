import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { TicketBadge } from "@/components/status";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MODELS } from "@/lib/demo-data";
import { t } from "@/lib/i18n";
import { useAfriStore } from "@/lib/store";
import { formatDate, kes } from "@/lib/utils";

export const Route = createFileRoute("/app/service")({ component: ServicePage });

function ServicePage() {
  const locale = useAfriStore((s) => s.locale);
  const tickets = useAfriStore((s) => s.tickets);
  const devices = useAfriStore((s) => s.devices);
  const carePlans = useAfriStore((s) => s.carePlans);
  const people = useAfriStore((s) => s.people);
  const followUps = useAfriStore((s) => s.followUps);
  const closeTicket = useAfriStore((s) => s.closeTicket);
  const completeFollowUp = useAfriStore((s) => s.completeFollowUp);
  const activateCarePlan = useAfriStore((s) => s.activateCarePlan);
  const payments = useAfriStore((s) => s.payments);
  const [paying, setPaying] = useState<string | null>(null);
  const [phase, setPhase] = useState<"pin" | "done">("pin");
  const [receipt, setReceipt] = useState<string>();

  return (
    <div className="mx-auto max-w-5xl space-y-10">
      <section>
        <h1 className="font-display text-3xl font-semibold text-forest">
          {locale === "sw" ? "Ukarabati" : "Repairs"}
        </h1>
        <ul className="mt-4 grid gap-3">
          {tickets.map((tkt) => {
            const device = devices.find((d) => d.id === tkt.deviceId);
            const model = MODELS.find((m) => m.id === device?.modelId);
            return (
              <li key={tkt.id}>
                <Card className="flex flex-col gap-3 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-mono text-xs text-teal-deep">{device?.serial}</p>
                    <p className="font-medium text-forest">{model?.name}</p>
                    <p className="text-sm text-ink">{tkt.issue}</p>
                    <p className="text-xs text-muted-ink">
                      {tkt.hub} · {formatDate(tkt.openedAt, locale)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <TicketBadge status={tkt.status} />
                    {tkt.status !== "closed" ? (
                      <Button size="sm" variant="outline" onClick={() => closeTicket(tkt.id)}>
                        {locale === "sw" ? "Funga" : "Close"}
                      </Button>
                    ) : null}
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold text-forest">
          {locale === "sw" ? "Ufuatiliaji" : "Follow-up"}
        </h2>
        <ul className="mt-4 grid gap-3">
          {followUps.map((f) => {
            const device = devices.find((d) => d.id === f.deviceId);
            return (
              <li key={f.id}>
                <Card className="flex flex-col gap-3 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-mono text-xs">{device?.serial}</p>
                    <p className="text-sm text-ink">
                      {f.kind} · {locale === "sw" ? "Tarehe" : "Due"} {formatDate(f.dueAt, locale)}
                    </p>
                    {f.completedAt ? (
                      <p className="text-xs text-teal-deep">
                        {t(locale, "inUse")}: {f.stillUsing ? (locale === "sw" ? "Ndiyo" : "Yes") : locale === "sw" ? "Hapana" : "No"}
                      </p>
                    ) : null}
                  </div>
                  {!f.completedAt ? (
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => completeFollowUp(f.id, true, "Still using")}>
                        {locale === "sw" ? "Inatumika" : "Still using"}
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => completeFollowUp(f.id, false, "Abandoned")}>
                        {locale === "sw" ? "Haitegumiki" : "Not in use"}
                      </Button>
                    </div>
                  ) : null}
                </Card>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold text-forest">
          {locale === "sw" ? "Mipango ya huduma" : "Care plans"}
        </h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-3">
          {carePlans.map((c) => {
            const person = people.find((p) => p.id === c.personId);
            return (
              <li key={c.id}>
                <Card className="rounded-xl p-5">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-teal-deep">{c.tier}</p>
                  <p className="mt-1 font-display text-xl font-semibold text-forest">{person?.name}</p>
                  <p className="font-mono tabular-nums text-sm">{kes(c.priceKes)} / {locale === "sw" ? "mwezi" : "month"}</p>
                  <p className="mt-2 text-sm text-muted-ink">{c.status}</p>
                  {c.status !== "active" ? (
                    <Button
                      className="mt-4 w-full"
                      onClick={() => {
                        setPaying(c.id);
                        setPhase("pin");
                        setReceipt(undefined);
                      }}
                    >
                      {t(locale, "payMpesa")}
                    </Button>
                  ) : (
                    <p className="mt-3 text-xs text-teal-deep">
                      {locale === "sw" ? "Inatumika tangu" : "Active since"} {c.startAt}
                    </p>
                  )}
                </Card>
              </li>
            );
          })}
        </ul>
        {payments[0] ? (
          <p className="mt-3 text-sm text-muted-ink">
            {locale === "sw" ? "Risiti ya mwisho" : "Last receipt"} {payments[0].receipt} · {kes(payments[0].amountKes)}
          </p>
        ) : null}
      </section>

      <Dialog open={!!paying} onOpenChange={(o) => !o && setPaying(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t(locale, "payMpesa")}</DialogTitle>
            <DialogDescription>
              {locale === "sw"
                ? "Mfano wa STK Push. Hakuna pesa halisi inayohamishwa."
                : "Simulated STK Push. No real money moves."}
            </DialogDescription>
          </DialogHeader>
          {phase === "pin" ? (
            <div className="grid gap-4">
              <p className="text-sm text-ink">
                {locale === "sw"
                  ? "Ingiza PIN kwenye simu. (Hapa, bonyeza thibitisha.)"
                  : "Enter your PIN on the handset. (Here, confirm to simulate.)"}
              </p>
              <div className="flex justify-center gap-2" aria-hidden>
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="size-3 rounded-full bg-forest" />
                ))}
              </div>
              <Button
                onClick={() => {
                  if (!paying) return;
                  const pay = activateCarePlan(paying, "+254711000142");
                  setReceipt(pay.receipt);
                  setPhase("done");
                  toast.success(locale === "sw" ? "Malipo yamefanikiwa" : "Payment succeeded");
                }}
              >
                {locale === "sw" ? "Thibitisha PIN" : "Confirm PIN"}
              </Button>
            </div>
          ) : (
            <div>
              <p className="font-display text-2xl font-semibold text-forest">
                {locale === "sw" ? "Imelipwa" : "Paid"}
              </p>
              <p className="mt-2 font-mono text-sm">M-Pesa {receipt}</p>
              <Button className="mt-4" onClick={() => setPaying(null)}>
                {locale === "sw" ? "Funga" : "Close"}
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
