import type { ComparisonTableData } from "@/lib/content/types";

/** M10 Comparison table. First column of each row is a row header. Scrolls horizontally on small screens. */
export function ComparisonTable({ caption, head, rows }: ComparisonTableData) {
  return (
    <div className="table-wrap" role="region" aria-label={caption ?? "Comparison table"} tabIndex={0}>
      <table className="table">
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) =>
                c === 0 ? (
                  <th key={c} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={c}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
