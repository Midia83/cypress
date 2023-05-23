

describe('home page', () => {
    it('app deve estar on line', () => {
        cy.visit('www.aesop.com.br/login?redirect=%2F')
    })
  })