import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { listProducts } from "@/lib/cms/products";
import { listNewsArticles } from "@/lib/cms/news";

const STATIC_ROUTES = [
  "",
  "/products",
  "/downloads",
  "/distributors",
  "/news",
  "/faq",
  "/contact",
  "/about",
  "/newsletter",
  "/legal/data-policy",
  "/legal/cookies",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, articles] = await Promise.all([listProducts(), listNewsArticles()]);

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));

  const productEntries = products.flatMap((p) => [
    { url: `${SITE_URL}/products/${p.slug}` },
    { url: `${SITE_URL}/products/${p.slug}/downloads` },
  ]);

  const newsEntries = articles.map((a) => ({ url: `${SITE_URL}/news/${a.slug}` }));

  return [...staticEntries, ...productEntries, ...newsEntries];
}
