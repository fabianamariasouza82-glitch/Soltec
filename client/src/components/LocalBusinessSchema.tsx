import { useEffect } from 'react';

/**
 * Injeta o schema JSON-LD "LocalBusiness" (dados fixos da empresa:
 * nome, telefone, endereço, área de atendimento). Diferente do
 * schema em PageMeta (que muda por página), este é o mesmo em
 * qualquer lugar do site — por isso é injetado uma única vez, aqui,
 * e deve ser incluído no App.tsx (fora do <Router>, junto do Header
 * por exemplo), não em cada página individualmente.
 *
 * Isso ajuda o Google a entender que a Soltec é uma empresa real,
 * com endereço e telefone, o que conta para aparecer em buscas
 * locais ("eletricista para empresas perto de mim", mapa do Google).
 */
export default function LocalBusinessSchema() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ElectricalContractor', // subtipo de LocalBusiness voltado a serviços elétricos
      name: 'Soltec Instalações Elétricas',
      image: 'https://www.soltecnicas.com.br/images/soltec-logo.png',
      url: 'https://www.soltecnicas.com.br',
      telephone: '+5519994252525',
      email: 'contato@soltecnicas.com.br',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Campinas',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      areaServed: [
        { '@type': 'City', name: 'Campinas' },
        { '@type': 'City', name: 'Sumaré' },
        { '@type': 'City', name: 'Paulínia' },
        { '@type': 'City', name: 'Valinhos' },
        { '@type': 'City', name: 'Vinhedo' },
        { '@type': 'City', name: 'Hortolândia' },
      ],
      priceRange: '$$',
      description:
        'Instalação e manutenção elétrica industrial, comercial e predial para empresas em Campinas e região.',
    };

    const scriptId = 'local-business-schema-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, []);

  return null;
}
