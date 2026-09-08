import { getAllDistributors, getDistributorsByRegion } from "@/content/distributors";
import type { Distributor } from "@/lib/types";

export async function listDistributors(): Promise<Distributor[]> {
  return getAllDistributors();
}

export async function listDistributorsByRegion(): Promise<Record<string, Distributor[]>> {
  return getDistributorsByRegion();
}
