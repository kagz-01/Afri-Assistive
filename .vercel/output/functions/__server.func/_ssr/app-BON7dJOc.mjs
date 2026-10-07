import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as WHO_STEPS, i as useAfriStore, l as MODELS, r as ROLES, s as kes } from "./router-Nm8L1H9z.mjs";
import { t as Button } from "./button-qU7xqmVa.mjs";
import { n as ReferralBadge, r as TicketBadge } from "./status-BhDjode9.mjs";
import { t as Card } from "./card-C4r1V4mt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-BON7dJOc.js
var import_jsx_runtime = require_jsx_runtime();
function AppHome() {
	const locale = useAfriStore((s) => s.locale);
	const role = useAfriStore((s) => s.role);
	const referrals = useAfriStore((s) => s.referrals);
	const people = useAfriStore((s) => s.people);
	const tickets = useAfriStore((s) => s.tickets);
	const devices = useAfriStore((s) => s.devices);
	const followUps = useAfriStore((s) => s.followUps);
	const workOrders = useAfriStore((s) => s.workOrders);
	const roleLabel = ROLES.find((r) => r.id === role);
	const openTickets = tickets.filter((t) => t.status !== "closed");
	const dueFollow = followUps.filter((f) => !f.completedAt);
	const waitingQa = workOrders.filter((w) => w.status === "qa" || w.status === "queued" || w.status === "building");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep",
				children: locale === "sw" ? "Karibu" : "Workspace"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-3xl font-semibold text-forest",
				children: locale === "sw" ? roleLabel?.sw : roleLabel?.en
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-ink",
				children: role === "beneficiary" ? locale === "sw" ? "Fuatilia rufaa yako, pasipoti ya kifaa na mpango wa huduma." : "Track your referral, device passport and care plan." : role === "clinician" ? locale === "sw" ? "Foleni ya tathmini, maagizo yaliyosainiwa na ufuatiliaji." : "Assessment queue, signed prescriptions and follow-up." : role === "technician" ? locale === "sw" ? "Oda za kazi na lango la ubora. Huwezi kutoa kifaa bila ukaguzi." : "Work orders and the QA gate. Nothing ships without a pass." : locale === "sw" ? "Mnyororo mzima wa huduma katika rekodi moja." : "The full service chain on one record per person and one passport per device."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					[referrals.filter((r) => r.status === "triage" || r.status === "assigned").length, locale === "sw" ? "Rufaa zinazosubiri" : "Waiting referrals"],
					[waitingQa.length, locale === "sw" ? "Warsha wazi" : "Open workshop jobs"],
					[openTickets.length, locale === "sw" ? "Tiketi za ukarabati" : "Open repair tickets"],
					[dueFollow.length, locale === "sw" ? "Ufuatiliaji unaosubiri" : "Follow-ups due"]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold text-forest",
							children: locale === "sw" ? "Rufaa za hivi karibuni" : "Latest referrals"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "link",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/app/queue",
								children: [locale === "sw" ? "Foleni" : "Queue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-line",
						children: referrals.slice(0, 5).map((r) => {
							const person = people.find((p) => p.id === r.personId);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-3 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-forest",
									children: person?.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-ink",
									children: [
										person?.county,
										" · ",
										r.source
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferralBadge, { status: r.status })]
							}, r.id);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold text-forest",
							children: locale === "sw" ? "Ukarabati" : "Repairs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "link",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/app/service",
								children: [locale === "sw" ? "Huduma" : "Service", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-line",
						children: tickets.slice(0, 5).map((tkt) => {
							const device = devices.find((d) => d.id === tkt.deviceId);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-3 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-sm",
									children: device?.serial
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-ink",
									children: tkt.hub
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketBadge, { status: tkt.status })]
							}, tkt.id);
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8",
				children: WHO_STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg bg-cream px-3 py-3 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block font-mono text-[10px] text-teal-deep",
						children: ["0", s.n]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium text-forest",
						children: locale === "sw" ? s.sw : s.en
					})]
				}, s.n))
			}),
			role === "partner" || role === "admin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-8 rounded-xl p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold text-forest",
					children: locale === "sw" ? "Bei za kazi (dhana)" : "Working prices (assumptions)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-line",
					children: MODELS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono tabular-nums",
							children: kes(m.priceKes)
						})]
					}, m.id))
				})]
			}) : null
		]
	});
}
//#endregion
export { AppHome as component };
