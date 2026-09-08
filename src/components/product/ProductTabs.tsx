import { PRODUCT_TABS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function ProductTabs() {
  return (
    <div className="sticky top-16 z-30 border-b border-border bg-bg/95 backdrop-blur-sm">
      <Container>
        <nav aria-label="Product sections" className="flex gap-6 overflow-x-auto py-3">
          {PRODUCT_TABS.map((tab) => (
            <a
              key={tab.hash}
              href={`#${tab.hash}`}
              className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.15em] text-text-muted transition-colors hover:text-cyan"
            >
              {tab.label}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
}
