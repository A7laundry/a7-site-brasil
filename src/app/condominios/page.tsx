"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "Desconto exclusivo", label: "para moradores" },
  { value: "Coleta na portaria", label: "sem sair de casa" },
  { value: "+30 condomínios", label: "parceiros ativos" },
  { value: "App de agendamento", label: "fácil e rápido" },
];

const PAIN_POINTS = [
  {
    icon: "🕐",
    title: "Moradores perdem horas com roupa",
    body: "Fim de semana perdido em lavanderia ou esperando máquina em casa. Um benefício de lavanderia muda isso para toda a família.",
  },
  {
    icon: "📦",
    title: "Portaria recebe volumes sem controle",
    body: "Encomendas, entregas, motoboys — a portaria já tem muito trabalho. Nosso sistema de coleta é organizado, programado e nunca gera transtorno.",
  },
  {
    icon: "🏷️",
    title: "Condomínio não oferece diferenciais reais",
    body: "Academia, salão de festas — todo mundo tem. Parceria com lavanderia premium é um diferencial que poucos condomínios oferecem.",
  },
  {
    icon: "📋",
    title: "Gestão sem visibilidade",
    body: "Síndico não sabe quantos moradores usam o serviço, não tem relatório, não tem dados. Com a A7, você recebe relatório mensal completo.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Proposta para o síndico",
    body: "Enviamos apresentação personalizada para o síndico ou administradora. Sem burocracia, sem custo para o condomínio.",
  },
  {
    step: "02",
    title: "Ponto de coleta na portaria",
    body: "Definimos junto com o condomínio o melhor local de entrega das peças. Moradores deixam sacolinhas identificadas.",
  },
  {
    step: "03",
    title: "Código de desconto para moradores",
    body: "Cada morador recebe um código exclusivo do condomínio. Desconto automático em todos os pedidos.",
  },
  {
    step: "04",
    title: "Relatório mensal para a gestão",
    body: "O síndico recebe relatório mensal com uso, satisfação e volume. Dados reais para mostrar valor do benefício.",
  },
];

const SERVICES = [
  {
    icon: "👗",
    title: "Roupas do Dia a Dia",
    body: "Lavagem, secagem e passadoria completa. Roupas dobradas e embaladas, prontas para o guarda-roupa de cada morador.",
  },
  {
    icon: "🛏️",
    title: "Cama & Banho",
    body: "Lençóis, fronhas, toalhas e cobertores higienizados com padrão de hotel. Processo anti-ácaros certificado.",
  },
  {
    icon: "✨",
    title: "Peças Especiais",
    body: "Ternos, vestidos, cashmere e tecidos delicados. Tratamento individualizado para cada peça.",
  },
  {
    icon: "📅",
    title: "Plano Mensal",
    body: "Plano com desconto adicional para moradores que assinam mensalmente. Coleta recorrente sem precisar lembrar de agendar.",
  },
  {
    icon: "🏢",
    title: "Corporativo (Funcionários)",
    body: "Uniformes dos funcionários do condomínio — porteiros, zeladores, equipe de limpeza — incluídos no contrato.",
  },
  {
    icon: "🎉",
    title: "Salão de Festas",
    body: "Toalhas, lençóis e itens de enxoval do salão de festas lavados após cada evento. Encomenda avulsa ou contrato fixo.",
  },
];

const TESTIMONIALS = [
  {
    name: "Marcos Almeida",
    role: "Síndico — Residencial Vila Verde, SJC",
    text: "A parceria com a A7 foi uma das melhores decisões que tomamos. Moradores adoraram o desconto, a portaria não tem trabalho extra e ainda recebo relatório todo mês. Muito profissional.",
  },
  {
    name: "Fernanda Lopes",
    role: "Moradora — Condomínio Parque Atlântico",
    text: "O código de desconto é real, não é marketing. Economizo uns R$30 por mês comparado ao que pagava antes. E a qualidade da A7 é muito melhor do que a lavanderia que eu usava.",
  },
  {
    name: "Ricardo Nogueira",
    role: "Morador — Edifício Jardim das Nações, Taubaté",
    text: "Coleta na portaria é uma comodidade absurda. Deixo a sacola na sexta e pego na segunda. Nunca precisei sair de casa para levar ou buscar.",
  },
];

const FAQ = [
  {
    q: "Como fazer a parceria com o condomínio?",
    a: "É simples: entre em contato pelo WhatsApp e enviamos uma apresentação completa para o síndico ou administradora. A parceria é formalizada sem custo para o condomínio. Não há contrato de exclusividade — moradores continuam livres para usar outros serviços.",
  },
  {
    q: "Os moradores têm desconto real?",
    a: "Sim. Cada morador recebe um código exclusivo do condomínio que aplica desconto automático em todos os pedidos. O percentual de desconto é definido no contrato da parceria, normalmente entre 10% e 20%.",
  },
  {
    q: "A portaria precisa fazer alguma coisa?",
    a: "O trabalho da portaria é mínimo: receber e guardar as sacolas identificadas dos moradores. Nosso motoboy chega no horário combinado, coleta tudo de uma vez e devolve da mesma forma. É organizado e não gera filas ou confusão.",
  },
  {
    q: "Os funcionários do condomínio também podem usar?",
    a: "Sim. Porteiros, zeladores e equipe de limpeza podem ter seus uniformes incluídos no contrato ou usar o desconto de morador. Consulte as condições na proposta personalizada.",
  },
  {
    q: "Como apresentar a A7 para o síndico?",
    a: "Você mesmo pode indicar pelo WhatsApp e nós entramos em contato com o síndico. Ou pode encaminhar nossa apresentação diretamente para ele. Também fazemos apresentação presencial ou por videoconferência para condomínios maiores.",
  },
];

export default function CondominiosPage() {
  const waLink = getWhatsAppLink("condominios");

  return (
    <div className="min-h-screen bg-slate-950">
      <ServiceSchema name="Lavanderia para Condomínios" description="Parceria com condomínios: desconto exclusivo para moradores, coleta na portaria e relatório mensal para a administração." slug="condominios" />
      <header className="fixed top-0 w-full z-50 bg-sky-700/90 backdrop-blur-md border-b border-sky-600/40">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/">
            
            <img src="/logo-light.png" alt="A7 Lavanderia" className="h-8 w-auto" />
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-white hover:bg-sky-50 text-sky-700 text-sm font-bold px-5 py-2.5 rounded transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Proposta para o síndico
          </a>
        </div>
      </header>

      <section className="relative h-screen flex items-end pb-24 pt-14">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80"
          alt="Condomínio residencial moderno"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-slate-950/10" />

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-sky-400" />
              <span className="text-sky-400 text-xs font-bold uppercase tracking-[0.16em]">
                Parceria B2B · Condomínios Residenciais
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.92] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)" }}
            >
              Benefício de Lavanderia
              <br />
              para Todo o{" "}
              <span className="text-sky-400">Condomínio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Parceria corporativa com condomínios —{" "}
              <strong className="text-white">desconto para moradores</strong> e serviço de portaria exclusivo. Zero custo para a gestão do condomínio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-3 bg-sky-700 hover:bg-sky-600 text-white font-black text-lg px-8 py-5 rounded transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Solicitar proposta
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-base px-6 py-5 rounded transition-colors"
              >
                Como funciona
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {["Sem custo para o condomínio", "Desconto real para moradores", "Coleta na portaria", "+30 parceiros ativos"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/50">
                  <svg className="w-3 h-3 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-sky-700 py-10">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-white font-black text-xl leading-tight tracking-tight">{s.value}</p>
                <p className="text-sky-200 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-4">
              O problema
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight">
              O que moradores e síndicos enfrentam hoje
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PAIN_POINTS.map((p) => (
              <div key={p.title} className="flex gap-5 p-7 bg-slate-800 border border-slate-700 hover:border-sky-700 transition-colors">
                <span className="text-3xl flex-shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-base mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-4">
              Como funciona
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Da proposta ao primeiro desconto em 4 passos
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="bg-slate-900 border border-slate-800 p-7 hover:border-sky-700 transition-colors">
                <span className="text-sky-400 font-black text-3xl block mb-4">{step.step}</span>
                <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-4">
              Serviços disponíveis
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Tudo que o condomínio e os moradores precisam
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="border border-slate-700 bg-slate-800/50 p-7 hover:border-sky-600 transition-colors">
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-bold text-white text-base mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-14">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-4">
              Proposta para o síndico
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              O que está incluído na parceria A7
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                "Código de desconto exclusivo do condomínio",
                "Ponto de coleta organizado na portaria",
                "Coleta programada — sem surpresas",
                "Relatório mensal de uso e satisfação",
                "Atendimento dedicado para o síndico",
                "Uniformes dos funcionários incluídos na proposta",
                "Serviço de salão de festas disponível",
                "Sem custo de adesão para o condomínio",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-slate-900 border border-sky-700/40 p-8">
              <h3 className="text-white font-black text-xl mb-3">Solicite a proposta agora</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Envie uma mensagem pelo WhatsApp com o nome do condomínio e o número de unidades. Nossa equipe prepara uma proposta personalizada em até 1 dia útil.
              </p>
              <a
                href={waLink}
                className="inline-flex items-center gap-3 w-full justify-center bg-sky-700 hover:bg-sky-600 text-white font-black text-base px-6 py-4 rounded transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Quero a proposta para meu condomínio
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">
            O que síndicos e moradores dizem
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-slate-700 bg-slate-800 p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-sky-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-sky-900 text-sky-300 flex items-center justify-center font-black text-sm rounded flex-shrink-0 mt-0.5">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{t.name}</p>
                    <p className="text-[10px] text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sky-700">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mb-4">
            Seu condomínio pode ter esse benefício hoje
          </h2>
          <p className="text-sky-100 text-lg mb-10 max-w-xl mx-auto">
            Mais de 30 condomínios já têm parceria ativa com a A7. Moradores satisfeitos, gestão sem esforço. Peça sua proposta agora.
          </p>
          <a
            href={waLink}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-sky-50 text-sky-700 font-black text-lg px-10 py-5 rounded transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Solicitar proposta pelo WhatsApp
          </a>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-white mb-10">Perguntas frequentes sobre a parceria</h2>
          <div className="space-y-px">
            {FAQ.map((item) => (
              <details key={item.q} className="group border border-slate-800 bg-slate-900">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-800 transition-colors">
                  <span className="font-semibold text-slate-100 text-sm pr-4">{item.q}</span>
                  <svg
                    className="w-4 h-4 text-slate-500 flex-shrink-0 group-open:rotate-180 transition-transform"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="condominios" />
      <footer className="bg-slate-950 border-t border-slate-900 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <Link href="/lavagem-roupas" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Lavagem de Roupas
            </Link>
            <Link href="/empresarial" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Empresarial
            </Link>
            <Link href="/vale-do-paraiba" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Vale do Paraíba
            </Link>
          </div>
          <a href={waLink} className="text-xs text-sky-400 font-semibold hover:text-sky-300 transition-colors">
            Solicitar proposta →
          </a>
        </div>
      </footer>
    </div>
  );
}
