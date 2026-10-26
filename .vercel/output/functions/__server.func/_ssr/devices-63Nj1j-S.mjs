import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as useAfriStore, a as Checkbox, d as DeviceBadge, g as MODELS, i as FIT_ROWS, o as Card, r as EMPTY_FIT, u as Button, x as formatDate } from "./router-B113j5pF.mjs";
import { t as DeviceQr } from "./device-qr-BxMMfjE6.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, r as DialogDescription, t as Dialog } from "./dialog-D_jHyFfb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/devices-63Nj1j-S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DevicesPage() {
	const locale = useAfriStore((s) => s.locale);
	const role = useAfriStore((s) => s.role);
	const devices = useAfriStore((s) => s.devices);
	const people = useAfriStore((s) => s.people);
	const acceptDelivery = useAfriStore((s) => s.acceptDelivery);
	const [fitting, setFitting] = (0, import_react.useState)(null);
	const [fit, setFit] = (0, import_react.useState)(EMPTY_FIT);
	const sw = locale === "sw";
	const ready = FIT_ROWS.every((row) => fit[row.key] === true);
	const canFit = role === "clinician" || role === "admin";
	const showName = role === "clinician" || role === "admin" || role === "technician" || role === "hub" || role === "beneficiary";
	const visible = role === "beneficiary" ? devices.filter((d) => d.ownerPersonId && d.status !== "loan") : devices;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold text-forest",
				children: sw ? "Rejista ya vifaa" : "Device registry"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-ink",
				children: role === "partner" ? sw ? "Nambari, aina na kaunti. Majina yanabaki kwenye rekodi ya kliniki." : "Serial, model, and county. Names stay on the clinic record." : role === "beneficiary" ? sw ? "Nyumba za mfano kwenye simu hii. Kufaa ni kazi ya kliniki." : "Sample households on this phone. The fit lock stays with the clinic." : sw ? "Kifaa hakiwezi kuwasilishwa hadi orodha ya kufaa iwe kamili. Hii inafungua ufuatiliaji wa wiki 2, miezi 6 na mwaka 1." : "A device cannot be handed over until the fit lock is complete. That opens the 2-week, 6-month and 12-month checks."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-4",
				children: visible.map((d) => {
					const model = MODELS.find((m) => m.id === d.modelId);
					const owner = people.find((p) => p.id === d.ownerPersonId);
					const parts = (model?.partSkus ?? []).map((sku) => sku).join(" · ");
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
									showName && owner ? `${owner.name} · ${d.county}` : d.county,
									" · ",
									formatDate(d.manufacturedAt, locale)
								]
							}),
							parts ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted-ink",
								children: [
									sw ? "Sehemu pacha" : "Parts twin",
									" · ",
									parts
								]
							}) : null,
							d.fit?.at ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-teal-deep",
								children: [
									sw ? "Imefaa" : "Fitted",
									" ",
									formatDate(d.fit.at, locale),
									d.fit.by ? ` · ${d.fit.by}` : ""
								]
							}) : null
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-start gap-3 sm:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceQr, {
								token: d.qrToken,
								quiet: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
									d.status === "in_stock" && d.ownerPersonId && canFit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										onClick: () => {
											setFit(EMPTY_FIT);
											setFitting(d.id);
										},
										children: sw ? "Kufuli ya kufaa" : "Fit lock"
									}) : null
								]
							})]
						})]
					}) }, d.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!fitting,
				onOpenChange: (o) => !o && setFitting(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: sw ? "Kufuli ya kufaa" : "Fit lock" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: sw ? "Zote sita zinahitajika. Hakuna uwasilishaji nusu." : "All six are required. There is no half delivery." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3",
						children: FIT_ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								id: `fit-${row.key}`,
								checked: fit[row.key] === true,
								onCheckedChange: (v) => setFit((f) => ({
									...f,
									[row.key]: v === true
								}))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: `fit-${row.key}`,
								className: "text-sm text-ink",
								children: sw ? row.sw : row.en
							})]
						}, row.key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						disabled: !ready || !fitting,
						onClick: () => {
							if (!fitting) return;
							const err = acceptDelivery(fitting, fit);
							if (err) {
								toast.error(err);
								return;
							}
							toast.success(sw ? "Imefaa. Ufuatiliaji umeandikwa." : "Fitted. Follow-up is now on the clock.");
							setFitting(null);
						},
						children: sw ? "Wasilisha kifaa" : "Hand over the device"
					})
				] })
			})
		]
	});
}
//#endregion
export { DevicesPage as component };
