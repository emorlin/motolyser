import { TechPlaceholder } from "@/components/ui/TechPlaceholder";
import type { GalleryItem } from "@/lib/types";
import { cx } from "@/lib/utils";

export function Gallery({ items, className }: { items: GalleryItem[]; className?: string }) {
  return (
    <div className={cx("grid grid-cols-2 gap-4 sm:grid-cols-4", className)}>
      {items.map((item, i) => (
        <div key={i} className="relative">
          <TechPlaceholder label={item.alt.toUpperCase()} className="aspect-square" dense />
          {item.type === "video" && (
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan/60 bg-bg/70">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" className="ml-0.5 text-cyan">
                  <path d="M2 1.5v11l10-5.5-10-5.5Z" />
                </svg>
              </span>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
