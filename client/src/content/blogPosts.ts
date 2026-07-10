export interface BlogSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  date: string; // ISO format, ex: "2026-07-10"
  readTime: string;
  category: string;
  intro: string[];
  sections: BlogSection[];
  conclusion: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "manutencao-preventiva-x-corretiva",
    title: "Manutenção Preventiva x Corretiva: Qual Sua Empresa Precisa?",
    excerpt:
      "Entenda as diferenças entre manutenção elétrica preventiva e corretiva, quando cada uma é indicada e como evitar paradas não programadas na sua empresa.",
    metaDescription:
      "Manutenção elétrica preventiva ou corretiva: entenda as diferenças, quando cada uma é indicada e como evitar paradas não programadas na sua empresa em Campinas.",
    date: "2026-07-10",
    readTime: "6 min de leitura",
    category: "Manutenção Elétrica",
    intro: [
      "Quando o assunto é manutenção elétrica, uma dúvida aparece com frequência entre gestores, síndicos e responsáveis técnicos: vale mais a pena investir em manutenção preventiva ou esperar o problema aparecer e resolver de forma corretiva? A resposta correta quase nunca é \"uma ou outra\" — na prática, as empresas mais bem preparadas combinam as duas estratégias de forma inteligente.",
      "Neste artigo, explicamos a diferença entre os dois modelos, os riscos de depender só da manutenção corretiva e como decidir qual abordagem faz mais sentido para a realidade da sua operação.",
    ],
    sections: [
      {
        heading: "O que é manutenção corretiva?",
        paragraphs: [
          "A manutenção corretiva é aquela realizada depois que um problema já aconteceu: um disjuntor desarmou, um painel parou de funcionar, houve uma queda de energia. É a intervenção que resolve uma falha já instalada.",
          "Esse modelo é inevitável — nenhuma operação está livre de imprevistos —, mas quando é a única estratégia de manutenção da empresa, os riscos aumentam consideravelmente: produção parada, prazos comprometidos, risco à segurança dos colaboradores e, em muitos casos, um custo de reparo mais alto do que seria uma intervenção preventiva no mesmo ponto.",
        ],
      },
      {
        heading: "O que é manutenção preventiva?",
        paragraphs: [
          "A manutenção preventiva é programada com antecedência, com o objetivo de identificar e corrigir pontos de risco antes que eles se transformem em uma falha real. Envolve inspeções periódicas, testes de segurança, verificação de sobrecargas, reaperto de conexões, limpeza de quadros e, em operações mais críticas, técnicas como a termografia — que identifica pontos de superaquecimento antes que virem um problema visível.",
          "O grande diferencial da manutenção preventiva é a previsibilidade: ao invés de reagir a uma emergência, a empresa planeja as intervenções em horários que não atrapalham a operação, com escopo e cronograma definidos com antecedência.",
        ],
      },
      {
        heading: "Sinais de que sua empresa está dependendo demais da manutenção corretiva",
        paragraphs: [
          "Alguns sinais indicam que a operação está no modo \"apagar incêndio\" no lugar de prevenir problemas:",
        ],
        list: [
          "Disjuntores que desarmam com frequência, sem explicação aparente",
          "Paradas não programadas se tornando cada vez mais comuns",
          "Ausência de qualquer histórico ou registro de inspeções elétricas",
          "Quadros elétricos antigos, sem modernização há muitos anos",
          "Dificuldade para apresentar laudos técnicos quando exigidos por seguradoras ou fiscalização",
        ],
      },
      {
        heading: "Por que a combinação das duas estratégias é o caminho mais seguro",
        paragraphs: [
          "Na prática, nenhuma empresa consegue eliminar 100% a necessidade de manutenção corretiva — sempre pode haver um evento imprevisto, um equipamento com defeito de fábrica, uma sobrecarga pontual causada por um novo maquinário. Por isso, a estratégia mais robusta não é escolher só uma abordagem, e sim reduzir a dependência da manutenção corretiva através de um plano preventivo consistente, mantendo ao mesmo tempo um atendimento emergencial confiável para quando algo inesperado acontecer.",
          "Empresas que adotam contratos de manutenção preventiva recorrente costumam notar, ao longo do tempo, uma redução significativa na frequência e na gravidade das falhas corretivas — porque os pontos de risco são identificados e corrigidos antes de evoluírem para uma parada real.",
        ],
      },
      {
        heading: "Como saber qual frequência de manutenção preventiva sua empresa precisa",
        paragraphs: [
          "A frequência ideal varia conforme o porte da operação, a criticidade dos equipamentos e a intensidade de uso das instalações elétricas. Indústrias com operação contínua ou alto consumo energético geralmente exigem inspeções mais frequentes que comércios ou condomínios de menor porte. Equipamentos críticos, como subestações e painéis de comando principais, costumam demandar atenção ainda mais próxima, independentemente do segmento.",
          "O ideal é que essa frequência seja definida por um profissional qualificado, a partir de uma avaliação real da instalação — não de uma regra genérica aplicada sem levar em conta as particularidades de cada operação.",
        ],
      },
    ],
    conclusion: [
      "Se sua empresa ainda não tem um plano de manutenção preventiva estruturado, ou se está enfrentando falhas corretivas com frequência cada vez maior, esse é um bom momento para reavaliar a estratégia. A Soltec atua com manutenção elétrica preventiva e corretiva para empresas em Campinas e região, com laudos técnicos e atendimento emergencial para quando o imprevisto acontecer.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
