import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/ui/card";
import { MODELS } from "@/lib/demo-data";
import { useAfriStore } from "@/lib/store";

export const Route = createFileRoute("/app/impact")({ component: ImpactPage });

function ImpactPage() {
  const locale = useAfriStore((s) => s.locale);
  const devices = useAfriStore((s) => s.devices);
  const people = useAfriStore((s) => s.people);
  const tickets = useAfriStore((s) => s.tickets);
  const followUps = useAfriStore((s) => s.followUps);
  const referrals = useAfriStore((s) => s.referrals);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const rural = people.filter((p) => p.rural).length;
  const women = people.filter((p) => p.sex === "female").length;
  const children = people.filter((p) => ["0–4", "5–12", "13–17"].includes(p.ageBand)).length;
  const used = followUps.filter((f) => f.stillUsing).length;
  const done = followUps.filter((f) => f.completedAt).length;
  const useRate = done ? Math.round((used / done) * 100) : 0;
  const closed = tickets.filter((t) => t.closedAt);
  const turnaround =
    closed.length === 0
      ? 0
      : Math.round(
          closed.reduce((acc, t) => {
            const hours = (new Date(t.closedAt!).getTime() - new Date(t.openedAt).getTime()) / 3_600_000;
            return acc + hours;
          }, 0) / closed.length,
        );

  const byCounty = Object.entries(
    people.reduce<Record<string, number>>((acc, p) => {
      acc[p.county] = (acc[p.county] ?? 0) + 1;
      return acc;
    }, {}),
  ).map(([county, n]) => ({ county, n }));

  const mix = MODELS.map((m) => ({
    name: m.name.replace(" (3D-printed)", "").replace(" (pair)", ""),
    n: devices.filter((d) => d.modelId === m.id).length,
  })).filter((d) => d.n > 0);

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="font-display text-3xl font-semibold text-forest">
        {locale === "sw" ? "Athari na uwajibikaji" : "Impact and accountability"}
      </h1>
      <p className="mt-2 max-w-2xl text-ink">
        {locale === "sw"
          ? "Ripoti kwa wafadhili na kaunti. Hakuna seli ndogo kuliko kizingiti. Hii ni data ya mfano."
          : "Funder and county reporting. No small-cell disclosure. These figures are synthetic demo data."}
      </p>

      <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [devices.length, locale === "sw" ? "Vifaa kwenye rejista" : "Devices on the registry"],
          [`${useRate}%`, locale === "sw" ? "Bado vinatumika" : "Still in use (follow-up)"],
          [`${turnaround}h`, locale === "sw" ? "Muda wa ukarabati" : "Median repair hours"],
          [referrals.length, locale === "sw" ? "Rufaa" : "Referrals"],
        ].map(([n, l]) => (
          <Card key={String(l)} className="rounded-xl p-5">
            <dt className="text-sm text-muted-ink">{l}</dt>
            <dd className="mt-2 font-display text-3xl font-semibold tabular-nums text-forest">{n}</dd>
          </Card>
        ))}
      </dl>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          [`${women}/${people.length}`, locale === "sw" ? "Wanawake na wasichana" : "Women and girls"],
          [`${children}/${people.length}`, locale === "sw" ? "Watoto" : "Children"],
          [`${rural}/${people.length}`, locale === "sw" ? "Mashambani" : "Rural counties"],
        ].map(([n, l]) => (
          <Card key={String(l)} className="rounded-xl p-5">
            <dt className="text-sm text-muted-ink">{l}</dt>
            <dd className="mt-1 font-display text-2xl font-semibold tabular-nums text-forest">{n}</dd>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card className="rounded-xl p-5">
          <h2 className="font-display text-lg font-semibold text-forest">
            {locale === "sw" ? "Watu kwa kaunti" : "People by county"}
          </h2>
          <div className="mt-4 h-64">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={byCounty}>
                  <CartesianGrid stroke="var(--color-line)" vertical={false} />
                  <XAxis dataKey="county" tick={{ fill: "var(--color-muted-ink)", fontSize: 11 }} />
                  <YAxis allowDecimals={false} tick={{ fill: "var(--color-muted-ink)", fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="n" fill="var(--color-forest)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full rounded-lg bg-cream" />
            )}
          </div>
        </Card>
        <Card className="rounded-xl p-5">
          <h2 className="font-display text-lg font-semibold text-forest">
            {locale === "sw" ? "Mchanganyiko wa vifaa" : "Device mix"}
          </h2>
          <div className="mt-4 h-64">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mix} layout="vertical">
                  <CartesianGrid stroke="var(--color-line)" horizontal={false} />
                  <XAxis type="number" allowDecimals={false} tick={{ fill: "var(--color-muted-ink)", fontSize: 11 }} />
                  <YAxis type="category" dataKey="name" width={120} tick={{ fill: "var(--color-muted-ink)", fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="n" fill="var(--color-teal)" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full rounded-lg bg-cream" />
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
