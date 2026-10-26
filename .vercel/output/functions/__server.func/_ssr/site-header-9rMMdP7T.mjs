import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as useAfriStore, u as Button } from "./router-B113j5pF.mjs";
import { t } from "./i18n-CfgqnK2l.mjs";
import { r as Wordmark, t as A11yBar } from "./a11y-bar-CzxIPNqn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-9rMMdP7T.js
var import_jsx_runtime = require_jsx_runtime();
function SiteHeader() {
	const locale = useAfriStore((s) => s.locale);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-line/70 bg-ivory/90 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl min-w-0 items-center justify-between gap-2 px-3 sm:gap-3 sm:px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { compact: true }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "rounded-md px-3 py-2 text-sm font-medium text-forest hover:bg-cream",
							children: t(locale, "navHome")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/request",
							className: "rounded-md px-3 py-2 text-sm font-medium text-forest hover:bg-cream",
							children: t(locale, "navRequest")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/fault",
							className: "rounded-md px-3 py-2 text-sm font-medium text-forest hover:bg-cream",
							children: t(locale, "navFault")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A11yBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "shrink-0 px-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sm:hidden",
								children: locale === "sw" ? "Jukwaa" : "Platform"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: t(locale, "navPlatform")
							})]
						})
					})]
				})
			]
		})
	});
}
function SiteFooter() {
	const locale = useAfriStore((s) => s.locale);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 md:flex-row md:items-center md:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-ink",
					children: t(locale, "footerRights")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/fault",
					className: "text-sm font-medium text-forest",
					children: t(locale, "navFault")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-ink",
					children: t(locale, "demoNote")
				})
			]
		})
	});
}
//#endregion
export { SiteHeader as n, SiteFooter as t };
