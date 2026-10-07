import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Badge } from "./badge-CMh2cin2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/status-BhDjode9.js
var import_jsx_runtime = require_jsx_runtime();
function ReferralBadge({ status }) {
	const v = {
		triage: {
			label: "Triage",
			variant: "warn"
		},
		assigned: {
			label: "Assigned",
			variant: "teal"
		},
		assessed: {
			label: "Assessed",
			variant: "teal"
		},
		prescribed: {
			label: "Prescribed",
			variant: "default"
		},
		in_production: {
			label: "In production",
			variant: "outline"
		},
		ready: {
			label: "Ready",
			variant: "leaf"
		},
		delivered: {
			label: "Delivered",
			variant: "leaf"
		},
		fitted: {
			label: "Fitted",
			variant: "leaf"
		},
		closed: {
			label: "Closed",
			variant: "outline"
		}
	}[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: v.variant,
		children: v.label
	});
}
function DeviceBadge({ status }) {
	const v = {
		in_production: {
			label: "In production",
			variant: "outline"
		},
		in_stock: {
			label: "In stock",
			variant: "teal"
		},
		delivered: {
			label: "Delivered",
			variant: "leaf"
		},
		in_repair: {
			label: "In repair",
			variant: "warn"
		},
		loan: {
			label: "Loan device",
			variant: "teal"
		},
		retired: {
			label: "Retired",
			variant: "outline"
		}
	}[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: v.variant,
		children: v.label
	});
}
function TicketBadge({ status }) {
	const v = {
		open: {
			label: "Open",
			variant: "danger"
		},
		assigned: {
			label: "Assigned",
			variant: "teal"
		},
		in_progress: {
			label: "In progress",
			variant: "warn"
		},
		waiting_parts: {
			label: "Waiting parts",
			variant: "outline"
		},
		closed: {
			label: "Closed",
			variant: "leaf"
		}
	}[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: v.variant,
		children: v.label
	});
}
//#endregion
export { ReferralBadge as n, TicketBadge as r, DeviceBadge as t };
