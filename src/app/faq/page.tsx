import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Accordion } from "@/components/faq/Accordion";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { listFaqCategories } from "@/lib/cms/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about purchasing, technical measurement and support for Motolyser and Magnalyser.",
};

export default async function FaqPage() {
  const categories = await listFaqCategories();

  return (
    <Container className="py-16 md:py-20">
      <Kicker>FAQ</Kicker>
      <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
        Frequently asked questions
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">
        <nav aria-label="FAQ categories" className="hidden lg:block">
          <ul className="sticky top-24 flex flex-col gap-3">
            {categories.map((cat) => (
              <li key={cat.id}>
                <MonoLabel as="a" href={`#${cat.id}`} className="transition-colors hover:text-cyan">
                  {cat.title}
                </MonoLabel>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-14">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-24">
              <h2 className="font-sans text-xl font-bold tracking-tight text-text">{cat.title}</h2>
              <Accordion items={cat.items} className="mt-4" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
