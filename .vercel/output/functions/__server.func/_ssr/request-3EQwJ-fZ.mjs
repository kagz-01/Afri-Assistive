import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useAfriStore } from "./router-Nm8L1H9z.mjs";
import { t as Button } from "./button-qU7xqmVa.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-C4r1V4mt.mjs";
import { t } from "./i18n-DH7jgXE2.mjs";
import { n as Textarea, t as Label } from "./textarea-5tbVdkIa.mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-header-D07GRF9R.mjs";
import { t as Input } from "./input-BVi9mTJX.mjs";
import { t as Checkbox } from "./checkbox-BXKweT7t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/request-3EQwJ-fZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COUNTIES = [
	"Kisumu",
	"Kakamega",
	"Makueni",
	"Turkana",
	"Nairobi",
	"Kilifi",
	"Nakuru",
	"Machakos"
];
function RequestPage() {
	const locale = useAfriStore((s) => s.locale);
	const addReferral = useAfriStore((s) => s.addReferral);
	const navigate = useNavigate();
	const [care, setCare] = (0, import_react.useState)(false);
	const [data, setData] = (0, import_react.useState)(false);
	const [research, setResearch] = (0, import_react.useState)(false);
	const [media, setMedia] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		if (!care || !data) {
			toast.error(locale === "sw" ? "Ridhaa ya huduma na data inahitajika." : "Care and data consent are required.");
			return;
		}
		const form = new FormData(e.currentTarget);
		const ageBand = String(form.get("ageBand") ?? "18–29");
		const isChild = ageBand === "0–4" || ageBand === "5–12" || ageBand === "13–17";
		const guardianName = String(form.get("guardian") ?? "");
		if (isChild && !guardianName.trim()) {
			toast.error(locale === "sw" ? "Jina la mlezi linahitajika kwa watoto." : "A guardian name is required for children.");
			return;
		}
		const { referralId } = addReferral({
			name: String(form.get("name") ?? ""),
			phone: String(form.get("phone") ?? ""),
			county: String(form.get("county") ?? "Kisumu"),
			reason: String(form.get("reason") ?? ""),
			urgency: String(form.get("urgency") ?? "routine"),
			source: String(form.get("source") ?? "self"),
			ageBand,
			sex: String(form.get("sex") ?? "undisclosed"),
			guardianName: guardianName || void 0,
			consent: {
				care,
				dataSharing: data,
				research,
				media,
				grantedBy: isChild ? "guardian" : "self"
			}
		});
		toast.success(locale === "sw" ? `Rufaa ${referralId} imepokelewa. Mtaalamu ataiona kwenye foleni.` : `Referral ${referralId} received. A clinician will see it in the queue.`);
		navigate({ to: "/app/queue" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh bg-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				className: "mx-auto max-w-2xl px-4 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-semibold text-forest",
						children: t(locale, "requestTitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-ink",
						children: t(locale, "requestLead")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "mt-8 rounded-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: locale === "sw" ? "Fomu ya rufaa" : "Referral form" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "grid gap-5",
							onSubmit,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "name",
										children: locale === "sw" ? "Jina la mtu anayehitaji kifaa" : "Name of the person who needs a device"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "name",
										name: "name",
										required: true,
										autoComplete: "name"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "phone",
											children: locale === "sw" ? "Simu (M-Pesa)" : "Phone (M-Pesa)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "phone",
											name: "phone",
											required: true,
											inputMode: "tel",
											placeholder: "+2547…"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "county",
											children: locale === "sw" ? "Kaunti" : "County"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											id: "county",
											name: "county",
											className: "h-11 rounded-md border border-line bg-paper px-3",
											children: COUNTIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "ageBand",
												children: locale === "sw" ? "Umri" : "Age band"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												id: "ageBand",
												name: "ageBand",
												className: "h-11 rounded-md border border-line bg-paper px-3",
												children: [
													"0–4",
													"5–12",
													"13–17",
													"18–29",
													"30–39",
													"40–49",
													"50–59",
													"60–69",
													"70+"
												].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: a }, a))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "sex",
												children: locale === "sw" ? "Jinsia" : "Sex"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												id: "sex",
												name: "sex",
												className: "h-11 rounded-md border border-line bg-paper px-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "female",
														children: locale === "sw" ? "Mwanamke" : "Female"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "male",
														children: locale === "sw" ? "Mwanaume" : "Male"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "undisclosed",
														children: locale === "sw" ? "Sijasema" : "Prefer not to say"
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "source",
												children: locale === "sw" ? "Nani anapeleka" : "Who is referring"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												id: "source",
												name: "source",
												className: "h-11 rounded-md border border-line bg-paper px-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "self",
														children: locale === "sw" ? "Mimi / mlezi" : "Self / caregiver"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "chw",
														children: "CHW"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "clinic",
														children: locale === "sw" ? "Kliniki" : "Clinic"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "school",
														children: locale === "sw" ? "Shule" : "School"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "ngo",
														children: "NGO"
													})
												]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "guardian",
										children: locale === "sw" ? "Jina la mlezi (kama ni mtoto)" : "Guardian name (if a child)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "guardian",
										name: "guardian"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "urgency",
										children: locale === "sw" ? "Haraka" : "Urgency"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "urgency",
										name: "urgency",
										className: "h-11 rounded-md border border-line bg-paper px-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "routine",
												children: locale === "sw" ? "Kawaida" : "Routine"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "soon",
												children: locale === "sw" ? "Hivi karibuni" : "Soon"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "urgent",
												children: locale === "sw" ? "Haraka" : "Urgent"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "reason",
										children: locale === "sw" ? "Kwa nini kifaa kinahitajika" : "Why a device is needed"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "reason",
										name: "reason",
										required: true
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
									className: "grid gap-3 rounded-lg bg-cream p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
											className: "px-1 text-sm font-medium text-forest",
											children: locale === "sw" ? "Ridhaa" : "Consent"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-start gap-3 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
												checked: care,
												onCheckedChange: (v) => setCare(v === true)
											}), t(locale, "consentCare")]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-start gap-3 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
												checked: data,
												onCheckedChange: (v) => setData(v === true)
											}), t(locale, "consentData")]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-start gap-3 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
												checked: research,
												onCheckedChange: (v) => setResearch(v === true)
											}), t(locale, "consentResearch")]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-start gap-3 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
												checked: media,
												onCheckedChange: (v) => setMedia(v === true)
											}), t(locale, "consentMedia")]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									size: "lg",
									children: t(locale, "submit")
								})
							]
						}) })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { RequestPage as component };
