import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { DownloadsExplorer } from "@/components/downloads/DownloadsExplorer";
import { listDownloads } from "@/lib/cms/downloads";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Manuals, firmware and guides for Motolyser and Magnalyser.",
};

export default async function DownloadsPage() {
  const downloads = await listDownloads();

  return (
    <Container className="py-16 md:py-20">
      <Kicker>Downloads</Kicker>
      <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
        Manuals, firmware and guides
      </h1>
      <p className="mt-3 max-w-xl text-text-muted">
        Find the manual or firmware you need, fast — filter by product or file type.
      </p>
      <DownloadsExplorer downloads={downloads} className="mt-10" />
    </Container>
  );
}
