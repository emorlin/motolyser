"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

type Item = { label: string; href: string };

export function ProductsDropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: readonly Item[];
}) {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);

  const show = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && open) {
      setOpen(false);
      triggerRef.current?.focus();
    }
  };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide} onKeyDown={handleKeyDown}>
      <Link
        ref={triggerRef}
        href={href}
        className="flex items-center gap-1 text-sm font-medium text-text-muted transition-colors hover:text-text"
        aria-expanded={open}
        aria-haspopup="true"
        onFocus={show}
        onBlur={hide}
      >
        {label}
        <ChevronDown size={14} strokeWidth={1.5} aria-hidden="true" />
      </Link>

      {open && (
        <div
          className="absolute left-0 top-full w-56 border border-border bg-surface-elevated py-2 shadow-lg"
          onFocus={show}
          onBlur={hide}
        >
          <p className="px-4 pb-2 pt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
            Products
          </p>
          <div className="mx-4 mb-2 border-t border-border" />
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-text transition-colors hover:text-cyan"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={href}
            className="mt-1 block px-4 py-2 text-sm font-medium text-green transition-colors hover:text-green/80"
          >
            View all products →
          </Link>
        </div>
      )}
    </div>
  );
}
