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
import type { FollowOutcome, Payment } from "@/lib/types";
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
  const parts = useAfriStore((s) => s.parts);
  const messages = useAfriStore((s) => s.messages);
  const [partPick, setPartPick] = useState<Record<string, string>>({});
  const [paying, setPaying] = useState<string | null>(null);
  const [phase, setPhase] = useState<"pin" | "done">("pin");
  const [paid, setPaid] = useState<Payment | null>(null);

  const role = useAfriStore((s) => s.role);
  const sw = locale === "sw";
  const householdTickets = tickets.filter((tkt) => {
    const device = devices.find((d) => d.id === tkt.deviceId);
    return Boolean(device?.ownerPersonId) && device?.status !== "loan";
  });

  if (role === "beneficiary") {
    return (
      <div className="mx-auto max-w-5xl">
        <h1 className="font-display text-3xl font-semibold text-forest">{sw ? "Ukarabati wangu" : "My repairs"}</h1>
        <p className="mt-2 max-w-2xl text-ink">
          {sw
            ? "Unaona tiketi iliyo wazi. Kuifunga ni kazi ya kituo, si ya simu hii."
            : "You can see an open ticket. Closing it is the hub’s job, not this phone’s."}
        </p>
        <ul className="mt-6 grid gap-3">
          {householdTickets.length === 0 ? (
            <li className="text-sm text-muted-ink">{sw ? "Hakuna ukarabati wazi." : "No repair is open."}</li>
          ) : (
            householdTickets.map((tkt) => {
              const device = devices.find((d) => d.id === tkt.deviceId);
              const person = people.find((p) => p.id === device?.ownerPersonId);
              const model = MODELS.find((m) => m.id === device?.modelId);
              return (
                <li key={tkt.id}>
                  <Card className="rounded-xl p-5">
                    <p className="font-medium text-forest">{person?.name}</p>
                    <p className="font-mono text-xs text-teal-deep">{device?.serial}</p>
                    <p className="mt-1 text-sm text-ink">
                      {model?.name} · {tkt.issue}
                    </p>
                    <div className="mt-3">
                      <TicketBadge status={tkt.status} />
                    </div>
                  </Card>
                </li>
              );
            })
          )}
        </ul>
      </div>
    );
  }

  const today = "2026-10-08";
  const overdue = followUps.filter((f) => !f.completedAt && f.dueAt <= today);
  const done = followUps.filter((f) => f.completedAt);
  const inUse = done.filter((f) => f.outcome === "using" || (f.outcome == null && f.stillUsing)).length;

  return (
    <div className="mx-auto max-w-5xl space-y-10">
      <section>
        <h1 className="font-display text-3xl font-semibold text-forest">{sw ? "Ukarabati na sehemu" : "Repairs and parts"}</h1>
        <p className="mt-2 max-w-2xl text-ink">
          {sw
            ? "Kufunga tiketi kunahitaji sehemu kutoka kwa pacha wa kifaa. Ikiwa hifadhi ni sifuri, kazi inasubiri — haijafungwa."
            : "Closing a ticket takes a part from that device’s twin. If stock is zero, the job waits. It does not close."}
        </p>
        {messages.slice(0, 3).length ? (
          <ul className="mt-4 grid gap-2">
            {messages.slice(0, 3).map((m) => (
              <li key={m.id} className="rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink">
                <span className="font-mono text-[11px] uppercase text-teal-deep">{m.channel}</span>
                <span> · {m.body}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <ul className="mt-4 flex flex-wrap gap-2">
          {parts.map((p) => (
            <li
              key={p.sku}
              className={`rounded-full border px-3 py-1 text-xs ${p.stock <= p.reorderAt ? "border-line bg-cream text-forest" : "border-line bg-paper text-ink"}`}
            >
              <span className="font-mono">{p.sku}</span> {p.name} · {p.stock}
              {p.stock === 0 ? (sw ? " · hakuna" : " · out") : p.stock <= p.reorderAt ? (sw ? " · agiza" : " · reorder") : ""}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-ink">
          {overdue.length} {sw ? "ufuatiliaji umechelewa" : "follow-ups overdue"} ·{" "}
          {done.length ? Math.round((inUse / done.length) * 100) : 0}% {sw ? "bado vinatumika" : "still in use"}
        </p>
        <ul className="mt-4 grid gap-3">
          {tickets.map((tkt) => {
            const device = devices.find((d) => d.id === tkt.deviceId);
            const model = MODELS.find((m) => m.id === device?.modelId);
            const loan = devices.find((d) => d.id === tkt.loanDeviceId);
            const choices = parts.filter((p) => model?.partSkus.includes(p.sku));
            const picked = partPick[tkt.id] ?? choices[0]?.sku ?? "none";
            const pickedPart = parts.find((p) => p.sku === picked);
            return (
              <li key={tkt.id}>
                <Card className="flex flex-col gap-3 rounded-xl p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-mono text-xs text-teal-deep">{device?.serial}</p>
                      <p className="font-medium text-forest">{model?.name}</p>
                      <p className="text-sm text-ink">{tkt.issue}</p>
                      <p className="text-xs text-muted-ink">
                        {tkt.hub} · {formatDate(tkt.openedAt, locale)}
                        {loan ? ` · ${sw ? "mkopo" : "loaner"} ${loan.serial}` : ""}
                        {tkt.partSku ? ` · ${tkt.partSku}` : ""}
                      </p>
                    </div>
                    <TicketBadge status={tkt.status} />
                  </div>
                  {tkt.status !== "closed" && choices.length > 0 ? (
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                      <label className="sr-only" htmlFor={`part-${tkt.id}`}>
                        {sw ? "Sehemu" : "Part"}
                      </label>
                      <select
                        id={`part-${tkt.id}`}
                        value={picked}
                        onChange={(e) => setPartPick((m) => ({ ...m, [tkt.id]: e.target.value }))}
                        className="h-11 min-w-0 flex-1 rounded-md border border-line bg-ivory px-3 text-sm text-forest"
                      >
                        {choices.map((p) => (
                          <option key={p.sku} value={p.sku}>
                            {p.name} · {sw ? "hifadhi" : "stock"} {p.stock}
                          </option>
                        ))}
                      </select>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          const result = closeTicket(tkt.id, picked);
                          if (result === "waiting") {
                            toast.message(
                              sw
                                ? `${pickedPart?.name ?? "Sehemu"} imeisha. Tiketi inasubiri.`
                                : `${pickedPart?.name ?? "Part"} is out. Ticket is waiting.`,
                            );
                          } else if (result === "closed") {
                            toast.success(sw ? "Tiketi imefungwa" : "Ticket closed");
                          }
                        }}
                      >
                        {pickedPart && pickedPart.stock < 1
                          ? sw
                            ? "Subiri sehemu"
                            : "Wait for part"
                          : sw
                            ? "Funga na sehemu"
                            : "Close with part"}
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
          {sw ? "Bado kinatumika?" : "Still in use?"}
        </h2>
        <ul className="mt-4 grid gap-3">
          {followUps.map((f) => {
            const device = devices.find((d) => d.id === f.deviceId);
            const late = !f.completedAt && f.dueAt <= today;
            const outcomeLabel: Record<FollowOutcome, string> = {
              using: sw ? "Bado kinatumika" : "Still in use",
              broken: sw ? "Kimevunjika" : "Broken",
              given: sw ? "Kimepewa mwingine" : "Given away",
              stopped: sw ? "Kimeachwa" : "Stopped",
            };
            return (
              <li key={f.id}>
                <Card className="flex flex-col gap-3 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-mono text-xs">{device?.serial}</p>
                    <p className="text-sm text-ink">
                      {f.kind} · {sw ? "Tarehe" : "Due"} {formatDate(f.dueAt, locale)}
                      {late ? (sw ? " · imechelewa" : " · overdue") : ""}
                    </p>
                    {f.completedAt ? (
                      <p className="text-xs text-teal-deep">
                        {f.outcome ? outcomeLabel[f.outcome] : f.stillUsing ? outcomeLabel.using : outcomeLabel.stopped}
                      </p>
                    ) : null}
                  </div>
                  {!f.completedAt ? (
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" onClick={() => completeFollowUp(f.id, "using", "Still using")}>
                        {sw ? "Kinatumika" : "Still using"}
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => completeFollowUp(f.id, "broken", "Broken at follow-up")}>
                        {sw ? "Kimevunjika" : "Broken"}
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => completeFollowUp(f.id, "given", "Given away")}>
                        {sw ? "Kimepewa" : "Given away"}
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
                        setPaid(null);
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
            {payments[0].paybill ? ` · Paybill ${payments[0].paybill} · ${payments[0].account}` : ""}
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
                  setPaid(pay);
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
                {locale === "sw" ? "Imethibitishwa" : "Prompt confirmed"}
              </p>
              <dl className="mt-3 grid gap-1 text-sm text-ink">
                <div className="flex justify-between gap-3"><dt>Paybill</dt><dd className="font-mono">{paid?.paybill}</dd></div>
                <div className="flex justify-between gap-3"><dt>{locale === "sw" ? "Akaunti" : "Account"}</dt><dd className="font-mono text-right">{paid?.account}</dd></div>
                <div className="flex justify-between gap-3"><dt>{locale === "sw" ? "Risiti" : "Receipt"}</dt><dd className="font-mono">{paid?.receipt}</dd></div>
                <div className="flex justify-between gap-3"><dt>Ratiba</dt><dd>{paid?.ratibaMonths} × {kes(paid?.amountKes ?? 0)}</dd></div>
              </dl>
              <p className="mt-3 text-xs text-muted-ink">
                {locale === "sw"
                  ? "Paybill 880155 si nambari iliyosajiliwa. Hakuna pesa iliyohamishwa. Ratiba si deni la moja kwa moja."
                  : "Paybill 880155 is not a registered short code. No money moved. Ratiba is a schedule, not a live debit."}
              </p>
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
