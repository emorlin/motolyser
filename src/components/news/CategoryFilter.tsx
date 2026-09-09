import Link from "next/link";
import type { NewsCategory } from "@/lib/types";
import { cx, filterPillClasses } from "@/lib/utils";

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
            className={filterPillClasses(isActive)}
          >
            {cat.label}
          </Link>
        );
      })}
    </nav>
  );
}
