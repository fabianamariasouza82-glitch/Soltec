import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  path: string; // e.g. "/manutencao-eletrica-industrial-campinas"
}

/**
 * Sets per-page <title> and meta description/canonical.
 * Use this inside every page component (Home included) so each
 * URL has its own unique title/description for Google — critical
 * for a multi-page SEO strategy instead of one page trying to rank
 * for every keyword at once.
 */
export default function PageMeta({ title, description, path }: PageMetaProps) {
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
  }, [title, description, path]);

  return null;
}
