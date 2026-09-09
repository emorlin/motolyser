import { cx } from "@/lib/utils";
import { MonoLabel } from "./MonoLabel";

/**
 * Stand-in for real product/environment photography. Renders a labelled
 * technical panel instead of a fake or stock image, so it's obvious at a
 * glance which media assets still need to be shot/sourced.
 */
export function TechPlaceholder({
  label,
  className,
  dense = false,
}: {
  label: string;
  className?: string;
  dense?: boolean;
}) {
  return (
    <div
      className={cx(
        "relative flex items-center justify-center overflow-hidden rounded-sm border border-border bg-surface",
        className
      )}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: dense ? "16px 16px" : "32px 32px",
        }}
      />
      {/* corner ticks */}
      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-cyan/50" />
      <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-cyan/50" />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-cyan/50" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-cyan/50" />

      <MonoLabel as="p" size="2xs" className="relative px-6 text-center">
        {label}
      </MonoLabel>
    </div>
  );
}
