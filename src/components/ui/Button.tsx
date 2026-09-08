import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cx } from "@/lib/utils";

type Variant = "primary" | "secondary" | "download";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-(--transition-base,180ms) min-h-11";

const variants: Record<Variant, string> = {
  primary: "bg-green text-bg hover:bg-green/90",
  secondary: "border border-border text-text hover:border-cyan hover:text-cyan",
  download: "border border-cyan/40 text-cyan hover:bg-cyan/10",
};

type LinkButtonProps = {
  variant?: Variant;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type NativeButtonProps = {
  variant?: Variant;
  href?: undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({ variant = "primary", className, children, ...rest }: ButtonProps) {
  const classes = cx(base, variants[variant], className);

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as Omit<LinkButtonProps, "variant" | "className" | "children">;
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorRest}
      >
        {children}
      </Link>
    );
  }

  const buttonRest = rest as Omit<NativeButtonProps, "variant" | "href" | "className" | "children">;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
