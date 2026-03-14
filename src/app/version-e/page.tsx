"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink, COMPANY } from "@/lib/constants";

export default function VersionE() {
  const waLink = getWhatsAppLink("homepage-version-e");

  const services = [
    { title: "ROUPAS DO DIA A DIA", desc: "Lavagem + passadoria. 48h. Coleta grátis." },
    { title: "ROUPAS SOCIAIS", desc: "Seda, linho, cashmere. Tratamento especializado." },
    { title: "EDREDONS", desc: "100% dos ácaros eliminados. Garantido." },
    { title: "TAPETES E CORTINAS", desc: "Fibras preservadas. Retirada e instalação." },
    { title: "TÊNIS E CALÇADOS", desc: "Limpeza manual. Volta como novo." },
    { title: "UNIFORMES B2B", desc: "150+ empresas. Faturamento CNPJ." },
  ];

  const stats = [
    { num: `+${COMPANY.stats.attendances}`, label: "ATENDIMENTOS" },
    { num: `${COMPANY.stats.googleRating}`, label: "ESTRELAS NO GOOGLE" },
    { num: `${COMPANY.stats.unitsBrazil}`, label: "UNIDADES NO BRASIL" },
    { num: `${COMPANY.stats.satisfaction}%`, label: "SATISFAÇÃO" },
  ];

  const steps = [
    { num: "01", title: "VOCÊ AGENDA", desc: "WhatsApp. 30 segundos." },
    { num: "02", title: "A GENTE BUSCA", desc: "Coleta na sua porta." },
    { num: "03", title: "LAVAMOS", desc: "Padrão industrial." },
    { num: "04", title: "ENTREGAMOS", desc: "24h. Impecável." },
  ];

  const testimonials = [
    { quote: "Chegou na hora, voltou impecável. Nunca mais lavo em casa.", name: "CARLA M.", city: "SJC" },
    { quote: "Economizo 4h por semana. O preço vale demais.", name: "RAFAEL T.", city: "TAUBATÉ" },
    { quote: "Minha filha tem alergia — as roupas chegam sem rastro de ácaro.", name: "ANA P.", city: "JACAREÍ" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      <header className="fixed top-0 w-full z-50 bg-black border-b-4 border-white">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <span className="font-black text-xl tracking-tighter text-white">
            A7<span className="text-[#00FF88]">.</span>
          </span>
          <nav className="hidden md:flex items-center gap-0">
            <a href="#servicos" className="text-xs font-black uppercase tracking-widest px-5 py-2 border-l-2 border-white/20 hover:bg-white hover:text-black transition-all">Serviços</a>
            <a href="#como-funciona" className="text-xs font-black uppercase tracking-widest px-5 py-2 border-l-2 border-white/20 hover:bg-white hover:text-black transition-all">Processo</a>
            <a href="#depoimentos" className="text-xs font-black uppercase tracking-widest px-5 py-2 border-l-2 border-white/20 hover:bg-white hover:text-black transition-all">Reviews</a>
          </nav>
          <a
            href={waLink}
            className="bg-[#00FF88] text-black font-black text-xs uppercase tracking-widest px-6 py-3 hover:bg-white transition-colors"
          >
            Agendar →
          </a>
        </div>
      </header>

      <section className="pt-16 min-h-screen flex flex-col justify-center bg-black border-b-4 border-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#00FF88] text-xs font-black uppercase tracking-[0.3em] mb-6">
              São José dos Campos — Vale do Paraíba
            </p>
            <h1
              className="font-black text-white leading-[0.88] tracking-tighter uppercase"
              style={{ fontSize: "clamp(3rem,10vw,10rem)" }}
            >
              LAVANDERIA<br />
              <span className="text-[#00FF88]">PREMIUM</span>
            </h1>
            <h2
              className="font-black text-white leading-[0.88] tracking-tighter uppercase mt-2"
              style={{ fontSize: "clamp(2.2rem,6vw,6rem)" }}
            >
              SEM COMPROMISSO
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 max-w-2xl"
          >
            <p className="text-white/60 text-lg leading-relaxed border-l-4 border-[#00FF88] pl-5">
              Coleta em casa. Lavagem com padrão industrial. Entrega em 24h. Sem fidelidade, sem contrato, sem enrolação.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={waLink}
              className="inline-flex items-center justify-center gap-3 bg-[#00FF88] text-black font-black text-sm uppercase tracking-widest px-10 py-5 hover:bg-white transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar coleta grátis
            </a>
            <a href="#como-funciona" className="inline-flex items-center justify-center font-black text-sm uppercase tracking-widest px-10 py-5 border-4 border-white hover:bg-white hover:text-black transition-all">
              Como funciona
            </a>
          </motion.div>
        </div>

        <div className="border-t-4 border-white overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap py-4"
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-[#00FF88] font-black text-sm uppercase tracking-widest mr-0">
                A7 LAVANDERIA&nbsp;&nbsp;·&nbsp;&nbsp;COLETA E ENTREGA&nbsp;&nbsp;·&nbsp;&nbsp;SÃO JOSÉ DOS CAMPOS&nbsp;&nbsp;·&nbsp;&nbsp;VALE DO PARAÍBA&nbsp;&nbsp;·&nbsp;&nbsp;
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white border-b-4 border-black py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-4 border-black p-8 text-center -ml-1 -mt-1"
              >
                <p className="font-black text-[#00FF88] text-5xl md:text-6xl leading-none"
                  style={{ WebkitTextStroke: "2px black" }}>
                  {s.num}
                </p>
                <p className="font-black text-black text-xs uppercase tracking-widest mt-3">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 bg-black border-b-4 border-white">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[#00FF88] text-xs font-black uppercase tracking-[0.3em] mb-3">O que fazemos</p>
            <h2 className="font-black text-white text-5xl md:text-7xl uppercase tracking-tighter leading-none">
              SERVIÇOS
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="border-4 border-white -ml-1 -mt-1 p-8 hover:bg-[#00FF88] hover:text-black transition-all group"
              >
                <h3 className="font-black text-sm uppercase tracking-widest mb-3 group-hover:text-black">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-black/70">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-20 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-black text-xs font-black uppercase tracking-[0.3em] mb-3">Processo</p>
            <h2 className="font-black text-black text-5xl md:text-7xl uppercase tracking-tighter leading-none">
              COMO FUNCIONA
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-4 border-black -ml-1 -mt-1 p-8"
              >
                <p className="font-black text-[#00FF88] text-7xl leading-none mb-4"
                  style={{ WebkitTextStroke: "2px black" }}>
                  {step.num}
                </p>
                <h3 className="font-black text-black text-sm uppercase tracking-widest mb-2">{step.title}</h3>
                <p className="text-black/60 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-20 bg-black border-b-4 border-white">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[#00FF88] text-xs font-black uppercase tracking-[0.3em] mb-3">Reviews</p>
            <h2 className="font-black text-white text-5xl md:text-7xl uppercase tracking-tighter leading-none">
              O QUE DIZEM
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-0">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-4 border-white -ml-1 -mt-1 p-8"
              >
                <p className="text-white text-lg font-medium leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t-2 border-white/20 pt-5">
                  <p className="font-black text-[#00FF88] text-xs uppercase tracking-widest">{t.name}</p>
                  <p className="text-white/40 text-xs mt-1 uppercase tracking-widest">{t.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black border-b-4 border-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-5 text-center"
        >
          <p className="text-[#00FF88] text-xs font-black uppercase tracking-[0.3em] mb-6">Sem desculpa</p>
          <h2
            className="font-black text-white uppercase tracking-tighter leading-none mb-10"
            style={{ fontSize: "clamp(2.5rem,8vw,7rem)" }}
          >
            PARA DE<br />LAVAR ROUPA.
          </h2>
          <a
            href={waLink}
            className="inline-flex items-center gap-4 bg-[#00FF88] text-black font-black text-sm uppercase tracking-widest px-12 py-6 hover:bg-white transition-colors text-lg"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar coleta grátis
          </a>
        </motion.div>
      </section>

      <footer className="bg-black border-t-4 border-white py-12">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <span className="font-black text-white text-2xl tracking-tighter uppercase">A7<span className="text-[#00FF88]">.</span></span>
          <div className="flex flex-wrap gap-0">
            <Link href="/" className="font-black text-xs uppercase tracking-widest px-5 py-3 border-2 border-white/20 -ml-px hover:bg-white hover:text-black transition-all">Início</Link>
            <a href="#servicos" className="font-black text-xs uppercase tracking-widest px-5 py-3 border-2 border-white/20 -ml-px hover:bg-white hover:text-black transition-all">Serviços</a>
            <a href={waLink} className="font-black text-xs uppercase tracking-widest px-5 py-3 border-2 border-[#00FF88] -ml-px bg-[#00FF88] text-black hover:bg-white transition-all">WhatsApp</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 mt-8 pt-8 border-t-2 border-white/10">
          <p className="text-white/30 text-xs uppercase tracking-widest">© {new Date().getFullYear()} A7 Lavanderia.</p>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-[#00FF88] text-black text-[10px] font-black px-3 py-1.5 shadow-lg">
          VARIAÇÃO E — BRUTALIST
        </div>
      </div>
    </div>
  );
}
