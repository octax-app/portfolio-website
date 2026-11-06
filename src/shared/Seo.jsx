import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { SITE_URL } from "../config/seo";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Per-route <title>, description, canonical, Open Graph and optional JSON-LD.
// index.html ships sensible defaults for crawlers that don't run JavaScript.
function Seo({ title, description, image, jsonLd }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} · Octax` : "Octax · Product studio for mobile apps, web platforms & open source";
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    const img = image ? `${SITE_URL}${image}` : `${SITE_URL}/og.png`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setCanonical(url);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);

    let script;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.route = "true";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => script?.remove();
  }, [title, description, image, jsonLd, pathname]);

  return null;
}

export default Seo;
