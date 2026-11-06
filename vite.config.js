import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { pathToFileURL } from "node:url";

const SEO_MODULE = "/src/config/seo.js";

const escape = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Static, JS-free summary placed inside #root. Crawlers and AI bots that don't
// execute JavaScript read this; React replaces it on first render.
function staticHtml(m) {
  const { App } = m;
  const items = App.Catalog.map(
    (p) =>
      `<li><a href="${m.SITE_URL}/work/${p.id}">${escape(p.name)}</a>: ${escape(p.tagline)}</li>`,
  ).join("");
  const nav = App.NavLinks.map((l) => `<a href="${l.Path}">${escape(l.Title)}</a>`).join(" · ");
  return `<div class="seo-static" style="max-width:860px;margin:40px auto;padding:0 16px;font-family:system-ui">
  <h1>Octax: ${escape(App.Studio.Tagline)}</h1>
  <p>${escape(App.About.Blurb)} Founded by ${escape(App.Founder.Name)}, ${escape(App.Founder.Role.toLowerCase())}.</p>
  <nav>${nav}</nav>
  <h2>Products and projects</h2>
  <ul>${items}</ul>
  <p><a href="/llms.txt">llms.txt</a> · <a href="/sitemap.xml">sitemap</a></p>
</div>`;
}

const FILES = {
  "/sitemap.xml": ["sitemapXml", "application/xml; charset=utf-8"],
  "/llms.txt": ["llmsTxt", "text/plain; charset=utf-8"],
  "/llms-full.txt": ["llmsFullTxt", "text/plain; charset=utf-8"],
};

// Generates sitemap.xml, llms.txt and llms-full.txt from AppConfig, and injects
// JSON-LD + the static summary into index.html — in dev and in the build.
function octaxSeo() {
  let devServer;
  let root = process.cwd();
  const load = async () =>
    devServer
      ? devServer.ssrLoadModule(SEO_MODULE)
      : import(`${pathToFileURL(path.join(root, SEO_MODULE)).href}?t=${Date.now()}`);

  return {
    name: "octax-seo",
    configResolved(config) {
      root = config.root;
    },
    configureServer(server) {
      devServer = server;
      server.middlewares.use(async (req, res, next) => {
        const file = FILES[(req.url || "").split("?")[0]];
        if (!file) return next();
        const m = await load();
        res.setHeader("Content-Type", file[1]);
        res.end(m[file[0]]());
      });
    },
    async transformIndexHtml(html) {
      const m = await load();
      const ld = m.graph(
        m.organizationLd(),
        m.founderLd(),
        m.websiteLd(),
        m.App.Catalog.filter((p) => p.status !== "private").map(m.projectLd),
      );
      return html
        .replace("<!--app-jsonld-->", `<script type="application/ld+json">${JSON.stringify(ld)}</script>`)
        .replace("<!--app-static-->", staticHtml(m));
    },
    async generateBundle() {
      const m = await load();
      for (const [path, [fn]] of Object.entries(FILES)) {
        this.emitFile({ type: "asset", fileName: path.slice(1), source: m[fn]() });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), octaxSeo()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "build",
  },
  // Workaround for a Vite 8 dev-server bug where these internal client
  // constants are served unreplaced, causing a browser ReferenceError.
  // See https://github.com/vitejs/vite/issues/22419
  define: {
    __BUNDLED_DEV__: "false",
    __SERVER_FORWARD_CONSOLE__: "false",
  },
});
