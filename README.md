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
- PWA (Progressive Web App)

## Como executar

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Execute o projeto com `npm run dev`
4. Acesse no navegador: `http://localhost:5173`

## Publicação

O sistema está publicado usando GitHub Pages e pode ser acessado em:

```
https://luishcuba.github.io/sistema-gestao-chamados/
```

### Como publicar

1. Construa a versão de produção:
   ```
   npm run build
   ```

2. Copie os arquivos para a branch gh-pages:
   ```
   git checkout -b gh-pages
   git add dist -f
   git commit -m "Atualizar versão de produção"
   git push origin gh-pages
   ```

3. Configure o GitHub Pages nas configurações do repositório:
   - Acesse Settings > Pages
   - Selecione a branch gh-pages
   - Selecione a pasta / (root)
   - Clique em Save

## Solução de Problemas

Se encontrar problemas para executar o sistema, tente:

1. Limpar o cache do npm: `npm cache clean --force`
2. Remover node_modules: `rm -rf node_modules`
3. Reinstalar dependências: `npm install`
4. Verificar se as portas 5173 ou 5175 estão disponíveis
5. Reiniciar o servidor de desenvolvimento: `npm run dev`

### Problemas com GitHub Pages

Se o site não aparecer após publicação:
- Verifique se a configuração da base URL está correta no arquivo `vite.config.ts`
- Aguarde alguns minutos pois o GitHub pode demorar para processar as alterações
- Certifique-se de que selecionou a branch gh-pages e a pasta raiz (/) nas configurações

## Próximos passos

Para uma versão completa, poderíamos adicionar:
- Backend com banco de dados
- Autenticação de usuários
- Categorias e tipos customizáveis
- SLAs e controle de tempo
- Dashboard com métricas
- Permissões de acesso 