describe('Pruebas de enlaces en la sección Servicios a la Comunidad', () => {

    beforeEach(() => {
      cy.visit('https://www.lasallebajio.edu.mx/');
      cy.contains('a', 'SERVICIOS').click();
    });
  
    it('TC_SERVICIOS_COMINIDAD_CENTROS_COMU_31 ', () => {
      cy.contains('#int_section_links a', 'Centros Comunitarios De La Salle').click();
    });
  
    it('TC_SERVICIOS_COMINIDAD_CENTRO_DH_35', () => {
      cy.contains('#int_section_links a', 'Centro de Desarrollo Humano').click();
    });
  
    it('TC_SERVICIOS_COMINIDAD_CLINICAS_32', () => {
      cy.contains('#int_section_links a', 'Clínicas Odontológicas').click();
    });
  
    it('TC_SERVICIOS_COMINIDAD_HOSPITAL_VETERINARIO_36 ', () => {
      cy.contains('#int_section_links a', 'Hospital Veterinario para Pequeñas Especies').click();
    });
  
    it('TC_SERVICIOS_COMINIDAD_MIM_39 ', () => {
      cy.contains('#int_section_links a', 'MiM, Mi Museo Universitario De La Salle').invoke('removeAttr', 'target').click();
    });
  
    it('TC_SERVICIOS_COMINIDAD_VINCULACION_INSTITUCIONAL_37 ', () => {
      cy.contains('#int_section_links a', 'Vinculación Institucional').click();
    });
  
    it('TC_SERVICIOS_COMINIDAD_ASESORIA_JURIDICA_33', () => {
      cy.contains('#int_section_links a', 'Despachos de Asesoría Jurídica').click();
    });
  
    it('TC_SERVICIOS_COMINIDAD_ESPACIOS_SERVICIO_38', () => {
      cy.contains('#int_section_links a', 'Espacios a tu servicio').click();
    });
  
    it('TC_SERVICIOS_COMINIDAD_CENTRO_CERTIFICACION_LABORAL_34 ', () => {
      cy.contains('#int_section_links a', 'Centro de Certificación Laboral y Educación Continua').click();
    });
  
    it('TC_SERVICIOS_COMINIDAD_PARQUE_INOVACION_40', () => {
      cy.contains('#int_section_links a', 'Parque de Innovación De La Salle').invoke('removeAttr', 'target').click();
    });
  
  });
  