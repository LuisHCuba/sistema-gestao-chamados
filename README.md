# Sistema de Gestão de Chamados - MVP

Um sistema simples para gerenciamento de chamados técnicos, desenvolvido com React e Tailwind CSS.

## Sobre o projeto

Este é um MVP (Produto Mínimo Viável) para um sistema de gestão de chamados técnicos. O foco está nas funcionalidades essenciais que permitem:

- Visualizar lista de chamados
- Criar novos chamados
- Visualizar detalhes de um chamado
- Adicionar comentários aos chamados

## Estrutura de dados

### Chamados
- id: Identificador único
- titulo: Título do chamado
- descricao: Detalhamento do problema
- categoria: Hardware, Software, etc.
- status: Aberto, Em Análise, Concluído, etc.
- solicitante: Usuário que abriu o chamado
- data_abertura: Data de criação

### Comentários
- id: Identificador único
- chamado_id: Referência ao chamado
- usuario: Usuário que fez o comentário
- texto: Conteúdo do comentário
- data_criacao: Data do comentário

## Tecnologias utilizadas

- React
- TypeScript
- Tailwind CSS
- Lucide React (ícones)
- SessionStorage (armazenamento local)

## Como executar

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Execute o projeto com `npm run dev`
4. Acesse no navegador: `http://localhost:5173`

## Solução de Problemas

Se encontrar problemas para executar o sistema, tente:

1. Limpar o cache do npm: `npm cache clean --force`
2. Remover node_modules: `rm -rf node_modules`
3. Reinstalar dependências: `npm install`
4. Verificar se as portas 5173 ou 5175 estão disponíveis
5. Reiniciar o servidor de desenvolvimento: `npm run dev`

## Próximos passos

Para uma versão completa, poderíamos adicionar:
- Backend com banco de dados
- Autenticação de usuários
- Categorias e tipos customizáveis
- SLAs e controle de tempo
- Dashboard com métricas
- Permissões de acesso 