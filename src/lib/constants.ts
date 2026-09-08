export const SITE_NAME = "Motolyser";
export const SITE_URL = "https://motolyser.com";
export const SITE_DESCRIPTION =
  "Precision measurement for sensor-equipped brushless motors. Timing advance, Hall sensor accuracy, RPM, K/V and current draw.";

export const COMPANY_NAME = "Sepro AB";

export const FEEDBACK_URL = "https://forms.gle/motolyser-feedback";

export const PRIMARY_NAV = [
  {
    label: "Products",
    href: "/products",
    dropdown: [
      { label: "Motolyser", href: "/products/motolyser" },
      { label: "Magnalyser", href: "/products/magnalyser" },
    ],
  },
  { label: "Downloads", href: "/downloads" },
  { label: "Distributors", href: "/distributors" },
  { label: "News", href: "/news" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Data Use Policy", href: "/legal/data-policy" },
  { label: "Cookie Use", href: "/legal/cookies" },
  { label: "Feedback", href: FEEDBACK_URL, external: true },
] as const;

export const PRODUCT_TABS = [
  { label: "Overview", hash: "overview" },
  { label: "Specifications", hash: "specifications" },
  { label: "Downloads", hash: "downloads" },
  { label: "News", hash: "news" },
  { label: "Support", hash: "support" },
] as const;
