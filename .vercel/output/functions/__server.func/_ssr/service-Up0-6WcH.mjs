import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as cn, i as useAfriStore, l as MODELS, o as formatDate, s as kes } from "./router-Nm8L1H9z.mjs";
import { t as Button } from "./button-qU7xqmVa.mjs";
import { r as TicketBadge } from "./status-BhDjode9.mjs";
import { t as Card } from "./card-C4r1V4mt.mjs";
import { t } from "./i18n-DH7jgXE2.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-Up0-6WcH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-forest-deep/50", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-paper p-6 shadow-border", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm text-muted-ink hover:text-forest",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col gap-1.5 pr-6", className),
	...props
});
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("font-display text-xl font-semibold", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = DialogDescription$1;
function ServicePage() {
	const locale = useAfriStore((s) => s.locale);
	const tickets = useAfriStore((s) => s.tickets);
	const devices = useAfriStore((s) => s.devices);
	const carePlans = useAfriStore((s) => s.carePlans);
	const people = useAfriStore((s) => s.people);
	const followUps = useAfriStore((s) => s.followUps);
	const closeTicket = useAfriStore((s) => s.closeTicket);
	const completeFollowUp = useAfriStore((s) => s.completeFollowUp);
	const activateCarePlan = useAfriStore((s) => s.activateCarePlan);
	const payments = useAfriStore((s) => s.payments);
	const [paying, setPaying] = (0, import_react.useState)(null);
	const [phase, setPhase] = (0, import_react.useState)("pin");
	const [receipt, setReceipt] = (0, import_react.useState)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold text-forest",
				children: locale === "sw" ? "Ukarabati" : "Repairs"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3",
				children: tickets.map((tkt) => {
					const device = devices.find((d) => d.id === tkt.deviceId);
					const model = MODELS.find((m) => m.id === device?.modelId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex flex-col gap-3 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-teal-deep",
								children: device?.serial
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-forest",
								children: model?.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-ink",
								children: tkt.issue
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-ink",
								children: [
									tkt.hub,
									" · ",
									formatDate(tkt.openedAt, locale)
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketBadge, { status: tkt.status }), tkt.status !== "closed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => closeTicket(tkt.id),
								children: locale === "sw" ? "Funga" : "Close"
							}) : null]
						})]
					}) }, tkt.id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold text-forest",
				children: locale === "sw" ? "Ufuatiliaji" : "Follow-up"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3",
				children: followUps.map((f) => {
					const device = devices.find((d) => d.id === f.deviceId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex flex-col gap-3 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs",
								children: device?.serial
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-ink",
								children: [
									f.kind,
									" · ",
									locale === "sw" ? "Tarehe" : "Due",
									" ",
									formatDate(f.dueAt, locale)
								]
							}),
							f.completedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-teal-deep",
								children: [
									t(locale, "inUse"),
									": ",
									f.stillUsing ? locale === "sw" ? "Ndiyo" : "Yes" : locale === "sw" ? "Hapana" : "No"
								]
							}) : null
						] }), !f.completedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: () => completeFollowUp(f.id, true, "Still using"),
								children: locale === "sw" ? "Inatumika" : "Still using"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => completeFollowUp(f.id, false, "Abandoned"),
								children: locale === "sw" ? "Haitegumiki" : "Not in use"
							})]
						}) : null]
					}) }, f.id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-forest",
					children: locale === "sw" ? "Mipango ya huduma" : "Care plans"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3 md:grid-cols-3",
					children: carePlans.map((c) => {
						const person = people.find((p) => p.id === c.personId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "rounded-xl p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.14em] text-teal-deep",
									children: c.tier
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-xl font-semibold text-forest",
									children: person?.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono tabular-nums text-sm",
									children: [
										kes(c.priceKes),
										" / ",
										locale === "sw" ? "mwezi" : "month"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-ink",
									children: c.status
								}),
								c.status !== "active" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "mt-4 w-full",
									onClick: () => {
										setPaying(c.id);
										setPhase("pin");
										setReceipt(void 0);
									},
									children: t(locale, "payMpesa")
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-xs text-teal-deep",
									children: [
										locale === "sw" ? "Inatumika tangu" : "Active since",
										" ",
										c.startAt
									]
								})
							]
						}) }, c.id);
					})
				}),
				payments[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted-ink",
					children: [
						locale === "sw" ? "Risiti ya mwisho" : "Last receipt",
						" ",
						payments[0].receipt,
						" · ",
						kes(payments[0].amountKes)
					]
				}) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!paying,
				onOpenChange: (o) => !o && setPaying(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: t(locale, "payMpesa") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: locale === "sw" ? "Mfano wa STK Push. Hakuna pesa halisi inayohamishwa." : "Simulated STK Push. No real money moves." })] }), phase === "pin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink",
							children: locale === "sw" ? "Ingiza PIN kwenye simu. (Hapa, bonyeza thibitisha.)" : "Enter your PIN on the handset. (Here, confirm to simulate.)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center gap-2",
							"aria-hidden": true,
							children: [
								0,
								1,
								2,
								3
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 rounded-full bg-forest" }, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => {
								if (!paying) return;
								const pay = activateCarePlan(paying, "+254711000142");
								setReceipt(pay.receipt);
								setPhase("done");
								toast.success(locale === "sw" ? "Malipo yamefanikiwa" : "Payment succeeded");
							},
							children: locale === "sw" ? "Thibitisha PIN" : "Confirm PIN"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-semibold text-forest",
						children: locale === "sw" ? "Imelipwa" : "Paid"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-mono text-sm",
						children: ["M-Pesa ", receipt]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4",
						onClick: () => setPaying(null),
						children: locale === "sw" ? "Funga" : "Close"
					})
				] })] })
			})
		]
	});
}
//#endregion
export { ServicePage as component };
