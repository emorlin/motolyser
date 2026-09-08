import type { Distributor } from "@/lib/types";
import { cx } from "@/lib/utils";

export function DistributorList({
  byRegion,
  className,
}: {
  byRegion: Record<string, Distributor[]>;
  className?: string;
}) {
  const regions = Object.keys(byRegion);

  return (
    <div className={cx("flex flex-col gap-14", className)}>
      {regions.map((region) => {
        const distributors = byRegion[region];
        const byCountry = distributors.reduce<Record<string, Distributor[]>>((acc, d) => {
          (acc[d.country] ??= []).push(d);
          return acc;
        }, {});

        return (
          <div key={region} id={region.toLowerCase().replace(/\s+/g, "-")}>
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-cyan">{region}</h2>
            <div className="mt-6 flex flex-col gap-8">
              {Object.entries(byCountry).map(([country, companies]) => (
                <div key={country} className="border-t border-border pt-4">
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wide text-text">
                    {country}
                  </h3>
                  <div className="mt-4 flex flex-col gap-6">
                    {companies.map((d) => (
                      <div key={d.id} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                        <div>
                          <p className="font-sans text-base font-semibold text-text">{d.company}</p>
                          <p className="text-sm text-text-muted">{d.address}</p>
                        </div>
                        <div className="flex gap-6">
                          {d.website && (
                            <a
                              href={d.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-green hover:text-green/80"
                            >
                              Website →<span className="sr-only"> (opens in new tab)</span>
                            </a>
                          )}
                          {d.contactEmail && (
                            <a
                              href={`mailto:${d.contactEmail}`}
                              className="text-sm font-medium text-cyan hover:text-cyan/80"
                            >
                              Contact →
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
