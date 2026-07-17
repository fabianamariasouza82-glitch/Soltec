import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PageMeta from "../PageMeta";
import { CheckCircle, ShieldCheck, Store, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppConversion } from "@/lib/analytics";

const faqs = [
  {
    q: "Fazem manutenção fora do horário comercial para não afetar o funcionamento?",
    a: "Sim, agendamos manutenções à noite, fins de semana ou feriados para não interromper o funcionamento do seu comércio ou escritório.",
  },
  {
    q: "Atendem escritórios, lojas e centros de distribuição?",
    a: "Sim. Atendemos edifícios comerciais, escritórios, lojas, centros de distribuição e redes de varejo em Campinas e região.",
  },
  {
    q: "Emitem nota fiscal e TRT para pessoa jurídica?",
    a: "Sim, emitimos nota fiscal e TRT em todos os serviços, com CNPJ ativo e documentação completa para sua contabilidade.",
  },
  {
    q: "Fazem contrato de manutenção preventiva recorrente?",
    a: "Sim, oferecemos planos de manutenção preventiva mensal, trimestral ou semestral, adaptados ao porte e à criticidade da sua operação.",
  },
];

export default function ManutencaoEletricaComercial() {
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
      serviceType: "Manutenção Elétrica Comercial",
      name: "Manutenção Elétrica Comercial em Campinas",
      description:
        "Manutenção elétrica preventiva e corretiva para empresas, escritórios,
