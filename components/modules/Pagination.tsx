import Link from "next/link";

/** Crawlable numbered pagination. Page 1 lives at `basePath`, page n at `${basePath}page/n/`. */
export function Pagination({ basePath, current, total }: { basePath: string; current: number; total: number }) {
  if (total <= 1) return null;
  const href = (n: number) => (n === 1 ? basePath : `${basePath}page/${n}/`);
  return (
    <nav className="pagination" aria-label="Pagination">
      {current > 1 && (
        <Link href={href(current - 1)} rel="prev">
          Previous
        </Link>
      )}
      {Array.from({ length: total }, (_, i) => i + 1).map((n) =>
        n === current ? (
          <span key={n} aria-current="page">
            {n}
          </span>
        ) : (
          <Link key={n} href={href(n)}>
            {n}
          </Link>
        ),
      )}
      {current < total && (
        <Link href={href(current + 1)} rel="next">
          Next
        </Link>
      )}
    </nav>
  );
}
