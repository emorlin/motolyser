import type { Distributor } from "@/lib/types";

// Placeholder entries only. Real distributor data must replace this list
// before launch — do not present these as verified dealers.
export const DISTRIBUTORS: Distributor[] = [
  {
    id: "sepro-se",
    region: "Europe",
    country: "Sweden",
    company: "Sepro AB",
    address: "Stockholm, Sweden",
    website: "https://motolyser.com",
  },
  {
    id: "example-de",
    region: "Europe",
    country: "Germany",
    company: "Example Racing GmbH",
    address: "Berlin, Germany",
    website: "https://example.com",
  },
];

export function getAllDistributors(): Distributor[] {
  return DISTRIBUTORS;
}

export function getDistributorsByRegion(): Record<string, Distributor[]> {
  return DISTRIBUTORS.reduce<Record<string, Distributor[]>>((acc, d) => {
    (acc[d.region] ??= []).push(d);
    return acc;
  }, {});
}
