import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { b as Link, g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Menu, f as Hammer, h as ClipboardList, l as LayoutDashboard, n as Wrench, s as QrCode, t as X, y as Activity } from "../_libs/lucide-react.mjs";
import { a as cn, i as useAfriStore, r as ROLES } from "./router-Nm8L1H9z.mjs";
import { t as Button } from "./button-qU7xqmVa.mjs";
import { t } from "./i18n-DH7jgXE2.mjs";
import { r as Wordmark, t as A11yBar } from "./a11y-bar-Dgp_gtPG.mjs";
import { a as DialogOverlay, c as DialogTrigger, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-IQdZE9Fh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-forest-deep/50", className),
	...props
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn("fixed z-50 flex flex-col gap-4 bg-paper p-6 shadow-border", side === "left" ? "inset-y-0 left-0 h-full w-80" : "inset-y-0 right-0 h-full w-80", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 text-muted-ink hover:text-forest",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col gap-1.5", className),
	...props
});
var SheetTitle = DialogTitle;
var NAV = [
	{
		to: "/app",
		key: "platformHome",
		icon: LayoutDashboard,
		roles: [
			"beneficiary",
			"referrer",
			"clinician",
			"technician",
			"hub",
			"partner",
			"admin"
		]
	},
	{
		to: "/app/queue",
		key: "queue",
		icon: ClipboardList,
		roles: [
			"referrer",
			"clinician",
			"admin"
		]
	},
	{
		to: "/app/workshop",
		key: "workshop",
		icon: Hammer,
		roles: ["technician", "admin"]
	},
	{
		to: "/app/devices",
		key: "devices",
		icon: QrCode,
		roles: [
			"technician",
			"clinician",
			"hub",
			"partner",
			"admin",
			"beneficiary"
		]
	},
	{
		to: "/app/service",
		key: "service",
		icon: Wrench,
		roles: [
			"hub",
			"beneficiary",
			"clinician",
			"admin"
		]
	},
	{
		to: "/app/impact",
		key: "impact",
		icon: Activity,
		roles: [
			"partner",
			"admin",
			"clinician"
		]
	}
];
function NavLinks({ onNavigate }) {
	const locale = useAfriStore((s) => s.locale);
	const role = useAfriStore((s) => s.role);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const items = NAV.filter((n) => n.roles.includes(role));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "flex flex-col gap-1",
		"aria-label": "Platform",
		children: items.map((item) => {
			const active = item.to === "/app" ? pathname === "/app" : pathname.startsWith(item.to);
			const Icon = item.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: item.to,
				onClick: onNavigate,
				className: cn("flex min-h-11 items-center gap-3 rounded-md px-3 text-sm font-medium", active ? "bg-forest text-ivory" : "text-forest hover:bg-cream"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), t(locale, item.key)]
			}, item.to);
		})
	});
}
function AppShell() {
	const locale = useAfriStore((s) => s.locale);
	const role = useAfriStore((s) => s.role);
	const setRole = useAfriStore((s) => s.setRole);
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-svh bg-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-svh",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "sticky top-0 hidden h-svh w-64 shrink-0 flex-col border-r border-line bg-paper p-4 lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {
						compact: true,
						to: "/app"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-ink",
						children: t(locale, "role")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "role-select",
						children: t(locale, "role")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: "role-select",
						value: role,
						onChange: (e) => setRole(e.target.value),
						className: "h-11 w-full rounded-md border border-line bg-ivory px-3 text-sm text-forest",
						children: ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: r.id,
							children: locale === "sw" ? r.sw : r.en
						}, r.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex-1 overflow-y-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-4 text-[11px] leading-relaxed text-muted-ink",
						children: t(locale, "demoNote")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-30 flex h-14 items-center justify-between gap-3 border-b border-line bg-ivory/90 px-3 backdrop-blur-md lg:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 lg:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
								open,
								onOpenChange: setOpen,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "icon",
										"aria-label": "Open menu",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
									side: "left",
									className: "w-80",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
											className: "sr-only",
											children: "Menu"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {
											compact: true,
											to: "/app"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: role,
											onChange: (e) => setRole(e.target.value),
											className: "h-11 w-full rounded-md border border-line bg-ivory px-3 text-sm",
											children: ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: r.id,
												children: locale === "sw" ? r.sw : r.en
											}, r.id))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, { onNavigate: () => setOpen(false) })
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {
								compact: true,
								to: "/app"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden text-sm text-muted-ink lg:block",
							children: locale === "sw" ? "Mfumo wa huduma ya teknolojia saidizi" : "Assistive technology service OS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A11yBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									children: locale === "sw" ? "Tovuti" : "Public site"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					id: "main",
					className: "flex-1 px-3 py-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})]
			})]
		})
	});
}
var SplitComponent = AppShell;
//#endregion
export { SplitComponent as component };
