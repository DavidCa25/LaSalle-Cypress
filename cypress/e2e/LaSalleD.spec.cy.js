describe('Comunidad', () => {
  beforeEach(() => {
    cy.login('00076350', 'Casillas00')
  })

  it('debería poder visualizar su sección de comunidad', () => {
    cy.get('div[id="container"]').should('exist')
  })

  it('debería poder visualizar su sección de configuración de cuenta y contraseña', () => {
    cy.get('div[id="user_link"]').click({ multiple: true })
    cy.get('a[href="../account.php"]').should('be.visible').then(($link) => {
    $link[0].click(); 
    });
    cy.get('li[aria-controls="panel-2"]').click({ multiple: true })
    cy.get('div[id="panel-2"]').should('exist')

    cy.get('li[aria-controls="panel-1"]').click({ multiple: true })
    cy.get('div[id="panel-1"]').should('exist')
  })

  it('debería poder visualizar su menú de comunidad', () => {
    cy.get('div[id="user_link"]').click({ multiple: true })
    cy.get('a[href="../logout.php"]').should('exist')
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
  it('debería mostrar la sección de mesa de ayuda', () =>{
    cy.get('a[href="../dtia/mesadeayuda.php"]').click({multiple:true})
    cy.get('a[href="https://mesadeayuda.lasallebajio.edu.mx/"]').should('exist')
  })
  it('debería mostrar el panel de universidad', () => {
    cy.get('a[href="../vida/udiversidad.php"]').click({ multiple: true })
    cy.get('div[id="interior_wrapper"]').should('exist')
  })
  it('debería mostrar el panel de imagen institucional', () => {
    cy.get('a[href="imagotipo.php"]').click({ multiple: true })
    cy.get('section[class="wrapper"]').should('exist')
  })
  it('debería poder cerrar sesión', () => {
    cy.get('div[id="user_link"]').click({ multiple: true })
    cy.get('a[href="../logout.php"]').should('be.visible').then(($link) => {
    $link[0].click(); 
  });
    cy.get('div[id="banner"]').should('exist')
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
      cy.get('label[id="btnMenu"]').click({ force: true });
    
      cy.get('a[href="beneficios.php"]').should('be.visible').then(($link) => {
        $link[0].click();
      });
    
      cy.url().should('include', 'beneficios.php');
      cy.get('div[id="ben_text"]').should('exist');
    });
    
})


  