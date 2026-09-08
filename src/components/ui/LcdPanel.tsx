import { cx } from "@/lib/utils";

export function LcdPanel({
  title,
  rows,
  status,
  className,
}: {
  title: string;
  rows: Array<{ label: string; value: string }>;
  status?: string;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "rounded-sm border border-blue/30 bg-[#04121f] px-4 py-3 font-mono text-blue shadow-[0_0_24px_-8px_rgba(22,119,255,0.5)]",
        className
      )}
    >
      <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-blue/70">{title}</p>
      <dl className="space-y-1">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-4 text-sm">
            <dt className="text-blue/60">{row.label}</dt>
            <dd className="tabular-nums">{row.value}</dd>
          </div>
        ))}
        {status && (
          <div className="flex items-baseline justify-between gap-4 border-t border-blue/20 pt-1.5 text-sm">
            <dt className="text-blue/60">STATUS</dt>
            <dd className="text-cyan">{status}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
