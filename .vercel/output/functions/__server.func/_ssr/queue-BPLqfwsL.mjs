import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as useAfriStore, f as ReferralBadge, g as MODELS, h as CLINICIANS, o as Card, u as Button, x as formatDate } from "./router-B113j5pF.mjs";
import { n as Textarea, t as Label } from "./textarea-BIVRstwE.mjs";
import { t as Input } from "./input-B4vhfRNX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/queue-BPLqfwsL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function QueuePage() {
	const locale = useAfriStore((s) => s.locale);
	const referrals = useAfriStore((s) => s.referrals);
	const people = useAfriStore((s) => s.people);
	const assessments = useAfriStore((s) => s.assessments);
	const assignReferral = useAfriStore((s) => s.assignReferral);
	const saveAssessment = useAfriStore((s) => s.saveAssessment);
	const signPrescription = useAfriStore((s) => s.signPrescription);
	const role = useAfriStore((s) => s.role);
	const clinical = role === "clinician" || role === "admin";
	const [activeId, setActiveId] = (0, import_react.useState)(referrals[0]?.id ?? "");
	const active = referrals.find((r) => r.id === activeId) ?? referrals[0];
	const person = people.find((p) => p.id === active?.personId);
	const assessment = assessments.find((a) => a.referralId === active?.id);
	const sorted = (0, import_react.useMemo)(() => [...referrals].sort((a, b) => {
		const u = {
			urgent: 0,
			soon: 1,
			routine: 2
		};
		return u[a.urgency] - u[b.urgency];
	}), [referrals]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-6 lg:grid-cols-[320px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-2xl font-semibold text-forest",
			children: locale === "sw" ? "Foleni ya rufaa" : "Referral queue"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-2",
			children: sorted.map((r) => {
				const p = people.find((x) => x.id === r.personId);
				const on = r.id === active?.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActiveId(r.id),
					className: `flex w-full min-h-14 flex-col items-start rounded-lg border px-3 py-3 text-left ${on ? "border-forest bg-paper" : "border-line bg-ivory hover:bg-cream"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex w-full items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-forest",
							children: p?.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferralBadge, { status: r.status })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-1 text-xs text-muted-ink",
						children: [
							p?.county,
							" · ",
							r.urgency
						]
					})]
				}) }, r.id);
			})
		})] }), active && person ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "rounded-xl p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold text-forest",
						children: person.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-ink",
						children: [
							person.county,
							" · ",
							person.ageBand,
							" · ",
							person.disabilityDomain,
							person.guardianName ? ` · ${locale === "sw" ? "Mlezi" : "Guardian"}: ${person.guardianName}` : ""
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferralBadge, { status: active.status })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-ink",
					children: active.reason
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-muted-ink",
					children: [
						formatDate(active.createdAt, locale),
						" · ",
						active.source,
						" · ",
						active.assignedTo ?? (locale === "sw" ? "Haijakabidhiwa" : "Unassigned")
					]
				}),
				clinical && active.status === "triage" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "clinician",
						children: locale === "sw" ? "Kabidhi kwa mtaalamu" : "Assign clinician"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: CLINICIANS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => {
								assignReferral(active.id, c);
								toast.success(locale === "sw" ? "Imekabidhiwa" : "Assigned");
							},
							children: c
						}, c))
					})]
				}) : null,
				clinical ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-8 grid gap-4 border-t border-line pt-6",
					onSubmit: (e) => {
						e.preventDefault();
						const form = new FormData(e.currentTarget);
						saveAssessment(active.id, {
							clinician: active.assignedTo ?? CLINICIANS[0],
							mobilityScore: Number(form.get("score") || 50),
							notes: String(form.get("notes") ?? ""),
							measurements: String(form.get("meas") ?? ""),
							signedAt: (/* @__PURE__ */ new Date()).toISOString()
						});
						toast.success(locale === "sw" ? "Tathmini imesainiwa" : "Assessment signed");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold text-forest",
							children: locale === "sw" ? "Tathmini" : "Assessment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "meas",
								children: locale === "sw" ? "Vipimo" : "Measurements"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "meas",
								name: "meas",
								defaultValue: assessment?.measurements,
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "score",
								children: locale === "sw" ? "Alama ya mwendo (0–100)" : "Mobility score (0–100)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "score",
								name: "score",
								type: "number",
								min: 0,
								max: 100,
								defaultValue: assessment?.mobilityScore ?? 50
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "notes",
								children: locale === "sw" ? "Maelezo ya kliniki" : "Clinical notes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "notes",
								name: "notes",
								defaultValue: assessment?.notes,
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: locale === "sw" ? "Saini tathmini" : "Sign assessment"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-muted-ink",
					children: locale === "sw" ? "Kliniki ndiyo inayosaini tathmini na maagizo." : "The clinic signs the assessment and the prescription."
				}),
				clinical && assessment?.signedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 grid gap-4",
					onSubmit: (e) => {
						e.preventDefault();
						const form = new FormData(e.currentTarget);
						signPrescription(assessment.id, String(form.get("model")), String(form.get("size")));
						toast.success(locale === "sw" ? "Maagizo yamesainiwa. Oda ya kazi imeundwa." : "Prescription signed. Work order created.");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold text-forest",
							children: locale === "sw" ? "Maagizo" : "Prescription"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "model",
								children: locale === "sw" ? "Kifaa" : "Device"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "model",
								name: "model",
								className: "h-11 rounded-md border border-line bg-paper px-3",
								defaultValue: "m-wc",
								children: MODELS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: m.id,
									children: m.name
								}, m.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "size",
								children: locale === "sw" ? "Ukubwa / maelezo" : "Size / spec"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "size",
								name: "size",
								defaultValue: "Adult 40 cm",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: locale === "sw" ? "Saini maagizo" : "Sign prescription"
						})
					]
				}) : null,
				role === "admin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/workshop",
						children: locale === "sw" ? "Nenda warsha" : "Go to workshop"
					})
				}) : null
			]
		}) : null]
	});
}
//#endregion
export { QueuePage as component };
