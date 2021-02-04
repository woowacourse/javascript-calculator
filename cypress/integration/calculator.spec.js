import { OPERAND_LENGTH_EXCEEDED_LIMIT } from '../../src/contants.js';

describe('calculate', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/');
  });

  it('2개의 숫자에 대해 덧셈', () => {
    cy.get('.digit:nth-child(9)').click();
    cy.get('.operation:nth-child(4)').click();
    cy.get('.digit:nth-child(8)').click();
    cy.get('.operation:nth-child(5)').click();
    cy.get('#total').should('have.text', '3');
  });

  it('2개의 숫자에 대해 뺄셈', () => {
    cy.get('.digit:nth-child(8)').click();
    cy.get('.operation:nth-child(3)').click();
    cy.get('.digit:nth-child(9)').click();
    cy.get('.operation:nth-child(5)').click();
    cy.get('#total').should('have.text', '1');
  });

  it('2개의 숫자에 대해 곱셈', () => {
    cy.get('.digit:nth-child(8)').click();
    cy.get('.operation:nth-child(2)').click();
    cy.get('.digit:nth-child(8)').click();
    cy.get('.operation:nth-child(5)').click();
    cy.get('#total').should('have.text', '4');
  });

  it('2개의 숫자에 대해 나눗셈', () => {
    cy.get('.digit:nth-child(8)').click();
    cy.get('.operation:nth-child(1)').click();
    cy.get('.digit:nth-child(8)').click();
    cy.get('.operation:nth-child(5)').click();
    cy.get('#total').should('have.text', '1');
  });

  it('AC(All Clear)버튼을 누르면 0으로 초기화', () => {
    cy.get('.digit:nth-child(8)').click();
    cy.get('.digit:nth-child(8)').click();
    cy.get('#total').should('have.text', '22');
    cy.get('.modifier').click();
    cy.get('#total').should('have.text', '0');
  });

  it('숫자 자리수 제한 테스트', () => {
    cy.get('.digit:nth-child(8)').click();
    cy.get('.digit:nth-child(8)').click();
    cy.get('.digit:nth-child(8)').click();
    cy.get('.digit:nth-child(8)').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(OPERAND_LENGTH_EXCEEDED_LIMIT);
    });
    cy.get('#total').should('have.text', '222');
  });

  it('계산 결과를 표현할 때 소수점 이하는 버림', () => {
    cy.get('.digit:nth-child(8)').click();
    cy.get('.digit:nth-child(8)').click();
    cy.get('.operation:nth-child(1)').click();
    cy.get('.digit:nth-child(7)').click();
    cy.get('.operation:nth-child(5)').click();
    cy.get('#total').should('have.text', '7');
  });
});
