import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { DownloadList } from "@/components/downloads/DownloadList";
import { listProducts, getProduct } from "@/lib/cms/products";
import { listDownloadsForProduct } from "@/lib/cms/downloads";

export async function generateStaticParams() {
  const products = await listProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/products/[slug]/downloads">
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = await getProduct(slug);
  if (!product) return {};
  return { title: `${product.name} downloads` };
}

export default async function ProductDownloadsPage(props: PageProps<"/products/[slug]/downloads">) {
  const { slug } = await props.params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const downloads = await listDownloadsForProduct(product.slug as "motolyser" | "magnalyser");

  return (
    <Container className="py-16 md:py-20">
      <Breadcrumbs
        items={[
          { label: "Products", href: "/products" },
          { label: product.name, href: `/products/${product.slug}` },
          { label: "Downloads" },
        ]}
      />
      <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
        {product.name} downloads
      </h1>
      <p className="mt-3 text-text-muted">
        Manuals, firmware and guides for {product.name}.
      </p>
      <div className="mt-10">
        <DownloadList downloads={downloads} />
      </div>
    </Container>
  );
}
