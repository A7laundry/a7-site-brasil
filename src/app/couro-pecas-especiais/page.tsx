"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";

export default function CouroPecasEspeciaisPage() {
  const whatsappLink = getWhatsAppLink("couro-pecas-especiais");

  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <header className="fixed top-0 w-full z-50 bg-[#92400E]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            A7 Lavanderia
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#92400E] font-semibold px-5 py-2 rounded-full text-sm hover:bg-amber-50 transition-colors"
          >
            Solicitar Orçamento
          </a>
        </div>
      </header>

      <section className="relative h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1400&q=80"
          alt="Jaqueta e bolsa de couro"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/55 to-stone-950/10" />
        <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight max-w-2xl"
          >
            Couro Tratado como Merece
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-amber-100 max-w-xl leading-relaxed"
          >
            Higienização e hidratação profissional para jaquetas, bolsas, sapatos e peças de couro genuíno
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
              className="inline-block bg-[#92400E] hover:bg-amber-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              Salvar Minha Peça de Couro
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#92400E] py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "Zero danos", label: "ao material" },
            { value: "+800", label: "peças tratadas" },
            { value: "Hidratação", label: "inclusa no serviço" },
            { value: "Garantia", label: "de resultado" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold">{stat.value}</p>
              <p className="text-amber-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-stone-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">O Couro Sofre Mais do Que Você Imagina</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                icon: "🏜️",
                title: "Couro ressecado",
                desc: "Sem hidratação periódica, o couro perde flexibilidade, racha e se deteriora irreversivelmente.",
              },
              {
                icon: "🟤",
                title: "Manchas difíceis",
                desc: "Gordura, chuva e produtos de limpeza errados penetram fundo no couro e não saem com pano seco.",
              },
              {
                icon: "⚠️",
                title: "Descamação",
                desc: "Couro seco e sem trato começa a descamar, destruindo o acabamento e o visual da peça.",
              },
              {
                icon: "👃",
                title: "Odor impregnado",
                desc: "Suor, umidade e mofo se alojam no couro e criam um cheiro que não sai com nenhum spray caseiro.",
              },
              {
                icon: "🔧",
                title: "Dano por DIY",
                desc: "Água, sabão comum e esfregão destroem a camada protetora. Tentativas caseiras pioram o estado.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-stone-900 border border-stone-800 rounded-2xl p-5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                <p className="text-stone-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">O que Atendemos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Jaquetas de Couro", desc: "Limpeza profunda, hidratação e restauração de cor sem alterar o toque" },
              { name: "Bolsas de Grife", desc: "Tratamento especializado preservando acabamentos e ferragens originais" },
              { name: "Sapatos & Botas", desc: "Limpeza interna e externa, hidratação e impermeabilização" },
              { name: "Cintos", desc: "Remoção de manchas e hidratação para evitar rachaduras e descamação" },
              { name: "Sofás de Couro", desc: "Higienização profunda com produtos específicos para estofados de couro" },
              { name: "Acessórios", desc: "Carteiras, porta-documentos, capas e demais acessórios de couro genuíno" },
            ].map((type) => (
              <div key={type.name} className="bg-stone-900 border border-stone-800 rounded-xl p-5 hover:border-[#92400E] transition-colors">
                <h3 className="font-bold text-lg mb-1">{type.name}</h3>
                <p className="text-stone-400 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Nosso Processo</h2>
          <p className="text-center text-stone-400 mb-12">Cada etapa é executada com produtos específicos para couro genuíno</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Avaliação", desc: "Identificamos o tipo de couro, nível de dano e o tratamento adequado para sua peça." },
              { step: "02", title: "Limpeza suave", desc: "Remoção de sujeira superficial com produto neutro e específico para o tipo de couro." },
              { step: "03", title: "Tratamento de manchas", desc: "Técnicas específicas para cada tipo de mancha, sem agredir o material ou a cor." },
              { step: "04", title: "Hidratação", desc: "Aplicação de condicionador premium que restaura a flexibilidade e o brilho natural." },
              { step: "05", title: "Conservação", desc: "Camada protetora final que repele água, poeira e raios UV para durar mais." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#92400E] text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-base mb-2">{s.title}</h3>
                <p className="text-stone-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-900/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-amber-400">O que NÃO Fazer com Couro</h2>
          <p className="text-center text-stone-400 mb-10">Erros comuns que destroem peças valiosas</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { mistake: "Lavar na máquina", reason: "Destrói a camada protetora e deforma o material permanentemente." },
              { mistake: "Usar sabão comum ou detergente", reason: "Remove os óleos naturais do couro, causando ressecamento e rachaduras." },
              { mistake: "Secar ao sol ou com secador", reason: "O calor excessivo queima e enrijece o couro, causando danos irreversíveis." },
              { mistake: "Esfregar com bucha ou escova dura", reason: "Abre arranhões na superfície e danifica o acabamento original." },
              { mistake: "Guardar úmido ou em plástico", reason: "Cria ambiente ideal para mofo, que penetra fundo e deixa manchas permanentes." },
              { mistake: "Aplicar produtos de couro sintético", reason: "Fórmulas para couro artificial podem danificar o couro genuíno de forma irreversível." },
            ].map((item) => (
              <div key={item.mistake} className="bg-stone-950 border border-red-900/40 rounded-xl p-4 flex gap-3">
                <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                <div>
                  <h3 className="font-bold text-red-400 text-sm">{item.mistake}</h3>
                  <p className="text-stone-400 text-xs mt-1">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Peças Salvas, Clientes Felizes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Beatriz Lemos",
                city: "São José dos Campos",
                text: "Tinha uma bolsa Louis Vuitton com uma mancha de caneta que eu achei que era perda total. A A7 removeu completamente e hidratou. A bolsa parece nova. Valeu cada centavo.",
              },
              {
                name: "Rafael Campos",
                city: "Taubaté",
                text: "Minha jaqueta de couro vintage estava ressecada e começando a descamar. Depois do tratamento, ficou macia e brilhante como quando comprei. Recomendo demais.",
              },
              {
                name: "Isabela Martins",
                city: "Jacareí",
                text: "Levei um par de botas de couro que estavam com mofo após um período guardado. Saíram perfeitas. O pessoal é super cuidadoso e conhece muito do material.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-stone-300 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-stone-500 text-xs">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#92400E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Não arrisque perder sua peça de couro</h2>
          <p className="text-amber-200 mb-8 text-lg">Orçamento gratuito. Sem compromisso. Avaliamos sua peça e informamos o diagnóstico.</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#92400E] font-bold px-10 py-4 rounded-xl text-lg hover:bg-amber-50 transition-colors shadow-lg"
          >
            Solicitar Orçamento Gratuito
          </a>
        </div>
      </section>

      <section className="py-20 bg-stone-950">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Quais tipos de couro vocês tratam?",
                a: "Atendemos couro bovino genuíno, couro napa, couro graxo, suede, nubuck e camurça. Cada tipo recebe produtos e técnicas específicas. Não trabalhamos com couro sintético (PU/PVC).",
              },
              {
                q: "Qual o prazo de entrega?",
                a: "O prazo depende do estado da peça e do tratamento necessário. Em geral, entre 3 a 7 dias úteis. Peças com restauração mais complexa podem levar até 10 dias. Informamos o prazo exato na avaliação.",
              },
              {
                q: "Quanto custa o tratamento?",
                a: "O valor varia conforme o tipo de peça, tamanho e nível de dano. Entre em contato pelo WhatsApp com uma foto da peça para receber um orçamento personalizado e gratuito.",
              },
              {
                q: "Como devo enviar minha bolsa de grife?",
                a: "Você pode trazer pessoalmente ou agendar a coleta pelo WhatsApp. Para bolsas de alto valor, recomendamos documentar o estado com fotos antes do envio. Todas as peças são fotografadas na entrada.",
              },
              {
                q: "Vocês oferecem garantia no resultado?",
                a: "Sim. Garantimos que o tratamento não vai danificar sua peça. Em casos de manchas muito antigas ou danos severos, apresentamos o diagnóstico honesto antes de qualquer intervenção.",
              },
            ].map((item) => (
              <details key={item.q} className="bg-stone-900 border border-stone-800 rounded-xl group">
                <summary className="p-5 font-semibold cursor-pointer list-none flex justify-between items-center hover:text-amber-300 transition-colors">
                  {item.q}
                  <span className="text-[#92400E] group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="px-5 pb-5 text-stone-400 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 border-t border-stone-800 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-600 text-sm">© 2025 A7 Lavanderia. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/roupas-delicadas" className="text-stone-400 hover:text-white transition-colors">
              Roupas Delicadas
            </Link>
            <Link href="/" className="text-stone-400 hover:text-white transition-colors">
              Voltar ao início
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
