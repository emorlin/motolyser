"use client";

import { useMemo, useState } from "react";
import type { Download, DownloadType } from "@/lib/types";
import { DownloadList } from "./DownloadList";

const PRODUCT_OPTIONS = [
  { value: "all", label: "All products" },
  { value: "motolyser", label: "Motolyser" },
  { value: "magnalyser", label: "Magnalyser" },
] as const;

const TYPE_OPTIONS: Array<{ value: "all" | DownloadType; label: string }> = [
  { value: "all", label: "All types" },
  { value: "manual", label: "Manual" },
  { value: "firmware", label: "Firmware" },
  { value: "guide", label: "Guide" },
];

const selectClasses =
  "min-h-11 border border-border-strong bg-surface px-4 text-sm text-text focus:border-cyan";

export function DownloadsExplorer({
  downloads,
  className,
}: {
  downloads: Download[];
  className?: string;
}) {
  const [product, setProduct] = useState<(typeof PRODUCT_OPTIONS)[number]["value"]>("all");
  const [type, setType] = useState<"all" | DownloadType>("all");

  const filtered = useMemo(() => {
    return downloads.filter((d) => {
      const productMatch = product === "all" || d.product === product;
      const typeMatch = type === "all" || d.type === type;
      return productMatch && typeMatch;
    });
  }, [downloads, product, type]);

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-3">
        <label className="sr-only" htmlFor="product-filter">
          Filter by product
        </label>
        <select
          id="product-filter"
          className={selectClasses}
          value={product}
          onChange={(e) => setProduct(e.target.value as typeof product)}
        >
          {PRODUCT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <label className="sr-only" htmlFor="type-filter">
          Filter by file type
        </label>
        <select
          id="type-filter"
          className={selectClasses}
          value={type}
          onChange={(e) => setType(e.target.value as typeof type)}
        >
          {TYPE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8">
        <DownloadList downloads={filtered} />
      </div>
    </div>
  );
}
