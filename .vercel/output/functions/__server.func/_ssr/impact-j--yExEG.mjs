import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { C as useAfriStore, g as MODELS, o as Card } from "./router-B113j5pF.mjs";
import { a as Bar, i as CartesianGrid, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/impact-j--yExEG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ImpactPage() {
	const locale = useAfriStore((s) => s.locale);
	const devices = useAfriStore((s) => s.devices);
	const people = useAfriStore((s) => s.people);
	const tickets = useAfriStore((s) => s.tickets);
	const followUps = useAfriStore((s) => s.followUps);
	const referrals = useAfriStore((s) => s.referrals);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	const rural = people.filter((p) => p.rural).length;
	const women = people.filter((p) => p.sex === "female").length;
	const children = people.filter((p) => [
		"0–4",
		"5–12",
		"13–17"
	].includes(p.ageBand)).length;
	const used = followUps.filter((f) => f.stillUsing).length;
	const done = followUps.filter((f) => f.completedAt).length;
	const useRate = done ? Math.round(used / done * 100) : 0;
	const closed = tickets.filter((t) => t.closedAt);
	const turnaround = closed.length === 0 ? 0 : Math.round(closed.reduce((acc, t) => {
		return acc + (new Date(t.closedAt).getTime() - new Date(t.openedAt).getTime()) / 36e5;
	}, 0) / closed.length);
	const byCounty = Object.entries(people.reduce((acc, p) => {
		acc[p.county] = (acc[p.county] ?? 0) + 1;
		return acc;
	}, {})).map(([county, n]) => ({
		county,
		n
	}));
	const mix = MODELS.map((m) => ({
		name: m.name.replace(" (3D-printed)", "").replace(" (pair)", ""),
		n: devices.filter((d) => d.modelId === m.id).length
	})).filter((d) => d.n > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold text-forest",
				children: locale === "sw" ? "Athari na uwajibikaji" : "Impact and accountability"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-ink",
				children: locale === "sw" ? "Ripoti kwa wafadhili na kaunti. Hakuna seli ndogo kuliko kizingiti. Hii ni data ya mfano." : "Funder and county reporting. No small-cell disclosure. These figures are synthetic demo data."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					[devices.length, locale === "sw" ? "Vifaa kwenye rejista" : "Devices on the registry"],
					[`${useRate}%`, locale === "sw" ? "Bado vinatumika" : "Still in use (follow-up)"],
					[`${turnaround}h`, locale === "sw" ? "Muda wa ukarabati" : "Median repair hours"],
					[referrals.length, locale === "sw" ? "Rufaa" : "Referrals"]
				].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-sm text-muted-ink",
						children: l
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 font-display text-3xl font-semibold tabular-nums text-forest",
						children: n
					})]
				}, String(l)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-3",
				children: [
					[`${women}/${people.length}`, locale === "sw" ? "Wanawake na wasichana" : "Women and girls"],
					[`${children}/${people.length}`, locale === "sw" ? "Watoto" : "Children"],
					[`${rural}/${people.length}`, locale === "sw" ? "Mashambani" : "Rural counties"]
				].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-sm text-muted-ink",
						children: l
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-display text-2xl font-semibold tabular-nums text-forest",
						children: n
					})]
				}, String(l)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold text-forest",
						children: locale === "sw" ? "Watu kwa kaunti" : "People by county"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-64",
						children: mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: byCounty,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										stroke: "var(--color-line)",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "county",
										tick: {
											fill: "var(--color-muted-ink)",
											fontSize: 11
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										allowDecimals: false,
										tick: {
											fill: "var(--color-muted-ink)",
											fontSize: 11
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "n",
										fill: "var(--color-forest)",
										radius: [
											6,
											6,
											0,
											0
										]
									})
								]
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full rounded-lg bg-cream" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold text-forest",
						children: locale === "sw" ? "Mchanganyiko wa vifaa" : "Device mix"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-64",
						children: mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: mix,
								layout: "vertical",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										stroke: "var(--color-line)",
										horizontal: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										type: "number",
										allowDecimals: false,
										tick: {
											fill: "var(--color-muted-ink)",
											fontSize: 11
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										type: "category",
										dataKey: "name",
										width: 120,
										tick: {
											fill: "var(--color-muted-ink)",
											fontSize: 11
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "n",
										fill: "var(--color-teal)",
										radius: [
											0,
											6,
											6,
											0
										]
									})
								]
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full rounded-lg bg-cream" })
					})]
				})]
			})
		]
	});
}
//#endregion
export { ImpactPage as component };
