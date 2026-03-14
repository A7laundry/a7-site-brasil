"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink, COMPANY } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

const waLink = getWhatsAppLink("empresarial");

const WHATSAPP_SVG = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const stats = [
  { val: `+${COMPANY.stats.attendances}`, label: "atendimentos" },
  { val: "14", label: "anos de operação" },
  { val: `${COMPANY.stats.unitsBrazil + COMPANY.stats.unitsUSA}`, label: "unidades" },
  { val: `${COMPANY.stats.satisfaction}%`, label: "satisfação clientes" },
];

const segmentos = [
  { icon: "🍽️", nome: "Restaurantes", desc: "Toalhas, aventais, guardanapos, uniformes de equipe. Coleta diária ou programada." },
  { icon: "🏨", nome: "Hotéis e pousadas", desc: "Enxoval de quarto, toalhas, roupões, uniformes. Padrão hospitality exigente." },
  { icon: "👔", nome: "Uniformes corporativos", desc: "Qualquer setor: indústria, varejo, saúde. Volume desde 20 peças/mês." },
  { icon: "🏢", nome: "Condomínios", desc: "Uniformes de portaria, limpeza e manutenção. Faturamento por CNPJ." },
  { icon: "🏠", nome: "Hosts de Airbnb", desc: "Kit completo de enxoval para até 10 imóveis. Gestão simplificada." },
  { icon: "🏥", nome: "Clínicas e consultórios", desc: "Jalecos, uniformes clínicos, lençóis de maca. Higienização certificada." },
];

const diferenciais = [
  { icon: "📅", title: "Coleta programada", body: "Definimos juntos a frequência ideal. Semanal, bissemanal ou diária. Nunca falta enxoval." },
  { icon: "📊", title: "Relatório mensal", body: "Controle total do seu enxoval. Volume, peças, datas, custos. Tudo documentado." },
  { icon: "🧾", title: "Nota fiscal e boleto", body: "Faturamento simplificado para CNPJ. Boleto mensal ou PIX. Sem complicação." },
  { icon: "🤝", title: "Gestor dedicado", body: "Um ponto de contato exclusivo para sua empresa. Resposta prioritária." },
];

const testimonials = [
  { name: "Chef Marco R.", city: "SJC", text: "Terceirizei o enxoval do restaurante há 2 anos. Nunca mais tive problema de falta de toalha ou uniforme. Entrega sempre pontual." },
  { name: "Fernanda G.", city: "Taubaté", text: "Gestão de 3 pousadas ficou muito mais simples. Enxoval sempre limpo, custo previsível." },
  { name: "Carlos D.", city: "SJC", text: "80 uniformes semanais para minha equipe. A A7 resolveu um problema que eu tinha há anos." },
];

const faqs = [
  { q: "Qual o volume mínimo?", a: "Para contratos empresariais, trabalhamos a partir de 20 peças/semana. Para volumes menores, o serviço avulso pode ser mais adequado." },
  { q: "Quanto tempo leva para começar?", a: "Do contato inicial à primeira coleta, em média 3–5 dias úteis para elaboração de proposta e alinhamento logístico." },
  { q: "Emitem nota fiscal?", a: "Sim. Emitimos NF-e para pessoa jurídica. Faturamento mensal, boleto ou PIX." },
  { q: "E se eu precisar de coleta com urgência?", a: "Para contratos ativos, temos janela de atendimento urgente com resposta em até 2h." },
];

export default function EmpresarialPage() {
  return (
    <main className="min-h-screen font-sans">
      <ServiceSchema name="Lavanderia Empresarial" description="Plano empresarial para lavagem de uniformes, enxoval e peças corporativas. Contratos B2B com coleta programada e faturamento por CNPJ." slug="empresarial" />
      {/* HERO */}
      <section className="relative bg-[#0a0f1e] overflow-hidden min-h-[85vh] flex items-center">
        {/* Foto de restaurante/ambiente profissional — contexto B2B real */}
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=90"
          alt="Restaurante profissional"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-15"
        />
        {/* Grid pattern overlay sobre a foto */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/95 via-[#0a0f1e]/55 to-[#0a0f1e]/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 lg:pt-32 lg:pb-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4"
            >
              Soluções Empresariais · B2B
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              A lavanderia que
              <br />
              trabalha enquanto
              <br />
              <span className="text-indigo-400">você trabalha.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg mb-8 leading-relaxed"
            >
              Contrato personalizado, coleta programada, faturamento mensal. Para restaurantes,
              hotéis, condomínios e empresas.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-lg transition-colors text-base"
              >
                {WHATSAPP_SVG}
                Solicitar proposta gratuita
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 text-sm text-gray-400"
            >
              <span className="flex items-center gap-2">✅ Fatura por CNPJ</span>
              <span className="flex items-center gap-2">✅ Coleta programada</span>
              <span className="flex items-center gap-2">✅ Gestor dedicado</span>
            </motion.div>
          </div>
          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center"
              >
                <span className="text-3xl lg:text-4xl font-extrabold text-indigo-400 mb-2">{s.val}</span>
                <span className="text-gray-400 text-sm">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEGMENTOS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Seu segmento, nossa especialidade.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Atendemos os principais segmentos que dependem de enxoval e uniformes com qualidade constante.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {segmentos.map((seg, i) => (
              <div
                key={i}
                className="border border-gray-200 hover:border-indigo-600 rounded-2xl p-8 transition-colors group cursor-default"
              >
                <span className="text-4xl mb-4 block">{seg.icon}</span>
                <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-indigo-600 transition-colors">
                  {seg.nome}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{seg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-indigo-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Por que empresas escolhem a A7?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((d, i) => (
              <div
                key={i}
                className="border border-indigo-700 rounded-2xl p-8 bg-indigo-900/40"
              >
                <span className="text-4xl mb-4 block">{d.icon}</span>
                <h3 className="font-bold text-white text-xl mb-3">{d.title}</h3>
                <p className="text-indigo-200 text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Como começar</h2>
            <p className="text-gray-500 text-lg">
              Do primeiro contato à primeira coleta em menos de uma semana.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Reunião de briefing", desc: "Entendemos sua operação, volumes, frequência e necessidades específicas." },
              { num: "02", title: "Proposta personalizada", desc: "Em 24h você recebe uma proposta com preços, datas e condições claras." },
              { num: "03", title: "Coleta começa na semana", desc: "Assinatura do contrato e a primeira coleta acontece ainda na semana." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <span className="text-7xl font-extrabold text-indigo-100 leading-none block mb-4">{step.num}</span>
                <h3 className="font-bold text-gray-900 text-xl mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">O que nossos clientes dizem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0f1e] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-extrabold text-white mb-4"
          >
            Pronto para terceirizar
            <br />
            o enxoval da sua empresa?
          </motion.h2>
          <p className="text-gray-400 text-lg mb-10">
            Proposta personalizada em 24h. Sem compromisso.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-5 rounded-xl transition-colors text-lg"
          >
            {WHATSAPP_SVG}
            Falar com especialista
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Perguntas frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden group"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-gray-900 select-none list-none">
                  {faq.q}
                  <span className="text-indigo-600 ml-4 text-xl leading-none group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="empresarial" />
      {/* FOOTER LINKS */}
      <footer className="bg-gray-950 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <a href="/restaurantes" className="hover:text-white transition-colors">Soluções para Restaurantes</a>
          <a href="/hotelaria" className="hover:text-white transition-colors">Soluções para Hotelaria</a>
          <a href="/" className="hover:text-white transition-colors">Início</a>
          <a href="/como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
        </div>
        <p className="text-center text-gray-700 text-xs mt-6">
          © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
