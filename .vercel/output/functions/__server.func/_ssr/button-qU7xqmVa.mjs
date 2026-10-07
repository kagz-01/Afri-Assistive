import { i as __toESM } from "../_runtime.mjs";
import { l as Slot, m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as cn } from "./router-Nm8L1H9z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-qU7xqmVa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[transform,opacity,background-color,box-shadow] duration-150 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-forest text-ivory hover:bg-forest-deep",
			teal: "bg-teal text-forest-deep hover:bg-teal-deep hover:text-ivory",
			outline: "border border-line bg-paper text-forest hover:bg-cream",
			ghost: "text-forest hover:bg-cream",
			inverse: "bg-ivory text-forest hover:bg-leaf",
			destructive: "bg-destructive text-destructive-foreground hover:opacity-90",
			link: "text-forest underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-4 py-2",
			sm: "h-9 rounded-sm px-3",
			lg: "h-12 rounded-lg px-6 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { Button as t };
