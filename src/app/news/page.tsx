import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { NewsGrid } from "@/components/news/NewsGrid";
import { CategoryFilter } from "@/components/news/CategoryFilter";
import { listNewsArticles } from "@/lib/cms/news";

export const metadata: Metadata = {
  title: "News",
  description: "Product news, firmware releases and racing insights from Motolyser.",
};

export default async function NewsPage() {
  const articles = await listNewsArticles();

  return (
    <Container className="py-16 md:py-20">
      <Kicker>News</Kicker>
      <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
        News
      </h1>
      <CategoryFilter active="all" className="mt-8" />
      <NewsGrid articles={articles} className="mt-10" />
    </Container>
  );
}
