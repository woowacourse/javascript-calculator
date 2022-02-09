const calculate = (num1, num2, operator, expectedResult) => {
  for (let i = 0; i < num1.length; i++) {
    cy.get('.digit').contains(parseInt(num1[i])).click();
  }

  cy.get('.operation').contains(operator).click();

  for (let i = 0; i < num2.length; i++) {
    cy.get('.digit').contains(parseInt(num2[i])).click();
  }

  cy.get('.operation').contains('=').click();

  cy.get('#total').should('have.text', expectedResult);

  // 다음 계산을 위해 total 초기화
  cy.get('.modifier').click();
};

describe('정상 시나리오에 대해 만족해야 한다.', () => {
  beforeEach(() => {
    cy.visit('../../index.html');
  });

  it('2개의 숫자에 대해 덧셈이 가능하다.', () => {
    calculate('1', '2', '+', '3');
    calculate('25', '22', '+', '47');
    calculate('257', '1', '+', '258');
  });

  it('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
    calculate('1', '2', '-', '-1');
    calculate('25', '22', '-', '3');
    calculate('257', '1', '-', '256');
  });

  it('2개의 숫자에 대해 곱셈이 가능하다.', () => {
    calculate('1', '2', 'X', '2');
    calculate('25', '22', 'X', '550');
    calculate('257', '1', 'X', '257');
  });

  it('2개의 숫자에 대해 나눗셈이 가능하다.', () => {
    calculate('1', '2', '/', '0');
    calculate('25', '22', '/', '1');
    calculate('257', '1', '/', '257');
  });

  it('AC(All Clear)버튼을 누르면 0으로 초기화 한다.', () => {
    cy.get('.modifier').click();
    cy.get('#total').should('have.text', 0);
  });
});
