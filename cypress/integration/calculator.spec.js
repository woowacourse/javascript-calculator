it('2개의 숫자에 대해 덧셈이 가능하다.', () => {
  cy.visit('index.html');
  cy.get('.digit').contains(2).click();
  cy.get('.operation').contains('+').click();
  cy.get('.digit').contains(9).click();
  cy.get('.operation').contains('=').click();
  cy.get('#total').should('have.text', '11');
});

it('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
  cy.visit('index.html');
  cy.get('.digit').contains(9).click();
  cy.get('.operation').contains('-').click();
  cy.get('.digit').contains(2).click();
  cy.get('.operation').contains('=').click();
  cy.get('#total').should('have.text', '7');
});
