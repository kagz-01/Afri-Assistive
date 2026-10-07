import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-28 w-full rounded-md border border-line bg-paper px-3 py-2 text-base text-charcoal placeholder:text-muted-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
export { Textarea };
