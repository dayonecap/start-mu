import type { Fact } from "@/content/types";

export function FactTable({ facts, caption }: { facts: Fact[]; caption: string }) {
  return (
    <table className="facts">
      <caption className="sr-only">{caption}</caption>
      <tbody>
        {facts.map((f) => (
          <tr key={f.label}>
            <th scope="row">{f.label}</th>
            <td>{f.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
