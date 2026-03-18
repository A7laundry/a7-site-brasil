"use client";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Star, ChevronDown, Menu, X, ArrowRight, Shield, Truck, Clock, Sparkles, Smartphone, Package, CheckCircle2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
const logoDark = "/logo-dark.png";
const logoLight = "/logo-light.png";

/* ─── DATA ─── */
const COMPANY = {
  name: "A7 Lavanderia",
  tagline: "Lavanderia premium com coleta e entrega",
  whatsapp: "5512974128390",
  stats: { attendances: "50.000", unitsBrazil: 14, googleRating: 4.9, satisfaction: "99,7" },
  cities: ["São José dos Campos","Taubaté","Jacareí","Caçapava","Pindamonhangaba","Guaratinguetá","Lorena","Cruzeiro","Aparecida","Caraguatatuba","São Sebastião","Ubatuba","Campos do Jordão"],
};

const WA_AGENDAR = `https://wa.me/5512974128390?text=${encodeURIComponent("Olá! Gostaria de agendar uma coleta gratuita. 🚀")}`;
const WA_ORCAMENTO = `https://wa.me/5512974128390?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento. 📋")}`;

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85&fit=crop",
  roupas: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=85&fit=crop",
  edredom: "https://images.unsplash.com/photo-1522771739448-4c5b7e7a3d68?w=800&q=85&fit=crop",
  tenis: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=85&fit=crop",
  tapete: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=85&fit=crop",
  camisa: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=85&fit=crop",
  corporativo: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=85&fit=crop",
  familia: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85&fit=crop",
  coleta: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=85&fit=crop",
  saude: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=85&fit=crop",
};

const SERVICES = [
  { title: "Roupas do Dia a Dia", desc: "Lavagem e passadoria completa com cuidado profissional", badge: "A partir de R$8,90/peça", image: IMAGES.roupas },
  { title: "Roupas Sociais & Delicadas", desc: "Tratamento individualizado para cada tecido", badge: "Tratamento individualizado", image: IMAGES.camisa },
  { title: "Edredons & Cobertores", desc: "Higienização profunda anti-ácaros. Volta fofo e cheiroso", badge: "3 por R$99,90", image: IMAGES.edredom },
  { title: "Tapetes & Cortinas", desc: "Lavagem especializada que preserva fibras e cores", badge: "A partir de R$42,90/m²", image: IMAGES.tapete },
  { title: "Tênis & Calçados", desc: "Limpeza manual profissional que elimina odores", badge: "3 pares por R$109,90", image: IMAGES.tenis },
  { title: "Uniformes Corporativos", desc: "Soluções empresariais com planos sob medida", badge: "Plano empresarial", image: IMAGES.corporativo },
];

const HOW_IT_WORKS = [
  { step: 1, title: "Agende pelo WhatsApp", desc: "Mande uma mensagem com o dia e horário. Respondemos em menos de 5 minutos.", icon: Smartphone },
  { step: 2, title: "Coletamos na sua porta", desc: "Nosso motoboy vai até você no horário combinado. Sem sair de casa.", icon: Truck },
  { step: 3, title: "Higienizamos com padrão premium", desc: "Cada peça recebe tratamento individualizado com produtos de alta performance.", icon: Sparkles },
  { step: 4, title: "Devolvemos pronto para vestir", desc: "Suas roupas voltam limpas, passadas e embaladas na sua porta.", icon: Package },
];

const TESTIMONIALS = [
  { name: "Maria Silva", city: "São José dos Campos", rating: 5, text: "A A7 mudou minha rotina! Antes eu perdia todo fim de semana lavando roupa. Agora é só agendar pelo WhatsApp e pronto. Qualidade impecável!", avatar: "MS" },
  { name: "Carlos Santos", city: "Taubaté", rating: 5, text: "Uso o plano Família há 8 meses. Minha esposa e eu ganhamos um tempo precioso juntos. As roupas voltam perfeitas, cheirosas e bem passadas.", avatar: "CS" },
  { name: "Ana Oliveira", city: "Jacareí", rating: 5, text: "Mandei meus edredons que estavam guardados há meses. Voltaram como novos! Sem cheiro, sem ácaros, macios. Super recomendo.", avatar: "AO" },
  { name: "Roberto Mendes", city: "São José dos Campos", rating: 5, text: "Como gerente de hotel, preciso de um parceiro confiável. A A7 nunca me deixou na mão. Pontualidade e qualidade sempre.", avatar: "RM" },
  { name: "Juliana Costa", city: "Pindamonhangaba", rating: 5, text: "Meus tênis brancos estavam impossíveis. A A7 devolveu eles como se tivessem saído da caixa. Virei cliente fiel!", avatar: "JC" },
];

const TOP_ARTICLES = [
  { slug: "alergia-acaros-roupa-cama", title: "Alergia a Ácaros? Veja o que sua Roupa de Cama tem a Ver com Isso", excerpt: "Entenda por que lavar edredons de 3 em 3 meses pode mudar a qualidade do seu sono.", category: "SAÚDE", categoryColor: "bg-red-500", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=85&fit=crop", url: "/blog/alergia-acaros-roupa-cama" },
  { slug: "higienizacao-edredom-importancia", title: "Por que Higienizar o Edredom a Cada 3 Meses é Essencial", excerpt: "Ácaros, fungos e bactérias se multiplicam. Saiba como proteger sua família.", category: "SAÚDE", categoryColor: "bg-red-500", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=85&fit=crop", url: "/blog/higienizacao-edredom-importancia" },
  { slug: "lavar-tenis-corretamente", title: "Como Lavar Tênis sem Estragar: O Método Profissional", excerpt: "Veja por que a máquina de casa é o maior inimigo do seu tênis favorito.", category: "TUTORIAL", categoryColor: "bg-blue-500", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=85&fit=crop", url: "/blog/lavar-tenis-corretamente" },
  { slug: "como-cuidar-roupas-delicadas", title: "Guia Completo: Como Cuidar de Roupas Delicadas", excerpt: "Seda, linho, cashmere — cada tecido pede um tratamento diferente.", category: "DICAS", categoryColor: "bg-violet-500", image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=600&q=85&fit=crop", url: "/blog/como-cuidar-roupas-delicadas" },
  { slug: "limpeza-tapetes-profissional", title: "Tapete Sujo Faz Mal: Quando Chamar um Profissional", excerpt: "Descubra a diferença entre limpeza caseira e higienização profissional.", category: "DICAS", categoryColor: "bg-violet-500", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=85&fit=crop", url: "/blog/limpeza-tapetes-profissional" },
  { slug: "lavanderia-sustentavel", title: "Lavanderia Sustentável: Como a A7 Reduz o Impacto Ambiental", excerpt: "Economizamos até 60% de água por lavagem. Veja nossas práticas ecológicas.", category: "SUSTENTABILIDADE", categoryColor: "bg-emerald-500", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=85&fit=crop", url: "/blog/lavanderia-sustentavel" },
];

const PAIN_POINTS = [
  { icon: "⏰", title: "Fim de semana perdido", desc: "Lavando, estendendo, passando... Quando percebe, o domingo acabou e você não descansou." },
  { icon: "⚠️", title: "Medo de estragar peças caras", desc: "Aquela camisa social de R$400 ou o vestido de festa merecem cuidado que a máquina de casa não oferece." },
  { icon: "🦠", title: "Edredons com ácaros invisíveis", desc: "Meses sem lavar = milhões de ácaros. Resultado: alergias, espirros frequentes e noites mal dormidas." },
  { icon: "👟", title: "Tênis com cheiro que não sai", desc: "Nem bicarbonato, nem vinagre resolvem. A máquina de casa deforma e o cheiro volta em 2 dias." },
  { icon: "💸", title: "Empresa gastando mais do que deveria", desc: "Uniformes, enxoval, toalhas... Sem processo profissional, o custo operacional só cresce." },
];

const FAQ = [
  { q: "Como funciona a coleta e entrega?", a: "Você agenda pelo WhatsApp, nosso motoboy coleta na sua porta no horário combinado. Após a higienização, devolvemos tudo limpo, passado e embalado. Sem taxa de entrega para planos mensais." },
  { q: "Quais cidades vocês atendem?", a: "Atendemos todo o Vale do Paraíba: São José dos Campos, Taubaté, Jacareí, Caçapava, Pindamonhangaba, Guaratinguetá, Lorena, Cruzeiro, Aparecida, Caraguatatuba, São Sebastião, Ubatuba e Campos do Jordão." },
  { q: "Qual o prazo de devolução?", a: "48 horas para roupas do dia a dia. Peças delicadas e edredons até 72 horas. Serviço express em 24 horas disponível sob consulta." },
  { q: "Posso cancelar o plano a qualquer momento?", a: "Sim! Sem fidelidade, sem multas. Basta avisar pelo WhatsApp com 7 dias de antecedência." },
  { q: "Vocês lavam roupas delicadas?", a: "Com certeza! Temos processos específicos para seda, linho, cashmere, couro e mais. Cada peça é analisada individualmente com produtos dermatologicamente testados." },
  { q: "Vocês atendem empresas?", a: "Sim! Plano empresarial para hotéis, restaurantes, academias e empresas de todos os portes. Coleta diária, faturamento CNPJ e gestor de conta dedicado." },
  { q: "E se alguma peça for danificada?", a: "Todas as peças são fotografadas na entrada. Em caso de qualquer dano — o que é raríssimo — cobrimos integralmente o reparo ou substituição." },
  { q: "Quais formas de pagamento aceitam?", a: "PIX, cartão de crédito (até 12x), cartão de débito, boleto bancário e transferência. Para planos mensais, cobrança recorrente com desconto especial." },
];

const NAV_LINKS = [
  { label: "Serviços", href: "servicos" },
  { label: "Como Funciona", href: "como-funciona" },
  { label: "Preços", href: "/precos", external: true },
  { label: "Blog", href: "/blog", external: true },
  { label: "Artigos", href: "artigos" },
];

const TICKER_ITEMS = [
  "3 Edredons por R$99,90 — Higienização anti-ácaros com coleta grátis",
  "3 Pares de Tênis por R$109,90 — Limpeza manual profissional",
  "+50.000 famílias do Vale do Paraíba já confiam na A7",
  "Resposta em menos de 5 minutos no WhatsApp",
];

/* ─── HELPERS ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } }),
};

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

/* ─── FAQ ITEM ─── */
const FaqItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group"
    >
      <div className={`border border-[hsl(214,32%,91%)] rounded-2xl overflow-hidden transition-all duration-300 ${open ? "bg-[hsl(210,40%,96%)] shadow-lg shadow-blue-900/5" : "bg-white hover:shadow-md hover:shadow-blue-900/5"}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-6 md:p-7 text-left"
        >
          <span className="font-semibold text-[hsl(222,84%,5%)] text-base md:text-lg pr-4 leading-snug">{q}</span>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open ? "bg-[hsl(222,47%,11%)] text-white rotate-180" : "bg-[hsl(210,40%,96%)] text-[hsl(222,47%,11%)]"}`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="px-6 md:px-7 pb-6 md:pb-7">
                <p className="text-[hsl(215,16%,47%)] leading-relaxed">{a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/* ─── TICKER ─── */
const Ticker = () => {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="bg-gradient-to-r from-[hsl(222,47%,11%)] via-[hsl(224,76%,20%)] to-[hsl(222,47%,11%)] py-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center mx-8 text-sm md:text-base font-medium text-blue-100 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-4 shrink-0" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/* ─── MAIN COMPONENT ─── */
const HomeV2 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOverlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.45, 0.7]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleNavClick = (link: typeof NAV_LINKS[0]) => {
    if (link.external) return;
    scrollTo(link.href);
  };

  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)] font-sans antialiased">
      {/* ══════════ NAVBAR ══════════ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5 group">
            <img src={scrolled ? logoDark : logoLight} alt="A7 Lavanderia" className="h-8 md:h-10 w-auto transition-all duration-300" />
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <a key={link.href} href={link.href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${scrolled ? "text-[hsl(215,16%,47%)] hover:text-[hsl(222,47%,11%)] hover:bg-[hsl(210,40%,96%)]" : "text-blue-200 hover:text-white hover:bg-white/10"}`}>
                  {link.label}
                </a>
              ) : (
                <button key={link.href} onClick={() => handleNavClick(link)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${scrolled ? "text-[hsl(215,16%,47%)] hover:text-[hsl(222,47%,11%)] hover:bg-[hsl(210,40%,96%)]" : "text-blue-200 hover:text-white hover:bg-white/10"}`}>
                  {link.label}
                </button>
              )
            )}
            <a href={WA_AGENDAR} target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-green-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-600/30">
              <WhatsAppIcon className="w-4 h-4" />
              Agendar Coleta
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`lg:hidden p-2.5 rounded-xl transition-colors ${scrolled ? "text-[hsl(222,84%,5%)] hover:bg-[hsl(210,40%,96%)]" : "text-white hover:bg-white/10"}`}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-[hsl(214,32%,91%)] shadow-2xl overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {NAV_LINKS.map((link) =>
                  link.external ? (
                    <a key={link.href} href={link.href} className="block w-full text-left px-4 py-3.5 rounded-xl text-[hsl(222,84%,5%)] hover:bg-[hsl(210,40%,96%)] font-medium transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <button key={link.href} onClick={() => handleNavClick(link)} className="block w-full text-left px-4 py-3.5 rounded-xl text-[hsl(222,84%,5%)] hover:bg-[hsl(210,40%,96%)] font-medium transition-colors">
                      {link.label}
                    </button>
                  )
                )}
                <a href={WA_AGENDAR} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold px-5 py-4 rounded-xl mt-3 transition-colors shadow-lg shadow-green-600/20">
                  <WhatsAppIcon className="w-5 h-5" />
                  Agendar Coleta Grátis
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ══════════ 1. HERO — CINEMATOGRÁFICA ══════════ */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Background image — continuous slow zoom + parallax */}
        <motion.div
          className="absolute inset-[-5%] will-change-transform"
          style={{ y: heroImageY }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={IMAGES.hero}
            alt="Casa moderna com luz natural — momento de tranquilidade"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </motion.div>

        {/* Overlay: gradiente não-uniforme — mais escuro à esquerda */}
        <motion.div className="absolute inset-0 bg-black" style={{ opacity: heroOverlayOpacity }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />

        {/* Atmospheric glow — azul/roxo sutil */}
        <div className="absolute top-[15%] left-[10%] w-[700px] h-[700px] rounded-full bg-blue-600/8 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-violet-500/6 blur-[130px] pointer-events-none" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-cyan-400/5 blur-[100px] pointer-events-none" />

        {/* Vignette + border blur */}
        <div className="absolute inset-0 shadow-[inset_0_0_250px_60px_rgba(0,0,0,0.4)] pointer-events-none" />

        {/* Content — offset left for editorial composition */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32 md:py-40 lg:py-48 w-full">
          <div className="max-w-2xl lg:max-w-[55%]">
            {/* Badge premium glass */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-xl text-white/90 text-sm font-semibold px-6 py-2.5 rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <span className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                </span>
                <span className="w-px h-4 bg-white/20" />
                MAIS DE 50 MIL CLIENTES ATENDIDOS
              </span>
            </motion.div>

            {/* Headline — palavras-chave destacadas */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mt-8 mb-6 tracking-tight"
            >
              Seus <span className="text-white/60">fins de semana</span>
              <br />
              são <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">preciosos demais</span>
              <br />
              para serem gastos
              <br />
              <span className="relative">
                lavando roupa
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#25D366] to-[#25D366]/0 rounded-full" />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg md:text-xl text-blue-100/85 max-w-xl mb-10 leading-relaxed font-light"
            >
              Coleta e entrega em <strong className="font-semibold text-white/95">13 cidades</strong> do Vale do Paraíba. Roupas, edredons, tênis e tapetes higienizados com <strong className="font-semibold text-white/95">padrão internacional</strong>.
            </motion.p>

            {/* CTAs — botão verde maior com pulsação sutil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <motion.a
                href={WA_AGENDAR}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-lg px-10 py-6 rounded-2xl shadow-[0_8px_40px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_50px_rgba(37,211,102,0.45)] transition-all duration-300 hover:-translate-y-1"
                animate={{ boxShadow: ["0 8px 40px rgba(37,211,102,0.3)", "0 8px 50px rgba(37,211,102,0.5)", "0 8px 40px rgba(37,211,102,0.3)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <WhatsAppIcon className="w-6 h-6" />
                Agendar Coleta Grátis
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <button onClick={() => scrollTo("como-funciona")} className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-lg px-8 py-6 rounded-2xl border border-white/20 transition-all duration-300 hover:-translate-y-1">
                Ver como funciona ↓
              </button>
            </motion.div>

            {/* Trust rail — glass bar elegante */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="inline-flex flex-wrap items-center gap-x-6 gap-y-3 bg-white/5 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/10"
            >
              {[
                { icon: <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}</div>, text: "4.9" },
                { icon: <CheckCircle2 className="w-4 h-4 text-green-400" />, text: "50.000+ atendimentos" },
                { icon: <Shield className="w-4 h-4 text-blue-400" />, text: "14 unidades" },
                { icon: <Clock className="w-4 h-4 text-cyan-400" />, text: "Coleta em 24h" },
              ].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-sm text-white/80 font-medium">
                  {item.icon}
                  {item.text}
                  {i < 3 && <span className="ml-4 w-px h-4 bg-white/15 hidden sm:block" />}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Floating card — right side, desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="hidden lg:block absolute right-8 xl:right-16 bottom-40 xl:bottom-48"
          >
            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.3)] w-[220px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-[#25D366]" />
                </div>
                <div className="text-xs text-white/60 font-medium">COLETA GRATUITA</div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "+50.000", sub: "atendimentos" },
                  { label: "⭐ 4.9", sub: "avaliação Google" },
                  { label: "< 5 min", sub: "tempo de resposta" },
                ].map((s, i) => (
                  <div key={i} className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-white">{s.label}</span>
                    <span className="text-xs text-white/50">{s.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade into next section — sobreposição refinada */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[hsl(222,47%,11%)] via-[hsl(222,47%,11%)]/50 to-transparent pointer-events-none" />
      </section>

      {/* ══════════ 2. TICKER ══════════ */}
      <Ticker />

      {/* ══════════ 3. DORES ══════════ */}
      <section className="py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-[hsl(210,40%,98%)] to-white relative scroll-mt-20" id="dores">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-red-100/40 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[hsl(222,84%,5%)] mb-5 tracking-tight">
              Você reconhece alguma<br className="hidden md:block" /> dessas situações?
            </h2>
            <p className="text-lg text-[hsl(215,16%,47%)] max-w-2xl mx-auto">Se sim, você está no lugar certo.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {PAIN_POINTS.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative bg-white rounded-2xl p-7 md:p-8 border border-red-100/80 shadow-sm hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <span className="text-4xl mb-4 block">{p.icon}</span>
                  <h3 className="font-bold text-[hsl(222,84%,5%)] text-lg mb-2.5">{p.title}</h3>
                  <p className="text-[hsl(215,16%,47%)] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-12 md:mt-16">
            <a href={WA_AGENDAR} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-[hsl(222,47%,11%)] font-bold text-lg hover:text-[hsl(217,91%,60%)] transition-colors">
              A A7 resolve tudo isso. Quero saber como
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════ 4. SERVIÇOS ══════════ */}
      <section className="py-20 md:py-32 px-4 sm:px-6 bg-white relative scroll-mt-20" id="servicos">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-50/80 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[hsl(222,84%,5%)] mb-5 tracking-tight">
              Para cada peça, o cuidado certo
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl overflow-hidden border border-[hsl(214,32%,91%)] shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-400"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-[hsl(222,47%,11%)] text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                    {s.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[hsl(222,84%,5%)] text-lg mb-2">{s.title}</h3>
                  <p className="text-[hsl(215,16%,47%)] text-sm leading-relaxed mb-4">{s.desc}</p>
                  <a href={WA_ORCAMENTO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[hsl(217,91%,60%)] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    Ver oferta <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 5. COMO FUNCIONA ══════════ */}
      <section className="py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-[hsl(210,40%,98%)] to-white relative scroll-mt-20" id="como-funciona">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[hsl(222,84%,5%)] mb-5 tracking-tight">
              Simples como deve ser
            </h2>
            <p className="text-lg text-[hsl(215,16%,47%)] max-w-2xl mx-auto">
              Do agendamento à entrega, você não precisa sair do sofá.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
            {/* Connector line - desktop */}
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200" />

            {HOW_IT_WORKS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="relative mx-auto mb-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-[hsl(222,47%,11%)] to-[hsl(224,76%,20%)] flex items-center justify-center mx-auto shadow-xl shadow-blue-900/20 relative z-10">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#25D366] text-white text-sm font-black flex items-center justify-center shadow-lg z-20">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-[hsl(222,84%,5%)] text-lg mb-2">{step.title}</h3>
                  <p className="text-[hsl(215,16%,47%)] text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={fadeUp} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-14 md:mt-20 space-y-6">
            <p className="inline-flex items-center gap-2 bg-green-50 text-green-700 font-semibold px-5 py-2.5 rounded-full text-sm border border-green-200">
              <Clock className="w-4 h-4" />
              Respondemos em menos de 5 minutos
            </p>
            <div>
              <a href={WA_AGENDAR} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl shadow-green-600/25 hover:shadow-green-600/35 transition-all duration-300 hover:-translate-y-1">
                <WhatsAppIcon className="w-6 h-6" />
                Quero começar agora
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ 6. DEPOIMENTOS ══════════ */}
      <section className="py-20 md:py-32 px-4 sm:px-6 bg-[hsl(222,47%,11%)] relative overflow-hidden scroll-mt-20" id="depoimentos">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-400/8 blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight">
              50.000 famílias já escolheram a A7
            </h2>
            <div className="flex items-center justify-center gap-3">
              <Stars />
              <p className="text-blue-200 text-lg">4.9 de satisfação média — veja o que dizem</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 md:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 ${i === 1 ? "md:-mt-4 md:mb-4" : ""}`}
              >
                <Stars count={t.rating} />
                <p className="text-blue-100 mt-5 mb-6 leading-relaxed text-sm md:text-base italic">
                  {`"${t.text}"`}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-blue-300 text-xs">{t.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {TESTIMONIALS.slice(3).map((t, i) => (
              <motion.div
                key={t.name}
                custom={i + 3}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 md:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <Stars count={t.rating} />
                <p className="text-blue-100 mt-5 mb-6 leading-relaxed text-sm md:text-base italic">
                  {`"${t.text}"`}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-blue-300 text-xs">{t.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 7. ARTIGOS ══════════ */}
      <section className="py-20 md:py-32 px-4 sm:px-6 bg-white relative scroll-mt-20" id="artigos">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[hsl(222,84%,5%)] mb-5 tracking-tight">
              Aprenda a cuidar melhor das suas peças
            </h2>
            <p className="text-lg text-[hsl(215,16%,47%)] max-w-2xl mx-auto">
              Guias gratuitos criados por especialistas em higienização têxtil
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {TOP_ARTICLES.map((article, i) => (
              <motion.a
                key={article.slug}
                href={article.url}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group bg-white rounded-2xl overflow-hidden border border-[hsl(214,32%,91%)] shadow-sm hover:shadow-xl hover:shadow-blue-900/8 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className={`absolute top-4 left-4 ${article.categoryColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-lg`}>
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[hsl(222,84%,5%)] text-base leading-snug mb-2 group-hover:text-[hsl(217,91%,60%)] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-[hsl(215,16%,47%)] text-sm leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-[hsl(217,91%,60%)] font-semibold text-sm">
                    Ler artigo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div variants={fadeUp} custom={7} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-12 md:mt-16">
            <a href="/blog" className="group inline-flex items-center gap-2 bg-[hsl(210,40%,96%)] hover:bg-[hsl(222,47%,11%)] hover:text-white text-[hsl(222,47%,11%)] font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300">
              Ver todos os artigos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════ 8. CIDADES ══════════ */}
      <section className="py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-[hsl(210,40%,98%)] to-white relative scroll-mt-20" id="cidades">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto relative text-center">
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14 md:mb-18">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[hsl(222,84%,5%)] mb-5 tracking-tight">
              Atendemos 13 cidades<br className="hidden md:block" /> do Vale do Paraíba
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14"
          >
            {COMPANY.cities.map((city, i) => (
              <motion.span
                key={city}
                custom={i}
                variants={fadeUp}
                whileHover={{ scale: 1.08, y: -3, transition: { duration: 0.2 } }}
                className="bg-white border border-[hsl(214,32%,91%)] text-[hsl(222,84%,5%)] font-medium text-sm md:text-base px-5 py-2.5 rounded-xl shadow-sm hover:shadow-lg hover:shadow-blue-900/10 hover:border-blue-300 transition-all duration-200 cursor-default"
              >
                📍 {city}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} custom={14} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <a href={WA_AGENDAR} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl shadow-green-600/25 hover:shadow-green-600/35 transition-all duration-300 hover:-translate-y-1">
              <WhatsAppIcon className="w-6 h-6" />
              Minha cidade está na lista! Quero agendar
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════ 9. FAQ ══════════ */}
      <section className="py-20 md:py-32 px-4 sm:px-6 bg-white relative scroll-mt-20" id="faq">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14 md:mb-18">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[hsl(222,84%,5%)] mb-5 tracking-tight">
              Perguntas frequentes
            </h2>
          </motion.div>

          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 10. CTA FINAL ══════════ */}
      <section className="relative py-24 md:py-36 px-4 sm:px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(222,47%,11%)] via-[hsl(224,76%,15%)] to-[hsl(262,50%,15%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative text-center">
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Seus fins de semana<br />merecem ser seus
            </h2>
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto mb-12 leading-relaxed">
              Junte-se a 50.000 famílias do Vale do Paraíba que já descobriram como é viver sem se preocupar com roupas.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
            <a href={WA_AGENDAR} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb855] text-white font-black text-xl px-12 py-6 rounded-2xl shadow-2xl shadow-green-600/30 hover:shadow-green-600/40 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
              <WhatsAppIcon className="w-7 h-7" />
              Falar com a A7 agora
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-blue-300 text-sm mb-12">
            Sem compromisso · Resposta em 5 minutos · Primeira coleta gratuita
          </motion.p>

          <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-blue-300/80">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Pagamento seguro</span>
            <span className="flex items-center gap-2"><Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9 no Google</span>
            <span className="flex items-center gap-2"><Truck className="w-4 h-4" /> Coleta e entrega grátis</span>
          </motion.div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="bg-[hsl(222,84%,3%)] text-blue-300/60 py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-black text-xs">A7</div>
            <span>© {new Date().getFullYear()} A7 Lavanderia. Todos os direitos reservados.</span>
          </div>
          <div className="flex gap-6">
            <a href="/termos" className="hover:text-white transition-colors">Termos</a>
            <a href="/privacidade" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>

      {/* ══════════ BOTÃO WHATSAPP FLUTUANTE ══════════ */}
      <a
        href={WA_AGENDAR}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#1fb855] rounded-full flex items-center justify-center shadow-2xl shadow-green-600/30 hover:shadow-green-600/40 transition-all duration-300 hover:scale-110 group"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8 text-white" />
        <span className="absolute -top-12 right-0 bg-white text-[hsl(222,84%,5%)] text-xs font-bold px-3 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Fale conosco! 💬
        </span>
      </a>
    </div>
  );
};

export default HomeV2;
