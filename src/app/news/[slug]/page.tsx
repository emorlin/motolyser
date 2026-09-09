import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { TechPlaceholder } from "@/components/ui/TechPlaceholder";
import { Kicker } from "@/components/ui/Kicker";
import { NewsGrid } from "@/components/news/NewsGrid";
import { listNewsArticles, getNewsArticle } from "@/lib/cms/news";
import { formatDate } from "@/lib/utils";
import type { NewsCategory } from "@/lib/types";

const CATEGORY_LABEL: Record<NewsCategory, string> = {
  products: "Products",
  firmware: "Firmware",
  racing: "Racing",
  guides: "Guides",
};

export async function generateStaticParams() {
  const articles = await listNewsArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const article = await getNewsArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt },
  };
}

export default async function NewsArticlePage(props: PageProps<"/news/[slug]">) {
  const { slug } = await props.params;
  const article = await getNewsArticle(slug);
  if (!article) notFound();

  const allArticles = await listNewsArticles();
  const related = allArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article>
      <Container className="py-16 md:py-20">
        <Breadcrumbs
          items={[
            { label: "News", href: "/news" },
            { label: article.title },
          ]}
        />

        <div className="mt-6 max-w-2xl">
          <Kicker>
            {CATEGORY_LABEL[article.category]} · {formatDate(article.date)}
          </Kicker>
          <h1 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-text-muted">{article.excerpt}</p>
        </div>

        <TechPlaceholder
          label={article.featuredImage.alt.toUpperCase()}
          className="mt-10 aspect-16/9"
        />

        <div className="mt-10 flex max-w-2xl flex-col gap-5">
          {article.body.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>

      {related.length > 0 && (
        <section className="border-t border-border py-16 md:py-20">
          <Container>
            <h2 className="font-sans text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Related articles
            </h2>
            <NewsGrid articles={related} className="mt-8" />
          </Container>
        </section>
      )}
    </article>
  );
}
