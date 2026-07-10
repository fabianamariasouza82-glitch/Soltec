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
  {
    slug: "o-que-e-nr-10",
    title: "O Que é NR-10 e Por Que Sua Empresa Precisa Estar em Conformidade",
    excerpt:
      "Entenda o que é a NR-10, por que ela é obrigatória para empresas e como a conformidade com essa norma protege colaboradores e o negócio.",
    metaDescription:
      "O que é a NR-10, quem precisa cumprir essa norma e como a conformidade elétrica protege sua empresa de acidentes, multas e paralisações. Guia completo.",
    date: "2026-06-28",
    readTime: "7 min de leitura",
    category: "Normas Técnicas",
    intro: [
      "A NR-10 é uma das normas regulamentadoras mais mencionadas quando o assunto é segurança elétrica no ambiente de trabalho — mas nem sempre é bem compreendida por quem não é da área técnica. Muitos gestores sabem que \"precisam estar em dia com a NR-10\", sem necessariamente entender o que isso envolve na prática.",
      "Neste artigo, explicamos o que é a NR-10, quem precisa cumpri-la, o que a conformidade envolve de fato e por que ignorá-la representa um risco real — tanto para as pessoas quanto para a operação da empresa.",
    ],
    sections: [
      {
        heading: "O que é a NR-10?",
        paragraphs: [
          "A NR-10 (Norma Regulamentadora número 10) é a norma brasileira que estabelece os requisitos e condições mínimas para garantir a segurança de trabalhadores que atuam em instalações elétricas, em qualquer fase da vida útil dessas instalações: projeto, construção, montagem, operação, manutenção e até desativação.",
          "Ela se aplica a praticamente qualquer empresa que tenha instalações elétricas — o que, na prática, é quase toda empresa —, mas seu foco principal está nas atividades que envolvem contato direto ou proximidade com partes energizadas: manutenção elétrica, instalação de painéis, operação de subestações, entre outras.",
        ],
      },
      {
        heading: "O que a conformidade com a NR-10 envolve na prática",
        paragraphs: [
          "Estar em conformidade com a NR-10 não é apenas ter um documento assinado — envolve um conjunto de medidas técnicas e organizacionais:",
        ],
        list: [
          "Profissionais capacitados e treinados especificamente para trabalhar com eletricidade, com certificado válido",
          "Uso correto de Equipamentos de Proteção Individual (EPIs) e Coletiva (EPCs) durante qualquer intervenção elétrica",
          "Procedimentos formais de trabalho, incluindo bloqueio e etiquetagem de circuitos antes de manutenções (evitando que alguém religue por engano)",
          "Sinalização adequada de áreas com risco elétrico",
          "Documentação técnica das instalações, incluindo diagramas atualizados",
        ],
      },
      {
        heading: "Por que ignorar a NR-10 é um risco caro",
        paragraphs: [
          "Os riscos de negligenciar a NR-10 vão muito além de uma eventual fiscalização. O principal risco é humano: acidentes elétricos podem causar queimaduras graves, choques com sequelas permanentes e, em casos extremos, fatalidades. Nenhuma economia de curto prazo compensa esse risco.",
          "Do ponto de vista da empresa, a não conformidade também expõe o negócio a passivos trabalhistas, dificuldades em renovar apólices de seguro e, em caso de acidente, responsabilização civil e criminal dos responsáveis pela operação — mesmo quando o acidente envolve um terceiro, como um prestador de serviço.",
        ],
      },
      {
        heading: "Quem deve realizar serviços elétricos em conformidade com a NR-10",
        paragraphs: [
          "A norma é clara: qualquer atividade em instalações elétricas deve ser realizada por profissionais qualificados, capacitados ou habilitados, conforme o nível de risco envolvido. Isso significa que contratar \"quem está disponível\" para resolver um problema elétrico rapidamente, sem verificar capacitação e certificação, é uma prática que expõe a empresa a riscos desnecessários.",
          "Empresas prestadoras de serviço elétrico sérias mantêm seus profissionais com treinamento NR-10 atualizado (a norma exige reciclagem periódica) e devem estar preparadas para apresentar essa documentação quando solicitado.",
        ],
      },
    ],
    conclusion: [
      "Manter a conformidade com a NR-10 é uma responsabilidade contínua, não um projeto pontual. A Soltec atua com equipe certificada NR-10 e NR-12, entregando laudos técnicos que comprovam a adequação da sua instalação às exigências normativas — para empresas em Campinas e região.",
    ],
  },
  {
    slug: "sinais-manutencao-eletrica-urgente",
    title: "5 Sinais de Que Sua Instalação Elétrica Comercial Precisa de Manutenção Urgente",
    excerpt:
      "Disjuntores desarmando, cheiro de queimado, luzes piscando: conheça os principais sinais de alerta elétrico que sua empresa não deve ignorar.",
    metaDescription:
      "Conheça 5 sinais de alerta que indicam que sua instalação elétrica comercial precisa de manutenção urgente, antes que se transformem em uma emergência.",
    date: "2026-06-20",
    readTime: "5 min de leitura",
    category: "Manutenção Elétrica",
    intro: [
      "Problemas elétricos raramente aparecem do nada — na maioria dos casos, há sinais de alerta antes de uma falha grave acontecer. O desafio é que, no dia a dia de uma empresa, esses sinais costumam ser ignorados ou tratados como \"normais\", até que se tornam uma emergência real.",
      "A seguir, listamos cinco sinais que indicam que sua instalação elétrica comercial merece uma avaliação técnica o quanto antes.",
    ],
    sections: [
      {
        heading: "1. Disjuntores que desarmam com frequência",
        paragraphs: [
          "Um disjuntor desarma para proteger o circuito contra sobrecarga ou curto-circuito — é o comportamento esperado dele. O problema é quando isso passa a acontecer com frequência, sem uma causa óbvia (como ligar muitos equipamentos ao mesmo tempo). Isso geralmente indica sobrecarga estrutural do circuito, um equipamento com defeito puxando corrente em excesso, ou até um princípio de curto-circuito em algum ponto da instalação.",
        ],
      },
      {
        heading: "2. Cheiro de queimado ou fiação superaquecida",
        paragraphs: [
          "Esse é um dos sinais mais sérios e não deve ser ignorado em hipótese alguma. Cheiro de plástico queimado perto de tomadas, quadros ou fiação pode indicar superaquecimento por sobrecarga, conexões soltas ou isolamento comprometido — situações com risco real de princípio de incêndio.",
          "Se sua empresa perceber esse sinal, o ideal é desligar o circuito afetado (se for seguro fazer isso) e acionar atendimento elétrico emergencial imediatamente.",
        ],
      },
      {
        heading: "3. Luzes piscando ou oscilação de tensão",
        paragraphs: [
          "Lâmpadas que piscam sem padrão aparente, ou equipamentos eletrônicos que reiniciam sozinhos, costumam indicar oscilação de tensão na rede elétrica interna. Isso pode ter origem em conexões mal feitas, sobrecarga da instalação ou problemas no quadro de distribuição — e, além de incômodo, pode danificar equipamentos sensíveis ao longo do tempo.",
        ],
      },
      {
        heading: "4. Tomadas ou interruptores quentes ao toque",
        paragraphs: [
          "Tomadas, interruptores ou disjuntores que ficam visivelmente quentes ao toque são sinal de resistência elétrica anormal em algum ponto da conexão — geralmente causada por fios soltos, oxidação ou sobrecarga. Esse tipo de aquecimento tende a piorar progressivamente até resultar em falha ou até em incêndio.",
        ],
      },
      {
        heading: "5. Quadro elétrico antigo, sem modernização",
        paragraphs: [
          "Quadros elétricos com muitos anos de uso, sem qualquer atualização, muitas vezes não foram dimensionados para a demanda energética atual da empresa — especialmente se houve expansão de equipamentos, maquinário ou climatização ao longo do tempo. Um quadro subdimensionado é uma fonte constante de sobrecarga e risco, mesmo sem apresentar sintomas visíveis no dia a dia.",
        ],
      },
    ],
    conclusion: [
      "Se sua empresa identificou um ou mais desses sinais, o próximo passo é agendar uma avaliação técnica — antes que o problema evolua para uma parada não programada ou, pior, um acidente. A Soltec realiza diagnóstico e manutenção elétrica comercial em Campinas e região, com atendimento emergencial disponível quando necessário.",
    ],
  },
  {
    slug: "laudo-tecnico-trt",
    title: "O Que é Laudo Técnico com TRT e Quando Ele é Exigido",
    excerpt:
      "Entenda o que é o laudo técnico elétrico, o que significa a TRT e em quais situações esse documento costuma ser exigido de empresas e condomínios.",
    metaDescription:
      "O que é laudo técnico elétrico com TRT, para que serve e quando seguradoras, o Corpo de Bombeiros e a fiscalização costumam exigir esse documento.",
    date: "2026-06-12",
    readTime: "6 min de leitura",
    category: "Documentação Técnica",
    intro: [
      "Se você já precisou renovar uma apólice de seguro empresarial, regularizar um AVCB ou responder a uma auditoria de segurança, provavelmente já ouviu falar em \"laudo técnico com TRT\". Mas o que esse documento realmente significa, e por que ele é tão importante para empresas e condomínios?",
      "Neste artigo, explicamos o que é esse laudo, o que ele geralmente contém e em quais situações costuma ser solicitado.",
    ],
    sections: [
      {
        heading: "O que é um laudo técnico elétrico?",
        paragraphs: [
          "O laudo técnico elétrico é um documento produzido por um profissional habilitado, que atesta as condições reais de uma instalação elétrica em um determinado momento: se ela está em conformidade com as normas técnicas vigentes (como a NBR-5410), se apresenta riscos, e quais eventuais correções são recomendadas.",
          "Diferente de uma simples visita técnica, o laudo é um registro formal, com validade documental — é o que permite comprovar, perante terceiros, que a instalação foi de fato avaliada por um profissional qualificado.",
        ],
      },
      {
        heading: "O que significa a TRT nesse contexto",
        paragraphs: [
          "A TRT acompanha o laudo técnico como o registro formal de responsabilidade técnica do profissional que realizou a avaliação — vinculando aquele documento a um responsável identificável e habilitado. Isso dá ao laudo peso legal e credibilidade perante seguradoras, órgãos de fiscalização e processos de auditoria.",
          "Na prática, um laudo sem esse tipo de responsabilidade técnica formal tem valor muito limitado — é basicamente uma opinião técnica sem lastro documental, o que geralmente não é aceito pelas instituições que exigem esse tipo de comprovação.",
        ],
      },
      {
        heading: "Quando o laudo técnico costuma ser exigido",
        paragraphs: [
          "Existem diversas situações comuns em que empresas e condomínios precisam apresentar esse documento:",
        ],
        list: [
          "Renovação de apólices de seguro empresarial ou condominial",
          "Processos de regularização do AVCB (Auto de Vistoria do Corpo de Bombeiros)",
          "Auditorias de segurança do trabalho ou de conformidade normativa",
          "Devido diligência em processos de compra, venda ou locação de imóveis comerciais",
          "Prestação de contas em assembleias de condomínio, quando há questionamento sobre a segurança elétrica do prédio",
        ],
      },
      {
        heading: "O que geralmente compõe um laudo técnico completo",
        paragraphs: [
          "Um laudo bem elaborado costuma incluir a identificação da instalação avaliada, a metodologia utilizada na inspeção, os pontos de não conformidade encontrados (se houver), fotos e evidências técnicas, e as recomendações de correção, quando aplicável. Esse nível de detalhe é o que torna o documento útil não só para cumprir uma exigência burocrática, mas também como guia real para priorizar manutenções.",
        ],
      },
    ],
    conclusion: [
      "Ter esse tipo de documentação em dia evita surpresas desagradáveis na hora de renovar um seguro, regularizar um AVCB ou responder a uma fiscalização. A Soltec emite laudo técnico com TRT em todos os seus serviços de manutenção e instalação elétrica, para empresas e condomínios em Campinas e região.",
    ],
  },
  {
    slug: "nr-12-seguranca-maquinas-equipamentos",
    title: "NR-12: Segurança em Máquinas e Equipamentos Elétricos Industriais",
    excerpt:
      "Entenda o que é a NR-12, como ela se relaciona com a segurança elétrica industrial e por que sua adequação é essencial para operações fabris.",
    metaDescription:
      "O que é a NR-12, como essa norma se aplica a máquinas e equipamentos elétricos industriais e o que sua empresa precisa saber para estar em conformidade.",
    date: "2026-06-05",
    readTime: "6 min de leitura",
    category: "Normas Técnicas",
    intro: [
      "Em ambientes industriais, a segurança elétrica não se limita à fiação e aos quadros de distribuição — ela também está diretamente ligada à forma como máquinas e equipamentos são projetados, instalados e operados. É aí que entra a NR-12, uma norma frequentemente citada junto com a NR-10, mas com um foco diferente e complementar.",
      "Neste artigo, explicamos o que é a NR-12, como ela se relaciona com as instalações elétricas industriais e por que a adequação a essa norma é importante para qualquer operação fabril.",
    ],
    sections: [
      {
        heading: "O que é a NR-12?",
        paragraphs: [
          "A NR-12 é a norma regulamentadora que trata da segurança no trabalho em máquinas e equipamentos, estabelecendo requisitos mínimos para prevenir acidentes durante todo o ciclo de vida desses equipamentos: fabricação, importação, instalação, operação, manutenção, inspeção e desativação.",
          "Diferente da NR-10, que foca especificamente em instalações e serviços elétricos, a NR-12 tem um escopo mais amplo, cobrindo riscos mecânicos, mas com forte interseção elétrica — já que boa parte dos sistemas de proteção de máquinas (sensores, intertravamentos, botões de emergência, painéis de comando) são sistemas elétricos e eletrônicos.",
        ],
      },
      {
        heading: "Onde a NR-12 e a segurança elétrica se encontram",
        paragraphs: [
          "Muitos dos requisitos da NR-12 dependem diretamente de uma instalação elétrica bem projetada e mantida:",
        ],
        list: [
          "Sistemas de parada de emergência, que precisam estar corretamente instalados e funcionais",
          "Dispositivos de intertravamento elétrico em proteções móveis de máquinas",
          "Painéis de comando com sinalização e proteção adequadas contra acesso indevido",
          "Aterramento correto de máquinas e equipamentos, prevenindo choques elétricos",
          "Manutenção periódica dos sistemas elétricos que sustentam os dispositivos de segurança da máquina",
        ],
      },
      {
        heading: "Riscos de negligenciar essa integração",
        paragraphs: [
          "Uma máquina pode até ter todos os dispositivos de segurança mecânicos previstos por projeto, mas se o sistema elétrico que os alimenta ou controla estiver com problemas — um sensor mal conectado, um painel de comando com falha intermitente —, a proteção deixa de funcionar como deveria, mesmo estando fisicamente presente.",
          "Por isso, a manutenção elétrica industrial não deve ser vista de forma isolada da segurança operacional das máquinas: as duas estão profundamente interligadas, e negligenciar uma compromete a outra.",
        ],
      },
      {
        heading: "Como manter a conformidade ao longo do tempo",
        paragraphs: [
          "Adequação à NR-12 não é um projeto único, executado uma vez e esquecido — máquinas e sistemas de segurança precisam de inspeção e manutenção periódica para continuar funcionando como projetado. Isso inclui testes regulares dos sistemas de parada de emergência, verificação de intertravamentos e manutenção preventiva dos painéis elétricos que sustentam esses dispositivos.",
        ],
      },
    ],
    conclusion: [
      "Uma indústria segura depende de máquinas bem protegidas e sistemas elétricos bem mantidos, trabalhando juntos. A Soltec atua com adequação a NR-10, NR-12 e NBR-5410 em instalações industriais em Campinas e região, com laudo técnico para comprovar a conformidade da sua operação.",
    ],
  },
  {
    slug: "termografia-eletrica-identificar-falhas",
    title: "Termografia Elétrica: Como Identificar Falhas Antes Que Aconteçam",
    excerpt:
      "Entenda como a termografia elétrica funciona, por que ela é usada em manutenção preditiva e como ajuda a evitar paradas não programadas.",
    metaDescription:
      "O que é termografia elétrica, como ela funciona na prática e por que essa técnica de manutenção preditiva ajuda a evitar falhas e paradas não programadas.",
    date: "2026-05-28",
    readTime: "5 min de leitura",
    category: "Manutenção Elétrica",
    intro: [
      "Nem toda falha elétrica dá aviso visível antes de acontecer — muitas vezes, o primeiro sinal de um problema sério é a própria falha. É justamente para antecipar esse tipo de situação que existe a termografia elétrica, uma técnica de manutenção preditiva cada vez mais usada por empresas que levam a sério a continuidade da sua operação.",
      "Neste artigo, explicamos o que é a termografia, como ela funciona e por que pode ser uma ferramenta valiosa dentro de um plano de manutenção elétrica.",
    ],
    sections: [
      {
        heading: "O que é termografia elétrica?",
        paragraphs: [
          "A termografia é uma técnica de inspeção que utiliza câmeras térmicas para captar a temperatura de componentes elétricos sem precisar tocá-los ou desligar o sistema. Como conexões soltas, sobrecargas e componentes com desgaste tendem a gerar calor acima do normal antes de falhar completamente, a termografia consegue identificar esses pontos de risco enquanto o equipamento ainda está funcionando.",
        ],
      },
      {
        heading: "Por que ela é considerada manutenção preditiva",
        paragraphs: [
          "Diferente da manutenção preventiva tradicional (baseada em cronograma fixo) e da corretiva (baseada em reagir a uma falha já ocorrida), a manutenção preditiva se baseia em dados reais de condição do equipamento para prever quando uma intervenção será necessária. A termografia é uma das ferramentas mais usadas nesse modelo, porque consegue detectar anomalias de temperatura muito antes que se tornem um problema visível ou audível.",
        ],
      },
      {
        heading: "Onde a termografia costuma ser mais útil",
        paragraphs: [
          "Alguns pontos costumam se beneficiar especialmente dessa técnica:",
        ],
        list: [
          "Painéis elétricos de comando e força, onde conexões soltas são comuns com o tempo",
          "Subestações e transformadores, componentes críticos para a continuidade da operação",
          "Disjuntores e barramentos, especialmente em instalações com carga elevada",
          "Motores elétricos industriais, onde o superaquecimento pode indicar desgaste de rolamentos ou sobrecarga",
        ],
      },
      {
        heading: "Vantagens práticas para a operação",
        paragraphs: [
          "Como a inspeção termográfica não exige desligar o sistema, ela pode ser realizada sem interromper a operação da empresa — o que é especialmente valioso em indústrias com produção contínua, onde qualquer parada tem custo direto. Além disso, por detectar problemas antes que evoluam para uma falha, ajuda a planejar as correções com antecedência, em vez de lidar com uma emergência.",
        ],
      },
    ],
    conclusion: [
      "Incorporar a termografia elétrica a um plano de manutenção preventiva é uma forma eficaz de reduzir o risco de paradas não programadas. A Soltec oferece termografia elétrica como parte de seus serviços de manutenção industrial, ajudando empresas em Campinas e região a identificar riscos antes que se tornem um problema real.",
    ],
  },
  {
    slug: "modernizacao-quadros-eletricos",
    title: "Modernização de Quadros Elétricos: Quando Vale a Pena Trocar",
    excerpt:
      "Descubra os sinais de que o quadro elétrico da sua empresa ou condomínio está desatualizado e quando a modernização se torna necessária.",
    metaDescription:
      "Quando modernizar o quadro elétrico da sua empresa ou condomínio? Conheça os sinais de que a instalação está desatualizada e os riscos de adiar a troca.",
    date: "2026-05-15",
    readTime: "6 min de leitura",
    category: "Instalação Elétrica",
    intro: [
      "O quadro elétrico é, de certa forma, o coração da instalação elétrica de um imóvel comercial ou industrial — é ele que distribui e protege a energia que alimenta toda a operação. Mesmo assim, é comum que quadros antigos permaneçam em uso por décadas, sem qualquer avaliação sobre se ainda atendem à demanda real da empresa.",
      "Neste artigo, explicamos os principais sinais de que um quadro elétrico está desatualizado e por que a modernização, quando necessária, não deve ser adiada.",
    ],
    sections: [
      {
        heading: "Por que quadros antigos se tornam um problema",
        paragraphs: [
          "Um quadro elétrico é dimensionado para a demanda de energia existente no momento da sua instalação. Ao longo dos anos, é comum que empresas cresçam, adicionem novos equipamentos, ampliem áreas climatizadas ou incorporem maquinário mais robusto — mudanças que aumentam a demanda elétrica real, muitas vezes sem que o quadro original seja revisado.",
          "Quando isso acontece, o quadro passa a operar próximo ou acima da sua capacidade projetada, o que aumenta o risco de sobrecarga, superaquecimento e falhas — mesmo que, aparentemente, tudo continue funcionando no dia a dia.",
        ],
      },
      {
        heading: "Sinais de que é hora de modernizar",
        paragraphs: [
          "Alguns indicadores costumam apontar para a necessidade de modernização:",
        ],
        list: [
          "Disjuntores desarmando com frequência, mesmo sem uso excessivo aparente",
          "Quadro com componentes visivelmente antigos, enferrujados ou improvisados",
          "Ampliações recentes na empresa (novos equipamentos, climatização, maquinário) sem revisão do quadro",
          "Dificuldade em encontrar peças de reposição para componentes muito antigos",
          "Ausência de disjuntores diferenciais residuais (DR), item de segurança hoje considerado padrão",
        ],
      },
      {
        heading: "Os riscos de adiar a modernização",
        paragraphs: [
          "Adiar a modernização de um quadro elétrico desatualizado não elimina o risco — apenas o posterga. Com o tempo, a probabilidade de uma falha corretiva emergencial aumenta, geralmente no pior momento possível: durante um pico de produção, um evento importante ou um período de alta demanda.",
          "Além do risco operacional, quadros desatualizados também dificultam a obtenção de laudos técnicos favoráveis, o que pode complicar renovações de seguro ou processos de regularização.",
        ],
      },
      {
        heading: "O que uma modernização de quadro costuma envolver",
        paragraphs: [
          "Um projeto de modernização bem-feito começa com um levantamento da demanda elétrica real da empresa, seguido pelo redimensionamento dos componentes de proteção, atualização para dispositivos mais modernos e seguros, organização física do quadro e, ao final, testes de segurança para validar o funcionamento correto de todo o sistema.",
        ],
      },
    ],
    conclusion: [
      "Um quadro elétrico moderno e bem dimensionado é a base de uma instalação segura e preparada para o crescimento da empresa. A Soltec realiza modernização de quadros elétricos para empresas e condomínios em Campinas e região, com laudo técnico ao final do serviço.",
    ],
  },
  {
    slug: "energia-emergencia-geradores-nobreaks",
    title: "Energia de Emergência: Geradores e Nobreaks Para Continuidade Operacional",
    excerpt:
      "Entenda a diferença entre geradores e nobreaks, e como sistemas de energia de emergência protegem sua empresa contra quedas de energia.",
    metaDescription:
      "Geradores e nobreaks: entenda as diferenças, quando cada um é indicado e como sistemas de energia de emergência protegem a continuidade da sua empresa.",
    date: "2026-05-05",
    readTime: "6 min de leitura",
    category: "Instalação Elétrica",
    intro: [
      "Uma queda de energia pode custar caro para qualquer empresa — seja pela interrupção da produção, perda de dados, danos a equipamentos sensíveis ou simplesmente pela impossibilidade de atender clientes durante o período sem luz. É por isso que sistemas de energia de emergência, como geradores e nobreaks, são cada vez mais vistos como parte essencial da infraestrutura elétrica empresarial, não como um luxo.",
      "Neste artigo, explicamos a diferença entre esses dois sistemas e como decidir qual (ou quais) faz sentido para a sua operação.",
    ],
    sections: [
      {
        heading: "Nobreak: proteção imediata e de curta duração",
        paragraphs: [
          "O nobreak (também chamado de UPS, do inglês \"uninterruptible power supply\") entra em ação instantaneamente quando a energia da rede cai, alimentando os equipamentos conectados a partir de uma bateria interna. Sua principal função não é sustentar a operação por horas, e sim garantir que não haja nenhuma interrupção perceptível — o que é essencial para proteger servidores, computadores, sistemas de segurança e outros equipamentos sensíveis a quedas bruscas de energia.",
          "Na maioria dos casos, o nobreak oferece autonomia de minutos a poucas horas, dependendo da capacidade da bateria e da carga conectada — tempo suficiente para um desligamento seguro dos sistemas ou para aguardar a entrada de um gerador.",
        ],
      },
      {
        heading: "Gerador: continuidade operacional por períodos mais longos",
        paragraphs: [
          "O gerador, por sua vez, é indicado para manter a operação funcionando por períodos mais longos durante uma falta de energia — desde algumas horas até dias, dependendo do combustível disponível e da demanda. Diferente do nobreak, o gerador não entra em ação instantaneamente: há um pequeno intervalo (geralmente segundos) até que ele seja acionado e estabilize o fornecimento.",
          "Por esse motivo, é comum que operações críticas combinem os dois sistemas: o nobreak cobre a transição instantânea, e o gerador assume a partir de alguns segundos depois, sustentando a operação enquanto a energia da rede não retorna.",
        ],
      },
      {
        heading: "Quem mais se beneficia desse tipo de sistema",
        paragraphs: [
          "Empresas com operação sensível a interrupções costumam ser as que mais se beneficiam de um sistema de energia de emergência bem projetado:",
        ],
        list: [
          "Indústrias com processos contínuos, onde uma parada não programada gera perdas significativas",
          "Centros de distribuição, que dependem de sistemas de refrigeração ou automação",
          "Escritórios e comércios que dependem de sistemas digitais para operar (vendas, atendimento, dados)",
          "Condomínios, para manter elevadores, iluminação de emergência e sistemas de segurança funcionando",
        ],
      },
      {
        heading: "A instalação correta é tão importante quanto o equipamento",
        paragraphs: [
          "Um gerador ou nobreak mal dimensionado ou mal instalado pode não oferecer a proteção esperada — seja por não suportar a carga real da operação, seja por falhas na transição automática entre a rede elétrica e o sistema de emergência. Por isso, o dimensionamento e a instalação desses sistemas devem ser feitos por profissionais qualificados, alinhados à realidade elétrica específica da empresa.",
        ],
      },
    ],
    conclusion: [
      "Investir em energia de emergência bem projetada é uma forma concreta de proteger a continuidade da sua operação. A Soltec realiza instalação de sistemas de energia emergencial (nobreaks e geradores) para empresas em Campinas e região, integrados à instalação elétrica existente.",
    ],
  },
  {
    slug: "avcb-instalacoes-eletricas-sindicos",
    title: "AVCB e Instalações Elétricas: O Que Síndicos e Administradoras Precisam Saber",
    excerpt:
      "Entenda a relação entre o AVCB e as instalações elétricas do condomínio, e o papel do síndico na regularização e manutenção desse documento.",
    metaDescription:
      "AVCB e instalações elétricas: entenda a relação entre os dois, o papel do síndico na regularização e como manter a documentação elétrica do condomínio em dia.",
    date: "2026-04-22",
    readTime: "6 min de leitura",
    category: "Gestão Predial",
    intro: [
      "Para síndicos e administradoras, o AVCB (Auto de Vistoria do Corpo de Bombeiros) costuma ser um dos assuntos mais recorrentes — e também um dos que mais gera dúvidas quando o assunto envolve as instalações elétricas do prédio. Afinal, qual é exatamente a relação entre os dois?",
      "Neste artigo, explicamos como as instalações elétricas se conectam ao processo de regularização do AVCB e o que síndicos e administradoras podem fazer para manter essa documentação sempre em dia.",
    ],
    sections: [
      {
        heading: "O que é o AVCB, resumidamente",
        paragraphs: [
          "O AVCB é o documento emitido pelo Corpo de Bombeiros que atesta que uma edificação atende às exigências de segurança contra incêndio previstas na legislação — cobrindo desde sistemas de combate a incêndio até saídas de emergência e, especialmente relevante aqui, as condições das instalações elétricas do prédio.",
        ],
      },
      {
        heading: "Por que as instalações elétricas fazem parte dessa avaliação",
        paragraphs: [
          "Falhas elétricas estão entre as causas mais comuns de incêndios em edificações — fiação sobrecarregada, conexões mal feitas e quadros desatualizados são fatores de risco reais. Por isso, é comum que o processo de regularização (ou renovação) do AVCB exija, como parte da documentação, um laudo técnico que ateste a segurança da instalação elétrica do prédio.",
          "Sem esse laudo em conformidade, a regularização do AVCB pode ficar travada, mesmo que os demais requisitos do edifício (como extintores e saídas de emergência) estejam corretos.",
        ],
      },
      {
        heading: "O papel do síndico nesse processo",
        paragraphs: [
          "O síndico é, na prática, o responsável por garantir que o condomínio mantenha a documentação de segurança em dia — o que inclui acionar profissionais qualificados para realizar a vistoria elétrica, obter o laudo técnico necessário e acompanhar eventuais correções apontadas nesse processo.",
          "Isso costuma envolver também prestação de contas em assembleia: apresentar aos condôminos o status da documentação, os investimentos necessários em manutenção elétrica e o cronograma para regularização, quando aplicável.",
        ],
      },
      {
        heading: "Boas práticas para não deixar a documentação vencer",
        paragraphs: [
          "Alguns cuidados simples ajudam a evitar surpresas de última hora na renovação do AVCB:",
        ],
        list: [
          "Manter um calendário de vencimento da documentação e da manutenção elétrica, com antecedência para renovação",
          "Agendar manutenção preventiva programada, em vez de aguardar problemas aparecerem",
          "Guardar todos os laudos técnicos anteriores organizados, para consulta e comparação histórica",
          "Priorizar profissionais que emitam laudo técnico com TRT, documento normalmente aceito nesses processos",
        ],
      },
    ],
    conclusion: [
      "Manter as instalações elétricas do condomínio em conformidade é essencial não só para a regularização do AVCB, mas para a segurança real de moradores e colaboradores. A Soltec realiza vistoria e laudo técnico de instalações elétricas prediais para condomínios em Campinas e região, com relatórios pensados para facilitar a prestação de contas do síndico.",
    ],
  },
  {
    slug: "como-escolher-empresa-manutencao-eletrica",
    title: "Como Escolher uma Empresa de Manutenção Elétrica Para Sua Empresa",
    excerpt:
      "Critérios importantes para avaliar antes de contratar uma empresa de manutenção elétrica industrial, comercial ou predial.",
    metaDescription:
      "O que avaliar antes de contratar uma empresa de manutenção elétrica: certificações, documentação, atendimento emergencial e outros critérios importantes.",
    date: "2026-04-10",
    readTime: "6 min de leitura",
    category: "Gestão de Manutenção",
    intro: [
      "Contratar uma empresa de manutenção elétrica é uma decisão que envolve mais do que resolver um problema pontual — trata-se de colocar em mãos de terceiros a segurança das instalações elétricas da sua empresa, com todos os riscos e responsabilidades que isso envolve. Ainda assim, muitas empresas escolhem esse fornecedor com pouca análise, priorizando apenas disponibilidade imediata.",
      "Neste artigo, reunimos critérios importantes para avaliar antes de fechar esse tipo de contrato, seja para uma manutenção pontual ou um contrato recorrente.",
    ],
    sections: [
      {
        heading: "Certificações e capacitação da equipe",
        paragraphs: [
          "O primeiro ponto a verificar é se a equipe técnica possui capacitação formal para o tipo de serviço necessário — especialmente treinamento NR-10 (obrigatório para qualquer atividade em instalações elétricas) e, quando aplicável ao seu tipo de operação, NR-12. Não hesite em pedir essa comprovação antes de fechar um contrato: empresas sérias têm essa documentação organizada e disponível.",
        ],
      },
      {
        heading: "Capacidade de emitir laudo técnico com responsabilidade formal",
        paragraphs: [
          "Uma empresa de manutenção elétrica preparada para atender negócios deve conseguir emitir laudo técnico com TRT ao final dos serviços — documento essencial para seguradoras, processos de AVCB e auditorias. Se o fornecedor não oferece esse tipo de documentação, isso pode indicar uma operação menos estruturada do ponto de vista técnico e formal.",
        ],
      },
      {
        heading: "Experiência com o tipo específico de instalação",
        paragraphs: [
          "Manutenção elétrica industrial, comercial e predial têm particularidades diferentes — uma indústria com operação contínua tem exigências de segurança e continuidade distintas de um condomínio residencial, por exemplo. Vale perguntar diretamente sobre a experiência da empresa com operações parecidas com a sua, e se possível, pedir referências de clientes de porte e segmento semelhantes.",
        ],
      },
      {
        heading: "Atendimento emergencial disponível",
        paragraphs: [
          "Problemas elétricos não seguem horário comercial. Uma empresa preparada para atender negócios deve ter capacidade de resposta emergencial, especialmente para falhas que coloquem a operação em risco — seja uma indústria com produção parada, seja um comércio sem energia durante o horário de atendimento.",
        ],
      },
      {
        heading: "Transparência e comunicação",
        paragraphs: [
          "Por fim, vale observar como a empresa se comunica desde o primeiro contato: se explica claramente o diagnóstico encontrado, se apresenta as opções de forma compreensível (mesmo para quem não é da área técnica), e se demonstra disposição para esclarecer dúvidas. Esse tipo de transparência costuma refletir a qualidade do relacionamento ao longo de um contrato de manutenção recorrente.",
        ],
      },
    ],
    conclusion: [
      "Escolher bem o parceiro de manutenção elétrica é um investimento na segurança e na continuidade da sua operação. A Soltec atua há mais de 20 anos com manutenção e instalação elétrica industrial, comercial e predial em Campinas e região, com equipe certificada e laudo técnico em todos os serviços.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
