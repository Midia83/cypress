

describe('home page', () => {
    it('app deve estar on line', () => {
        cy.visit('https://www.natura.com.br/login?redirect=%2F')
    })
  })