import { useEffect } from "react";

const WIDGET_ID = "967f1ad769cd08893386c736c28";

export default function GoogleReviews() {
  useEffect(() => {
    // Avoid injecting the loader script twice if the component re-mounts
    if (document.querySelector(`script[src*="trustindex.io/loader.js"]`)) return;

    const script = document.createElement("script");
    script.defer = true;
    script.async = true;
    script.src = `https://cdn.trustindex.io/loader.js?${WIDGET_ID}`;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Avaliações reais de clientes no Google.
          </p>
        </div>
        {/* @ts-ignore - custom element injected by the Trustindex widget script */}
        <trustindex data-widget-id={WIDGET_ID}></trustindex>
      </div>
    </section>
  );
}
