"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink, COMPANY } from "@/lib/constants";

export default function VersionF() {
  const waLink = getWhatsAppLink("homepage-version-f");

  const services = [
    {
      title: "Roupas do Dia a Dia",
      desc: "Lavagem e passadoria com cuidado individual. Coleta e entrega em 48h.",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
    },
    {
      title: "Edredons e Cobertores",
      desc: "Higienização profunda. 100% dos ácaros eliminados. Seu sono protegido.",
      image: "https://images.unsplash.com/photo-1522771739448-4c5b7e7a3d68?w=800&q=80",
    },
    {
      title: "Roupas Sociais e Delicadas",
      desc: "Seda, cashmere, ternos. Tratamento peça a peça com produtos especializados.",
      image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80",
    },
    {
      title: "Tapetes e Cortinas",
      desc: "Lavagem especializada. Fibras e cores preservadas. Retirada e instalação.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    },
    {
      title: "Tênis e Calçados",
      desc: "Limpeza manual profissional. Sem odor, sem bactérias. Como novo.",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    },
    {
      title: "Uniformes Corporativos",
      desc: "Soluções para empresas. Coleta diária, faturamento CNPJ, prazo garantido.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    },
  ];

  const stats = [
    { num: `+${COMPANY.stats.attendances}`, label: "Atendimentos" },
    { num: `${COMPANY.stats.googleRating}`, label: "Estrelas Google" },
    { num: `${COMPANY.stats.unitsBrazil}`, label: "Unidades Brasil" },
    { num: `${COMPANY.stats.satisfaction}%`, label: "Satisfação" },
  ];

  const testimonials = [
    {
      quote: "A A7 mudou minha rotina completamente. Antes eu perdia todo fim de semana lavando roupa. Agora é só agendar e pronto. Qualidade impecável.",
      name: "Maria Silva",
      city: "São José dos Campos",
    },
    {
      quote: "Uso o plano Família há 8 meses. Ganhamos um tempo precioso. As roupas voltam perfeitas, cheirosas e bem passadas.",
      name: "Carlos Santos",
      city: "Taubaté",
    },
    {
      quote: "Mandei meus edredons que estavam guardados há meses. Voltaram como novos. Sem cheiro, sem ácaros, macios. Super recomendo.",
      name: "Ana Oliveira",
      city: "Jacareí",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      <header className="fixed top-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-light text-white text-xl tracking-[0.15em] uppercase">
            A7 <span className="text-[#F59E0B]">Lavanderia</span>
          </span>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-xs text-white/60 hover:text-white uppercase tracking-[0.15em] transition-colors">Serviços</a>
            <a href="#como-funciona" className="text-xs text-white/60 hover:text-white uppercase tracking-[0.15em] transition-colors">Processo</a>
            <a href="#depoimentos" className="text-xs text-white/60 hover:text-white uppercase tracking-[0.15em] transition-colors">Depoimentos</a>
          </nav>
          <a
            href={waLink}
            className="border border-[#F59E0B] text-[#F59E0B] text-xs uppercase tracking-[0.15em] px-6 py-3 hover:bg-[#F59E0B] hover:text-black transition-all"
          >
            Agendar
          </a>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=1400&q=80"
          alt="Tecido premium em close cinematográfico"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-5 max-w-4xl mx-auto"
        >
          <p className="text-[#F59E0B] text-xs uppercase tracking-[0.4em] mb-6 font-light">
            São José dos Campos
          </p>
          <h1
            className="font-light text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)", letterSpacing: "-0.01em" }}
          >
            O cuidado que suas<br />
            <em className="italic font-light">roupas merecem</em>
          </h1>
          <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl mx-auto mb-12">
            Lavanderia premium com coleta e entrega no Vale do Paraíba. Padrão internacional, cuidado artesanal.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center gap-4 bg-[#F59E0B] text-black font-semibold text-sm uppercase tracking-[0.2em] px-10 py-4 hover:bg-white transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar coleta gratuita
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      <section className="py-20 bg-[#0A0A0A] border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center py-10 px-6"
              >
                <p className="font-light text-[#F59E0B] text-5xl md:text-6xl leading-none mb-3">{s.num}</p>
                <p className="text-white/40 text-xs uppercase tracking-[0.2em]">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#F59E0B] text-xs uppercase tracking-[0.4em] mb-4 font-light">O que cuidamos</p>
            <h2 className="font-light text-white text-5xl md:text-6xl leading-tight">
              Nossos Serviços
            </h2>
          </motion.div>
          <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative flex-shrink-0 w-72 h-96 group overflow-hidden"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-light text-white text-lg mb-2 leading-tight">{s.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#F59E0B] text-xs uppercase tracking-[0.4em] mb-4 font-light">Simples e rápido</p>
            <h2 className="font-light text-white text-5xl md:text-6xl leading-tight">
              Como Funciona
            </h2>
          </motion.div>
          <div className="space-y-0 divide-y divide-white/10">
            {[
              { num: "01", title: "Agende pelo WhatsApp", desc: "Mande uma mensagem com sua preferência de horário. Respondemos em menos de 5 minutos." },
              { num: "02", title: "Coletamos na sua porta", desc: "Nosso motoboy vai até você no horário combinado. Zero esforço da sua parte." },
              { num: "03", title: "Higienizamos com excelência", desc: "Cada peça recebe tratamento individualizado com produtos premium e tecnologia industrial." },
              { num: "04", title: "Devolvemos impecável", desc: "Tudo limpo, passado e embalado, entregue na sua porta no prazo combinado." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-8 py-10 group"
              >
                <span className="text-[#F59E0B] font-light text-2xl w-12 flex-shrink-0 group-hover:scale-110 transition-transform">{step.num}</span>
                <div>
                  <h3 className="text-white font-light text-xl mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#F59E0B] text-xs uppercase tracking-[0.4em] mb-4 font-light">Quem confia</p>
            <h2 className="font-light text-white text-5xl md:text-6xl leading-tight">
              Depoimentos
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-[#F59E0B] text-6xl font-light leading-none block mb-4">&ldquo;</span>
                <p className="text-white/70 text-sm leading-relaxed italic mb-8">{t.quote}</p>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white font-light text-sm">{t.name}</p>
                  <p className="text-white/30 text-xs mt-1 uppercase tracking-[0.2em]">{t.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80"
          alt="Lavanderia premium"
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center px-5 max-w-2xl mx-auto"
          >
            <p className="text-[#F59E0B] text-xs uppercase tracking-[0.4em] mb-5 font-light">Sem fidelidade</p>
            <h2
              className="font-light text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2rem,5vw,4rem)" }}
            >
              Experimente sem compromisso
            </h2>
            <p className="text-white/60 text-base mb-8 leading-relaxed">
              Coleta gratuita. Entrega em até 48h. Cancel quando quiser.
            </p>
            <a
              href={waLink}
              className="inline-flex items-center gap-3 border-2 border-[#F59E0B] text-[#F59E0B] font-light text-sm uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#F59E0B] hover:text-black transition-all"
            >
              Agendar coleta gratuita
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <p className="text-[#F59E0B] text-xs uppercase tracking-[0.4em] mb-6 font-light">Pronto para começar?</p>
          <h2
            className="font-light text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
          >
            Sua roupa. Nosso cuidado.
          </h2>
          <p className="text-white/40 text-lg font-light mb-12 leading-relaxed">
            Mais de {COMPANY.stats.attendances} clientes já confiam na A7 Lavanderia.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center gap-4 bg-[#F59E0B] text-black font-semibold text-sm uppercase tracking-[0.2em] px-14 py-5 hover:bg-white transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar coleta gratuita
          </a>
        </motion.div>
      </section>

      <footer className="bg-[#050505] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="font-light text-white text-xl tracking-[0.15em] uppercase">
                A7 <span className="text-[#F59E0B]">Lavanderia</span>
              </span>
              <p className="text-white/30 text-xs mt-2 uppercase tracking-[0.15em]">{COMPANY.address.city}, SP</p>
            </div>
            <div className="flex items-center gap-8">
              <Link href="/" className="text-white/40 text-xs uppercase tracking-[0.15em] hover:text-white transition-colors">Início</Link>
              <a href="#servicos" className="text-white/40 text-xs uppercase tracking-[0.15em] hover:text-white transition-colors">Serviços</a>
              <a href={waLink} className="text-[#F59E0B] text-xs uppercase tracking-[0.15em] hover:text-white transition-colors">WhatsApp</a>
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-8">
            <p className="text-white/20 text-xs uppercase tracking-[0.15em]">© {new Date().getFullYear()} A7 Lavanderia</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-[#F59E0B] text-black text-[10px] font-bold px-3 py-1.5 shadow-lg">
          Variação F — Cinematic
        </div>
      </div>
    </div>
  );
}
