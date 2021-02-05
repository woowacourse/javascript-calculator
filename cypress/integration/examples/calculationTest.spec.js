const numberClick = (num) => {
  Array.from(num).forEach(chr => {
    if ('0' <= chr && chr <= '9') {
      cy.get('.digit').contains(chr).click();
    } else {
      cy.get('.operation').contains(chr).click();
    }
  })
}

const calculationTest = (num1, operator, num2, expectedResult) => {
  // digit 클래스에 접근해서 7 텍스트 포함하는 것 클릭

  numberClick(num1);
  cy.get('.operation').contains(`${operator}`).click();
  numberClick(num2);
  cy.get('.operation').contains('=').click();

  // index.html의 total 접근해서 total의 기댓값이 텍스트 56
  cy.get('#total').should('have.text', `${expectedResult}`);

  cy.get('.modifier').click();
}

describe('사칙연산 테스트', () => {
  it('2개의 숫자에 대해 덧셈이 가능하다.', () => {
    cy.visit('http://localhost:5500/index.html');
    calculationTest('0', '+', '0', '0');
    calculationTest('1', '+', '0', '1');
    calculationTest('999', '+', '999', '1998');
    calculationTest('055', '+', '45', '100');
    calculationTest('5000', '+', '87', '587');
    calculationTest('-11', '+', '10', '-1');
    calculationTest('X8', '+', '12', '20');
  });

  it('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
    cy.visit('http://localhost:5500/index.html');
    calculationTest('001345', '-', '1', '133');
    calculationTest('0', '-', '100', '-100');
    calculationTest('998', '-', '999', '-1');
    calculationTest('01', '-', '01', '0');
    calculationTest('9999', '-', '+1', '1000');
    calculationTest('-0', '-', '1', '-1');
    calculationTest('-15', '-', '85', '-100');
    calculationTest('----2', '-', '2', '-4');
    calculationTest('2', '+', '2-', '4');
    calculationTest('2', '-', '2-2-2-2-2', '-8');
  });

  it('2개의 숫자에 대해 곱셈이 가능하다.', () => {
    cy.visit('http://localhost:5500/index.html');
    calculationTest('7', 'X', '8', '56');
    calculationTest('00', 'X', '0', '0');
    calculationTest('999', 'X', '999', '998001');
    calculationTest('-9999', 'X', '999', '-998001');
    calculationTest('-1', 'X', '09', '-9');
    calculationTest('-0-0-0-0-0--1', 'X', '09', '-9');
    calculationTest('00009', 'X', '-09', '0');

  });

  it('2개의 숫자에 대해 나눗셈이 가능하다.', () => {
    cy.visit('http://localhost:5500/index.html');
    calculationTest('7', '/', '7', '1');
    calculationTest('00', '/', '1000', '0');
    calculationTest('999', '/', '1', '999');
    calculationTest('-0-0-0-0-0--8', '/', '08', '-1');
    calculationTest('-8', '/', '2', '-4');
    calculationTest('------4', '/', '2', '-2');
    calculationTest('5', '/', '2', '2');
    calculationTest('-1', '/', '10', '0');
  });
})