import type { Download } from "@/lib/types";
import { DownloadCard } from "./DownloadCard";

export function DownloadList({ downloads }: { downloads: Download[] }) {
  if (downloads.length === 0) {
    return (
      <p className="border border-dashed border-border p-8 text-center text-sm text-text-muted">
        No downloads match the selected filters.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4 sm:gap-0 sm:border-t sm:border-border">
      {downloads.map((download) => (
        <DownloadCard key={download.id} download={download} />
      ))}
    </div>
  );
}
