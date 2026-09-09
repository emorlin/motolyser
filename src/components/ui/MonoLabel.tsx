import type { ElementType, ComponentPropsWithoutRef } from "react";
import { cx } from "@/lib/utils";

type Size = "2xs" | "xs";
type Tone = "muted" | "cyan";

const sizeClasses: Record<Size, string> = {
  "2xs": "text-[11px] tracking-[0.15em]",
  xs: "text-xs tracking-[0.15em]",
};

const toneClasses: Record<Tone, string> = {
  muted: "text-text-muted",
  cyan: "text-cyan",
};

type MonoLabelProps<T extends ElementType> = {
  as?: T;
  size?: Size;
  tone?: Tone;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

/** Shared styling for the small uppercase mono-spaced labels used throughout
 * (breadcrumbs, card meta, spec keys, tab links). Not for the larger 0.2em
 * kickers — those stay as <Kicker>. */
export function MonoLabel<T extends ElementType = "span">({
  as,
  size = "xs",
  tone = "muted",
  className,
  ...rest
}: MonoLabelProps<T>) {
  const Component = as || "span";
  return (
    <Component
      className={cx("font-mono uppercase", sizeClasses[size], toneClasses[tone], className)}
      {...rest}
    />
  );
}
