import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Data Use Policy",
};

export default function DataPolicyPage() {
  return (
    <Container className="max-w-2xl py-16 md:py-20">
      <h1 className="font-sans text-4xl font-extrabold tracking-tight text-text">
        Data Use Policy
      </h1>
      <p className="mt-4 border border-warning/40 bg-warning/10 px-4 py-3 text-sm text-warning">
        Placeholder — this page needs final legal text from {COMPANY_NAME} before launch.
      </p>

      <div className="prose-legal mt-10 flex flex-col gap-6 text-sm leading-relaxed text-text-muted">
        <section>
          <h2 className="font-sans text-base font-bold text-text">What we collect</h2>
          <p className="mt-2">
            {COMPANY_NAME} collects the information you provide directly, such as through the
            contact form or newsletter signup, and basic technical data needed to operate this
            website.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-base font-bold text-text">How we use it</h2>
          <p className="mt-2">
            Information submitted through the contact form is used only to respond to your
            enquiry. Newsletter subscribers receive product news, firmware releases and racing
            insights, and can unsubscribe at any time.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-base font-bold text-text">Your rights</h2>
          <p className="mt-2">
            You can request access to, correction of, or deletion of your personal data by
            contacting us. Full details of applicable rights will be confirmed here pending legal
            review.
          </p>
        </section>
      </div>
    </Container>
  );
}
