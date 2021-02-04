describe('calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5501/');
  });

  it('print digits & operators on display', () => {
    cy.get('.digit').then(digits => {
      const digit1 = digits[Math.floor(Math.random() * 10)];
      const digit2 = digits[Math.floor(Math.random() * 10)];
      const digit3 = digits[Math.floor(Math.random() * 10)];

      digit1.click();
      digit2.click();
      digit3.click();

      const result = digit1.innerText + digit2.innerText + digit3.innerText;
      cy.get('#total').should('have.text', result);
    });

    cy.get('.operator').then(operators => {
      for (let operator of operators) {
        operator.click();
        cy.get('#total').contains(operator.innerText);
      }
    });
  });
});
