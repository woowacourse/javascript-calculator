describe('calculator-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('숫자를 눌렀을 때 화면에 표시되는지 확인한다.', () => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // 9 ~ 0
    numbers.forEach((number) => {
      cy.get('.digit').contains(number).click();
      cy.get('#total').should('have.text', number);
    });
  });

  it('숫자를 여러번 눌렀을 때, 수가 누적된다.', () => {
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '1');
    cy.get('.digit').contains('2').click();
    cy.get('#total').should('have.text', '12');
    cy.get('.digit').contains('3').click();
    cy.get('#total').should('have.text', '123');
  });
});
