"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY, QUOTE_SERVICES } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import Input from "./ui/Input";
import Select from "./ui/Select";
import Textarea from "./ui/Textarea";
import Button from "./ui/Button";
import Badge from "./ui/Badge";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    service: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceName =
      QUOTE_SERVICES.find((s) => s.value === formData.service)?.label || formData.service;

    const message = `Olá! Gostaria de solicitar uma cotação:

*Nome:* ${formData.name}
*WhatsApp:* ${formData.whatsapp}
*Email:* ${formData.email}
*Serviço:* ${serviceName}
*Detalhes:* ${formData.details || "Nenhum detalhe adicional"}`;

    const url = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="cotacao" className="section-padding bg-white">
      <div className="container-main mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Info column */}
          <ScrollReveal direction="left">
            <Badge variant="accent" className="mb-4">
              Cotação Rápida
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 tracking-tight">
              Solicite seu orçamento em segundos
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Preencha o formulário e receba uma cotação personalizada direto no seu WhatsApp.
              Sem compromisso, sem burocracia.
            </p>

            <div className="space-y-4">
              {[
                { icon: "clock", text: "Resposta em menos de 5 minutos" },
                { icon: "shield", text: "Sem compromisso" },
                { icon: "truck", text: "Coleta grátis para planos mensais" },
                { icon: "star", text: "Garantia de satisfação" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Form column */}
          <ScrollReveal direction="right">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100"
                >
                  <div className="space-y-4">
                    <Input
                      id="quote-name"
                      label="Seu nome"
                      placeholder="Como podemos te chamar?"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Input
                      id="quote-whatsapp"
                      label="WhatsApp"
                      type="tel"
                      placeholder="(12) 99999-9999"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                    <Input
                      id="quote-email"
                      label="Email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <Select
                      id="quote-service"
                      label="Serviço desejado"
                      options={QUOTE_SERVICES}
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    />
                    <Textarea
                      id="quote-details"
                      label="Detalhes adicionais"
                      placeholder="Quantidade de peças, frequência desejada, observações..."
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="whatsapp"
                    size="lg"
                    className="w-full mt-6"
                    icon={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    }
                  >
                    Enviar Cotação pelo WhatsApp
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-success-50 rounded-2xl p-8 md:p-12 text-center border border-success/20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10, stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center"
                  >
                    <svg className="w-10 h-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Cotação enviada!
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Sua mensagem foi aberta no WhatsApp. Nossa equipe responderá em instantes.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", whatsapp: "", email: "", service: "", details: "" });
                    }}
                  >
                    Enviar nova cotação
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
