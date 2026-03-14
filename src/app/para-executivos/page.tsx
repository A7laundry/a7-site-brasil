"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";

export default function ParaExecutivosPage() {
  const whatsappLink = getWhatsAppLink("para-executivos");

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed top-0 w-full z-50 bg-[#1D4ED8]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            A7 Lavanderia
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1D4ED8] font-semibold px-5 py-2 rounded-full text-sm hover:bg-blue-50 transition-colors"
          >
            Agendar Coleta Express
          </a>
        </div>
      </header>

      <section className="relative h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=80"
          alt="Executivo profissional"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-slate-950/10" />
        <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="bg-[#1D4ED8] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              Serviço Premium para Executivos
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight max-w-2xl"
          >
            Sua Imagem Profissional Começa na Roupa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-blue-100 max-w-xl leading-relaxed"
          >
            Higienização e passagem premium para executivos — ternos, camisas sociais e trajes de negócios
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
              className="inline-block bg-[#1D4ED8] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              Agendar Coleta no Escritório
            </a>
            <a
              href="#express"
              className="inline-block border border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Ver Serviço 24h
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#1D4ED8] py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "24h", label: "serviço express" },
            { value: "Entrega", label: "no escritório" },
            { value: "+900", label: "executivos atendidos" },
            { value: "SLA", label: "garantido" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold">{stat.value}</p>
              <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Problemas que Custam Sua Credibilidade</h2>
          <p className="text-center text-slate-400 mb-12">Na sala de reuniões, cada detalhe conta</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "👔",
                title: "Terno amassado",
                desc: "Chegou de viagem ou direto de casa. Terno amassado transmite desleixo numa reunião de R$100 mil.",
              },
              {
                icon: "🟡",
                title: "Colarinhos amarelados",
                desc: "Manchas de suor no colarinho de camisa branca são visíveis de longe. Impressão irreversível.",
              },
              {
                icon: "🔴",
                title: "Manchas visíveis",
                desc: "Aquela mancha de café ou vinho que ficou do jantar de ontem. Em reunião, é o que todo mundo vê.",
              },
              {
                icon: "⏰",
                title: "Sem tempo para lavar",
                desc: "Agenda cheia, viagens, reuniões. Não existe horário para cuidar da apresentação pessoal sozinho.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">O que Higienizamos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Ternos & Paletós", desc: "Lavagem a seco premium, passagem profissional e entrega em cabide" },
              { name: "Camisas Sociais", desc: "Passagem de gola, mangas e punhos com acabamento de alfaiataria" },
              { name: "Gravatas & Lenços", desc: "Limpeza delicada de seda e tecidos nobres sem deformar" },
              { name: "Tailleur Feminino", desc: "Higienização e passagem para blazers e saias sociais" },
              { name: "Acessórios", desc: "Limpeza de porta-cartas, agendas e pequenos acessórios de escritório" },
              { name: "Maletas & Pastas", desc: "Higienização exterior de couro e materiais nobres" },
            ].map((type) => (
              <div key={type.name} className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-[#1D4ED8] transition-colors">
                <h3 className="font-bold text-lg mb-1">{type.name}</h3>
                <p className="text-slate-400 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="express" className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#1D4ED8] to-blue-500 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Express 24h
              </span>
              <h2 className="text-3xl font-bold mt-4 mb-4">Reunião amanhã de manhã?</h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                Serviço prioritário para executivos com prazos urgentes. Coleta até as 18h, entrega até as 8h do dia seguinte — direto no seu escritório ou portaria.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Coleta até as 18h00",
                  "Entrega até as 8h00 do dia seguinte",
                  "Passagem profissional garantida",
                  "Disponível de segunda a sábado",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-blue-100 text-sm">
                    <span className="text-white font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#1D4ED8] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Ativar Serviço Express
              </a>
            </div>
            <div className="flex-shrink-0 text-center">
              <div className="text-8xl font-black opacity-30">24h</div>
              <p className="text-blue-200 text-sm mt-2">prazo express</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Serviço Concierge</h2>
          <p className="text-center text-slate-400 mb-12">Coleta e entrega no seu prédio, sem você sair do escritório</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: "🏢", title: "Coleta no edifício", desc: "Nosso concierge busca na recepção ou portaria do seu escritório no horário agendado." },
              { icon: "📦", title: "Entrega antes das reuniões", desc: "Agende a entrega para antes do seu compromisso importante. Pontualidade garantida." },
              { icon: "🔔", title: "Notificação em tempo real", desc: "Receba confirmação de coleta e entrega diretamente no WhatsApp para ter total controle." },
            ].map((b) => (
              <div key={b.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <div className="text-5xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-xl mb-3">{b.title}</h3>
                <p className="text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">O que Executivos Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alexandre Monteiro",
                title: "CEO, empresa de tecnologia",
                city: "São José dos Campos",
                text: "Faço reuniões de alto impacto toda semana. A A7 garante que minhas roupas estão sempre impecáveis. Nunca mais me preocupo com terno amassado ou camisa com mancha.",
              },
              {
                name: "Dra. Camila Fonseca",
                title: "Advogada tributarista",
                city: "São José dos Campos",
                text: "No Tribunal, aparência é parte da estratégia. O serviço express da A7 me salva quando tenho audiência de última hora. Coleto hoje, entrego amanhã cedo. Perfeito.",
              },
              {
                name: "Eduardo Salgado",
                title: "Consultor financeiro",
                city: "Taubaté",
                text: "Viajo muito e quando volto sempre tenho reunião logo no dia seguinte. A A7 coleta as roupas da viagem e entrega passadas antes do meu café da manhã. Essencial.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-[#1D4ED8] text-xs font-medium">{t.title}</p>
                <p className="text-slate-500 text-xs">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1D4ED8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Sua imagem é seu ativo mais valioso</h2>
          <p className="text-blue-200 mb-8 text-lg">Profissionais de alto desempenho não deixam os detalhes ao acaso</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#1D4ED8] font-bold px-10 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Agendar Coleta no Escritório
          </a>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Qual o prazo para o serviço express?",
                a: "O serviço express garante devolução em até 24 horas. Coleta até as 18h, entrega até as 8h do dia seguinte. Disponível de segunda a sábado, sujeito a disponibilidade — confirme pelo WhatsApp.",
              },
              {
                q: "Vocês entregam no escritório?",
                a: "Sim. Coletamos e entregamos na recepção ou portaria do seu edifício comercial. Você só precisa informar o endereço e horário preferido para coleta e entrega.",
              },
              {
                q: "Qual o processo para ternos?",
                a: "Utilizamos lavagem a seco com solventes premium que preservam o caimento, a estrutura e o tecido do terno. Em seguida, passagem profissional com vapor e entrega em cabide.",
              },
              {
                q: "Qual o preço para camisa social?",
                a: "O valor por camisa social inclui lavagem, tratamento de manchas no colarinho e punhos, e passagem profissional completa. Consulte nossa tabela atualizada pelo WhatsApp.",
              },
              {
                q: "Qual a frequência recomendada para ternos?",
                a: "Para executivos que usam ternos com frequência, recomendamos higienização a cada 4 a 6 semanas. Usar o mesmo terno sem lavar por muito tempo acelera o desgaste do tecido.",
              },
            ].map((item) => (
              <details key={item.q} className="bg-slate-900 border border-slate-800 rounded-xl group">
                <summary className="p-5 font-semibold cursor-pointer list-none flex justify-between items-center hover:text-blue-300 transition-colors">
                  {item.q}
                  <span className="text-[#1D4ED8] group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-slate-800 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2025 A7 Lavanderia. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/premium" className="text-slate-400 hover:text-white transition-colors">
              Serviços Premium
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
