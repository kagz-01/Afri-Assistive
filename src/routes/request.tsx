import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteFooter, SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { t } from "@/lib/i18n";
import { useAfriStore } from "@/lib/store";
import type { Person, Referral } from "@/lib/types";

export const Route = createFileRoute("/request")({ component: RequestPage });

const COUNTIES = ["Kisumu", "Kakamega", "Makueni", "Turkana", "Nairobi", "Kilifi", "Nakuru", "Machakos"];

function RequestPage() {
  const locale = useAfriStore((s) => s.locale);
  const addReferral = useAfriStore((s) => s.addReferral);
  const navigate = useNavigate();
  const [care, setCare] = useState(false);
  const [data, setData] = useState(false);
  const [research, setResearch] = useState(false);
  const [media, setMedia] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!care || !data) {
      toast.error(locale === "sw" ? "Ridhaa ya huduma na data inahitajika." : "Care and data consent are required.");
      return;
    }
    const form = new FormData(e.currentTarget);
    const ageBand = String(form.get("ageBand") ?? "18–29");
    const isChild = ageBand === "0–4" || ageBand === "5–12" || ageBand === "13–17";
    const guardianName = String(form.get("guardian") ?? "");
    if (isChild && !guardianName.trim()) {
      toast.error(locale === "sw" ? "Jina la mlezi linahitajika kwa watoto." : "A guardian name is required for children.");
      return;
    }
    const { referralId } = addReferral({
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      county: String(form.get("county") ?? "Kisumu"),
      reason: String(form.get("reason") ?? ""),
      urgency: String(form.get("urgency") ?? "routine") as Referral["urgency"],
      source: String(form.get("source") ?? "self") as Referral["source"],
      ageBand,
      sex: String(form.get("sex") ?? "undisclosed") as Person["sex"],
      guardianName: guardianName || undefined,
      consent: {
        care,
        dataSharing: data,
        research,
        media,
        grantedBy: isChild ? "guardian" : "self",
      },
    });
    toast.success(
      locale === "sw"
        ? `Rufaa ${referralId} imepokelewa. Mtaalamu ataiona kwenye foleni.`
        : `Referral ${referralId} received. A clinician will see it in the queue.`,
    );
    void navigate({ to: "/app/queue" });
  }

  return (
    <div className="min-h-svh bg-ivory">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-3xl font-semibold text-forest">{t(locale, "requestTitle")}</h1>
        <p className="mt-3 text-ink">{t(locale, "requestLead")}</p>
        <Card className="mt-8 rounded-xl">
          <CardHeader>
            <CardTitle>{locale === "sw" ? "Fomu ya rufaa" : "Referral form"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-5" onSubmit={onSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="name">{locale === "sw" ? "Jina la mtu anayehitaji kifaa" : "Name of the person who needs a device"}</Label>
                <Input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="phone">{locale === "sw" ? "Simu (M-Pesa)" : "Phone (M-Pesa)"}</Label>
                  <Input id="phone" name="phone" required inputMode="tel" placeholder="+2547…" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="county">{locale === "sw" ? "Kaunti" : "County"}</Label>
                  <select id="county" name="county" className="h-11 rounded-md border border-line bg-paper px-3">
                    {COUNTIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-3">
                <div className="grid gap-2">
                  <Label htmlFor="ageBand">{locale === "sw" ? "Umri" : "Age band"}</Label>
                  <select id="ageBand" name="ageBand" className="h-11 rounded-md border border-line bg-paper px-3">
                    {["0–4", "5–12", "13–17", "18–29", "30–39", "40–49", "50–59", "60–69", "70+"].map((a) => (
                      <option key={a}>{a}</option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sex">{locale === "sw" ? "Jinsia" : "Sex"}</Label>
                  <select id="sex" name="sex" className="h-11 rounded-md border border-line bg-paper px-3">
                    <option value="female">{locale === "sw" ? "Mwanamke" : "Female"}</option>
                    <option value="male">{locale === "sw" ? "Mwanaume" : "Male"}</option>
                    <option value="undisclosed">{locale === "sw" ? "Sijasema" : "Prefer not to say"}</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="source">{locale === "sw" ? "Nani anapeleka" : "Who is referring"}</Label>
                  <select id="source" name="source" className="h-11 rounded-md border border-line bg-paper px-3">
                    <option value="self">{locale === "sw" ? "Mimi / mlezi" : "Self / caregiver"}</option>
                    <option value="chw">CHW</option>
                    <option value="clinic">{locale === "sw" ? "Kliniki" : "Clinic"}</option>
                    <option value="school">{locale === "sw" ? "Shule" : "School"}</option>
                    <option value="ngo">NGO</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="guardian">{locale === "sw" ? "Jina la mlezi (kama ni mtoto)" : "Guardian name (if a child)"}</Label>
                <Input id="guardian" name="guardian" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="urgency">{locale === "sw" ? "Haraka" : "Urgency"}</Label>
                <select id="urgency" name="urgency" className="h-11 rounded-md border border-line bg-paper px-3">
                  <option value="routine">{locale === "sw" ? "Kawaida" : "Routine"}</option>
                  <option value="soon">{locale === "sw" ? "Hivi karibuni" : "Soon"}</option>
                  <option value="urgent">{locale === "sw" ? "Haraka" : "Urgent"}</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="reason">{locale === "sw" ? "Kwa nini kifaa kinahitajika" : "Why a device is needed"}</Label>
                <Textarea id="reason" name="reason" required />
              </div>
              <fieldset className="grid gap-3 rounded-lg bg-cream p-4">
                <legend className="px-1 text-sm font-medium text-forest">
                  {locale === "sw" ? "Ridhaa" : "Consent"}
                </legend>
                <label className="flex items-start gap-3 text-sm">
                  <Checkbox checked={care} onCheckedChange={(v) => setCare(v === true)} />
                  {t(locale, "consentCare")}
                </label>
                <label className="flex items-start gap-3 text-sm">
                  <Checkbox checked={data} onCheckedChange={(v) => setData(v === true)} />
                  {t(locale, "consentData")}
                </label>
                <label className="flex items-start gap-3 text-sm">
                  <Checkbox checked={research} onCheckedChange={(v) => setResearch(v === true)} />
                  {t(locale, "consentResearch")}
                </label>
                <label className="flex items-start gap-3 text-sm">
                  <Checkbox checked={media} onCheckedChange={(v) => setMedia(v === true)} />
                  {t(locale, "consentMedia")}
                </label>
              </fieldset>
              <Button type="submit" size="lg">
                {t(locale, "submit")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}
