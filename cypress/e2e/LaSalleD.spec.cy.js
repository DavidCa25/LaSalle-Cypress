describe('Comunidad', () => {
  beforeEach(() => {
    cy.login('00076350', 'Casillas00')
  })

  it('TC_COMUNIDAD_001 - debería poder visualizar su sección de comunidad', () => {
    cy.get('div[id="container"]').should('exist')
  })

  it('TC_COMUNIDAD_002 - debería mostrar la sección de creditos culturales', () =>{
    cy.get('a[href="cultura.php"]').click({multiple:true})
    cy.get('div[id="com_container"]').should('exist')
  })

  it('TC_COMUNIDAD_003 - debería mostrar la sección de creditos deportivos', () =>{
    cy.get('a[href="deportes.php"]').click({multiple:true})
    cy.get('div[id="com_container"]').should('exist')
  })

  it('TC_COMUNIDAD_004 - debería mostrar la sección de creditos solidarios', () =>{
    cy.get('a[href="solidaridad.php"]').click({multiple:true})
    cy.get('div[id="com_container"]').should('exist')
  })

  it('TC_COMUNIDAD_005 - debería poder visualizar su menú de comunidad', () => {
    cy.get('div[id="user_link"]').click({ multiple: true })
    cy.get('a[href="../logout.php"]').should('exist')
  })
  
  it('TC_COMUNIDAD_006 - debería mostrar el panel de imagen institucional', () => {
    cy.get('div[style="position: absolute; left: 0px; top: 0px; transform: translate3d(417px, 792px, 0px);"]').click({ multiple: true })
    cy.get('section[class="wrapper"]').should('exist')
  })

  it('TC_COMUNIDAD_007 - debería mostrar el panel de radio universidad', () => {
    cy.get('a[href="../vida/udiversidad.php"]').click({ multiple: true })
    cy.get('div[id="interior_wrapper"]').should('exist')
  })

  it('TC_COMUNIDAD_008 - debería mostrar la sección de mesa de ayuda', () =>{
    cy.get('a[href="../dtia/mesadeayuda.php"]').click({multiple:true})
    cy.get('a[href="https://mesadeayuda.lasallebajio.edu.mx/"]').should('exist')
  })

  it('TC_COMUNIDAD_009 - debería mostrar el panel de Internet Inalambrico', () => {
    cy.get('a[href="../dtia/wifi.php"]').click({ multiple: true })
    cy.get('section[class="wrapper"]').should('exist')
  })

  it('TC_COMUNIDAD_010 - debería mostrar el panel de Publicaciones y revistas electrónicas', () => {
    cy.get('a[href="../publicaciones.php"]').click({ multiple: true })
    cy.get('img[src="images/est_hist_cult_edu_des_hum_vol_1.JPG"]').should('exist')
  })

  it('TC_COMUNIDAD_011 - debería mostrar la sección de circulares', () =>{
    cy.get('a[href="circulares.php"]').click({multiple:true})
    cy.get('div[id="com_container"]').should('exist')
  })

  it('TC_COMUNIDAD_012 - debería mostrar la sección de comunidad segura', () =>{
    cy.get('a[href="comu_segura.php"]').click({multiple:true})
    cy.get('div[id="com_container"]').should('exist')
  })

  it('TC_Comunidad-Logout_001 - debería poder cerrar sesión', () => {
    cy.get('div[id="user_link"]').click({ multiple: true })
    cy.get('a[href="../logout.php"]').should('be.visible').then(($link) => {
    $link[0].click(); 
  });
    cy.get('div[id="banner"]').should('exist')
  })

  it('TC_Comunidad-Configuración_001 - debería poder visualizar su sección de configuración de cuenta y contraseña', () => {
    cy.get('div[id="user_link"]').click({ multiple: true })
    cy.get('a[href="../account.php"]').should('be.visible').then(($link) => {
    $link[0].click(); 
    });
    cy.get('li[aria-controls="panel-2"]').click({ multiple: true })
    cy.get('div[id="panel-2"]').should('exist')

    cy.get('li[aria-controls="panel-1"]').click({ multiple: true })
    cy.get('div[id="panel-1"]').should('exist')
  })
})

describe('Menú Usuario', () => {
    beforeEach(() => {
      cy.login('00076350', 'Casillas00')
      cy.get('label[id="btnMenu"]').click({ multiple: true })
    })

    it('TC_Menú_Comunidad_001 - debería acceder a Calendario', () => {
      cy.get('a[href="calendario.php"]').click({ multiple: true })
      cy.url().should('include', 'calendario.php')
      cy.get('div[class="calendar"]').should('exist')
    })
  
    it('TC_Menú_Comunidad_002 - debería acceder a Créditos', () => {
      cy.get('a[href="creditos.php"]').click({ multiple: true })
      cy.url().should('include', 'creditos.php')
      cy.get('img[src="documents/creditos.JPG"]').should('exist')
    })
  
    it('TC_Menú_Comunidad_003  - debería mostrar los elementos de Agenda', () => {
      cy.get('a[href="agenda.php"]').click({ multiple: true })
      cy.url().should('include', 'agenda.php')
      cy.get('div[id="com_container"]').should('exist')
    })
  
    it('TC_Menú_Comunidad_004 - debería mostrar los elementos de Reglamentos', () => {
      cy.get('a[href="reglamentos.php"]').click({ multiple: true })
      cy.url().should('include', 'reglamentos.php')
      cy.get('div[id="inner_wrapper"]').should('exist')
    })
  
    it('TC_Menú_Comunidad_005 - debería mostrar el formulario de Directorio', () => {
      cy.get('a[href="directorio.php"]').click({ multiple: true })
      cy.url().should('include', 'directorio.php')
      cy.get('form[name="frmDirectorio"]').should('exist')
    })
  
    it('TC_Menú_Comunidad_006 - debería mostrar el texto de beneficios', () => {
      cy.get('label[id="btnMenu"]').click({ force: true });
    
      cy.get('a[href="beneficios.php"]').should('be.visible').then(($link) => {
        $link[0].click();
      });
    
      cy.url().should('include', 'beneficios.php');
      cy.get('div[id="ben_text"]').should('exist');
    });
})


  