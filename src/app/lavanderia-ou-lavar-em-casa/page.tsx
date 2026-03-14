"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink, COMPANY } from "@/lib/constants";

const waLink = getWhatsAppLink("comparacao");

const WHATSAPP_SVG = (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const comparison = [
  {
    category: "Tempo real",
    casa: "312h/ano (6h/semana)",
    a7: "0h — você faz outra coisa",
    a7Green: true,
  },
  {
    category: "Qualidade",
    casa: "Temperatura máx 60°C, ácaros sobrevivem",
    a7: "90°C industrial, eliminação 99%",
    a7Green: true,
  },
  {
    category: "Custo real",
    casa: "R$8–15/kg (água, luz, desgaste máquina, detergente)",
    a7: "Preço transparente, coleta grátis, sem taxa oculta",
    a7Green: true,
  },
  {
    category: "Peças especiais",
    casa: "Risco de estragar (couro, seda, delicadas)",
    a7: "Protocolo por material, garantia de resultado",
    a7Green: true,
  },
  {
    category: "Manchas difíceis",
    casa: "Muitas são permanentes em casa",
    a7: "93% de remoção com produtos profissionais",
    a7Green: true,
  },
  {
    category: "Esforço",
    casa: "Separar, lavar, secar, passar, dobrar, guardar",
    a7: "Você não faz nada ✓",
    a7Green: true,
  },
];

const testimonials = [
  {
    name: "Patricia M.",
    city: "SJC",
    text: "Achei que ia economizar lavando em casa. Quando calculei o tempo perdido, a conta de luz e o desgaste da máquina, percebi que a A7 é mais barata.",
  },
  {
    name: "André L.",
    city: "Taubaté",
    text: "Minha máquina quebrou depois de 3 anos. Uma máquina nova custa R$2.500. Com esse dinheiro, pago A7 por muito tempo.",
  },
  {
    name: "Renata F.",
    city: "Jacareí",
    text: "Com dois filhos e trabalho em tempo integral, as 6h semanais que eu passava com roupas agora são tempo de qualidade com minha família.",
  },
];

const statsStrip = [
  { val: "312h/ano", label: "economizadas em média" },
  { val: "R$0", label: "de máquina ou manutenção" },
  { val: "6h/semana", label: "de volta para você" },
  { val: "20% OFF", label: "no primeiro mês" },
];

const faqs = [
  {
    q: "Quanto custa realmente lavar em casa?",
    a: "Considerando água (~R$45/mês para família de 4), energia (~R$30/mês), desgaste da máquina (~R$40/mês amortizado) e produto (~R$25/mês), o custo real é de R$140+/mês sem contar as 6h semanais de trabalho.",
  },
  {
    q: "E se eu já tenho máquina?",
    a: "A máquina continua se desgastando — cada ciclo tem um custo. E o tempo continua sendo gasto. A questão não é só custo financeiro, é custo de tempo.",
  },
  {
    q: "Para quem vale mais a pena contratar lavanderia?",
    a: "Para qualquer pessoa que valorize seu tempo. Especialmente: mães, executivos, casais com filhos, pessoas com alergia e quem tem peças de valor que não quer arriscar.",
  },
];

export default function LavanderiaOuLavarEmCasaPage() {
  return (
    <main className="min-h-screen font-sans">
      {/* HERO */}
      <section className="bg-gray-950 min-h-[80vh] flex items-center overflow-hidden relative pt-14">
        {/* Foto máquina de lavar — reforça o cenário "em casa" que estamos questionando */}
        <img
          src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1600&q=90"
          alt="Lavando em casa"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />
        {/* Gradiente revelador: escuro no centro, image visível nas bordas */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/90 to-gray-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/50 via-transparent to-gray-950/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full py-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-5"
          >
            Comparativo honesto · A7 Lavanderia
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Você realmente economiza
            <br />
            lavando em casa?
            <br />
            <span className="text-emerald-400">Vamos calcular.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A maioria das pessoas subestima o custo real de lavar em casa. Água, energia, produto,
            desgaste da máquina e — o mais caro de todos — o seu tempo.
          </motion.p>
          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-10 py-5 rounded-xl transition-colors text-lg"
          >
            {WHATSAPP_SVG}
            Fazer a conta comigo
          </motion.a>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              O comparativo que ninguém mostra
            </h2>
            <p className="text-gray-500 text-lg">
              Categoria por categoria, a diferença real entre lavar em casa e usar a A7.
            </p>
          </div>

          {/* Mobile cards */}
          <div className="block lg:hidden space-y-4">
            {comparison.map((row, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 text-white font-bold px-5 py-3 text-sm">
                  {row.category}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-100">
                  <div className="p-4 bg-red-50">
                    <p className="text-xs text-red-400 font-semibold uppercase mb-2">Em casa</p>
                    <p className="text-red-700 text-sm leading-relaxed">{row.casa}</p>
                  </div>
                  <div className="p-4 bg-emerald-50">
                    <p className="text-xs text-emerald-600 font-semibold uppercase mb-2">A7</p>
                    <p className="text-emerald-800 text-sm font-medium leading-relaxed">{row.a7}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-gray-900 text-white py-5 px-8 text-left font-semibold w-1/4">Critério</th>
                  <th className="bg-red-900/80 text-red-100 py-5 px-8 text-left font-semibold w-[37.5%]">
                    Lavar em casa
                  </th>
                  <th className="bg-emerald-800 text-emerald-100 py-5 px-8 text-left font-semibold w-[37.5%]">
                    A7 Lavanderia
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-5 px-8 font-bold text-gray-900 border-r border-gray-100">{row.category}</td>
                    <td className="py-5 px-8 text-red-600 border-r border-gray-100">{row.casa}</td>
                    <td className="py-5 px-8 text-emerald-700 font-semibold">{row.a7}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* "A CONTA REAL" */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              A conta real de lavar em casa
            </h2>
            <p className="text-gray-500 text-lg">
              Custos ocultos que você provavelmente não está somando.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                icon: "⏱️",
                label: "Tempo (312h/ano)",
                value: "R$1.490+",
                note: "Ao custo do salário mínimo por hora — 312h que poderiam ser suas",
                red: true,
              },
              {
                icon: "🔌",
                label: "Água + energia",
                value: "R$75/mês",
                note: "~R$900/ano para família de 4 em média",
                red: true,
              },
              {
                icon: "🧴",
                label: "Produto + amaciante",
                value: "R$25/mês",
                note: "~R$300/ano em detergente, alvejante e amaciante",
                red: true,
              },
              {
                icon: "🏭",
                label: "Desgaste da máquina",
                value: "R$40/mês",
                note: "Máquina de R$2.500 com vida útil de ~5 anos amortizada",
                red: true,
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-red-100 rounded-2xl p-6 text-center">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">{item.label}</p>
                <p className="text-2xl font-extrabold text-red-500 mb-2">{item.value}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-600 text-white rounded-2xl p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-200 mb-2">Total estimado anual</p>
            <p className="text-5xl font-extrabold mb-3">R$2.690+</p>
            <p className="text-red-100 text-base">
              Sem contar 312 horas do seu tempo — que têm um valor real.
            </p>
          </div>
          <div className="mt-6 bg-emerald-600 text-white rounded-2xl p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-100 mb-2">Com a A7 Lavanderia</p>
            <p className="text-5xl font-extrabold mb-3">A partir de R$149/mês</p>
            <p className="text-emerald-100 text-base">
              Coleta grátis, sem desgaste de máquina, sem custo de produto. E com 312h anuais de volta para você.
            </p>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statsStrip.map((s, i) => (
              <div key={i}>
                <p className="text-4xl font-extrabold text-white mb-1">{s.val}</p>
                <p className="text-emerald-100 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              Quem fez a conta e mudou de ideia
            </h2>
            <p className="text-gray-500">Clientes reais que calcularam o custo real.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
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
      <section className="bg-emerald-600 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-extrabold text-white mb-4"
          >
            A resposta é clara.
            <br />
            <span className="text-emerald-100">Experimente de graça.</span>
          </motion.h2>
          <p className="text-emerald-100 text-lg mb-10">
            Primeira coleta sem compromisso. Cancele quando quiser.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-emerald-700 hover:bg-emerald-50 font-bold px-10 py-5 rounded-xl transition-colors text-lg"
          >
            {WHATSAPP_SVG}
            Quero minha primeira coleta
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
            Perguntas frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden group"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-gray-900 select-none list-none">
                  {faq.q}
                  <span className="text-emerald-600 ml-4 text-xl leading-none group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER LINKS */}
      <footer className="bg-gray-950 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <a href="/precos" className="hover:text-white transition-colors">Preços</a>
          <a href="/como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
          <a href="/" className="hover:text-white transition-colors">Início</a>
          <a href="/empresarial" className="hover:text-white transition-colors">Para Empresas</a>
        </div>
        <p className="text-center text-gray-700 text-xs mt-6">
          © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
