import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Use",
};

export default function CookiesPage() {
  return (
    <Container className="max-w-2xl py-16 md:py-20">
      <h1 className="font-sans text-4xl font-extrabold tracking-tight text-text">Cookie Use</h1>
      <p className="mt-4 border border-warning/40 bg-warning/10 px-4 py-3 text-sm text-warning">
        Placeholder — this page needs final legal text from {COMPANY_NAME} before launch, and
        should be kept in sync with whichever analytics/cookie tooling is actually deployed.
      </p>

      <div className="mt-10 flex flex-col gap-6 text-sm leading-relaxed text-text-muted">
        <section>
          <h2 className="font-sans text-base font-bold text-text">Essential cookies</h2>
          <p className="mt-2">
            Used for core site functionality. These cannot be disabled and do not track you
            across other websites.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-base font-bold text-text">Analytics</h2>
          <p className="mt-2">
            If analytics are enabled on this site, details of what is collected and how to opt
            out will be listed here.
          </p>
        </section>
      </div>
    </Container>
  );
}
