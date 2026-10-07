import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { a as cn } from "./router-Nm8L1H9z.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/textarea-5tbVdkIa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-forest leading-none", className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	className: cn("flex min-h-28 w-full rounded-md border border-line bg-paper px-3 py-2 text-base text-charcoal placeholder:text-muted-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal disabled:opacity-50", className),
	ref,
	...props
}));
Textarea.displayName = "Textarea";
//#endregion
export { Textarea as n, Label as t };
