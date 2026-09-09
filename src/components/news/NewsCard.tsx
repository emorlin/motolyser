import Link from "next/link";
import { TechPlaceholder } from "@/components/ui/TechPlaceholder";
import { MonoLabel } from "@/components/ui/MonoLabel";
import type { NewsArticle } from "@/lib/types";
import { formatDate } from "@/lib/utils";

const CATEGORY_LABEL: Record<NewsArticle["category"], string> = {
  products: "Products",
  firmware: "Firmware",
  racing: "Racing",
  guides: "Guides",
};

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group block border border-border bg-surface transition-colors duration-(--transition-base,180ms) hover:border-cyan/50"
    >
      <TechPlaceholder label={article.featuredImage.alt.toUpperCase()} className="aspect-16/10" dense />
      <div className="border-t border-border p-5">
        <MonoLabel as="p" size="2xs">
          {formatDate(article.date)} · {CATEGORY_LABEL[article.category]}
        </MonoLabel>
        <h3 className="mt-2 font-sans text-base font-bold tracking-tight text-text">
          {article.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{article.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green">
          Read more
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
