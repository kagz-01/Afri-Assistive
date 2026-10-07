import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, n as CheckboxIndicator, p as require_jsx_runtime, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { _ as Check } from "../_libs/lucide-react.mjs";
import { a as cn } from "./router-Nm8L1H9z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkbox-BXKweT7t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("peer size-5 shrink-0 rounded-xs border border-forest data-[state=checked]:bg-forest data-[state=checked]:text-ivory focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: "flex items-center justify-center text-current",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
//#endregion
export { Checkbox as t };
