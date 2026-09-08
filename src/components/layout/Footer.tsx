import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { COMPANY_NAME, FOOTER_LINKS, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-sans text-lg font-extrabold tracking-tight text-text">
            {SITE_NAME.toUpperCase()}
          </p>
          <p className="mt-1 text-sm text-text-muted">A brand/product line by {COMPANY_NAME}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {FOOTER_LINKS.map((link) =>
            "external" in link && link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted transition-colors hover:text-text"
              >
                {link.label}
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </Container>
      <Container className="border-t border-border py-6">
        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
