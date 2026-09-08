import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about Motolyser, Magnalyser, firmware or distribution.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 md:py-20">
      <div className="mx-auto max-w-lg">
        <Kicker>Contact</Kicker>
        <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
          Contact
        </h1>
        <p className="mt-3 text-text-muted">
          Have a question about Motolyser, Magnalyser, firmware or distribution?
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
