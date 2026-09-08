import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { DistributorList } from "@/components/distributors/DistributorList";
import { listDistributorsByRegion } from "@/lib/cms/distributors";

export const metadata: Metadata = {
  title: "Distributors",
  description: "Find an authorized Motolyser and Magnalyser distributor near you.",
};

export default async function DistributorsPage() {
  const byRegion = await listDistributorsByRegion();
  const regions = Object.keys(byRegion);

  return (
    <>
      <Container className="py-16 md:py-20">
        <Kicker>Distributors</Kicker>
        <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
          Find a distributor
        </h1>
        <p className="mt-3 max-w-xl text-text-muted">
          Motolyser and Magnalyser are available through authorized distributors worldwide.
        </p>

        <nav aria-label="Regions" className="mt-8 flex flex-wrap gap-3">
          {regions.map((region) => (
            <a
              key={region}
              href={`#${region.toLowerCase().replace(/\s+/g, "-")}`}
              className="border border-border-strong px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-text-muted transition-colors hover:border-cyan hover:text-cyan"
            >
              {region}
            </a>
          ))}
        </nav>

        <DistributorList byRegion={byRegion} className="mt-14" />
      </Container>

      <section className="border-t border-border py-16 md:py-20">
        <Container className="text-center">
          <h2 className="font-sans text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Become a distributor
          </h2>
          <p className="mx-auto mt-3 max-w-md text-text-muted">
            Interested in becoming a Motolyser distributor?
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary">
              Contact us →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
