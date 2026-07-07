import { useEffect } from 'react';

export default function SEOHead() {
  useEffect(() => {
    // Schema.org structured data for local business
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "Soltec Instalações Elétricas",
      "image": "https://www.soltecnicas.com.br/images/soltec-logo.png",
      "description": "Manutenção e instalação elétrica industrial, comercial e predial para empresas em Campinas e Região Metropolitana de Campinas.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Campinas",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "telephone": "+55-19-99425-2525",
      "email": "contato@soltecnicas.com.br",
      "url": "https://www.soltecnicas.com.br",
      "areaServed": [
        "Campinas", "Sumaré", "Paulínia", "Valinhos", "Vinhedo",
        "Americana", "Nova Odessa", "Santa Bárbara D'Oeste",
        "Monte Mor", "Limeira", "Jaguariúna", "Indaiatuba"
      ].map((city) => ({ "@type": "City", "name": city })),
      "priceRange": "$$",
      "sameAs": [
        "https://www.facebook.com/Soltec.Instalacoes.Eletricas/"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
