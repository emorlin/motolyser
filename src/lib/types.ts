// Content shapes. These mirror the Contentful content model documented in
// CONTENT_MODEL.md so that swapping src/lib/cms/* from local data to the
// Contentful Delivery API later requires no changes in consuming components.

export type ProductMeasurement = {
  label: string;
  value: string;
};

export type ProductFeature = {
  title: string;
  description: string;
  icon: IconName;
};

export type SpecRow = {
  label: string;
  value: string;
};

export type GalleryItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  videoThumbnail?: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: { src: string; alt: string };
  cardImage: { src: string; alt: string };
  measurements: ProductMeasurement[];
  features: ProductFeature[];
  aboutBody: string[];
  specifications: SpecRow[];
  gallery: GalleryItem[];
  quote?: { text: string; attribution: string };
};

export type DownloadType = "manual" | "firmware" | "guide";

export type Download = {
  id: string;
  title: string;
  description: string;
  product: "motolyser" | "magnalyser" | null;
  type: DownloadType;
  version?: string;
  fileSize?: string;
  file: string;
  releaseDate: string;
};

export type NewsCategory = "products" | "firmware" | "racing" | "guides";

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  date: string;
  category: NewsCategory;
  featuredImage: { src: string; alt: string };
  products?: Array<"motolyser" | "magnalyser">;
};

export type Distributor = {
  id: string;
  region: "Europe" | "North America" | "Japan" | "Asia";
  country: string;
  company: string;
  address: string;
  contactEmail?: string;
  phone?: string;
  website?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: "purchase" | "technical" | "support";
  title: string;
  items: FaqItem[];
};

export type IconName =
  | "sensor"
  | "speed"
  | "download"
  | "location"
  | "support"
  | "measurement"
  | "motor"
  | "firmware"
  | "flag"
  | "display"
  | "current";
