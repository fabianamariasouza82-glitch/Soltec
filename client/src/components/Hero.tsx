import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#003366] to-[#004d99] text-white py-20 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
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

          <div className="relative hidden lg:block">
            <img
              src="/images/eletricistas_uniforme_capacete_liso.jpg"
              alt="Equipe de eletricistas profissionais"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
