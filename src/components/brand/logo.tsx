import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  compact = false,
  to = "/",
}: {
  className?: string;
  compact?: boolean;
  to?: string;
}) {
  return (
    <Link to={to} className={cn("flex min-w-0 items-center gap-2 no-underline sm:gap-3", className)}>
      <img
        src="/icon.png"
        alt=""
        className="size-11 rounded-lg object-cover outline outline-1 -outline-offset-1 outline-forest/10"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-forest">
          AfriAssistive
        </span>
        {!compact ? (
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-ink">
            Access · Mobility · Independence
          </span>
        ) : null}
      </span>
    </Link>
  );
}

export function LogoLockup({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="AfriAssistive — Access, Mobility, Independence"
      className={cn("h-14 w-auto max-w-full object-contain object-left", className)}
    />
  );
}
