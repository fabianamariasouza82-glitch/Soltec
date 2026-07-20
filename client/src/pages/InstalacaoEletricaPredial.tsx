import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PageMeta from "../PageMeta";
import { CheckCircle, ShieldCheck, Building2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppConversion, buildWhatsAppLink } from "@/lib/analytics";

const faqs = [
  {
    q: "Vocês atendem condomínios comerciais e residenciais?",
    a: "Sim. Atendemos condomínios comerciais, prédios residenciais, centros de distribuição e edifícios corporativos em Campinas e região, com contratos avulsos ou de manutenção recorrente.",
  },
  {
    q: "O laudo elétrico é obrigatório para condomínios?",
    a: "Sim, laudos de instalações elétricas prediais costumam ser exigidos por seguradoras, pelo Corpo de Bombeiros (AVCB) e em processos de renovação de apólice. A Soltec emite laudo técnico com TRT.",
  },
  {
    q: "Fazem manutenção preventiva programada para síndicos?",
    a: "Sim, oferecemos contratos de manutenção preventiva programada, com relatórios periódicos para prestação de contas em assembleia.",
  },
  {
    q: "Quanto tempo leva uma vistoria elétrica predial?",
    a: "Depende do porte do prédio, mas a maioria das vistorias completas é concluída em 1 a 2 dias, com relatório entregue em até 5 dias úteis.",
  },
];

export default function InstalacaoEletricaPredial() {
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
      serviceType: "Instalação e Manutenção Elétrica Predial",
      name: "Instalação e Manutenção Elétrica Predial em Campinas",
      description:
        "Instalação e manutenção elétrica predial para condomínios, prédios residenciais e comerciais: laudo técnico com TRT, adequação à NBR-5410 e AVCB, manutenção preventiva programada para síndicos.",
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
      url: "https://www.soltecnicas.com.br/instalacao-eletrica-predial-campinas",
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
        title="Instalação e Manutenção Elétrica Predial em Campinas | Soltec"
        description="Instalação e manutenção elétrica predial para condomínios, prédios comerciais e residenciais em Campinas e região. Laudo técnico com TRT. Solicite orçamento."
        path="/instalacao-eletrica-predial-campinas"
      />
      <Header />
      <main>
        <section className="relative text-white py-16 md:py-24 bg-[#003366] bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0,51,102,0.88), rgba(0,51,102,0.88)), url('/images/banner-wide.jpg')" }}>
          <div className="container">
            <p className="text-sm text-white/70 mb-3">
              <Link href="/" className="hover:underline">Início</Link> / Instalação Elétrica Predial
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl" style={{ fontFamily: 'var(--font-display)' }}>
              Instalação e Manutenção Elétrica Predial em Campinas
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8">
              Soluções elétricas para condomínios, prédios residenciais e comerciais em Campinas, Sumaré, Paulínia,
              Valinhos, Vinhedo, Americana, Nova Odessa, Santa Bárbara D'Oeste, Monte Mor, Limeira, Jaguariúna e
              Indaiatuba. Laudos técnicos com TRT para síndicos e administradoras.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={buildWhatsAppLink("Olá! Vim do site da Soltec (página de Instalação Predial) e gostaria de solicitar um orçamento.")}
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
                Síndicos e administradoras precisam de laudos e manutenções que atendam exigências de seguradoras e do
                Corpo de Bombeiros, sem surpresas de custo. A Soltec atua com transparência, relatórios claros e
                atendimento programado para não incomodar moradores e condôminos.
              </p>
              <ul className="space-y-3">
                {[
                  "Laudo técnico de instalações elétricas com TRT",
                  "Manutenção preventiva programada para condomínios",
                  "Modernização de quadros elétricos antigos",
                  "Adequação à NBR-5410 e exigências de AVCB",
                  "Instalação elétrica em reformas e ampliações prediais",
                  "Relatórios periódicos para prestação de contas em assembleia",
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
                Feito para síndicos e administradoras
              </h3>
              <p className="text-gray-600 mb-4">
                Mais de 20 anos atendendo prédios e condomínios na Região Metropolitana de Campinas, com equipe
                certificada e atendimento programado que respeita a rotina do prédio.
              </p>
              <div className="flex items-center gap-2 text-[#003366] font-semibold">
                <Building2 size={18} /> Laudo técnico e TRT em todos os serviços
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
