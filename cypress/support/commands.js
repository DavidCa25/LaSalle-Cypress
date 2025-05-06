Cypress.Commands.add('irAMaestriaRedes', () => {
    cy.visit('https://www.lasallebajio.edu.mx/');
  
    cy.get('div[id="link3"]').click({ multiple: true });
  
    cy.get('a[href="maestrias.php"]').click({ multiple: true });
  
    cy.contains('a', 'Redes y Seguridad de la Información').click({ multiple: true });
});