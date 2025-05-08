describe('Pruebas de enlaces en la sección Servicios a la Comunidad', () => {

    beforeEach(() => {
      cy.visit('https://www.lasallebajio.edu.mx/');
      cy.contains('a', 'SERVICIOS').click();
    });
  
    it('Visita Centros Comunitarios De La Salle', () => {
      cy.contains('#int_section_links a', 'Centros Comunitarios De La Salle').click();
    });
  
    it('Visita Centro de Desarrollo Humano', () => {
      cy.contains('#int_section_links a', 'Centro de Desarrollo Humano').click();
    });
  
    it('Visita Clínicas Odontológicas', () => {
      cy.contains('#int_section_links a', 'Clínicas Odontológicas').click();
    });
  
    it('Visita Hospital Veterinario para Pequeñas Especies', () => {
      cy.contains('#int_section_links a', 'Hospital Veterinario para Pequeñas Especies').click();
    });
  
    it('Visita MiM, Mi Museo Universitario De La Salle', () => {
      cy.contains('#int_section_links a', 'MiM, Mi Museo Universitario De La Salle').invoke('removeAttr', 'target').click();
    });
  
    it('Visita Vinculación Institucional', () => {
      cy.contains('#int_section_links a', 'Vinculación Institucional').click();
    });
  
    it('Visita Despachos de Asesoría Jurídica', () => {
      cy.contains('#int_section_links a', 'Despachos de Asesoría Jurídica').click();
    });
  
    it('Visita Espacios a tu servicio', () => {
      cy.contains('#int_section_links a', 'Espacios a tu servicio').click();
    });
  
    it('Visita Centro de Certificación Laboral y Educación Continua', () => {
      cy.contains('#int_section_links a', 'Centro de Certificación Laboral y Educación Continua').click();
    });
  
    it('Visita Parque de Innovación De La Salle', () => {
      cy.contains('#int_section_links a', 'Parque de Innovación De La Salle').invoke('removeAttr', 'target').click();
    });
  
  });
  