describe('Cadastro de Usuário'), () => {
  beforeEach(function() {
      cy.visit('https://www.aesop.com.br') 
    })
  
     it.only('preenche todos os campos de cadastro usuario ') 
      cy.get('#firstName').type ('Luciana Helena');
      cy.get('#lastName').type ('Silveira');
      cy.get('#email').type ('luciana_helena_silveira@sdrifs.com.br');
      cy.get('#senha').type ('Lu@silveira1010');
      cy.get('#repita sua senha').type ('Lu@silveira1010');
      cy.get('#cpf').type ('192.975.139-72');
      cy.get('#gênero').type ('feminino');
      cy.get('#data de nascimento').type ('22/02/1958');
      cy.get('#phone').type ('(91) 98126-8696');
      cy.get('button[type="criar conta"]').click();
      cy.url().should('eq', 'https://www.aesop.com.br/usuario/cadastro-sucesso');
      cy.get('mensagem-sucesso').should ('contain', 'usuário cadastrado com sucesso.');

describe('Cadastro de Usuário'), () => {
  beforeEach(function() {
      cy.visit('https://wwww.natura.com.br')
    })

     it.only('preenche todos os campos de cadastro usuario ') 
      cy.get('#firstName').type ('Marcelo Anthony');
      cy.get('#lastName').type ('Sales');
      cy.get('#email').type ('marceloanthonysales@debiasi.com.br');
      cy.get('#senha').type ('Mar@sales2023');
      cY.get('#repetir senha').type ('Mar@sales2023');
      cy.get('#cpf').type ('043.656.558-76');
      cy.get('#data de nascimento').type ('26/01/1996');
      cy.get('#gênero').type ('masculino');
      cy.get('#phone').type ('(91) 98365-4776');
      cy.get('button[type="criar conta"]').click();
      cy.url().should('eq', 'https://www.natura.com.br/usuario/cadastro-sucesso');
      cy.get('mensagem-sucesso').should ('contain', 'usuário cadastrado com sucesso.');
    }
  }
