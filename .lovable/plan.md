# Plano de Refinamento Visual e Correção de Margem - Zentare Engenharia

Este plano foca na correção da margem excessiva no topo do site em dispositivos móveis e no refinamento da legibilidade geral, conforme as solicitações recentes.

## Alterações Técnicas

### 1. Ajuste de Margem Mobile (Hero Section)
- **Arquivo:** `src/routes/index.tsx`
- **Problema:** O espaço entre o cabeçalho e o título do Hero está muito grande em telas pequenas.
- **Solução:** Reduzir o padding superior (`pt-40`) para um valor mais equilibrado (`pt-28` ou `pt-32`) especificamente para dispositivos móveis, mantendo o distanciamento necessário para não haver sobreposição com a navegação.

### 2. Refinamento de Legibilidade e Sombras
- **Arquivo:** `src/routes/index.tsx`
- **Problema:** Texto do Hero difícil de ler em certas resoluções.
- **Solução:** Aumentar a intensidade das sombras (`drop-shadow`) e garantir que os gradientes de fundo no Hero ofereçam contraste suficiente para o texto branco/creme.

### 3. Ajustes de Posicionamento (Layout Geral)
- **Arquivo:** `src/routes/index.tsx`
- **Problema:** Elementos cortados ou mal posicionados em mobile.
- **Solução:** Revisar as classes de overflow e padding nos containers principais para garantir que nenhum texto saia da tela ou seja ocultado pelo cabeçalho fixo.

## Detalhes Técnicos para o Usuário
O site utiliza TanStack Router e Tailwind CSS v4. As mudanças serão aplicadas diretamente nos componentes React para garantir que a lógica de responsividade seja mantida sem quebras visuais.
