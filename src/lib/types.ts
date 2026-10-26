export type Locale = "en" | "sw";
export type TextScale = "md" | "lg" | "xl";

export type Role =
  | "beneficiary"
  | "referrer"
  | "clinician"
  | "technician"
  | "hub"
  | "partner"
  | "admin";

export type Urgency = "routine" | "soon" | "urgent";

export type ReferralStatus =
  | "triage"
  | "assigned"
  | "assessed"
  | "prescribed"
  | "in_production"
  | "ready"
  | "delivered"
  | "fitted"
  | "closed";

export type DeviceStatus =
  | "in_production"
  | "in_stock"
  | "delivered"
  | "in_repair"
  | "loan"
  | "retired";

export type TicketStatus = "open" | "assigned" | "in_progress" | "waiting_parts" | "closed";

export type CareTier = "basic" | "standard" | "plus";

export type ProductCategory = "wheelchair" | "walking_aid" | "orthosis" | "adl" | "vision";

export interface Person {
  id: string;
  name: string;
  phone: string;
  county: string;
  subCounty: string;
  ageBand: string;
  sex: "female" | "male" | "undisclosed";
  language: Locale;
  disabilityDomain: string;
  guardianName?: string;
  rural: boolean;
  incomeBand: "low" | "mid" | "unknown";
}

export interface Consent {
  personId: string;
  care: boolean;
  dataSharing: boolean;
  research: boolean;
  media: boolean;
  grantedBy: "self" | "guardian";
  grantedAt: string;
}

export interface Referral {
  id: string;
  personId: string;
  source: "self" | "chw" | "clinic" | "school" | "ngo";
  reason: string;
  urgency: Urgency;
  status: ReferralStatus;
  assignedTo?: string;
  createdAt: string;
}

export interface Assessment {
  id: string;
  referralId: string;
  clinician: string;
  mobilityScore: number;
  notes: string;
  measurements: string;
  signedAt?: string;
}

export interface Prescription {
  id: string;
  assessmentId: string;
  modelId: string;
  size: string;
  signedAt: string;
  clinician: string;
}

export interface WorkOrder {
  id: string;
  prescriptionId?: string;
  referralId: string;
  modelId: string;
  status: "queued" | "building" | "qa" | "released";
  assignedTo: string;
  dueDate: string;
  qa?: Record<string, boolean>;
  releasedAt?: string;
  deviceId?: string;
}

export interface DeviceModel {
  id: string;
  name: string;
  category: ProductCategory;
  tier: 1 | 2 | 3;
  priceKes: number;
  costKes: number;
  /** Published SHA tariff. Null when the device is not on the benefit list. */
  shaTariffKes: number | null;
  standard: string;
  partSkus: string[];
}

export interface SparePart {
  sku: string;
  name: string;
  modelIds: string[];
  stock: number;
  reorderAt: number;
  /** Pilot shelf cost. Not a live supplier quote. */
  unitKes: number;
}

export interface PartOrder {
  id: string;
  sku: string;
  qty: number;
  unitKes: number;
  status: "requested" | "received";
  at: string;
}

export interface FitRecord {
  seat: boolean;
  footrest: boolean;
  brakes: boolean;
  pressure: boolean;
  trained: boolean;
  caregiver: boolean;
  at?: string;
  by?: string;
}

export type FollowOutcome = "using" | "broken" | "given" | "stopped";

export interface AuditEvent {
  id: string;
  at: string;
  actor: string;
  action: string;
  ref: string;
}

export interface Device {
  id: string;
  serial: string;
  qrToken: string;
  modelId: string;
  status: DeviceStatus;
  ownerPersonId?: string;
  manufacturedAt: string;
  warrantyUntil: string;
  county: string;
  safetyNotice?: string;
  fit?: FitRecord;
}

export interface Ticket {
  id: string;
  deviceId: string;
  issue: string;
  issueCode: string;
  severity: "low" | "moderate" | "high";
  status: TicketStatus;
  hub: string;
  openedAt: string;
  closedAt?: string;
  loanDeviceId?: string;
  partSku?: string;
}

export interface CarePlan {
  id: string;
  personId: string;
  deviceId: string;
  tier: CareTier;
  status: "offered" | "active" | "lapsed";
  priceKes: number;
  startAt?: string;
}

export interface Payment {
  id: string;
  carePlanId: string;
  amountKes: number;
  status: "initiated" | "pending" | "succeeded" | "failed";
  receipt?: string;
  phone: string;
  at: string;
  /** Sample paybill. Not a registered Safaricom short code. */
  paybill?: string;
  account?: string;
  ratibaMonths?: number;
}

export type FaultChannel = "ussd" | "whatsapp" | "desk";

export interface FaultMessage {
  id: string;
  ticketId?: string;
  deviceId?: string;
  channel: FaultChannel;
  from: "person" | "desk";
  body: string;
  at: string;
}

export interface ClaimDraft {
  id: string;
  deviceId: string;
  preparedAt: string;
  status: "blocked" | "ready";
  tariffKes: number | null;
  costKes: number;
  gapKes: number;
  /** fit | handover | tariff | missing */
  blockers: string[];
}

export interface FollowUp {
  id: string;
  deviceId: string;
  dueAt: string;
  kind: "2w" | "3m" | "6m" | "12m";
  completedAt?: string;
  stillUsing?: boolean;
  outcome?: FollowOutcome;
  notes?: string;
}
