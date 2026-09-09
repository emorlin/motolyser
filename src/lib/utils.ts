export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Shared look for the small bordered filter/jump-link pills (news
 * categories, distributor regions): mono uppercase label in a border box
 * that highlights cyan on hover, or permanently when `active`. */
export function filterPillClasses(active = false): string {
  return cx(
    "border px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-colors",
    active
      ? "border-cyan text-cyan"
      : "border-border-strong text-text-muted hover:border-cyan hover:text-cyan"
  );
}
