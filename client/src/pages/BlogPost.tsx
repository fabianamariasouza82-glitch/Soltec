import { useParams, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PageMeta from "../PageMeta";
import { getPostBySlug } from "../content/blogPosts";
import { CalendarDays, Clock, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const path = `/blog/${post.slug}`;

  // Schema Article: identifica o conteúdo como um artigo jornalístico/
  // técnico para o Google, com autor, data de publicação e organização
  // responsável — reforça a página como conteúdo editorial legítimo.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Soltec Instalações Elétricas",
    },
    publisher: {
      "@type": "Organization",
      name: "Soltec Instalações Elétricas",
      logo: {
        "@type": "ImageObject",
        url: "https://www.soltecnicas.com.br/images/soltec-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.soltecnicas.com.br${path}`,
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageMeta
        title={`${post.title} | Blog Soltec`}
        description={post.metaDescription}
        path={path}
        schema={articleSchema}
      />
      <Header />
      <main>
        <section className="relative text-white py-16 md:py-20 bg-[#003366]">
          <div className="container max-w-3xl">
            <p className="text-sm text-white/70 mb-3">
              <Link href="/" className="hover:underline">Início</Link>{" / "}
              <Link href="/blog" className="hover:underline">Blog</Link>{" / "}
              {post.title}
            </p>
            <span className="text-xs font-semibold text-[#ff6600] uppercase tracking-wide">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold my-4 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1">
                <CalendarDays size={16} />
                {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="container max-w-3xl">
            <div className="space-y-4 mb-8">
              {post.intro.map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed text-lg">
                  {p}
                </p>
              ))}
            </div>

            {post.sections.map((section, i) => (
              <div key={i} className="mb-8">
                <h2 className="text-2xl font-bold text-[#003366] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-gray-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-4 space-y-2 list-disc list-inside">
                    {section.list.map((item, k) => (
                      <li key={k} className="text-gray-700 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="space-y-4 mb-8">
              {post.conclusion.map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed text-lg">
                  {p}
                </p>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
              <h3 className="text-xl font-bold text-[#003366] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Precisa de manutenção elétrica para sua empresa?
              </h3>
              <p className="text-gray-600 mb-6">
                Fale com a equipe da Soltec e solicite uma avaliação para sua operação em Campinas e região.
              </p>
              <a href="https://wa.me/5519994252525" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#ff6600] hover:bg-[#e55a00] text-white font-semibold px-8 py-3">
                  <PhoneCall size={18} className="mr-2" /> Falar no WhatsApp
                </Button>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-3">Veja também:</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/manutencao-eletrica-industrial-campinas" className="text-[#003366] font-medium hover:underline">
                  Manutenção Elétrica Industrial em Campinas
                </Link>
                <Link href="/manutencao-eletrica-comercial-campinas" className="text-[#003366] font-medium hover:underline">
                  Manutenção Elétrica Comercial em Campinas
                </Link>
                <Link href="/instalacao-eletrica-predial-campinas" className="text-[#003366] font-medium hover:underline">
                  Instalação Elétrica Predial em Campinas
                </Link>
                <Link href="/blog" className="text-[#003366] font-medium hover:underline">
                  Voltar ao Blog
                </Link>
              </div>
            </div>
          </div>
        </article>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
