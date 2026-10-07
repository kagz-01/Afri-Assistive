import { create } from "zustand";
import {
  ASSESSMENTS,
  CARE_PLANS,
  CONSENTS,
  DEVICES,
  FOLLOW_UPS,
  MODELS,
  PEOPLE,
  PRESCRIPTIONS,
  REFERRALS,
  TICKETS,
  WORK_ORDERS,
} from "./demo-data";
import type {
  Assessment,
  CarePlan,
  Consent,
  Device,
  FollowUp,
  Locale,
  Payment,
  Person,
  Prescription,
  Referral,
  Role,
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
  acceptDelivery: (deviceId: string) => void;
  openTicket: (deviceId: string, issue: string, issueCode: string) => void;
  closeTicket: (ticketId: string) => void;
  completeFollowUp: (id: string, stillUsing: boolean, notes: string) => void;
  activateCarePlan: (carePlanId: string, phone: string) => Payment;
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
});

export const useAfriStore = create<AfriState>((set, get) => ({
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
    const token = uid("qr").replace("QR-", "");
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
    }));
    return device;
  },
  acceptDelivery: (deviceId) =>
    set((s) => {
      const device = s.devices.find((d) => d.id === deviceId);
      return {
        devices: s.devices.map((d) => (d.id === deviceId ? { ...d, status: "delivered" } : d)),
        referrals: s.referrals.map((r) => {
          const personMatch = device?.ownerPersonId === r.personId;
          return personMatch && (r.status === "ready" || r.status === "prescribed")
            ? { ...r, status: "delivered" }
            : r;
        }),
        followUps: [
          {
            id: uid("f"),
            deviceId,
            dueAt: new Date(Date.now() + 14 * 86_400_000).toISOString().slice(0, 10),
            kind: "2w",
          },
          ...s.followUps,
        ],
      };
    }),
  openTicket: (deviceId, issue, issueCode) =>
    set((s) => ({
      tickets: [
        {
          id: uid("t"),
          deviceId,
          issue,
          issueCode,
          severity: "moderate",
          status: "open",
          hub: "Kisumu hub",
          openedAt: new Date().toISOString(),
        },
        ...s.tickets,
      ],
      devices: s.devices.map((d) => (d.id === deviceId ? { ...d, status: "in_repair" } : d)),
    })),
  closeTicket: (ticketId) =>
    set((s) => {
      const ticket = s.tickets.find((t) => t.id === ticketId);
      return {
        tickets: s.tickets.map((t) =>
          t.id === ticketId ? { ...t, status: "closed", closedAt: new Date().toISOString() } : t,
        ),
        devices: s.devices.map((d) =>
          d.id === ticket?.deviceId ? { ...d, status: "delivered" } : d,
        ),
      };
    }),
  completeFollowUp: (id, stillUsing, notes) =>
    set((s) => ({
      followUps: s.followUps.map((f) =>
        f.id === id ? { ...f, completedAt: new Date().toISOString(), stillUsing, notes } : f,
      ),
    })),
  activateCarePlan: (carePlanId, phone) => {
    const plan = get().carePlans.find((c) => c.id === carePlanId);
    const payment: Payment = {
      id: uid("pay"),
      carePlanId,
      amountKes: plan?.priceKes ?? 500,
      status: "succeeded",
      receipt: `RD${Math.floor(10000000 + Math.random() * 89999999)}`,
      phone,
      at: new Date().toISOString(),
    };
    set((s) => ({
      payments: [payment, ...s.payments],
      carePlans: s.carePlans.map((c) =>
        c.id === carePlanId
          ? { ...c, status: "active", startAt: new Date().toISOString().slice(0, 10) }
          : c,
      ),
    }));
    return payment;
  },
}));

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
