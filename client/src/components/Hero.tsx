import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const slides = [
  "/images/industrial-services.jpg",
  "/images/eletricistas_uniforme_capacete_liso.jpg",
  "/images/commercial-services.jpg",
  "/images/eletricistas_uniforme_liso.jpg",
];

function SlideImages({ current, className }: { current: number; className?: string }) {
  return (
    <div className={className}>
      {slides.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={src} alt="" className="w-full h-full object-cover object-top" />
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
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Segurança Elétrica que Sua Empresa Merece
            </h1>
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
