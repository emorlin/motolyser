import Link from "next/link";
import { TechPlaceholder } from "@/components/ui/TechPlaceholder";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block border border-border bg-surface transition-colors duration-(--transition-base,180ms) hover:border-cyan/50"
    >
      <TechPlaceholder
        label={`${product.name.toUpperCase()} — PRODUCT PHOTO`}
        className="aspect-4/3 transition-transform duration-(--transition-base,180ms) group-hover:scale-[1.01]"
      />
      <div className="border-t border-border p-6">
        <h3 className="font-sans text-lg font-bold tracking-tight text-text">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{product.tagline}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green">
          View product
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
