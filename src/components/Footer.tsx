import { COMPANY, NAV_ITEMS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container-main mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white font-bold text-lg">
                A7
              </div>
              <span className="font-bold text-lg text-white">
                A7 Lavanderia
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Lavanderia premium com coleta e entrega no Vale do Paraíba.
              Cuidamos das suas roupas com padrão internacional para você ter
              mais tempo para o que importa.
            </p>
            <div className="flex gap-3">
              {[
                { name: "Instagram", href: COMPANY.socialMedia.instagram },
                { name: "Facebook", href: COMPANY.socialMedia.facebook },
                { name: "TikTok", href: COMPANY.socialMedia.tiktok },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <span className="text-xs font-bold text-gray-400 hover:text-white">
                    {social.name.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>{COMPANY.whatsappDisplay}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>{COMPANY.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>
                  {COMPANY.address.street}, {COMPANY.address.neighborhood}
                  <br />
                  {COMPANY.address.city} - {COMPANY.address.state}
                </span>
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Cidades Atendidas
            </h3>
            <ul className="space-y-1 text-sm">
              {COMPANY.cities.slice(0, 8).map((city) => (
                <li key={city}>
                  <span className="hover:text-accent transition-colors cursor-default">
                    {city}
                  </span>
                </li>
              ))}
              {COMPANY.cities.length > 8 && (
                <li className="text-accent text-xs font-medium pt-1">
                  + {COMPANY.cities.length - 8} cidades
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap items-center justify-center gap-4 py-6 mb-6 border-t border-gray-800">
          {COMPANY.certifications.map((cert) => (
            <span
              key={cert}
              className="text-xs bg-gray-800 px-3 py-1.5 rounded-full"
            >
              {cert}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-800 text-xs">
          <p>
            &copy; {currentYear} {COMPANY.name}. Todos os direitos reservados.
            CNPJ: {COMPANY.cnpj}
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
