// @vitest-environment node
import { afterAll, beforeAll, expect, it } from "vitest";
import { build, createServer, preview } from "vite";
import { siteRoutes } from "../build/siteRoutes";

let dev: Awaited<ReturnType<typeof createServer>>;
let built: Awaited<ReturnType<typeof preview>>;
let devUrl: string;
let previewUrl: string;

beforeAll(async () => {
  await build({ logLevel: "silent" });
  dev = await createServer({
    configFile: false,
    optimizeDeps: { noDiscovery: true, include: [] },
    plugins: [siteRoutes()],
    server: { port: 0, host: "127.0.0.1" },
  });
  await dev.listen();
  devUrl = dev.resolvedUrls!.local[0];
  built = await preview({
    configFile: false,
    plugins: [siteRoutes()],
    preview: { port: 0, host: "127.0.0.1" },
  });
  previewUrl = built.resolvedUrls!.local[0];
}, 20000);
afterAll(async () => {
  for (const server of [dev?.httpServer, built?.httpServer]) {
    if (server && "closeAllConnections" in server) server.closeAllConnections();
  }
  await dev?.close();
  await new Promise<void>((resolve) =>
    built?.httpServer.close(() => resolve()),
  );
}, 20000);

it.each([
  "random",
  "products/unknown",
  "products",
  "brand",
  "missing.js",
  "about/extra",
])("returns a real 404 for %s in dev and preview", async (path) => {
  for (const base of [devUrl, previewUrl]) {
    const response = await fetch(base + path);
    expect(response.status).toBe(404);
    expect(await response.text()).toContain("Page not found.");
  }
});
it.each([
  "",
  "pricing",
  "pricing/",
  "demo?product=cds",
  "products/ehr",
  "brand/riq-logo-dark.png",
])("serves the known route or asset %s in dev and preview", async (path) => {
  for (const base of [devUrl, previewUrl])
    expect((await fetch(base + path)).status).toBe(200);
});
