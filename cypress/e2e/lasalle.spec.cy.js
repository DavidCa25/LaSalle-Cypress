describe('Test Cases del 001 al 010', () => {
    it('Visitar pagina de la Salle Bajio', () => {

        //Visita la página de la Salle Bajío
        cy.visit('https://www.lasallebajio.edu.mx/')
        var ofertaAcademica = cy.get('div[id="link3"]')
        ofertaAcademica.click({ multiple: true })

    })
    it('Mostrar lista de maestrias', () => {

        //Visita la página de la Salle Bajío
        cy.visit('https://www.lasallebajio.edu.mx/')
        var ofertaAcademica = cy.get('div[id="link3"]')
        ofertaAcademica.click({ multiple: true })

        //Click en maestrías
        var div_maestrias = cy.get('a[href="maestrias.php"]')
        div_maestrias.click({ multiple: true })

    })
    it('Mostrar informacion de una maestria', () => {

        //Visita la página de la Salle Bajío
        cy.visit('https://www.lasallebajio.edu.mx/')
        var ofertaAcademica = cy.get('div[id="link3"]')
        ofertaAcademica.click({ multiple: true })

        //Click en maestrías
        var div_maestrias = cy.get('a[href="maestrias.php"]')
        div_maestrias.click({ multiple: true })

        //Click en carrera
        var li_carrera = cy.contains('a', 'Redes y Seguridad de la Información')
        li_carrera.click({multiple: true})

        cy.get('#program_rvoe').should('exist'); 
        cy.get('#program_rvoe').should('contain.text', 'RVOE No. 20110808');
        cy.get('#program_info').should('contain.text', 'Facultad de Ingenierías y Tecnologías');

    })
    it('Mostrar objetivo de la maestria', () => {

        //Comando para ir a la maestria Redes y Seguridad de la Información
        cy.irAMaestriaRedes();

        //Click en Objetivo
        var h_ref_objetivo = cy.get('a[href="#panel-1"]')
        h_ref_objetivo.click()

        cy.get('div[id="panel-1"]')
        .find('span.panel_title')
        .should('contain.text', 'objetivo');

    });
    it('Mostrar Plan de estudios de la maestria', () => {

        //Comando para ir a la maestria Redes y Seguridad de la Información
        cy.irAMaestriaRedes();

        //Click en Plan de estudios
        var h_ref_plan = cy.get('a[href="#panel-3"]')
        h_ref_plan.click()

        cy.get('div[id="panel-3"]')
        .find('span.panel_title')
        .should('contain.text', 'plan de estudios');
    })
    it('Mostrar Fortalezas institucionales de la maestria', () => {

        //Comando para ir a la maestria Redes y Seguridad de la Información
        cy.irAMaestriaRedes();

        //Click en Fortalezas Institucionales
        var h_ref_fortalezas = cy.get('a[href="#panel-5"]')
        h_ref_fortalezas.click()

        cy.get('div[id="panel-5"]')
        .find('span.panel_title')
        .should('contain.text', 'fortalezas institucionales');
    })
    it('Mostrar Costos de la maestria', () => {

        //Comando para ir a la maestria Redes y Seguridad de la Información
        cy.irAMaestriaRedes();

        //Click en costos
        var h_ref_costos = cy.get('a[href="#panel-7"]')
        h_ref_costos.click()     

        cy.get('div[id="panel-7"]')
        .find('span.panel_title')
        .should('contain.text', 'costos');
    })
    it('Mostrar Perfil de ingreso y egreso de la maestria', () => {

        //Comando para ir a la maestria Redes y Seguridad de la Información
        cy.irAMaestriaRedes();

        //Click en Perfil de ingreso y egreso
        var h_ref_perfil = cy.get('a[href="#panel-2"]')
        h_ref_perfil.click()

        cy.get('div[id="panel-2"]')
        .find('span.panel_title')
        .should('contain.text', 'perfil de ingreso');
    })
    it('Mostrar Fortalecimiento del aprendizaje de la maestria', () => {

        //Comando para ir a la maestria Redes y Seguridad de la Información
        cy.irAMaestriaRedes();

        //Click en Fortalecimiento del aprendizaje
        var h_ref_fortalecimiento = cy.get('a[href="#panel-4"]')
        h_ref_fortalecimiento.click()

        cy.get('div[id="panel-4"]')
        .find('span.panel_title')
        .should('contain.text', 'fortalecimiento del aprendizaje');
    })
    it('Mostrar Informes de la maestria', () => {

        //Comando para ir a la maestria Redes y Seguridad de la Información
        cy.irAMaestriaRedes();

        //Click en Informes
        var h_ref_informes = cy.get('a[href="#panel-6"]')
        h_ref_informes.click()

        cy.get('div[id="panel-6"]')
        .find('span.panel_title')
        .should('contain.text', 'informes');
    })
})