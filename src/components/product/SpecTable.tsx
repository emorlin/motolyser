import type { SpecRow } from "@/lib/types";
import { cx } from "@/lib/utils";

export function SpecTable({ rows, className }: { rows: SpecRow[]; className?: string }) {
  return (
    <dl className={cx("border border-border", className)}>
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex flex-col gap-1 border-b border-border px-5 py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
        >
          <dt className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
            {row.label}
          </dt>
          <dd className="font-mono text-sm text-text sm:text-right">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
