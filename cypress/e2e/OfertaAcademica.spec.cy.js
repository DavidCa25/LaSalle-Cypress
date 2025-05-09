describe('Pruebas de enlaces en la sección Servicios de oferta académica', () => {

    beforeEach(() => {
      cy.visit('https://www.lasallebajio.edu.mx/');

      cy.get('a[href="oferta/"]').click()
cy.url().should('include', '/oferta/')


    });
  
    it('TC_Oferta_Academica41', () => {
        
      
        cy.get('a[href="doctorados.php"]').click()
      
        cy.url().should('include', 'doctorados.php')

        cy.contains('a', 'Derecho').click()

        cy.get('#program_title').should('have.text', 'Derecho')



      }) 


      it('C_Oferta_Académica42 ', () => {
        cy.contains('a', 'maestrÍas').click()

        cy.url().should('include', 'maestrias.php')

        cy.contains('a', 'Administración de Instituciones de Salud').click()


        cy.get('#program_title').should('have.text', 'Administración de Instituciones de Salud')

      } )


      it('TC_Oferta_Académica43 ', () => {
        cy.contains('a', 'especialidades').click()

        cy.url().should('include', 'especialidades.php')

        cy.contains('a', 'Especialidades').click()


        cy.get('span.section_title').should('have.text', 'ESPECIALIDADES')

      } )

      it('TC_Oferta_Academica44 ', ()=> {
        cy.contains('a', 'licenciaturas').click()
        cy.url().should('include', 'licenciaturas.php')




          cy.get('a[href*="oferta1.php?n=1"]').contains('Ingeniería de Software').click()
          cy.get('#program_title').should('have.text', 'Ingeniería de Software y Sistemas Computacionales')






      } )









      
  });
  