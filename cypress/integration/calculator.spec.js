function testCalculation(operand1, operator, operand2, expectedResult) {
  cy.get('.digit').contains(operand1).click();
  cy.get('.operations').contains(operator).click();
  cy.get('.digit').contains(operand2).click();
  cy.get('.operations').contains('=').click();
  cy.get('#total').should('have.text', expectedResult);
}

describe('계산 기능', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/#');
  });

  it('초기화면이 렌더링 되면 결과화면에 0이 표시된다.', () => {
    cy.get(`#total`).should('have.text', '0');
  });

  it('계산기 숫자나 연산자 버튼을 누르면 결과화면에 표시된다.', () => {
    cy.get('.digit').contains('1').click();
    cy.get(`#total`).should('have.text', '01');
  });

  it('2개의 숫자에 대해 사칙연산이 가능하다.', () => {
    testCalculation('2', '+', '3', '5');
    testCalculation('5', '-', '2', '3');
    testCalculation('2', 'X', '5', '10');
    testCalculation('6', '/', '2', '3');
  });

  it('식에 연산자가 한 개만 존재한다.', () => {
    cy.get('.digit').contains('2').click();
    cy.get('.operations').contains('+').click();
    cy.get('.digit').contains('3').click();
    cy.get('.operations').contains('X').click();
    cy.get('.digit').contains('5').click();
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', 'SYNTAX ERROR');
  });

  it('AC(All Clear)버튼을 누르면 0으로 초기화 한다.', () => {
    cy.get('.digit').contains('2').click();
    cy.get('.modifier').click();
    cy.get('#total').should('have.text', '0');
  });

  it('연산자가 없으면 equal(=)이 불가능하다', () => {
    cy.get('.digit').contains('2').click();
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', 'SYNTAX ERROR');
  });

  it('숫자는 한번에 최대 3자리 수까지 입력 가능하다.', () => {
    cy.get('.digit').contains('2').click();
    cy.get('.digit').contains('2').click();
    cy.get('.digit').contains('2').click();
    cy.get('.digit').contains('2').click();
    cy.get('.operations').contains('+').click();
    cy.get('.digit').contains('3').click();
    cy.get('.digit').contains('3').click();
    cy.get('.digit').contains('3').click();
    cy.get('.digit').contains('3').click();
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', 'SYNTAX ERROR');
  });

  it('계산 결과를 표현할 때 소수점 이하는 버림한다.', () => {
    cy.get('.digit').contains('2').click();
    cy.get('.operations').contains('+').click();
    cy.get('.digit').contains('3').click();
  });

  it('계산 결과를 표현할 때 소수점 이하는 버림한다.', () => {
    cy.get('.digit').contains('7').click();
    cy.get('.operations').contains('/').click();
    cy.get('.digit').contains('3').click();
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', '2');
  });

  it('equal(=)을 연속으로 누를 수 없다.', () => {
    cy.get('.digit').contains('3').click();
    cy.get('.operations').contains('X').click();
    cy.get('.digit').contains('4').click();
    cy.get('.operations').contains('=').click();
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', 'SYNTAX ERROR');
  });

  it('피연산자가 식에 2개 존재해야한다.', () => {
    cy.get('.digit').contains('5').click();
    cy.get('.operations').contains('X').click();
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', 'SYNTAX ERROR');
  });

  it('0으로 나누면 Infinity를 출력한다.', () => {
    cy.get('.digit').contains('4').click();
    cy.get('.operations').contains('/').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operations').contains('=').click();
    cy.get('#total').should('have.text', 'Infinity');
  });
});
