"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink, COMPANY } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

const waLink = getWhatsAppLink("como-funciona");

const WHATSAPP_SVG = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const steps = [
  {
    num: "01",
    icon: "💬",
    title: "Você agenda em 1 minuto",
    body: "Mande uma mensagem pelo WhatsApp com o dia e horário de preferência. Nossa equipe responde em menos de 5 minutos durante o horário comercial. Sem formulários, sem fila de espera, sem complicação. É só falar.",
  },
  {
    num: "02",
    icon: "🚐",
    title: "Coleta gratuita na sua porta",
    body: "No horário combinado, nosso motoboy vai até você — sem taxa de coleta. Separamos as peças junto com você se precisar, garantindo que nada seja esquecido. Você não precisa sair de casa nem carregar nada pesado.",
  },
  {
    num: "03",
    icon: "🏭",
    title: "Triagem e protocolo por peça",
    body: "Cada item é fotografado, catalogado e avaliado individualmente antes de qualquer processo. Identificamos manchas, tecidos delicados e peças que precisam de cuidado especial. Nada passa pela lavagem sem aprovação do protocolo.",
  },
  {
    num: "04",
    icon: "✨",
    title: "Controle de qualidade",
    body: "Após a lavagem e passadoria, cada peça passa por inspeção final. Verificamos a remoção de manchas, integridade do tecido, odor e acabamento. Só o que atinge nosso padrão é liberado para entrega. Caso algo não fique como esperado, retrabalhamos antes de devolver.",
  },
  {
    num: "05",
    icon: "📦",
    title: "Entrega embalada e pronta",
    body: "Suas peças chegam limpas, passadas, dobradas e embaladas para guardar direto no armário. Avisamos pelo WhatsApp antes de sair para a entrega. Você pode receber em casa, no trabalho ou onde for mais conveniente.",
  },
];

const faqs = [
  {
    q: "Em que cidades vocês atendem?",
    a: "São José dos Campos e toda a região do Vale do Paraíba: Taubaté, Jacareí, Caçapava, Pindamonhangaba, Lorena, Guaratinguetá e cidades vizinhas.",
  },
  {
    q: "Qual o horário de atendimento?",
    a: "Coletas de segunda a sábado, das 8h às 18h. Atendimento WhatsApp das 7h às 21h, incluindo domingos.",
  },
  {
    q: "Existe valor mínimo?",
    a: "Para serviço avulso, valor mínimo de R$35 por coleta. Para plano mensal, a partir de R$149/mês sem limite de peças.",
  },
  {
    q: "Minha roupa pode ser danificada?",
    a: "Avaliamos cada peça antes de lavar. Para itens delicados, confirmamos o protocolo com você antes de qualquer processo. Temos seguro para peças de valor.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "PIX, cartão de crédito (até 3x sem juros) ou transferência. Para empresas, boleto mensal.",
  },
  {
    q: "Posso acompanhar meu pedido?",
    a: "Sim. Avisamos por WhatsApp em cada etapa: coleta confirmada, em processamento, pronto para entrega, entregue.",
  },
];

const comparisonRows = [
  {
    category: "Tempo gasto",
    casa: "~6h/semana (312h/ano)",
    a7: "0 minutos",
    casaRed: true,
  },
  {
    category: "Resultado",
    casa: "Depende do equipamento e habilidade",
    a7: "Padrão industrial garantido",
    casaRed: true,
  },
  {
    category: "Custo real",
    casa: "R$8–15/kg (água + luz + desgaste + produto)",
    a7: "Preço transparente, sem taxa oculta",
    casaRed: true,
  },
  {
    category: "Ácaros eliminados",
    casa: "Incompleto — máquina doméstica não atinge 90°C",
    a7: "99% com lavagem industrial a 90°C",
    casaRed: true,
  },
  {
    category: "Esforço",
    casa: "Separar, lavar, secar, passar, dobrar, guardar",
    a7: "Zero — só agendar pelo WhatsApp",
    casaRed: true,
  },
  {
    category: "Avaliação",
    casa: "⭐⭐",
    a7: "⭐⭐⭐⭐⭐",
    casaRed: true,
  },
];

const statsStrip = [
  { val: `+${COMPANY.stats.attendances}`, label: "atendimentos realizados" },
  { val: `${COMPANY.stats.unitsBrazil + COMPANY.stats.unitsUSA}`, label: "unidades ativas" },
  { val: `${COMPANY.stats.satisfaction}%`, label: "de satisfação" },
  { val: `${COMPANY.stats.googleRating}★`, label: "no Google" },
];

export default function ComoFuncionaPage() {
  return (
    <main className="min-h-screen font-sans">
      <ServiceSchema name="Como Funciona a A7 Lavanderia" description="Entenda o processo completo da A7 Lavanderia: agendamento, coleta, higienização profissional e entrega em 48h. Simples, rápido e sem surpresas." slug="como-funciona" />
      {/* HERO */}
      <section className="relative bg-[#070810] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(77,127,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(77,127,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 lg:py-36 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#4d7fff] text-sm font-semibold tracking-widest uppercase mb-5"
          >
            Como Funciona · A7 Lavanderia
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Simples assim:
            <br />
            você agenda,
            <br />
            <span style={{ color: "#4d7fff" }}>a gente resolve.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Do agendamento à entrega, tudo pelo WhatsApp. Sem app para baixar, sem cadastro, sem complicação.
          </motion.p>
          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="inline-flex items-center gap-3 text-white font-bold px-10 py-5 rounded-xl transition-colors text-lg"
            style={{ backgroundColor: "#0047FF" }}
          >
            {WHATSAPP_SVG}
            Agendar agora pelo WhatsApp
          </motion.a>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              5 etapas, zero esforço da sua parte
            </h2>
            <p className="text-gray-500 text-lg">
              Cada detalhe do processo foi desenhado para que você não precise fazer nada além de agendar.
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-100 hidden md:block" />
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="relative flex gap-8 items-start">
                  {/* Step number + icon */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-2xl shadow-lg z-10 relative">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl font-extrabold text-gray-100 leading-none select-none">{step.num}</span>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-16" style={{ backgroundColor: "#0047FF" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statsStrip.map((s, i) => (
              <div key={i}>
                <p className="text-4xl font-extrabold text-white mb-1">{s.val}</p>
                <p className="text-blue-100 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              A7 vs. Lavar em casa
            </h2>
            <p className="text-gray-500 text-lg">
              A comparação honesta que ninguém faz — mas todo mundo deveria ver.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="py-4 px-6 text-left font-semibold">Critério</th>
                  <th className="py-4 px-6 text-left font-semibold text-red-300">Lavar em casa</th>
                  <th className="py-4 px-6 text-left font-semibold text-emerald-300">A7 Lavanderia</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-4 px-6 font-semibold text-gray-800">{row.category}</td>
                    <td className="py-4 px-6 text-red-600">{row.casa}</td>
                    <td className="py-4 px-6 text-emerald-700 font-medium">{row.a7}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
                  <span className="text-blue-600 ml-4 text-xl leading-none group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#070810] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Pronto para simplificar sua vida?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Mais de {COMPANY.stats.attendances} atendimentos realizados. Coleta gratuita, resultado garantido.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white font-bold px-10 py-5 rounded-xl transition-opacity hover:opacity-90 text-lg"
              style={{ backgroundColor: "#0047FF" }}
            >
              {WHATSAPP_SVG}
              Agendar coleta gratuita
            </a>
            <a
              href="/precos"
              className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 font-semibold px-8 py-5 rounded-xl transition-colors text-lg"
            >
              Ver preços
            </a>
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="como-funciona" />
      {/* FOOTER LINKS */}
      <footer className="bg-gray-950 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <a href="/precos" className="hover:text-white transition-colors">Preços</a>
          <a href="/lavanderia-ou-lavar-em-casa" className="hover:text-white transition-colors">Lavanderia ou Lavar em Casa?</a>
          <a href="/" className="hover:text-white transition-colors">Início</a>
          <a href="/empresarial" className="hover:text-white transition-colors">Soluções Empresariais</a>
        </div>
        <p className="text-center text-gray-700 text-xs mt-6">
          © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
