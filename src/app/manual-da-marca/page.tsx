"use client";
import Link from "next/link";

const COLORS = [
  {
    name: "Azul Institucional",
    hex: "#0C5982",
    rgb: "12 · 89 · 130",
    cmyk: "93 · 59 · 28 · 12",
    pantone: "7700 C",
    role: "Cor principal — logotipo, títulos, elementos de destaque",
    textClass: "text-white",
    bg: "bg-[#0C5982]",
  },
  {
    name: "Azul Claro",
    hex: "#46C1F1",
    rgb: "73 · 193 · 240",
    cmyk: "64 · 00 · 00 · 00",
    pantone: "2985 C",
    role: "Cor secundária — destaques, ícones, elementos de suporte",
    textClass: "text-[#0C5982]",
    bg: "bg-[#46C1F1]",
  },
  {
    name: "Branco",
    hex: "#FFFFFF",
    rgb: "255 · 255 · 255",
    cmyk: "0 · 0 · 0 · 0",
    pantone: "—",
    role: "Fundos, espaço em branco, logo versão negativa",
    textClass: "text-[#0C5982]",
    bg: "bg-white border border-gray-200",
  },
  {
    name: "Preto Suave",
    hex: "#1A1A1A",
    rgb: "26 · 26 · 26",
    cmyk: "0 · 0 · 0 · 90",
    pantone: "—",
    role: "Textos corridos, rodapés, contraste máximo",
    textClass: "text-white",
    bg: "bg-[#1A1A1A]",
  },
];

const LOGO_VERSIONS = [
  {
    file: "/logo-vertical.png",
    name: "Preferencial",
    desc: "Uso padrão em materiais com espaço vertical adequado",
    bg: "bg-white",
    dark: false,
  },
  {
    file: "/logo-light.png",
    name: "Horizontal Negativa",
    desc: "Para fundos escuros e coloridos — versão preferencial no digital",
    bg: "bg-[#0C5982]",
    dark: true,
  },
  {
    file: "/logo-dark.png",
    name: "Horizontal Positiva",
    desc: "Para fundos claros e brancos",
    bg: "bg-white",
    dark: false,
  },
  {
    file: "/logo-symbol.png",
    name: "Símbolo",
    desc: "Uso restrito — ícone, avatar, favicon, aplicações onde o espaço é limitado",
    bg: "bg-white",
    dark: false,
  },
];

const DONT_USE = [
  "Não rotacionar o logotipo",
  "Não utilizar na vertical (símbolo acima, texto na lateral)",
  "Não distorcer em nenhuma direção",
  "Não alterar as cores institucionais",
  "Não aplicar em fundos coloridos sem contraste adequado",
  "Não utilizar em outline ou versão vazada",
  "Não alterar o volume ou estilo da gota",
  "Não adicionar sombras, brilhos ou efeitos externos",
];

const TYPOGRAPHY = [
  {
    family: "Open Sans Bold",
    use: "Logotipo · Títulos · CTAs",
    note: "Fonte base do logotipo LAVANDERIA — modificada para a marca",
    sample: "A7 LAVANDERIA",
    weight: "font-extrabold",
  },
  {
    family: "Gotham",
    use: "Peças digitais · Web · Anúncios",
    note: "Família completa: Light, Book, Medium, Bold, Black",
    sample: "Qualidade que você sente",
    weight: "font-bold",
  },
  {
    family: "Open Sans",
    use: "Textos corridos · Impressão",
    note: "Light, Regular, Semibold, Bold",
    sample: "Cuidando do que você tem de melhor.",
    weight: "font-normal",
  },
];

const VOICE_TONE = [
  {
    attribute: "Confiante",
    do: "\"Garantimos devolução em 48h ou refazemos sem custo.\"",
    dont: "\"Tentamos entregar em até 2 dias...\"",
  },
  {
    attribute: "Próximo",
    do: "\"Sua roupa volta com cheiro de novo, sem você sair de casa.\"",
    dont: "\"Oferecemos serviços de lavanderia com coleta domiciliar.\"",
  },
  {
    attribute: "Direto",
    do: "\"Agende agora. É de graça e leva 2 minutos.\"",
    dont: "\"Não hesite em entrar em contato conosco para mais informações.\"",
  },
  {
    attribute: "Especialista",
    do: "\"Cada tecido tem um protocolo diferente. Blackout não vai à máquina.\"",
    dont: "\"Lavamos todo tipo de roupa e tecido.\"",
  },
];

const DIGITAL_APPS = [
  {
    channel: "Site / Landing Pages",
    logo: "Horizontal Negativa (branca)",
    bg: "Fundo escuro da LP (violet-950, slate-950, etc.)",
    height: "h-8 (32px)",
    note: "Logo sempre no canto superior esquerdo do header fixo",
  },
  {
    channel: "Header após scroll",
    logo: "Horizontal Positiva (azul)",
    bg: "Fundo branco semi-transparente",
    height: "h-8 (32px)",
    note: "Transição suave via estado isScrolled",
  },
  {
    channel: "Instagram / Redes Sociais",
    logo: "Símbolo ou Preferencial",
    bg: "Fundo #0C5982 ou branco",
    height: "Avatar: 1:1 — Mínimo 50px",
    note: "Nunca aplicar sobre imagem sem sobreposição",
  },
  {
    channel: "WhatsApp Business",
    logo: "Símbolo",
    bg: "Fundo branco ou azul institucional",
    height: "Foto de perfil 640×640px",
    note: "Usar versão com fundo azul (#0C5982) para destaque",
  },
  {
    channel: "Anúncios Google / Meta",
    logo: "Horizontal (positiva ou negativa)",
    bg: "Fundo da arte — garantir contraste mínimo",
    height: "Mínimo 50px de largura",
    note: "Versão negativa em artes escuras (azul, foto)",
  },
  {
    channel: "E-mail Marketing",
    logo: "Horizontal Positiva",
    bg: "Cabeçalho branco",
    height: "120px de largura máx.",
    note: "Sempre linkar para o site ao clicar",
  },
];

export default function ManualDaMarcaPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">

      {/* NAV */}
      <header className="fixed top-0 w-full z-50 bg-[#0C5982] shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <img src="/logo-light.png" alt="A7 Lavanderia" className="h-8 w-auto" />
          </Link>
          <Link
            href="/growth-engine"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            ← Growth Engine
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[#0C5982] pt-24 pb-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-[#46C1F1]/20 text-[#46C1F1] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Versão 2.0 · 2025
          </div>
          <img
            src="/logo-light.png"
            alt="A7 Lavanderia"
            className="h-16 w-auto mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Manual da Marca
          </h1>
          <p className="text-[#46C1F1] text-lg max-w-2xl mx-auto leading-relaxed">
            Guia completo de identidade visual da A7 Lavanderia — desde a aplicação do logotipo até o tom de voz no digital.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10 text-sm">
            {["Logotipo", "Cores", "Tipografia", "Tom de Voz", "Digital"].map((s) => (
              <a key={s} href={`#${s.toLowerCase().replace(" ", "-")}`}
                className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE A MARCA */}
      <section className="py-20 bg-gray-50" id="sobre">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-[#0C5982] rounded-full" />
            <h2 className="text-3xl font-extrabold text-[#0C5982]">Sobre a Marca</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold text-lg mb-3">História</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A A7 Lavanderia iniciou suas atividades em 2015, com a primeira loja no bairro do Morumbi, em São José dos Campos — SP. Em 2017, passou por um rebranding que resultou na identidade visual atual.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hoje opera como rede em expansão, atendendo clientes residenciais, empresas e condomínios em todo o Vale do Paraíba, com presença digital que alcança todo o Brasil.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">O Nome</h3>
              <div className="space-y-4">
                <div className="bg-[#0C5982] text-white rounded-xl p-5">
                  <p className="text-3xl font-extrabold text-[#46C1F1] mb-2">A</p>
                  <p className="text-sm leading-relaxed">Representa a <strong>excelência</strong> em nossos serviços. Ser a melhor lavanderia — essa é a ambição por trás de cada peça que passa por nossas mãos.</p>
                </div>
                <div className="bg-[#46C1F1] text-[#0C5982] rounded-xl p-5">
                  <p className="text-3xl font-extrabold mb-2">7</p>
                  <p className="text-sm leading-relaxed">Simboliza a <strong>perfeição, a sorte e a totalidade</strong>. É isso que buscamos em cada serviço: resultado perfeito, satisfação total.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOTIPO */}
      <section className="py-20" id="logotipo">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-[#0C5982] rounded-full" />
            <h2 className="text-3xl font-extrabold text-[#0C5982]">Logotipo</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {LOGO_VERSIONS.map((v) => (
              <div key={v.name} className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className={`${v.bg} p-8 flex items-center justify-center h-40`}>
                  <img src={v.file} alt={v.name} className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="p-4">
                  <p className="font-bold text-sm mb-1">{v.name}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Área de respiro */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-10">
            <h3 className="font-bold text-lg mb-2">Área de Respiro</h3>
            <p className="text-gray-600 text-sm mb-4">
              Mantenha uma zona de restrição ao redor do logotipo equivalente à largura das letras <strong>&ldquo;AA&rdquo;</strong> da marca. Nenhum elemento gráfico deve invadir essa área.
            </p>
            <div className="flex gap-8 text-sm text-gray-600">
              <div><strong>Mínimo impresso:</strong> 20mm de largura</div>
              <div><strong>Mínimo digital:</strong> 50px de largura</div>
            </div>
          </div>

          {/* Usos proibidos */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-red-600">Usos Proibidos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {DONT_USE.map((rule) => (
                <div key={rule} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                  <span className="text-red-500 font-black text-lg leading-none mt-0.5">✕</span>
                  <p className="text-red-700 text-sm">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORES */}
      <section className="py-20 bg-gray-50" id="cores">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-[#0C5982] rounded-full" />
            <h2 className="text-3xl font-extrabold text-[#0C5982]">Cores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COLORS.map((c) => (
              <div key={c.name} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                <div className={`${c.bg} h-24`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-bold text-lg">{c.name}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{c.role}</p>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#0C5982]">{c.hex}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-xs text-gray-500 border-t border-gray-100 pt-4">
                    <div><p className="font-semibold text-gray-700 mb-1">RGB</p><p>{c.rgb}</p></div>
                    <div><p className="font-semibold text-gray-700 mb-1">CMYK</p><p>{c.cmyk}</p></div>
                    <div><p className="font-semibold text-gray-700 mb-1">PANTONE</p><p>{c.pantone}</p></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPOGRAFIA */}
      <section className="py-20" id="tipografia">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-[#0C5982] rounded-full" />
            <h2 className="text-3xl font-extrabold text-[#0C5982]">Tipografia</h2>
          </div>
          <div className="space-y-6">
            {TYPOGRAPHY.map((t) => (
              <div key={t.family} className="border border-gray-200 rounded-2xl p-8 bg-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <p className="font-bold text-[#0C5982]">{t.family}</p>
                    <p className="text-gray-500 text-sm">{t.use}</p>
                    <p className="text-gray-400 text-xs mt-1">{t.note}</p>
                  </div>
                </div>
                <p className={`text-3xl ${t.weight} text-[#1A1A1A] border-t border-gray-100 pt-4`}>
                  {t.sample}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOM DE VOZ */}
      <section className="py-20 bg-[#0C5982] text-white" id="tom-de-voz">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#46C1F1] rounded-full" />
            <h2 className="text-3xl font-extrabold">Tom de Voz</h2>
          </div>
          <p className="text-[#46C1F1] mb-10 max-w-2xl">
            A A7 fala como uma pessoa próxima e especialista — não como uma empresa burocrática. Isso vale para site, anúncios, WhatsApp, redes sociais e atendimento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VOICE_TONE.map((v) => (
              <div key={v.attribute} className="bg-white/10 rounded-2xl p-6">
                <p className="font-extrabold text-[#46C1F1] text-lg mb-4">{v.attribute}</p>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-xs font-bold text-green-300 mb-1">✓ USE</p>
                    <p className="text-sm leading-relaxed">{v.do}</p>
                  </div>
                  <div className="bg-red-900/30 rounded-xl p-4">
                    <p className="text-xs font-bold text-red-300 mb-1">✕ EVITE</p>
                    <p className="text-sm leading-relaxed text-white/70">{v.dont}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APLICAÇÕES DIGITAIS */}
      <section className="py-20 bg-gray-50" id="digital">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#0C5982] rounded-full" />
            <h2 className="text-3xl font-extrabold text-[#0C5982]">Aplicações Digitais</h2>
          </div>
          <p className="text-gray-500 mb-10 max-w-2xl">
            Guia de uso do logotipo nos canais digitais da A7 — site, redes sociais, anúncios e comunicação direta.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#0C5982]">
                  <th className="text-left pb-3 pr-6 text-[#0C5982] font-bold">Canal</th>
                  <th className="text-left pb-3 pr-6 text-[#0C5982] font-bold">Versão do Logo</th>
                  <th className="text-left pb-3 pr-6 text-[#0C5982] font-bold">Tamanho</th>
                  <th className="text-left pb-3 text-[#0C5982] font-bold">Observação</th>
                </tr>
              </thead>
              <tbody>
                {DIGITAL_APPS.map((a, i) => (
                  <tr key={a.channel} className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="py-4 pr-6 font-semibold">{a.channel}</td>
                    <td className="py-4 pr-6 text-gray-600">{a.logo}</td>
                    <td className="py-4 pr-6 text-gray-600">{a.height}</td>
                    <td className="py-4 text-gray-500 text-xs leading-relaxed">{a.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VISÃO GROWTH */}
      <section className="py-20 bg-[#0C5982] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#46C1F1] text-sm font-bold uppercase tracking-widest mb-4">Visão 2025–2026</p>
          <h2 className="text-3xl font-extrabold mb-6">Uma Marca em Expansão</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            A A7 está em processo de escala digital. 30 landing pages ativas, presença orgânica no Google, sistema de franquias em desenvolvimento e expansão para o Vale do Paraíba e além.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "30", label: "Landing Pages" },
              { value: "173", label: "Páginas no Google" },
              { value: "2015", label: "Fundação" },
              { value: "2026", label: "Franquias" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-5">
                <p className="text-3xl font-extrabold text-[#46C1F1]">{s.value}</p>
                <p className="text-white/70 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1A1A] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <img src="/logo-light.png" alt="A7 Lavanderia" className="h-7 w-auto" />
          <p className="text-white/40 text-sm">Manual da Marca v2.0 · © 2025 A7 Lavanderia</p>
          <Link href="/growth-engine" className="text-white/60 hover:text-white text-sm transition-colors">
            Growth Engine →
          </Link>
        </div>
      </footer>
    </div>
  );
}
