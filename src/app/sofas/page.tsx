"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink, COMPANY } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

const HERO_IMG = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=80";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const STATS = [
  { value: "98%", label: "eficácia contra ácaros" },
  { value: "3–5h", label: "de secagem" },
  { value: "+2.800", label: "sofás higienizados" },
  { value: "Desde 2019", label: "no mercado" },
];

const PROBLEMS = [
  {
    icon: "🦠",
    title: "Ácaros invisíveis",
    body: "Um sofá sem higienização pode abrigar até 2 milhões de ácaros. Invisíveis, mas responsáveis por alergias, espirros e problemas respiratórios.",
  },
  {
    icon: "🍷",
    title: "Manchas que ficam",
    body: "Café, vinho, gordura, tinta de criança. Produtos caseiros não atingem a profundidade das fibras e costumam fixar a mancha de vez.",
  },
  {
    icon: "👃",
    title: "Odores impregnados",
    body: "Suor, animais domésticos, umidade — o tecido do sofá absorve tudo. Perfume mascara, mas não resolve. A sujeira continua lá.",
  },
  {
    icon: "🌿",
    title: "Mofo e umidade",
    body: "Ambientes fechados e encharcamentos acidentais criam condições perfeitas para mofo. O problema cresce invisível dentro das fibras.",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Avaliação e orçamento", body: "Mande uma foto pelo WhatsApp. Avaliamos o tecido, tipo de sujidade e passamos o orçamento." },
  { num: "02", title: "Pré-tratamento de manchas", body: "Produtos específicos para cada tipo de mancha. Ação enzimática antes da extração." },
  { num: "03", title: "Extração por via úmida", body: "Máquina de extração industrial que injeta e aspira a solução higienizante das fibras." },
  { num: "04", title: "Vapor a alta temperatura", body: "Elimina bactérias, fungos e ácaros que resistem à extração. 100% nos tecidos." },
  { num: "05", title: "Tratamento antimicrobiano", body: "Aplicação de proteção que inibe a proliferação de microrganismos por até 90 dias." },
  { num: "06", title: "Secagem controlada", body: "Ventilação forçada e monitoramento de umidade. Sofá pronto para uso em 3 a 5 horas." },
];

const BENEFITS = [
  { icon: "🦠", title: "Elimina ácaros", body: "98% de eficácia comprovada. Processo validado para alérgicos e famílias com crianças." },
  { icon: "✨", title: "Remove manchas difíceis", body: "Pré-tratamento enzimático + extração profunda. Manchas que produtos caseiros não alcançam." },
  { icon: "💨", title: "Neutraliza odores", body: "Vapor e tratamento antimicrobiano eliminam odores na origem, sem mascarar com perfume." },
  { icon: "🌿", title: "Trata mofo", body: "Produto antifúngico específico. Elimina colônias de mofo e inibe o recrescimento." },
  { icon: "🧵", title: "Conserva o tecido", body: "Processos adequados a cada tipo de fibra: veludo, linho, couro, sintético e suede." },
  { icon: "📋", title: "Certidão sanitária", body: "Emitimos laudo de higienização para condomínios, hotéis e uso pessoal." },
];

const TESTIMONIALS = [
  {
    name: "Fernanda L.",
    city: "SJC",
    text: "Sofá de couro que meu filho derramou suco há meses. Achei que estava perdido. Voltou sem marca, sem cheiro, como se fosse novo. Serviço incrível.",
  },
  {
    name: "Marcelo A.",
    city: "Taubaté",
    text: "Faço todo ano antes do inverno. Minha filha tem rinite e a diferença é enorme. Recomendo para qualquer família com alérgicos em casa.",
  },
  {
    name: "Silvia C.",
    city: "Jacareí",
    text: "Tinham um cheiro de mofo que eu achei que nunca ia sair. A equipe tratou, devolveu cheiroso e ainda deixaram uma proteção. Meses depois continua impecável.",
  },
];

const FAQ = [
  {
    q: "Quanto tempo dura o processo de higienização?",
    a: "O processo completo leva entre 2 e 4 horas no local. A secagem posterior leva de 3 a 5 horas. Em média, você pode usar o sofá normalmente no mesmo dia à noite.",
  },
  {
    q: "Precisa secar antes de usar?",
    a: "Sim. Após a higienização, o sofá fica levemente úmido. Com ventilação normal do ambiente, está completamente seco em 3 a 5 horas. Não é necessário expor ao sol.",
  },
  {
    q: "O processo é seguro para todos os tipos de tecido?",
    a: "Sim, mas analisamos o material antes de qualquer procedimento. Veludo, suede, linho, microfibra, couro e sintéticos têm protocolos distintos. Nunca usamos o mesmo processo para materiais diferentes.",
  },
  {
    q: "Com que frequência devo higienizar o sofá?",
    a: "Recomendamos a cada 6 a 12 meses para uso residencial normal. Famílias com crianças, pets ou alérgicos devem fazer a cada 4 a 6 meses. Ambientes com alta umidade, a cada 4 meses.",
  },
  {
    q: "Vocês atendem na casa do cliente?",
    a: "Sim, o serviço é realizado no seu domicílio. Você não precisa mover nem transportar o sofá. Levamos todo o equipamento e realizamos o processo no local.",
  },
];

const TRUST_ITEMS = [
  "Atendimento domiciliar",
  "Todos os tipos de tecido",
  "Garantia de resultado",
  `${COMPANY.stats.googleRating}★ Google`,
];

export default function Sofas() {
  const waLink = getWhatsAppLink("sofas");

  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema name="Higienização de Sofás" description="Higienização profunda de sofás com extração úmida, tratamento anti-ácaros e neutralização de odores. Coleta e entrega em São José dos Campos e Vale do Paraíba." slug="sofas" />
      <header className="fixed top-0 w-full z-50 bg-amber-950/90 backdrop-blur-md border-b border-amber-900/40">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg tracking-tight text-white">
            A7 <span className="text-amber-400">Lavanderia</span>
          </a>
          <a
            href={waLink}
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-bold px-5 py-2.5 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Agendar higienização
          </a>
        </div>
      </header>

      <section className="relative h-screen flex items-end pb-20 pt-14">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Sofá elegante em sala de estar"
            className="object-cover absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/55 to-stone-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-amber-400" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.16em]">
                Higienização profissional de sofás
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white font-black leading-[0.92] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.2rem)" }}
            >
              Sofá Limpo,
              <br />
              <span className="text-amber-400">Casa Transformada</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg leading-relaxed mb-10"
            >
              Higienização profunda que elimina{" "}
              <strong className="text-white">ácaros, manchas e odores</strong> do seu sofá — sem sair
              de casa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white font-black text-lg px-8 py-5 transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={WA_PATH} />
                </svg>
                Agendar higienização
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {TRUST_ITEMS.map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/50">
                  <svg
                    className="w-3 h-3 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-amber-600 py-10">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-white font-black text-3xl leading-none tracking-tight">{s.value}</p>
                <p className="text-amber-100 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-3">
              O problema real
            </span>
            <h2 className="font-black text-3xl md:text-4xl tracking-tight text-gray-900">
              Seu sofá parece limpo. Mas não está.
            </h2>
            <p className="text-gray-500 mt-3 text-base max-w-xl">
              O que você vê na superfície é só uma parte. O que está dentro das fibras é o que afeta
              sua saúde e o cheiro da sua casa.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                className="border border-gray-100 p-7 hover:border-amber-200 hover:shadow-sm transition-all"
              >
                <span className="text-3xl block mb-4">{p.icon}</span>
                <h3 className="font-bold text-gray-900 text-base mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-amber-950">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3">
              Nosso processo
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight">
              Extração, vapor e antimicrobiano.
              <br />
              <span className="text-amber-400">Nessa ordem.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="border border-amber-900/50 bg-amber-900/20 p-6 hover:border-amber-600/60 transition-all"
              >
                <span className="text-amber-400/60 font-black text-4xl leading-none block mb-4">
                  {step.num}
                </span>
                <h3 className="font-bold text-white text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-amber-100/60 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a
              href={waLink}
              className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white font-black px-8 py-5 transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d={WA_PATH} />
              </svg>
              Agendar agora
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="mb-12">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-3">
              Diferenciais
            </span>
            <h2 className="font-black text-3xl md:text-4xl tracking-tight text-gray-900">
              O que você ganha com a higienização.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="border border-gray-100 p-6 hover:border-amber-200 hover:shadow-sm transition-all"
              >
                <span className="text-3xl block mb-3">{b.icon}</span>
                <h3 className="font-bold text-gray-900 text-sm mb-1.5">{b.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-amber-50">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-gray-900 mb-10">
            Sofás transformados
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-amber-100 bg-white p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-amber-500 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-100 text-amber-700 flex items-center justify-center font-black text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">{t.name}</p>
                    <p className="text-[10px] text-gray-400">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-amber-700">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-white font-black leading-[0.95] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Seu sofá merece
              <br />
              <span className="text-amber-200">uma nova vida.</span>
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Atendimento domiciliar. Resultado garantido. Sem mover o sofá.
            </p>
            <a
              href={waLink}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-amber-50 text-amber-700 font-black text-xl px-10 py-6 transition-colors"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d={WA_PATH} />
              </svg>
              Agendar higienização
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-black text-3xl tracking-tight text-gray-900 mb-10">
            Dúvidas frequentes
          </h2>
          <div className="space-y-px">
            {FAQ.map((item) => (
              <details key={item.q} className="group border border-gray-200 bg-white">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm pr-4">{item.q}</span>
                  <svg
                    className="w-4 h-4 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="sofas" />
      <footer className="bg-gray-950 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-white tracking-tight">A7 Lavanderia</span>
          <div className="flex items-center gap-6">
            <a
              href="/tapetes"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Também limpamos tapetes
            </a>
          </div>
          <a
            href={waLink}
            className="text-xs text-amber-400 font-semibold hover:text-amber-300 transition-colors"
          >
            Agendar higienização →
          </a>
        </div>
      </footer>
    </div>
  );
}
