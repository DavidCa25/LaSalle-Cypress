Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://www.lasallebajio.edu.mx/')
    cy.get('div[id="login_link"]').click({ multiple: true});
    cy.get('input[name="usuario"]').eq(0).type(email)
    cy.get('input[name="pass"]').eq(0).type(password)
    cy.get('button[name="Entrar"]').eq(0).click({ multiple: true, force: true })
  })
  
Cypress.Commands.add('irAMaestriaRedes', () => {
    cy.visit('https://www.lasallebajio.edu.mx/');
  
    cy.get('div[id="link3"]').click({ multiple: true });
  
    cy.get('a[href="maestrias.php"]').click({ multiple: true });
  
    cy.contains('a', 'Redes y Seguridad de la Información').click({ multiple: true });
});
