import Link from "next/link";
import type { NewsCategory } from "@/lib/types";
import { cx } from "@/lib/utils";

const CATEGORIES: Array<{ value: NewsCategory | "all"; label: string }> = [
  { value: "all", label: "All" },
  { value: "products", label: "Products" },
  { value: "firmware", label: "Firmware" },
  { value: "racing", label: "Racing" },
  { value: "guides", label: "Guides" },
];

export function CategoryFilter({
  active,
  className,
}: {
  active: NewsCategory | "all";
  className?: string;
}) {
  return (
    <nav aria-label="News categories" className={cx("flex flex-wrap gap-3", className)}>
      {CATEGORIES.map((cat) => {
        const isActive = cat.value === active;
        const href = cat.value === "all" ? "/news" : `/news/category/${cat.value}`;
        return (
          <Link
            key={cat.value}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={cx(
              "border px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-colors",
              isActive
                ? "border-cyan text-cyan"
                : "border-border-strong text-text-muted hover:border-cyan hover:text-cyan"
            )}
          >
            {cat.label}
          </Link>
        );
      })}
    </nav>
  );
}
