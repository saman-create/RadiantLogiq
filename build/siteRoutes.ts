import { readFileSync, existsSync, statSync } from "node:fs";
import { resolve, sep } from "node:path";
import type { Plugin, Connect } from "vite";
import { isKnownRoute, routeTitles } from "../src/routes.ts";

// Explicit routes in development, preview, and the portable static build.
export function siteRoutes(): Plugin {
  let root = "";
  const middleware =
    (preview: boolean): Connect.NextHandleFunction =>
    (req, res, next) => {
      if (req.method !== "GET" && req.method !== "HEAD") return next();
      let path: string;
      try {
        path = decodeURIComponent(
          new URL(req.url || "/", "http://localhost").pathname,
        );
      } catch {
        res.statusCode = 400;
        res.end("Invalid URL");
        return;
      }
      if (isKnownRoute(path)) return next();
      if (
        !preview &&
        ["/src/", "/@", "/node_modules/"].some((prefix) =>
          path.startsWith(prefix),
        )
      )
        return next();
      const base = resolve(root, preview ? "dist" : "public");
      const asset = resolve(base, "." + path);
      if (
        asset.startsWith(base + sep) &&
        existsSync(asset) &&
        statSync(asset).isFile()
      )
        return next();
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache");
      res.end(
        req.method === "HEAD"
          ? undefined
          : readFileSync(resolve(base, "404.html")),
      );
    };
  return {
    name: "radiantlogiq-explicit-routes",
    configResolved(config) {
      root = config.root;
    },
    configureServer(server) {
      server.middlewares.use(middleware(false));
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware(true));
    },
    generateBundle: {
      order: "post",
      handler(_, bundle) {
        const index = bundle["index.html"];
        if (!index || index.type !== "asset")
          throw new Error("Missing built index.html");
        for (const [path, title] of Object.entries(routeTitles)) {
          if (path === "/") continue;
          this.emitFile({
            type: "asset",
            fileName: `${path.slice(1)}/index.html`,
            source: String(index.source).replace(
              /<title>.*?<\/title>/,
              `<title>${title} — RadiantLogiq</title>`,
            ),
          });
        }
      },
    },
  };
}
