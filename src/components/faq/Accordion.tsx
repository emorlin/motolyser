import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/types";
import { cx } from "@/lib/utils";

export function Accordion({ items, className }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={cx("flex flex-col border-t border-border", className)}>
      {items.map((item) => (
        <details key={item.question} className="group border-b border-border py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-text marker:content-none">
            {item.question}
            <Plus
              size={18}
              strokeWidth={1.5}
              aria-hidden="true"
              className="shrink-0 text-cyan transition-transform group-open:rotate-45"
            />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
