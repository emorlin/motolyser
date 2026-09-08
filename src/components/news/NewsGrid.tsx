import type { NewsArticle } from "@/lib/types";
import { NewsCard } from "./NewsCard";
import { cx } from "@/lib/utils";

export function NewsGrid({ articles, className }: { articles: NewsArticle[]; className?: string }) {
  return (
    <div className={cx("grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {articles.map((article) => (
        <NewsCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
