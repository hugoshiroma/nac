# Prompt do Projeto - Trabalho Universitário LAVINIA

## Contexto Geral
Este é um projeto universitário que precisa ser implementado da forma **mais simples e rápida possível**. O foco é funcionalidade básica com setup mínimo, priorizando agilidade no desenvolvimento e facilidade no deploy.

## Stack Tecnológica Escolhida

### Opção Recomendada: Next.js + Tailwind CSS
- **Framework**: Next.js (App Router ou Pages Router - escolher o mais direto)
- **Estilização**: Tailwind CSS
- **Deploy**: Vercel (integração nativa com Next.js)

**Por que Next.js?**
- Setup instantâneo com `npx create-next-app@latest`
- Zero configuração adicional necessária
- Deploy na Vercel em 1 clique
- Tailwind já vem pré-configurado
- Hot reload automático
- Otimizações de produção out-of-the-box

### Alternativa (se preferir): React + Vite + Tailwind
- Mais leve, mas requer configuração manual do Tailwind
- Deploy na Vercel também funciona perfeitamente
- Use apenas se já tiver familiaridade

## Workflow com Anima (Figma → Código)

### Situação Atual
O Anima gera código de cada página individual do Figma, incluindo:
- Arquivo `tailwind.config.js` por página
- Arquivo `tailwind.css` por página
- Componentes React/HTML da página

### Estratégia de Integração

1. **Consolidar Configurações do Tailwind**
   - Mesclar todos os `tailwind.config.js` em um único arquivo no projeto
   - Combinar todas as cores, fontes, e configurações customizadas
   - Manter apenas as classes que realmente são usadas

2. **Unificar Estilos CSS**
   - Criar um único `globals.css` ou `tailwind.css` global
   - Importar apenas uma vez no projeto (no `_app.js` ou `layout.js`)
   - Remover duplicações entre os arquivos CSS gerados

3. **Organizar Componentes**
   ```
   /src
     /components
       /pages
         /HomePage      (componentes da página inicial)
         /AboutPage     (componentes da página sobre)
         /ContactPage   (etc...)
       /shared          (componentes reutilizáveis)
   ```

4. **Processo Sugerido**
   - Para cada página exportada do Anima:
     1. Copiar os componentes para a estrutura do Next.js
     2. Extrair configurações únicas do `tailwind.config.js`
     3. Adicionar essas configs ao `tailwind.config.js` global
     4. Ajustar imports e caminhos
     5. Testar a página individualmente

## Requisitos do Projeto

### Funcionalidades Mínimas
- [ ] Navegação entre páginas (usar `next/link` ou React Router)
- [ ] Responsividade básica (Tailwind já ajuda nisso)
- [ ] Componentes do Figma renderizando corretamente
- [ ] Deploy funcionando na Vercel

### Não é Necessário (a menos que especificado)
- ❌ Backend/API
- ❌ Banco de dados
- ❌ Autenticação
- ❌ SEO avançado
- ❌ Testes automatizados
- ❌ Otimizações complexas

## Setup Rápido Recomendado

### Opção 1: Next.js (RECOMENDADO)
```bash
# Criar projeto
npx create-next-app@latest lavinia-projeto --typescript --tailwind --app

# Estrutura mínima
cd lavinia-projeto
npm run dev

# Deploy
# Conectar repositório GitHub à Vercel
# Deploy automático em cada push
```

### Opção 2: React + Vite
```bash
# Criar projeto
npm create vite@latest lavinia-projeto -- --template react

# Adicionar Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Configurar e rodar
npm install
npm run dev
```

## Checklist de Implementação

### Fase 1: Setup Inicial (30min)
- [ ] Criar projeto Next.js com Tailwind
- [ ] Configurar estrutura de pastas
- [ ] Fazer primeiro commit no GitHub
- [ ] Conectar Vercel ao repositório

### Fase 2: Integração Anima (1-2h)
- [ ] Exportar todas as páginas do Anima
- [ ] Consolidar `tailwind.config.js` unificado
- [ ] Criar arquivo CSS global único
- [ ] Copiar componentes página por página
- [ ] Ajustar imports e caminhos

### Fase 3: Navegação e Ajustes (1h)
- [ ] Implementar navegação entre páginas
- [ ] Testar responsividade em mobile/tablet/desktop
- [ ] Corrigir estilos quebrados (se houver)
- [ ] Adicionar favicon e título do site

### Fase 4: Deploy Final (30min)
- [ ] Verificar build local (`npm run build`)
- [ ] Fazer push para GitHub
- [ ] Confirmar deploy na Vercel
- [ ] Testar site em produção
- [ ] Compartilhar URL final

## Dicas Importantes

### Tailwind + Anima
- O Anima pode gerar classes Tailwind desatualizadas ou não-padrão
- Se algo não funcionar, verificar se as classes existem no Tailwind atual
- Pode ser necessário adicionar cores/fontes customizadas no `tailwind.config.js`

### Debugging Comum
```javascript
// Se estilos não aplicarem, verificar:
// 1. tailwind.config.js tem os caminhos corretos
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ajustar para sua estrutura
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  // ...
}

// 2. CSS global está importado
// app/layout.js ou _app.js
import './globals.css'
```

### Vercel Deploy
- Build automático detecta Next.js automaticamente
- Se usar Vite, configurar manualmente o build command:
  - Build Command: `npm run build`
  - Output Directory: `dist`

## Exemplo de Estrutura Final

```
lavinia-projeto/
├── app/                      # (Next.js App Router)
│   ├── page.js              # Página inicial
│   ├── about/page.js        # Página sobre
│   ├── contact/page.js      # Página contato
│   ├── layout.js            # Layout global
│   └── globals.css          # Estilos Tailwind unificados
├── components/
│   ├── Header.js
│   ├── Footer.js
│   └── ...                  # Componentes do Anima
├── public/
│   └── images/              # Imagens do projeto
├── tailwind.config.js       # Config Tailwind consolidada
├── package.json
└── README.md
```

## Objetivo Final
Um site funcional, responsivo, com design do Figma implementado, rodando na Vercel, feito no menor tempo possível com qualidade suficiente para entrega acadêmica.

**Prioridade**: Funciona > Perfeito

---

## Próximos Passos
1. Criar o projeto Next.js
2. Exportar páginas do Anima
3. Integrar componentes
4. Deploy na Vercel
5. ✅ Entregar o trabalho