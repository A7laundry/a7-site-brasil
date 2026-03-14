"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

export default function SaoJoseDosCamposPage() {
  const whatsappLink = getWhatsAppLink("sao-jose-dos-campos");

  return (
    <div className="min-h-screen bg-blue-950 text-white">
      <ServiceSchema name="Lavanderia em São José dos Campos" description="A7 Lavanderia — sede em São José dos Campos. Coleta e entrega em domicílio. Tapetes, sofás, roupas, cortinas e muito mais." slug="sao-jose-dos-campos" />
      <header className="fixed top-0 w-full z-50 bg-[#1D4ED8]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <img src="/logo-light.png" alt="A7 Lavanderia" className="h-8 w-auto" />
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1D4ED8] font-semibold px-5 py-2 rounded-full text-sm hover:bg-blue-50 transition-colors"
          >
            Agendar no WhatsApp
          </a>
        </div>
      </header>

      <section className="relative h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=80"
          alt="São José dos Campos"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/55 to-blue-950/10" />
        <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight max-w-2xl"
          >
            Lavanderia Profissional em São José dos Campos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-blue-100 max-w-xl leading-relaxed"
          >
            Nossa sede fica em SJC — coleta e entrega em domicílio em toda a cidade e região metropolitana
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1D4ED8] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              Agendar Coleta em SJC
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#1D4ED8] py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "SJC", label: "nossa sede" },
            { value: "48h", label: "prazo de entrega" },
            { value: "+5.000", label: "clientes atendidos" },
            { value: "Desde 2019", label: "na cidade" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold">{stat.value}</p>
              <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-blue-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Sede em São José dos Campos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📍",
                title: "Atendimento Local",
                desc: "Somos daqui. Nossa equipe conhece cada bairro de SJC e garante coleta no horário combinado.",
              },
              {
                icon: "🚗",
                title: "Coleta e Entrega Grátis",
                desc: "Buscamos e entregamos na sua casa sem custo adicional em toda São José dos Campos.",
              },
              {
                icon: "⚡",
                title: "Express em 24h",
                desc: "Para urgências, oferecemos serviço express com devolução em até 24 horas.",
              },
              {
                icon: "🏆",
                title: "5 Anos de Experiência",
                desc: "Desde 2019 servindo famílias e empresas de SJC com excelência reconhecida.",
              },
              {
                icon: "🧺",
                title: "Todos os Serviços",
                desc: "Roupas, tapetes, sofás, cortinas, edredons, tênis e muito mais — tudo em um único lugar.",
              },
              {
                icon: "📱",
                title: "Agendamento Fácil",
                desc: "Agende pelo WhatsApp em segundos. Confirmamos dia e hora que melhor se encaixa na sua rotina.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-blue-900/50 border border-blue-800 rounded-2xl p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-blue-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Serviços Disponíveis em SJC</h2>
          <p className="text-center text-blue-300 mb-12">Atendemos em todos os bairros de São José dos Campos</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Lavagem de Roupas", desc: "Roupas do dia a dia com carinho" },
              { name: "Higienização de Sofás", desc: "Extração úmida e anti-ácaros" },
              { name: "Lavagem de Tapetes", desc: "Preserva cores e fibras originais" },
              { name: "Higienização de Cortinas", desc: "Sem tirar da janela" },
              { name: "Roupas Delicadas", desc: "Seda, cashmere e peças de grife" },
              { name: "Tênis e Calçados", desc: "Higienização completa" },
            ].map((service) => (
              <div key={service.name} className="bg-blue-900/40 border border-blue-700 rounded-xl p-5 hover:border-[#1D4ED8] transition-colors">
                <h3 className="font-bold text-lg mb-1">{service.name}</h3>
                <p className="text-blue-300 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">O que Nossos Clientes Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rodrigo Mendes",
                city: "Jardim Aquarius, SJC",
                text: "Moro em SJC há 15 anos e nunca encontrei uma lavanderia tão eficiente. A coleta é sempre no horário e as roupas voltam impecáveis.",
              },
              {
                name: "Juliana Costa",
                city: "Vista Verde, SJC",
                text: "Indiquei para toda a minha família aqui em SJC. O serviço de higienização de sofá foi incrível — parece que ficou novo.",
              },
              {
                name: "Carlos Pereira",
                city: "Centro, SJC",
                text: "Empresário aqui em SJC. O plano empresarial da A7 resolveu a lavagem dos uniformes da minha equipe com prazo garantido.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-blue-900/50 border border-blue-800 rounded-2xl p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-blue-400 text-xs">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1D4ED8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Seu vizinho em São José dos Campos</h2>
          <p className="text-blue-200 mb-8 text-lg">Agende sua coleta agora e receba orçamento gratuito em minutos</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#1D4ED8] font-bold px-10 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Agendar Coleta Grátis
          </a>
        </div>
      </section>

      <section className="py-20 bg-blue-950">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Vocês atendem em qual região de São José dos Campos?",
                a: "Atendemos em toda a cidade de São José dos Campos — do Centro ao Aquarius, Urbanova, Vista Verde, Jardim Apolo e todos os bairros. Consulte no WhatsApp para confirmar sua área.",
              },
              {
                q: "Qual o prazo de entrega?",
                a: "O prazo padrão é de 48 horas para roupas e peças de médio porte. Para higienização de sofás e tapetes, realizamos no mesmo dia. Para urgências, temos serviço express em 24h.",
              },
              {
                q: "A coleta e entrega tem custo adicional?",
                a: "Não! A coleta e a entrega são gratuitas para clientes em São José dos Campos. Sem taxas surpresa.",
              },
              {
                q: "Como funciona o agendamento?",
                a: "É simples — entre em contato pelo WhatsApp, informe o serviço desejado e seu endereço. Confirmamos dia e horário em minutos.",
              },
              {
                q: "Vocês têm loja física em SJC?",
                a: "Sim, nossa sede está em São José dos Campos. Você pode deixar e buscar pessoalmente ou usar nosso serviço de coleta e entrega gratuito.",
              },
            ].map((item) => (
              <details key={item.q} className="bg-blue-900/40 border border-blue-800 rounded-xl group">
                <summary className="p-5 font-semibold cursor-pointer list-none flex justify-between items-center hover:text-blue-300 transition-colors">
                  {item.q}
                  <span className="text-[#1D4ED8] group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="px-5 pb-5 text-blue-300 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="sao-jose-dos-campos" />
      <footer className="bg-blue-950 border-t border-blue-800 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-400 text-sm">© 2025 A7 Lavanderia. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/vale-do-paraiba" className="text-blue-300 hover:text-white transition-colors">
              Vale do Paraíba
            </Link>
            <Link href="/" className="text-blue-300 hover:text-white transition-colors">
              Voltar ao início
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
