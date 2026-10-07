import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { ReferralBadge } from "@/components/status";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CLINICIANS, MODELS } from "@/lib/demo-data";
import { useAfriStore } from "@/lib/store";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/app/queue")({ component: QueuePage });

function QueuePage() {
  const locale = useAfriStore((s) => s.locale);
  const referrals = useAfriStore((s) => s.referrals);
  const people = useAfriStore((s) => s.people);
  const assessments = useAfriStore((s) => s.assessments);
  const assignReferral = useAfriStore((s) => s.assignReferral);
  const saveAssessment = useAfriStore((s) => s.saveAssessment);
  const signPrescription = useAfriStore((s) => s.signPrescription);
  const [activeId, setActiveId] = useState(referrals[0]?.id ?? "");
  const active = referrals.find((r) => r.id === activeId) ?? referrals[0];
  const person = people.find((p) => p.id === active?.personId);
  const assessment = assessments.find((a) => a.referralId === active?.id);

  const sorted = useMemo(
    () =>
      [...referrals].sort((a, b) => {
        const u = { urgent: 0, soon: 1, routine: 2 };
        return u[a.urgency] - u[b.urgency];
      }),
    [referrals],
  );

  return (
    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[320px_1fr]">
      <div>
        <h1 className="font-display text-2xl font-semibold text-forest">
          {locale === "sw" ? "Foleni ya rufaa" : "Referral queue"}
        </h1>
        <ul className="mt-4 space-y-2">
          {sorted.map((r) => {
            const p = people.find((x) => x.id === r.personId);
            const on = r.id === active?.id;
            return (
              <li key={r.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(r.id)}
                  className={`flex w-full min-h-14 flex-col items-start rounded-lg border px-3 py-3 text-left ${on ? "border-forest bg-paper" : "border-line bg-ivory hover:bg-cream"}`}
                >
                  <span className="flex w-full items-center justify-between gap-2">
                    <span className="font-medium text-forest">{p?.name}</span>
                    <ReferralBadge status={r.status} />
                  </span>
                  <span className="mt-1 text-xs text-muted-ink">
                    {p?.county} · {r.urgency}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {active && person ? (
        <Card className="rounded-xl p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl font-semibold text-forest">{person.name}</h2>
              <p className="text-sm text-muted-ink">
                {person.county} · {person.ageBand} · {person.disabilityDomain}
                {person.guardianName ? ` · ${locale === "sw" ? "Mlezi" : "Guardian"}: ${person.guardianName}` : ""}
              </p>
            </div>
            <ReferralBadge status={active.status} />
          </div>
          <p className="mt-4 text-ink">{active.reason}</p>
          <p className="mt-2 text-xs text-muted-ink">
            {formatDate(active.createdAt, locale)} · {active.source} · {active.assignedTo ?? (locale === "sw" ? "Haijakabidhiwa" : "Unassigned")}
          </p>

          {active.status === "triage" ? (
            <div className="mt-6">
              <Label htmlFor="clinician">{locale === "sw" ? "Kabidhi kwa mtaalamu" : "Assign clinician"}</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {CLINICIANS.map((c) => (
                  <Button
                    key={c}
                    variant="outline"
                    onClick={() => {
                      assignReferral(active.id, c);
                      toast.success(locale === "sw" ? "Imekabidhiwa" : "Assigned");
                    }}
                  >
                    {c}
                  </Button>
                ))}
              </div>
            </div>
          ) : null}

          <form
            className="mt-8 grid gap-4 border-t border-line pt-6"
            onSubmit={(e) => {
              e.preventDefault();
              const form = new FormData(e.currentTarget);
              saveAssessment(active.id, {
                clinician: active.assignedTo ?? CLINICIANS[0],
                mobilityScore: Number(form.get("score") || 50),
                notes: String(form.get("notes") ?? ""),
                measurements: String(form.get("meas") ?? ""),
                signedAt: new Date().toISOString(),
              });
              toast.success(locale === "sw" ? "Tathmini imesainiwa" : "Assessment signed");
            }}
          >
            <h3 className="font-display text-lg font-semibold text-forest">
              {locale === "sw" ? "Tathmini" : "Assessment"}
            </h3>
            <div className="grid gap-2">
              <Label htmlFor="meas">{locale === "sw" ? "Vipimo" : "Measurements"}</Label>
              <Input id="meas" name="meas" defaultValue={assessment?.measurements} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="score">{locale === "sw" ? "Alama ya mwendo (0–100)" : "Mobility score (0–100)"}</Label>
              <Input id="score" name="score" type="number" min={0} max={100} defaultValue={assessment?.mobilityScore ?? 50} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="notes">{locale === "sw" ? "Maelezo ya kliniki" : "Clinical notes"}</Label>
              <Textarea id="notes" name="notes" defaultValue={assessment?.notes} required />
            </div>
            <Button type="submit">{locale === "sw" ? "Saini tathmini" : "Sign assessment"}</Button>
          </form>

          {assessment?.signedAt ? (
            <form
              className="mt-6 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = new FormData(e.currentTarget);
                signPrescription(assessment.id, String(form.get("model")), String(form.get("size")));
                toast.success(locale === "sw" ? "Maagizo yamesainiwa. Oda ya kazi imeundwa." : "Prescription signed. Work order created.");
              }}
            >
              <h3 className="font-display text-lg font-semibold text-forest">
                {locale === "sw" ? "Maagizo" : "Prescription"}
              </h3>
              <div className="grid gap-2">
                <Label htmlFor="model">{locale === "sw" ? "Kifaa" : "Device"}</Label>
                <select id="model" name="model" className="h-11 rounded-md border border-line bg-paper px-3" defaultValue="m-wc">
                  {MODELS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="size">{locale === "sw" ? "Ukubwa / maelezo" : "Size / spec"}</Label>
                <Input id="size" name="size" defaultValue="Adult 40 cm" required />
              </div>
              <Button type="submit">{locale === "sw" ? "Saini maagizo" : "Sign prescription"}</Button>
            </form>
          ) : null}

          <Button asChild variant="ghost" className="mt-4">
            <Link to="/app/workshop">{locale === "sw" ? "Nenda warsha" : "Go to workshop"}</Link>
          </Button>
        </Card>
      ) : null}
    </div>
  );
}
