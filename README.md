Teste Prático — Analista QA

Este repositório contém a resolução dos cenários propostos no teste prático de QA.

Estrutura do projeto

* Os arquivos `.txt` contêm as respostas teóricas e estão nomeados de acordo com cada cenário proposto.

* A pasta `automacao-bonus` contém o projeto de automação desenvolvido com Cypress e suas respectivas configurações.

* Em `automacao-bonus/cypress/e2e/spec.cy.js` estão os testes automatizados desenvolvidos para os cenários propostos.

* Em `automacao-bonus/cypress/pages` está o Page Object utilizado para a página de Checkout. Optei por utilizar Page Object especificamente nessa página por ser o fluxo mais complexo e possuir maior quantidade de interações. Para os fluxos de login e manipulação de produtos, utilizei Custom Commands para promover a reutilização das ações.

* Em `automacao-bonus/cypress/support/commands.js` estão os Custom Commands utilizados nos testes.

Execução dos testes

Para executar os testes utilizando o VS Code:

1. Abra a pasta `automacao-bonus` no terminal.
2. Execute o comando:

bash npx cypress open


3. Selecione E2E Testing.
4. Selecione o navegador desejado.
5. Selecione o arquivo `spec.cy.js`.

Após isso, os testes serão iniciados.

Tecnologias utilizadas

* Cypress
* JavaScript
* Node.js
* Page Object
* Custom Commands

