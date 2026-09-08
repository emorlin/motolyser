import type { Download } from "@/lib/types";

// Placeholder catalogue illustrating the data shape. Replace file paths and
// dates with real assets before launch.
export const DOWNLOADS: Download[] = [
  {
    id: "motolyser-firmware-1-4",
    title: "Motolyser Firmware 1.4",
    description: "Latest firmware release",
    product: "motolyser",
    type: "firmware",
    version: "1.4",
    fileSize: "2.4 MB",
    file: "/downloads/motolyser-firmware-1.4.bin",
    releaseDate: "2026-08-24",
  },
  {
    id: "motolyser-manual",
    title: "Motolyser User Manual",
    description: "Complete operating instructions",
    product: "motolyser",
    type: "manual",
    version: "3.2",
    fileSize: "1.1 MB",
    file: "/downloads/motolyser-manual-v3.2.pdf",
    releaseDate: "2026-05-02",
  },
  {
    id: "timing-measurement-guide",
    title: "Timing Measurement Guide",
    description: "Understanding timing and Hall accuracy",
    product: null,
    type: "guide",
    fileSize: "640 KB",
    file: "/downloads/timing-measurement-guide.pdf",
    releaseDate: "2026-03-14",
  },
  {
    id: "magnalyser-manual",
    title: "Magnalyser User Manual",
    description: "Complete operating instructions",
    product: "magnalyser",
    type: "manual",
    version: "1.0",
    fileSize: "980 KB",
    file: "/downloads/magnalyser-manual-v1.0.pdf",
    releaseDate: "2026-02-10",
  },
  {
    id: "magnalyser-firmware-1-0",
    title: "Magnalyser Firmware 1.0",
    description: "Initial firmware release",
    product: "magnalyser",
    type: "firmware",
    version: "1.0",
    fileSize: "2.1 MB",
    file: "/downloads/magnalyser-firmware-1.0.bin",
    releaseDate: "2026-01-20",
  },
];

export function getAllDownloads(): Download[] {
  return DOWNLOADS;
}

export function getDownloadsForProduct(product: "motolyser" | "magnalyser"): Download[] {
  return DOWNLOADS.filter((d) => d.product === product);
}
