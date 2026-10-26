import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MODELS } from "@/lib/demo-data";
import { useAfriStore } from "@/lib/store";
import { formatDate, kes } from "@/lib/utils";

export const Route = createFileRoute("/app/claims")({ component: ClaimsPage });

const BLOCKER: Record<string, { en: string; sw: string }> = {
  fit: { en: "Fit lock not signed", sw: "Kufaa hakijasainiwa" },
  handover: { en: "Not handed over yet", sw: "Bado hakijakabidhiwa" },
  tariff: { en: "Not on the SHA benefit list", sw: "Hakipo kwenye orodha ya SHA" },
  missing: { en: "Device missing", sw: "Kifaa hakipo" },
};

function ClaimsPage() {
  const locale = useAfriStore((s) => s.locale);
  const sw = locale === "sw";
  const devices = useAfriStore((s) => s.devices);
  const people = useAfriStore((s) => s.people);
  const claims = useAfriStore((s) => s.claims);
  const prepareClaim = useAfriStore((s) => s.prepareClaim);
  const owned = devices.filter((d) => d.ownerPersonId);

  function packText(deviceId: string) {
    const device = devices.find((d) => d.id === deviceId);
    const claim = claims.find((c) => c.deviceId === deviceId);
    const model = MODELS.find((m) => m.id === device?.modelId);
    const person = people.find((p) => p.id === device?.ownerPersonId);
    if (!device || !claim || !model) return "";
    const lines = [
      "AfriAssistive — SHA claim pack (DRAFT)",
      "Not submitted. Not an SHA-contracted claim.",
      "Facility: AfriAssistive pilot desk, Kisumu",
      `Serial: ${device.serial}`,
      `Person: ${person?.name ?? "—"} · ${device.county}`,
      `Device: ${model.name}`,
      `SHA tariff: ${claim.tariffKes == null ? "not listed" : `KES ${claim.tariffKes}`}`,
      `Build cost: KES ${claim.costKes}`,
      `Gap (do not invoice SHA): KES ${claim.gapKes}`,
      `Fit: ${device.fit?.at ? `${device.fit.by ?? "clinician"} · ${device.fit.at.slice(0, 10)}` : "missing"}`,
      `Status: ${claim.status}`,
      claim.blockers.length
        ? `Blockers: ${claim.blockers.map((b) => BLOCKER[b]?.en ?? b).join("; ")}`
        : "Evidence: fit lock signed. Tariff is on Legal Notice 56 of 2025.",
      "Gap funding is a grant, a county top-up, or the household.",
    ];
    return lines.join("\n");
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <section>
        <h1 className="font-display text-3xl font-semibold text-forest">
          {sw ? "Madai ya SHA" : "SHA claim packs"}
        </h1>
        <p className="mt-2 max-w-2xl text-ink">
          {sw
            ? "Rasimu kwa afisa wa madai. Haijatumwa kwa SHA. Tofauti ya bei si dai. Kiti kinagharimu zaidi ya ushuru wa KES 15,000."
            : "A draft for a claims officer. Nothing is submitted to SHA. The price gap is not a claim. A wheelchair costs more than the KES 15,000 tariff."}
        </p>
      </section>

      <ul className="grid gap-4">
        {owned.map((device) => {
          const model = MODELS.find((m) => m.id === device.modelId);
          const person = people.find((p) => p.id === device.ownerPersonId);
          const claim = claims.find((c) => c.deviceId === device.id);
          return (
            <li key={device.id}>
              <Card className="rounded-xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs text-teal-deep">{device.serial}</p>
                    <p className="font-display text-xl font-semibold text-forest">{model?.name}</p>
                    <p className="text-sm text-ink">{person?.name} · {device.county}</p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => {
                      const next = prepareClaim(device.id);
                      if (!next) return;
                      toast.success(next.status === "ready" ? (sw ? "Rasimu iko tayari" : "Draft is ready") : (sw ? "Bado imezuiwa" : "Still blocked"));
                    }}
                  >
                    {sw ? "Andaa rasimu" : "Prepare draft"}
                  </Button>
                </div>
                {claim ? (
                  <div className="mt-4 rounded-lg border border-line bg-cream/60 p-4 text-sm">
                    <p className="font-medium text-forest">
                      {claim.status === "ready" ? (sw ? "Tayari kwa afisa" : "Ready for the officer") : (sw ? "Imezuiwa" : "Blocked")}
                      {" · "}
                      {formatDate(claim.preparedAt, locale)}
                    </p>
                    <p className="mt-2 text-ink">
                      SHA {claim.tariffKes == null ? (sw ? "haijaorodheshwa" : "not listed") : kes(claim.tariffKes)}
                      {" · "}
                      {sw ? "gharama" : "cost"} {kes(claim.costKes)}
                      {" · "}
                      {sw ? "tofauti" : "gap"} {kes(claim.gapKes)}
                    </p>
                    {claim.blockers.length ? (
                      <ul className="mt-2 list-disc pl-4 text-ink">
                        {claim.blockers.map((b) => (
                          <li key={b}>{sw ? BLOCKER[b]?.sw : BLOCKER[b]?.en}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-ink">
                        {sw
                          ? "Ushuru pekee unaweza kuandikwa. Tofauti inahitaji ruzuku, kaunti, au kaya."
                          : "Only the tariff can be written up. The gap needs a grant, the county, or the household."}
                      </p>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-3"
                      onClick={() => {
                        const text = packText(device.id);
                        void navigator.clipboard.writeText(text).then(
                          () => toast.success(sw ? "Rasimu imenakiliwa" : "Draft copied"),
                          () => toast.error(sw ? "Nakili kwa mkono" : "Copy it by hand"),
                        );
                      }}
                    >
                      {sw ? "Nakili rasimu" : "Copy draft"}
                    </Button>
                    <pre className="mt-3 whitespace-pre-wrap font-mono text-xs text-ink">{packText(device.id)}</pre>
                  </div>
                ) : null}
              </Card>
            </li>
          );
        })}
      </ul>

      <section className="rounded-xl border border-line bg-paper p-5">
        <h2 className="font-display text-lg font-semibold text-forest">
          {sw ? "Kinachosubiri usajili" : "Waiting on registration"}
        </h2>
        <ul className="mt-3 grid gap-2 text-sm text-ink">
          <li>{sw ? "Akaunti za wafanyakazi na hifadhidata ya pamoja zimezimwa. Rekodi za afya haziendi seva hadi ODPC na tathmini ya athari." : "Staff logins and a shared clinic database stay off. Health records are not sent to a server until ODPC registration and a data-protection assessment."}</li>
          <li>{sw ? "M-Pesa: paybill 880155 ni mfano. Ratiba ni ratiba, si deni la moja kwa moja." : "M-Pesa: paybill 880155 is a sample. Ratiba is a schedule, not a live debit."}</li>
          <li>{sw ? "WhatsApp na USSD: hakuna akaunti ya biashara wala nambari fupi." : "WhatsApp and USSD: no business account and no short code."}</li>
          <li>{sw ? "SHA: hakuna kiunganishi cha madai. Rasimu hukabidhiwa kwa afisa." : "SHA: there is no claims API. The draft is handed to an officer."}</li>
          <li>{sw ? "DHA na eCHIS: haijathibitishwa. Hakuna uandishi kwa rekodi ya kitaifa." : "Digital Health Agency and eCHIS: not certified. Nothing is written to the national record."}</li>
        </ul>
      </section>
    </div>
  );
}
