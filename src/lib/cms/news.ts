import {
  getAllNewsArticles,
  getNewsArticleBySlug,
  getNewsArticlesByCategory,
  getNewsArticlesForProduct,
} from "@/content/news";
import type { NewsArticle } from "@/lib/types";

export async function listNewsArticles(): Promise<NewsArticle[]> {
  return getAllNewsArticles();
}

export async function getNewsArticle(slug: string): Promise<NewsArticle | undefined> {
  return getNewsArticleBySlug(slug);
}

export async function listNewsArticlesByCategory(category: string): Promise<NewsArticle[]> {
  return getNewsArticlesByCategory(category);
}

export async function listNewsArticlesForProduct(
  product: "motolyser" | "magnalyser"
): Promise<NewsArticle[]> {
  return getNewsArticlesForProduct(product);
}
