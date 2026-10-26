import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAfriStore } from "@/lib/store";

export const Route = createFileRoute("/fault")({ component: FaultPage });

const FAULTS = [
  { code: "PUNCTURE", en: "Puncture", sw: "Pancha" },
  { code: "BRAKE", en: "Brakes", sw: "Breki" },
  { code: "FRAME", en: "Frame or weld", sw: "Fremu" },
  { code: "CUSHION", en: "Cushion or seat", sw: "Mto" },
  { code: "OTHER", en: "Something else", sw: "Nyingine" },
];

function FaultPage() {
  const locale = useAfriStore((s) => s.locale);
  const sw = locale === "sw";
  const reportFault = useAfriStore((s) => s.reportFault);
  const messages = useAfriStore((s) => s.messages);
  const devices = useAfriStore((s) => s.devices);
  const tickets = useAfriStore((s) => s.tickets);
  const [step, setStep] = useState<"menu" | "serial" | "fault" | "done" | "lookup">("menu");
  const [serial, setSerial] = useState("");
  const [screen, setScreen] = useState("");
  const [chatSerial, setChatSerial] = useState("AA-WC-2026-000118");
  const [chatCode, setChatCode] = useState("BRAKE");

  function send(code: string, channel: "ussd" | "whatsapp", value: string) {
    const result = reportFault(value, code, channel);
    setScreen(result.ok ? result.text : sw ? "Nambari ya kifaa haipo." : result.text);
    setStep("done");
  }

  return (
    <div className="min-h-svh bg-ivory">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep">
          {sw ? "Laini ya hitilafu" : "Fault line"}
        </p>
        <h1 className="mt-1 max-w-2xl font-display text-3xl font-semibold text-forest md:text-4xl">
          {sw ? "Ripoti kifaa kilichoharibika bila kuja kliniki." : "Report a broken device without coming into the clinic."}
        </h1>
        <p className="mt-3 max-w-2xl text-ink">
          {sw
            ? "USSD na dawati la umbo la WhatsApp hufungua tiketi ile ile ya warsha. Hakuna akaunti ya WhatsApp Business wala nambari fupi iliyosajiliwa bado. Hii ni laini ya majaribio."
            : "The USSD screen and the WhatsApp-shaped desk open the same workshop ticket. There is no WhatsApp Business account and no registered short code yet. This is the pilot line."}
        </p>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-sm rounded-[2rem] border-4 border-forest bg-forest p-4 text-ivory">
            <p className="text-center font-mono text-[11px] tracking-[0.2em] text-leaf">*384*55#</p>
            <div className="mt-3 min-h-44 rounded-xl bg-[#07241f] p-4 font-mono text-sm leading-relaxed">
              {step === "menu" ? (
                <>
                  <p>AfriAssistive</p>
                  <p className="mt-3">1. {sw ? "Ripoti hitilafu" : "Report a fault"}</p>
                  <p>2. {sw ? "Angalia ukarabati" : "Check a repair"}</p>
                </>
              ) : null}
              {step === "serial" || step === "fault" ? (
                <>
                  <p>{sw ? "Nambari ya kifaa" : "Device serial"}</p>
                  <p className="mt-2 text-leaf">{serial || "AA-…"}</p>
                  {step === "fault" ? <p className="mt-3">{sw ? "Chagua hitilafu" : "Choose the fault"}</p> : null}
                </>
              ) : null}
              {step === "lookup" ? <p>{sw ? "Ingiza nambari, kisha angalia." : "Enter the serial, then check."}</p> : null}
              {step === "done" ? <p>{screen}</p> : null}
            </div>
            {step === "menu" ? (
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button variant="inverse" onClick={() => setStep("serial")}>1</Button>
                <Button variant="inverse" onClick={() => { setSerial(""); setStep("lookup"); }}>2</Button>
              </div>
            ) : null}
            {step === "serial" || step === "lookup" ? (
              <form
                className="mt-3 grid gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (step === "lookup") {
                    const device = devices.find((d) => d.serial.toLowerCase() === serial.trim().toLowerCase());
                    const open = tickets.find((t) => t.deviceId === device?.id && t.status !== "closed");
                    setScreen(
                      !device
                        ? sw ? "Nambari haipo." : "No device with that serial."
                        : open
                          ? `${open.id} · ${open.status} · ${open.hub}`
                          : sw ? "Hakuna tiketi wazi." : "No open ticket.",
                    );
                    setStep("done");
                    return;
                  }
                  setStep("fault");
                }}
              >
                <Input
                  value={serial}
                  onChange={(e) => setSerial(e.target.value)}
                  placeholder="AA-WC-2026-000142"
                  aria-label={sw ? "Nambari ya kifaa" : "Device serial"}
                  className="bg-ivory text-forest"
                />
                <Button type="submit">{sw ? "Tuma" : "Send"}</Button>
              </form>
            ) : null}
            {step === "fault" ? (
              <div className="mt-3 grid gap-2">
                {FAULTS.map((f) => (
                  <button
                    key={f.code}
                    type="button"
                    className="rounded-md bg-ivory px-3 py-2 text-left text-sm font-medium text-forest"
                    onClick={() => send(f.code, "ussd", serial)}
                  >
                    {sw ? f.sw : f.en}
                  </button>
                ))}
              </div>
            ) : null}
            {step === "done" ? (
              <Button className="mt-3 w-full" variant="inverse" onClick={() => { setStep("menu"); setScreen(""); }}>
                OK
              </Button>
            ) : null}
          </div>

          <Card className="rounded-2xl p-5">
            <h2 className="font-display text-xl font-semibold text-forest">
              {sw ? "Dawati la umbo la WhatsApp" : "WhatsApp-shaped desk"}
            </h2>
            <p className="mt-1 text-sm text-muted-ink">
              {sw
                ? "Ujumbe unaandika tiketi. Hauendi kwa Meta."
                : "A message writes a ticket. It does not go to Meta."}
            </p>
            <ul className="mt-4 grid max-h-72 gap-2 overflow-auto">
              {messages.slice(0, 8).map((m) => (
                <li
                  key={m.id}
                  className={m.from === "person" ? "ml-6 rounded-xl bg-cream px-3 py-2 text-sm text-ink" : "mr-6 rounded-xl bg-leaf/40 px-3 py-2 text-sm text-forest"}
                >
                  <p>{m.body}</p>
                  <p className="mt-1 text-[11px] text-muted-ink">{m.channel}</p>
                </li>
              ))}
            </ul>
            <form
              className="mt-4 grid gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                send(chatCode, "whatsapp", chatSerial);
              }}
            >
              <Input
                value={chatSerial}
                onChange={(e) => setChatSerial(e.target.value)}
                aria-label={sw ? "Nambari ya kifaa" : "Device serial"}
              />
              <label className="text-xs text-muted-ink" htmlFor="chat-fault">
                {sw ? "Hitilafu" : "Fault"}
              </label>
              <select
                id="chat-fault"
                value={chatCode}
                onChange={(e) => setChatCode(e.target.value)}
                className="h-11 rounded-md border border-line bg-ivory px-3 text-sm text-forest"
              >
                {FAULTS.map((f) => (
                  <option key={f.code} value={f.code}>{sw ? f.sw : f.en}</option>
                ))}
              </select>
              <Button type="submit">{sw ? "Tuma ujumbe" : "Send message"}</Button>
            </form>
            <Button asChild variant="link" className="mt-2 px-0">
              <Link to="/app/service">{sw ? "Fungua dawati la ukarabati" : "Open the repair desk"}</Link>
            </Button>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
