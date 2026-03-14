"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";

export default function CortinasPage() {
  const whatsappLink = getWhatsAppLink("cortinas");

  return (
    <div className="min-h-screen bg-violet-950 text-white">
      <header className="fixed top-0 w-full z-50 bg-[#7C3AED]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            A7 Lavanderia
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#7C3AED] font-semibold px-5 py-2 rounded-full text-sm hover:bg-violet-50 transition-colors"
          >
            Agendar no WhatsApp
          </a>
        </div>
      </header>

      <section className="relative h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1400&q=80"
          alt="Ambiente elegante com cortinas"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/95 via-violet-950/55 to-violet-950/10" />
        <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight max-w-2xl"
          >
            Cortinas Limpas Mudam o Ambiente
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-violet-100 max-w-xl leading-relaxed"
          >
            Higienização especializada sem tirar da janela — aspiração ultrassônica e tratamento anti-ácaros
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
              className="inline-block bg-[#7C3AED] hover:bg-violet-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              Quero Higienizar Minhas Cortinas
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#7C3AED] py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "98%", label: "remoção de ácaros" },
            { value: "Sem tirar", label: "da janela" },
            { value: "+1.500", label: "cortinas higienizadas" },
            { value: "Desde 2019", label: "atendendo clientes" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold">{stat.value}</p>
              <p className="text-violet-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-violet-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">O Problema que Você Provavelmente Ignora</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🦠",
                title: "Ácaros acumulados",
                desc: "Cortinas fechadas retêm milhões de ácaros invisíveis que causam alergias, espirros e rinite.",
              },
              {
                icon: "👃",
                title: "Odor impregnado",
                desc: "Cozinha, cigarro, animais de estimação — as cortinas absorvem tudo sem que você perceba.",
              },
              {
                icon: "🟡",
                title: "Manchas amarelas",
                desc: "O acúmulo de poeira e gordura deixa manchas na barra e nas dobras que não saem com pano.",
              },
              {
                icon: "⚠️",
                title: "Tecido frágil",
                desc: "Lavar em máquina comum deforma, desfia e desbota. Cada tecido exige tratamento específico.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-violet-900/50 border border-violet-800 rounded-2xl p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-violet-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-violet-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Nosso Processo</h2>
          <p className="text-center text-violet-300 mb-12">Tudo feito sem você precisar tirar as cortinas da janela</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Vistoria in loco", desc: "Avaliamos o tipo de tecido, o grau de sujidade e a estrutura de fixação antes de qualquer coisa." },
              { step: "02", title: "Aspiração ultrassônica", desc: "Equipamento profissional remove ácaros, poeira e alérgenos sem mover as cortinas da janela." },
              { step: "03", title: "Lavagem específica", desc: "Produto adequado ao tecido (voil, blackout, sheer...) aplicado com segurança e precisão." },
              { step: "04", title: "Devolução dobrada", desc: "Suas cortinas ficam perfumadas, limpas e perfeitamente dobradas, prontas para usar." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#7C3AED] text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-violet-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-violet-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Tipos de Cortina que Atendemos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Blackout", desc: "Higienização sem deformação da camada opacificante" },
              { name: "Voil", desc: "Tratamento delicado para tecido transparente e leve" },
              { name: "Sheer", desc: "Limpeza suave para cortinas semitransparentes" },
              { name: "Persiana", desc: "Limpeza de lâminas e trilhos internos" },
              { name: "Cortina de banheiro", desc: "Remoção de mofo, calcário e sabonete acumulado" },
              { name: "Painel", desc: "Higienização de painéis japoneses e painéis plissados" },
            ].map((type) => (
              <div key={type.name} className="bg-violet-900/40 border border-violet-700 rounded-xl p-5 hover:border-[#7C3AED] transition-colors">
                <h3 className="font-bold text-lg mb-1">{type.name}</h3>
                <p className="text-violet-300 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-violet-900/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">O que Nossos Clientes Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Fernanda Lima",
                city: "São José dos Campos",
                text: "Meu filho tinha rinite crônica e eu não sabia o que causava. Depois de higienizar as cortinas com a A7, as crises reduziram em 80%. Incrível!",
              },
              {
                name: "Maurício Andrade",
                city: "Taubaté",
                text: "Nunca imaginei que daria pra higienizar sem tirar da janela. O processo foi super rápido e as cortinas ficaram como novas. Vou repetir a cada 6 meses.",
              },
              {
                name: "Cláudia Ferreira",
                city: "Jacareí",
                text: "Tenho cortinas de voil que são muito delicadas. Eu tinha medo de estragar. A A7 tratou com cuidado total e o resultado ficou lindo. Super recomendo.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-violet-900/50 border border-violet-800 rounded-2xl p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-violet-100 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-violet-400 text-xs">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#7C3AED]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Sua casa merece ar limpo e cortinas impecáveis</h2>
          <p className="text-violet-200 mb-8 text-lg">Agende agora e receba orçamento gratuito em minutos</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#7C3AED] font-bold px-10 py-4 rounded-xl text-lg hover:bg-violet-50 transition-colors shadow-lg"
          >
            Solicitar Orçamento Gratuito
          </a>
        </div>
      </section>

      <section className="py-20 bg-violet-950">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Vocês higienizam sem tirar a cortina da janela?",
                a: "Sim! Usamos equipamento de aspiração ultrassônica que elimina ácaros e alérgenos no local. Para cortinas que precisam de lavagem completa, retiramos, lavamos e reinstalamos sem custo adicional.",
              },
              {
                q: "Qual o prazo de entrega?",
                a: "Para higienização no local (aspiração), o serviço é feito no mesmo dia. Para lavagem completa com retirada, o prazo é de 48 a 72 horas dependendo do tipo de tecido.",
              },
              {
                q: "Vocês trabalham com tecidos delicados?",
                a: "Sim. Temos profissionais treinados e produtos específicos para voil, sheer, blackout, organza e outros tecidos sensíveis. Nunca usamos processos agressivos que possam danificar as fibras.",
              },
              {
                q: "Com que frequência devo higienizar minhas cortinas?",
                a: "Recomendamos a cada 6 meses para ambientes comuns. Em casas com pets, fumantes ou pessoas alérgicas, o ideal é a cada 3 meses.",
              },
              {
                q: "Qual é o preço por metro?",
                a: "O valor varia conforme o tipo de tecido, tamanho e o processo escolhido (aspiração local ou lavagem completa). Entre em contato pelo WhatsApp para receber um orçamento personalizado gratuito.",
              },
            ].map((item) => (
              <details key={item.q} className="bg-violet-900/40 border border-violet-800 rounded-xl group">
                <summary className="p-5 font-semibold cursor-pointer list-none flex justify-between items-center hover:text-violet-300 transition-colors">
                  {item.q}
                  <span className="text-[#7C3AED] group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="px-5 pb-5 text-violet-300 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-violet-950 border-t border-violet-800 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-violet-400 text-sm">© 2025 A7 Lavanderia. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/tapetes" className="text-violet-300 hover:text-white transition-colors">
              Higienização de Tapetes
            </Link>
            <Link href="/" className="text-violet-300 hover:text-white transition-colors">
              Voltar ao início
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
