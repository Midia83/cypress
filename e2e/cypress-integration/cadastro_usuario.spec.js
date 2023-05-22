describe('Cadastro de Usuário'), () => {
    it('Cadastrar usuário com preenchimento de todos os campos'), () => {
      cy.visit('https://www.aesop.com.br'); // Acessa o site Aesop Brasil
  
      //Preenchimento dos campos de cadastro usuário

      cy.get('Primeiro nome').type ('Luciana Helena');
      cy.get('Sobrenome').type ('Silveira');
      cy.get('E-mail').type ('luciana_helena_silveira@sdrifs.com.br');
      cy.get('Senha').type ('Lu@silveira1010');
      cy.get('Repita sua senha').type ('Lu@silveira1010');
      cy.get('CPF').type ('192.975.139-72');
      cy.get('Gênero').type ('feminino');
      cy.get('Data de nascimento').type ('22/02/1958');
      cy.get('Telefone').type ('(91) 98126-8696');
      cy.get('btn-criar conta').click(); //Clica no botão criar conta
  
      //Verifica se o cadastro foi concluído com sucesso

      cy.url().should('eq', 'https://www.aesop.com.br/usuario/cadastro-sucesso');
      cy.get('mensagem-sucesso').should ('contain', 'usuário cadastrado com sucesso.');



      //Cadastro usuário Natura Brasil

      describe('Cadastro de Usuário'), () => {
        it('Deve cadastrar usuário com preenchimento de todos os campos', () => {
          cy.visit('https://wwww.natura.com.br'); //Acessa o site da Natura Brasil
      
          //Preenchimento dos campos de cadastro usuário

          cy.get('Primeiro nome').type ('Marcelo Anthony');
          cy.get('Sobrenome').type ('Sales');
          cy.get('E-mail').type ('marceloanthonysales@debiasi.com.br');
          cy.get('Senha').type ('Mar@sales2023');
          CY.get('Repetir senha').type ('Mar@sales2023');
          cy.get('CPF').type ('043.656.558-76');
          cy.get('Data de nascimento').type ('26/01/1996');
          cy.get('Gênero').type ('masculino');
          cy.get('Celular').type ('(91) 98365-4776');

    
          cy.get('btn-criar conta').click(); //Clica no botão criar conta
      
          // Verifica se o cadastro foi concluído com sucesso

          cy.url().should('eq', 'https://www.natura.com.br/usuario/cadastro-sucesso');
          cy.get('mensagem-sucesso').should ('contain', 'usuário cadastrado com sucesso.');

        });