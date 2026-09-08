import { cx } from "@/lib/utils";

export function Kicker({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cx("font-mono text-xs uppercase tracking-[0.2em] text-cyan", className)}>
      {children}
    </p>
  );
}
