import { PRODUCT_TABS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";

export function ProductTabs() {
  return (
    <div className="sticky top-16 z-30 border-b border-border bg-bg/95 backdrop-blur-sm">
      <Container>
        <nav aria-label="Product sections" className="flex gap-6 overflow-x-auto py-3">
          {PRODUCT_TABS.map((tab) => (
            <MonoLabel
              key={tab.hash}
              as="a"
              href={`#${tab.hash}`}
              className="whitespace-nowrap transition-colors hover:text-cyan"
            >
              {tab.label}
            </MonoLabel>
          ))}
        </nav>
      </Container>
    </div>
  );
}
