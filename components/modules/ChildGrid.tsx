import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export type GridItem = { href: string; label: string; description?: string };

type Props = {
  items: GridItem[];
  icon?: LucideIcon;
  columns?: 2 | 3 | 4;
};

/** M6 Silo child-page grid: hubs must link to every spoke */
export function ChildGrid({ items, icon: Icon, columns = 3 }: Props) {
  return (
    <ul className={`grid grid--${columns}`} role="list">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="card">
            {Icon && (
              <span className="card__icon">
                <Icon aria-hidden="true" />
              </span>
            )}
            <h3 className="card__title text-h3">{item.label}</h3>
            {item.description && <p className="card__text">{item.description}</p>}
            <span className="card__more text-body-small-semibold">
              Read guide <ArrowRight aria-hidden="true" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
