import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { DeviceBadge, ReferralBadge, TicketBadge } from "@/components/status";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { MODELS, PARTS, QA_ITEMS } from "@/lib/demo-data";
import { useAfriStore } from "@/lib/store";
import type { FitRecord, Role } from "@/lib/types";
import { formatDate, kes } from "@/lib/utils";
import { EMPTY_FIT, FIT_ROWS } from "@/routes/app/devices";

export const Route = createFileRoute("/app/")({ component: AppHome });

const TODAY = "2026-10-13";
const CELL = 5;

function boardFor(role: Role): "care" | "clinic" | "radio" | "county" | "referrals" {
  if (role === "beneficiary") return "care";
  if (role === "referrer") return "referrals";
  if (role === "technician" || role === "hub") return "radio";
  if (role === "partner" || role === "admin") return "county";
  return "clinic";
}

function gapFor(modelId: string) {
  const model = MODELS.find((m) => m.id === modelId);
  if (!model) return 0;
  if (model.shaTariffKes == null) return model.costKes;
  return Math.max(0, model.costKes - model.shaTariffKes);
}

export function AppHome() {
  const role = useAfriStore((s) => s.role);
  const board = boardFor(role);
  return (
    <div className="mx-auto max-w-5xl">
      {board === "care" ? <MyCare /> : null}
      {board === "referrals" ? <ReferralDesk /> : null}
      {board === "clinic" ? <ClinicDay /> : null}
      {board === "radio" ? <WorkshopRadio /> : null}
      {board === "county" ? <CountyBoard /> : null}
    </div>
  );
}

function MyCare() {
  const locale = useAfriStore((s) => s.locale);
  const sw = locale === "sw";
  const people = useAfriStore((s) => s.people);
  const devices = useAfriStore((s) => s.devices);
  const tickets = useAfriStore((s) => s.tickets);
  const followUps = useAfriStore((s) => s.followUps);
  const carePlans = useAfriStore((s) => s.carePlans);
  const payments = useAfriStore((s) => s.payments);
  const households = people.filter((p) => devices.some((d) => d.ownerPersonId === p.id && d.status !== "loan"));
  const [focus, setFocus] = useState("p1");
  const person = people.find((p) => p.id === focus) ?? households[0];
  const device = devices.find((d) => d.ownerPersonId === person?.id && d.status !== "loan");
  const model = MODELS.find((m) => m.id === device?.modelId);
  const ticket = tickets.find((t) => t.deviceId === device?.id && t.status !== "closed");
  const loaner = devices.find((d) => d.id === ticket?.loanDeviceId);
  const next = followUps
    .filter((f) => f.deviceId === device?.id && !f.completedAt)
    .sort((a, b) => a.dueAt.localeCompare(b.dueAt))[0];
  const plan = carePlans.find((c) => c.personId === person?.id);
  const pay = payments.find((p) => p.carePlanId === plan?.id);
  const nextMonth = pay ? new Date(pay.at) : null;
  if (nextMonth) nextMonth.setMonth(nextMonth.getMonth() + 1);

  const statusLine = !device
    ? sw
      ? "Huna kifaa kwenye rekodi hii."
      : "No device is on this record yet."
    : device.status === "in_repair"
      ? sw
        ? "Kifaa kiko warshani."
        : "Your device is in the workshop."
      : ticket
        ? sw
          ? "Kuna ukarabati wazi kwenye kifaa hiki."
          : "A repair is open on this device."
        : device.status === "delivered"
        ? sw
          ? "Kifaa kiko kwako."
          : "Your device is with you."
        : sw
          ? "Kifaa bado hakijakabidhiwa."
          : "Your device has not been handed over.";

  return (
    <>
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep">
        {sw ? "Huduma yangu" : "My care"}
      </p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-forest">{statusLine}</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-ink">
        {sw
          ? "Rekodi ya mfano. Hakuna kuingia kwa akaunti, kwa hiyo chagua kaya. Bodi hii haijui nani ameshika simu."
          : `Sample record. There is no personal login, so pick a household. This board does not know who is holding the phone.`}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {households.map((h) => (
          <button
            key={h.id}
            type="button"
            onClick={() => setFocus(h.id)}
            className={`min-h-11 rounded-full px-3 text-sm ${h.id === person?.id ? "bg-forest text-ivory" : "bg-cream text-forest"}`}
          >
            {h.name.split(" ")[0]}
          </button>
        ))}
      </div>
      {device ? (
        <Card className="mt-8 rounded-2xl p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-mono text-xs text-teal-deep">{device.serial}</p>
              <p className="mt-1 font-display text-2xl font-semibold text-forest">{model?.name}</p>
              <p className="text-sm text-ink">{device.county}</p>
              {person?.guardianName ? (
                <p className="text-sm text-ink">
                  {sw ? "Mlezi" : "Caregiver"}: {person.guardianName}
                </p>
              ) : null}
            </div>
            <DeviceBadge status={device.status} />
          </div>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-xs text-muted-ink">{sw ? "Ukaguzi ujao" : "Next check"}</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-forest">
                {next ? `${next.kind} · ${formatDate(next.dueAt, locale)}` : sw ? "Hamna" : "None due"}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted-ink">{sw ? "Kikopeshwa" : "Loaner"}</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-forest">
                {loaner ? loaner.serial : sw ? "Hakihitajiki" : "Not out"}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted-ink">{sw ? "Mpango wa huduma" : "Care plan"}</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-forest">
                {plan ? `${plan.status} · ${kes(plan.priceKes)}` : sw ? "Hakuna" : "None"}
              </dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-ink">
            {pay ? (
              <>
                {sw ? "Risiti" : "Receipt"} <span className="font-mono">{pay.receipt}</span> · {kes(pay.amountKes)} · paybill{" "}
                {pay.paybill} · {sw ? "akaunti" : "account"} {pay.account}
                <span className="mt-1 block text-muted-ink">
                  Ratiba {pay.ratibaMonths} · {sw ? "ijayo" : "next"} {nextMonth ? formatDate(nextMonth.toISOString(), locale) : ""}
                  {". "}
                  {sw ? "Si deni la moja kwa moja." : "Not a live debit."}
                </span>
              </>
            ) : plan?.status === "offered" ? (
              <span className="text-muted-ink">
                {sw ? "Kliniki bado haijatuma ombi." : "The clinic has not sent the prompt."}
              </span>
            ) : plan ? (
              <span className="text-muted-ink">
                {sw ? "Mpango upo. Hakuna risiti iliyohifadhiwa kwenye jaribio hili." : "The plan is on. No receipt is stored in this pilot yet."}
              </span>
            ) : (
              <span className="text-muted-ink">{sw ? "Hakuna mpango wa huduma." : "No care plan on this record."}</span>
            )}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild>
              <Link to="/fault">{sw ? "Ripoti hitilafu" : "Report a fault"}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/d/$token" params={{ token: device.qrToken }}>
                {sw ? "Pasipoti" : "Passport"}
              </Link>
            </Button>
          </div>
        </Card>
      ) : null}
    </>
  );
}

function ReferralDesk() {
  const locale = useAfriStore((s) => s.locale);
  const sw = locale === "sw";
  const referrals = useAfriStore((s) => s.referrals);
  const people = useAfriStore((s) => s.people);

  return (
    <>
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep">
        {sw ? "Rufaa" : "Referrals"}
      </p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-forest">
        {sw ? "Watu uliowapeleka wako wapi?" : "Where are the people you sent?"}
      </h1>
      <p className="mt-2 max-w-2xl text-ink">
        {sw
          ? "Unaona rufaa imefika wapi. Kufaa, malipo na ufuatiliaji ni kazi ya kliniki."
          : "You can see how far each referral has gone. Fitting, payment, and follow-up stay with the clinic."}
      </p>
      <ul className="mt-8 grid gap-3">
        {referrals.map((r) => {
          const person = people.find((p) => p.id === r.personId);
          return (
            <li key={r.id}>
              <Card className="flex flex-col gap-2 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-medium text-forest">{person?.name}</p>
                  <p className="text-sm text-muted-ink">
                    {person?.county} · {r.urgency}
                  </p>
                </div>
                <ReferralBadge status={r.status} />
              </Card>
            </li>
          );
        })}
      </ul>
      <Button asChild className="mt-6" variant="outline">
        <Link to="/app/queue">{sw ? "Fungua foleni" : "Open the queue"}</Link>
      </Button>
    </>
  );
}

function ClinicDay() {
  const locale = useAfriStore((s) => s.locale);
  const sw = locale === "sw";
  const referrals = useAfriStore((s) => s.referrals);
  const people = useAfriStore((s) => s.people);
  const devices = useAfriStore((s) => s.devices);
  const workOrders = useAfriStore((s) => s.workOrders);
  const followUps = useAfriStore((s) => s.followUps);
  const carePlans = useAfriStore((s) => s.carePlans);
  const completeFollowUp = useAfriStore((s) => s.completeFollowUp);
  const activateCarePlan = useAfriStore((s) => s.activateCarePlan);
  const acceptDelivery = useAfriStore((s) => s.acceptDelivery);
  const [sent, setSent] = useState<string | null>(null);
  const [fits, setFits] = useState<Record<string, FitRecord>>({});
  const active = referrals.filter((r) => !["fitted", "delivered", "closed"].includes(r.status));
  const blocked = devices.filter((d) => d.ownerPersonId && !d.fit && d.status === "in_stock");
  const inQa = workOrders.filter((w) => w.status === "qa" || w.status === "building");
  const due = followUps
    .filter((f) => !f.completedAt && f.dueAt <= TODAY)
    .sort((a, b) => a.dueAt.localeCompare(b.dueAt));
  const offered = carePlans.filter((c) => c.status === "offered");

  return (
    <>
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep">
        {sw ? "Siku ya kliniki" : "Clinic day"}
      </p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-forest">
        {sw ? "Nani anasubiri, na nini hakijasainiwa?" : "Who is waiting, and what is unsigned?"}
      </h1>
      <p className="mt-2 max-w-2xl text-ink">
        {sw
          ? "Kukabidhi kunasimama ikiwa kufaa hakujasainiwa. Orodha hii ni kazi ya leo, si vifaa vyote vilivyowahi kutolewa."
          : "A handover stops if the fit lock is unsigned. This list is today's work, not every device ever issued."}
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card className="rounded-xl p-5">
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2 className="font-display text-lg font-semibold text-forest">
              {active.length} {sw ? "katika foleni" : "in the queue"}
            </h2>
            <Button asChild variant="link" size="sm">
              <Link to="/app/queue">
                {sw ? "Rufaa" : "Referrals"}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <ul className="divide-y divide-line">
            {active.map((r) => {
              const person = people.find((p) => p.id === r.personId);
              return (
                <li key={r.id} className="flex items-center justify-between gap-3 py-3">
                  <div className="min-w-0">
                    <p className="font-medium text-forest">{person?.name}</p>
                    <p className="text-xs text-muted-ink">
                      {person?.county} · {r.urgency}
                    </p>
                  </div>
                  <ReferralBadge status={r.status} />
                </li>
              );
            })}
          </ul>
        </Card>
        <Card className="rounded-xl p-5">
          <h2 className="font-display text-lg font-semibold text-forest">
            {sw ? "Haiwezi kukabidhiwa" : "Cannot hand over"}
          </h2>
          <ul className="mt-3 divide-y divide-line">
            {blocked.length === 0 ? (
              <li className="py-3 text-sm text-muted-ink">{sw ? "Hakuna kufaa kunakosubiri." : "No fit lock is waiting."}</li>
            ) : (
              blocked.map((d) => {
                const person = people.find((p) => p.id === d.ownerPersonId);
                const fit = fits[d.id] ?? EMPTY_FIT;
                const ready = FIT_ROWS.every((row) => fit[row.key] === true);
                return (
                  <li key={d.id} className="py-3">
                    <p className="font-medium text-forest">{person?.name}</p>
                    <p className="font-mono text-xs text-teal-deep">{d.serial}</p>
                    <p className="mt-1 text-sm text-ink">{sw ? "Zote sita. Hakuna kukabidhi nusu." : "All six. No half handover."}</p>
                    <ul className="mt-3 grid gap-2">
                      {FIT_ROWS.map((row) => (
                        <li key={row.key} className="flex items-start gap-3">
                          <Checkbox
                            id={`clinic-fit-${d.id}-${row.key}`}
                            checked={fit[row.key] === true}
                            onCheckedChange={(v) =>
                              setFits((cur) => ({
                                ...cur,
                                [d.id]: { ...(cur[d.id] ?? EMPTY_FIT), [row.key]: v === true },
                              }))
                            }
                          />
                          <label htmlFor={`clinic-fit-${d.id}-${row.key}`} className="text-sm text-ink">
                            {sw ? row.sw : row.en}
                          </label>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="sm"
                      className="mt-3"
                      disabled={!ready}
                      onClick={() => acceptDelivery(d.id, fit)}
                    >
                      {sw ? "Kabidhi kifaa" : "Hand over"}
                    </Button>
                  </li>
                );
              })
            )}
          </ul>
          <p className="mt-4 text-sm text-muted-ink">
            {inQa.length} {sw ? "kazi bado warshani, hazijatolewa." : "jobs are still in the workshop and not released."}
          </p>
          <Button asChild variant="outline" size="sm" className="mt-3">
            <Link to="/app/devices">{sw ? "Fungua vifaa" : "Open devices"}</Link>
          </Button>
        </Card>
      </div>
      <Card className="mt-6 rounded-xl p-5">
        <h2 className="font-display text-lg font-semibold text-forest">
          {offered.length === 0
            ? sw
              ? "Hakuna ombi"
              : "No prompt is waiting"
            : `${offered.length} ${sw ? "ombi linasubiri" : offered.length === 1 ? "prompt is waiting" : "prompts are waiting"}`}
        </h2>
        <p className="mt-1 text-sm text-muted-ink">
          {sw
            ? "Paybill 880155 ni mfano. Hakuna pesa inayohamishwa."
            : "Paybill 880155 is a sample. No money moves."}
        </p>
        <ul className="mt-3 grid gap-3">
          {offered.map((plan) => {
              const person = people.find((p) => p.id === plan.personId);
              return (
                <li key={plan.id} className="flex flex-col gap-2 border-t border-line pt-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-medium text-forest">{person?.name}</p>
                    <p className="text-xs text-muted-ink">
                      {plan.tier} · {kes(plan.priceKes)} · {person?.phone}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => {
                      const pay = activateCarePlan(plan.id, person?.phone ?? "");
                      setSent(`${person?.name} · ${pay.receipt}`);
                    }}
                  >
                    {sw ? "Tuma ombi" : "Send prompt"}
                  </Button>
                </li>
              );
          })}
        </ul>
        {sent ? <p className="mt-3 font-mono text-sm text-teal-deep">{sent}</p> : null}
      </Card>
      <Card className="mt-6 rounded-xl p-5">
        <h2 className="font-display text-lg font-semibold text-forest">
          {due.length} {sw ? "ukaguzi umechelewa" : due.length === 1 ? "check is overdue" : "checks are overdue"}
        </h2>
        <ul className="mt-3 grid gap-3">
          {due.length === 0 ? (
            <li className="text-sm text-muted-ink">{sw ? "Hakuna kilichochelewa." : "Nothing is overdue."}</li>
          ) : (
            due.map((f) => {
              const device = devices.find((d) => d.id === f.deviceId);
              const person = people.find((p) => p.id === device?.ownerPersonId);
              return (
                <li key={f.id} className="flex flex-col gap-2 border-t border-line pt-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-medium text-forest">{person?.name}</p>
                    <p className="text-xs text-muted-ink">
                      {f.kind} · {formatDate(f.dueAt, locale)} · {device?.serial}
                    </p>
                  </div>
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
                </li>
              );
            })
          )}
        </ul>
      </Card>
    </>
  );
}

function WorkshopRadio() {
  const locale = useAfriStore((s) => s.locale);
  const role = useAfriStore((s) => s.role);
  const sw = locale === "sw";
  const builds = role !== "hub";
  const tickets = useAfriStore((s) => s.tickets);
  const devices = useAfriStore((s) => s.devices);
  const people = useAfriStore((s) => s.people);
  const parts = useAfriStore((s) => s.parts);
  const messages = useAfriStore((s) => s.messages);
  const orders = useAfriStore((s) => s.orders) ?? [];
  const requestPart = useAfriStore((s) => s.requestPart);
  const receivePart = useAfriStore((s) => s.receivePart);
  const closeTicket = useAfriStore((s) => s.closeTicket);
  const workOrders = useAfriStore((s) => s.workOrders);
  const referrals = useAfriStore((s) => s.referrals);
  const toggleQa = useAfriStore((s) => s.toggleQa);
  const releaseWorkOrder = useAfriStore((s) => s.releaseWorkOrder);
  const [picked, setPicked] = useState<Record<string, string>>({});
  const [justReleased, setJustReleased] = useState<string | null>(null);
  const jobs = workOrders.filter((w) => w.status !== "released");
  const open = tickets.filter((t) => t.status !== "closed");
  const loanersLeft = devices.filter((d) => d.status === "in_stock" && !d.ownerPersonId);
  const loanersOut = devices.filter((d) => d.status === "loan");
  const dry = parts.filter((p) => p.stock === 0);

  return (
    <>
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep">
        {sw ? "Redio ya warsha" : "Workshop radio"}
      </p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-forest">
        {dry.length
          ? sw
            ? `${dry.map((p) => p.name).join(", ")} imeisha.`
            : `${dry.map((p) => p.name).join(", ")} is out.`
          : sw
            ? "Hakuna sehemu iliyoisha."
            : "No spare is at zero."}
      </h1>
      <p className="mt-2 max-w-2xl text-ink">
        {sw
          ? `${loanersLeft.length} vya kukopesha vimesalia. ${loanersOut.length} viko nje. Jina, si nambari ya sehemu, ndilo linaloongoza.`
          : `${loanersLeft.length} loaner${loanersLeft.length === 1 ? "" : "s"} left on the shelf. ${loanersOut.length} already out. The name leads, not the part number.`}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {parts
          .filter((p) => p.stock === 0 || p.stock < p.reorderAt)
          .map((p) => {
            const openOrder = orders.find((o) => o.sku === p.sku && o.status === "requested");
            const unit = p.unitKes || PARTS.find((x) => x.sku === p.sku)?.unitKes || 0;
            return (
              <li key={p.sku}>
                {openOrder ? (
                  <Button size="sm" variant="outline" onClick={() => receivePart(openOrder.id)}>
                    {sw ? `Pokea ${p.name}` : `Receive ${p.name}`} · {openOrder.qty}
                  </Button>
                ) : (
                  <Button size="sm" onClick={() => requestPart(p.sku)}>
                    {sw ? `Agiza ${p.name}` : `Order ${p.name}`} · {kes(unit * Math.max(p.reorderAt, 2))}
                  </Button>
                )}
              </li>
            );
          })}
      </ul>
      <section className="mt-8">
        {builds ? (
          <>
        <h2 className="font-display text-lg font-semibold text-forest">
          {jobs.length === 0
            ? sw
              ? "Kila kazi imetolewa"
              : "Every job is released"
            : `${jobs.length} ${sw ? "haijatolewa" : jobs.length === 1 ? "job is not released" : "jobs are not released"}`}
        </h2>
        <p className="mt-1 text-sm text-muted-ink">
          {sw ? "Ukaguzi wote unahitajika. Kufaa bado ni kazi ya kliniki." : "Every QA check is required. The fit lock stays with the clinic."}
        </p>
        {justReleased ? <p className="mt-2 font-mono text-sm text-teal-deep">{justReleased}</p> : null}
        <ul className="mt-3 grid gap-3">
          {jobs.map((job) => {
            const referral = referrals.find((r) => r.id === job.referralId);
            const person = people.find((p) => p.id === referral?.personId);
            const model = MODELS.find((m) => m.id === job.modelId);
            const ready = QA_ITEMS.every((item) => job.qa?.[item.key]);
            return (
              <li key={job.id}>
                <Card className="rounded-xl p-5">
                  <p className="font-display text-xl font-semibold text-forest">{person?.name}</p>
                  <p className="text-sm text-ink">
                    {model?.name} · {job.status === "building" ? (sw ? "inaundwa" : "building") : "QA"}
                  </p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {QA_ITEMS.map((item) => (
                      <li key={item.key}>
                        <label className="flex min-h-11 items-center gap-3 rounded-md bg-cream px-3">
                          <Checkbox
                            checked={!!job.qa?.[item.key]}
                            onCheckedChange={() => toggleQa(job.id, item.key)}
                          />
                          <span className="text-sm text-ink">{item.label}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="sm"
                    className="mt-3"
                    disabled={!ready}
                    onClick={() => {
                      const device = releaseWorkOrder(job.id);
                      if (device) setJustReleased(`${person?.name} · ${device.serial}`);
                    }}
                  >
                    {sw ? "Toa kifaa" : "Release"}
                  </Button>
                </Card>
              </li>
            );
          })}
        </ul>
          </>
        ) : (
          <Card className="rounded-xl p-5">
            <h2 className="font-display text-lg font-semibold text-forest">
              {sw ? "Vifaa vipya vinatoka warshani" : "New devices leave from the workshop"}
            </h2>
            <p className="mt-1 text-sm text-ink">
              {sw
                ? "Kituo hiki kinapokea sehemu na kufunga ukarabati. Hakitoi kifaa kipya."
                : "This hub receives spares and closes repairs. It does not release a new device."}
            </p>
          </Card>
        )}
      </section>
      <ul className="mt-8 grid gap-3">
        {open.map((tkt) => {
          const device = devices.find((d) => d.id === tkt.deviceId);
          const person = people.find((p) => p.id === device?.ownerPersonId);
          const model = MODELS.find((m) => m.id === device?.modelId);
          const blocking = parts.filter((p) => model?.partSkus.includes(p.sku) && p.stock === 0);
          const usable = parts.filter((p) => model?.partSkus.includes(p.sku) && p.stock > 0);
          const sku = picked[tkt.id] || usable[0]?.sku || "none";
          return (
            <li key={tkt.id}>
              <Card className="rounded-xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-display text-xl font-semibold text-forest">{person?.name ?? device?.serial}</p>
                    <p className="text-sm text-ink">{tkt.issue}</p>
                    <p className="mt-1 font-mono text-xs text-muted-ink">{device?.serial} · {tkt.hub}</p>
                  </div>
                  <TicketBadge status={tkt.status} />
                </div>
                <p className="mt-3 text-sm text-teal-deep">
                  {blocking.length
                    ? sw
                      ? `Haiwezi kufungwa. ${blocking.map((p) => p.name).join(", ")} haipo.`
                      : `Cannot close. ${blocking.map((p) => p.name).join(", ")} is out of stock.`
                    : sw
                      ? "Sehemu zinazohitajika zipo."
                      : "The parts this model needs are in stock."}
                </p>
                {blocking.length === 0 ? (
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {usable.length > 0 ? (
                      <select
                        value={sku}
                        onChange={(e) => setPicked((cur) => ({ ...cur, [tkt.id]: e.target.value }))}
                        className="h-11 rounded-md border border-line bg-ivory px-3 text-sm text-forest"
                        aria-label={sw ? "Sehemu iliyotumika" : "Part used"}
                      >
                        {usable.map((p) => (
                          <option key={p.sku} value={p.sku}>
                            {p.name} · {p.stock}
                          </option>
                        ))}
                      </select>
                    ) : null}
                    <Button size="sm" onClick={() => closeTicket(tkt.id, usable.length ? sku : "none")}>
                      {sw ? "Funga ukarabati" : "Close repair"}
                    </Button>
                  </div>
                ) : null}
              </Card>
            </li>
          );
        })}
      </ul>
      {messages[0] ? (
        <Card className="mt-4 rounded-xl p-5">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-forest">{sw ? "Laini ya hitilafu" : "Fault line"}</h2>
            <Button asChild variant="link" size="sm">
              <Link to="/app/service">
                {sw ? "Ukarabati" : "Repairs"}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <ul className="grid gap-2">
            {messages.slice(0, 3).map((m) => (
              <li key={m.id} className="text-sm text-ink">
                <span className="font-mono text-[11px] uppercase text-teal-deep">{m.channel}</span> {m.body}
              </li>
            ))}
          </ul>
        </Card>
      ) : null}
    </>
  );
}

function CountyBoard() {
  const locale = useAfriStore((s) => s.locale);
  const role = useAfriStore((s) => s.role);
  const sw = locale === "sw";
  const devices = useAfriStore((s) => s.devices);
  const people = useAfriStore((s) => s.people);
  const followUps = useAfriStore((s) => s.followUps);
  const tickets = useAfriStore((s) => s.tickets);
  const audit = useAfriStore((s) => s.audit);
  const orders = (useAfriStore((s) => s.orders) ?? []).filter((o) => o.status === "requested");
  const parts = useAfriStore((s) => s.parts);
  const spareCash = orders.reduce((sum, o) => sum + o.qty * o.unitKes, 0);
  const handed = devices.filter((d) => d.ownerPersonId && (d.status === "delivered" || d.status === "in_repair"));
  const unfunded = handed.reduce((sum, d) => sum + gapFor(d.modelId), 0);
  const waitingHandover = devices.filter((d) => d.ownerPersonId && d.status === "in_stock");
  const nextGap = waitingHandover.reduce((sum, d) => sum + gapFor(d.modelId), 0);
  const done = followUps.filter((f) => f.completedAt);
  const using = done.filter((f) => f.outcome === "using" || (f.outcome == null && f.stillUsing));
  const yearChecks = followUps.filter((f) => f.kind === "12m" && !f.completedAt && f.dueAt <= TODAY);
  const closed = tickets.filter((t) => t.closedAt);
  const hours =
    closed.length === 0
      ? 0
      : Math.round(
          closed.reduce((sum, t) => sum + (new Date(t.closedAt!).getTime() - new Date(t.openedAt).getTime()) / 3_600_000, 0) /
            closed.length,
        );
  const byCounty = Object.entries(
    people.reduce<Record<string, number>>((acc, p) => {
      acc[p.county] = (acc[p.county] ?? 0) + 1;
      return acc;
    }, {}),
  ).filter(([, n]) => n >= CELL);

  return (
    <>
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep">
        {sw ? "Bodi ya kaunti" : "County board"}
      </p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-forest">
        {sw ? "Vifaa vilivyolipiwa bado vinatumika?" : "Of the devices we paid for, how many are still in use?"}
      </h1>
      <dl className="mt-8 grid gap-3 sm:grid-cols-3">
        <Card className="rounded-xl p-5">
          <dt className="text-sm text-muted-ink">{sw ? "Ukaguzi wa mwaka umechelewa" : "12-month checks overdue"}</dt>
          <dd className="mt-2 font-display text-4xl font-semibold tabular-nums text-forest">{yearChecks.length}</dd>
        </Card>
        <Card className="rounded-xl p-5">
          <dt className="text-sm text-muted-ink">{sw ? "Bado vinatumika, kati ya vilivyokaguliwa" : "Still in use, of those checked"}</dt>
          <dd className="mt-2 font-display text-4xl font-semibold tabular-nums text-forest">
            {done.length ? Math.round((using.length / done.length) * 100) : 0}%
          </dd>
        </Card>
        <Card className="rounded-xl p-5">
          <dt className="text-sm text-muted-ink">{sw ? "Pengo lisilofadhiliwa" : "Unfunded SHA gap"}</dt>
          <dd className="mt-2 font-display text-4xl font-semibold tabular-nums text-forest">{kes(unfunded)}</dd>
        </Card>
      </dl>
      <p className="mt-4 max-w-2xl text-sm text-ink">
        {sw
          ? `Muda wa ukarabati uliofungwa: saa ${hours}. Kukabidhi vilivyomo stokini kunaongeza ${kes(nextGap)}. Pengo si dai la SHA.`
          : `Closed-repair time averages ${hours} hours. Handing over what is already in stock would add ${kes(nextGap)}. The gap is not an SHA claim.`}
      </p>
      {orders.length ? (
        <Card className="mt-6 rounded-xl p-5">
          <h2 className="font-display text-lg font-semibold text-forest">
            {sw ? "Sehemu zilizoagizwa" : "Spares the hub has asked for"}
          </h2>
          <p className="mt-1 text-sm text-ink">
            {kes(spareCash)} {sw ? "bado hazijafika. Hii si dai la SHA." : "has not arrived. This is not an SHA claim."}
          </p>
          <ul className="mt-3 divide-y divide-line">
            {orders.map((o) => {
              const part = parts.find((p) => p.sku === o.sku);
              return (
                <li key={o.id} className="flex flex-wrap items-center justify-between gap-2 py-2 text-sm">
                  <span className="text-forest">{part?.name ?? o.sku}</span>
                  <span className="tabular-nums text-ink">
                    {o.qty} · {kes(o.qty * o.unitKes)}
                  </span>
                </li>
              );
            })}
          </ul>
        </Card>
      ) : (
        <p className="mt-4 text-sm text-muted-ink">
          {sw ? "Hakuna oda ya sehemu iliyo wazi." : "No spare order is open."}
        </p>
      )}
      <Card className="mt-6 rounded-xl p-5">
        <h2 className="font-display text-lg font-semibold text-forest">
          {sw ? "Hesabu za kaunti" : "County counts"}
        </h2>
        {byCounty.length === 0 ? (
          <p className="mt-2 text-sm text-ink">
            {sw
              ? `${people.length} watu. Hakuna kaunti inaonyeshwa, kwa sababu kila kundi ni chini ya ${CELL}. Hivyo ndivyo kanuni ya seli ndogo inavyofanya kazi.`
              : `${people.length} people. No county is shown, because every cell is under ${CELL}. That is the small-cell rule, not a missing chart.`}
          </p>
        ) : (
          <ul className="mt-3 divide-y divide-line">
            {byCounty.map(([county, n]) => (
              <li key={county} className="flex justify-between py-2 text-sm">
                <span className="text-forest">{county}</span>
                <span className="tabular-nums">{n}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>
      {role === "admin" ? (
        <Card className="mt-4 rounded-xl p-5">
          <h2 className="font-display text-lg font-semibold text-forest">{sw ? "Ukaguzi" : "Audit"}</h2>
          <ul className="mt-3 divide-y divide-line">
            {audit.slice(0, 5).map((e) => (
              <li key={e.id} className="py-2 text-sm">
                <p className="text-ink">{e.action}</p>
                <p className="text-xs text-muted-ink">{e.actor}</p>
              </li>
            ))}
          </ul>
        </Card>
      ) : null}
    </>
  );
}
