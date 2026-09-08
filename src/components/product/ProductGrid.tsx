import type { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";
import { cx } from "@/lib/utils";

/**
 * Responsive grid that keeps working whether the product line has 2 or 6
 * entries, per the design brief's flexible-grid requirement.
 */
export function ProductGrid({ products, className }: { products: Product[]; className?: string }) {
  return (
    <div
      className={cx(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
