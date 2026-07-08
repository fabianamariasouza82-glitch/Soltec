import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-20 md:h-24">
        <a href="/" className="flex items-center gap-2">
          <img src="/images/soltec-logo.png" alt="Soltec Instalações Elétricas" className="h-14 md:h-20 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/#servicos" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
            Serviços
          </a>
          <a href="/#clientes" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
            Clientes
          </a>
          <a href="/#sobre" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
            Sobre
          </a>
          <a href="/#contato" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
            Contato
          </a>
        </nav>

        <a href="https://wa.me/5519994252525" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
          <Button className="bg-[#ff6600] hover:bg-[#e55a00] text-white font-semibold">
            Solicitar Orçamento
          </Button>
        </a>

        <button
          className="md:hidden p-2"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <nav className="flex flex-col gap-4 p-4">
            <a href="/#servicos" className="text-left text-gray-700 hover:text-[#003366] font-medium">Serviços</a>
            <a href="/#clientes" className="text-left text-gray-700 hover:text-[#003366] font-medium">Clientes</a>
            <a href="/#sobre" className="text-left text-gray-700 hover:text-[#003366] font-medium">Sobre</a>
            <a href="/#contato" className="text-left text-gray-700 hover:text-[#003366] font-medium">Contato</a>
            <a href="https://wa.me/5519994252525" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-[#ff6600] hover:bg-[#e55a00] text-white font-semibold">
                Solicitar Orçamento
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
