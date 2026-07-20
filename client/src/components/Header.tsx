import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppConversion, buildWhatsAppLink } from "@/lib/analytics";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappLink = buildWhatsAppLink(
    "Olá! Vim do site da Soltec e gostaria de solicitar um orçamento."
  );
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-20 md:h-24">
        <a href="/" className="flex items-center gap-2">
          <img src="/images/soltec-logo.png" alt="Soltec Instalações Elétricas" className="h-9 md:h-12 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
            Home
          </a>
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
          <a href="/blog" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
            Blog
          </a>
        </nav>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex"
          onClick={trackWhatsAppConversion}
        >
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
            <a href="/" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-700 hover:text-[#003366] font-medium">Home</a>
            <a href="/#servicos" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-700 hover:text-[#003366] font-medium">Serviços</a>
            <a href="/#clientes" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-700 hover:text-[#003366] font-medium">Clientes</a>
            <a href="/#sobre" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-700 hover:text-[#003366] font-medium">Sobre</a>
            <a href="/#contato" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-700 hover:text-[#003366] font-medium">Contato</a>
            <a href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-700 hover:text-[#003366] font-medium">Blog</a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppConversion();
                setMobileMenuOpen(false);
              }}
            >
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
