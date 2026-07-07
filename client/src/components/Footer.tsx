export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003366] text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#ff6600] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">⚡</span>
              </div>
              <span className="font-bold text-lg">SOLTEC</span>
            </div>
            <p className="text-blue-100 text-sm">
              Soluções elétricas profissionais para empresas em Campinas e região.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><a href="/manutencao-eletrica-industrial-campinas" className="hover:text-white transition-colors">Instalação Industrial</a></li>
              <li><a href="/manutencao-eletrica-comercial-campinas" className="hover:text-white transition-colors">Manutenção Comercial</a></li>
              <li><a href="/instalacao-eletrica-predial-campinas" className="hover:text-white transition-colors">Serviços Prediais</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><a href="/#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="/#clientes" className="hover:text-white transition-colors">Nossos Clientes</a></li>
              <li><a href="/#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>📧 contato@soltecnicas.com.br</li>
              <li>📱 (19) 99425-2525</li>
              <li>📍 Campinas e Região Metropolitana</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-blue-100 text-sm">
            <p>&copy; {currentYear} Soltécnicas. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
