import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { TechPlaceholder } from "@/components/ui/TechPlaceholder";
import { COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `${COMPANY_NAME} develops precision measurement tools for RC enthusiasts and racers.`,
};

export default function AboutPage() {
  return (
    <Container className="grid grid-cols-1 items-center gap-12 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
      <div>
        <Kicker>About Sepro</Kicker>
        <h1 className="mt-4 font-sans text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl">
          Tools built by people who care about measurement.
        </h1>
        <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-text-muted">
          <p>
            {COMPANY_NAME} develops precision tools for RC enthusiasts and racers.
          </p>
          <p>Founded in Sweden. Designed for serious use. Built around accurate measurement.</p>
        </div>
      </div>
      <TechPlaceholder label="SEPRO AB — WORKSHOP PHOTO" className="aspect-4/3" />
    </Container>
  );
}
