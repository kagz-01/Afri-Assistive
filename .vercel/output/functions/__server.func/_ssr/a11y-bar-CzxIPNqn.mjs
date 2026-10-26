import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Contrast, r as Type, u as Languages } from "../_libs/lucide-react.mjs";
import { C as useAfriStore, b as cn, u as Button } from "./router-B113j5pF.mjs";
import { t } from "./i18n-CfgqnK2l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/a11y-bar-CzxIPNqn.js
var import_jsx_runtime = require_jsx_runtime();
function Wordmark({ className, compact = false, to = "/" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: cn("flex min-w-0 items-center gap-2 no-underline sm:gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/icon.png",
			alt: "",
			className: "size-11 rounded-lg object-cover outline outline-1 -outline-offset-1 outline-forest/10"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg font-semibold tracking-tight text-forest",
				children: "AfriAssistive"
			}), !compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-ink",
				children: "Access · Mobility · Independence"
			}) : null]
		})]
	});
}
function LogoLockup({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/logo.png",
		alt: "AfriAssistive — Access, Mobility, Independence",
		className: cn("h-14 w-auto max-w-full object-contain object-left", className)
	});
}
function A11yBar({ inverse = false }) {
	const locale = useAfriStore((s) => s.locale);
	const textScale = useAfriStore((s) => s.textScale);
	const contrast = useAfriStore((s) => s.contrast);
	const setLocale = useAfriStore((s) => s.setLocale);
	const setTextScale = useAfriStore((s) => s.setTextScale);
	const setContrast = useAfriStore((s) => s.setContrast);
	const nextScale = textScale === "md" ? "lg" : textScale === "lg" ? "xl" : "md";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: inverse ? "ghost" : "ghost",
				size: "sm",
				className: inverse ? "text-ivory hover:bg-forest-deep hover:text-leaf" : "",
				onClick: () => setLocale(locale === "en" ? "sw" : "en"),
				"aria-label": t(locale, "lang"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: t(locale, "lang")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: inverse ? "text-ivory hover:bg-forest-deep hover:text-leaf" : "",
				onClick: () => setTextScale(nextScale),
				"aria-label": "Change text size",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: inverse ? "text-ivory hover:bg-forest-deep hover:text-leaf" : "",
				onClick: () => setContrast(!contrast),
				"aria-pressed": contrast,
				"aria-label": "High contrast",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contrast, { className: "size-4" })
			})
		]
	});
}
//#endregion
export { LogoLockup as n, Wordmark as r, A11yBar as t };
