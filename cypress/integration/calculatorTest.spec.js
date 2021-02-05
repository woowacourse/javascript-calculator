describe('calculator-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('숫자를 눌렀을 때 화면에 표시되고, 입력된 수는 누적된다.', () => {
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '1');
    cy.get('.digit').contains('2').click();
    cy.get('#total').should('have.text', '12');
    cy.get('.digit').contains('3').click();
    cy.get('#total').should('have.text', '123');
  });
});
