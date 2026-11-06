// SEO + AI-crawler helpers. Pure JS (no JSX) so vite.config.js can import it
// to generate sitemap.xml, llms.txt, llms-full.txt and the static JSON-LD.
import { App, progressOf } from "./AppConfig.js";

export const SITE_URL = "https://octax.dev";
export { App };

const KIND_CATEGORY = {
  platform: "BusinessApplication",
  mobile: "MobileApplication",
  webapp: "BusinessApplication",
  website: "WebApplication",
  library: "DeveloperApplication",
  community: "DeveloperApplication",
};

const imageOf = (p) =>
  p.gallery?.length
    ? p.gallery.map((g) => `${SITE_URL}/static/images/work/${g.src}`)
    : p.screenshots
    ? `${SITE_URL}/static/images/work/apps/${p.id}/screenshot_1_light.webp`
    : p.image
      ? `${SITE_URL}/static/images/work/${p.image}`
      : undefined;

export function organizationLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: App.About.Name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo512.png`,
    description: App.About.Blurb,
    founder: { "@id": `${SITE_URL}/#founder` },
    sameAs: [App.Github, App.Twitter],
    areaServed: "Worldwide",
    address: { "@type": "PostalAddress", addressCountry: "AE" },
  };
}

export function founderLd() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: App.Founder.Name,
    jobTitle: App.Founder.Role,
    description: App.Founder.Bio,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/experience`,
    sameAs: [App.Twitter],
  };
}

export function websiteLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Octax",
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };
}

// schema.org SoftwareApplication for one catalog entry.
export function projectLd(p) {
  const l = p.links || {};
  const ld = {
    "@type": p.kind === "website" ? "WebSite" : "SoftwareApplication",
    "@id": `${SITE_URL}/work/${p.id}#app`,
    name: p.name,
    description: p.desc,
    url: l.demo?.href || l.site?.href || l.appStore || `${SITE_URL}/work/${p.id}`,
    image: imageOf(p),
    keywords: (p.tags || []).join(", "),
    creator: { "@id": `${SITE_URL}/#organization` },
  };
  if (ld["@type"] === "SoftwareApplication") {
    ld.applicationCategory = KIND_CATEGORY[p.kind];
    ld.operatingSystem =
      p.kind === "mobile" ? [l.appStore && "iOS", l.playStore && "Android"].filter(Boolean).join(", ") || "iOS, Android" : "Web";
    if (l.appStore) ld.installUrl = l.appStore;
    if (p.status === "live" && (l.demo || p.openSource === "public"))
      ld.offers = { "@type": "Offer", price: "0", priceCurrency: "USD" };
    const repos = [l.repo, l.repoIos?.href].filter(Boolean);
    if (repos.length) ld.codeRepository = repos.length === 1 ? repos[0] : repos;
    if (p.screenshots)
      ld.screenshot = Array.from({ length: p.screenshots }, (_, i) =>
        `${SITE_URL}/static/images/work/apps/${p.id}/screenshot_${i + 1}_light.webp`);
    else if (p.gallery?.length)
      ld.screenshot = p.gallery.map((g) => `${SITE_URL}/static/images/work/${g.src}`);
  }
  return ld;
}

export function graph(...nodes) {
  return { "@context": "https://schema.org", "@graph": nodes.flat() };
}

export function siteGraph() {
  return graph(organizationLd(), founderLd(), websiteLd());
}

// ---------------------------------------------------------------------------
//  Route list for sitemap.xml
// ---------------------------------------------------------------------------
export function routes() {
  return [
    { path: "/", priority: "1.0" },
    { path: "/work", priority: "0.9" },
    { path: "/lab", priority: "0.9" },
    { path: "/studio", priority: "0.7" },
    { path: "/skills-tools", priority: "0.5" },
    { path: "/experience", priority: "0.6" },
    ...App.Catalog.map((p) => ({ path: `/work/${p.id}`, priority: p.kind === "platform" ? "0.8" : "0.6" })),
  ];
}

export function sitemapXml() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes()
    .map(
      (r) =>
        `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r.priority}</priority>\n  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

// ---------------------------------------------------------------------------
//  llms.txt (https://llmstxt.org) — a Markdown map of the site for AI agents
// ---------------------------------------------------------------------------
function linkList(p) {
  const l = p.links || {};
  return [
    l.demo && `[${l.demo.label}](${l.demo.href})`,
    l.site && `[${l.site.label}](${l.site.href})`,
    l.admin && `[${l.admin.label}](${l.admin.href})`,
    l.appStore && `[App Store](${l.appStore})`,
    l.playStore && `[Google Play](${l.playStore})`,
    l.npm && `[npm](${l.npm})`,
    l.repo && `[${l.repoIos ? "Web source code" : "Source code"}](${l.repo})`,
    l.repoIos && `[iOS source code](${l.repoIos.href})`,
  ].filter(Boolean);
}

const statusText = (p) => {
  const s = App.Status[p.status]?.label;
  const os = p.openSource ? App.OpenSource[p.openSource]?.label : null;
  return [s, os].filter(Boolean).join(", ");
};

export function llmsTxt() {
  const groups = [
    ["Products", ["platform"]],
    ["Mobile apps", ["mobile"]],
    ["Web apps and websites", ["webapp", "website"]],
    ["Libraries and community projects", ["library", "community"]],
  ];
  const sections = groups
    .map(([title, kinds]) => {
      const items = App.Catalog.filter((p) => kinds.includes(p.kind))
        .map((p) => `- [${p.name}](${SITE_URL}/work/${p.id}): ${p.tagline} (${statusText(p)})`)
        .join("\n");
      return `## ${title}\n\n${items}`;
    })
    .join("\n\n");

  return `# Octax

> ${App.About.Blurb} Founded and led by ${App.Founder.Name}, based in the UAE.

Octax builds its own products (OneERP, Octax Solobill, Open Pass), ships mobile apps and web platforms for clients, and publishes open-source tools under https://github.com/octax-app.

${sections}

## Pages

- [Home](${SITE_URL}/): overview of Octax, featured work and what is being built
- [Work](${SITE_URL}/work): the full catalog of products and client work
- [Lab](${SITE_URL}/lab): live progress, demos and open-source status
- [Services](${SITE_URL}/studio): what Octax offers and how it works
- [Stack](${SITE_URL}/skills-tools): languages, frameworks and tools
- [About](${SITE_URL}/experience): the founder, ${App.Founder.Name}, and his timeline

## Optional

- [Full content for LLMs](${SITE_URL}/llms-full.txt): every project with descriptions, stack, links and roadmap
- [Sitemap](${SITE_URL}/sitemap.xml)
`;
}

export function llmsFullTxt() {
  const projects = App.Catalog.map((p) => {
    const links = linkList(p);
    const progress = progressOf(p);
    const roadmap = (p.milestones || [])
      .map((m) => `  - [${m.state === "done" ? "x" : " "}] ${m.title}${m.note ? ` (${m.note})` : ""}${m.state === "active" ? " (in progress)" : ""}`)
      .join("\n");
    return [
      `## ${p.name}`,
      ``,
      `- Page: ${SITE_URL}/work/${p.id}`,
      `- Type: ${p.kind}`,
      `- Status: ${statusText(p)}`,
      `- Stack: ${(p.tags || []).join(", ")}`,
      links.length ? `- Links: ${links.join(" · ")}` : null,
      progress !== null ? `- Roadmap progress: ${progress}%` : null,
      ``,
      p.desc,
      roadmap ? `\nRoadmap:\n${roadmap}` : null,
    ]
      .filter((x) => x !== null)
      .join("\n");
  }).join("\n\n");

  const services = App.Studio.Services.map((s) => `- **${s.title}**: ${s.desc}`).join("\n");
  const timeline = App.Experience.Timeline.map(
    (t) => `- **${t.role}, ${t.company}** (${t.period}): ${t.summary}`,
  ).join("\n");

  return `# Octax: full content

> ${App.About.Blurb}

Website: ${SITE_URL} · GitHub: ${App.Github} · Contact: https://wa.me/${App.Contact.WhatsApp}

# Services

${services}

# Founder

${App.Founder.Name}, ${App.Founder.Role}. ${App.Founder.Bio}

${timeline}

# Projects

${projects}
`;
}
