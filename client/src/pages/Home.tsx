import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReviews";
import { Zap, Building2, Home, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import PageMeta from "../PageMeta";
import { trackWhatsAppConversion } from "@/lib/analytics";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageMeta
        title="Manutenção e Instalação Elétrica Industrial e Predial em Campinas | Soltec"
        description="Manutenção e instalação elétrica industrial, comercial e predial para empresas em Campinas, Sumaré, Paulínia, Valinhos, Vinhedo e região. Equipe certificada, atendimento emergencial."
        path="/"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <section id="servicos" className="py-16 md:py-24 bg-white scroll-mt-24 md:scroll-mt-28">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Nossos Serviços
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Soluções completas em instalação e manutenção elétrica para empresas de todos os tamanhos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/manutencao-eletrica-industrial-campinas" className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <ServiceCard
                  icon={Zap}
                  title="Instalação Industrial"
                  description="Instalações elétricas de alta tensão para indústrias, com segurança e conformidade normativa garantidas."
                  image="/images/industrial-services.jpg"
                />
              </Link>
              <Link href="/manutencao-eletrica-comercial-campinas" className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <ServiceCard
                  icon={Building2}
                  title="Manutenção Comercial"
                  description="Manutenção preventiva e corretiva para edifícios comerciais, escritórios e centros de distribuição."
                  image="/images/commercial-services.jpg"
                />
              </Link>
              <Link href="/instalacao-eletrica-predial-campinas" className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <ServiceCard
                  icon={Home}
                  title="Serviços Prediais"
                  description="Instalação e manutenção elétrica em condomínios, prédios residenciais e comerciais."
                  image="/images/eletricistas_uniforme_capacete_liso.jpg"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Por Que Escolher a Soltec?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Experiência', desc: 'Mais de 20 anos no mercado' },
                { title: 'Segurança', desc: 'Conformidade com todas as normas' },
                { title: 'Qualidade', desc: 'Materiais e serviços premium' },
                { title: 'Suporte 24/7', desc: 'Atendimento emergencial' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle size={32} className="text-[#ff6600]" />
                  </div>
                  <h3 className="font-bold text-[#003366] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clientes" className="py-16 md:py-24 bg-white scroll-mt-24 md:scroll-mt-28">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Nossos Clientes
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Empresas de grande porte confiam na Soltec para seus projetos elétricos.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[
                { name: 'IBM', logo: '/images/clients/ibm.png' },
                { name: 'Coca-Cola', logo: '/images/clients/coca-cola.png' },
                { name: 'Audi', logo: '/images/clients/audi.png', big: true },
                { name: 'Tramontina', logo: '/images/clients/tramontina.png' },
                { name: 'Medley', logo: '/images/clients/medley.png' },
                { name: 'VLI', logo: '/images/clients/vli.png' },
                { name: 'McDonald\'s', logo: '/images/clients/mcdonalds.png', big: true },
                { name: 'ENGIE', logo: '/images/clients/engie.png' },
              ].map((client, idx) => (
                <div key={idx} className="flex items-center justify-center p-6 h-28 bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-all">
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className={`${client.big ? 'max-h-24 md:max-h-28' : 'max-h-16 md:max-h-20'} max-w-[85%] w-auto object-contain grayscale hover:grayscale-0 transition-all`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16 md:py-24 bg-gray-50 scroll-mt-24 md:scroll-mt-28">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Sobre a Soltec
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  A Soltec Instalações Elétricas é uma empresa consolidada no mercado de Campinas e região, especializada em serviços de instalação e manutenção elétrica para empresas de todos os tamanhos.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Com equipe altamente qualificada e certificada, realizamos projetos com excelência, segurança e conformidade com todas as normas técnicas vigentes.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nosso compromisso é oferecer soluções elétricas que garantem a continuidade operacional de seus negócios, com atendimento personalizado e suporte técnico de qualidade.
                </p>
                
                  href="https://wa.me/5519994252525"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppConversion}
                >
                  <Button className="bg-[#ff6600] hover:bg-[#e55a00] text-white font-semibold px-8 py-3">
                    Entrar em Contato
                  </Button>
                </a>
              </div>
              <div className="relative">
                <img 
                  src="/images/eletricistas_uniforme_liso.jpg" 
                  alt="Equipe Soltec"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

        {/* Google Reviews Section */}
        <GoogleReviews />
      </main>
      <Footer />
    </div>
  );
}
