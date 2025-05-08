describe('Test Cases del 011 al 020', () => {
    it('Acceder a Somos la salle bajio', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'la salle bajío').click();
        cy.contains('span', 'somos').should('exist');
      });

      it('Acceder a Servicios a la comunidad', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'a la comunidad').click();
        cy.contains('span', 'servicios').should('exist');
      });

      it('Acceder a Visita nuestros campus', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'nuestros campus').click();
        cy.contains('span', 'visita').should('exist');
      });

      it('Acceder a Apoyos estudiantiles', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'estudiantiles').click();
        cy.contains('span', 'apoyos').should('exist');
      });       

      it('Mostrar informacion de Beca por promedio', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'estudiantiles').click();
        cy.get('a[href="#panel-2"]').click();
        cy.contains('span.panel_title', 'beca por promedio').should('exist');
      });

      it('Mostrar informacion de Beca institucional prepago', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'estudiantiles').click();
        cy.get('a[href="#panel-2"]').click();
        cy.contains('span.panel_title', 'beca institucional pregrado').should('exist');
      });

      it('Mostrar informacion de Beca institucional posgrado', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'estudiantiles').click();
        cy.get('a[href="#panel-2"]').click();
        cy.contains('span.panel_title', 'beca institucional posgrado').should('exist');
      });

      it('Mostrar informacion de Beca familiar', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'estudiantiles').click();
        cy.get('a[href="#panel-2"]').click();
        cy.contains('span.panel_title', 'beca familiar').should('exist');
      });

      it('Mostrar informacion de Beca por mérito deportivo', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'estudiantiles').click();
        cy.get('a[href="#panel-2"]').click();
        cy.contains('span.panel_title', 'beca por mérito deportivo').should('exist');
      });

      it('Mostrar informacion de Beca por defunción', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'estudiantiles').click();
        cy.get('a[href="#panel-2"]').click();
        cy.contains('span.panel_title', 'beca por defunción').should('exist');
      });

      
})