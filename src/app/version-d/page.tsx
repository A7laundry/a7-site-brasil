"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink, COMPANY } from "@/lib/constants";

export default function VersionD() {
  const waLink = getWhatsAppLink("homepage-version-d");

  const services = [
    { emoji: "👕", title: "Roupas do Dia a Dia", desc: "Lavagem e passadoria completa. Cada peça cuidada com atenção individual." },
    { emoji: "✨", title: "Roupas Sociais", desc: "Camisas, ternos e vestidos que merecem tratamento especial. Entregamos impecáveis." },
    { emoji: "☁️", title: "Edredons e Cobertores", desc: "100% dos ácaros eliminados. Volta fofo, cheiroso, pronto para abraçar." },
    { emoji: "🏠", title: "Tapetes e Cortinas", desc: "Fibras preservadas, cores vivas. Retirada e instalação inclusa se precisar." },
    { emoji: "👟", title: "Tênis e Calçados", desc: "Seu tênis volta como saiu da caixa. Sem odor, sem bactéria, sem esforço." },
    { emoji: "🏢", title: "Uniformes Corporativos", desc: "Planos sob medida para empresas. Volume, prazo e qualidade garantidos." },
  ];

  const steps = [
    { num: "1", title: "Você manda mensagem", desc: "Só um oi no WhatsApp já basta pra começar. A gente responde em menos de 5 minutos." },
    { num: "2", title: "A gente busca", desc: "Combinamos um horário e nosso motoboy passa na sua porta. Sem você sair de casa." },
    { num: "3", title: "Lavamos tudo direitinho", desc: "Cada peça recebe o tratamento certo, com produtos premium e tecnologia profissional." },
    { num: "4", title: "Devolvemos dobradinho", desc: "Tudo limpo, passado, embalado e pronto pra guardar. Na hora combinada." },
  ];

  const testimonials = [
    { quote: "A A7 mudou minha rotina. Antes perdia o fim de semana inteiro lavando roupa. Agora é só agendar e pronto.", name: "Maria Silva", city: "São José dos Campos" },
    { quote: "Uso o plano Família há 8 meses. Minha esposa e eu ganhamos um tempo precioso juntos. Roupas sempre perfeitas.", name: "Carlos Santos", city: "Taubaté" },
    { quote: "Meus edredons voltaram como novos. Sem cheiro, sem ácaros, super macios. Nunca mais vou lavar em casa.", name: "Ana Oliveira", city: "Jacareí" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1C1C1A]">

      <header className="fixed top-0 w-full z-50 bg-[#FAFAF8]/95 backdrop-blur border-b border-[#E8E6E0]">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight text-[#1C1C1A]">
            A7 <span className="text-[#C4622D]">Lavanderia</span>
          </span>
          <nav className="hidden md:flex items-center gap-7">
            <a href="#servicos" className="text-sm text-[#6B6B67] hover:text-[#1C1C1A] transition-colors">Serviços</a>
            <a href="#como-funciona" className="text-sm text-[#6B6B67] hover:text-[#1C1C1A] transition-colors">Como funciona</a>
            <a href="#depoimentos" className="text-sm text-[#6B6B67] hover:text-[#1C1C1A] transition-colors">Depoimentos</a>
          </nav>
          <a
            href={waLink}
            className="bg-[#C4622D] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#A8502A] transition-colors"
          >
            Agendar coleta
          </a>
        </div>
      </header>

      <section className="pt-16 min-h-screen grid md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 bg-[#FAFAF8]"
        >
          <p className="text-[#C4622D] text-sm font-semibold uppercase tracking-widest mb-5">
            Lavanderia em São José dos Campos
          </p>
          <h1
            className="font-bold text-[#1C1C1A] leading-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.15 }}
          >
            Sua roupa limpa.<br />Sua semana livre.
          </h1>
          <p className="text-[#6B6B67] text-lg leading-relaxed mb-10 max-w-md">
            A gente busca, lava tudo direitinho e devolve dobradinho. Simples assim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={waLink}
              className="inline-flex items-center justify-center gap-3 bg-[#C4622D] text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-[#A8502A] transition-all hover:scale-[1.02] shadow-lg shadow-[#C4622D]/20"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar coleta grátis
            </a>
            <a href="#como-funciona" className="inline-flex items-center justify-center text-[#1C1C1A] font-medium text-sm px-6 py-4 border-2 border-[#D8D5CE] rounded-full hover:border-[#C4622D] hover:text-[#C4622D] transition-all">
              Como funciona →
            </a>
          </div>
          <div className="mt-12 flex items-center gap-6">
            <div className="text-center">
              <p className="font-bold text-2xl text-[#1C1C1A]">+{COMPANY.stats.attendances}</p>
              <p className="text-xs text-[#6B6B67] mt-0.5">atendimentos</p>
            </div>
            <div className="w-px h-8 bg-[#D8D5CE]" />
            <div className="text-center">
              <p className="font-bold text-2xl text-[#1C1C1A]">{COMPANY.stats.googleRating}★</p>
              <p className="text-xs text-[#6B6B67] mt-0.5">no Google</p>
            </div>
            <div className="w-px h-8 bg-[#D8D5CE]" />
            <div className="text-center">
              <p className="font-bold text-2xl text-[#1C1C1A]">{COMPANY.stats.satisfaction}%</p>
              <p className="text-xs text-[#6B6B67] mt-0.5">satisfação</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="relative hidden md:block"
        >
          <img
            src="https://images.unsplash.com/photo-1489782419474-4bd8bbc90a99?w=1400&q=80"
            alt="Pessoa organizando roupas limpas"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FAFAF8]/10" />
        </motion.div>
      </section>

      <section className="py-8 bg-[#F0EFEB] border-y border-[#E0DED8] overflow-hidden">
        <div className="flex items-center gap-12 animate-none">
          <div className="flex items-center gap-12 whitespace-nowrap px-8">
            {[
              `⭐ ${COMPANY.stats.googleRating} no Google`,
              `✓ +${COMPANY.stats.attendances} atendimentos`,
              `✓ ${COMPANY.stats.unitsBrazil} unidades no Brasil`,
              `✓ Coleta e entrega gratuitas`,
              `✓ Sem contrato de fidelidade`,
              `✓ Resposta em menos de 5 minutos`,
            ].map((item, i) => (
              <span key={i} className="text-sm text-[#6B6B67] font-medium">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[#C4622D] text-sm font-semibold uppercase tracking-widest mb-3">O que a gente faz</p>
            <h2 className="font-bold text-[#1C1C1A] text-4xl md:text-5xl leading-tight max-w-lg">
              Cuidamos de tudo que você usa
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#F0EFEB] rounded-2xl p-7 hover:bg-[#E8E5DC] transition-colors group"
              >
                <span className="text-3xl mb-4 block">{s.emoji}</span>
                <h3 className="font-bold text-[#1C1C1A] text-lg mb-2 group-hover:text-[#C4622D] transition-colors">{s.title}</h3>
                <p className="text-[#6B6B67] text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C4622D] text-sm font-semibold uppercase tracking-widest mb-3">Simples assim</p>
            <h2 className="font-bold text-[#1C1C1A] text-4xl md:text-5xl">Como funciona</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="w-14 h-14 rounded-full border-2 border-[#C4622D] flex items-center justify-center mb-5 bg-[#FAFAF8]">
                  <span className="font-bold text-[#C4622D] text-xl">{step.num}</span>
                </div>
                <h3 className="font-bold text-[#1C1C1A] text-base mb-2">{step.title}</h3>
                <p className="text-[#6B6B67] text-sm leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-14 w-full h-px border-t-2 border-dashed border-[#D8D5CE]" />
                )}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-14">
            <a
              href={waLink}
              className="inline-flex items-center gap-3 bg-[#C4622D] text-white font-semibold text-base px-10 py-4 rounded-full hover:bg-[#A8502A] transition-all hover:scale-[1.02] shadow-lg shadow-[#C4622D]/20"
            >
              Quero começar agora
            </a>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-20 bg-[#F0EFEB]">
        <div className="max-w-5xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#C4622D] text-sm font-semibold uppercase tracking-widest mb-3">Quem já usa</p>
            <h2 className="font-bold text-[#1C1C1A] text-4xl">O que as pessoas falam</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#FAFAF8] rounded-2xl p-8"
              >
                <p className="text-[#1C1C1A] text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-[#1C1C1A] text-sm">{t.name}</p>
                  <p className="text-[#6B6B67] text-xs mt-0.5">{t.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1C1C1A]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-5 text-center"
        >
          <p className="text-[#C4622D] text-sm font-semibold uppercase tracking-widest mb-4">Pronto pra começar?</p>
          <h2 className="font-bold text-white text-4xl md:text-5xl leading-tight mb-5">
            Sua primeira coleta<br />é grátis.
          </h2>
          <p className="text-[#A8A8A4] text-lg mb-10 leading-relaxed">
            Sem contrato. Sem complicação. Só manda mensagem e a gente cuida do resto.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center gap-3 bg-[#C4622D] text-white font-semibold text-lg px-12 py-5 rounded-full hover:bg-[#A8502A] transition-all hover:scale-[1.02] shadow-xl shadow-[#C4622D]/30"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
        </motion.div>
      </section>

      <footer className="bg-[#141412] py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="font-bold text-white text-lg">A7 <span className="text-[#C4622D]">Lavanderia</span></span>
              <p className="text-[#6B6B67] text-sm mt-1">{COMPANY.address.city}, SP — Vale do Paraíba</p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <Link href="/" className="text-[#6B6B67] text-sm hover:text-white transition-colors">Início</Link>
              <a href="#servicos" className="text-[#6B6B67] text-sm hover:text-white transition-colors">Serviços</a>
              <a href={waLink} className="text-[#C4622D] text-sm font-semibold hover:text-[#D9784A] transition-colors">WhatsApp</a>
            </div>
          </div>
          <div className="border-t border-[#2A2A27] mt-8 pt-8">
            <p className="text-[#4A4A47] text-xs">© {new Date().getFullYear()} A7 Lavanderia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-[#C4622D] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg">
          Variação D — Conversational
        </div>
      </div>
    </div>
  );
}
