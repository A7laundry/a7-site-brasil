"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";

export default function PlanoMensalPage() {
  const whatsappLink = getWhatsAppLink("plano-mensal");

  return (
    <div className="min-h-screen bg-[#070810] text-white">
      <header className="fixed top-0 w-full z-50 bg-[#0047FF]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            A7 Lavanderia
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0047FF] font-semibold px-5 py-2 rounded-full text-sm hover:bg-blue-50 transition-colors"
          >
            Assinar Agora
          </a>
        </div>
      </header>

      <section className="relative h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80"
          alt="Guarda-roupa organizado"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070810]/95 via-[#070810]/55 to-[#070810]/10" />
        <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight max-w-2xl"
          >
            Roupa Limpa Todo Mês, Sem Pensar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-blue-100 max-w-xl leading-relaxed"
          >
            Assine o plano mensal A7 e esqueça a lavanderia para sempre — coleta recorrente, preço fixo
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0047FF] hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              Ver Planos e Preços
            </a>
            <a
              href="#planos"
              className="inline-block border border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Comparar Planos
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0047FF] py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "20%", label: "de economia no plano" },
            { value: "Coleta semanal", label: "recorrente" },
            { value: "Preço fixo", label: "sem surpresas" },
            { value: "Cancele", label: "quando quiser" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold">{stat.value}</p>
              <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#070810]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Por Que Tantas Pessoas Ainda Sofrem com Roupa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🔄",
                title: "Sem rotina definida",
                desc: "Lava uma semana, pula outra. A inconsistência cria acúmulo e aquela sensação constante de estar atrasado.",
              },
              {
                icon: "🗻",
                title: "Montanha de roupa",
                desc: "Quanto mais tempo passa sem lavar, maior o volume. O que seria 2 horas vira um dia inteiro perdido.",
              },
              {
                icon: "💸",
                title: "Preços imprevisíveis",
                desc: "Pagar avulso significa não saber quanto vai gastar. Preço varia, quantidade varia, planejamento zero.",
              },
              {
                icon: "😓",
                title: "Sempre correndo atrás",
                desc: "A camisa de amanhã ainda está suja. O terno da reunião está amassado. A rotina vira estresse constante.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#0d1117] border border-blue-900/50 rounded-2xl p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="py-20 bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Escolha Seu Plano</h2>
          <p className="text-center text-slate-400 mb-12">Todos os planos incluem coleta, lavagem, passagem e entrega</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Essencial",
                kg: "12kg/mês",
                price: "R$189",
                period: "/mês",
                highlight: false,
                features: [
                  "Coleta semanal (3kg por coleta)",
                  "Lavagem, passagem e dobra",
                  "Entrega em 48h",
                  "Suporte via WhatsApp",
                  "Cancelamento sem multa",
                ],
              },
              {
                name: "Família",
                kg: "24kg/mês",
                price: "R$329",
                period: "/mês",
                highlight: true,
                features: [
                  "Coleta semanal (6kg por coleta)",
                  "Lavagem, passagem e dobra",
                  "Entrega em 48h",
                  "Prioridade no agendamento",
                  "10% desconto em extras",
                  "Cancelamento sem multa",
                ],
              },
              {
                name: "Premium",
                kg: "40kg/mês",
                price: "R$499",
                period: "/mês",
                highlight: false,
                features: [
                  "Coleta semanal (10kg por coleta)",
                  "Lavagem, passagem e dobra",
                  "Entrega express em 24h",
                  "Prioridade máxima no agendamento",
                  "15% desconto em extras",
                  "Peças delicadas incluídas",
                  "Cancelamento sem multa",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-[#0047FF] border-2 border-blue-400 scale-105 shadow-2xl"
                    : "bg-[#070810] border border-blue-900/50"
                }`}
              >
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-white text-[#0047FF] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Mais popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-center mb-1">{plan.name}</h3>
                <p className="text-center text-blue-200 text-sm mb-6">{plan.kg}</p>
                <div className="text-center mb-8">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? "text-blue-200" : "text-slate-400"}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      <span className={plan.highlight ? "text-blue-100" : "text-slate-300"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-bold py-3 px-6 rounded-xl transition-colors ${
                    plan.highlight
                      ? "bg-white text-[#0047FF] hover:bg-blue-50"
                      : "bg-[#0047FF] text-white hover:bg-blue-600"
                  }`}
                >
                  Assinar {plan.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#070810]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Por Que Assinar em Vez de Pagar Avulso?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "📊", title: "Previsibilidade total", desc: "Sabe exatamente quanto vai gastar todo mês. Sem surpresas, sem variação. Orçamento doméstico no controle." },
              { icon: "🚀", title: "Prioridade no agendamento", desc: "Assinantes têm prioridade sobre clientes avulsos. Coleta confirmada na data certa, toda semana." },
              { icon: "💰", title: "Economia real de 20%", desc: "O custo por kg no plano mensal é até 20% menor do que pagar avulso. Quanto mais usa, mais economiza." },
            ].map((b) => (
              <div key={b.title} className="bg-[#0d1117] border border-blue-900/50 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-xl mb-3">{b.title}</h3>
                <p className="text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d1117]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Quem Já Assinou</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Patricia Souza",
                city: "São José dos Campos",
                text: "Família de 4 pessoas. Assinei o plano Família há 6 meses e economizei mais de R$400 no total. Além disso, nunca mais perdi um fim de semana lavando roupa.",
              },
              {
                name: "Thiago Nascimento",
                city: "Pindamonhangaba",
                text: "Trabalho muito e viajo bastante. O plano mensal garantiu que mesmo quando estou fora, minha roupa está sempre limpa me esperando. Vício bom.",
              },
              {
                name: "Mariana Duarte",
                city: "Taubaté",
                text: "Tentei cancelar depois de 3 meses para economizar. Fiquei exatamente 2 semanas sem o serviço e já me arrependi. O plano virou parte essencial da minha rotina.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-[#070810] border border-blue-900/50 rounded-2xl p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-slate-500 text-xs">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0047FF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Comece hoje. Cancele quando quiser.</h2>
          <p className="text-blue-200 mb-8 text-lg">Sem fidelidade, sem burocracia. Só roupas sempre limpas.</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#0047FF] font-bold px-10 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Assinar Agora pelo WhatsApp
          </a>
        </div>
      </section>

      <section className="py-20 bg-[#070810]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Posso cancelar o plano quando quiser?",
                a: "Sim! Não temos fidelidade mínima nem multa por cancelamento. Basta avisar pelo WhatsApp com 7 dias de antecedência e o plano é cancelado sem qualquer cobrança extra.",
              },
              {
                q: "Há tempo mínimo de permanência?",
                a: "Não. Você pode cancelar a qualquer momento. Claro que quanto mais meses você fica, maior a economia acumulada — mas nunca te obrigamos a ficar.",
              },
              {
                q: "O que está incluso no plano?",
                a: "Coleta na sua porta, lavagem em equipamentos profissionais, passagem individual de cada peça, dobra organizada por tipo e entrega. Taxa de coleta zero para assinantes.",
              },
              {
                q: "O que acontece se eu exceder o limite de kg?",
                a: "Cobramos o excedente com desconto especial de assinante — geralmente 10 a 15% abaixo do valor avulso. Você não perde nada, só paga a mais pelo excedente.",
              },
              {
                q: "Como funciona a coleta semanal?",
                a: "Você agenda um dia fixo por semana (ex: toda segunda). Nosso motoboy passa nesse dia sempre. Pode ajustar o dia pelo WhatsApp se precisar pular uma semana.",
              },
            ].map((item) => (
              <details key={item.q} className="bg-[#0d1117] border border-blue-900/50 rounded-xl group">
                <summary className="p-5 font-semibold cursor-pointer list-none flex justify-between items-center hover:text-blue-300 transition-colors">
                  {item.q}
                  <span className="text-[#0047FF] group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#070810] border-t border-blue-900/40 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">© 2025 A7 Lavanderia. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/lavagem-roupas" className="text-slate-400 hover:text-white transition-colors">
              Lavagem Avulsa
            </Link>
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">
              Voltar ao início
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
