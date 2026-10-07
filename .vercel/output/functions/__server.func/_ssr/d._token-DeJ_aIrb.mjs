import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useAfriStore, l as MODELS, n as Route, o as formatDate } from "./router-Nm8L1H9z.mjs";
import { t as Button } from "./button-qU7xqmVa.mjs";
import { t as DeviceBadge } from "./status-BhDjode9.mjs";
import { n as CardContent, t as Card } from "./card-C4r1V4mt.mjs";
import { t } from "./i18n-DH7jgXE2.mjs";
import { n as Textarea, t as Label } from "./textarea-5tbVdkIa.mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-header-D07GRF9R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/d._token-DeJ_aIrb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PassportPage() {
	const { token } = Route.useParams();
	const locale = useAfriStore((s) => s.locale);
	const devices = useAfriStore((s) => s.devices);
	const openTicket = useAfriStore((s) => s.openTicket);
	const device = devices.find((d) => d.qrToken === token);
	const model = MODELS.find((m) => m.id === device?.modelId);
	const [issue, setIssue] = (0, import_react.useState)("");
	if (!device || !model) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh bg-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				className: "mx-auto max-w-lg px-4 py-16 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold text-forest",
					children: locale === "sw" ? "Pasipoti haijapatikana" : "Passport not found"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-ink",
					children: locale === "sw" ? "Nambari ya QR si sahihi." : "That QR token is not on the registry."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh bg-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				className: "mx-auto max-w-lg px-4 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.18em] text-teal-deep",
						children: locale === "sw" ? "Pasipoti ya kifaa" : "Device passport"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl font-semibold text-forest",
						children: model.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-ink",
						children: t(locale, "noPii")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "mt-6 rounded-xl p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "grid gap-4 p-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-ink",
										children: t(locale, "serial")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-sm tabular-nums",
										children: device.serial
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-ink",
										children: locale === "sw" ? "Hali" : "Status"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceBadge, { status: device.status })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-ink",
										children: locale === "sw" ? "Imetengenezwa" : "Manufactured"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums",
										children: formatDate(device.manufacturedAt, locale)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-ink",
										children: t(locale, "warranty")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums",
										children: formatDate(device.warrantyUntil, locale)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-ink",
										children: locale === "sw" ? "Kiwango" : "Standard"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: model.standard })]
								}),
								device.safetyNotice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rounded-md bg-destructive/10 p-3 text-sm text-destructive",
									children: device.safetyNotice
								}) : null
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8 grid gap-3",
						onSubmit: (e) => {
							e.preventDefault();
							if (!issue.trim()) return;
							openTicket(device.id, issue.trim(), "USER_REPORT");
							toast.success(locale === "sw" ? "Tiketi ya ukarabati imefunguliwa." : "Repair ticket opened.");
							setIssue("");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "issue",
								children: t(locale, "reportFault")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "issue",
								value: issue,
								onChange: (e) => setIssue(e.target.value),
								placeholder: locale === "sw" ? "Eleza hitilafu…" : "Describe the fault…"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: t(locale, "reportFault")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/service",
							children: locale === "sw" ? "Fungua ukarabati" : "Open repairs desk"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { PassportPage as component };
