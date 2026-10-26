import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as CircleCheck, a as Stethoscope, d as HeartHandshake, m as Factory, n as Wrench, o as ShieldCheck, s as QrCode, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { C as useAfriStore, S as kes, g as MODELS, m as Badge, o as Card, u as Button, y as WHO_STEPS } from "./router-B113j5pF.mjs";
import { t } from "./i18n-CfgqnK2l.mjs";
import { n as LogoLockup } from "./a11y-bar-CzxIPNqn.mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-header-9rMMdP7T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-NEIiILkZ.js
var import_jsx_runtime = require_jsx_runtime();
var PRODUCTS = [
	{
		name: "Community wheelchair",
		meta: "Steel/aluminium frame · 3D-printed seating parts · ISO 7176",
		price: "KES 26,000"
	},
	{
		name: "Walking aids",
		meta: "Crutches, canes, frames · local repair",
		price: "KES 2,800–4,500"
	},
	{
		name: "Orthoses & sockets",
		meta: "Clinically fitted · 3D-printed · partner clinic",
		price: "KES 15,000"
	},
	{
		name: "ADL aids",
		meta: "Grips, openers, daily living",
		price: "KES 900"
	}
];
function Home() {
	const locale = useAfriStore((s) => s.locale);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hero-wash min-h-svh",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "leaf",
								className: "mb-4",
								children: t(locale, "heroKicker")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "max-w-xl text-4xl font-semibold text-forest md:text-5xl",
								children: t(locale, "heroTitle")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-lg text-ink",
								children: t(locale, "heroLead")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/request",
											children: [t(locale, "ctaRequest"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										variant: "outline",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/app",
											children: t(locale, "ctaPlatform")
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										variant: "ghost",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/fault",
											children: t(locale, "navFault")
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										variant: "ghost",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/d/$token",
											params: { token: "9fK3x142" },
											children: t(locale, "ctaPassport")
										})
									})
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "overflow-hidden rounded-2xl p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoLockup, { className: "mb-6 h-16" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-ink",
									children: locale === "sw" ? "Sio printa ya 3D ndiyo ngome. Ni utengenezaji wa ndani + ushirikiano wa kliniki + mtandao wa ukarabati + data." : "The 3D printer is not the moat. Local manufacture, clinical partnership, a repair network and data are."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-6 grid grid-cols-3 gap-3 border-t border-line pt-6",
									children: [
										["550k", t(locale, "proofNeed")],
										["2.2%", t(locale, "proofCensus")],
										["80%+", t(locale, "proofRural")]
									].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-display text-2xl font-semibold tabular-nums text-forest",
										children: n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-[11px] leading-snug text-muted-ink",
										children: l
									})] }, l))
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-y border-line bg-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-4 py-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl font-semibold text-forest",
									children: t(locale, "stepsTitle")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-2xl text-ink",
									children: t(locale, "stepsLead")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
									children: WHO_STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "rounded-xl border border-line bg-ivory p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-xs tabular-nums text-teal-deep",
											children: ["0", step.n]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 font-display text-lg font-semibold text-forest",
											children: locale === "sw" ? step.sw : step.en
										})]
									}, step.n))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto max-w-6xl px-4 py-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-semibold text-forest",
							children: t(locale, "tiersTitle")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-4 md:grid-cols-3",
							children: [
								{
									tier: "Tier 1 · Now",
									title: locale === "sw" ? "Teknolojia rahisi" : "Low-tech volume",
									body: locale === "sw" ? "Viti vya magurudumu, fimbo, fremu, vifaa vya maisha ya kila siku. Chuma, si PLA." : "Wheelchairs, crutches, frames, daily-living aids. Welded metal frames — not PLA in Kenyan heat."
								},
								{
									tier: "Tier 2 · Year 1–2",
									title: locale === "sw" ? "Kati, kufaa kliniki" : "Intermediate, clinical",
									body: locale === "sw" ? "Orthoses na soketi zilizochapishwa 3D, viti vya mkao. Mtaalamu anasaini kila kitu." : "3D-printed orthoses and sockets, postural seating. A clinician signs every design."
								},
								{
									tier: "Tier 3 · Later",
									title: locale === "sw" ? "Mseto / AI" : "Hybrid / AI layer",
									body: locale === "sw" ? "Skani ya simu, matengenezo ya kutabiri, Kiswahili. AI inashauri; binadamu anaamua." : "Phone-scan fitting, predictive maintenance, Swahili tools. AI recommends; a human decides."
								}
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "rounded-xl p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep",
										children: c.tier
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-xl font-semibold text-forest",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-ink",
										children: c.body
									})
								]
							}, c.tier))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "bg-forest text-ivory",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl font-semibold text-ivory",
									children: t(locale, "platformTitle")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-leaf",
									children: t(locale, "platformLead")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 space-y-4",
									children: [
										{
											icon: Stethoscope,
											t: locale === "sw" ? "Tathmini na maagizo yaliyosainiwa" : "Signed assessment and prescription"
										},
										{
											icon: Factory,
											t: locale === "sw" ? "Langua ya ubora kabla ya kutoa kifaa" : "QA gate before a device can be released"
										},
										{
											icon: QrCode,
											t: locale === "sw" ? "Pasipoti ya QR, bila taarifa binafsi" : "QR passport with no personal data on the public face"
										},
										{
											icon: Wrench,
											t: locale === "sw" ? "Tiketi za ukarabati na vifaa vya mkopo" : "Repair tickets, spares and loan devices"
										},
										{
											icon: HeartHandshake,
											t: locale === "sw" ? "Mipango ya huduma kwenye M-Pesa" : "Care-plan subscriptions on M-Pesa"
										},
										{
											icon: ShieldCheck,
											t: locale === "sw" ? "Ridhaa, haki za data, na ukaguzi" : "Consent, data rights and an audit trail"
										}
									].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(row.icon, { className: "mt-0.5 size-5 text-leaf" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.t })]
									}, row.t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "inverse",
									className: "mt-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/app",
										children: [t(locale, "ctaPlatform"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-semibold",
									children: t(locale, "productsTitle")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 divide-y divide-forest/40 rounded-xl border border-forest/40 bg-forest-deep",
									children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start justify-between gap-4 px-5 py-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: p.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-leaf",
											children: p.meta
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "shrink-0 font-mono text-sm tabular-nums text-teal",
											children: p.price
										})]
									}, p.name))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs text-leaf",
									children: locale === "sw" ? "Bei ni dhana hadi nukuu za wasambazaji zipatikane." : "Prices are working assumptions until supplier quotes land."
								})
							] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto max-w-6xl px-4 py-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-semibold text-forest",
								children: t(locale, "honestTitle")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-ink",
								children: t(locale, "honestLead")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 hidden overflow-x-auto rounded-xl border border-line md:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-left text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "bg-cream text-forest",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
											"",
											"Year 1",
											"Year 2",
											"Year 3"
										].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 font-medium",
											children: h
										}, h)) })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
										className: "bg-paper",
										children: [
											[
												"Devices",
												"300",
												"1,200",
												"3,000"
											],
											[
												"Revenue",
												"KES 3.6m",
												"KES 14.6m",
												"KES 36.5m"
											],
											[
												"Result before grants",
												"−5.4m",
												"−6.3m",
												"−6.1m"
											],
											[
												"After grants",
												"+0.6m",
												"−1.3m",
												"−2.1m"
											]
										].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
											className: "border-t border-line",
											children: row.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3 tabular-nums text-ink",
												children: c
											}, c))
										}, row[0]))
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 grid gap-3 md:hidden",
								children: [
									{
										y: "Year 1",
										devices: "300",
										rev: "KES 3.6m",
										before: "−5.4m",
										after: "+0.6m"
									},
									{
										y: "Year 2",
										devices: "1,200",
										rev: "KES 14.6m",
										before: "−6.3m",
										after: "−1.3m"
									},
									{
										y: "Year 3",
										devices: "3,000",
										rev: "KES 36.5m",
										before: "−6.1m",
										after: "−2.1m"
									}
								].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-xl border border-line bg-paper p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-lg font-semibold text-forest",
											children: row.y
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-sm text-ink",
											children: [
												row.devices,
												" devices · ",
												row.rev
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted-ink",
											children: [
												"Before grants ",
												row.before,
												" · after ",
												row.after
											]
										})
									]
								}, row.y))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 flex items-start gap-2 text-sm text-muted-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4 text-teal-deep" }), locale === "sw" ? "Bila ruzuku, tunahitaji takriban vifaa 4,000–4,500 kwa mwaka, au mchanganyiko wa juu wa orthoses na mipango ya huduma." : "Without grants, break-even needs about 4,000–4,500 devices a year, or a richer mix of orthoses and care plans."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-10 font-display text-2xl font-semibold text-forest",
								children: locale === "sw" ? "Pengo la ushuru" : "What SHA does not cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-2xl text-sm text-ink",
								children: locale === "sw" ? "Orodha ya 2025 inaweka kiti cha magurudumu KES 15,000, na tu ikiwa bajeti imetolewa. Gharama yetu ya kujenga ni juu zaidi. Pengo linafadhiliwa, haliuzwi kama faida." : "The 2025 tariff lists a wheelchair at KES 15,000, and only if the budget is released. Our build cost is higher. That difference is funded. It is not booked as profit."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 grid gap-3 sm:grid-cols-2",
								children: MODELS.map((m) => {
									const gap = m.shaTariffKes == null ? m.costKes : Math.max(0, m.costKes - m.shaTariffKes);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "rounded-xl border border-line bg-paper p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium text-forest",
												children: m.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-2 text-sm tabular-nums text-ink",
												children: [
													locale === "sw" ? "Gharama" : "Cost",
													" ",
													kes(m.costKes),
													" · SHA",
													" ",
													m.shaTariffKes == null ? locale === "sw" ? "haijaorodheshwa" : "not listed" : kes(m.shaTariffKes)
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-sm tabular-nums text-teal-deep",
												children: [
													locale === "sw" ? "Pengo" : "Unfunded",
													" ",
													kes(gap)
												]
											})
										]
									}, m.id);
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
