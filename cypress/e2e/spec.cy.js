describe('oscommerce', () => {
  function buscarElemento(item) {
    cy.get(`a:contains("${item}")`).then(($elemento) => {
      if ($elemento.length > 0) {
        $elemento.click();
      } else {
        cy.get('button.slick-next.slick-arrow').click().then(() => {
          buscarElemento(item); // Llamada recursiva
        });
      }
    });
  }
  
  it('passes', () => {
    const isFirefox =Cypress.browser.name === 'firefox';
    const item = isFirefox ? Cypress.env('firefoxItem') : Cypress.env('chromeItem');
    const qtyValue = isFirefox ? Cypress.env('firefoxQty') : Cypress.env('chromeQty');
    
    let encontrado = false;
    cy.visit('https://sqademosatp.net/watch');
    
    buscarElemento(item);
    cy.get(`a:contains("${item}")`).invoke('attr', 'href').then((href) => {
      // Verifica que el href no sea nulo
      // Visita la URL obtenida del enlace
      cy.visit(href);
    });
    
    cy.get('input#qty').clear().type(qtyValue);
    cy.get('button.btn-2.add-to-cart').click();
    cy.get('.right-buttons > .btn-2').click();
    cy.get('a.btn-2.btn-to-checkout').click();
    cy.get('#shipping_address-firstname').clear();

    // Escribir "luis" en el campo
    cy.get('#shipping_address-firstname').type('luis');
    cy.get('#shipping_address-lastname').clear();

    // Escribir "Canelón" en el campo
    cy.get('#shipping_address-lastname').type('Canelón');
    cy.get('#shipping_address-street_address').clear();

    // Escribir la dirección deseada en el campo
    cy.get('#shipping_address-street_address').type('Calle Rocafort');
    cy.get('#shipping_address-postcode').clear();

    // Escribir el código postal deseada en el campo
    cy.get('#shipping_address-postcode').type('08029');
    cy.get('#shipping_address-city').clear();

    // Escribir la Ciudad deseada en el campo
    cy.get('#shipping_address-city').type('Barcelona');
    cy.get('#checkout-email_address').clear();

    // Escribir el mail deseada en el campo
    cy.get('#checkout-email_address').type('luis.canelon.a@gmail.com');
    cy.get('#checkout-terms').check();
    cy.get('input[type="radio"][value="cod"]').check();
    cy.contains('Confirm and pay').click();
    cy.get('div.text-2').should('contain', "We've received your order");
  });
});

