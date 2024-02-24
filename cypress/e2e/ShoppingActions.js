export default class ShoppingActions {
  constructor(carrito,shippingInfo) {
    this.item = carrito.item;
    this.qty = carrito.qty;
    this.shippingInfo = shippingInfo;
  }

  buscarElemento() {
    cy.get(`a:contains("${this.item}")`).then(($elemento) => {
      if ($elemento.length > 0) {
        $elemento.click();
      } else {
        cy.get('button.slick-next.slick-arrow').click().then(() => {
          this.buscarElemento(); // Llamada recursiva
        });
      }
    });
  }

  buyItem() {
    this.buscarElemento();
    cy.get(`a:contains("${this.item}")`).invoke('attr', 'href').then((href) => {
      cy.visit(href);
    });
    this.fillForm();
    this.processPayment();
  }

  fillForm() {
    const shippingInfo = this.shippingInfo;
    cy.get('input#qty').clear().type(this.qty);
    cy.get('button.btn-2.add-to-cart').click();
    cy.get('.right-buttons > .btn-2').click();
    cy.get('a.btn-2.btn-to-checkout').click();
    cy.get('#shipping_address-firstname').clear().type(shippingInfo.firstName);
    cy.get('#shipping_address-lastname').clear().type(shippingInfo.lastName);
    cy.get('#shipping_address-street_address').clear().type(shippingInfo.streetAddress);
    cy.get('#shipping_address-postcode').clear().type(shippingInfo.postcode);
    cy.get('#shipping_address-city').clear().type(shippingInfo.city);
    cy.get('#checkout-email_address').clear().type(shippingInfo.emailAddress);cy.get('#checkout-terms').check();
    cy.get('input[type="radio"][value="cod"]').check();
  }

  processPayment() {
    cy.contains('Confirm and pay').click();
  }
}
