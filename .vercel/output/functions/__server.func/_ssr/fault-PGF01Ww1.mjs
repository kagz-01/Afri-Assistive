import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as useAfriStore, o as Card, u as Button } from "./router-B113j5pF.mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-header-9rMMdP7T.mjs";
import { t as Input } from "./input-B4vhfRNX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fault-PGF01Ww1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FAULTS = [
	{
		code: "PUNCTURE",
		en: "Puncture",
		sw: "Pancha"
	},
	{
		code: "BRAKE",
		en: "Brakes",
		sw: "Breki"
	},
	{
		code: "FRAME",
		en: "Frame or weld",
		sw: "Fremu"
	},
	{
		code: "CUSHION",
		en: "Cushion or seat",
		sw: "Mto"
	},
	{
		code: "OTHER",
		en: "Something else",
		sw: "Nyingine"
	}
];
function FaultPage() {
	const sw = useAfriStore((s) => s.locale) === "sw";
	const reportFault = useAfriStore((s) => s.reportFault);
	const messages = useAfriStore((s) => s.messages);
	const devices = useAfriStore((s) => s.devices);
	const tickets = useAfriStore((s) => s.tickets);
	const [step, setStep] = (0, import_react.useState)("menu");
	const [serial, setSerial] = (0, import_react.useState)("");
	const [screen, setScreen] = (0, import_react.useState)("");
	const [chatSerial, setChatSerial] = (0, import_react.useState)("AA-WC-2026-000118");
	const [chatCode, setChatCode] = (0, import_react.useState)("BRAKE");
	function send(code, channel, value) {
		const result = reportFault(value, code, channel);
		setScreen(result.ok ? result.text : sw ? "Nambari ya kifaa haipo." : result.text);
		setStep("done");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh bg-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				className: "mx-auto max-w-6xl px-4 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep",
						children: sw ? "Laini ya hitilafu" : "Fault line"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 max-w-2xl font-display text-3xl font-semibold text-forest md:text-4xl",
						children: sw ? "Ripoti kifaa kilichoharibika bila kuja kliniki." : "Report a broken device without coming into the clinic."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-ink",
						children: sw ? "USSD na dawati la umbo la WhatsApp hufungua tiketi ile ile ya warsha. Hakuna akaunti ya WhatsApp Business wala nambari fupi iliyosajiliwa bado. Hii ni laini ya majaribio." : "The USSD screen and the WhatsApp-shaped desk open the same workshop ticket. There is no WhatsApp Business account and no registered short code yet. This is the pilot line."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid items-start gap-6 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto w-full max-w-sm rounded-[2rem] border-4 border-forest bg-forest p-4 text-ivory",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-center font-mono text-[11px] tracking-[0.2em] text-leaf",
									children: "*384*55#"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 min-h-44 rounded-xl bg-[#07241f] p-4 font-mono text-sm leading-relaxed",
									children: [
										step === "menu" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "AfriAssistive" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-3",
												children: ["1. ", sw ? "Ripoti hitilafu" : "Report a fault"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["2. ", sw ? "Angalia ukarabati" : "Check a repair"] })
										] }) : null,
										step === "serial" || step === "fault" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: sw ? "Nambari ya kifaa" : "Device serial" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-leaf",
												children: serial || "AA-…"
											}),
											step === "fault" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3",
												children: sw ? "Chagua hitilafu" : "Choose the fault"
											}) : null
										] }) : null,
										step === "lookup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: sw ? "Ingiza nambari, kisha angalia." : "Enter the serial, then check." }) : null,
										step === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: screen }) : null
									]
								}),
								step === "menu" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 grid grid-cols-2 gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "inverse",
										onClick: () => setStep("serial"),
										children: "1"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "inverse",
										onClick: () => {
											setSerial("");
											setStep("lookup");
										},
										children: "2"
									})]
								}) : null,
								step === "serial" || step === "lookup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "mt-3 grid gap-2",
									onSubmit: (e) => {
										e.preventDefault();
										if (step === "lookup") {
											const device = devices.find((d) => d.serial.toLowerCase() === serial.trim().toLowerCase());
											const open = tickets.find((t) => t.deviceId === device?.id && t.status !== "closed");
											setScreen(!device ? sw ? "Nambari haipo." : "No device with that serial." : open ? `${open.id} · ${open.status} · ${open.hub}` : sw ? "Hakuna tiketi wazi." : "No open ticket.");
											setStep("done");
											return;
										}
										setStep("fault");
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: serial,
										onChange: (e) => setSerial(e.target.value),
										placeholder: "AA-WC-2026-000142",
										"aria-label": sw ? "Nambari ya kifaa" : "Device serial",
										className: "bg-ivory text-forest"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										children: sw ? "Tuma" : "Send"
									})]
								}) : null,
								step === "fault" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 grid gap-2",
									children: FAULTS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "rounded-md bg-ivory px-3 py-2 text-left text-sm font-medium text-forest",
										onClick: () => send(f.code, "ussd", serial),
										children: sw ? f.sw : f.en
									}, f.code))
								}) : null,
								step === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "mt-3 w-full",
									variant: "inverse",
									onClick: () => {
										setStep("menu");
										setScreen("");
									},
									children: "OK"
								}) : null
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "rounded-2xl p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl font-semibold text-forest",
									children: sw ? "Dawati la umbo la WhatsApp" : "WhatsApp-shaped desk"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-ink",
									children: sw ? "Ujumbe unaandika tiketi. Hauendi kwa Meta." : "A message writes a ticket. It does not go to Meta."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 grid max-h-72 gap-2 overflow-auto",
									children: messages.slice(0, 8).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: m.from === "person" ? "ml-6 rounded-xl bg-cream px-3 py-2 text-sm text-ink" : "mr-6 rounded-xl bg-leaf/40 px-3 py-2 text-sm text-forest",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: m.body }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[11px] text-muted-ink",
											children: m.channel
										})]
									}, m.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "mt-4 grid gap-2",
									onSubmit: (e) => {
										e.preventDefault();
										send(chatCode, "whatsapp", chatSerial);
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: chatSerial,
											onChange: (e) => setChatSerial(e.target.value),
											"aria-label": sw ? "Nambari ya kifaa" : "Device serial"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs text-muted-ink",
											htmlFor: "chat-fault",
											children: sw ? "Hitilafu" : "Fault"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											id: "chat-fault",
											value: chatCode,
											onChange: (e) => setChatCode(e.target.value),
											className: "h-11 rounded-md border border-line bg-ivory px-3 text-sm text-forest",
											children: FAULTS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: f.code,
												children: sw ? f.sw : f.en
											}, f.code))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "submit",
											children: sw ? "Tuma ujumbe" : "Send message"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "link",
									className: "mt-2 px-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/app/service",
										children: sw ? "Fungua dawati la ukarabati" : "Open the repair desk"
									})
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { FaultPage as component };
