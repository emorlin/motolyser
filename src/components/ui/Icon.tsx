import {
  Crosshair,
  Gauge,
  Download,
  MapPin,
  LifeBuoy,
  Ruler,
  Cog,
  Cpu,
  Flag,
  Monitor,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/lib/types";
import type { SVGProps } from "react";

const icons: Record<IconName, LucideIcon> = {
  sensor: Crosshair,
  speed: Gauge,
  download: Download,
  location: MapPin,
  support: LifeBuoy,
  measurement: Ruler,
  motor: Cog,
  firmware: Cpu,
  flag: Flag,
  display: Monitor,
  current: Zap,
};

export function Icon({
  name,
  className,
  ...rest
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  const LucideIconComponent = icons[name];
  return (
    <LucideIconComponent strokeWidth={1.5} className={className} aria-hidden="true" {...rest} />
  );
}
