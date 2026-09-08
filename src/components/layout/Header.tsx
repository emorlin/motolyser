"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { PRIMARY_NAV, SITE_NAME } from "@/lib/constants";
import { cx } from "@/lib/utils";
import { ProductsDropdown } from "./ProductsDropdown";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b transition-colors duration-(--transition-base,180ms)",
        scrolled ? "border-border bg-bg/90 backdrop-blur-sm" : "border-transparent bg-bg/60 backdrop-blur-sm"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-sans text-lg font-extrabold tracking-tight text-text"
        >
          {SITE_NAME.toUpperCase()}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {PRIMARY_NAV.map((item) =>
            "dropdown" in item ? (
              <ProductsDropdown key={item.href} label={item.label} href={item.href} items={item.dropdown} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-muted transition-colors hover:text-text"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}
