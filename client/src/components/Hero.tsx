import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const slides = [
  "/images/industrial-services.jpg",
  "/images/eletricistas_uniforme_capacete_liso.jpg",
  "/images/commercial-services.jpg",
  "/images/eletricistas_uniforme_liso.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative text-white py-24 md:py-40 overflow-hidden">
      {/* Slider images */}
      <div className="absolute inset-0">
        {slides.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        {/* Dark navy overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/95 via-[#003366]/80 to-[#003366]/50" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Segurança Elétrica que Sua Empresa Merece
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            Instalação e manutenção elétrica profissional para empresas em Campinas e região. Segurança, confiabilidade e excelência em cada projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
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

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Ir para slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${
              idx === current ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
