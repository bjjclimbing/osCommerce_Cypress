import ShoppingActions from './ShoppingActions.js';

describe('oscommerce', () => {
  it('testCase 1', () => {
    cy.fixture('items').then((items) => {
      cy.fixture('shippingInfo').then((shippingInfo) => {
        const carrito = {
          item: items.tc1Item,
          qty: items.tc1Qty
        };
        const shoppingActions = new ShoppingActions(carrito, shippingInfo);
        cy.visit('https://sqademosatp.net/watch');
        shoppingActions.buyItem();
        cy.get('div.text-2').should('contain', items.tc1_2AssertionString);
      });
    });
  });
  it('testCase 2', () => {
    cy.fixture('items').then((items) => {
      cy.fixture('shippingInfo').then((shippingInfo) => {
        const carrito = {
          item: items.tc2Item,
          qty: items.tc2Qty
        };
        const shoppingActions = new ShoppingActions(carrito, shippingInfo);
        cy.visit('https://sqademosatp.net/watch');
        shoppingActions.buyItem();
        cy.get('div.text-2').should('contain', items.tc1_2AssertionString);
      });
    });
  });
  it('testCase 3', () => {
    cy.fixture('items').then((items) => {
      cy.fixture('shippingInfo').then((shippingInfo) => {
        const carrito = {
          item: items.tc1Item,
          qty: items.tc1Qty
        };
        const shoppingActions = new ShoppingActions(carrito, shippingInfo);
        cy.visit('https://sqademosatp.net/watch');
        shoppingActions.buyItem();
        cy.get('div.text-2').should('not.contain', items.tc3AssertionString);
      });
    });
  });
});
