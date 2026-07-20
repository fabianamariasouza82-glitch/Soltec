import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PageMeta from "../PageMeta";
import { CheckCircle, ShieldCheck, Store, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppConversion, buildWhatsAppLink } from "@/lib/analytics";

const faqs = [
  {
    q: "Fazem manutenção fora do horário comercial para não afetar o funcionamento?",
    a: "Sim, agendamos manutenções à noite, fins de semana ou feriados para não interromper o funcionamento do seu comércio ou escritório.",
  },
  {
    q: "Atendem escritórios, lojas e centros de distribuição?",
    a: "Sim. Atendemos edifícios comerciais, escritórios, lojas, centros de distribuição e redes de varejo em Campinas e região.",
  },
  {
    q: "Emitem nota fiscal e TRT para pessoa jurídica?",
    a: "Sim, emitimos nota fiscal e TRT em todos os serviços, com CNPJ ativo e documentação completa para sua contabilidade.",
  },
  {
    q: "Fazem contrato de manutenção preventiva recorrente?",
    a: "Sim, oferecemos planos de manutenção preventiva mensal, trimestral ou semestral, adaptados ao porte e à criticidade da sua operação.",
  },
];

export default function ManutencaoEletricaComercial() {
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
      serviceType: "Manutenção Elétrica Comercial",
      name: "Manutenção Elétrica Comercial em Campinas",
      description:
        "Manutenção elétrica preventiva e corretiva para empresas, escritórios, lojas e centros de distribuição, com atendimento fora do horário comercial e contratos de manutenção recorrente.",
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
      url: "https://www.soltecnicas.com.br/manutencao-eletrica-comercial-campinas",
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
        title="Manutenção Elétrica Comercial em Campinas | Soltec"
        description="Manutenção elétrica preventiva e corretiva para empresas, escritórios e centros de distribuição em Campinas e região. Atendimento fora do horário comercial. Solicite orçamento."
        path="/manutencao-eletrica-comercial-campinas"
      />
      <Header />
      <main>
        <section className="relative text-white py-16 md:py-24 bg-[#003366] bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0,51,102,0.88), rgba(0,51,102,0.88)), url('/images/banner-wide.jpg')" }}>
          <div className="container">
            <p className="text-sm text-white/70 mb-3">
              <Link href="/" className="hover:underline">Início</Link> / Manutenção Elétrica Comercial
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl" style={{ fontFamily: 'var(--font-display)' }}>
              Manutenção Elétrica Comercial em Campinas e Região
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8">
              Manutenção preventiva e corretiva para empresas, escritórios, lojas e centros de distribuição em
              Campinas, Sumaré, Paulínia, Valinhos, Vinhedo, Americana, Nova Odessa, Santa Bárbara D'Oeste, Monte Mor,
              Limeira, Jaguariúna e Indaiatuba. Agendamento fora do horário comercial disponível.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={buildWhatsAppLink("Olá! Vim do site da Soltec (página de Manutenção Comercial) e gostaria de solicitar um orçamento.")}
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

        <section className="py-16 md:py-24 bg-white">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                O que fazemos
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Uma queda de energia numa loja, escritório ou centro de distribuição afeta vendas e produtividade
                imediatamente. A Soltec agenda manutenções fora do horário de funcionamento para eliminar riscos sem
                atrapalhar sua operação.
              </p>
              <ul className="space-y-3">
                {[
                  "Manutenção preventiva e corretiva de quadros elétricos comerciais",
                  "Diagnóstico de sobrecarga e disjuntores que desarmam",
                  "Adequação de instalações para novos equipamentos",
                  "Contratos de manutenção recorrente com relatórios periódicos",
                  "Atendimento noturno, fins de semana e feriados",
                  "Nota fiscal e TRT para pessoa jurídica",
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
                Sem parar sua operação
              </h3>
              <p className="text-gray-600 mb-4">
                Empresas como IBM, Coca-Cola, Audi, Tramontina, Medley, VLI e Cacau Show confiam na Soltec para manter
                suas operações comerciais funcionando com segurança na Região Metropolitana de Campinas.
              </p>
              <div className="flex items-center gap-2 text-[#003366] font-semibold">
                <Store size={18} /> Nota fiscal e TRT em todos os serviços
              </div>
            </div>
          </div>
        </section>

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

        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container">
            <p className="text-sm text-gray-500 mb-3">Veja também:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/manutencao-eletrica-industrial-campinas" className="text-[#003366] font-medium hover:underline">
                Manutenção Elétrica Industrial em Campinas
              </Link>
              <Link href="/instalacao-eletrica-predial-campinas" className="text-[#003366] font-medium hover:underline">
                Instalação Elétrica Predial em Campinas
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
