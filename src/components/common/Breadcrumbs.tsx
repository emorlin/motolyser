import Link from "next/link";
import { MonoLabel } from "@/components/ui/MonoLabel";

export function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <MonoLabel as="nav" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-text">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-text">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </MonoLabel>
  );
}
