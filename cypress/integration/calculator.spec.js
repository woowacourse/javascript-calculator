context('calculator', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('2개의 임의의 3자리 숫자를 입력받고 더한다', () => {
    const digits = [];

    for (let i = 0; i < 2; i++) {
      const randomDigit = `${Math.floor(Math.random() * 1000)}`;
      digits.push(randomDigit);
    }

    const result = Number(digits[0]) + Number(digits[1]);

    for (let i = 0; i < digits[0].length; i++) {
      cy.get('.digit').contains(digits[0][i]).click();
    }

    cy.get('.operation').contains('+').click();

    for (let i = 0; i < digits[1].length; i++) {
      cy.get('.digit').contains(digits[1][i]).click();
    }

    cy.get('.operation').contains('=').click();

    cy.get('#total').should('have.text', `${result}`);
  });

  it('2개의 임의의 3자리 숫자를 입력받고 뺀다', () => {
    const digits = [];

    for (let i = 0; i < 2; i++) {
      const randomDigit = `${Math.floor(Math.random() * 1000)}`;
      digits.push(randomDigit);
    }

    const result = Number(digits[0]) - Number(digits[1]);

    for (let i = 0; i < digits[0].length; i++) {
      cy.get('.digit').contains(digits[0][i]).click();
    }

    cy.get('.operation').contains('-').click();

    for (let i = 0; i < digits[1].length; i++) {
      cy.get('.digit').contains(digits[1][i]).click();
    }

    cy.get('.operation').contains('=').click();

    cy.get('#total').should('have.text', `${result}`);
  });
});
