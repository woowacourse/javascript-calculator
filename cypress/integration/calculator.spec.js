describe('click event', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('초기값이 0인지 확인', () => {
    cy.get('#total').should('have.text', '0');
  });

  it('한 자리 숫자 입력', () => {
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '1');
  });

  it('두 자리 숫자 입력', () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('2').click();
    cy.get('#total').should('have.text', '12');
  });

  it('세 자리 숫자 초과 입력', () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('2').click();
    cy.get('.digit').contains('3').click();
    cy.get('.digit').contains('4').click();
    cy.get('#total').should('have.text', '123');
  });
});
