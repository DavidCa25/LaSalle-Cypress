Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://www.lasallebajio.edu.mx/')
    cy.get('div[id="login_link"]').click({ multiple: true});
    cy.get('input[name="usuario"]').eq(0).type(email)
    cy.get('input[name="pass"]').eq(0).type(password)
    cy.get('button[name="Entrar"]').eq(0).click({ multiple: true })
  })
  