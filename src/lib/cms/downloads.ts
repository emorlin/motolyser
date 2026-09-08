import { getAllDownloads, getDownloadsForProduct } from "@/content/downloads";
import type { Download } from "@/lib/types";

export async function listDownloads(): Promise<Download[]> {
  return getAllDownloads();
}

export async function listDownloadsForProduct(
  product: "motolyser" | "magnalyser"
): Promise<Download[]> {
  return getDownloadsForProduct(product);
}
