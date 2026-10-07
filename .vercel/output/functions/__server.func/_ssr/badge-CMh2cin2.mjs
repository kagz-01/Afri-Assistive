import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as cn } from "./router-Nm8L1H9z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-CMh2cin2.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "border-transparent bg-forest text-ivory",
		teal: "border-transparent bg-teal/20 text-forest",
		leaf: "border-transparent bg-leaf text-forest-deep",
		outline: "border-line text-forest",
		warn: "border-transparent bg-cream text-warning",
		danger: "border-transparent bg-destructive/10 text-destructive"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
export { Badge as t };
