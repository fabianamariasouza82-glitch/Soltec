import { useEffect, useRef } from "react";

const WIDGET_ID = "967f1ad769cd08893386c736c28";

export default function GoogleReviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    // Insert the script as a child of our own container div, so whatever
    // the Trustindex loader renders (it inserts itself next to/inside
    // wherever this script tag lives) stays inside this section instead
    // of drifting to the end of <body>.
    const script = document.createElement("script");
    script.defer = true;
    script.async = true;
    script.src = `https://cdn.trustindex.io/loader.js?${WIDGET_ID}`;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            O que os nossos clientes dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Avaliações reais de clientes no Google.
          </p>
        </div>
        <div ref={containerRef} />
      </div>
    </section>
  );
}
