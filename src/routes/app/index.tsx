import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ReferralBadge, TicketBadge } from "@/components/status";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MODELS, WHO_STEPS } from "@/lib/demo-data";
import { ROLES, useAfriStore } from "@/lib/store";
import { kes } from "@/lib/utils";

export const Route = createFileRoute("/app/")({ component: AppHome });

function AppHome() {
  const locale = useAfriStore((s) => s.locale);
  const role = useAfriStore((s) => s.role);
  const referrals = useAfriStore((s) => s.referrals);
  const people = useAfriStore((s) => s.people);
  const tickets = useAfriStore((s) => s.tickets);
  const devices = useAfriStore((s) => s.devices);
  const followUps = useAfriStore((s) => s.followUps);
  const workOrders = useAfriStore((s) => s.workOrders);
  const roleLabel = ROLES.find((r) => r.id === role);
  const openTickets = tickets.filter((t) => t.status !== "closed");
  const dueFollow = followUps.filter((f) => !f.completedAt);
  const waitingQa = workOrders.filter((w) => w.status === "qa" || w.status === "queued" || w.status === "building");

  return (
    <div className="mx-auto max-w-5xl">
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep">
        {locale === "sw" ? "Karibu" : "Workspace"}
      </p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-forest">
        {locale === "sw" ? roleLabel?.sw : roleLabel?.en}
      </h1>
      <p className="mt-2 max-w-2xl text-ink">
        {role === "beneficiary"
          ? locale === "sw"
            ? "Fuatilia rufaa yako, pasipoti ya kifaa na mpango wa huduma."
            : "Track your referral, device passport and care plan."
          : role === "clinician"
            ? locale === "sw"
              ? "Foleni ya tathmini, maagizo yaliyosainiwa na ufuatiliaji."
              : "Assessment queue, signed prescriptions and follow-up."
            : role === "technician"
              ? locale === "sw"
                ? "Oda za kazi na lango la ubora. Huwezi kutoa kifaa bila ukaguzi."
                : "Work orders and the QA gate. Nothing ships without a pass."
              : locale === "sw"
                ? "Mnyororo mzima wa huduma katika rekodi moja."
                : "The full service chain on one record per person and one passport per device."}
      </p>

      <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [referrals.filter((r) => r.status === "triage" || r.status === "assigned").length, locale === "sw" ? "Rufaa zinazosubiri" : "Waiting referrals"],
          [waitingQa.length, locale === "sw" ? "Warsha wazi" : "Open workshop jobs"],
          [openTickets.length, locale === "sw" ? "Tiketi za ukarabati" : "Open repair tickets"],
          [dueFollow.length, locale === "sw" ? "Ufuatiliaji unaosubiri" : "Follow-ups due"],
        ].map(([n, l]) => (
          <Card key={String(l)} className="rounded-xl p-5">
            <dt className="text-sm text-muted-ink">{l}</dt>
            <dd className="mt-2 font-display text-3xl font-semibold tabular-nums text-forest">{n}</dd>
          </Card>
        ))}
      </dl>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card className="rounded-xl p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-forest">
              {locale === "sw" ? "Rufaa za hivi karibuni" : "Latest referrals"}
            </h2>
            <Button asChild variant="link" size="sm">
              <Link to="/app/queue">
                {locale === "sw" ? "Foleni" : "Queue"}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <ul className="divide-y divide-line">
            {referrals.slice(0, 5).map((r) => {
              const person = people.find((p) => p.id === r.personId);
              return (
                <li key={r.id} className="flex items-center justify-between gap-3 py-3">
                  <div>
                    <p className="font-medium text-forest">{person?.name}</p>
                    <p className="text-xs text-muted-ink">
                      {person?.county} · {r.source}
                    </p>
                  </div>
                  <ReferralBadge status={r.status} />
                </li>
              );
            })}
          </ul>
        </Card>
        <Card className="rounded-xl p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-forest">
              {locale === "sw" ? "Ukarabati" : "Repairs"}
            </h2>
            <Button asChild variant="link" size="sm">
              <Link to="/app/service">
                {locale === "sw" ? "Huduma" : "Service"}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <ul className="divide-y divide-line">
            {tickets.slice(0, 5).map((tkt) => {
              const device = devices.find((d) => d.id === tkt.deviceId);
              return (
                <li key={tkt.id} className="flex items-center justify-between gap-3 py-3">
                  <div>
                    <p className="font-mono text-sm">{device?.serial}</p>
                    <p className="text-xs text-muted-ink">{tkt.hub}</p>
                  </div>
                  <TicketBadge status={tkt.status} />
                </li>
              );
            })}
          </ul>
        </Card>
      </div>

      <ol className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
        {WHO_STEPS.map((s) => (
          <li key={s.n} className="rounded-lg bg-cream px-3 py-3 text-center">
            <span className="block font-mono text-[10px] text-teal-deep">0{s.n}</span>
            <span className="text-xs font-medium text-forest">{locale === "sw" ? s.sw : s.en}</span>
          </li>
        ))}
      </ol>

      {role === "partner" || role === "admin" ? (
        <Card className="mt-8 rounded-xl p-5">
          <h2 className="font-display text-lg font-semibold text-forest">
            {locale === "sw" ? "Bei za kazi (dhana)" : "Working prices (assumptions)"}
          </h2>
          <ul className="mt-4 divide-y divide-line">
            {MODELS.map((m) => (
              <li key={m.id} className="flex items-center justify-between py-2 text-sm">
                <span>{m.name}</span>
                <span className="font-mono tabular-nums">{kes(m.priceKes)}</span>
              </li>
            ))}
          </ul>
        </Card>
      ) : null}
    </div>
  );
}
