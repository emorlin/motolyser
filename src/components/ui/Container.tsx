import { cx } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-(--container-page) px-6 md:px-10", className)}>
      {children}
    </div>
  );
}
