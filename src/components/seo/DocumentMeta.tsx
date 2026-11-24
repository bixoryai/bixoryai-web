import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_META,
  GA_MEASUREMENT_ID,
  NOT_FOUND_META,
  OG_IMAGE,
  PAGE_META,
  SITE_ORIGIN,
  isAnalyticsConfigured,
} from "@/config/seo";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets a unique title, description, canonical, and absolute Open Graph / Twitter tags
 * for the current route. Unknown URLs are noindex.
 */
export default function DocumentMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
    const known = PAGE_META[path];
    const meta = known ?? NOT_FOUND_META;
    const indexable = Boolean(known && known.index !== false);
    const url = `${SITE_ORIGIN}${path === "/" ? "/" : path}`;

    document.title = meta.title || DEFAULT_META.title;
    upsertMeta("name", "description", meta.description || DEFAULT_META.description);
    upsertMeta("name", "robots", indexable ? "index,follow" : "noindex,follow");
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:image", OG_IMAGE);
    upsertMeta("property", "og:image:alt", "Bixory AI");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", OG_IMAGE);

    if (indexable) {
      upsertLink("canonical", url);
    } else {
      document.head.querySelector('link[rel="canonical"]')?.remove();
    }
  }, [pathname]);

  return null;
}

/** Loads GA4 only when GA_MEASUREMENT_ID is a real G- ID. Records no lead event by itself. */
export function Analytics() {
  useEffect(() => {
    if (!isAnalyticsConfigured()) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    const inline = document.createElement("script");
    inline.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`;
    document.head.appendChild(inline);

    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("[data-consultation-cta]") : null;
      if (!target) return;
      window.gtag?.("event", "consultation_cta_click", { link_url: target.getAttribute("href") || "" });
    };
    const onSubscribe = () => {
      window.gtag?.("event", "newsletter_subscribe");
    };

    document.addEventListener("click", onClick);
    window.addEventListener("bixory:newsletter-subscribed", onSubscribe);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("bixory:newsletter-subscribed", onSubscribe);
    };
  }, []);

  return null;
}
