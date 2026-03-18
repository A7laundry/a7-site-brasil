# Prompt para o Lovable — Redesign da Home A7 Lavanderia

## Contexto do Projeto

Estás a trabalhar num projeto **Next.js 14** com **React 18**, **TypeScript**, **Tailwind CSS** e **Framer Motion**. O projeto já está em produção em `a7lavanderia.com`.

---

## ⚠️ REGRAS ABSOLUTAS — NÃO TOCAR

Os ficheiros abaixo estão **BLOQUEADOS**. Não alteres, não moves, não apagues, não reimportas:

| Ficheiro | Motivo |
|---|---|
| `src/app/layout.tsx` | Contém GTM (Google Tag Manager) — quebrar isto mata o analytics |
| `src/app/page.tsx` | Contém schemas JSON-LD de SEO críticos — não tocar |
| `src/lib/constants.ts` | Dados reais da empresa (telefone, endereço, cidades) |
| `src/lib/schemas.ts` | Schemas estruturados para Google |
| `src/components/Header.tsx` | Header já finalizado |
| `src/components/Footer.tsx` | Footer já finalizado |
| `src/components/WhatsAppFloat.tsx` | Botão flutuante WhatsApp |
| `src/app/globals.css` | CSS global — não alteres variáveis existentes |
| `public/` | Imagens e assets existentes |
| Qualquer ficheiro em `src/app/` exceto o de baixo | Outras páginas do site |

---

## ✅ O QUE DEVES FAZER

**Cria UM único ficheiro novo:**

```
src/components/HomeV2.tsx
```

Este ficheiro é a nova página principal. É o único lugar onde trabalhas.

---

## Imports Obrigatórios

O teu `HomeV2.tsx` **deve** usar estas importações:

```tsx
import {
  COMPANY,
  SERVICES,
  TESTIMONIALS,
  HOW_IT_WORKS_STEPS,
  PAIN_POINTS,
  FAQ_ITEMS,
  getWhatsAppLink,
} from "@/lib/constants";
import Image from "next/image";
```

**Nunca** escreva os dados da empresa hardcoded. Usa sempre as constantes acima.

---

## Links de WhatsApp

Para qualquer botão de CTA ou WhatsApp, usa sempre:

```tsx
href={getWhatsAppLink("agendar")}   // para agendamento
href={getWhatsAppLink("orcamento")} // para orçamento
href={getWhatsAppLink("default")}   // genérico
```

O número correto é obtido automaticamente pela função. Nunca escreva o número diretamente.

---

## Dados Disponíveis nas Constantes

### COMPANY (principais campos)
- `COMPANY.name` — "A7 Lavanderia"
- `COMPANY.stats.attendances` — "50.000"
- `COMPANY.stats.googleRating` — 4.9
- `COMPANY.stats.unitsBrazil` — 14
- `COMPANY.phone` / `COMPANY.whatsappDisplay`
- `COMPANY.cities` — array com 13 cidades do Vale do Paraíba
- `COMPANY.address` — endereço completo

### SERVICES — array de serviços
Cada item tem: `id`, `name`, `description`, `icon`, `price`, `features[]`

### TESTIMONIALS — array de depoimentos
Cada item tem: `name`, `city`, `rating`, `text`, `service`

### HOW_IT_WORKS_STEPS — array de passos
Cada item tem: `step`, `title`, `description`, `icon`

### PAIN_POINTS — array de dores do cliente
Cada item tem: `pain`, `solution`

### FAQ_ITEMS — array de perguntas frequentes
Cada item tem: `question`, `answer`

---

## Design — Diretrizes

**Objetivo:** Página de alta conversão. Mais energia, mais urgência, mais visualmente impactante.

**Tom:** Premium + agressivo em vendas. Não é minimalista frio — é premium quente, que converte.

**Paleta** (mantém as CSS vars existentes do globals.css):
- `var(--color-primary)` — azul principal da marca
- `var(--color-accent)` — cor de destaque/CTA
- Branco, cinza escuro, gradientes

**Seções obrigatórias na home (nesta ordem):**
1. **Hero** — headline impactante, subheadline, 2 CTAs (WhatsApp + "Ver Serviços"), prova social rápida (estrelas, número de clientes)
2. **Barra de trust** — logos/selos de confiança, número de cidades, anos de mercado
3. **Dores do cliente** — problema vs solução (usa `PAIN_POINTS`)
4. **Serviços** — cards dos serviços (usa `SERVICES`)
5. **Como funciona** — 4 passos simples (usa `HOW_IT_WORKS_STEPS`)
6. **Prova social** — depoimentos reais (usa `TESTIMONIALS`)
7. **Cidades atendidas** — lista visual das cidades (usa `COMPANY.cities`)
8. **FAQ** — perguntas frequentes (usa `FAQ_ITEMS`)
9. **CTA final** — banner de conversão forte com WhatsApp

**Animações:** Podes usar Framer Motion (`motion`, `useInView`, `AnimatePresence`) — já está instalado.

**Imagens:** Usa imagens já existentes em `public/` ou `next/image`. Não importa URLs externas hardcoded.

---

## Stack Técnico

- **Next.js 14** com App Router — usa `"use client"` no topo do ficheiro se usares hooks
- **TypeScript** — tipagem obrigatória
- **Tailwind CSS** — classes utilitárias
- **Framer Motion** — animações (`framer-motion`)
- Imports com `@/` (absolute imports configurados)

---

## Entrega Final

Quando terminares, o resultado deve ser:

1. **Apenas** o ficheiro `src/components/HomeV2.tsx` criado/modificado
2. Nenhum outro ficheiro do projeto alterado
3. O componente exportado como `export default function HomeV2()`
4. Zero erros de TypeScript
5. Responsivo (mobile-first)

---

## O que acontece depois

Após aprovares o design, um desenvolvedor vai:
- Importar o `HomeV2` no `page.tsx` no lugar do `HomeRedesign`
- Ligar os schemas SEO e o GTM (que já existem e não foram tocados)
- Fazer o deploy final

---

*Projeto: A7 Lavanderia — Branch: lovable/redesign-home*
