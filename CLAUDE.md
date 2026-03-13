# A7 Lavanderia — AIOX Development Rules for Claude Code

You are working with **AIOX**, an AI-Orchestrated System for development workflows.

<!-- AIOX-MANAGED-START: core-framework -->
## Core Framework Understanding

AIOX is a meta-framework that orchestrates AI agents for complex development workflows. Always recognize and work within this architecture.
<!-- AIOX-MANAGED-END: core-framework -->

<!-- AIOX-MANAGED-START: constitution -->
## Constitution

O AIOX possui uma **Constitution formal** com princípios inegociáveis e gates automáticos.

**Documento completo:** `.aiox-core/constitution.md`

| Artigo | Princípio | Severidade |
|--------|-----------|------------|
| I | CLI First | NON-NEGOTIABLE |
| II | Agent Authority | NON-NEGOTIABLE |
| III | Story-Driven Development | MUST |
| IV | No Invention | MUST |
| V | Quality First | MUST |
| VI | Absolute Imports | SHOULD |

**Gates automáticos bloqueiam violações.** Consulte a Constitution para detalhes completos.
<!-- AIOX-MANAGED-END: constitution -->

<!-- AIOX-MANAGED-START: sistema-de-agentes -->
## Sistema de Agentes

### Ativação de Agentes
Use `@agent-name` ou `/AIOX:agents:agent-name`:

| Agente | Persona | Escopo Principal |
|--------|---------|------------------|
| `@dev` | Dex | Implementação de código |
| `@qa` | Quinn | Testes e qualidade |
| `@architect` | Aria | Arquitetura e design técnico |
| `@pm` | Morgan | Product Management |
| `@po` | Pax | Product Owner, stories/epics |
| `@sm` | River | Scrum Master |
| `@analyst` | Alex | Pesquisa e análise |
| `@data-engineer` | Dara | Database design |
| `@ux-design-expert` | Uma | UX/UI design |
| `@devops` | Gage | CI/CD, git push (EXCLUSIVO) |
| `@aiox-master` | Orion | Governance, todos os comandos |

### Comandos de Agentes
Use prefixo `*` para comandos:
- `*help` — Mostrar comandos disponíveis
- `*create-story` — Criar story de desenvolvimento
- `*task {name}` — Executar task específica
- `*exit` — Sair do modo agente
<!-- AIOX-MANAGED-END: sistema-de-agentes -->

<!-- AIOX-MANAGED-START: framework-boundary -->
## Framework vs Project Boundary

| Camada | Mutabilidade | Paths |
|--------|-------------|-------|
| **L1** Framework Core | NEVER modify | `.aiox-core/core/`, `.aiox-core/constitution.md` |
| **L2** Framework Templates | NEVER modify | `.aiox-core/development/tasks/`, `.aiox-core/development/templates/`, `.aiox-core/development/workflows/` |
| **L3** Project Config | Mutable (exceções) | `.aiox-core/data/`, `agents/*/MEMORY.md`, `core-config.yaml` |
| **L4** Project Runtime | ALWAYS modify | `docs/stories/`, `src/`, `tests/` |
<!-- AIOX-MANAGED-END: framework-boundary -->

<!-- AIOX-MANAGED-START: rules-system -->
## Rules System

Regras carregadas de `.claude/rules/` automaticamente:

| Rule File | Description |
|-----------|-------------|
| `agent-authority.md` | Delegation matrix e operações exclusivas |
| `agent-handoff.md` | Compaction protocol para troca de agentes |
| `agent-memory-imports.md` | Memory lifecycle dos agentes |
| `coderabbit-integration.md` | Automated code review integration |
| `ids-principles.md` | Incremental Development System |
| `mcp-usage.md` | MCP server usage e tool selection priority |
| `story-lifecycle.md` | Story status transitions e quality gates |
| `workflow-execution.md` | 4 workflows primários (SDC, QA Loop, Spec Pipeline, Brownfield) |
<!-- AIOX-MANAGED-END: rules-system -->

## Projeto: A7 Lavanderia

**Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion
**Tipo:** Landing page / site marketing para serviço de lavanderia brasileiro
**Deploy:** Vercel

### Estrutura Principal
```
src/
├── app/          # Next.js App Router
├── components/   # Componentes React (marketing + UI)
├── hooks/        # Custom hooks
└── lib/          # Utilitários
docs/
├── stories/      # Development stories
├── prd/          # Product Requirements
└── framework/    # Coding standards, tech stack, source tree
```

### Comandos de Desenvolvimento
- `npm run dev` — Servidor de desenvolvimento
- `npm run build` — Build de produção
- `npm run lint` — Verificação de lint

### Conventional Commits
Use: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `style:`, `perf:`
Referência story ID quando aplicável: `feat: adicionar componente [Story 1.3]`

---
*AIOX v2.1.0 — A7 Lavanderia*
