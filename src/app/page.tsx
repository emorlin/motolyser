import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { TechPlaceholder } from "@/components/ui/TechPlaceholder";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductReadoutPhoto } from "@/components/product/ProductReadoutPhoto";
import { NewsGrid } from "@/components/news/NewsGrid";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { listProducts } from "@/lib/cms/products";
import { listNewsArticles } from "@/lib/cms/news";

const FEATURE_STRIP = [
  { icon: "sensor", label: "Sensor accuracy" },
  { icon: "flag", label: "Blinky Mode" },
  { icon: "speed", label: "RPM / K/V" },
  { icon: "current", label: "Current draw" },
] as const;

const WHY_POINTS = [
  {
    index: "01",
    title: "Sensor accuracy",
    description: "Measure Hall sensor timing independently on each phase.",
    icon: "sensor",
  },
  {
    index: "02",
    title: "Blinky Mode",
    description: "Know exactly what your motor is doing when timing matters.",
    icon: "flag",
  },
  {
    index: "03",
    title: "Complete motor data",
    description: "RPM · K/V · current · timing, all in one tool.",
    icon: "measurement",
  },
] as const;

export default async function HomePage() {
  const [products, news] = await Promise.all([listProducts(), listNewsArticles()]);
  const latestNews = news.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <Container className="grid grid-cols-1 items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <Kicker>Precision motor analysis</Kicker>
            <h1 className="mt-4 font-sans text-6xl font-extrabold leading-[0.95] tracking-tight text-text sm:text-7xl">
              MEASURE.
              <br />
              TUNE.
              <br />
              RACE.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-text-muted sm:text-lg">
              Precision measurement for sensor-equipped brushless motors.
            </p>
            <div className="mt-8">
              <Button href="/products" variant="primary">
                Explore products →
              </Button>
            </div>
          </div>

          <ProductReadoutPhoto
            label="MOTOLYSER — PRODUCT PHOTO"
            rows={[
              { label: "RPM", value: "41 952" },
              { label: "TIMING", value: "27.5°" },
              { label: "HALL A", value: "0.2°" },
            ]}
          />
        </Container>

        <Container className="flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-border py-6">
          {FEATURE_STRIP.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-text-muted">
              <Icon name={item.icon} className="h-4 w-4 text-cyan" />
              <MonoLabel>{item.label}</MonoLabel>
            </div>
          ))}
        </Container>
      </section>

      {/* Product grid */}
      <section className="border-b border-border py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Our products
              </h2>
              <p className="mt-2 text-text-muted">Precision tools for serious racers.</p>
            </div>
            <Button href="/products" variant="secondary">
              View all products →
            </Button>
          </div>
          <ProductGrid products={products} className="mt-10" />
        </Container>
      </section>

      {/* Why Motolyser */}
      <section className="border-b border-border py-20">
        <Container>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Why Motolyser?
          </h2>
          <p className="mt-2 text-text-muted">Because small differences matter.</p>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {WHY_POINTS.map((point) => (
              <div key={point.index} className="border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-text-muted">{point.index}</span>
                  <Icon name={point.icon} className="h-5 w-5 text-cyan" />
                </div>
                <h3 className="mt-4 font-sans text-lg font-bold tracking-tight text-text">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{point.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Latest news */}
      <section className="border-b border-border py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Latest news
            </h2>
            <Button href="/news" variant="secondary">
              View all →
            </Button>
          </div>
          <NewsGrid articles={latestNews} className="mt-10" />
        </Container>
      </section>

      {/* Distributor CTA */}
      <section className="border-b border-border py-20">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Find your distributor
            </h2>
            <p className="mt-4 max-w-md text-text-muted">
              Motolyser and Magnalyser are available through a global network of authorized
              dealers.
            </p>
            <div className="mt-8">
              <Button href="/distributors" variant="primary">
                Find a distributor →
              </Button>
            </div>
          </div>
          <TechPlaceholder label="DISTRIBUTOR NETWORK MAP" className="aspect-16/10" />
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <Container className="max-w-xl">
          <h2 className="font-sans text-2xl font-bold tracking-tight text-text">Stay updated</h2>
          <p className="mt-2 text-text-muted">
            Product news, firmware releases and racing insights.
          </p>
          <NewsletterForm className="mt-6" />
        </Container>
      </section>
    </>
  );
}
