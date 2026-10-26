import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as useAfriStore, S as kes, g as MODELS, o as Card, p as TicketBadge, u as Button, x as formatDate } from "./router-B113j5pF.mjs";
import { t } from "./i18n-CfgqnK2l.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, r as DialogDescription, t as Dialog } from "./dialog-D_jHyFfb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-BZSp5Qm6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	const parts = useAfriStore((s) => s.parts);
	const messages = useAfriStore((s) => s.messages);
	const [partPick, setPartPick] = (0, import_react.useState)({});
	const [paying, setPaying] = (0, import_react.useState)(null);
	const [phase, setPhase] = (0, import_react.useState)("pin");
	const [paid, setPaid] = (0, import_react.useState)(null);
	const role = useAfriStore((s) => s.role);
	const sw = locale === "sw";
	const householdTickets = tickets.filter((tkt) => {
		const device = devices.find((d) => d.id === tkt.deviceId);
		return Boolean(device?.ownerPersonId) && device?.status !== "loan";
	});
	if (role === "beneficiary") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold text-forest",
				children: sw ? "Ukarabati wangu" : "My repairs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-ink",
				children: sw ? "Unaona tiketi iliyo wazi. Kuifunga ni kazi ya kituo, si ya simu hii." : "You can see an open ticket. Closing it is the hub’s job, not this phone’s."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-3",
				children: householdTickets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm text-muted-ink",
					children: sw ? "Hakuna ukarabati wazi." : "No repair is open."
				}) : householdTickets.map((tkt) => {
					const device = devices.find((d) => d.id === tkt.deviceId);
					const person = people.find((p) => p.id === device?.ownerPersonId);
					const model = MODELS.find((m) => m.id === device?.modelId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "rounded-xl p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-forest",
								children: person?.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-teal-deep",
								children: device?.serial
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-ink",
								children: [
									model?.name,
									" · ",
									tkt.issue
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketBadge, { status: tkt.status })
							})
						]
					}) }, tkt.id);
				})
			})
		]
	});
	const today = "2026-10-08";
	const overdue = followUps.filter((f) => !f.completedAt && f.dueAt <= today);
	const done = followUps.filter((f) => f.completedAt);
	const inUse = done.filter((f) => f.outcome === "using" || f.outcome == null && f.stillUsing).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold text-forest",
					children: sw ? "Ukarabati na sehemu" : "Repairs and parts"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-ink",
					children: sw ? "Kufunga tiketi kunahitaji sehemu kutoka kwa pacha wa kifaa. Ikiwa hifadhi ni sifuri, kazi inasubiri — haijafungwa." : "Closing a ticket takes a part from that device’s twin. If stock is zero, the job waits. It does not close."
				}),
				messages.slice(0, 3).length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-2",
					children: messages.slice(0, 3).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] uppercase text-teal-deep",
							children: m.channel
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [" · ", m.body] })]
					}, m.id))
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 flex flex-wrap gap-2",
					children: parts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: `rounded-full border px-3 py-1 text-xs ${p.stock <= p.reorderAt ? "border-line bg-cream text-forest" : "border-line bg-paper text-ink"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: p.sku
							}),
							" ",
							p.name,
							" · ",
							p.stock,
							p.stock === 0 ? sw ? " · hakuna" : " · out" : p.stock <= p.reorderAt ? sw ? " · agiza" : " · reorder" : ""
						]
					}, p.sku))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-muted-ink",
					children: [
						overdue.length,
						" ",
						sw ? "ufuatiliaji umechelewa" : "follow-ups overdue",
						" ·",
						" ",
						done.length ? Math.round(inUse / done.length * 100) : 0,
						"% ",
						sw ? "bado vinatumika" : "still in use"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3",
					children: tickets.map((tkt) => {
						const device = devices.find((d) => d.id === tkt.deviceId);
						const model = MODELS.find((m) => m.id === device?.modelId);
						const loan = devices.find((d) => d.id === tkt.loanDeviceId);
						const choices = parts.filter((p) => model?.partSkus.includes(p.sku));
						const picked = partPick[tkt.id] ?? choices[0]?.sku ?? "none";
						const pickedPart = parts.find((p) => p.sku === picked);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "flex flex-col gap-3 rounded-xl p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
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
											formatDate(tkt.openedAt, locale),
											loan ? ` · ${sw ? "mkopo" : "loaner"} ${loan.serial}` : "",
											tkt.partSku ? ` · ${tkt.partSku}` : ""
										]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketBadge, { status: tkt.status })]
							}), tkt.status !== "closed" && choices.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 sm:flex-row sm:items-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "sr-only",
										htmlFor: `part-${tkt.id}`,
										children: sw ? "Sehemu" : "Part"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										id: `part-${tkt.id}`,
										value: picked,
										onChange: (e) => setPartPick((m) => ({
											...m,
											[tkt.id]: e.target.value
										})),
										className: "h-11 min-w-0 flex-1 rounded-md border border-line bg-ivory px-3 text-sm text-forest",
										children: choices.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: p.sku,
											children: [
												p.name,
												" · ",
												sw ? "hifadhi" : "stock",
												" ",
												p.stock
											]
										}, p.sku))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										onClick: () => {
											const result = closeTicket(tkt.id, picked);
											if (result === "waiting") toast.message(sw ? `${pickedPart?.name ?? "Sehemu"} imeisha. Tiketi inasubiri.` : `${pickedPart?.name ?? "Part"} is out. Ticket is waiting.`);
											else if (result === "closed") toast.success(sw ? "Tiketi imefungwa" : "Ticket closed");
										},
										children: pickedPart && pickedPart.stock < 1 ? sw ? "Subiri sehemu" : "Wait for part" : sw ? "Funga na sehemu" : "Close with part"
									})
								]
							}) : null]
						}) }, tkt.id);
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold text-forest",
				children: sw ? "Bado kinatumika?" : "Still in use?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3",
				children: followUps.map((f) => {
					const device = devices.find((d) => d.id === f.deviceId);
					const late = !f.completedAt && f.dueAt <= today;
					const outcomeLabel = {
						using: sw ? "Bado kinatumika" : "Still in use",
						broken: sw ? "Kimevunjika" : "Broken",
						given: sw ? "Kimepewa mwingine" : "Given away",
						stopped: sw ? "Kimeachwa" : "Stopped"
					};
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
									sw ? "Tarehe" : "Due",
									" ",
									formatDate(f.dueAt, locale),
									late ? sw ? " · imechelewa" : " · overdue" : ""
								]
							}),
							f.completedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-teal-deep",
								children: f.outcome ? outcomeLabel[f.outcome] : f.stillUsing ? outcomeLabel.using : outcomeLabel.stopped
							}) : null
						] }), !f.completedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									onClick: () => completeFollowUp(f.id, "using", "Still using"),
									children: sw ? "Kinatumika" : "Still using"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => completeFollowUp(f.id, "broken", "Broken at follow-up"),
									children: sw ? "Kimevunjika" : "Broken"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => completeFollowUp(f.id, "given", "Given away"),
									children: sw ? "Kimepewa" : "Given away"
								})
							]
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
										setPaid(null);
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
						kes(payments[0].amountKes),
						payments[0].paybill ? ` · Paybill ${payments[0].paybill} · ${payments[0].account}` : ""
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
								setPaid(pay);
								setPhase("done");
								toast.success(locale === "sw" ? "Malipo yamefanikiwa" : "Payment succeeded");
							},
							children: locale === "sw" ? "Thibitisha PIN" : "Confirm PIN"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-semibold text-forest",
						children: locale === "sw" ? "Imethibitishwa" : "Prompt confirmed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-3 grid gap-1 text-sm text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Paybill" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-mono",
									children: paid?.paybill
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: locale === "sw" ? "Akaunti" : "Account" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-mono text-right",
									children: paid?.account
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: locale === "sw" ? "Risiti" : "Receipt" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-mono",
									children: paid?.receipt
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Ratiba" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
									paid?.ratibaMonths,
									" × ",
									kes(paid?.amountKes ?? 0)
								] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-ink",
						children: locale === "sw" ? "Paybill 880155 si nambari iliyosajiliwa. Hakuna pesa iliyohamishwa. Ratiba si deni la moja kwa moja." : "Paybill 880155 is not a registered short code. No money moved. Ratiba is a schedule, not a live debit."
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
