import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TechPlaceholder } from "@/components/ui/TechPlaceholder";
import { LcdPanel } from "@/components/ui/LcdPanel";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FeatureList } from "@/components/product/FeatureList";
import { SpecTable } from "@/components/product/SpecTable";
import { Gallery } from "@/components/product/Gallery";
import { ProductTabs } from "@/components/product/ProductTabs";
import { DownloadList } from "@/components/downloads/DownloadList";
import { NewsGrid } from "@/components/news/NewsGrid";
import { listProducts, getProduct } from "@/lib/cms/products";
import { listDownloadsForProduct } from "@/lib/cms/downloads";
import { listNewsArticlesForProduct } from "@/lib/cms/news";

export async function generateStaticParams() {
  const products = await listProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = await getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const [downloads, relatedNews] = await Promise.all([
    listDownloadsForProduct(product.slug as "motolyser" | "magnalyser"),
    listNewsArticlesForProduct(product.slug as "motolyser" | "magnalyser"),
  ]);
  const manual = downloads.find((d) => d.type === "manual");

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <Container className="py-8">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />
        </Container>
        <Container className="grid grid-cols-1 items-center gap-10 pb-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-sans text-5xl font-extrabold tracking-tight text-text sm:text-6xl">
              {product.name}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-text-muted sm:text-lg">
              {product.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/distributors" variant="primary">
                Find a distributor →
              </Button>
              {manual && (
                <Button href={manual.file} download variant="secondary">
                  Download manual ↓
                </Button>
              )}
            </div>
          </div>
          <div className="relative">
            <TechPlaceholder label={`${product.name.toUpperCase()} — PRODUCT PHOTO`} className="aspect-4/3" />
            <LcdPanel
              className="absolute -bottom-6 left-6 w-56 sm:w-64"
              title="Motor Analysis"
              rows={product.measurements}
            />
          </div>
        </Container>
      </section>

      <ProductTabs />

      {/* Overview: features + about */}
      <section id="overview" className="scroll-mt-32 border-b border-border py-16 md:py-20">
        <Container>
          <h2 className="font-sans text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Key features
          </h2>
          <FeatureList features={product.features} className="mt-8" />
        </Container>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-text sm:text-3xl">
              About {product.name}
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {product.aboutBody.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-text-muted sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          {product.quote && (
            <blockquote className="border-l-2 border-cyan pl-6">
              <p className="font-sans text-lg italic leading-relaxed text-text">
                &ldquo;{product.quote.text}&rdquo;
              </p>
              <footer className="mt-3 text-sm text-text-muted">— {product.quote.attribution}</footer>
            </blockquote>
          )}
        </Container>
      </section>

      {/* Specifications */}
      <section id="specifications" className="scroll-mt-32 border-b border-border py-16 md:py-20">
        <Container>
          <h2 className="font-sans text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Specifications
          </h2>
          <p className="mt-2 max-w-xl text-sm text-text-muted">
            Values below are starting figures from the product brief and should be verified
            against production documentation.
          </p>
          <SpecTable rows={product.specifications} className="mt-8" />
        </Container>
      </section>

      {/* Gallery */}
      <section className="border-b border-border py-16 md:py-20">
        <Container>
          <h2 className="font-sans text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Gallery
          </h2>
          <Gallery items={product.gallery} className="mt-8" />
        </Container>
      </section>

      {/* Downloads */}
      <section id="downloads" className="scroll-mt-32 border-b border-border py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Downloads
            </h2>
            <Button href="/downloads" variant="secondary">
              All downloads →
            </Button>
          </div>
          <div className="mt-8">
            <DownloadList downloads={downloads} />
          </div>
        </Container>
      </section>

      {/* Related news */}
      {relatedNews.length > 0 && (
        <section id="news" className="scroll-mt-32 border-b border-border py-16 md:py-20">
          <Container>
            <h2 className="font-sans text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Related news
            </h2>
            <NewsGrid articles={relatedNews} className="mt-8" />
          </Container>
        </section>
      )}

      {/* Support / Final CTA */}
      <section id="support" className="scroll-mt-32 py-16 md:py-20">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl font-sans text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Ready to get the most out of your motors?
          </h2>
          <p className="mt-3 text-text-muted">
            Find a distributor in your region or get in touch if you have questions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/distributors" variant="primary">
              Find a distributor →
            </Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
