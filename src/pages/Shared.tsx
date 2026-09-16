import type { ReactNode } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export function PageIntro({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="page-intro">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}

export function PageLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <a
      className={`button ${light ? "button-mint" : "button-dark"}`}
      href={href}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

export function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="page-features">
      {items.map((item) => (
        <li key={item}>
          <Check size={19} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
