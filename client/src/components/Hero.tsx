import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const slides = [
  { src: "/images/industrial-services.jpg", alt: "Instalação elétrica industrial realizada pela Soltec em Campinas" },
  { src: "/images/eletricistas_uniforme_capacete_liso.jpg", alt: "Eletricista da Soltec com uniforme e capacete de segurança" },
  { src: "/images/commercial-services.jpg", alt: "Manutenção elétrica comercial realizada pela equipe Soltec" },
  { src: "/images/eletricistas_uniforme_liso.jpg", alt: "Equipe de eletricistas da Soltec em Campinas" },
];

function SlideImages({ current, className }: { current: number; className?: string }) {
  return (
    <div className={className}>
      {slides.map((slide, idx) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* A primeira imagem (idx 0) é a que aparece assim que a página
              carrega — ela é o elemento de LCP (Largest Contentful Paint)
              da página. Por isso carrega com prioridade alta e sem lazy
              loading. As demais só são necessárias quando o carrossel
              chega nelas, então carregam sob demanda (loading="lazy"),
              evitando competir por banda com a imagem principal. */}
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover object-top"
            loading={idx === 0 ? "eager" : "lazy"}
            fetchPriority={idx === 0 ? "high" : "auto"}
          />
        </div>
      ))}
    </div>
  );
}

function SlideDots({ current, onSelect }: { current: number; onSelect: (i: number) => void }) {
  return (
    <div className="flex gap-2 justify-center">
      {slides.map((_, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          aria-label={`Ir para slide ${idx + 1}`}
          className={`h-2 rounded-full transition-all ${
            idx === current ? "w-6 bg-[#003366] md:bg-white" : "w-2 bg-[#003366]/30 md:bg-white/50"
          }`}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* ===== MOBILE LAYOUT: image on top (contained aspect ratio), text below ===== */}
      {/* Este bloco contém o único <h1> real da página (SEO: Google prioriza
          a versão mobile para indexação). O bloco desktop, abaixo, repete o
          mesmo texto visualmente idêntico, mas usando <p> em vez de <h1>,
          para evitar dois H1 duplicados no código-fonte da página. */}
      <div className="md:hidden bg-[#003366] text-white">
        <div className="relative aspect-[4/3] w-full">
          <SlideImages current={current} className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-transparent to-transparent" />
        </div>
        <div className="px-4 pt-2 pb-8 space-y-4">
          <SlideDots current={current} onSelect={setCurrent} />
          <h1 className="text-3xl font-bold leading-tight">
            Segurança Elétrica que Sua Empresa Merece
          </h1>
          <p className="text-base text-blue-100 leading-relaxed">
            Instalação e manutenção elétrica profissional para empresas em Campinas e região. Segurança, confiabilidade e excelência em cada projeto.
          </p>
          <div className="flex flex-col gap-3 pt-2">
            <a href="https://wa.me/5519994252525" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-[#ff6600] hover:bg-[#e55a00] text-white font-semibold px-8 py-3 text-base">
                Solicitar Orçamento Agora
              </Button>
            </a>
            <a href="/#servicos">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-[#003366] font-semibold px-8 py-3 text-base">
                Conheça Nossos Serviços
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT: full-bleed background slider with text overlay ===== */}
      <div className="hidden md:block relative text-white py-40">
        <SlideImages current={current} className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/95 via-[#003366]/80 to-[#003366]/50" />

        <div className="container relative z-10">
          <div className="max-w-2xl space-y-6">
            {/* <p> em vez de <h1>: evita H1 duplicado (o H1 real está no
                bloco mobile acima). Visualmente idêntico, pois o tamanho
                e peso da fonte vêm das classes Tailwind, não da tag. */}
            <p className="text-5xl lg:text-6xl font-bold leading-tight">
              Segurança Elétrica que Sua Empresa Merece
            </p>
            <p className="text-xl text-blue-100 leading-relaxed">
              Instalação e manutenção elétrica profissional para empresas em Campinas e região. Segurança, confiabilidade e excelência em cada projeto.
            </p>
            <div className="flex flex-row gap-4 pt-4">
              <a href="https://wa.me/5519994252525" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#ff6600] hover:bg-[#e55a00] text-white font-semibold px-8 py-3 text-base">
                  Solicitar Orçamento Agora
                </Button>
              </a>
              <a href="/#servicos">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#003366] font-semibold px-8 py-3 text-base">
                  Conheça Nossos Serviços
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <SlideDots current={current} onSelect={setCurrent} />
        </div>
      </div>
    </section>
  );
}
