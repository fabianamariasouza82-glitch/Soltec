import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PageMeta from "../PageMeta";
import { CheckCircle, ShieldCheck, Building2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppConversion } from "@/lib/analytics";

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

    // Schema Service: descreve formalmente o serviço oferecido nesta
    // página (o quê, quem presta, onde é oferecido). Complementa o
    // FAQPage — o FAQ ajuda o Google a entender dúvidas comuns, o
    // Service ajuda a entender "isto é uma oferta de serviço real".
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
        "Monte Mor",
