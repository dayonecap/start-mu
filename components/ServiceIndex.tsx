import Link from "@/components/Link";
import type { ServiceEntry } from "@/content/types";

export function ServiceIndex({
  entries,
  base,
  columns,
  routeLabel = "Route",
}: {
  entries: ServiceEntry[];
  base: string;
  columns: [string, string, string];
  routeLabel?: string;
}) {
  const rows = entries.filter((e) => e.index);
  return (
    <>
      {/* Tablet and up: table */}
      <table className="routes hidden md:table">
        <thead>
          <tr>
            <th scope="col">{routeLabel}</th>
            <th scope="col">{columns[0]}</th>
            <th scope="col">{columns[1]}</th>
            <th scope="col">{columns[2]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((e) => (
            <tr key={e.slug}>
              <td>
                <Link href={`${base}/${e.slug}`} className="link-rule text-ink">
                  {e.title}
                </Link>
              </td>
              <td className="text-slate">{e.index!.audience}</td>
              <td>{e.index!.threshold}</td>
              <td className="text-slate">{e.index!.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Phones: stacked */}
      <ul className="divide-y divide-stone border-y border-stone md:hidden">
        {rows.map((e) => (
          <li key={e.slug} className="py-5">
            <Link href={`${base}/${e.slug}`} className="t-h3 link-rule">
              {e.title}
            </Link>
            <dl className="t-ui mt-3 grid grid-cols-[7rem_1fr] gap-x-4 gap-y-1">
              <dt className="text-slate">{columns[0]}</dt>
              <dd>{e.index!.audience}</dd>
              <dt className="text-slate">{columns[1]}</dt>
              <dd>{e.index!.threshold}</dd>
              <dt className="text-slate">{columns[2]}</dt>
              <dd>{e.index!.duration}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
