import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  HeartHandshake,
  QrCode,
  ShieldCheck,
  Stethoscope,
  Wrench,
} from "lucide-react";
import { LogoLockup } from "@/components/brand/logo";
import { SiteFooter, SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WHO_STEPS } from "@/lib/demo-data";
import { t } from "@/lib/i18n";
import { useAfriStore } from "@/lib/store";

export const Route = createFileRoute("/")({ component: Home });

const PRODUCTS = [
  { name: "Community wheelchair", meta: "Steel/aluminium frame · 3D-printed seating parts · ISO 7176", price: "KES 26,000" },
  { name: "Walking aids", meta: "Crutches, canes, frames · local repair", price: "KES 2,800–4,500" },
  { name: "Orthoses & sockets", meta: "Clinically fitted · 3D-printed · partner clinic", price: "KES 15,000" },
  { name: "ADL aids", meta: "Grips, openers, daily living", price: "KES 900" },
];

function Home() {
  const locale = useAfriStore((s) => s.locale);
  return (
    <div className="hero-wash min-h-svh">
      <SiteHeader />
      <main id="main">
        <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-16">
          <div>
            <Badge variant="leaf" className="mb-4">
              {t(locale, "heroKicker")}
            </Badge>
            <h1 className="max-w-xl text-4xl font-semibold text-forest md:text-5xl">
              {t(locale, "heroTitle")}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink">{t(locale, "heroLead")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/request">
                  {t(locale, "ctaRequest")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/app">{t(locale, "ctaPlatform")}</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link to="/d/$token" params={{ token: "9fK3x142" }}>
                  {t(locale, "ctaPassport")}
                </Link>
              </Button>
            </div>
          </div>
          <Card className="overflow-hidden rounded-2xl p-6">
            <LogoLockup className="mb-6 h-16" />
            <p className="text-sm text-muted-ink">
              {locale === "sw"
                ? "Sio printa ya 3D ndiyo ngome. Ni utengenezaji wa ndani + ushirikiano wa kliniki + mtandao wa ukarabati + data."
                : "The 3D printer is not the moat. Local manufacture, clinical partnership, a repair network and data are."}
            </p>
            <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-6">
              {[
                ["550k", t(locale, "proofNeed")],
                ["2.2%", t(locale, "proofCensus")],
                ["80%+", t(locale, "proofRural")],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-semibold tabular-nums text-forest">{n}</dt>
                  <dd className="mt-1 text-[11px] leading-snug text-muted-ink">{l}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </section>

        <section className="border-y border-line bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-semibold text-forest">{t(locale, "stepsTitle")}</h2>
            <p className="mt-3 max-w-2xl text-ink">{t(locale, "stepsLead")}</p>
            <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {WHO_STEPS.map((step) => (
                <li key={step.n} className="rounded-xl border border-line bg-ivory p-4">
                  <span className="font-mono text-xs tabular-nums text-teal-deep">0{step.n}</span>
                  <p className="mt-2 font-display text-lg font-semibold text-forest">
                    {locale === "sw" ? step.sw : step.en}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-forest">{t(locale, "tiersTitle")}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                tier: "Tier 1 · Now",
                title: locale === "sw" ? "Teknolojia rahisi" : "Low-tech volume",
                body:
                  locale === "sw"
                    ? "Viti vya magurudumu, fimbo, fremu, vifaa vya maisha ya kila siku. Chuma, si PLA."
                    : "Wheelchairs, crutches, frames, daily-living aids. Welded metal frames — not PLA in Kenyan heat.",
              },
              {
                tier: "Tier 2 · Year 1–2",
                title: locale === "sw" ? "Kati, kufaa kliniki" : "Intermediate, clinical",
                body:
                  locale === "sw"
                    ? "Orthoses na soketi zilizochapishwa 3D, viti vya mkao. Mtaalamu anasaini kila kitu."
                    : "3D-printed orthoses and sockets, postural seating. A clinician signs every design.",
              },
              {
                tier: "Tier 3 · Later",
                title: locale === "sw" ? "Mseto / AI" : "Hybrid / AI layer",
                body:
                  locale === "sw"
                    ? "Skani ya simu, matengenezo ya kutabiri, Kiswahili. AI inashauri; binadamu anaamua."
                    : "Phone-scan fitting, predictive maintenance, Swahili tools. AI recommends; a human decides.",
              },
            ].map((c) => (
              <Card key={c.tier} className="rounded-xl p-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep">{c.tier}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-forest">{c.title}</h3>
                <p className="mt-3 text-sm text-ink">{c.body}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-forest text-ivory">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-ivory">{t(locale, "platformTitle")}</h2>
              <p className="mt-4 text-leaf">{t(locale, "platformLead")}</p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: Stethoscope, t: locale === "sw" ? "Tathmini na maagizo yaliyosainiwa" : "Signed assessment and prescription" },
                  { icon: Factory, t: locale === "sw" ? "Langua ya ubora kabla ya kutoa kifaa" : "QA gate before a device can be released" },
                  { icon: QrCode, t: locale === "sw" ? "Pasipoti ya QR, bila taarifa binafsi" : "QR passport with no personal data on the public face" },
                  { icon: Wrench, t: locale === "sw" ? "Tiketi za ukarabati na vifaa vya mkopo" : "Repair tickets, spares and loan devices" },
                  { icon: HeartHandshake, t: locale === "sw" ? "Mipango ya huduma kwenye M-Pesa" : "Care-plan subscriptions on M-Pesa" },
                  { icon: ShieldCheck, t: locale === "sw" ? "Ridhaa, haki za data, na ukaguzi" : "Consent, data rights and an audit trail" },
                ].map((row) => (
                  <li key={row.t} className="flex items-start gap-3">
                    <row.icon className="mt-0.5 size-5 text-leaf" />
                    <span>{row.t}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" variant="inverse" className="mt-8">
                <Link to="/app">
                  {t(locale, "ctaPlatform")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold">{t(locale, "productsTitle")}</h3>
              <ul className="mt-6 divide-y divide-forest/40 rounded-xl border border-forest/40 bg-forest-deep">
                {PRODUCTS.map((p) => (
                  <li key={p.name} className="flex items-start justify-between gap-4 px-5 py-4">
                    <div>
                      <p className="font-medium">{p.name}</p>
                      <p className="text-sm text-leaf">{p.meta}</p>
                    </div>
                    <p className="shrink-0 font-mono text-sm tabular-nums text-teal">{p.price}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-leaf">
                {locale === "sw"
                  ? "Bei ni dhana hadi nukuu za wasambazaji zipatikane."
                  : "Prices are working assumptions until supplier quotes land."}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-forest">{t(locale, "honestTitle")}</h2>
          <p className="mt-3 max-w-2xl text-ink">{t(locale, "honestLead")}</p>
          <div className="mt-8 hidden overflow-x-auto rounded-xl border border-line md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-cream text-forest">
                <tr>
                  {["", "Year 1", "Year 2", "Year 3"].map((h) => (
                    <th key={h} className="px-4 py-3 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-paper">
                {[
                  ["Devices", "300", "1,200", "3,000"],
                  ["Revenue", "KES 3.6m", "KES 14.6m", "KES 36.5m"],
                  ["Result before grants", "−5.4m", "−6.3m", "−6.1m"],
                  ["After grants", "+0.6m", "−1.3m", "−2.1m"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-line">
                    {row.map((c) => (
                      <td key={c} className="px-4 py-3 tabular-nums text-ink">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-8 grid gap-3 md:hidden">
            {[
              { y: "Year 1", devices: "300", rev: "KES 3.6m", before: "−5.4m", after: "+0.6m" },
              { y: "Year 2", devices: "1,200", rev: "KES 14.6m", before: "−6.3m", after: "−1.3m" },
              { y: "Year 3", devices: "3,000", rev: "KES 36.5m", before: "−6.1m", after: "−2.1m" },
            ].map((row) => (
              <li key={row.y} className="rounded-xl border border-line bg-paper p-4">
                <p className="font-display text-lg font-semibold text-forest">{row.y}</p>
                <p className="mt-2 text-sm text-ink">
                  {row.devices} devices · {row.rev}
                </p>
                <p className="text-sm text-muted-ink">
                  Before grants {row.before} · after {row.after}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 flex items-start gap-2 text-sm text-muted-ink">
            <CheckCircle2 className="mt-0.5 size-4 text-teal-deep" />
            {locale === "sw"
              ? "Bila ruzuku, tunahitaji takriban vifaa 4,000–4,500 kwa mwaka, au mchanganyiko wa juu wa orthoses na mipango ya huduma."
              : "Without grants, break-even needs about 4,000–4,500 devices a year, or a richer mix of orthoses and care plans."}
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
