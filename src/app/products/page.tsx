import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { ProductGrid } from "@/components/product/ProductGrid";
import { listProducts } from "@/lib/cms/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Precision measurement tools for sensor-equipped brushless motors: Motolyser and Magnalyser.",
};

export default async function ProductsPage() {
  const products = await listProducts();

  return (
    <Container className="py-16 md:py-20">
      <Kicker>Product line</Kicker>
      <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
        Precision tools for serious racers.
      </h1>
      <p className="mt-4 max-w-xl text-text-muted">
        Motolyser and Magnalyser give racers and hobbyists precise insight into the performance
        of their sensor-equipped brushless motors.
      </p>
      <ProductGrid products={products} className="mt-12" />
    </Container>
  );
}
