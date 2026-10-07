import { Badge } from "@/components/ui/badge";
import type { DeviceStatus, ReferralStatus, TicketStatus } from "@/lib/types";

export function ReferralBadge({ status }: { status: ReferralStatus }) {
  const map: Record<ReferralStatus, { label: string; variant: "default" | "teal" | "leaf" | "outline" | "warn" }> = {
    triage: { label: "Triage", variant: "warn" },
    assigned: { label: "Assigned", variant: "teal" },
    assessed: { label: "Assessed", variant: "teal" },
    prescribed: { label: "Prescribed", variant: "default" },
    in_production: { label: "In production", variant: "outline" },
    ready: { label: "Ready", variant: "leaf" },
    delivered: { label: "Delivered", variant: "leaf" },
    fitted: { label: "Fitted", variant: "leaf" },
    closed: { label: "Closed", variant: "outline" },
  };
  const v = map[status];
  return <Badge variant={v.variant}>{v.label}</Badge>;
}

export function DeviceBadge({ status }: { status: DeviceStatus }) {
  const map: Record<DeviceStatus, { label: string; variant: "default" | "teal" | "leaf" | "outline" | "warn" | "danger" }> = {
    in_production: { label: "In production", variant: "outline" },
    in_stock: { label: "In stock", variant: "teal" },
    delivered: { label: "Delivered", variant: "leaf" },
    in_repair: { label: "In repair", variant: "warn" },
    loan: { label: "Loan device", variant: "teal" },
    retired: { label: "Retired", variant: "outline" },
  };
  const v = map[status];
  return <Badge variant={v.variant}>{v.label}</Badge>;
}

export function TicketBadge({ status }: { status: TicketStatus }) {
  const map: Record<TicketStatus, { label: string; variant: "default" | "teal" | "leaf" | "outline" | "warn" | "danger" }> = {
    open: { label: "Open", variant: "danger" },
    assigned: { label: "Assigned", variant: "teal" },
    in_progress: { label: "In progress", variant: "warn" },
    waiting_parts: { label: "Waiting parts", variant: "outline" },
    closed: { label: "Closed", variant: "leaf" },
  };
  const v = map[status];
  return <Badge variant={v.variant}>{v.label}</Badge>;
}
