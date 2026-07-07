# Plano de SEO B2B — Soltec Instalações Elétricas
### Foco: dominar buscas de manutenção/instalação elétrica industrial e predial em Campinas e região

---

## 1. O que já corrigi no código do site novo

| Problema | Situação | Correção |
|---|---|---|
| `<html lang="en">` num site em português | Confunde o Google sobre o idioma/país do conteúdo | Alterado para `lang="pt-BR"` |
| Title/meta description genéricos | Não usavam os termos que seus clientes realmente buscam | Reescritos com foco em "manutenção elétrica industrial/predial Campinas" |
| Dados fantasiados no Schema.org (telefone, CEP, redes sociais) | Google cruza esses dados com seu Google Business Profile — inconsistência prejudica SEO local | Substituídos pelos dados reais que encontrei: telefone +55 19 99425-2525, Rua Antônio Lapa - Campinas, Facebook oficial |
| `areaServed` só citava "Campinas" e "Região de Campinas" (genérico, sem valor de SEO) | O site atual já atende Sumaré, Paulínia, Valinhos, Vinhedo, Americana, Nova Odessa, Santa Bárbara D'Oeste, Monte Mor, Limeira, Jaguariúna e Indaiatuba, mas isso não aparecia em lugar nenhum | Adicionei todas as cidades no schema — isso ajuda a aparecer em buscas dessas cidades também |
| Sem `sitemap.xml` | Dificulta a indexação completa | Criei um sitemap base (ver seção 4 — depende de criar as páginas) |
| Sem `canonical`, `og:url`, `og:locale` | Enfraquece o compartilhamento e pode gerar conteúdo duplicado | Adicionados |

**Pendências que preciso de você para fechar:**
- Número e CEP completos do endereço (só achei "Rua Antônio Lapa, Campinas")
- Confirmar se o WhatsApp é o mesmo número (19) 99425-2525
- Confirmar se existe Instagram ativo da empresa (o schema anterior linkava um perfil que não existe)

---

## 2. Diagnóstico da concorrência real em Campinas

Pesquisei quem realmente aparece bem hoje para os termos que interessam a vocês:

**"Eletricista Campinas" (rede de 3 domínios quase idênticos — eletricistacampinas.com.br, eletricistascampinas.com.br, eletricista24h.tec.br)**
Dominam o volume residencial/comercial pequeno. Pontos fortes: página por bairro, FAQ extenso, depoimentos reais com nome do cliente, blog ativo, WhatsApp flutuante, CTAs de orçamento grátis em todo canto.

**RA Energia e Avance Manutenções** (concorrentes diretos B2B)
Menores, mas com foco claro no público empresarial: H1 explícito "Manutenção e Instalações Elétricas em Campinas e Região", formulário de orçamento logo no topo, fotos reais de serviço.

**EIZ Engenharia, Sonatech, ETHANN, DM Solution** (nicho industrial puro)
Conteúdo mais técnico (NR-10, NR-12, NBR-5410, NBR-5419, subestações, termografia), mas paginas isoladas/fracas estruturalmente — esse é o ponto mais fraco deles e a maior brecha pra vocês.

**Diagnóstico central:** ninguém que atende bem indústrias grandes (o público que vocês já provam atender — IBM, Coca-Cola, Audi, Tramontina) tem ao mesmo tempo *conteúdo técnico profundo* + *estrutura de site igual à dos players residenciais* (páginas por serviço, FAQ, depoimentos, blog). Essa combinação é a brecha aberta.

---

## 3. O problema estrutural mais importante do site novo

O site que a Manus construiu é **uma única página** (home com âncoras: #servicos, #clientes, #sobre, #contato). Isso é a maior limitação para SEO, porque:

- O Google não consegue ranquear uma página só para "manutenção elétrica industrial Campinas" **e** "instalação elétrica predial Campinas" **e** "montagem de painéis elétricos Campinas" ao mesmo tempo — cada intenção de busca merece sua própria página com título, meta description e conteúdo dedicados.
- Todos os concorrentes fortes (residenciais e industriais) têm páginas de serviço separadas.

**Recomendação prioritária:** transformar o site de 1 página em ~6 páginas:
1. Home (visão geral + prova social)
2. Manutenção Elétrica Industrial em Campinas
3. Instalação Elétrica Predial/Condomínios em Campinas
4. Manutenção Elétrica Comercial em Campinas
5. Sobre a Soltec (certificações, tempo de mercado, equipe)
6. Blog (conteúdo técnico recorrente)

Cada uma dessas páginas mira um conjunto de palavras-chave diferente e pode ranquear de forma independente — é assim que os concorrentes ocupam múltiplas posições no Google ao mesmo tempo.

---

## 4. Palavras-chave prioritárias por página

| Página | Palavras-chave alvo |
|---|---|
| Industrial | manutenção elétrica industrial Campinas, eletricista industrial Campinas, NR-10, NR-12, montagem de painéis elétricos, subestação, termografia elétrica |
| Predial | instalação elétrica predial Campinas, manutenção elétrica condomínio, laudo elétrico condomínio, NBR-5410 |
| Comercial | manutenção elétrica comercial Campinas, manutenção preventiva empresas, quadro elétrico comercial |
| Home/Institucional | empresa de engenharia elétrica Campinas, serviços elétricos B2B Campinas e região |
| Blog | "quanto custa manutenção elétrica industrial", "como evitar queda de energia na fábrica", "o que é laudo NR-10", "manutenção preventiva x corretiva" |

---

## 5. Diferenciação B2B (o que usar como munição)

Vocês já têm o que a concorrência não tem — só falta expor isso no site:

- **Prova social pesada:** IBM, Coca-Cola, Audi, Tramontina, Medley, VLI, Cacau Show — nenhum concorrente pesquisado tem clientes desse porte visíveis. Isso deveria estar **acima da dobra** na home, não só numa seção lá embaixo.
- **Avaliações reais já existentes** no Google (vi comentários reais como o do cliente Reinaldo G. Aguilar) — hoje elas só aparecem no site antigo via widget Trustindex e não estão sendo usadas no site novo. Trazer 3-4 depoimentos reais (com nome, se autorizado) para a home aumenta muito a confiança E ajuda SEO (conteúdo único, palavras-chave naturais).
- **Certificações técnicas** (NR-10, NR-35 e o que mais vocês tiverem) — mencionar explicitamente no texto, não só implicitamente.

---

## 6. SEO técnico — checklist adicional (fora do que já corrigi)

- [ ] Resolver o problema de Captcha que bloqueia o rastreamento do site atual (identificado no relatório da Manus) antes de migrar
- [ ] Configurar redirecionamentos 301 do site antigo (WordPress) para as URLs equivalentes no site novo, para não perder a autoridade já indexada
- [ ] Otimizar imagens (compressão) — as fotos novas de eletricistas têm ~4MB cada, o que pode deixar o carregamento lento; recomendo comprimir para no máximo ~300-500KB antes de publicar
- [ ] Hospedar localmente os logos de clientes e as fotos (hoje ambos dependem de servidores externos — soltecnicas.com.br antigo e manus-storage)
- [ ] Adicionar dados estruturados de `Review` / `AggregateRating` quando tiverem os depoimentos reais organizados

## 7. SEO local (Google Business Profile) — ação fora do site

- [ ] Criar/reivindicar o Perfil da Empresa no Google com categoria principal "Eletricista" + categorias secundárias industriais
- [ ] Preencher todas as cidades atendidas na área de atendimento do perfil
- [ ] Subir fotos reais de obras/equipe
- [ ] Pedir avaliação a clientes recorrentes (o volume de reviews é um dos fatores mais fortes para o Local Pack, onde MZ Soluções e outros concorrentes hoje dominam)

## 8. Construção de autoridade (link building)

- [ ] Cadastro em diretórios B2B relevantes (StarOfService, GuiaFix, oHub) — apareceram bem posicionados na pesquisa e trazem backlink + leads diretos
- [ ] Parcerias com construtoras/administradoras de condomínio para troca de indicação/link
- [ ] Cases de clientes (com autorização) como conteúdo de blog/LinkedIn — gera backlink natural quando comentado por parceiros

---

## 9. Prioridade de execução (o que fazer primeiro)

1. **Agora:** publicar os ajustes de código já feitos (logo, clientes, uniformes, meta tags, schema)
2. **Antes de publicar:** decidir sobre a estrutura multi-página (maior impacto de SEO de tudo nesse plano)
3. **Semana 1-2:** Google Business Profile completo + pedir avaliações
4. **Semana 2-4:** criar as 3 páginas de serviço com conteúdo técnico real
5. **Mês 2 em diante:** blog com 2-4 artigos/mês nos temas de maior busca
