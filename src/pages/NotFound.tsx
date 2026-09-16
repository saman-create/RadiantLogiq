import { PageLink } from "./Shared";

export function NotFound() {
  return (
    <main className="not-found">
      <a href="/" aria-label="RadiantLogiq home">
        <img src="/brand/riq-logo-dark.png" alt="RadiantLogiq" />
      </a>
      <div>
        <p className="not-found-code">404</p>
        <h1>Page not found.</h1>
        <p>
          The page you're looking for doesn't exist or has moved. Let's get you
          back to RadiantLogiq.
        </p>
        <PageLink href="/">Back to homepage</PageLink>
      </div>
    </main>
  );
}
