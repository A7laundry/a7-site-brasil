# Blueprint — A7 Lavanderia: 30 Artigos de Blog

**Data:** Março 2026 | **Stack:** Next.js 14 · TypeScript · Tailwind CSS · Vercel

---

## 1. Diagnóstico do Estado Atual

### Estrutura de rotas (hoje)

| Rota | Status |
|------|--------|
| `/` | ✅ Existe (landing page completa) |
| `/blog` | ❌ Não existe |
| `/blog/[slug]` | ❌ Não existe |

### Como o blog funciona hoje

O `BlogSection` exibe **6 dos 10 artigos** hardcoded em `src/lib/constants.ts` no array `BLOG_ARTICLES`. Cada card linka para `https://a7lavanderia.com.br/{slug}` — um **site externo** que pode não existir. Não há nenhuma página de artigo dentro deste projeto.

**Problema crítico:** Os 10 artigos atuais não têm conteúdo, são só título + excerpt. O SEO não é indexado por não haver página real.

### 10 artigos existentes (só metadados)

| # | Slug | Categoria |
|---|------|-----------|
| 1 | `como-cuidar-roupas-delicadas` | Dicas |
| 2 | `tirar-manchas-dificeis` | Dicas |
| 3 | `higienizacao-edredom-importancia` | Saúde |
| 4 | `lavar-tenis-corretamente` | Tutorial |
| 5 | `lavanderia-sustentavel` | Sustentabilidade |
| 6 | `organizar-guarda-roupa` | Organização |
| 7 | `limpeza-tapetes-profissional` | Dicas |
| 8 | `cuidados-cashmere-la` | Tutorial |
| 9 | `uniformes-corporativos-higienizacao` | Empresarial |
| 10 | `alergia-acaros-roupa-cama` | Saúde |

---

## 2. Arquitetura Proposta para 30 Artigos

### Opção A — MDX (Recomendado) ⭐

Artigos como arquivos `.mdx` em `src/content/blog/`. Cada arquivo = 1 artigo completo.

```
src/
├── app/
│   ├── blog/
│   │   ├── page.tsx              ← listagem de todos os artigos
│   │   └── [slug]/
│   │       └── page.tsx          ← artigo individual
├── content/
│   └── blog/
│       ├── como-cuidar-roupas-delicadas.mdx
│       ├── tirar-manchas-dificeis.mdx
│       └── ... (30 arquivos total)
└── lib/
    └── blog.ts                   ← funções: getAllPosts(), getPostBySlug()
```

**Vantagens:**
- Conteúdo vive no repositório (versionado no git)
- SEO nativo com Next.js `generateMetadata` por artigo
- `generateStaticParams` para build estático (velocidade máxima)
- Sem banco de dados, sem API externa, custo zero

**Dependências necessárias:**
```bash
npm install next-mdx-remote gray-matter
# ou
npm install @next/mdx @mdx-js/react
```

---

### Opção B — CMS Headless (Futura escalada)

Usar Sanity, Contentful ou Notion como fonte de dados. Mais complexo, necessário apenas se houver equipe de marketing editando sem acesso ao código.

---

## 3. Estrutura de um Artigo MDX

### Frontmatter (metadados)

```mdx
---
title: "Como Cuidar de Roupas Delicadas: Guia Completo"
slug: "como-cuidar-roupas-delicadas"
excerpt: "Aprenda as melhores práticas para manter suas roupas de seda, linho e cashmere sempre impecáveis."
category: "Dicas"
image: "https://images.unsplash.com/photo-1604335399105..."
publishedAt: "2026-03-01"
author: "Equipe A7 Lavanderia"
readingTime: "5 min"
seoTitle: "Como Cuidar de Roupas Delicadas | A7 Lavanderia"
seoDescription: "Guia completo para cuidar de seda, linho e cashmere. Dicas profissionais da A7 Lavanderia, a maior lavanderia do Vale do Paraíba."
tags: ["roupas delicadas", "seda", "cashmere", "cuidados"]
---

## Introdução

Conteúdo completo aqui em Markdown...
```

---

## 4. Os 30 Artigos — Planejamento por Categoria

### Categoria: Dicas de Lavagem (8 artigos)

| # | Título | Slug | Keyword-alvo |
|---|--------|------|--------------|
| 1 | Como Cuidar de Roupas Delicadas: Guia Completo | `como-cuidar-roupas-delicadas` | cuidar roupas delicadas |
| 2 | 7 Truques Profissionais para Tirar Manchas Difíceis | `tirar-manchas-dificeis` | tirar manchas difíceis |
| 3 | Como Lavar Tênis sem Estragar: Passo a Passo | `lavar-tenis-corretamente` | como lavar tênis |
| 4 | Guia Definitivo: Cuidados com Cashmere e Lã | `cuidados-cashmere-la` | como lavar cashmere |
| 5 | Como Lavar Jeans Corretamente e Preservar a Cor | `como-lavar-jeans` | como lavar jeans |
| 6 | Temperatura Certa para Cada Tipo de Tecido | `temperatura-lavagem-tecidos` | temperatura lavar roupa |
| 7 | Como Tirar Manchas de Vinho Tinto em 3 Passos | `tirar-mancha-vinho-tinto` | tirar mancha vinho |
| 8 | Lavar à Mão vs Máquina: Quando Usar Cada Um | `lavar-mao-vs-maquina` | lavar roupa à mão |

### Categoria: Saúde e Higiene (6 artigos)

| # | Título | Slug | Keyword-alvo |
|---|--------|------|--------------|
| 9 | Por que Higienizar seu Edredom a Cada 3 Meses? | `higienizacao-edredom-importancia` | higienizar edredom |
| 10 | Alergia a Ácaros? O Que Sua Roupa de Cama Tem a Ver | `alergia-acaros-roupa-cama` | alergia ácaros roupa cama |
| 11 | Fungos na Roupa: Como Identificar e Eliminar | `fungos-roupa-como-eliminar` | fungo na roupa |
| 12 | Higiene Infantil: Cuidados Especiais com Roupas de Bebê | `higiene-roupas-bebe` | lavar roupa bebê |
| 13 | Por que Tapetes Acumulam 4.000 Vezes Mais Bactérias | `bacterias-tapetes-higienizacao` | higienização tapetes |
| 14 | Cortinas: O Filtro de Ar que Você Esquece de Lavar | `higienizacao-cortinas-saude` | limpar cortinas |

### Categoria: Tutoriais Passo a Passo (5 artigos)

| # | Título | Slug | Keyword-alvo |
|---|--------|------|--------------|
| 15 | Limpeza Profissional de Tapetes: Quando e Por Quê | `limpeza-tapetes-profissional` | limpeza tapetes |
| 16 | Como Higienizar Sofá em Casa (e Quando Chamar Profissional) | `higienizar-sofa-casa` | higienizar sofá |
| 17 | Como Lavar Couro Sem Estragar: Guia Completo | `como-lavar-couro` | lavar couro |
| 18 | Passo a Passo: Como Tirar Manchas de Óleo da Roupa | `tirar-mancha-oleo-roupa` | mancha de óleo roupa |
| 19 | Como Conservar Vestido de Noiva: Do Casamento em Diante | `conservar-vestido-noiva` | conservar vestido de noiva |

### Categoria: Sustentabilidade (3 artigos)

| # | Título | Slug | Keyword-alvo |
|---|--------|------|--------------|
| 20 | Lavanderia Sustentável: Como a A7 Reduz o Impacto Ambiental | `lavanderia-sustentavel` | lavanderia sustentável |
| 21 | Lavar Menos, Gastar Menos: Consumo Consciente de Roupas | `consumo-consciente-roupas` | consumo consciente moda |
| 22 | Produtos Ecológicos para Lavar Roupa: Vale a Pena? | `produtos-ecologicos-lavar-roupa` | sabão ecológico roupa |

### Categoria: Organização (3 artigos)

| # | Título | Slug | Keyword-alvo |
|---|--------|------|--------------|
| 23 | 5 Dicas para Organizar seu Guarda-Roupa como Profissional | `organizar-guarda-roupa` | organizar guarda-roupa |
| 24 | Capsule Wardrobe: Como Ter Poucas Roupas e Sempre Estar Bem | `capsule-wardrobe-guia` | capsule wardrobe |
| 25 | Como Guardar Roupas de Inverno sem Mofo | `guardar-roupas-inverno` | guardar roupas inverno |

### Categoria: Empresarial / B2B (3 artigos)

| # | Título | Slug | Keyword-alvo |
|---|--------|------|--------------|
| 26 | Higienização de Uniformes: Como Manter a Equipe Impecável | `uniformes-corporativos-higienizacao` | higienizar uniformes |
| 27 | Lavanderia para Hotéis: Por que Terceirizar é Mais Barato | `lavanderia-hoteis-terceirizacao` | lavanderia para hotéis |
| 28 | Enxoval de Restaurante: Gestão de Toalhas e Uniformes | `enxoval-restaurante-gestao` | lavanderia restaurante |

### Categoria: Local / SEO Geo (2 artigos)

| # | Título | Slug | Keyword-alvo |
|---|--------|------|--------------|
| 29 | Lavanderia em São José dos Campos: Guia Completo | `lavanderia-sao-jose-dos-campos` | lavanderia São José dos Campos |
| 30 | As Melhores Lavanderias do Vale do Paraíba em 2026 | `lavanderias-vale-do-paraiba` | lavanderia Vale do Paraíba |

---

## 5. SEO por Artigo — Estrutura Obrigatória

Cada artigo deve ter, via `generateMetadata()` no Next.js:

```typescript
// src/app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.image],
      type: "article",
      publishedTime: post.publishedAt,
    },
    alternates: {
      canonical: `https://a7lavanderia.com.br/blog/${post.slug}`,
    },
  };
}
```

**Schema JSON-LD obrigatório por artigo:**
- `Article` schema com `author`, `datePublished`, `image`
- `BreadcrumbList`: Home → Blog → Artigo
- Link interno para WhatsApp CTA no final de cada artigo

---

## 6. Componentes a Criar

| Componente | Caminho | Função |
|-----------|---------|--------|
| `BlogListPage` | `src/app/blog/page.tsx` | Grid com todos os 30 artigos + filtro por categoria |
| `BlogArticlePage` | `src/app/blog/[slug]/page.tsx` | Artigo completo com sidebar |
| `ArticleCard` | `src/components/blog/ArticleCard.tsx` | Card reutilizável (substituir o atual inline) |
| `ArticleHeader` | `src/components/blog/ArticleHeader.tsx` | Título, categoria, data, tempo de leitura |
| `ArticleSidebar` | `src/components/blog/ArticleSidebar.tsx` | Artigos relacionados + CTA WhatsApp |
| `CategoryFilter` | `src/components/blog/CategoryFilter.tsx` | Filtro por: Dicas, Saúde, Tutorial, etc. |
| `BlogCTA` | `src/components/blog/BlogCTA.tsx` | Banner "Agende pelo WhatsApp" no final do artigo |
| `ReadingProgress` | `src/components/blog/ReadingProgress.tsx` | Barra de progresso de leitura (opcional) |

---

## 7. Atualização do BlogSection (Home)

O componente atual linkava para site externo. Com as novas rotas, atualizar para:

```tsx
// ANTES
href={`https://a7lavanderia.com.br/${article.slug}`}

// DEPOIS
href={`/blog/${article.slug}`}
```

E o botão "Ver todos os artigos":
```tsx
// ANTES
href="https://a7lavanderia.com.br/blog"

// DEPOIS
href="/blog"
```

---

## 8. Sitemap Dinâmico

Atualizar `src/app/sitemap.ts` para incluir todos os artigos:

```typescript
import { getAllPosts } from "@/lib/blog";

export default async function sitemap() {
  const posts = await getAllPosts();
  const blogUrls = posts.map((post) => ({
    url: `https://a7lavanderia.com.br/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [
    { url: "https://a7lavanderia.com.br", priority: 1.0 },
    { url: "https://a7lavanderia.com.br/blog", priority: 0.8 },
    ...blogUrls,
  ];
}
```

---

## 9. Ordem de Implementação (Sprints)

### Sprint 1 — Infraestrutura (1-2 dias)
1. Instalar `next-mdx-remote` + `gray-matter`
2. Criar `src/lib/blog.ts` com `getAllPosts()` e `getPostBySlug()`
3. Criar `src/app/blog/page.tsx` (listagem)
4. Criar `src/app/blog/[slug]/page.tsx` (artigo individual)
5. Criar `src/content/blog/` com 2-3 artigos de teste

### Sprint 2 — Componentes (1 dia)
6. `ArticleCard`, `ArticleHeader`, `ArticleSidebar`
7. `BlogCTA` com link WhatsApp
8. `CategoryFilter` no BlogListPage

### Sprint 3 — Conteúdo (3-5 dias)
9. Migrar os 10 artigos existentes (adicionar conteúdo real)
10. Escrever os 20 artigos novos
11. Adicionar imagens Unsplash relevantes para cada um

### Sprint 4 — SEO e Integração (1 dia)
12. `generateMetadata` em cada página
13. `generateStaticParams` para SSG
14. Atualizar `sitemap.ts` dinâmico
15. Atualizar links do `BlogSection` na home
16. JSON-LD `Article` schema em cada artigo

### Sprint 5 — Qualidade (0,5 dia)
17. Verificar Core Web Vitals (LCP, CLS)
18. Testar `npm run build` sem erros
19. Verificar Open Graph de 5 artigos no Twitter Card Validator

---

## 10. Estimativa de Impacto SEO

| Métrica | Antes | Depois (3 meses) |
|---------|-------|------------------|
| Páginas indexadas | 1 | 32+ |
| Keywords ranqueadas | ~15 | ~200+ |
| Tráfego orgânico estimado | Baixo | Médio-Alto |
| Score de autoridade de domínio | Inicial | Em crescimento |

**Keywords de alta intenção para priorizar:**
- `lavanderia São José dos Campos` (local, alta conversão)
- `higienizar edredom` (serviço principal)
- `como lavar tênis` (alto volume)
- `lavanderia com coleta e entrega` (differenciador)

---

## 11. Checklist de Publicação por Artigo

Para cada um dos 30 artigos, verificar:

- [ ] Frontmatter completo (title, slug, excerpt, category, image, publishedAt, seoTitle, seoDescription)
- [ ] Mínimo 800 palavras de conteúdo
- [ ] H2 e H3 usando keywords secundárias
- [ ] Pelo menos 1 imagem com `alt` descritivo
- [ ] CTA interno para WhatsApp no final
- [ ] Link para pelo menos 1 artigo relacionado (links internos)
- [ ] `generateMetadata` retornando title e description únicos
- [ ] Testado com `npm run build` sem erros

---

## 12. Placeholders Pendentes (Antes de Publicar)

Antes de ir ao ar, preencher em `src/lib/constants.ts`:

| Campo | Valor atual | Ação |
|-------|-------------|------|
| `email` | `[PLACEHOLDER: email@...]` | Adicionar email real |
| `cnpj` | `[PLACEHOLDER: XX.XXX...]` | Adicionar CNPJ |
| `address.street` | `[PLACEHOLDER: Rua...]` | Endereço principal |
| `address.zip` | `[PLACEHOLDER: 12200...]` | CEP |
| `foundingYear` | `[PLACEHOLDER: ano...]` | Ano de fundação |
| `socialMedia.*` | Todos placeholders | URLs reais de redes sociais |
| Google Site Verification | Comentado no `layout.tsx` | Adicionar ID do Google Search Console |
| Google Tag Manager | Comentado no `layout.tsx` | Adicionar GTM quando ativo |
| Geo coordinates | `[PLACEHOLDER: lat/lng]` | Coordenadas da sede |

---

*Blueprint gerado em 13/03/2026 — A7 Lavanderia | Next.js 14*
