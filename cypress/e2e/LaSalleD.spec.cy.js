describe('Comunidad', () => {
  beforeEach(() => {
    cy.login('00076350', 'Casillas00')
    cy.get('label[id="btnMenu"]').click({ multiple: true })
  })

  it('debería mostrar la sección de creditos culturales', () =>{
    cy.get('a[href="cultura.php"]').click({multiple:true})
    cy.get('div[id="com_container"]').should('exist')
  })

  it('debería mostrar la sección de creditos solidarios', () =>{
    cy.get('a[href="solidaridad.php"]').click({multiple:true})
    cy.get('div[id="com_container"]').should('exist')
  })

  it('debería mostrar la sección de creditos deportivos', () =>{
    cy.get('a[href="deportes.php"]').click({multiple:true})
    cy.get('div[id="com_container"]').should('exist')
  })

  it('debería mostrar la sección de circulares', () =>{
    cy.get('a[href="circulares.php"]').click({multiple:true})
    cy.get('div[id="com_container"]').should('exist')
  })

  it('debería mostrar la sección de comunidad segura', () =>{
    cy.get('a[href="comu_segura.php"]').click({multiple:true})
    cy.get('div[id="com_container"]').should('exist')
  })
  it('debería mostrar la sección de comunidad segura', () =>{
    cy.get('a[href="../dtia/mesadeayuda.php"]').click({multiple:true})
    cy.get('a[href="https://mesadeayuda.lasallebajio.edu.mx/"]').should('exist')
  })
})

describe('Menú Usuario', () => {

    beforeEach(() => {
      cy.login('00076350', 'Casillas00')
      cy.get('label[id="btnMenu"]').click({ multiple: true })
    })

    it('debería acceder a Calendario', () => {
      cy.get('a[href="calendario.php"]').click({ multiple: true })
      cy.url().should('include', 'calendario.php')
      cy.get('div[class="calendar"]').should('exist')
    })
  
    it('debería acceder a Créditos', () => {
      cy.get('a[href="creditos.php"]').click({ multiple: true })
      cy.url().should('include', 'creditos.php')
      cy.get('img[src="documents/creditos.JPG"]').should('exist')
    })
  
    it('debería mostrar los elementos de Agenda', () => {
      cy.get('a[href="agenda.php"]').click({ multiple: true })
      cy.url().should('include', 'agenda.php')
      cy.get('div[id="com_container"]').should('exist')
    })
  
    it('debería mostrar los elementos de Reglamentos', () => {
      cy.get('a[href="reglamentos.php"]').click({ multiple: true })
      cy.url().should('include', 'reglamentos.php')
      cy.get('div[id="inner_wrapper"]').should('exist')
    })
  
    it('debería mostrar el formulario de Directorio', () => {
      cy.get('a[href="directorio.php"]').click({ multiple: true })
      cy.url().should('include', 'directorio.php')
      cy.get('form[name="frmDirectorio"]').should('exist')
    })
  
    it('debería mostrar el texto de beneficios', () => {
      cy.get('a[href="beneficios.php"]').click({ multiple: true })
      cy.get('div[class="ben_text"]').should('exist')
    })
  })


  