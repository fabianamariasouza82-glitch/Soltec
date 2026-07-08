import { useEffect } from "react";

interface UseSEOOptions {
  title?: string;
  description?: string;
  jsonLd?: Record<string, unknown>;
}

function setMetaTag(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function useSEO({ title, description, jsonLd }: UseSEOOptions) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      setMetaTag("description", description);
    }

    let scriptTag: HTMLScriptElement | null = null;
    if (jsonLd) {
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      scriptTag.text = JSON.stringify(jsonLd);
      document.head.appendChild(scriptTag);
    }

    return () => {
      if (scriptTag) {
        document.head.removeChild(scriptTag);
      }
    };
  }, [title, description, jsonLd]);
}
