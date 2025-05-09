describe('Test Cases del 011 al 020', () => {
    it('TC_SOMOS_lasallebajio_011 - Acceder a Somos la salle bajio', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'la salle bajío').click();
        cy.contains('span', 'somos').should('exist');
      });

      it('TC_ SERVICIOSa la comunidad _012 - Acceder a Servicios a la comunidad', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'a la comunidad').click();
        cy.contains('span', 'servicios').should('exist');
      });

      it('TC_ VISITA nuestros campus_013 - Acceder a Visita nuestros campus', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'nuestros campus').click();
        cy.contains('span', 'visita').should('exist');
      });

      it('TC_APOYOS_estudiantiles_014 - Acceder a Apoyos estudiantiles', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'estudiantiles').click();
        cy.contains('span', 'apoyos').should('exist');
      });       

      it('TC_APOYOS_estudiantiles_BecaPromedio_015 - Mostrar informacion de Beca por promedio', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'estudiantiles').click();
        cy.get('a[href="#panel-2"]').click();
        cy.contains('span.panel_title', 'beca por promedio').should('exist');
      });

      it('TC_APOYOS_estudiantiles_BecaPregrado_016 - Mostrar informacion de Beca institucional prepago', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'estudiantiles').click();
        cy.get('a[href="#panel-2"]').click();
        cy.contains('span.panel_title', 'beca institucional pregrado').should('exist');
      });

      it('TC_APOYOS_estudiantiles_BecaPosgrado_017 - Mostrar informacion de Beca institucional posgrado', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'estudiantiles').click();
        cy.get('a[href="#panel-2"]').click();
        cy.contains('span.panel_title', 'beca institucional posgrado').should('exist');
      });

      it('TC_APOYOS_estudiantiles_BecaFamiliar_018 - Mostrar informacion de Beca familiar', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'estudiantiles').click();
        cy.get('a[href="#panel-2"]').click();
        cy.contains('span.panel_title', 'beca familiar').should('exist');
      });

      it('TC_APOYOS_estudiantiles_BecaDeportiva_019 - Mostrar informacion de Beca por mérito deportivo', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'estudiantiles').click();
        cy.get('a[href="#panel-2"]').click();
        cy.contains('span.panel_title', 'beca por mérito deportivo').should('exist');
      });

      it('TC_APOYOS_estudiantiles_BecaDefuncion_020 - Mostrar informacion de Beca por defunción', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'estudiantiles').click();
        cy.get('a[href="#panel-2"]').click();
        cy.contains('span.panel_title', 'beca por defunción').should('exist');
      });

      
})