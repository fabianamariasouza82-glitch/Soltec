import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageMeta from "../PageMeta";
import { blogPosts } from "../content/blogPosts";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

export default function BlogIndex() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageMeta
        title="Blog | Dicas e Conteúdo sobre Manutenção Elétrica | Soltec"
        description="Artigos sobre manutenção e instalação elétrica industrial, comercial e predial: normas técnicas, boas práticas e dicas para empresas em Campinas e região."
        path="/blog"
      />
      <Header />
      <main>
        <section className="relative text-white py-16 md:py-24 bg-[#003366]">
          <div className="container">
            <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Blog Soltec
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Conteúdo técnico sobre manutenção e instalação elétrica para ajudar sua empresa a tomar decisões
              mais seguras e informadas.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            {blogPosts.length === 0 ? (
              <p className="text-gray-600 text-center">Em breve, novos artigos por aqui.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col cursor-pointer">
                      <div className="p-6 flex flex-col flex-1">
                        <span className="text-xs font-semibold text-[#ff6600] uppercase tracking-wide mb-3">
                          {post.category}
                        </span>
                        <h2 className="text-xl font-bold text-[#003366] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                          {post.title}
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                          <span className="flex items-center gap-1">
                            <CalendarDays size={14} />
                            {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {post.readTime}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-[#003366] font-semibold text-sm">
                          Ler artigo <ArrowRight size={16} />
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
