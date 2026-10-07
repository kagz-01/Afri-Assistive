import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useAfriStore, l as MODELS, o as formatDate } from "./router-Nm8L1H9z.mjs";
import { t as Button } from "./button-qU7xqmVa.mjs";
import { t as DeviceBadge } from "./status-BhDjode9.mjs";
import { t as Card } from "./card-C4r1V4mt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/devices-CeLspzKq.js
var import_jsx_runtime = require_jsx_runtime();
function DevicesPage() {
	const locale = useAfriStore((s) => s.locale);
	const role = useAfriStore((s) => s.role);
	const devices = useAfriStore((s) => s.devices);
	const people = useAfriStore((s) => s.people);
	const acceptDelivery = useAfriStore((s) => s.acceptDelivery);
	const visible = role === "beneficiary" ? devices.filter((d) => d.ownerPersonId === "p1") : devices;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold text-forest",
				children: locale === "sw" ? "Rejista ya vifaa" : "Device registry"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-ink",
				children: locale === "sw" ? "Kila kifaa kina nambari, QR na historia. Mwonekano wa umma haufichi taarifa za afya." : "Every device has a serial, a QR token and a history. The public face never shows health data."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-4",
				children: visible.map((d) => {
					const model = MODELS.find((m) => m.id === d.modelId);
					const owner = people.find((p) => p.id === d.ownerPersonId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex flex-col gap-4 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-sm tabular-nums text-teal-deep",
								children: d.serial
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-semibold text-forest",
								children: model?.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-ink",
								children: [
									role === "beneficiary" ? d.county : owner ? `${owner.name} · ${d.county}` : d.county,
									" ·",
									" ",
									formatDate(d.manufacturedAt, locale)
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceBadge, { status: d.status }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/d/$token",
										params: { token: d.qrToken },
										children: "QR"
									})
								}),
								d.status === "in_stock" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									onClick: () => {
										acceptDelivery(d.id);
										toast.success(locale === "sw" ? "Uwasilishaji umekubaliwa" : "Delivery accepted");
									},
									children: locale === "sw" ? "Kubali uwasilishaji" : "Accept delivery"
								}) : null
							]
						})]
					}) }, d.id);
				})
			})
		]
	});
}
//#endregion
export { DevicesPage as component };
