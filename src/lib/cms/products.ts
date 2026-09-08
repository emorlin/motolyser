import { getAllProducts, getProductBySlug as getLocal } from "@/content/products";
import type { Product } from "@/lib/types";

// Data-access layer for products. Components should only ever import from
// here, never from src/content directly — that keeps the swap to the
// Contentful Delivery API (see CONTENT_MODEL.md) to this one file.

export async function listProducts(): Promise<Product[]> {
  return getAllProducts();
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  return getLocal(slug);
}
