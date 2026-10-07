import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { a as cn } from "./router-Nm8L1H9z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/card-C4r1V4mt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("surface-card rounded-xl text-card-foreground", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col gap-1.5 p-6", className),
	...props
});
var CardTitle = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
	className: cn("font-display text-xl font-semibold tracking-tight", className),
	...props
});
var CardContent = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("p-6 pt-0", className),
	...props
});
//#endregion
export { CardTitle as i, CardContent as n, CardHeader as r, Card as t };
