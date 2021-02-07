import { MAX_LENGTH_ALERT } from '../../src/js/constants/index.js';

function testCalculate(num1, op, num2, expectedResult) {
  cy.get('.digit').contains(num1).click();
  cy.get('.operation').contains(op).click();
  cy.get('.digit').contains(num2).click();
  cy.get('.operation').contains('=').click();
  cy.get('#total').should('have.text', expectedResult);
}

describe('Calculator test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/index.html');
  });

  it('Render initial value (0).', () => {
    cy.get('#total').should('have.text', '0');
  });

  it('Render digit when clicking digit button.', () => {
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '1');
  });

  it('Ignore only continuous input (0).', () => {
    for (let i = 0; i < 3; i++) {
      cy.get('.digit').contains('0').click();
    }
    cy.get('#total').should('have.text', '0');
  });

  it('Limit max digit length (3).', () => {
    for (let i = 1; i < 5; i++) {
      cy.get('.digit').contains(`${i}`).click();
    }
    cy.get('#total').should('have.text', '123');
    cy.on('window:alert', message => {
      expect(message).to.equal(MAX_LENGTH_ALERT);
    });
  });

  it('Can add number.', () => {
    testCalculate('1', '+', '1', '2');
  });

  it('Can subtract number.', () => {
    testCalculate('1', '-', '1', '0');
  });

  it('Can multiply number.', () => {
    testCalculate('2', 'X', '3', '6');
  });

  it('Can divide number.', () => {
    testCalculate('8', '/', '4', '2');
  });

  it('Can all clear when clicking AC button.', () => {
    cy.get('.digit').contains('3').click();
    cy.get('.modifier').click();
    cy.get('#total').should('have.text', '0');
  });

  it('Can format result (decimal => integer).', () => {
    testCalculate('3', '/', '2', '1');
  });

  it('Ignore first operator.', () => {
    cy.get('.operation').contains('/').click();
    testCalculate('3', '+', '2', '5');
  });
});
