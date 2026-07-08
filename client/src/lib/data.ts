export interface Neighborhood {
  id: string;
  name: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
}

export const neighborhoods: Neighborhood[] = [
  { id: "centro", name: "Centro" },
  { id: "cambui", name: "Cambuí" },
  { id: "taquaral", name: "Taquaral" },
  { id: "barao-geraldo", name: "Barão Geraldo" },
  { id: "sousas", name: "Sousas" },
  { id: "jardim-chapadao", name: "Jardim Chapadão" },
  { id: "vila-industrial", name: "Vila Industrial" },
  { id: "swift", name: "Swift" },
  { id: "cambuizinho", name: "Cambuizinho" },
  { id: "nova-campinas", name: "Nova Campinas" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "como-identificar-problemas-eletricos",
    category: "Segurança",
    title: "Como Identificar Problemas Elétricos em Casa",
    excerpt:
      "Aprenda a reconhecer os sinais de alerta de problemas elétricos antes que se tornem emergências.",
  },
  {
    id: "manutencao-preventiva-eletrica",
    category: "Manutenção",
    title: "A Importância da Manutenção Elétrica Preventiva",
    excerpt:
      "Entenda por que revisões periódicas evitam acidentes e prolongam a vida útil da sua instalação.",
  },
  {
    id: "quando-chamar-eletricista-emergencia",
    category: "Emergência",
    title: "Quando Chamar um Eletricista de Emergência",
    excerpt:
      "Saiba identificar situações que exigem atendimento imediato para garantir a segurança da sua família.",
  },
];
