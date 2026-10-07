import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { S as useRouter, _ as lazyRouteComponent, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Nm8L1H9z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var CLINICIANS = [
	"Dr. Wanjiku Mwangi, PT",
	"Omondi Otieno, OT",
	"Achieng Okello, PT"
];
var TECHS = ["Brian Kimani", "Mercy Chebet"];
var HUBS = [
	"Kisumu hub",
	"Machakos hub",
	"Kakamega hub",
	"Lodwar outreach"
];
var MODELS = [
	{
		id: "m-wc",
		name: "Community Wheelchair v1.2",
		category: "wheelchair",
		tier: 1,
		priceKes: 26e3,
		costKes: 15e3,
		standard: "ISO 7176"
	},
	{
		id: "m-cr",
		name: "Elbow crutches (pair)",
		category: "walking_aid",
		tier: 1,
		priceKes: 2800,
		costKes: 1300,
		standard: "ISO 11334"
	},
	{
		id: "m-fr",
		name: "Walking frame",
		category: "walking_aid",
		tier: 1,
		priceKes: 4500,
		costKes: 2200,
		standard: "ISO 11334"
	},
	{
		id: "m-afo",
		name: "Paediatric AFO (3D-printed)",
		category: "orthosis",
		tier: 2,
		priceKes: 15e3,
		costKes: 7500,
		standard: "ISO 13485 process"
	},
	{
		id: "m-adl",
		name: "ADL grip & opener set",
		category: "adl",
		tier: 1,
		priceKes: 900,
		costKes: 300,
		standard: "Internal QA"
	}
];
var PEOPLE = [
	{
		id: "p1",
		name: "Amina Odhiambo",
		phone: "+254711000142",
		county: "Kisumu",
		subCounty: "Nyando",
		ageBand: "30–39",
		sex: "female",
		language: "sw",
		disabilityDomain: "Mobility",
		rural: true,
		incomeBand: "low"
	},
	{
		id: "p2",
		name: "Kevin Wanjala",
		phone: "+254722000089",
		county: "Kakamega",
		subCounty: "Lurambi",
		ageBand: "5–12",
		sex: "male",
		language: "en",
		disabilityDomain: "Mobility",
		guardianName: "Faith Wanjala",
		rural: true,
		incomeBand: "low"
	},
	{
		id: "p3",
		name: "Joyce Mutheu",
		phone: "+254733000067",
		county: "Makueni",
		subCounty: "Wote",
		ageBand: "60–69",
		sex: "female",
		language: "sw",
		disabilityDomain: "Mobility",
		rural: true,
		incomeBand: "low"
	},
	{
		id: "p4",
		name: "Peter Lokol",
		phone: "+254744000041",
		county: "Turkana",
		subCounty: "Lodwar",
		ageBand: "40–49",
		sex: "male",
		language: "en",
		disabilityDomain: "Mobility",
		rural: true,
		incomeBand: "low"
	},
	{
		id: "p5",
		name: "Naomi Cherono",
		phone: "+254755000012",
		county: "Nairobi",
		subCounty: "Kasarani",
		ageBand: "18–29",
		sex: "female",
		language: "en",
		disabilityDomain: "Self-care",
		rural: false,
		incomeBand: "mid"
	},
	{
		id: "p6",
		name: "Hassan Ali",
		phone: "+254766000118",
		county: "Kilifi",
		subCounty: "Malindi",
		ageBand: "50–59",
		sex: "male",
		language: "sw",
		disabilityDomain: "Mobility",
		rural: true,
		incomeBand: "mid"
	},
	{
		id: "p7",
		name: "Grace Nyambura",
		phone: "+254777000155",
		county: "Nakuru",
		subCounty: "Naivasha",
		ageBand: "13–17",
		sex: "female",
		language: "en",
		disabilityDomain: "Mobility",
		guardianName: "James Nyambura",
		rural: false,
		incomeBand: "unknown"
	}
];
var CONSENTS = PEOPLE.map((p) => ({
	personId: p.id,
	care: true,
	dataSharing: true,
	research: p.id !== "p4",
	media: p.id === "p2" || p.id === "p7",
	grantedBy: p.guardianName ? "guardian" : "self",
	grantedAt: "2026-08-12T08:00:00+03:00"
}));
var REFERRALS = [
	{
		id: "r1",
		personId: "p1",
		source: "chw",
		reason: "Cannot walk more than 20 m after stroke. Needs community wheelchair for farm and clinic visits.",
		urgency: "soon",
		status: "fitted",
		assignedTo: CLINICIANS[0],
		createdAt: "2026-07-03T09:10:00+03:00"
	},
	{
		id: "r2",
		personId: "p2",
		source: "school",
		reason: "Clubfoot follow-up. Outgrowing current AFO. Pain on the school walk.",
		urgency: "urgent",
		status: "prescribed",
		assignedTo: CLINICIANS[1],
		createdAt: "2026-09-18T11:40:00+03:00"
	},
	{
		id: "r3",
		personId: "p3",
		source: "clinic",
		reason: "Osteoarthritis. Walking frame requested by physiotherapist at Wote.",
		urgency: "routine",
		status: "delivered",
		assignedTo: CLINICIANS[2],
		createdAt: "2026-06-21T14:00:00+03:00"
	},
	{
		id: "r4",
		personId: "p4",
		source: "ngo",
		reason: "Above-knee residual limb. Currently using donated chair unsuited to sand.",
		urgency: "soon",
		status: "assigned",
		assignedTo: CLINICIANS[0],
		createdAt: "2026-09-29T08:20:00+03:00"
	},
	{
		id: "r5",
		personId: "p5",
		source: "self",
		reason: "Limited grip after nerve injury. Needs ADL openers and jar grips.",
		urgency: "routine",
		status: "fitted",
		assignedTo: CLINICIANS[1],
		createdAt: "2026-08-02T16:05:00+03:00"
	},
	{
		id: "r6",
		personId: "p6",
		source: "chw",
		reason: "Puncture and loose bearing on existing AfriAssistive chair. Still using it.",
		urgency: "urgent",
		status: "fitted",
		assignedTo: CLINICIANS[2],
		createdAt: "2026-05-14T10:00:00+03:00"
	},
	{
		id: "r7",
		personId: "p7",
		source: "clinic",
		reason: "Spina bifida. Needs a new community wheelchair before term starts.",
		urgency: "soon",
		status: "in_production",
		assignedTo: CLINICIANS[0],
		createdAt: "2026-09-04T13:30:00+03:00"
	}
];
var ASSESSMENTS = [
	{
		id: "a1",
		referralId: "r1",
		clinician: CLINICIANS[0],
		mobilityScore: 42,
		notes: "Left hemiparesis. Good sitting balance. Rough terrain to the shamba.",
		measurements: "Seat 40 cm · hip 38 cm · footrest 42 cm",
		signedAt: "2026-07-08T10:00:00+03:00"
	},
	{
		id: "a2",
		referralId: "r2",
		clinician: CLINICIANS[1],
		mobilityScore: 61,
		notes: "Paediatric AFO, right. Growth 2 cm since last fit. Guardian trained.",
		measurements: "Foot 18.5 cm · calf 22 cm",
		signedAt: "2026-09-22T09:15:00+03:00"
	},
	{
		id: "a3",
		referralId: "r3",
		clinician: CLINICIANS[2],
		mobilityScore: 55,
		notes: "Bilateral knee OA. Frame preferred over crutches.",
		measurements: "Height 158 cm",
		signedAt: "2026-06-25T11:00:00+03:00"
	},
	{
		id: "a4",
		referralId: "r5",
		clinician: CLINICIANS[1],
		mobilityScore: 78,
		notes: "Fine-motor limitation. ADL set sufficient.",
		measurements: "Grip span 4 cm",
		signedAt: "2026-08-05T15:00:00+03:00"
	},
	{
		id: "a5",
		referralId: "r6",
		clinician: CLINICIANS[2],
		mobilityScore: 48,
		notes: "Existing chair still appropriate. Repair, do not replace.",
		measurements: "Seat 42 cm",
		signedAt: "2026-05-16T09:40:00+03:00"
	},
	{
		id: "a6",
		referralId: "r7",
		clinician: CLINICIANS[0],
		mobilityScore: 39,
		notes: "Pressure risk. Needs cushion and postural support parts.",
		measurements: "Seat 36 cm · back 40 cm",
		signedAt: "2026-09-09T12:10:00+03:00"
	}
];
var PRESCRIPTIONS = [
	{
		id: "rx1",
		assessmentId: "a1",
		modelId: "m-wc",
		size: "Adult 40 cm, rear-wheel, knobby tyre",
		signedAt: "2026-07-08T10:12:00+03:00",
		clinician: CLINICIANS[0]
	},
	{
		id: "rx2",
		assessmentId: "a2",
		modelId: "m-afo",
		size: "Right paediatric, 18.5 cm, growth-friendly trim lines",
		signedAt: "2026-09-22T09:22:00+03:00",
		clinician: CLINICIANS[1]
	},
	{
		id: "rx3",
		assessmentId: "a3",
		modelId: "m-fr",
		size: "Standard adult, ferrule set",
		signedAt: "2026-06-25T11:08:00+03:00",
		clinician: CLINICIANS[2]
	},
	{
		id: "rx4",
		assessmentId: "a4",
		modelId: "m-adl",
		size: "Universal",
		signedAt: "2026-08-05T15:05:00+03:00",
		clinician: CLINICIANS[1]
	},
	{
		id: "rx5",
		assessmentId: "a6",
		modelId: "m-wc",
		size: "Youth 36 cm, pressure-relief cushion",
		signedAt: "2026-09-09T12:20:00+03:00",
		clinician: CLINICIANS[0]
	}
];
var WORK_ORDERS = [
	{
		id: "w1",
		prescriptionId: "rx1",
		referralId: "r1",
		modelId: "m-wc",
		status: "released",
		assignedTo: TECHS[0],
		dueDate: "2026-07-22",
		qa: {
			frame: true,
			wheels: true,
			brakes: true,
			seat: true,
			footrest: true,
			load: true,
			serial: true,
			manual: true
		},
		releasedAt: "2026-07-20T16:00:00+03:00",
		deviceId: "d1"
	},
	{
		id: "w2",
		prescriptionId: "rx2",
		referralId: "r2",
		modelId: "m-afo",
		status: "qa",
		assignedTo: TECHS[1],
		dueDate: "2026-10-10",
		qa: {
			frame: true,
			wheels: true,
			brakes: true,
			seat: false,
			footrest: true,
			load: false,
			serial: true,
			manual: false
		}
	},
	{
		id: "w3",
		prescriptionId: "rx5",
		referralId: "r7",
		modelId: "m-wc",
		status: "building",
		assignedTo: TECHS[0],
		dueDate: "2026-10-14"
	},
	{
		id: "w4",
		prescriptionId: "rx3",
		referralId: "r3",
		modelId: "m-fr",
		status: "released",
		assignedTo: TECHS[1],
		dueDate: "2026-07-04",
		qa: {
			frame: true,
			wheels: true,
			brakes: true,
			seat: true,
			footrest: true,
			load: true,
			serial: true,
			manual: true
		},
		releasedAt: "2026-07-02T11:00:00+03:00",
		deviceId: "d3"
	}
];
var DEVICES = [
	{
		id: "d1",
		serial: "AA-WC-2026-000142",
		qrToken: "9fK3x142",
		modelId: "m-wc",
		status: "delivered",
		ownerPersonId: "p1",
		manufacturedAt: "2026-07-20",
		warrantyUntil: "2027-07-20",
		county: "Kisumu"
	},
	{
		id: "d2",
		serial: "AA-WC-2026-000118",
		qrToken: "7mP8n118",
		modelId: "m-wc",
		status: "in_repair",
		ownerPersonId: "p6",
		manufacturedAt: "2026-05-20",
		warrantyUntil: "2027-05-20",
		county: "Kilifi"
	},
	{
		id: "d3",
		serial: "AA-FR-2026-000044",
		qrToken: "2qR1f044",
		modelId: "m-fr",
		status: "delivered",
		ownerPersonId: "p3",
		manufacturedAt: "2026-07-02",
		warrantyUntil: "2027-07-02",
		county: "Makueni"
	},
	{
		id: "d4",
		serial: "AA-AD-2026-000012",
		qrToken: "5tY9a012",
		modelId: "m-adl",
		status: "delivered",
		ownerPersonId: "p5",
		manufacturedAt: "2026-08-08",
		warrantyUntil: "2027-08-08",
		county: "Nairobi"
	},
	{
		id: "d5",
		serial: "AA-WC-2026-000155",
		qrToken: "4uH2w155",
		modelId: "m-wc",
		status: "in_production",
		ownerPersonId: "p7",
		manufacturedAt: "2026-10-06",
		warrantyUntil: "2027-10-06",
		county: "Nakuru"
	},
	{
		id: "d6",
		serial: "AA-CR-2026-000089",
		qrToken: "8bN6c089",
		modelId: "m-cr",
		status: "loan",
		manufacturedAt: "2026-04-11",
		warrantyUntil: "2027-04-11",
		county: "Kisumu"
	}
];
var TICKETS = [
	{
		id: "t1",
		deviceId: "d2",
		issue: "Rear tyre puncture and loose right bearing after coastal sand use.",
		issueCode: "TYRE_BEARING",
		severity: "moderate",
		status: "in_progress",
		hub: HUBS[1],
		openedAt: "2026-09-30T07:45:00+03:00",
		loanDeviceId: "d6"
	},
	{
		id: "t2",
		deviceId: "d1",
		issue: "Left brake cable stretch. Still rideable.",
		issueCode: "BRAKE",
		severity: "low",
		status: "closed",
		hub: HUBS[0],
		openedAt: "2026-08-19T12:00:00+03:00",
		closedAt: "2026-08-20T15:30:00+03:00"
	},
	{
		id: "t3",
		deviceId: "d3",
		issue: "Ferrule worn on right foreleg.",
		issueCode: "FERRULE",
		severity: "low",
		status: "open",
		hub: HUBS[1],
		openedAt: "2026-10-04T09:00:00+03:00"
	}
];
var CARE_PLANS = [
	{
		id: "c1",
		personId: "p1",
		deviceId: "d1",
		tier: "standard",
		status: "active",
		priceKes: 500,
		startAt: "2026-07-24"
	},
	{
		id: "c2",
		personId: "p3",
		deviceId: "d3",
		tier: "basic",
		status: "offered",
		priceKes: 300
	},
	{
		id: "c3",
		personId: "p6",
		deviceId: "d2",
		tier: "plus",
		status: "active",
		priceKes: 800,
		startAt: "2026-05-22"
	}
];
var FOLLOW_UPS = [
	{
		id: "f1",
		deviceId: "d1",
		dueAt: "2026-08-07",
		kind: "2w",
		completedAt: "2026-08-07",
		stillUsing: true,
		notes: "Training reinforced with daughter."
	},
	{
		id: "f2",
		deviceId: "d1",
		dueAt: "2026-10-24",
		kind: "3m",
		stillUsing: true
	},
	{
		id: "f3",
		deviceId: "d3",
		dueAt: "2026-10-02",
		kind: "3m",
		completedAt: "2026-10-01",
		stillUsing: true
	},
	{
		id: "f4",
		deviceId: "d4",
		dueAt: "2026-11-08",
		kind: "3m"
	}
];
var QA_ITEMS = [
	{
		key: "frame",
		label: "Frame / structure integrity"
	},
	{
		key: "wheels",
		label: "Wheels, bearings, tyres"
	},
	{
		key: "brakes",
		label: "Brakes and locks"
	},
	{
		key: "seat",
		label: "Seat, back and cushion"
	},
	{
		key: "footrest",
		label: "Footrest / support height"
	},
	{
		key: "load",
		label: "Load test on rig"
	},
	{
		key: "serial",
		label: "Serial and QR applied"
	},
	{
		key: "manual",
		label: "User manual in chosen language"
	}
];
var WHO_STEPS = [
	{
		n: 1,
		en: "Referral",
		sw: "Rufaa"
	},
	{
		n: 2,
		en: "Assessment",
		sw: "Tathmini"
	},
	{
		n: 3,
		en: "Prescription",
		sw: "Maagizo"
	},
	{
		n: 4,
		en: "Funding",
		sw: "Ufadhili"
	},
	{
		n: 5,
		en: "Preparation",
		sw: "Utengenezaji"
	},
	{
		n: 6,
		en: "Fitting",
		sw: "Kufaa"
	},
	{
		n: 7,
		en: "Training",
		sw: "Mafunzo"
	},
	{
		n: 8,
		en: "Follow-up",
		sw: "Ufuatiliaji"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function kes(amount) {
	return new Intl.NumberFormat("en-KE", {
		style: "currency",
		currency: "KES",
		maximumFractionDigits: 0
	}).format(amount);
}
function formatDate(iso, locale = "en") {
	return new Intl.DateTimeFormat(locale === "sw" ? "sw-KE" : "en-KE", {
		day: "numeric",
		month: "short",
		year: "numeric"
	}).format(new Date(iso));
}
function uid(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}
var seed = () => ({
	people: PEOPLE,
	consents: CONSENTS,
	referrals: REFERRALS,
	assessments: ASSESSMENTS,
	prescriptions: PRESCRIPTIONS,
	workOrders: WORK_ORDERS,
	devices: DEVICES,
	tickets: TICKETS,
	carePlans: CARE_PLANS,
	followUps: FOLLOW_UPS,
	payments: []
});
var useAfriStore = create((set, get) => ({
	locale: "en",
	role: "clinician",
	textScale: "md",
	contrast: false,
	...seed(),
	setLocale: (locale) => set({ locale }),
	setRole: (role) => set({ role }),
	setTextScale: (textScale) => set({ textScale }),
	setContrast: (contrast) => set({ contrast }),
	addReferral: (input) => {
		const personId = uid("p");
		const referralId = uid("r");
		const person = {
			id: personId,
			name: input.name,
			phone: input.phone,
			county: input.county,
			subCounty: "—",
			ageBand: input.ageBand,
			sex: input.sex,
			language: get().locale,
			disabilityDomain: "Mobility",
			guardianName: input.guardianName,
			rural: input.county !== "Nairobi",
			incomeBand: "unknown"
		};
		const consent = {
			...input.consent,
			personId,
			grantedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		const referral = {
			id: referralId,
			personId,
			source: input.source,
			reason: input.reason,
			urgency: input.urgency,
			status: "triage",
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		set((s) => ({
			people: [person, ...s.people],
			consents: [consent, ...s.consents],
			referrals: [referral, ...s.referrals]
		}));
		return {
			personId,
			referralId
		};
	},
	assignReferral: (id, clinician) => set((s) => ({ referrals: s.referrals.map((r) => r.id === id ? {
		...r,
		status: "assigned",
		assignedTo: clinician
	} : r) })),
	saveAssessment: (referralId, data) => {
		const assessment = {
			id: uid("a"),
			referralId,
			...data
		};
		set((s) => ({
			assessments: [assessment, ...s.assessments.filter((a) => a.referralId !== referralId)],
			referrals: s.referrals.map((r) => r.id === referralId ? {
				...r,
				status: data.signedAt ? "assessed" : r.status
			} : r)
		}));
	},
	signPrescription: (assessmentId, modelId, size) => {
		const assessment = get().assessments.find((a) => a.id === assessmentId);
		if (!assessment) return;
		const rx = {
			id: uid("rx"),
			assessmentId,
			modelId,
			size,
			signedAt: (/* @__PURE__ */ new Date()).toISOString(),
			clinician: assessment.clinician
		};
		const wo = {
			id: uid("w"),
			prescriptionId: rx.id,
			referralId: assessment.referralId,
			modelId,
			status: "queued",
			assignedTo: "Brian Kimani",
			dueDate: new Date(Date.now() + 10368e5).toISOString().slice(0, 10)
		};
		set((s) => ({
			prescriptions: [rx, ...s.prescriptions],
			workOrders: [wo, ...s.workOrders],
			referrals: s.referrals.map((r) => r.id === assessment.referralId ? {
				...r,
				status: "prescribed"
			} : r)
		}));
	},
	toggleQa: (workOrderId, key) => set((s) => ({ workOrders: s.workOrders.map((w) => {
		if (w.id !== workOrderId) return w;
		const qa = {
			...w.qa ?? {},
			[key]: !w.qa?.[key]
		};
		return {
			...w,
			qa,
			status: "qa"
		};
	}) })),
	releaseWorkOrder: (workOrderId) => {
		const w = get().workOrders.find((x) => x.id === workOrderId);
		if (!w) return null;
		if (![
			"frame",
			"wheels",
			"brakes",
			"seat",
			"footrest",
			"load",
			"serial",
			"manual"
		].every((k) => w.qa?.[k])) return null;
		const model = MODELS.find((m) => m.id === w.modelId);
		const serial = `AA-${model?.category === "wheelchair" ? "WC" : model?.category === "orthosis" ? "OR" : "AD"}-2026-${String(200 + get().devices.length).padStart(6, "0")}`;
		const token = uid("qr").replace("QR-", "");
		const referral = get().referrals.find((r) => r.id === w.referralId);
		const person = get().people.find((p) => p.id === referral?.personId);
		const device = {
			id: uid("d"),
			serial,
			qrToken: token,
			modelId: w.modelId,
			status: "in_stock",
			ownerPersonId: person?.id,
			manufacturedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			warrantyUntil: new Date(Date.now() + 31536e6).toISOString().slice(0, 10),
			county: person?.county ?? "Nairobi"
		};
		set((s) => ({
			devices: [device, ...s.devices],
			workOrders: s.workOrders.map((x) => x.id === workOrderId ? {
				...x,
				status: "released",
				releasedAt: (/* @__PURE__ */ new Date()).toISOString(),
				deviceId: device.id
			} : x),
			referrals: s.referrals.map((r) => r.id === w.referralId ? {
				...r,
				status: "ready"
			} : r)
		}));
		return device;
	},
	acceptDelivery: (deviceId) => set((s) => {
		const device = s.devices.find((d) => d.id === deviceId);
		return {
			devices: s.devices.map((d) => d.id === deviceId ? {
				...d,
				status: "delivered"
			} : d),
			referrals: s.referrals.map((r) => {
				return device?.ownerPersonId === r.personId && (r.status === "ready" || r.status === "prescribed") ? {
					...r,
					status: "delivered"
				} : r;
			}),
			followUps: [{
				id: uid("f"),
				deviceId,
				dueAt: new Date(Date.now() + 12096e5).toISOString().slice(0, 10),
				kind: "2w"
			}, ...s.followUps]
		};
	}),
	openTicket: (deviceId, issue, issueCode) => set((s) => ({
		tickets: [{
			id: uid("t"),
			deviceId,
			issue,
			issueCode,
			severity: "moderate",
			status: "open",
			hub: "Kisumu hub",
			openedAt: (/* @__PURE__ */ new Date()).toISOString()
		}, ...s.tickets],
		devices: s.devices.map((d) => d.id === deviceId ? {
			...d,
			status: "in_repair"
		} : d)
	})),
	closeTicket: (ticketId) => set((s) => {
		const ticket = s.tickets.find((t) => t.id === ticketId);
		return {
			tickets: s.tickets.map((t) => t.id === ticketId ? {
				...t,
				status: "closed",
				closedAt: (/* @__PURE__ */ new Date()).toISOString()
			} : t),
			devices: s.devices.map((d) => d.id === ticket?.deviceId ? {
				...d,
				status: "delivered"
			} : d)
		};
	}),
	completeFollowUp: (id, stillUsing, notes) => set((s) => ({ followUps: s.followUps.map((f) => f.id === id ? {
		...f,
		completedAt: (/* @__PURE__ */ new Date()).toISOString(),
		stillUsing,
		notes
	} : f) })),
	activateCarePlan: (carePlanId, phone) => {
		const plan = get().carePlans.find((c) => c.id === carePlanId);
		const payment = {
			id: uid("pay"),
			carePlanId,
			amountKes: plan?.priceKes ?? 500,
			status: "succeeded",
			receipt: `RD${Math.floor(1e7 + Math.random() * 89999999)}`,
			phone,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		set((s) => ({
			payments: [payment, ...s.payments],
			carePlans: s.carePlans.map((c) => c.id === carePlanId ? {
				...c,
				status: "active",
				startAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
			} : c)
		}));
		return payment;
	}
}));
var ROLES = [
	{
		id: "beneficiary",
		en: "Beneficiary",
		sw: "Mwanufaika"
	},
	{
		id: "referrer",
		en: "Community referrer",
		sw: "Mpeleka rufaa"
	},
	{
		id: "clinician",
		en: "Clinician",
		sw: "Mtaalamu kliniki"
	},
	{
		id: "technician",
		en: "Workshop",
		sw: "Fundi"
	},
	{
		id: "hub",
		en: "Repair hub",
		sw: "Kituo cha ukarabati"
	},
	{
		id: "partner",
		en: "Partner / payer",
		sw: "Mshirika"
	},
	{
		id: "admin",
		en: "Ops / DPO",
		sw: "Uendeshaji"
	}
];
var styles_default = "/assets/styles-ChW85mue.css";
var APP_NAME = "AfriAssistive";
function DocumentShell() {
	const locale = useAfriStore((s) => s.locale);
	const textScale = useAfriStore((s) => s.textScale);
	const contrast = useAfriStore((s) => s.contrast);
	const fontSize = textScale === "xl" ? "1.1875rem" : textScale === "lg" ? "1.0625rem" : "1rem";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: locale === "sw" ? "sw" : "en",
		"data-contrast": contrast ? "true" : "false",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			style: { ["--app-font-size"]: fontSize },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#main",
						className: "skip-link",
						children: "Skip to content"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
						position: "bottom-right",
						richColors: true
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var Route$10 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "AfriAssistive — locally made assistive technology and the service chain that keeps devices in use across Kenya."
			},
			{
				name: "theme-color",
				content: "#0E3B34"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/icon.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap"
			}
		]
	}),
	component: DocumentShell
});
var $$splitComponentImporter$9 = () => import("./routes-xUFuHvrL.mjs");
var Route$9 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./app-IQdZE9Fh.mjs");
var Route$8 = createFileRoute("/app")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./request-3EQwJ-fZ.mjs");
var Route$7 = createFileRoute("/request")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./app-BON7dJOc.mjs");
var Route$6 = createFileRoute("/app/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./devices-CeLspzKq.mjs");
var Route$5 = createFileRoute("/app/devices")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./impact-CJRauTo_.mjs");
var Route$4 = createFileRoute("/app/impact")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./queue-CkX-yY7y.mjs");
var Route$3 = createFileRoute("/app/queue")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./service-Up0-6WcH.mjs");
var Route$2 = createFileRoute("/app/service")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./workshop-BJOa4scZ.mjs");
var Route$1 = createFileRoute("/app/workshop")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./d._token-DeJ_aIrb.mjs");
var Route = createFileRoute("/d/$token")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var AppRoute = Route$8.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => Route$10
});
var RequestRoute = Route$7.update({
	id: "/request",
	path: "/request",
	getParentRoute: () => Route$10
});
var AppIndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppRoute
});
var AppDevicesRoute = Route$5.update({
	id: "/devices",
	path: "/devices",
	getParentRoute: () => AppRoute
});
var AppImpactRoute = Route$4.update({
	id: "/impact",
	path: "/impact",
	getParentRoute: () => AppRoute
});
var AppQueueRoute = Route$3.update({
	id: "/queue",
	path: "/queue",
	getParentRoute: () => AppRoute
});
var AppServiceRoute = Route$2.update({
	id: "/service",
	path: "/service",
	getParentRoute: () => AppRoute
});
var AppWorkshopRoute = Route$1.update({
	id: "/workshop",
	path: "/workshop",
	getParentRoute: () => AppRoute
});
var DTokenRoute = Route.update({
	id: "/d/$token",
	path: "/d/$token",
	getParentRoute: () => Route$10
});
var AppRouteChildren = {
	AppDevicesRoute,
	AppImpactRoute,
	AppQueueRoute,
	AppServiceRoute,
	AppWorkshopRoute,
	AppIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AppRoute: AppRoute._addFileChildren(AppRouteChildren),
	RequestRoute,
	DTokenRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { cn as a, CLINICIANS as c, WHO_STEPS as d, useAfriStore as i, MODELS as l, Route as n, formatDate as o, ROLES as r, kes as s, router_exports as t, QA_ITEMS as u };
