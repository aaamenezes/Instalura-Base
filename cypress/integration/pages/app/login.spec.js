/// <reference types="cypress" />

describe('/pages/app/login', () => {
  // it === um teste
  it('Preencha os campos e vá para a página /app/profile', () => {
    // Acessar /app/login
    cy.visit('/app/login')
    // Preencher o input de usuário
    cy.get('#formCadastro input[name="usuario"]').type('eueueu')
    // Preencher o input de senha
    cy.get('#formCadastro input[name="senha"]').type('senhasegura')
    // Clicar no submit
    cy.get('#formCadastro button[type="submit"').click()
    // Resultado esperado: ir para /app/profile
    cy.url().should('include', '/app/profile')
  })
})
