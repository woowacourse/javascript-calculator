const numberClick = (num) => {
  Array.from(num).forEach(chr => {
    if ('0' <= chr && chr <= '9') {
      cy.get('.digit').contains(chr).click();
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
  cy.get('#total').should(($total) => {
    expect($total).to.contain(`${expectedResult}`);
    // expect($total).to.contain('59'); // wrong
  });

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
  })
})