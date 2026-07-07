# Site Soltécnicas

Site institucional da Soltec Instalações Elétricas — React + Vite, com páginas
dedicadas para SEO local (industrial, predial, comercial) em Campinas e região.

## ⚠️ Antes de publicar — pendências

1. **Duas imagens de serviço ainda quebradas.** `client/src/pages/Home.tsx`
   ainda referencia:
   - `/manus-storage/industrial-services_d6741ef1.png`
   - `/manus-storage/commercial-services_4dacaf69.png`

   Esses caminhos só funcionam dentro do editor da Manus. Pra resolver:
   abra o site no preview da Manus, clique com o botão direito em cada uma
   dessas duas imagens → "Salvar imagem como", e substitua os arquivos em
   `client/public/images/`, atualizando os dois `<img>`/`image=` correspondentes
   em `Home.tsx` para apontar para `/images/nome-do-arquivo.jpg`.

2. **Formulário de contato.** `client/src/components/ContactForm.tsx` está
   configurado para enviar via [Formspree](https://formspree.io) (gratuito,
   sem precisar de servidor). Crie uma conta grátis, crie um formulário, e
   troque `YOUR_FORM_ID` pela constante `FORMSPREE_ENDPOINT` no topo do
   arquivo pelo ID que o Formspree te der.

3. **Favicon.** Gerei um ícone simples (fundo azul + "S" branco) em
   `client/public/favicon.png` e `apple-touch-icon.png` como placeholder.
   Se quiser algo mais elaborado (o símbolo de raio mencionado no
   `ideas.md`), vale pedir pra Manus exportar um ícone quadrado dedicado.

4. **Analytics.** O script do Umami (analytics) foi removido do
   `client/index.html` porque dependia de variáveis de ambiente exclusivas
   da Manus. Se quiser análise de tráfego, adicione o Google Analytics,
   Plausible ou similar no `<head>` do `client/index.html`.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Build de produção (estático)

```bash
npm run build
```

Gera os arquivos finais em `dist/public/` — é isso que a Vercel/Netlify
publicam.

> Existe também `npm run build:server`, que empacota um servidor Express
> (`server/index.ts`) junto — só é necessário se você for hospedar em um
> VPS/Docker próprio em vez de Vercel/Netlify. Para deploy na Vercel/Netlify,
> **não precisa** dele.

## Publicando no GitHub

```bash
git init
git add .
git commit -m "Site Soltec - versão inicial"
```

Crie um repositório vazio em github.com/new (ex: `soltec-site`) e conecte:

```bash
git remote add origin https://github.com/SEU_USUARIO/soltec-site.git
git branch -M main
git push -u origin main
```

## Publicando na Vercel

1. Entre em [vercel.com](https://vercel.com) e conecte sua conta do GitHub.
2. "Add New Project" → selecione o repositório `soltec-site`.
3. A Vercel detecta Vite automaticamente. Confirme:
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
4. Deploy. Depois, em Project Settings → Domains, adicione
   `www.soltecnicas.com.br` e siga as instruções de DNS.

## Estrutura do projeto

```
client/src/
  App.tsx                          → rotas (wouter)
  PageMeta.tsx                     → título/descrição únicos por página
  components/
    Header.tsx, Footer.tsx, Hero.tsx, ContactForm.tsx, ServiceCard.tsx
    SEOHead.tsx                    → dados estruturados (Schema.org) globais
    WhatsAppButton.tsx             → botão flutuante pulsante
  pages/
    Home.tsx
    ManutencaoEletricaIndustrial.tsx
    InstalacaoEletricaPredial.tsx
    ManutencaoEletricaComercial.tsx
```

## Depois de publicar

- Submeter `sitemap.xml` no Google Search Console e Bing Webmaster Tools
- Configurar redirecionamento 301 do site WordPress antigo para as
  URLs novas
- Criar/otimizar o Google Business Profile com as cidades atendidas
- Ver `Plano_SEO_B2B_Soltec_Campinas.md` (documento à parte) para o
  plano estratégico completo
  
