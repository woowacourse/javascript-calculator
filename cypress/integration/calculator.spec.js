context('calculator', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/javascript-calculator');
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

  it('2개의 임의의 3자리 숫자를 입력받고 곱한다', () => {
    const digits = [];

    for (let i = 0; i < 2; i++) {
      const randomDigit = `${Math.floor(Math.random() * 1000)}`;
      digits.push(randomDigit);
    }

    const result = Number(digits[0]) * Number(digits[1]);

    for (let i = 0; i < digits[0].length; i++) {
      cy.get('.digit').contains(digits[0][i]).click();
    }

    cy.get('.operation').contains('X').click();

    for (let i = 0; i < digits[1].length; i++) {
      cy.get('.digit').contains(digits[1][i]).click();
    }

    cy.get('.operation').contains('=').click();

    cy.get('#total').should('have.text', `${result}`);
  });

  it('2개의 임의의 3자리 숫자를 입력받고 나눈다', () => {
    const digits = [];

    for (let i = 0; i < 2; i++) {
      const randomDigit = `${Math.floor(Math.random() * 1000)}`;
      digits.push(randomDigit);
    }

    const result = Math.floor(Number(digits[0]) / Number(digits[1]));

    for (let i = 0; i < digits[0].length; i++) {
      cy.get('.digit').contains(digits[0][i]).click();
    }

    cy.get('.operation').contains('/').click();

    for (let i = 0; i < digits[1].length; i++) {
      cy.get('.digit').contains(digits[1][i]).click();
    }

    cy.get('.operation').contains('=').click();

    cy.get('#total').should('have.text', `${result}`);
  });

  it('숫자가 있는 상태에서 AC버튼을 누르면 0으로 초기화 한다.', () => {
    const randomDigit = `${Math.floor(Math.random() * 1000)}`;

    for (let i = 0; i < randomDigit.length; i++) {
      cy.get('.digit').contains(randomDigit[i]).click();
    }

    cy.get('.modifier').contains('AC').click();
    cy.get('#total').should('have.text', `0`);
  });

  it('숫자를 최대 3자리 수까지만 입력받는다.', () => {
    const randomDigit = `${Math.floor(Math.random() * 100000 + 1000)}`;
    for (let i = 0; i < randomDigit.length; i++) {
      cy.get('.digit').contains(randomDigit[i]).click();
    }
    cy.get('#total').should('have.text', `${randomDigit.slice(0, 3)}`);
  });

  it('나누기 결과에서 소수점 이하는 버림한다.', () => {
    const digit1 = '777';
    const digit2 = '3';
    const result = Math.floor(digit1 / digit2);
    for (let i = 0; i < digit1.length; i++) {
      cy.get('.digit').contains(digit1[i]).click();
    }
    cy.get('.operation').contains('/').click();
    for (let i = 0; i < digit2.length; i++) {
      cy.get('.digit').contains(digit2[i]).click();
    }
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', `${result}`);
  });
});
