describe('Menú Usuario', () => {

    beforeEach(() => {
      cy.login('00076350', 'Casillas00')
      cy.get('label[id="btnMenu"]').click({ multiple: true })
    })
  
    it('debería acceder a Calendario', () => {
      cy.get('a[href="calendario.php"]').click({ multiple: true })
      cy.url().should('include', 'calendario.php') // Validación opcional
    })
  
    it('debería acceder a Créditos', () => {
      cy.get('a[href="creditos.php"]').click({ multiple: true })
      cy.url().should('include', 'creditos.php')
    })
  
    it('debería acceder a Agenda', () => {
      cy.get('a[href="agenda.php"]').click({ multiple: true })
      cy.url().should('include', 'agenda.php')
    })
  
    it('debería acceder a Reglamentos', () => {
      cy.get('a[href="reglamentos.php"]').click({ multiple: true })
      cy.url().should('include', 'reglamentos.php')
    })
  
    it('debería acceder a Directorio', () => {
      cy.get('a[href="directorio.php"]').click({ multiple: true })
      cy.url().should('include', 'directorio.php')
    })
  
    it('debería acceder a Beneficios', () => {
      cy.get('a[href="beneficios.php"]').click({ multiple: true })
      cy.url().should('include', 'beneficios.php')
    })
  
  })
  