import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PageMeta from "../PageMeta";
import { CheckCircle, ShieldCheck, Zap, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppConversion, buildWhatsAppLink } from "@/lib/analytics";

const faqs = [
  {
    q: "Com que frequência devo fazer manutenção elétrica industrial?",
    a: "O recomendado é manutenção preventiva a cada 6 meses para indústrias com operação contínua ou alto consumo, e ao menos 1 vez ao ano para operações padrão. Equipamentos críticos (subestações, painéis de comando) costumam exigir inspeção trimestral.",
  },
  {
    q: "Vocês emitem laudo técnico e TRT?",
    a: "Sim. Todos os serviços de manutenção e instalação elétrica industrial são acompanhados de laudo técnico e TRT, documentos exigidos por seguradoras e fiscalização.",
  },
  {
    q: "A Soltec atende emergências fora do horário comercial?",
    a: "Sim, temos atendimento emergencial para paradas não programadas que colocam a produção em risco. Entre em contato pelo WhatsApp para acionamento rápido.",
  },
  {
    q: "Quais normas técnicas vocês seguem?",
    a: "Seguimos a NR-10 (segurança em instalações elétricas), NR-12 (segurança em máquinas e equipamentos) e a NBR-5410, além das normas específicas de cada tipo de instalação industrial.",
  },
];

export default function ManutencaoEletricaIndustrial() {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Manutenção Elétrica Industrial",
      name: "Manutenção Elétrica Industrial em Campinas",
      description:
        "Manutenção elétrica industrial preventiva e corretiva: montagem e manutenção de painéis, termografia, adequação a NR-10 e NR-12, atendimento emergencial para paradas não programadas.",
      provider: {
        "@type": "ElectricalContractor",
        name: "Soltec Instalações Elétricas",
        telephone: "+5519994252525",
        url: "https://www.soltecnicas.com.br",
      },
      areaServed: [
        "Campinas", "Sumaré", "Paulínia", "Valinhos", "Vinhedo",
        "Americana", "Nova Odessa", "Santa Bárbara D'Oeste",
        "Monte Mor", "Limeira", "Jaguariúna", "Indaiatuba",
      ],
      url: "https://www.soltecnicas.com.br/manutencao-eletrica-industrial-campinas",
    };

    const scripts: HTMLScriptElement[] = [];
    [faqSchema, serviceSchema].forEach((schema, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `page-schema-${i}`;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      scripts.push(script);
    });

    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageMeta
        title="Manutenção Elétrica Industrial em Campinas | Soltec"
        description="Manutenção elétrica industrial preventiva e corretiva em Campinas e região. Montagem de painéis, laudos NR-10/NR-12, atendimento emergencial. Solicite orçamento."
        path="/manutencao-eletrica-industrial-campinas"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative text-white py-16 md:py-24 bg-[#003366] bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0,51,102,0.88), rgba(0,51,102,0.88)), url('/images/banner-wide.jpg')" }}>
          <div className="container">
            <p className="text-sm text-white/70 mb-3">
              <Link href="/" className="hover:underline">Início</Link> / Manutenção Elétrica Industrial
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl" style={{ fontFamily: 'var(--font-display)' }}>
              Manutenção Elétrica Industrial em Campinas e Região
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8">
              Manutenção preventiva e corretiva para indústrias que não podem parar. Equipe certificada NR-10 e NR-12,
              laudos técnicos com TRT, e atendimento emergencial em Campinas, Sumaré, Paulínia, Valinhos, Vinhedo,
              Americana, Nova Odessa, Santa Bárbara D'Oeste, Monte Mor, Limeira, Jaguariúna e Indaiatuba.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={buildWhatsAppLink("Olá! Vim do site da Soltec (página de Manutenção Industrial) e gostaria de solicitar um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppConversion}
              >
                <Button className="bg-[#ff6600] hover:bg-[#e55a00] text-white font-semibold px-8 py-3">
                  <PhoneCall size={18} className="mr-2" /> Falar no WhatsApp
                </Button>
              </a>
              <Link href="/#contato">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#003366] px-8 py-3">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                O que fazemos
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Uma parada elétrica não programada em ambiente industrial custa caro — produção parada, prazos perdidos,
                risco de acidente. A Soltec atua com manutenção preventiva programada e corretiva emergencial para
                manter sua planta operando com segurança e conformidade normativa.
              </p>
              <ul className="space-y-3">
                {[
                  "Montagem e manutenção de painéis elétricos de comando e força",
                  "Manutenção preventiva e preditiva em quadros e subestações",
                  "Termografia elétrica para identificar pontos de risco antes da falha",
                  "Adequação a NR-10, NR-12 e NBR-5410",
                  "Cabeamento estruturado, eletrocalhas e distribuição de circuitos",
                  "Atendimento emergencial para paradas não programadas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#ff6600] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <ShieldCheck size={32} className="text-[#003366] mb-4" />
              <h3 className="font-bold text-[#003366] mb-2 text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                Confiança comprovada
              </h3>
              <p className="text-gray-600 mb-4">
                Empresas como IBM, Coca-Cola, Audi, Tramontina, Medley, VLI e Cacau Show já confiaram na Soltec para
                seus projetos elétricos. Mais de 20 anos de experiência atendendo operações industriais na Região
                Metropolitana de Campinas.
              </p>
              <div className="flex items-center gap-2 text-[#003366] font-semibold">
                <Zap size={18} /> Laudo técnico e TRT em todos os serviços
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              Perguntas Frequentes
            </h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-[#003366] mb-2">{f.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container">
            <p className="text-sm text-gray-500 mb-3">Veja também:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/instalacao-eletrica-predial-campinas" className="text-[#003366] font-medium hover:underline">
                Instalação Elétrica Predial em Campinas
              </Link>
              <Link href="/manutencao-eletrica-comercial-campinas" className="text-[#003366] font-medium hover:underline">
                Manutenção Elétrica Comercial em Campinas
              </Link>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
