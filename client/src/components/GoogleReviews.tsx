import ElfsightWidget from "@/components/ElfsightWidget";

export default function GoogleReviews() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            O que os nossos clientes dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Avaliações reais de clientes no Google.
          </p>
        </div>
        <ElfsightWidget />
      </div>
    </section>
  );
}
