# Nero

Nero é um sistema de gerenciamento de pesquisa focado em organizar e gerenciar.

Link do design:

https://www.figma.com/design/x8a2zFOrLH1pC6T3WKLkS2/Untitled?node-id=0-1&t=eZtbbZQnu5OZBnB5-1

Após efetuar o login no sistema será direcionado para a home onde mostrará seu usuario e opções para seguir no sistema.

# Fluxo de Uso do Sistema

Criação de um Projeto de Pesquisa: O responsável cria um novo projeto de pesquisa e registra as informações básicas.

Adição de Experimentos: A equipe adiciona experimentos ao projeto conforme necessário, detalhando métodos, objetivos e variáveis.

Registro e Análise de Resultados: Cada experimento recebe atualizações conforme os dados são coletados. Análises são documentadas e os resultados armazenados.

Relatórios e Visualizações: Após a conclusão de experimentos, relatórios e visualizações de dados são gerados para análise e comparação.

Colaboração e Discussão: A equipe utiliza comentários e notificações para colaborar e manter o fluxo de trabalho eficiente.

# Paginas (Prototipo)

- Login: Já que o Nero é um sistema local de gerenciamento de experimentos é necessario realizar o login inicialmente.

- Home/Dashboard: Dependendo do tipo de usuario o dashboard será diferente. Basicamente o dashboard terá uma barra lateral que identificará o usuario e redirecionamentos para outras partes do sistema (nav bar) como a sessão de pesquisas ao qual o usuario estará inserido e seus respectivos experimentos. Ao abrir o dashboard terá atualizações sobre pesquisas e experimentos alem de alertas e notificações. Será o centro do sistema.
---

## Resumo de Permissões do Sistema

| Função/Permissão       | Administrador | Líder de Pesquisa | Pesquisador Auxiliar | Assistente Técnico | Leitor |
|------------------------|---------------|-------------------|----------------------|--------------------|--------|
| **Gerenciar Usuários** | ✅             | ❌                | ❌                   | ❌                 | ❌     |
| **Criar Pesquisas**     | ✅             | ✅                | ❌                   | ❌                 | ❌     |
| **Editar Pesquisas**    | ✅             | ✅                | ❌                   | ❌                 | ❌     |
| **Gerenciar Experimentos** | ✅         | ✅                | 🔄 (parcial)         | ❌                 | ❌     |
| **Inserir Resultados**  | ✅             | ✅                | ✅                   | ❌                 | ❌     |
| **Gerenciar Materiais** | ✅             | 🔄 (parcial)      | ❌                   | ✅                 | ❌     |
| **Gerar Relatórios**    | ✅             | ✅                | ❌                   | ❌                 | 🔍 (somente visualizar) |
| **Visualizar Tudo**     | ✅             | 🔍 (suas pesquisas) | 🔍 (suas pesquisas) | 🔍 (materiais)     | ✅     |

---

### **Legenda**
- ✅: Acesso total  
- 🔄: Acesso parcial (restrito a itens designados ou permissões específicas)  
- 🔍: Apenas visualização  
- ❌: Sem acesso  

---
