import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Subscribe for product news, firmware releases and racing insights.",
};

export default function NewsletterPage() {
  return (
    <Container className="py-16 md:py-20">
      <div className="mx-auto max-w-lg">
        <Kicker>Newsletter</Kicker>
        <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
          Stay updated
        </h1>
        <p className="mt-3 text-text-muted">
          Product news, firmware releases and racing insights — sent occasionally, never spam.
        </p>
        <NewsletterForm className="mt-8" />
        <p className="mt-8 text-xs text-text-muted">
          Already subscribed and want to unsubscribe or change your email? Contact us and
          we&rsquo;ll take care of it.
        </p>
      </div>
    </Container>
  );
}
