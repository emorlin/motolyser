import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { NewsGrid } from "@/components/news/NewsGrid";
import { CategoryFilter } from "@/components/news/CategoryFilter";
import { listNewsArticlesByCategory } from "@/lib/cms/news";
import type { NewsCategory } from "@/lib/types";

const CATEGORIES: NewsCategory[] = ["products", "firmware", "racing", "guides"];
const CATEGORY_TITLE: Record<NewsCategory, string> = {
  products: "Products",
  firmware: "Firmware",
  racing: "Racing",
  guides: "Guides",
};

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata(
  props: PageProps<"/news/category/[category]">
): Promise<Metadata> {
  const { category } = await props.params;
  if (!CATEGORIES.includes(category as NewsCategory)) return {};
  return { title: `${CATEGORY_TITLE[category as NewsCategory]} news` };
}

export default async function NewsCategoryPage(props: PageProps<"/news/category/[category]">) {
  const { category } = await props.params;
  if (!CATEGORIES.includes(category as NewsCategory)) notFound();

  const articles = await listNewsArticlesByCategory(category);

  return (
    <Container className="py-16 md:py-20">
      <Kicker>News</Kicker>
      <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
        {CATEGORY_TITLE[category as NewsCategory]}
      </h1>
      <CategoryFilter active={category as NewsCategory} className="mt-8" />
      {articles.length > 0 ? (
        <NewsGrid articles={articles} className="mt-10" />
      ) : (
        <p className="mt-10 border border-dashed border-border p-8 text-center text-sm text-text-muted">
          No articles in this category yet.
        </p>
      )}
    </Container>
  );
}
