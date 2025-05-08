describe('Test Cases del 021 al 030', () => {
    it('Acceder a Agenda universitaria', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('span', 'universitaria').click();
        cy.contains('strong', 'AGENDA').should('exist');
      });

    it('Acceder a Adminsiones', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('strong', 'ADMISIONES').click();
        cy.contains('h1', 'ADMISIONES').should('exist');
      });

    it('Acceder a Noticias', () => {    
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('strong', 'NOTICIAS').click();
        cy.contains('span', 'buscar noticias').should('exist');
      });

    it('Acceder a International dental program', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('strong', 'INTERNATIONAL').click();
        cy.contains('div', 'INTERNATIONAL DENTAL PROGRAM').should('exist');
      });

    it('Acceder a MIM', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('strong', 'MIM').click();
        cy.contains('span', 'El presente de la tradición. Arte popular guanajuatense').should('exist');
      });

    it('Acceder a Investigación', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('strong', 'INVESTIGACIÓN').click();
        cy.contains('span', 'vida en').should('exist');
      });

    it('Acceder a Directorio', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('a', 'DIRECTORIO').click();
        cy.contains('span', 'directorio').should('exist');
      });

    it('Acceder a Mapas', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('a', 'MAPAS').click();
        cy.contains('a', 'mapas').should('exist');
      });

      it('Acceder a Calendario', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.get('#cal_link').click();  // Usa el nuevo id "cal_link" para hacer clic
        cy.contains('strong', 'CALENDARIO').should('exist');  // Verifica que el calendario se cargue
      });

      it('Acceder a Información campus campestre', () => {
        cy.visit('https://www.lasallebajio.edu.mx/');
        cy.contains('a', 'Campestre - León, Gto.').click();
        cy.contains('div', 'CAMPESTRE').should('exist');  // Verifica que la información del campus se cargue
      });
});

