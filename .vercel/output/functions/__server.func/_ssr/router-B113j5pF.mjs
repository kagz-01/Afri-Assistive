import { i as __toESM } from "../_runtime.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { l as Slot, m as require_react, n as CheckboxIndicator, p as require_jsx_runtime, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as TriangleAlert, v as Check, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-KpJHEGdV.js
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
		costKes: 22e3,
		shaTariffKes: 15e3,
		standard: "ISO 7176",
		partSkus: [
			"TY-24",
			"BR-B2",
			"BE-6200",
			"CU-PR"
		]
	},
	{
		id: "m-cr",
		name: "Elbow crutches (pair)",
		category: "walking_aid",
		tier: 1,
		priceKes: 2800,
		costKes: 1300,
		shaTariffKes: 900,
		standard: "ISO 11334",
		partSkus: ["FE-16"]
	},
	{
		id: "m-fr",
		name: "Walking frame",
		category: "walking_aid",
		tier: 1,
		priceKes: 4500,
		costKes: 2200,
		shaTariffKes: 500,
		standard: "ISO 11334",
		partSkus: ["FE-16"]
	},
	{
		id: "m-afo",
		name: "Paediatric AFO (3D-printed)",
		category: "orthosis",
		tier: 2,
		priceKes: 15e3,
		costKes: 7500,
		shaTariffKes: null,
		standard: "ISO 13485 process",
		partSkus: ["ST-AFO"]
	},
	{
		id: "m-adl",
		name: "ADL grip & opener set",
		category: "adl",
		tier: 1,
		priceKes: 900,
		costKes: 300,
		shaTariffKes: null,
		standard: "Internal QA",
		partSkus: []
	}
];
var PARTS = [
	{
		sku: "TY-24",
		name: "24-inch knobby tyre",
		modelIds: ["m-wc"],
		stock: 6,
		reorderAt: 4,
		unitKes: 1800
	},
	{
		sku: "BR-B2",
		name: "Brake cable B2",
		modelIds: ["m-wc"],
		stock: 2,
		reorderAt: 4,
		unitKes: 450
	},
	{
		sku: "BE-6200",
		name: "Bearing 6200",
		modelIds: ["m-wc"],
		stock: 0,
		reorderAt: 2,
		unitKes: 650
	},
	{
		sku: "CU-PR",
		name: "Pressure-relief cushion",
		modelIds: ["m-wc"],
		stock: 3,
		reorderAt: 2,
		unitKes: 2200
	},
	{
		sku: "FE-16",
		name: "Ferrule 16 mm",
		modelIds: ["m-fr", "m-cr"],
		stock: 8,
		reorderAt: 4,
		unitKes: 120
	},
	{
		sku: "ST-AFO",
		name: "AFO strap set",
		modelIds: ["m-afo"],
		stock: 5,
		reorderAt: 2,
		unitKes: 350
	}
];
var FITTED = {
	seat: true,
	footrest: true,
	brakes: true,
	pressure: true,
	trained: true,
	caregiver: true,
	at: "2026-07-21T09:00:00+03:00",
	by: "Dr. Wanjiku Mwangi, PT"
};
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
		status: "ready",
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
		county: "Kisumu",
		fit: FITTED
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
		county: "Makueni",
		fit: {
			...FITTED,
			at: "2026-07-03T10:00:00+03:00",
			by: "Achieng Okello, PT"
		}
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
		county: "Nairobi",
		fit: {
			...FITTED,
			at: "2026-08-09T11:00:00+03:00",
			by: "Omondi Otieno, OT"
		}
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
		status: "in_stock",
		manufacturedAt: "2026-04-11",
		warrantyUntil: "2027-04-11",
		county: "Kisumu"
	},
	{
		id: "d7",
		serial: "AA-WC-2026-000201",
		qrToken: "1pL0w201",
		modelId: "m-wc",
		status: "loan",
		manufacturedAt: "2026-09-02",
		warrantyUntil: "2027-09-02",
		county: "Kisumu"
	},
	{
		id: "d8",
		serial: "AA-WC-2026-000210",
		qrToken: "3kS4w210",
		modelId: "m-wc",
		status: "in_stock",
		ownerPersonId: "p4",
		manufacturedAt: "2026-10-05",
		warrantyUntil: "2027-10-05",
		county: "Turkana"
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
		loanDeviceId: "d7"
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
		closedAt: "2026-08-20T15:30:00+03:00",
		partSku: "BR-B2"
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
var MESSAGES = [{
	id: "msg1",
	ticketId: "t1",
	deviceId: "d2",
	channel: "whatsapp",
	from: "person",
	body: "Tyre is flat. Serial AA-WC-2026-000118. We are in Kilifi.",
	at: "2026-10-02T09:12:00+03:00"
}, {
	id: "msg2",
	ticketId: "t1",
	deviceId: "d2",
	channel: "whatsapp",
	from: "desk",
	body: "Ticket is open. A loaner chair is with you. Bearing 6200 is out of stock, so the close stays locked.",
	at: "2026-10-02T09:40:00+03:00"
}];
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
		notes: "Training reinforced with daughter.",
		outcome: "using"
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
		stillUsing: true,
		outcome: "using"
	},
	{
		id: "f4",
		deviceId: "d4",
		dueAt: "2026-11-08",
		kind: "3m"
	},
	{
		id: "f5",
		deviceId: "d2",
		dueAt: "2026-09-01",
		kind: "12m"
	}
];
var AUDIT = [
	{
		id: "log1",
		at: "2026-07-20T16:00:00+03:00",
		actor: "Workshop",
		action: "Released AA-WC-2026-000142 after every QA check",
		ref: "w1"
	},
	{
		id: "log2",
		at: "2026-07-21T09:00:00+03:00",
		actor: "Clinician",
		action: "Fit lock passed · training and caregiver recorded",
		ref: "d1"
	},
	{
		id: "log3",
		at: "2026-08-20T15:30:00+03:00",
		actor: "Repair hub",
		action: "Closed brake repair using cable B2",
		ref: "t2"
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
	payments: [],
	parts: PARTS,
	messages: MESSAGES,
	claims: [],
	orders: [],
	audit: AUDIT
});
function actorName(role) {
	return ROLES.find((r) => r.id === role)?.en ?? role;
}
function note(role, action, ref) {
	return {
		id: uid("log"),
		at: (/* @__PURE__ */ new Date()).toISOString(),
		actor: actorName(role),
		action,
		ref
	};
}
var FIT_KEYS = [
	"seat",
	"footrest",
	"brakes",
	"pressure",
	"trained",
	"caregiver"
];
var FAULT_LABEL = {
	PUNCTURE: "Puncture",
	BRAKE: "Brakes failed",
	FRAME: "Frame or weld",
	CUSHION: "Cushion or seat",
	OTHER: "Other fault"
};
var useAfriStore = create()(persist((set, get) => ({
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
			referrals: [referral, ...s.referrals],
			audit: [note(get().role, `Referral opened for ${person.county}`, referralId), ...s.audit].slice(0, 40)
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
			} : r),
			audit: [note(get().role, `Prescription signed · ${size}`, rx.id), ...s.audit].slice(0, 40)
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
		const token = uid("qr").replace(/^qr-/i, "");
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
			} : r),
			audit: [note(get().role, `QA release ${serial}. Fit lock still open.`, device.id), ...s.audit].slice(0, 40)
		}));
		return device;
	},
	acceptDelivery: (deviceId, fit) => {
		if (!FIT_KEYS.every((k) => fit[k] === true)) return "Fit lock is still open.";
		const device = get().devices.find((d) => d.id === deviceId);
		if (!device) return "Device missing.";
		if (!device.ownerPersonId) return "No person is linked to this device.";
		const stamped = {
			...fit,
			at: (/* @__PURE__ */ new Date()).toISOString(),
			by: actorName(get().role)
		};
		const due = (days) => new Date(Date.now() + days * 864e5).toISOString().slice(0, 10);
		set((s) => ({
			devices: s.devices.map((d) => d.id === deviceId ? {
				...d,
				status: "delivered",
				fit: stamped
			} : d),
			referrals: s.referrals.map((r) => r.personId === device.ownerPersonId && (r.status === "ready" || r.status === "prescribed" || r.status === "delivered") ? {
				...r,
				status: "fitted"
			} : r),
			followUps: [
				{
					id: uid("f"),
					deviceId,
					dueAt: due(14),
					kind: "2w"
				},
				{
					id: uid("f"),
					deviceId,
					dueAt: due(180),
					kind: "6m"
				},
				{
					id: uid("f"),
					deviceId,
					dueAt: due(365),
					kind: "12m"
				},
				...s.followUps
			],
			audit: [note(get().role, `Fit lock passed for ${device.serial}`, deviceId), ...s.audit].slice(0, 40)
		}));
		return null;
	},
	openTicket: (deviceId, issue, issueCode) => set((s) => {
		const device = s.devices.find((d) => d.id === deviceId);
		const category = MODELS.find((m) => m.id === device?.modelId)?.category;
		const loan = s.devices.find((d) => {
			if (d.status !== "in_stock" || d.ownerPersonId || d.id === deviceId) return false;
			return MODELS.find((m) => m.id === d.modelId)?.category === category;
		});
		return {
			tickets: [{
				id: uid("t"),
				deviceId,
				issue,
				issueCode,
				severity: "moderate",
				status: "open",
				hub: "Kisumu hub",
				openedAt: (/* @__PURE__ */ new Date()).toISOString(),
				loanDeviceId: loan?.id
			}, ...s.tickets],
			devices: s.devices.map((d) => {
				if (d.id === deviceId) return {
					...d,
					status: "in_repair"
				};
				if (loan && d.id === loan.id) return {
					...d,
					status: "loan"
				};
				return d;
			}),
			audit: [note(get().role, loan ? `Repair opened. Loaner ${loan.serial} issued.` : "Repair opened. No loaner in stock.", deviceId), ...s.audit].slice(0, 40)
		};
	}),
	closeTicket: (ticketId, partSku) => {
		const ticket = get().tickets.find((t) => t.id === ticketId);
		if (!ticket || ticket.status === "closed") return "missing";
		const device = get().devices.find((d) => d.id === ticket.deviceId);
		const needsPart = (MODELS.find((m) => m.id === device?.modelId)?.partSkus.length ?? 0) > 0;
		if (needsPart && partSku === "none") return "missing";
		const part = get().parts.find((p) => p.sku === partSku);
		if (needsPart && !part) return "missing";
		if (part && part.stock < 1) {
			set((s) => ({
				tickets: s.tickets.map((t) => t.id === ticketId ? {
					...t,
					status: "waiting_parts",
					partSku
				} : t),
				audit: [note(get().role, `Waiting for ${part.name}. Stock is zero.`, ticketId), ...s.audit].slice(0, 40)
			}));
			return "waiting";
		}
		set((s) => ({
			tickets: s.tickets.map((t) => t.id === ticketId ? {
				...t,
				status: "closed",
				closedAt: (/* @__PURE__ */ new Date()).toISOString(),
				partSku: part ? part.sku : void 0
			} : t),
			parts: s.parts.map((p) => part && p.sku === part.sku ? {
				...p,
				stock: p.stock - 1
			} : p),
			devices: s.devices.map((d) => {
				if (d.id === ticket.deviceId) return {
					...d,
					status: "delivered"
				};
				if (ticket.loanDeviceId && d.id === ticket.loanDeviceId) return {
					...d,
					status: "in_stock"
				};
				return d;
			}),
			audit: [note(get().role, part ? `Repair closed using ${part.name}` : "Repair closed. No part used.", ticketId), ...s.audit].slice(0, 40)
		}));
		return "closed";
	},
	reportFault: (serial, issueCode, channel) => {
		const device = get().devices.find((d) => d.serial.toLowerCase() === serial.trim().toLowerCase());
		if (!device) return {
			ok: false,
			text: "No device with that serial."
		};
		const issue = FAULT_LABEL[issueCode] ?? issueCode;
		const body = `${channel === "ussd" ? "USSD" : "WhatsApp"} · ${device.serial} · ${issue}`;
		const existing = get().tickets.find((t) => t.deviceId === device.id && t.status !== "closed");
		if (existing) {
			set((s) => ({
				messages: [{
					id: uid("msg"),
					ticketId: existing.id,
					deviceId: device.id,
					channel,
					from: "person",
					body,
					at: (/* @__PURE__ */ new Date()).toISOString()
				}, ...s.messages ?? []],
				audit: [note(get().role, `Fault update on ${device.serial}`, existing.id), ...s.audit].slice(0, 40)
			}));
			return {
				ok: true,
				text: `Already open: ${existing.id}. Hub: ${existing.hub}.`
			};
		}
		get().openTicket(device.id, issue, issueCode);
		const ticket = get().tickets.find((t) => t.deviceId === device.id && t.status !== "closed");
		set((s) => ({ messages: [{
			id: uid("msg"),
			ticketId: ticket?.id,
			deviceId: device.id,
			channel,
			from: "person",
			body,
			at: (/* @__PURE__ */ new Date()).toISOString()
		}, ...s.messages ?? []] }));
		const loan = ticket?.loanDeviceId ? " A loaner is assigned." : " No loaner in stock.";
		return {
			ok: true,
			text: ticket ? `Ticket ${ticket.id}.${loan}` : "Ticket opened."
		};
	},
	prepareClaim: (deviceId) => {
		const device = get().devices.find((d) => d.id === deviceId);
		if (!device) return null;
		const model = MODELS.find((m) => m.id === device.modelId);
		const blockers = [];
		if (!device.fit) blockers.push("fit");
		if (device.status === "in_production" || device.status === "in_stock") blockers.push("handover");
		if (model?.shaTariffKes == null) blockers.push("tariff");
		const cost = model?.costKes ?? 0;
		const tariff = model?.shaTariffKes ?? null;
		const draft = {
			id: uid("clm"),
			deviceId,
			preparedAt: (/* @__PURE__ */ new Date()).toISOString(),
			status: blockers.length ? "blocked" : "ready",
			tariffKes: tariff,
			costKes: cost,
			gapKes: tariff == null ? cost : Math.max(0, cost - tariff),
			blockers
		};
		set((s) => ({
			claims: [draft, ...(s.claims ?? []).filter((c) => c.deviceId !== deviceId)],
			audit: [note(get().role, draft.status === "ready" ? `SHA claim pack ready · ${device.serial}` : `SHA claim blocked · ${device.serial}`, deviceId), ...s.audit].slice(0, 40)
		}));
		return draft;
	},
	completeFollowUp: (id, outcome, notesText) => set((s) => {
		const follow = s.followUps.find((f) => f.id === id);
		let tickets = s.tickets;
		let devices = s.devices;
		if (outcome === "broken" && follow) {
			const category = MODELS.find((m) => m.id === s.devices.find((d) => d.id === follow.deviceId)?.modelId)?.category;
			const loan = s.devices.find((d) => {
				if (d.status !== "in_stock" || d.ownerPersonId) return false;
				return MODELS.find((m) => m.id === d.modelId)?.category === category;
			});
			tickets = [{
				id: uid("t"),
				deviceId: follow.deviceId,
				issue: notesText || "Reported broken at follow-up",
				issueCode: "FOLLOW_UP",
				severity: "high",
				status: "open",
				hub: "Kisumu hub",
				openedAt: (/* @__PURE__ */ new Date()).toISOString(),
				loanDeviceId: loan?.id
			}, ...tickets];
			devices = devices.map((d) => {
				if (d.id === follow.deviceId) return {
					...d,
					status: "in_repair"
				};
				if (loan && d.id === loan.id) return {
					...d,
					status: "loan"
				};
				return d;
			});
		}
		const label = outcome === "using" ? "Still in use" : outcome === "broken" ? "Broken — repair opened" : outcome === "given" ? "Given away" : "Stopped using";
		return {
			followUps: s.followUps.map((f) => f.id === id ? {
				...f,
				completedAt: (/* @__PURE__ */ new Date()).toISOString(),
				stillUsing: outcome === "using",
				outcome,
				notes: notesText
			} : f),
			tickets,
			devices,
			audit: [note(get().role, label, id), ...s.audit].slice(0, 40)
		};
	}),
	requestPart: (sku) => {
		const part = get().parts.find((p) => p.sku === sku) ?? PARTS.find((p) => p.sku === sku);
		if (!part) return;
		if (get().orders.some((o) => o.sku === sku && o.status === "requested")) return;
		const qty = Math.max(part.reorderAt, 2);
		const unitKes = part.unitKes || PARTS.find((p) => p.sku === sku)?.unitKes || 0;
		set((s) => ({
			orders: [{
				id: uid("po"),
				sku,
				qty,
				unitKes,
				status: "requested",
				at: (/* @__PURE__ */ new Date()).toISOString()
			}, ...s.orders ?? []],
			audit: [note(get().role, `Spare order · ${qty} × ${part.name}`, sku), ...s.audit].slice(0, 40)
		}));
	},
	receivePart: (orderId) => {
		const order = (get().orders ?? []).find((o) => o.id === orderId && o.status === "requested");
		if (!order) return;
		const part = get().parts.find((p) => p.sku === order.sku);
		set((s) => ({
			orders: (s.orders ?? []).map((o) => o.id === orderId ? {
				...o,
				status: "received"
			} : o),
			parts: s.parts.map((p) => p.sku === order.sku ? {
				...p,
				stock: p.stock + order.qty
			} : p),
			audit: [note(get().role, `Spares received · ${part?.name ?? order.sku}`, orderId), ...s.audit].slice(0, 40)
		}));
	},
	activateCarePlan: (carePlanId, phone) => {
		const plan = get().carePlans.find((c) => c.id === carePlanId);
		const device = get().devices.find((d) => d.id === plan?.deviceId);
		const payment = {
			id: uid("pay"),
			carePlanId,
			amountKes: plan?.priceKes ?? 500,
			status: "succeeded",
			receipt: `RD${Math.floor(1e7 + Math.random() * 89999999)}`,
			phone,
			at: (/* @__PURE__ */ new Date()).toISOString(),
			paybill: "880155",
			account: device?.serial ?? carePlanId,
			ratibaMonths: 12
		};
		set((s) => ({
			payments: [payment, ...s.payments],
			carePlans: s.carePlans.map((c) => c.id === carePlanId ? {
				...c,
				status: "active",
				startAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
			} : c),
			audit: [note(get().role, `Care plan prompted · ${payment.receipt}`, carePlanId), ...s.audit].slice(0, 40)
		}));
		return payment;
	},
	resetPilot: () => set({
		...seed(),
		locale: get().locale,
		role: get().role,
		textScale: get().textScale,
		contrast: get().contrast
	})
}), {
	name: "afriassistive-pilot-v2",
	version: 3,
	migrate: (persisted, version) => {
		const state = persisted;
		const next = { ...state };
		if (version < 2) {
			next.messages = state.messages ?? MESSAGES;
			next.claims = state.claims ?? [];
		}
		if (version < 3) next.orders = state.orders ?? [];
		return next;
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
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/badge-Dw-iWrlq.js
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
//#region node_modules/.nitro/vite/services/ssr/assets/router-B113j5pF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
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
var styles_default = "/assets/styles-CV880uNp.css";
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
var Route$12 = createRootRoute({
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
var $$splitComponentImporter$10 = () => import("./routes-NEIiILkZ.mjs");
var Route$11 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./app-Dbap-__c.mjs");
var Route$10 = createFileRoute("/app")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./fault-PGF01Ww1.mjs");
var Route$9 = createFileRoute("/fault")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./request-nMF4yTGe.mjs");
var Route$8 = createFileRoute("/request")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
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
var $$splitComponentImporter$6 = () => import("./devices-63Nj1j-S.mjs");
var Route$7 = createFileRoute("/app/devices")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var FIT_ROWS = [
	{
		key: "seat",
		en: "Seat depth and cushion match the prescription",
		sw: "Kina cha kiti na mto vinaendana na maagizo"
	},
	{
		key: "footrest",
		en: "Footrest clears the ground",
		sw: "Kiegemeo cha mguu hakigusi ardhi"
	},
	{
		key: "brakes",
		en: "Brakes hold",
		sw: "Breki zinashika"
	},
	{
		key: "pressure",
		en: "Pressure points checked",
		sw: "Sehemu za shinikizo zimekaguliwa"
	},
	{
		key: "trained",
		en: "User trained in their language",
		sw: "Mtumiaji amefundishwa kwa lugha yake"
	},
	{
		key: "caregiver",
		en: "Caregiver named, or the user is independent",
		sw: "Mlezi ametajwa, au mtumiaji anajitegemea"
	}
];
var EMPTY_FIT = {
	seat: false,
	footrest: false,
	brakes: false,
	pressure: false,
	trained: false,
	caregiver: false
};
var Route$6 = createFileRoute("/app/")({ component: AppHome });
var TODAY = "2026-10-13";
var CELL = 5;
function boardFor(role) {
	if (role === "beneficiary") return "care";
	if (role === "referrer") return "referrals";
	if (role === "technician" || role === "hub") return "radio";
	if (role === "partner" || role === "admin") return "county";
	return "clinic";
}
function gapFor(modelId) {
	const model = MODELS.find((m) => m.id === modelId);
	if (!model) return 0;
	if (model.shaTariffKes == null) return model.costKes;
	return Math.max(0, model.costKes - model.shaTariffKes);
}
function AppHome() {
	const board = boardFor(useAfriStore((s) => s.role));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl",
		children: [
			board === "care" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyCare, {}) : null,
			board === "referrals" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferralDesk, {}) : null,
			board === "clinic" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicDay, {}) : null,
			board === "radio" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkshopRadio, {}) : null,
			board === "county" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountyBoard, {}) : null
		]
	});
}
function MyCare() {
	const locale = useAfriStore((s) => s.locale);
	const sw = locale === "sw";
	const people = useAfriStore((s) => s.people);
	const devices = useAfriStore((s) => s.devices);
	const tickets = useAfriStore((s) => s.tickets);
	const followUps = useAfriStore((s) => s.followUps);
	const carePlans = useAfriStore((s) => s.carePlans);
	const payments = useAfriStore((s) => s.payments);
	const households = people.filter((p) => devices.some((d) => d.ownerPersonId === p.id && d.status !== "loan"));
	const [focus, setFocus] = (0, import_react.useState)("p1");
	const person = people.find((p) => p.id === focus) ?? households[0];
	const device = devices.find((d) => d.ownerPersonId === person?.id && d.status !== "loan");
	const model = MODELS.find((m) => m.id === device?.modelId);
	const ticket = tickets.find((t) => t.deviceId === device?.id && t.status !== "closed");
	const loaner = devices.find((d) => d.id === ticket?.loanDeviceId);
	const next = followUps.filter((f) => f.deviceId === device?.id && !f.completedAt).sort((a, b) => a.dueAt.localeCompare(b.dueAt))[0];
	const plan = carePlans.find((c) => c.personId === person?.id);
	const pay = payments.find((p) => p.carePlanId === plan?.id);
	const nextMonth = pay ? new Date(pay.at) : null;
	if (nextMonth) nextMonth.setMonth(nextMonth.getMonth() + 1);
	const statusLine = !device ? sw ? "Huna kifaa kwenye rekodi hii." : "No device is on this record yet." : device.status === "in_repair" ? sw ? "Kifaa kiko warshani." : "Your device is in the workshop." : ticket ? sw ? "Kuna ukarabati wazi kwenye kifaa hiki." : "A repair is open on this device." : device.status === "delivered" ? sw ? "Kifaa kiko kwako." : "Your device is with you." : sw ? "Kifaa bado hakijakabidhiwa." : "Your device has not been handed over.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep",
			children: sw ? "Huduma yangu" : "My care"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-1 font-display text-3xl font-semibold text-forest",
			children: statusLine
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-2xl text-sm text-muted-ink",
			children: sw ? "Rekodi ya mfano. Hakuna kuingia kwa akaunti, kwa hiyo chagua kaya. Bodi hii haijui nani ameshika simu." : `Sample record. There is no personal login, so pick a household. This board does not know who is holding the phone.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: households.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setFocus(h.id),
				className: `min-h-11 rounded-full px-3 text-sm ${h.id === person?.id ? "bg-forest text-ivory" : "bg-cream text-forest"}`,
				children: h.name.split(" ")[0]
			}, h.id))
		}),
		device ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-8 rounded-2xl p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-teal-deep",
							children: device.serial
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-2xl font-semibold text-forest",
							children: model?.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink",
							children: device.county
						}),
						person?.guardianName ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-ink",
							children: [
								sw ? "Mlezi" : "Caregiver",
								": ",
								person.guardianName
							]
						}) : null
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceBadge, { status: device.status })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-6 grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs text-muted-ink",
							children: sw ? "Ukaguzi ujao" : "Next check"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-display text-xl font-semibold text-forest",
							children: next ? `${next.kind} · ${formatDate(next.dueAt, locale)}` : sw ? "Hamna" : "None due"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs text-muted-ink",
							children: sw ? "Kikopeshwa" : "Loaner"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-display text-xl font-semibold text-forest",
							children: loaner ? loaner.serial : sw ? "Hakihitajiki" : "Not out"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs text-muted-ink",
							children: sw ? "Mpango wa huduma" : "Care plan"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-display text-xl font-semibold text-forest",
							children: plan ? `${plan.status} · ${kes(plan.priceKes)}` : sw ? "Hakuna" : "None"
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-ink",
					children: pay ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						sw ? "Risiti" : "Receipt",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono",
							children: pay.receipt
						}),
						" · ",
						kes(pay.amountKes),
						" · paybill",
						" ",
						pay.paybill,
						" · ",
						sw ? "akaunti" : "account",
						" ",
						pay.account,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-1 block text-muted-ink",
							children: [
								"Ratiba ",
								pay.ratibaMonths,
								" · ",
								sw ? "ijayo" : "next",
								" ",
								nextMonth ? formatDate(nextMonth.toISOString(), locale) : "",
								". ",
								sw ? "Si deni la moja kwa moja." : "Not a live debit."
							]
						})
					] }) : plan?.status === "offered" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-ink",
						children: sw ? "Kliniki bado haijatuma ombi." : "The clinic has not sent the prompt."
					}) : plan ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-ink",
						children: sw ? "Mpango upo. Hakuna risiti iliyohifadhiwa kwenye jaribio hili." : "The plan is on. No receipt is stored in this pilot yet."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-ink",
						children: sw ? "Hakuna mpango wa huduma." : "No care plan on this record."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/fault",
							children: sw ? "Ripoti hitilafu" : "Report a fault"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/d/$token",
							params: { token: device.qrToken },
							children: sw ? "Pasipoti" : "Passport"
						})
					})]
				})
			]
		}) : null
	] });
}
function ReferralDesk() {
	const sw = useAfriStore((s) => s.locale) === "sw";
	const referrals = useAfriStore((s) => s.referrals);
	const people = useAfriStore((s) => s.people);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep",
			children: sw ? "Rufaa" : "Referrals"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-1 font-display text-3xl font-semibold text-forest",
			children: sw ? "Watu uliowapeleka wako wapi?" : "Where are the people you sent?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-2xl text-ink",
			children: sw ? "Unaona rufaa imefika wapi. Kufaa, malipo na ufuatiliaji ni kazi ya kliniki." : "You can see how far each referral has gone. Fitting, payment, and follow-up stay with the clinic."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 grid gap-3",
			children: referrals.map((r) => {
				const person = people.find((p) => p.id === r.personId);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex flex-col gap-2 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-forest",
						children: person?.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-ink",
						children: [
							person?.county,
							" · ",
							r.urgency
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferralBadge, { status: r.status })]
				}) }, r.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-6",
			variant: "outline",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/app/queue",
				children: sw ? "Fungua foleni" : "Open the queue"
			})
		})
	] });
}
function ClinicDay() {
	const locale = useAfriStore((s) => s.locale);
	const sw = locale === "sw";
	const referrals = useAfriStore((s) => s.referrals);
	const people = useAfriStore((s) => s.people);
	const devices = useAfriStore((s) => s.devices);
	const workOrders = useAfriStore((s) => s.workOrders);
	const followUps = useAfriStore((s) => s.followUps);
	const carePlans = useAfriStore((s) => s.carePlans);
	const completeFollowUp = useAfriStore((s) => s.completeFollowUp);
	const activateCarePlan = useAfriStore((s) => s.activateCarePlan);
	const acceptDelivery = useAfriStore((s) => s.acceptDelivery);
	const [sent, setSent] = (0, import_react.useState)(null);
	const [fits, setFits] = (0, import_react.useState)({});
	const active = referrals.filter((r) => ![
		"fitted",
		"delivered",
		"closed"
	].includes(r.status));
	const blocked = devices.filter((d) => d.ownerPersonId && !d.fit && d.status === "in_stock");
	const inQa = workOrders.filter((w) => w.status === "qa" || w.status === "building");
	const due = followUps.filter((f) => !f.completedAt && f.dueAt <= TODAY).sort((a, b) => a.dueAt.localeCompare(b.dueAt));
	const offered = carePlans.filter((c) => c.status === "offered");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep",
			children: sw ? "Siku ya kliniki" : "Clinic day"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-1 font-display text-3xl font-semibold text-forest",
			children: sw ? "Nani anasubiri, na nini hakijasainiwa?" : "Who is waiting, and what is unsigned?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-2xl text-ink",
			children: sw ? "Kukabidhi kunasimama ikiwa kufaa hakujasainiwa. Orodha hii ni kazi ya leo, si vifaa vyote vilivyowahi kutolewa." : "A handover stops if the fit lock is unsigned. This list is today's work, not every device ever issued."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-xl p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-lg font-semibold text-forest",
						children: [
							active.length,
							" ",
							sw ? "katika foleni" : "in the queue"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "link",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/queue",
							children: [sw ? "Rufaa" : "Referrals", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-line",
					children: active.map((r) => {
						const person = people.find((p) => p.id === r.personId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-forest",
									children: person?.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-ink",
									children: [
										person?.county,
										" · ",
										r.urgency
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferralBadge, { status: r.status })]
						}, r.id);
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold text-forest",
						children: sw ? "Haiwezi kukabidhiwa" : "Cannot hand over"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 divide-y divide-line",
						children: blocked.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "py-3 text-sm text-muted-ink",
							children: sw ? "Hakuna kufaa kunakosubiri." : "No fit lock is waiting."
						}) : blocked.map((d) => {
							const person = people.find((p) => p.id === d.ownerPersonId);
							const fit = fits[d.id] ?? EMPTY_FIT;
							const ready = FIT_ROWS.every((row) => fit[row.key] === true);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "py-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-forest",
										children: person?.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs text-teal-deep",
										children: d.serial
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-ink",
										children: sw ? "Zote sita. Hakuna kukabidhi nusu." : "All six. No half handover."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 grid gap-2",
										children: FIT_ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
												id: `clinic-fit-${d.id}-${row.key}`,
												checked: fit[row.key] === true,
												onCheckedChange: (v) => setFits((cur) => ({
													...cur,
													[d.id]: {
														...cur[d.id] ?? EMPTY_FIT,
														[row.key]: v === true
													}
												}))
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: `clinic-fit-${d.id}-${row.key}`,
												className: "text-sm text-ink",
												children: sw ? row.sw : row.en
											})]
										}, row.key))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										className: "mt-3",
										disabled: !ready,
										onClick: () => acceptDelivery(d.id, fit),
										children: sw ? "Kabidhi kifaa" : "Hand over"
									})
								]
							}, d.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted-ink",
						children: [
							inQa.length,
							" ",
							sw ? "kazi bado warshani, hazijatolewa." : "jobs are still in the workshop and not released."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/devices",
							children: sw ? "Fungua vifaa" : "Open devices"
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-6 rounded-xl p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold text-forest",
					children: offered.length === 0 ? sw ? "Hakuna ombi" : "No prompt is waiting" : `${offered.length} ${sw ? "ombi linasubiri" : offered.length === 1 ? "prompt is waiting" : "prompts are waiting"}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-ink",
					children: sw ? "Paybill 880155 ni mfano. Hakuna pesa inayohamishwa." : "Paybill 880155 is a sample. No money moves."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-3",
					children: offered.map((plan) => {
						const person = people.find((p) => p.id === plan.personId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex flex-col gap-2 border-t border-line pt-3 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-forest",
								children: person?.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-ink",
								children: [
									plan.tier,
									" · ",
									kes(plan.priceKes),
									" · ",
									person?.phone
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: () => {
									const pay = activateCarePlan(plan.id, person?.phone ?? "");
									setSent(`${person?.name} · ${pay.receipt}`);
								},
								children: sw ? "Tuma ombi" : "Send prompt"
							})]
						}, plan.id);
					})
				}),
				sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-mono text-sm text-teal-deep",
					children: sent
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-6 rounded-xl p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-lg font-semibold text-forest",
				children: [
					due.length,
					" ",
					sw ? "ukaguzi umechelewa" : due.length === 1 ? "check is overdue" : "checks are overdue"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-3",
				children: due.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm text-muted-ink",
					children: sw ? "Hakuna kilichochelewa." : "Nothing is overdue."
				}) : due.map((f) => {
					const device = devices.find((d) => d.id === f.deviceId);
					const person = people.find((p) => p.id === device?.ownerPersonId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col gap-2 border-t border-line pt-3 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-forest",
							children: person?.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-ink",
							children: [
								f.kind,
								" · ",
								formatDate(f.dueAt, locale),
								" · ",
								device?.serial
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									onClick: () => completeFollowUp(f.id, "using", "Still using"),
									children: sw ? "Kinatumika" : "Still using"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => completeFollowUp(f.id, "broken", "Broken at follow-up"),
									children: sw ? "Kimevunjika" : "Broken"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => completeFollowUp(f.id, "given", "Given away"),
									children: sw ? "Kimepewa" : "Given away"
								})
							]
						})]
					}, f.id);
				})
			})]
		})
	] });
}
function WorkshopRadio() {
	const locale = useAfriStore((s) => s.locale);
	const role = useAfriStore((s) => s.role);
	const sw = locale === "sw";
	const builds = role !== "hub";
	const tickets = useAfriStore((s) => s.tickets);
	const devices = useAfriStore((s) => s.devices);
	const people = useAfriStore((s) => s.people);
	const parts = useAfriStore((s) => s.parts);
	const messages = useAfriStore((s) => s.messages);
	const orders = useAfriStore((s) => s.orders) ?? [];
	const requestPart = useAfriStore((s) => s.requestPart);
	const receivePart = useAfriStore((s) => s.receivePart);
	const closeTicket = useAfriStore((s) => s.closeTicket);
	const workOrders = useAfriStore((s) => s.workOrders);
	const referrals = useAfriStore((s) => s.referrals);
	const toggleQa = useAfriStore((s) => s.toggleQa);
	const releaseWorkOrder = useAfriStore((s) => s.releaseWorkOrder);
	const [picked, setPicked] = (0, import_react.useState)({});
	const [justReleased, setJustReleased] = (0, import_react.useState)(null);
	const jobs = workOrders.filter((w) => w.status !== "released");
	const open = tickets.filter((t) => t.status !== "closed");
	const loanersLeft = devices.filter((d) => d.status === "in_stock" && !d.ownerPersonId);
	const loanersOut = devices.filter((d) => d.status === "loan");
	const dry = parts.filter((p) => p.stock === 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep",
			children: sw ? "Redio ya warsha" : "Workshop radio"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-1 font-display text-3xl font-semibold text-forest",
			children: dry.length ? sw ? `${dry.map((p) => p.name).join(", ")} imeisha.` : `${dry.map((p) => p.name).join(", ")} is out.` : sw ? "Hakuna sehemu iliyoisha." : "No spare is at zero."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-2xl text-ink",
			children: sw ? `${loanersLeft.length} vya kukopesha vimesalia. ${loanersOut.length} viko nje. Jina, si nambari ya sehemu, ndilo linaloongoza.` : `${loanersLeft.length} loaner${loanersLeft.length === 1 ? "" : "s"} left on the shelf. ${loanersOut.length} already out. The name leads, not the part number.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 flex flex-wrap gap-2",
			children: parts.filter((p) => p.stock === 0 || p.stock < p.reorderAt).map((p) => {
				const openOrder = orders.find((o) => o.sku === p.sku && o.status === "requested");
				const unit = p.unitKes || PARTS.find((x) => x.sku === p.sku)?.unitKes || 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: openOrder ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "outline",
					onClick: () => receivePart(openOrder.id),
					children: [
						sw ? `Pokea ${p.name}` : `Receive ${p.name}`,
						" · ",
						openOrder.qty
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					onClick: () => requestPart(p.sku),
					children: [
						sw ? `Agiza ${p.name}` : `Order ${p.name}`,
						" · ",
						kes(unit * Math.max(p.reorderAt, 2))
					]
				}) }, p.sku);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-8",
			children: builds ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold text-forest",
					children: jobs.length === 0 ? sw ? "Kila kazi imetolewa" : "Every job is released" : `${jobs.length} ${sw ? "haijatolewa" : jobs.length === 1 ? "job is not released" : "jobs are not released"}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-ink",
					children: sw ? "Ukaguzi wote unahitajika. Kufaa bado ni kazi ya kliniki." : "Every QA check is required. The fit lock stays with the clinic."
				}),
				justReleased ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-mono text-sm text-teal-deep",
					children: justReleased
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-3",
					children: jobs.map((job) => {
						const referral = referrals.find((r) => r.id === job.referralId);
						const person = people.find((p) => p.id === referral?.personId);
						const model = MODELS.find((m) => m.id === job.modelId);
						const ready = QA_ITEMS.every((item) => job.qa?.[item.key]);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "rounded-xl p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl font-semibold text-forest",
									children: person?.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-ink",
									children: [
										model?.name,
										" · ",
										job.status === "building" ? sw ? "inaundwa" : "building" : "QA"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 grid gap-2 sm:grid-cols-2",
									children: QA_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex min-h-11 items-center gap-3 rounded-md bg-cream px-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
											checked: !!job.qa?.[item.key],
											onCheckedChange: () => toggleQa(job.id, item.key)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-ink",
											children: item.label
										})]
									}) }, item.key))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									className: "mt-3",
									disabled: !ready,
									onClick: () => {
										const device = releaseWorkOrder(job.id);
										if (device) setJustReleased(`${person?.name} · ${device.serial}`);
									},
									children: sw ? "Toa kifaa" : "Release"
								})
							]
						}) }, job.id);
					})
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-xl p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold text-forest",
					children: sw ? "Vifaa vipya vinatoka warshani" : "New devices leave from the workshop"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-ink",
					children: sw ? "Kituo hiki kinapokea sehemu na kufunga ukarabati. Hakitoi kifaa kipya." : "This hub receives spares and closes repairs. It does not release a new device."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 grid gap-3",
			children: open.map((tkt) => {
				const device = devices.find((d) => d.id === tkt.deviceId);
				const person = people.find((p) => p.id === device?.ownerPersonId);
				const model = MODELS.find((m) => m.id === device?.modelId);
				const blocking = parts.filter((p) => model?.partSkus.includes(p.sku) && p.stock === 0);
				const usable = parts.filter((p) => model?.partSkus.includes(p.sku) && p.stock > 0);
				const sku = picked[tkt.id] || usable[0]?.sku || "none";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-xl p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xl font-semibold text-forest",
										children: person?.name ?? device?.serial
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-ink",
										children: tkt.issue
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 font-mono text-xs text-muted-ink",
										children: [
											device?.serial,
											" · ",
											tkt.hub
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketBadge, { status: tkt.status })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-teal-deep",
							children: blocking.length ? sw ? `Haiwezi kufungwa. ${blocking.map((p) => p.name).join(", ")} haipo.` : `Cannot close. ${blocking.map((p) => p.name).join(", ")} is out of stock.` : sw ? "Sehemu zinazohitajika zipo." : "The parts this model needs are in stock."
						}),
						blocking.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap items-center gap-2",
							children: [usable.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: sku,
								onChange: (e) => setPicked((cur) => ({
									...cur,
									[tkt.id]: e.target.value
								})),
								className: "h-11 rounded-md border border-line bg-ivory px-3 text-sm text-forest",
								"aria-label": sw ? "Sehemu iliyotumika" : "Part used",
								children: usable.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: p.sku,
									children: [
										p.name,
										" · ",
										p.stock
									]
								}, p.sku))
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: () => closeTicket(tkt.id, usable.length ? sku : "none"),
								children: sw ? "Funga ukarabati" : "Close repair"
							})]
						}) : null
					]
				}) }, tkt.id);
			})
		}),
		messages[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4 rounded-xl p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold text-forest",
					children: sw ? "Laini ya hitilafu" : "Fault line"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "link",
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/app/service",
						children: [sw ? "Ukarabati" : "Repairs", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2",
				children: messages.slice(0, 3).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "text-sm text-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] uppercase text-teal-deep",
							children: m.channel
						}),
						" ",
						m.body
					]
				}, m.id))
			})]
		}) : null
	] });
}
function CountyBoard() {
	const locale = useAfriStore((s) => s.locale);
	const role = useAfriStore((s) => s.role);
	const sw = locale === "sw";
	const devices = useAfriStore((s) => s.devices);
	const people = useAfriStore((s) => s.people);
	const followUps = useAfriStore((s) => s.followUps);
	const tickets = useAfriStore((s) => s.tickets);
	const audit = useAfriStore((s) => s.audit);
	const orders = (useAfriStore((s) => s.orders) ?? []).filter((o) => o.status === "requested");
	const parts = useAfriStore((s) => s.parts);
	const spareCash = orders.reduce((sum, o) => sum + o.qty * o.unitKes, 0);
	const unfunded = devices.filter((d) => d.ownerPersonId && (d.status === "delivered" || d.status === "in_repair")).reduce((sum, d) => sum + gapFor(d.modelId), 0);
	const nextGap = devices.filter((d) => d.ownerPersonId && d.status === "in_stock").reduce((sum, d) => sum + gapFor(d.modelId), 0);
	const done = followUps.filter((f) => f.completedAt);
	const using = done.filter((f) => f.outcome === "using" || f.outcome == null && f.stillUsing);
	const yearChecks = followUps.filter((f) => f.kind === "12m" && !f.completedAt && f.dueAt <= TODAY);
	const closed = tickets.filter((t) => t.closedAt);
	const hours = closed.length === 0 ? 0 : Math.round(closed.reduce((sum, t) => sum + (new Date(t.closedAt).getTime() - new Date(t.openedAt).getTime()) / 36e5, 0) / closed.length);
	const byCounty = Object.entries(people.reduce((acc, p) => {
		acc[p.county] = (acc[p.county] ?? 0) + 1;
		return acc;
	}, {})).filter(([, n]) => n >= CELL);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-medium uppercase tracking-[0.16em] text-teal-deep",
			children: sw ? "Bodi ya kaunti" : "County board"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-1 font-display text-3xl font-semibold text-forest",
			children: sw ? "Vifaa vilivyolipiwa bado vinatumika?" : "Of the devices we paid for, how many are still in use?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "mt-8 grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-sm text-muted-ink",
						children: sw ? "Ukaguzi wa mwaka umechelewa" : "12-month checks overdue"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 font-display text-4xl font-semibold tabular-nums text-forest",
						children: yearChecks.length
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-sm text-muted-ink",
						children: sw ? "Bado vinatumika, kati ya vilivyokaguliwa" : "Still in use, of those checked"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "mt-2 font-display text-4xl font-semibold tabular-nums text-forest",
						children: [done.length ? Math.round(using.length / done.length * 100) : 0, "%"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-sm text-muted-ink",
						children: sw ? "Pengo lisilofadhiliwa" : "Unfunded SHA gap"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 font-display text-4xl font-semibold tabular-nums text-forest",
						children: kes(unfunded)
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-sm text-ink",
			children: sw ? `Muda wa ukarabati uliofungwa: saa ${hours}. Kukabidhi vilivyomo stokini kunaongeza ${kes(nextGap)}. Pengo si dai la SHA.` : `Closed-repair time averages ${hours} hours. Handing over what is already in stock would add ${kes(nextGap)}. The gap is not an SHA claim.`
		}),
		orders.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-6 rounded-xl p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold text-forest",
					children: sw ? "Sehemu zilizoagizwa" : "Spares the hub has asked for"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-ink",
					children: [
						kes(spareCash),
						" ",
						sw ? "bado hazijafika. Hii si dai la SHA." : "has not arrived. This is not an SHA claim."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 divide-y divide-line",
					children: orders.map((o) => {
						const part = parts.find((p) => p.sku === o.sku);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex flex-wrap items-center justify-between gap-2 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-forest",
								children: part?.name ?? o.sku
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-ink",
								children: [
									o.qty,
									" · ",
									kes(o.qty * o.unitKes)
								]
							})]
						}, o.id);
					})
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-muted-ink",
			children: sw ? "Hakuna oda ya sehemu iliyo wazi." : "No spare order is open."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-6 rounded-xl p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold text-forest",
				children: sw ? "Hesabu za kaunti" : "County counts"
			}), byCounty.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-ink",
				children: sw ? `${people.length} watu. Hakuna kaunti inaonyeshwa, kwa sababu kila kundi ni chini ya ${CELL}. Hivyo ndivyo kanuni ya seli ndogo inavyofanya kazi.` : `${people.length} people. No county is shown, because every cell is under ${CELL}. That is the small-cell rule, not a missing chart.`
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 divide-y divide-line",
				children: byCounty.map(([county, n]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex justify-between py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-forest",
						children: county
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: n
					})]
				}, county))
			})]
		}),
		role === "admin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4 rounded-xl p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold text-forest",
				children: sw ? "Ukaguzi" : "Audit"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 divide-y divide-line",
				children: audit.slice(0, 5).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink",
						children: e.action
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-ink",
						children: e.actor
					})]
				}, e.id))
			})]
		}) : null
	] });
}
var $$splitComponentImporter$5 = () => import("./claims-Mbn3Qjvh.mjs");
var Route$5 = createFileRoute("/app/claims")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./impact-j--yExEG.mjs");
var Route$4 = createFileRoute("/app/impact")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./queue-BPLqfwsL.mjs");
var Route$3 = createFileRoute("/app/queue")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./service-BZSp5Qm6.mjs");
var Route$2 = createFileRoute("/app/service")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./workshop-DBWP7mZ8.mjs");
var Route$1 = createFileRoute("/app/workshop")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./d._token-BdAwNoEn.mjs");
var Route = createFileRoute("/d/$token")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AppRoute = Route$10.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => Route$12
});
var FaultRoute = Route$9.update({
	id: "/fault",
	path: "/fault",
	getParentRoute: () => Route$12
});
var RequestRoute = Route$8.update({
	id: "/request",
	path: "/request",
	getParentRoute: () => Route$12
});
var AppIndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppRoute
});
var AppClaimsRoute = Route$5.update({
	id: "/claims",
	path: "/claims",
	getParentRoute: () => AppRoute
});
var AppDevicesRoute = Route$7.update({
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
	getParentRoute: () => Route$12
});
var AppRouteChildren = {
	AppClaimsRoute,
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
	FaultRoute,
	RequestRoute,
	DTokenRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { useAfriStore as C, kes as S, QA_ITEMS as _, Checkbox as a, cn as b, CardHeader as c, DeviceBadge as d, ReferralBadge as f, MODELS as g, CLINICIANS as h, FIT_ROWS as i, CardTitle as l, Badge as m, Route as n, Card as o, TicketBadge as p, EMPTY_FIT as r, CardContent as s, router_exports as t, Button as u, ROLES as v, formatDate as x, WHO_STEPS as y };
