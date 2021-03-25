/// <reference types="cypress" />

// eslint-disable-next-line max-len
import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject'

describe('/pages/app/login', () => {
  describe('when fill and submit a form login request', () => {
    it('go to the profile page', () => {
      // Pré teste
      cy.intercept('https://instalura-api.omariosouto.vercel.app/api/login')
        .as('userLogin')

      // Cenário
      const loginScreen = new LoginScreenPageObject(cy)
      loginScreen
        .fillLoginForm({ user: 'omariosouto', password: 'senhasegura' })
        .submitLoginForm()

      // Resultado esperado: ir para /app/profile
      cy.url().should('include', '/app/profile')
      // Temos o token?
      cy.wait('@userlogin')
        .then(intercept => {
          // Token do servidor
          const { token } = intercept.response.body.data

          cy.getCookie('APP_TOKEN')
            .should('exist')
            // Token do cookie é igual ao token do server? Sim
            .should('have.property', 'value', token)
        })
    })
  })
})
