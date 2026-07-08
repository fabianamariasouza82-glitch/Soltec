import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

// TODO: sign up for free at https://formspree.io, create a form, and replace
// YOUR_FORM_ID below with the ID they give you (looks like "mjkbwxyz").
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-white scroll-mt-24 md:scroll-mt-28">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Entre em Contato
            </h2>
            <p className="text-gray-600 text-lg">
              Solicite um orçamento ou tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(19) 99999-9999"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva seu projeto ou dúvida..."
                  rows={5}
                  className="w-full"
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm">
                  Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.
                </p>
              )}

              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#ff6600] hover:bg-[#e55a00] text-white font-semibold py-3 text-base disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : "Enviar Solicitação"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
