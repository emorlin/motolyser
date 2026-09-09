import { LcdPanel } from "@/components/ui/LcdPanel";
import { TechPlaceholder } from "@/components/ui/TechPlaceholder";
import { cx } from "@/lib/utils";

/** The recurring hero visual: a product photo placeholder with an LCD-style
 * measurement readout overlaid on the bottom-left corner. Used on the
 * homepage hero and every product page hero. */
export function ProductReadoutPhoto({
  label,
  readoutTitle = "Motor Analysis",
  rows,
  className,
}: {
  label: string;
  readoutTitle?: string;
  rows: Array<{ label: string; value: string }>;
  className?: string;
}) {
  return (
    <div className={cx("relative", className)}>
      <TechPlaceholder label={label} className="aspect-4/3" />
      <LcdPanel
        className="absolute -bottom-6 left-6 w-56 sm:w-64"
        title={readoutTitle}
        rows={rows}
      />
    </div>
  );
}
