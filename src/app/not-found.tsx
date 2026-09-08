import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LcdPanel } from "@/components/ui/LcdPanel";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <LcdPanel
        className="w-64"
        title="System"
        rows={[{ label: "ROUTE", value: "404" }]}
        status="NOT FOUND"
      />
      <h1 className="mt-8 font-sans text-3xl font-extrabold tracking-tight text-text">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary">
          Back to homepage →
        </Button>
      </div>
    </Container>
  );
}
