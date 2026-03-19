"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";
import RelatedServices from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";

export default function SaoJoseDosCamposPage() {
  const whatsappLink = getWhatsAppLink("sao-jose-dos-campos");

  return (
    <div className="min-h-screen bg-blue-950 text-white">
      <ServiceSchema name="Lavanderia em São José dos Campos" description="A7 Lavanderia — sede em São José dos Campos. Coleta e entrega em domicílio. Tapetes, sofás, roupas, cortinas e muito mais." slug="sao-jose-dos-campos" />
      <header className="fixed top-0 w-full z-50 bg-[#1D4ED8]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <img src="/logo-light.png" alt="A7 Lavanderia" className="h-8 w-auto" />
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1D4ED8] font-semibold px-5 py-2 rounded-full text-sm hover:bg-blue-50 transition-colors"
          >
            Agendar no WhatsApp
          </a>
        </div>
      </header>

      <section className="relative h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=80"
          alt="São José dos Campos"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/55 to-blue-950/10" />
        <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight max-w-2xl"
          >
            Lavanderia Profissional em São José dos Campos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-blue-100 max-w-xl leading-relaxed"
          >
            Nossa sede fica em SJC — coleta e entrega em domicílio em toda a cidade e região metropolitana
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
              className="inline-block bg-[#1D4ED8] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              Agendar Coleta em SJC
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#1D4ED8] py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "SJC", label: "nossa sede" },
            { value: "48h", label: "prazo de entrega" },
            { value: "+5.000", label: "clientes atendidos" },
            { value: "Desde 2019", label: "na cidade" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold">{stat.value}</p>
              <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-blue-900/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">5 Unidades em São José dos Campos</h2>
          <p className="text-blue-300 text-center text-sm mb-10">Encontre a unidade mais próxima ou solicite coleta a domicílio</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { bairro: "Bosque dos Eucaliptos", endereco: "Av. Andrômeda, 3115", cep: "12233-000", horario: "Seg–Sex 08–18h · Sáb 08–13h", phone: "(12) 3917-4807", wa: "551239174807", slug: "/sjc-bosque-dos-eucaliptos" },
              { bairro: "Urbanova II", endereco: "Av. Shishima Hifumi, 2.200", cep: "12244-000", horario: "Seg–Sex 08–18h · Sáb 08–13h", phone: "(12) 3346-6490", wa: "551233466490", slug: "/sjc-urbanova" },
              { bairro: "Jardim São Dimas", endereco: "Av. Nove de Julho, 242", cep: "12243-000", horario: "Seg–Sex 09–18h · Sáb 09–13h", phone: "(12) 98844-0266", wa: "5512988440266", slug: "/sjc-jardim-sao-dimas" },
              { bairro: "Cidade Morumbi", endereco: "R. Gisele Martins, 441", cep: "12236-500", horario: "Aberto 24 horas", phone: "(12) 3939-7543", wa: "551239397543", slug: "/sjc-cidade-morumbi" },
              { bairro: "Jardim Morumbi", endereco: "Av. Benedito Bento, 717", cep: "12200-000", horario: "Seg–Sex 08–19h · Sáb 08–15h", phone: "(12) 3307-5748", wa: "551233075748", slug: "/sjc-jardim-morumbi" },
            ].map((u) => (
              <div key={u.bairro} className="bg-blue-900/50 border border-blue-800 rounded-xl p-5 hover:border-blue-500 transition-colors flex flex-col">
                <h3 className="font-bold text-base mb-1">{u.bairro}</h3>
                <p className="text-blue-300 text-xs mb-0.5">{u.endereco}</p>
                <p className="text-blue-400/60 text-xs mb-1">CEP {u.cep}</p>
                <p className="text-blue-300 text-xs mb-3">🕐 {u.horario}</p>
                <div className="flex items-center gap-2 mt-auto">
                  <a
                    href={`https://wa.me/${u.wa}?text=${encodeURIComponent("Olá! Gostaria de agendar uma coleta. 🧺")}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    {u.phone}
                  </a>
                  <Link href={u.slug} className="inline-flex items-center gap-1 text-blue-300 hover:text-white text-xs font-medium transition-colors">
                    Ver página →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Porque a A7 é referência em SJC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📍",
                title: "Atendimento Local",
                desc: "Somos daqui. Nossa equipe conhece cada bairro de SJC e garante coleta no horário combinado.",
              },
              {
                icon: "🚗",
                title: "Coleta e Entrega Grátis",
                desc: "Buscamos e entregamos na sua casa sem custo adicional em toda São José dos Campos.",
              },
              {
                icon: "⚡",
                title: "Express em 24h",
                desc: "Para urgências, oferecemos serviço express com devolução em até 24 horas.",
              },
              {
                icon: "🏆",
                title: "5 Anos de Experiência",
                desc: "Desde 2019 servindo famílias e empresas de SJC com excelência reconhecida.",
              },
              {
                icon: "🧺",
                title: "Todos os Serviços",
                desc: "Roupas, tapetes, sofás, cortinas, edredons, tênis e muito mais — tudo em um único lugar.",
              },
              {
                icon: "📱",
                title: "Agendamento Fácil",
                desc: "Agende pelo WhatsApp em segundos. Confirmamos dia e hora que melhor se encaixa na sua rotina.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-blue-900/50 border border-blue-800 rounded-2xl p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-blue-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Serviços Disponíveis em SJC</h2>
          <p className="text-center text-blue-300 mb-12">Atendemos em todos os bairros de São José dos Campos</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Lavagem de Roupas", desc: "Roupas do dia a dia com carinho" },
              { name: "Higienização de Sofás", desc: "Extração úmida e anti-ácaros" },
              { name: "Lavagem de Tapetes", desc: "Preserva cores e fibras originais" },
              { name: "Higienização de Cortinas", desc: "Sem tirar da janela" },
              { name: "Roupas Delicadas", desc: "Seda, cashmere e peças de grife" },
              { name: "Tênis e Calçados", desc: "Higienização completa" },
            ].map((service) => (
              <div key={service.name} className="bg-blue-900/40 border border-blue-700 rounded-xl p-5 hover:border-[#1D4ED8] transition-colors">
                <h3 className="font-bold text-lg mb-1">{service.name}</h3>
                <p className="text-blue-300 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">O que Nossos Clientes Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Fernanda Rocha",
                city: "Bosque dos Eucaliptos, SJC",
                text: "Uso a A7 há quase um ano e não consigo imaginar minha semana sem eles. Roupas chegam dobradas, perfumadas e sem uma ruga. O motoboy é sempre pontual.",
              },
              {
                name: "Patrícia Nunes",
                city: "Jardim São Dimas, SJC",
                text: "Tinha dois pares de tênis branco que eu achei que tinham ido. A A7 devolveu os dois impecáveis. Parecia que tinham saído da caixa. Valeu cada centavo.",
              },
              {
                name: "Luciana Ferreira",
                city: "Jardim Morumbi, SJC",
                text: "Terceirizei a lavagem dos uniformes do meu salão para a A7. Equipe sempre apresentável, cobranças no CNPJ, nota fiscal, tudo certinho.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-blue-900/50 border border-blue-800 rounded-2xl p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-blue-400 text-xs">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1D4ED8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Seu vizinho em São José dos Campos</h2>
          <p className="text-blue-200 mb-8 text-lg">Agende sua coleta agora e receba orçamento gratuito em minutos</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#1D4ED8] font-bold px-10 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Agendar Coleta Grátis
          </a>
        </div>
      </section>

      <section className="py-20 bg-blue-950">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Vocês atendem em qual região de São José dos Campos?",
                a: "Atendemos em toda a cidade de São José dos Campos — do Centro ao Aquarius, Urbanova, Vista Verde, Jardim Apolo e todos os bairros. Consulte no WhatsApp para confirmar sua área.",
              },
              {
                q: "Qual o prazo de entrega?",
                a: "O prazo padrão é de 48 horas para roupas e peças de médio porte. Para higienização de sofás e tapetes, realizamos no mesmo dia. Para urgências, temos serviço express em 24h.",
              },
              {
                q: "A coleta e entrega tem custo adicional?",
                a: "Não! A coleta e a entrega são gratuitas para clientes em São José dos Campos. Sem taxas surpresa.",
              },
              {
                q: "Como funciona o agendamento?",
                a: "É simples — entre em contato pelo WhatsApp, informe o serviço desejado e seu endereço. Confirmamos dia e horário em minutos.",
              },
              {
                q: "Vocês têm loja física em SJC?",
                a: "Sim, nossa sede está em São José dos Campos. Você pode deixar e buscar pessoalmente ou usar nosso serviço de coleta e entrega gratuito.",
              },
            ].map((item) => (
              <details key={item.q} className="bg-blue-900/40 border border-blue-800 rounded-xl group">
                <summary className="p-5 font-semibold cursor-pointer list-none flex justify-between items-center hover:text-blue-300 transition-colors">
                  {item.q}
                  <span className="text-[#1D4ED8] group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="px-5 pb-5 text-blue-300 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="sao-jose-dos-campos" />
      <footer className="bg-blue-950 border-t border-blue-800 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-400 text-sm">© 2025 A7 Lavanderia. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/vale-do-paraiba" className="text-blue-300 hover:text-white transition-colors">
              Vale do Paraíba
            </Link>
            <Link href="/" className="text-blue-300 hover:text-white transition-colors">
              Voltar ao início
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
