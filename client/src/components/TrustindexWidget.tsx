import { useEffect, useRef } from "react";

export default function TrustindexWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Evita duplicar o script se o componente re-renderizar
    if (containerRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?967f1ad769cd08893386c736c28";
    script.defer = true;
    script.async = true;
    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} className="w-full flex justify-center"></div>;
}
