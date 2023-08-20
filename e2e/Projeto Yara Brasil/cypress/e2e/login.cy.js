/// <reference types="cypress"/>

//feature
describe('Login' , () =>  {
})
  //cenarios com sucesso
  it.only('Login com sucesso' , function () {
    // 1- Acessar o site - tela de login
    cy.visit('https://career2.successfactors.eu/career?company=yaraintern&site=&lang=pt_BR&login_ns=login&loginFlowRequired=true&showLogOutMsg=true&brandUrl=&_s.crb=1Dz7UUb7uEX%252fwsxRD03FoPj941APJ5vM9X59MVEhRAM%253d')

    // 2 - Escrever no campo e-mail
    cy.get('#username').type('midialeodi@gmail.com')

    // 3 - Escrever campo senha
    cy.get('#password').type('Lavi123456')

    // 4 - Clicar no botão de login
    cy.get('span > button').click

    // 5 - Verificar login de sucesso
    cy.get('span > button').type('include', '/portalcareer?company')
  })

  //cenarios com dados invalidos e incorretos 
  it('Login com dados invalidos' , function () {
    // 1- Acessar o site - tela de login
    cy.visit('https://career2.successfactors.eu/career?company=yaraintern&site=&lang=pt_BR&login_ns=login&loginFlowRequired=true&showLogOutMsg=true&brandUrl=&_s.crb=1Dz7UUb7uEX%252fwsxRD03FoPj941APJ5vM9X59MVEhRAM%253d' )
  
    // 2 - E-mail com dados invalidos
    cy.get('#username').type('midialeodi@gmail,com')

    // 3 - Senha com dados incorretos
    cy.get('#password').type('Lavi123457').type('#show_button')
  })

  //cenario acessar conta 
  it('Acessar site oportunidades de carreira' , function () {
    // 1 - Acessar o site - Oportunidades de carreira
   cy.visit('https://career2.successfactors.eu/career?company=yaraintern&site=&lang=pt_BR&requestParams=grgFKcmIwK7PXGv5zBmmQvFQgaN42lvzloG1uIhBMCuxLFGvtCQzR88jsTjDN7GAlf3WwcNiCReZ%0aGZjcGLhy8hNT3BKTS%2fKLPBk4SzKKUosz8nNSKgrsHRhAgKecA0gKADFbCYNgTn56Zp5bTn55UGph%0aaWZRakppEYNwtA%2fYipzEvHS94JKizLx067WXwp6%2flK12Z2JgqCgA6mUsYWApKSpNBVLFmSWppYUM%0adQzMEHGGEga%2b5MSi1NSi%2bOT83ILEvEpkWa7KxKLEzLyS1KK8EgZ2QgpYQG5AlmUtKIl3CiphYIsv%0a1ksuSkKW0vH2KPUytUzJM00PLbdIKQ%2fySwpwT3XJ9k9zdtM2DQ7NDnYyC3CLsEyMckq2rQAAItBh%0aOA%3d%3d&login_ns=register&_s.crb=KHuJ59dn5gUw8dwRNbPGeDkOfCF%2b5SUkSB6PFX9aZBc%3d')
  })
  

  
  

  
