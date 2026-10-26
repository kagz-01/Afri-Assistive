import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  ASSESSMENTS,
  AUDIT,
  CARE_PLANS,
  CONSENTS,
  DEVICES,
  FOLLOW_UPS,
  MESSAGES,
  MODELS,
  PARTS,
  PEOPLE,
  PRESCRIPTIONS,
  REFERRALS,
  TICKETS,
  WORK_ORDERS,
} from "./demo-data";
import type {
  Assessment,
  AuditEvent,
  CarePlan,
  ClaimDraft,
  Consent,
  Device,
  FaultChannel,
  FaultMessage,
  FitRecord,
  FollowOutcome,
  FollowUp,
  Locale,
  Payment,
  Person,
  Prescription,
  Referral,
  Role,
  SparePart,
  PartOrder,
  TextScale,
  Ticket,
  WorkOrder,
} from "./types";
import { uid } from "./utils";

export interface AfriState {
  locale: Locale;
  role: Role;
  textScale: TextScale;
  contrast: boolean;
  people: Person[];
  consents: Consent[];
  referrals: Referral[];
  assessments: Assessment[];
  prescriptions: Prescription[];
  workOrders: WorkOrder[];
  devices: Device[];
  tickets: Ticket[];
  carePlans: CarePlan[];
  followUps: FollowUp[];
  payments: Payment[];
  parts: SparePart[];
  messages: FaultMessage[];
  claims: ClaimDraft[];
  orders: PartOrder[];
  audit: AuditEvent[];
  setLocale: (locale: Locale) => void;
  setRole: (role: Role) => void;
  setTextScale: (textScale: TextScale) => void;
  setContrast: (contrast: boolean) => void;
  addReferral: (input: {
    name: string;
    phone: string;
    county: string;
    reason: string;
    urgency: Referral["urgency"];
    source: Referral["source"];
    ageBand: string;
    sex: Person["sex"];
    guardianName?: string;
    consent: Omit<Consent, "personId" | "grantedAt">;
  }) => { personId: string; referralId: string };
  assignReferral: (id: string, clinician: string) => void;
  saveAssessment: (referralId: string, data: Omit<Assessment, "id" | "referralId">) => void;
  signPrescription: (assessmentId: string, modelId: string, size: string) => void;
  toggleQa: (workOrderId: string, key: string) => void;
  releaseWorkOrder: (workOrderId: string) => Device | null;
  acceptDelivery: (deviceId: string, fit: FitRecord) => string | null;
  openTicket: (deviceId: string, issue: string, issueCode: string) => void;
  closeTicket: (ticketId: string, partSku: string) => "closed" | "waiting" | "missing";
  reportFault: (serial: string, issueCode: string, channel: FaultChannel) => { ok: boolean; text: string };
  prepareClaim: (deviceId: string) => ClaimDraft | null;
  completeFollowUp: (id: string, outcome: FollowOutcome, notes: string) => void;
  requestPart: (sku: string) => void;
  receivePart: (orderId: string) => void;
  activateCarePlan: (carePlanId: string, phone: string) => Payment;
  resetPilot: () => void;
}

const seed = () => ({
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
  payments: [] as Payment[],
  parts: PARTS,
  messages: MESSAGES,
  claims: [] as ClaimDraft[],
  orders: [] as PartOrder[],
  audit: AUDIT,
});

function actorName(role: Role) {
  return ROLES.find((r) => r.id === role)?.en ?? role;
}

function note(role: Role, action: string, ref: string): AuditEvent {
  return { id: uid("log"), at: new Date().toISOString(), actor: actorName(role), action, ref };
}

const FIT_KEYS: (keyof FitRecord)[] = ["seat", "footrest", "brakes", "pressure", "trained", "caregiver"];

const FAULT_LABEL: Record<string, string> = {
  PUNCTURE: "Puncture",
  BRAKE: "Brakes failed",
  FRAME: "Frame or weld",
  CUSHION: "Cushion or seat",
  OTHER: "Other fault",
};

export const useAfriStore = create<AfriState>()(
  persist(
    (set, get) => ({
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
    const person: Person = {
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
      incomeBand: "unknown",
    };
    const consent: Consent = {
      ...input.consent,
      personId,
      grantedAt: new Date().toISOString(),
    };
    const referral: Referral = {
      id: referralId,
      personId,
      source: input.source,
      reason: input.reason,
      urgency: input.urgency,
      status: "triage",
      createdAt: new Date().toISOString(),
    };
    set((s) => ({
      people: [person, ...s.people],
      consents: [consent, ...s.consents],
      referrals: [referral, ...s.referrals],
      audit: [note(get().role, `Referral opened for ${person.county}`, referralId), ...s.audit].slice(0, 40),
    }));
    return { personId, referralId };
  },
  assignReferral: (id, clinician) =>
    set((s) => ({
      referrals: s.referrals.map((r) =>
        r.id === id ? { ...r, status: "assigned", assignedTo: clinician } : r,
      ),
    })),
  saveAssessment: (referralId, data) => {
    const assessment: Assessment = { id: uid("a"), referralId, ...data };
    set((s) => ({
      assessments: [assessment, ...s.assessments.filter((a) => a.referralId !== referralId)],
      referrals: s.referrals.map((r) =>
        r.id === referralId ? { ...r, status: data.signedAt ? "assessed" : r.status } : r,
      ),
    }));
  },
  signPrescription: (assessmentId, modelId, size) => {
    const assessment = get().assessments.find((a) => a.id === assessmentId);
    if (!assessment) return;
    const rx: Prescription = {
      id: uid("rx"),
      assessmentId,
      modelId,
      size,
      signedAt: new Date().toISOString(),
      clinician: assessment.clinician,
    };
    const wo: WorkOrder = {
      id: uid("w"),
      prescriptionId: rx.id,
      referralId: assessment.referralId,
      modelId,
      status: "queued",
      assignedTo: "Brian Kimani",
      dueDate: new Date(Date.now() + 12 * 86_400_000).toISOString().slice(0, 10),
    };
    set((s) => ({
      prescriptions: [rx, ...s.prescriptions],
      workOrders: [wo, ...s.workOrders],
      referrals: s.referrals.map((r) =>
        r.id === assessment.referralId ? { ...r, status: "prescribed" } : r,
      ),
      audit: [note(get().role, `Prescription signed · ${size}`, rx.id), ...s.audit].slice(0, 40),
    }));
  },
  toggleQa: (workOrderId, key) =>
    set((s) => ({
      workOrders: s.workOrders.map((w) => {
        if (w.id !== workOrderId) return w;
        const qa = { ...(w.qa ?? {}), [key]: !w.qa?.[key] };
        return { ...w, qa, status: "qa" };
      }),
    })),
  releaseWorkOrder: (workOrderId) => {
    const w = get().workOrders.find((x) => x.id === workOrderId);
    if (!w) return null;
    const items = ["frame", "wheels", "brakes", "seat", "footrest", "load", "serial", "manual"];
    if (!items.every((k) => w.qa?.[k])) return null;
    const model = MODELS.find((m) => m.id === w.modelId);
    const prefix = model?.category === "wheelchair" ? "WC" : model?.category === "orthosis" ? "OR" : "AD";
    const serial = `AA-${prefix}-2026-${String(200 + get().devices.length).padStart(6, "0")}`;
    const token = uid("qr").replace(/^qr-/i, "");
    const referral = get().referrals.find((r) => r.id === w.referralId);
    const person = get().people.find((p) => p.id === referral?.personId);
    const device: Device = {
      id: uid("d"),
      serial,
      qrToken: token,
      modelId: w.modelId,
      status: "in_stock",
      ownerPersonId: person?.id,
      manufacturedAt: new Date().toISOString().slice(0, 10),
      warrantyUntil: new Date(Date.now() + 365 * 86_400_000).toISOString().slice(0, 10),
      county: person?.county ?? "Nairobi",
    };
    set((s) => ({
      devices: [device, ...s.devices],
      workOrders: s.workOrders.map((x) =>
        x.id === workOrderId
          ? { ...x, status: "released", releasedAt: new Date().toISOString(), deviceId: device.id }
          : x,
      ),
      referrals: s.referrals.map((r) =>
        r.id === w.referralId ? { ...r, status: "ready" } : r,
      ),
      audit: [note(get().role, `QA release ${serial}. Fit lock still open.`, device.id), ...s.audit].slice(0, 40),
    }));
    return device;
  },
  acceptDelivery: (deviceId, fit) => {
    if (!FIT_KEYS.every((k) => fit[k] === true)) return "Fit lock is still open.";
    const device = get().devices.find((d) => d.id === deviceId);
    if (!device) return "Device missing.";
    if (!device.ownerPersonId) return "No person is linked to this device.";
    const stamped: FitRecord = { ...fit, at: new Date().toISOString(), by: actorName(get().role) };
    const due = (days: number) => new Date(Date.now() + days * 86_400_000).toISOString().slice(0, 10);
    set((s) => ({
      devices: s.devices.map((d) => (d.id === deviceId ? { ...d, status: "delivered", fit: stamped } : d)),
      referrals: s.referrals.map((r) =>
        r.personId === device.ownerPersonId && (r.status === "ready" || r.status === "prescribed" || r.status === "delivered")
          ? { ...r, status: "fitted" }
          : r,
      ),
      followUps: [
        { id: uid("f"), deviceId, dueAt: due(14), kind: "2w" },
        { id: uid("f"), deviceId, dueAt: due(180), kind: "6m" },
        { id: uid("f"), deviceId, dueAt: due(365), kind: "12m" },
        ...s.followUps,
      ],
      audit: [note(get().role, `Fit lock passed for ${device.serial}`, deviceId), ...s.audit].slice(0, 40),
    }));
    return null;
  },
  openTicket: (deviceId, issue, issueCode) =>
    set((s) => {
      const device = s.devices.find((d) => d.id === deviceId);
      const category = MODELS.find((m) => m.id === device?.modelId)?.category;
      const loan = s.devices.find((d) => {
        if (d.status !== "in_stock" || d.ownerPersonId || d.id === deviceId) return false;
        return MODELS.find((m) => m.id === d.modelId)?.category === category;
      });
      return {
        tickets: [
          {
            id: uid("t"),
            deviceId,
            issue,
            issueCode,
            severity: "moderate" as const,
            status: "open" as const,
            hub: "Kisumu hub",
            openedAt: new Date().toISOString(),
            loanDeviceId: loan?.id,
          },
          ...s.tickets,
        ],
        devices: s.devices.map((d) => {
          if (d.id === deviceId) return { ...d, status: "in_repair" as const };
          if (loan && d.id === loan.id) return { ...d, status: "loan" as const };
          return d;
        }),
        audit: [
          note(
            get().role,
            loan ? `Repair opened. Loaner ${loan.serial} issued.` : "Repair opened. No loaner in stock.",
            deviceId,
          ),
          ...s.audit,
        ].slice(0, 40),
      };
    }),
  closeTicket: (ticketId, partSku) => {
    const ticket = get().tickets.find((t) => t.id === ticketId);
    if (!ticket || ticket.status === "closed") return "missing";
    const device = get().devices.find((d) => d.id === ticket.deviceId);
    const model = MODELS.find((m) => m.id === device?.modelId);
    const needsPart = (model?.partSkus.length ?? 0) > 0;
    if (needsPart && partSku === "none") return "missing";
    const part = get().parts.find((p) => p.sku === partSku);
    if (needsPart && !part) return "missing";
    if (part && part.stock < 1) {
      set((s) => ({
        tickets: s.tickets.map((t) =>
          t.id === ticketId ? { ...t, status: "waiting_parts", partSku } : t,
        ),
        audit: [note(get().role, `Waiting for ${part.name}. Stock is zero.`, ticketId), ...s.audit].slice(0, 40),
      }));
      return "waiting";
    }
    set((s) => ({
      tickets: s.tickets.map((t) =>
        t.id === ticketId
          ? { ...t, status: "closed", closedAt: new Date().toISOString(), partSku: part ? part.sku : undefined }
          : t,
      ),
      parts: s.parts.map((p) => (part && p.sku === part.sku ? { ...p, stock: p.stock - 1 } : p)),
      devices: s.devices.map((d) => {
        if (d.id === ticket.deviceId) return { ...d, status: "delivered" as const };
        if (ticket.loanDeviceId && d.id === ticket.loanDeviceId) return { ...d, status: "in_stock" as const };
        return d;
      }),
      audit: [
        note(get().role, part ? `Repair closed using ${part.name}` : "Repair closed. No part used.", ticketId),
        ...s.audit,
      ].slice(0, 40),
    }));
    return "closed";
  },
  reportFault: (serial, issueCode, channel) => {
    const device = get().devices.find((d) => d.serial.toLowerCase() === serial.trim().toLowerCase());
    if (!device) return { ok: false, text: "No device with that serial." };
    const issue = FAULT_LABEL[issueCode] ?? issueCode;
    const line = channel === "ussd" ? "USSD" : "WhatsApp";
    const body = `${line} · ${device.serial} · ${issue}`;
    const existing = get().tickets.find((t) => t.deviceId === device.id && t.status !== "closed");
    if (existing) {
      set((s) => ({
        messages: [
          { id: uid("msg"), ticketId: existing.id, deviceId: device.id, channel, from: "person" as const, body, at: new Date().toISOString() },
          ...(s.messages ?? []),
        ],
        audit: [note(get().role, `Fault update on ${device.serial}`, existing.id), ...s.audit].slice(0, 40),
      }));
      return { ok: true, text: `Already open: ${existing.id}. Hub: ${existing.hub}.` };
    }
    get().openTicket(device.id, issue, issueCode);
    const ticket = get().tickets.find((t) => t.deviceId === device.id && t.status !== "closed");
    set((s) => ({
      messages: [
        { id: uid("msg"), ticketId: ticket?.id, deviceId: device.id, channel, from: "person" as const, body, at: new Date().toISOString() },
        ...(s.messages ?? []),
      ],
    }));
    const loan = ticket?.loanDeviceId ? " A loaner is assigned." : " No loaner in stock.";
    return { ok: true, text: ticket ? `Ticket ${ticket.id}.${loan}` : "Ticket opened." };
  },
  prepareClaim: (deviceId) => {
    const device = get().devices.find((d) => d.id === deviceId);
    if (!device) return null;
    const model = MODELS.find((m) => m.id === device.modelId);
    const blockers: string[] = [];
    if (!device.fit) blockers.push("fit");
    if (device.status === "in_production" || device.status === "in_stock") blockers.push("handover");
    if (model?.shaTariffKes == null) blockers.push("tariff");
    const cost = model?.costKes ?? 0;
    const tariff = model?.shaTariffKes ?? null;
    const draft: ClaimDraft = {
      id: uid("clm"),
      deviceId,
      preparedAt: new Date().toISOString(),
      status: blockers.length ? "blocked" : "ready",
      tariffKes: tariff,
      costKes: cost,
      gapKes: tariff == null ? cost : Math.max(0, cost - tariff),
      blockers,
    };
    set((s) => ({
      claims: [draft, ...(s.claims ?? []).filter((c) => c.deviceId !== deviceId)],
      audit: [
        note(get().role, draft.status === "ready" ? `SHA claim pack ready · ${device.serial}` : `SHA claim blocked · ${device.serial}`, deviceId),
        ...s.audit,
      ].slice(0, 40),
    }));
    return draft;
  },
  completeFollowUp: (id, outcome, notesText) =>
    set((s) => {
      const follow = s.followUps.find((f) => f.id === id);
      let tickets = s.tickets;
      let devices = s.devices;
      if (outcome === "broken" && follow) {
        const category = MODELS.find((m) => m.id === s.devices.find((d) => d.id === follow.deviceId)?.modelId)?.category;
        const loan = s.devices.find((d) => {
          if (d.status !== "in_stock" || d.ownerPersonId) return false;
          return MODELS.find((m) => m.id === d.modelId)?.category === category;
        });
        tickets = [
          {
            id: uid("t"),
            deviceId: follow.deviceId,
            issue: notesText || "Reported broken at follow-up",
            issueCode: "FOLLOW_UP",
            severity: "high" as const,
            status: "open" as const,
            hub: "Kisumu hub",
            openedAt: new Date().toISOString(),
            loanDeviceId: loan?.id,
          },
          ...tickets,
        ];
        devices = devices.map((d) => {
          if (d.id === follow.deviceId) return { ...d, status: "in_repair" as const };
          if (loan && d.id === loan.id) return { ...d, status: "loan" as const };
          return d;
        });
      }
      const label =
        outcome === "using" ? "Still in use" : outcome === "broken" ? "Broken — repair opened" : outcome === "given" ? "Given away" : "Stopped using";
      return {
        followUps: s.followUps.map((f) =>
          f.id === id
            ? { ...f, completedAt: new Date().toISOString(), stillUsing: outcome === "using", outcome, notes: notesText }
            : f,
        ),
        tickets,
        devices,
        audit: [note(get().role, label, id), ...s.audit].slice(0, 40),
      };
    }),
  requestPart: (sku) => {
    const part = get().parts.find((p) => p.sku === sku) ?? PARTS.find((p) => p.sku === sku);
    if (!part) return;
    if (get().orders.some((o) => o.sku === sku && o.status === "requested")) return;
    const qty = Math.max(part.reorderAt, 2);
    const unitKes = part.unitKes || PARTS.find((p) => p.sku === sku)?.unitKes || 0;
    set((s) => ({
      orders: [
        { id: uid("po"), sku, qty, unitKes, status: "requested" as const, at: new Date().toISOString() },
        ...(s.orders ?? []),
      ],
      audit: [note(get().role, `Spare order · ${qty} × ${part.name}`, sku), ...s.audit].slice(0, 40),
    }));
  },
  receivePart: (orderId) => {
    const order = (get().orders ?? []).find((o) => o.id === orderId && o.status === "requested");
    if (!order) return;
    const part = get().parts.find((p) => p.sku === order.sku);
    set((s) => ({
      orders: (s.orders ?? []).map((o) => (o.id === orderId ? { ...o, status: "received" as const } : o)),
      parts: s.parts.map((p) => (p.sku === order.sku ? { ...p, stock: p.stock + order.qty } : p)),
      audit: [note(get().role, `Spares received · ${part?.name ?? order.sku}`, orderId), ...s.audit].slice(0, 40),
    }));
  },
  activateCarePlan: (carePlanId, phone) => {
    const plan = get().carePlans.find((c) => c.id === carePlanId);
    const device = get().devices.find((d) => d.id === plan?.deviceId);
    const payment: Payment = {
      id: uid("pay"),
      carePlanId,
      amountKes: plan?.priceKes ?? 500,
      status: "succeeded",
      receipt: `RD${Math.floor(10000000 + Math.random() * 89999999)}`,
      phone,
      at: new Date().toISOString(),
      paybill: "880155",
      account: device?.serial ?? carePlanId,
      ratibaMonths: 12,
    };
    set((s) => ({
      payments: [payment, ...s.payments],
      carePlans: s.carePlans.map((c) =>
        c.id === carePlanId
          ? { ...c, status: "active", startAt: new Date().toISOString().slice(0, 10) }
          : c,
      ),
      audit: [note(get().role, `Care plan prompted · ${payment.receipt}`, carePlanId), ...s.audit].slice(0, 40),
    }));
    return payment;
  },
  resetPilot: () =>
    set({
      ...seed(),
      locale: get().locale,
      role: get().role,
      textScale: get().textScale,
      contrast: get().contrast,
    }),
    }),
    {
      name: "afriassistive-pilot-v2",
      version: 3,
      migrate: (persisted, version) => {
        const state = persisted as Partial<AfriState>;
        const next = { ...state };
        if (version < 2) {
          next.messages = state.messages ?? MESSAGES;
          next.claims = state.claims ?? [];
        }
        if (version < 3) next.orders = state.orders ?? [];
        return next;
      },
    },
  ),
);

export function modelById(id: string) {
  return MODELS.find((m) => m.id === id);
}

export const ROLES: { id: Role; en: string; sw: string }[] = [
  { id: "beneficiary", en: "Beneficiary", sw: "Mwanufaika" },
  { id: "referrer", en: "Community referrer", sw: "Mpeleka rufaa" },
  { id: "clinician", en: "Clinician", sw: "Mtaalamu kliniki" },
  { id: "technician", en: "Workshop", sw: "Fundi" },
  { id: "hub", en: "Repair hub", sw: "Kituo cha ukarabati" },
  { id: "partner", en: "Partner / payer", sw: "Mshirika" },
  { id: "admin", en: "Ops / DPO", sw: "Uendeshaji" },
];
