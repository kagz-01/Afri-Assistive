import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as useAfriStore, _ as QA_ITEMS, a as Checkbox, g as MODELS, o as Card, u as Button } from "./router-B113j5pF.mjs";
import { t } from "./i18n-CfgqnK2l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/workshop-DBWP7mZ8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WorkshopPage() {
	const locale = useAfriStore((s) => s.locale);
	const workOrders = useAfriStore((s) => s.workOrders);
	const people = useAfriStore((s) => s.people);
	const referrals = useAfriStore((s) => s.referrals);
	const toggleQa = useAfriStore((s) => s.toggleQa);
	const releaseWorkOrder = useAfriStore((s) => s.releaseWorkOrder);
	const [activeId, setActiveId] = (0, import_react.useState)(workOrders.find((w) => w.status !== "released")?.id ?? workOrders[0]?.id);
	const active = workOrders.find((w) => w.id === activeId) ?? workOrders[0];
	const referral = referrals.find((r) => r.id === active?.referralId);
	const person = people.find((p) => p.id === referral?.personId);
	const model = MODELS.find((m) => m.id === active?.modelId);
	const allPass = QA_ITEMS.every((i) => active?.qa?.[i.key]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold text-forest",
				children: locale === "sw" ? "Warsha na ukaguzi" : "Workshop and QA"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-ink",
				children: t(locale, "qaGate")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 lg:grid-cols-[280px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: workOrders.map((w) => {
						const m = MODELS.find((x) => x.id === w.modelId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveId(w.id),
							className: `w-full rounded-lg border px-3 py-3 text-left ${w.id === active?.id ? "border-forest bg-paper" : "border-line hover:bg-cream"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium text-forest",
								children: m?.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-wide text-muted-ink",
								children: w.status.replace("_", " ")
							})]
						}) }, w.id);
					})
				}), active && model ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-ink",
							children: [
								person?.name,
								" · ",
								person?.county,
								" · ",
								locale === "sw" ? "Tarehe" : "Due",
								" ",
								active.dueDate
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl font-semibold text-forest",
							children: model.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-ink",
							children: [
								locale === "sw" ? "Fundi" : "Technician",
								": ",
								active.assignedTo,
								" · ",
								model.standard
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: QA_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-11 items-center gap-3 rounded-md bg-cream px-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
									checked: !!active.qa?.[item.key],
									onCheckedChange: () => toggleQa(active.id, item.key),
									disabled: active.status === "released"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm",
									children: item.label
								})]
							}) }, item.key))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-6",
							disabled: !allPass || active.status === "released",
							onClick: () => {
								const device = releaseWorkOrder(active.id);
								if (!device) {
									toast.error(t(locale, "qaGate"));
									return;
								}
								toast.success(locale === "sw" ? `Imetolewa ${device.serial}` : `Released ${device.serial}`);
							},
							children: t(locale, "releaseDevice")
						}),
						active.deviceId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/app/devices",
								children: locale === "sw" ? "Fungua rejista" : "Open registry"
							})
						}) : null
					]
				}) : null]
			})
		]
	});
}
//#endregion
export { WorkshopPage as component };
