import { useEffect } from 'react';
interface PageMetaProps {
  title: string;
  description: string;
  path: string; // e.g. "/manutencao-eletrica-industrial-campinas"
  schema?: object | object[]; // JSON-LD schema markup (Service, FAQPage, etc.)
}
/**
 * Sets per-page <title> and meta description/canonical.
 * Use this inside every page component (Home included) so each
 * URL has its own unique title/description for Google — critical
 * for a multi-page SEO strategy instead of one page trying to rank
 * for every keyword at once.
 *
 * Optionally accepts a `schema` prop with JSON-LD structured data
 * (e.g. Service, FAQPage) specific to that page. This is injected as
 * a <script type="application/ld+json"> and replaced on navigation.
 */
export default function PageMeta({ title, description, path, schema }: PageMetaProps) {
  useEffect(() => {
    const fullUrl = `https://www.soltecnicas.com.br${path}`;
    document.title = title;
    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', fullUrl, 'property');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Schema markup (JSON-LD) específico da página
    const scriptId = 'page-schema-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (schema) {
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else if (script) {
      // Se a página não passar schema, remove o de uma página anterior
      script.remove();
    }
  }, [title, description, path, schema]);
  return null;
}
