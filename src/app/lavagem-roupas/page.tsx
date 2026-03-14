"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";

export default function LavagemRoupasPage() {
  const whatsappLink = getWhatsAppLink("lavagem-roupas");

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed top-0 w-full z-50 bg-[#0891B2]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            A7 Lavanderia
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0891B2] font-semibold px-5 py-2 rounded-full text-sm hover:bg-cyan-50 transition-colors"
          >
            Agendar Coleta
          </a>
        </div>
      </header>

      <section className="relative h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1400&q=80"
          alt="Roupas limpas e dobradas"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-slate-950/10" />
        <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight max-w-2xl"
          >
            Sua Roupa Limpa, Passada e Dobrada
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-cyan-100 max-w-xl leading-relaxed"
          >
            Lavagem completa do cotidiano — coleta, lava, passa e entrega organizada em 48h
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
              className="inline-block bg-[#0891B2] hover:bg-cyan-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              Agendar Minha Primeira Coleta
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0891B2] py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "48h", label: "prazo de devolução" },
            { value: "Coleta & Entrega", label: "na sua porta" },
            { value: "Passado", label: "e dobrado" },
            { value: "Desde 2019", label: "atendendo clientes" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold">{stat.value}</p>
              <p className="text-cyan-100 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Você se Identifica com Algum Desses Problemas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📦",
                title: "Pilha crescendo",
                desc: "Aquela cadeira ou cesto que nunca esvazia. Roupa suja acumulando sem fim de semana para resolver.",
              },
              {
                icon: "⏰",
                title: "Sem tempo para lavar",
                desc: "Entre trabalho, filhos e compromissos, a roupa vai ficando para depois — até não ter mais o que vestir.",
              },
              {
                icon: "🔥",
                title: "Passar roupa é interminável",
                desc: "Horas em frente ao ferro de passar. Dor nas costas, tempo perdido e roupa ainda amassando depois.",
              },
              {
                icon: "😤",
                title: "Roupa voltando amassada",
                desc: "Lavou, estendeu, dobrou — e ainda assim chegou amassada. Sem passagem profissional, não tem jeito.",
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

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Como Funciona</h2>
          <p className="text-center text-slate-400 mb-12">Da sua porta de volta à sua porta, sem você sair de casa</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: "01", title: "Agendar", desc: "Pelo WhatsApp em menos de 5 minutos" },
              { step: "02", title: "Coleta", desc: "Nosso motoboy busca na sua porta" },
              { step: "03", title: "Triagem", desc: "Separamos por cor, tipo e tecido" },
              { step: "04", title: "Lavagem", desc: "Ciclo ideal para cada tipo de peça" },
              { step: "05", title: "Passagem", desc: "Cada peça passada individualmente" },
              { step: "06", title: "Entrega", desc: "Dobrado ou em cabides, organizado" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#0891B2] text-white font-extrabold text-sm flex items-center justify-center mx-auto mb-3">
                  {s.step}
                </div>
                <h3 className="font-bold text-sm mb-1">{s.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">O que Lavamos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Camisas & Blusas", desc: "Passagem impecável, sem marcas de ferro" },
              { name: "Calças & Jeans", desc: "Lavagem profunda sem deformar o caimento" },
              { name: "Camisetas & Básicos", desc: "Lavagem a granel com cuidado individual" },
              { name: "Roupas de Cama", desc: "Lençóis e fronhas dobrados e perfumados" },
              { name: "Toalhas", desc: "Macias e bem secas, sem cheiro de mofo" },
              { name: "Ternos & Formais", desc: "Tratamento especial a seco ou semi-seco" },
            ].map((type) => (
              <div key={type.name} className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-[#0891B2] transition-colors">
                <h3 className="font-bold text-lg mb-1">{type.name}</h3>
                <p className="text-slate-400 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Entrega Organizada, Sem Confusão</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: "👔", title: "Separado por tipo", desc: "Camisas nas camisas, calças nas calças. Nunca misturamos." },
              { icon: "🎽", title: "Dobrado ou no cabide", desc: "Você escolhe como quer receber — dobrado em pilha ou pendurado." },
              { icon: "🛡️", title: "Sem trocas ou perdas", desc: "Cada lote é identificado e fotografado na entrada. Rastreabilidade total." },
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
          <h2 className="text-3xl font-bold text-center mb-12">Quem já usa a A7</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Renata Carvalho",
                city: "São José dos Campos",
                text: "Mãe de dois filhos e trabalho em tempo integral. A A7 salvou meu fim de semana. Roupa sempre pronta, passada e dobrada. Não consigo imaginar minha vida sem esse serviço.",
              },
              {
                name: "Diego Almeida",
                city: "Taubaté",
                text: "Achei que fosse caro, mas calculei o tempo que eu gastava lavando e passando — eram quase 6 horas por semana. Agora pago a A7 e tenho esse tempo de volta.",
              },
              {
                name: "Simone Rocha",
                city: "Caçapava",
                text: "A entrega organizada me surpreendeu. Cada tipo de roupa separado, tudo dobrado certinho. Parece que saiu de uma loja. É muito melhor do que eu mesma consigo fazer.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-slate-500 text-xs">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0891B2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Chega de pilha de roupa acumulando</h2>
          <p className="text-cyan-100 mb-8 text-lg">Agende agora e tenha sua roupa de volta em 48h, limpa e passada</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#0891B2] font-bold px-10 py-4 rounded-xl text-lg hover:bg-cyan-50 transition-colors shadow-lg"
          >
            Agendar Coleta Agora
          </a>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "O preço é por kg ou por peça?",
                a: "Trabalhamos com precificação por peça, o que garante mais transparência. Você sabe exatamente quanto vai pagar por cada item antes da coleta. Consulte nossa tabela pelo WhatsApp.",
              },
              {
                q: "Como faço para separar as roupas?",
                a: "Pode enviar tudo junto! Nossa equipe faz a triagem por cor, tipo de tecido e ciclo de lavagem ideal. Só separe o que for muito delicado ou que você queira lavagem especial.",
              },
              {
                q: "Qual o prazo de entrega?",
                a: "O prazo padrão é de 48 horas para roupas do dia a dia. Para peças delicadas ou volumes grandes, pode ser até 72 horas. Informamos sempre o prazo exato na confirmação.",
              },
              {
                q: "A passagem já está inclusa no preço?",
                a: "Sim! A passagem profissional já está inclusa no valor por peça. Você recebe tudo passado e pronto para usar ou guardar.",
              },
              {
                q: "O que acontece se um item for perdido?",
                a: "Todas as peças são fotografadas e catalogadas na entrada. Em caso de qualquer inconveniente (extremamente raro), cobrimos integralmente a reposição do item.",
              },
            ].map((item) => (
              <details key={item.q} className="bg-slate-900 border border-slate-800 rounded-xl group">
                <summary className="p-5 font-semibold cursor-pointer list-none flex justify-between items-center hover:text-cyan-300 transition-colors">
                  {item.q}
                  <span className="text-[#0891B2] group-open:rotate-45 transition-transform text-xl">+</span>
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
            <Link href="/plano-mensal" className="text-slate-400 hover:text-white transition-colors">
              Plano Mensal
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
