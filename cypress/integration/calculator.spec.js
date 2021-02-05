import { OPERAND_LENGTH_EXCEEDED_LIMIT } from '../../src/contants.js';

function testCalculation(leftOperand, operator, rightOperand, expectedResult) {
  cy.get('.digits').contains(leftOperand).click();
  cy.get('#total').should('contain', leftOperand);
  cy.get('.operations').contains(operator).click();
  cy.get('#total').should('contain', operator);
  cy.get('.digits').contains(rightOperand).click();
  cy.get('#total').should('contain', rightOperand);
  cy.get('.operations').contains('=').click();
  cy.get('#total').should('contain', expectedResult);
}

describe('calculate', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/');
  });

  it('2개의 숫자에 대해 덧셈', () => {
    testCalculation('1', '+', '2', '3');
  });

  it('2개의 숫자에 대해 뺄셈', () => {
    testCalculation('3', '-', '2', '1');
  });

  it('2개의 숫자에 대해 곱셈', () => {
    testCalculation('3', 'X', '2', '6');
  });

  it('2개의 숫자에 대해 나눗셈', () => {
    testCalculation('4', '/', '2', '2');
  });

  it('AC(All Clear)버튼을 누르면 0으로 초기화', () => {
    cy.get('.digits').contains('2').click();
    cy.get('.digits').contains('2').click();
    cy.get('#total').should('have.text', '22');
    cy.get('.modifier').click();
    cy.get('#total').should('have.text', '0');
  });

  it('숫자 자리수 제한 테스트', () => {
    cy.get('.digits').contains('2').click();
    cy.get('.digits').contains('2').click();
    cy.get('.digits').contains('2').click();
    cy.get('.digits').contains('2').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(OPERAND_LENGTH_EXCEEDED_LIMIT);
    });
    cy.get('#total').should('have.text', '222');
  });

  it('계산 결과를 표현할 때 소수점 이하는 버림', () => {
    testCalculation('7', '/', '2', '3');
  });
});
