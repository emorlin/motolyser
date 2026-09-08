import type { NewsArticle } from "@/lib/types";

// Sample/placeholder articles illustrating the content shape and tone.
export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "firmware-1-4-released",
    title: "Firmware 1.4 released",
    excerpt: "New features and improved measurement stability.",
    body: [
      "Firmware 1.4 is now available for Motolyser, bringing improved measurement stability across all supported motor types.",
      "Update your device through the Motolyser desktop tool, or refer to the update guide in the manual for step-by-step instructions.",
    ],
    date: "2026-08-24",
    category: "firmware",
    featuredImage: { src: "news-firmware", alt: "Motolyser display showing motor analysis readout" },
    products: ["motolyser"],
  },
  {
    slug: "racing-at-ets-2026",
    title: "Racing at ETS 2026",
    excerpt: "Meet us and our distributors at ETS this season.",
    body: [
      "The Motolyser and Magnalyser teams will be present at the European Touring Series this season, alongside several of our distributors.",
      "Stop by to see the tools in action and talk timing, sensor accuracy and Blinky Mode setup with the team.",
    ],
    date: "2026-07-10",
    category: "racing",
    featuredImage: { src: "news-racing", alt: "RC racing track" },
  },
  {
    slug: "getting-the-most-out-of-blinky-mode",
    title: "Tips: Getting the most out of Blinky Mode",
    excerpt: "A short guide to optimal setup and measurement.",
    body: [
      "Blinky Mode racing rewards correct motor and sensor setup. This guide walks through a practical measurement routine using Motolyser before you head to the track.",
      "Start by checking Hall sensor accuracy on all three phases, then confirm timing advance is within your class rules.",
    ],
    date: "2026-06-05",
    category: "guides",
    featuredImage: { src: "news-guide", alt: "Motolyser connected to a motor on a workbench" },
    products: ["motolyser"],
  },
];

export function getAllNewsArticles(): NewsArticle[] {
  return [...NEWS_ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find((a) => a.slug === slug);
}

export function getNewsArticlesByCategory(category: string): NewsArticle[] {
  return getAllNewsArticles().filter((a) => a.category === category);
}

export function getNewsArticlesForProduct(product: "motolyser" | "magnalyser"): NewsArticle[] {
  return getAllNewsArticles().filter((a) => a.products?.includes(product));
}
