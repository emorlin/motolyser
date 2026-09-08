import { Icon } from "@/components/ui/Icon";
import type { ProductFeature } from "@/lib/types";
import { cx } from "@/lib/utils";

export function FeatureList({
  features,
  className,
}: {
  features: ProductFeature[];
  className?: string;
}) {
  return (
    <ul className={cx("grid grid-cols-1 gap-6 sm:grid-cols-2", className)}>
      {features.map((feature) => (
        <li key={feature.title} className="flex gap-4 border-t border-border pt-4">
          <Icon name={feature.icon} className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
          <div>
            <p className="font-sans text-sm font-bold tracking-tight text-text">{feature.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-text-muted">{feature.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
