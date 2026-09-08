import { Button } from "@/components/ui/Button";
import type { Download } from "@/lib/types";
import { formatDate } from "@/lib/utils";

const TYPE_LABEL: Record<Download["type"], string> = {
  manual: "Manual",
  firmware: "Firmware",
  guide: "Guide",
};

export function DownloadCard({ download }: { download: Download }) {
  const meta = [
    TYPE_LABEL[download.type],
    download.version && `v${download.version}`,
    download.fileSize,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="flex flex-col gap-4 border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:border-x-0 sm:border-b-0 sm:border-t sm:bg-transparent sm:p-6 sm:first:border-t-0">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-cyan">
          {TYPE_LABEL[download.type]}
        </p>
        <p className="mt-1 font-sans text-base font-bold tracking-tight text-text">
          {download.title}
        </p>
        <p className="mt-1 text-sm text-text-muted">{download.description}</p>
        <p className="mt-2 font-mono text-xs text-text-muted">
          {meta} · Released {formatDate(download.releaseDate)}
        </p>
      </div>
      <Button href={download.file} download variant="download" className="w-full sm:w-auto">
        Download ↓
      </Button>
    </div>
  );
}
