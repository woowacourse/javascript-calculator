import { ERROR_MESSAGE } from '../../src/js/errorMessage.js';

describe('계산기 테스트', () => {
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
    cy.get('#total').should('have.text', '1');
    cy.get('.digit').contains('2').click();
    cy.get('#total').should('have.text', '12');
  });

  it('세 자리 숫자 초과 입력', () => {
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '1');
    cy.get('.digit').contains('2').click();
    cy.get('#total').should('have.text', '12');
    cy.get('.digit').contains('3').click();
    cy.get('#total').should('have.text', '123');
    cy.get('.digit').contains('4').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(ERROR_MESSAGE.OVER_MAX_NUMBER);
    });
    cy.get('#total').should('have.text', '123');
  });

  it('숫자 앞에 0을 입력하는 경우', () => {
    cy.get('.digit').contains('0').click();
    cy.get('#total').should('have.text', '0');
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '1');
    cy.get('.digit').contains('2').click();
    cy.get('#total').should('have.text', '12');
    cy.get('.digit').contains('3').click();
    cy.get('#total').should('have.text', '123');
  });

  it('AC 버튼 입력', () => {
    cy.get('.modifier').click();
    cy.get('#total').should('have.text', '0');
  });

  it('더하기 연산', () => {
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '1');
    cy.get('.digit').contains('2').click();
    cy.get('#total').should('have.text', '12');
    cy.get('.operation').contains('+').click();
    cy.get('.digit').contains('3').click();
    cy.get('#total').should('have.text', '3');
    cy.get('.digit').contains('4').click();
    cy.get('#total').should('have.text', '34');
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', '46');
  });

  it('빼기 연산', () => {
    cy.get('.digit').contains('9').click();
    cy.get('#total').should('have.text', '9');
    cy.get('.digit').contains('8').click();
    cy.get('#total').should('have.text', '98');
    cy.get('.operation').contains('-').click();
    cy.get('.digit').contains('7').click();
    cy.get('#total').should('have.text', '7');
    cy.get('.digit').contains('6').click();
    cy.get('#total').should('have.text', '76');
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', '22');
  });

  it('결과가 음수인 빼기 연산', () => {
    cy.get('.digit').contains('5').click();
    cy.get('#total').should('have.text', '5');
    cy.get('.digit').contains('4').click();
    cy.get('#total').should('have.text', '54');
    cy.get('.operation').contains('-').click();
    cy.get('.digit').contains('7').click();
    cy.get('#total').should('have.text', '7');
    cy.get('.digit').contains('6').click();
    cy.get('#total').should('have.text', '76');
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', '-22');
  });

  it('곱하기 연산', () => {
    cy.get('.digit').contains('9').click();
    cy.get('#total').should('have.text', '9');
    cy.get('.digit').contains('8').click();
    cy.get('#total').should('have.text', '98');
    cy.get('.digit').contains('7').click();
    cy.get('#total').should('have.text', '987');
    cy.get('.operation').contains('X').click();
    cy.get('.digit').contains('6').click();
    cy.get('#total').should('have.text', '6');
    cy.get('.digit').contains('5').click();
    cy.get('#total').should('have.text', '65');
    cy.get('.digit').contains('3').click();
    cy.get('#total').should('have.text', '653');
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', '644511');
  });

  it('나누기 연산', () => {
    cy.get('.digit').contains('9').click();
    cy.get('#total').should('have.text', '9');
    cy.get('.digit').contains('8').click();
    cy.get('#total').should('have.text', '98');
    cy.get('.digit').contains('7').click();
    cy.get('#total').should('have.text', '987');
    cy.get('.operation').contains('/').click();
    cy.get('#total').should('have.text', '987');
    cy.get('.digit').contains('6').click();
    cy.get('#total').should('have.text', '6');
    cy.get('.digit').contains('5').click();
    cy.get('#total').should('have.text', '65');
    cy.get('.digit').contains('3').click();
    cy.get('#total').should('have.text', '653');
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', '1');
  });

  it('0으로 나누기 연산', () => {
    cy.get('.digit').contains('9').click();
    cy.get('#total').should('have.text', '9');
    cy.get('.operation').contains('/').click();
    cy.get('#total').should('have.text', '9');
    cy.get('.digit').contains('0').click();
    cy.get('#total').should('have.text', '0');
    cy.get('.operation').contains('=').click();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(ERROR_MESSAGE.DIVIDE_BY_ZERO);
    });
    cy.get('#total').should('have.text', '0');
  });

  it('연산 2번 실행', () => {
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '1');
    cy.get('.digit').contains('2').click();
    cy.get('#total').should('have.text', '12');
    cy.get('.operation').contains('+').click();
    cy.get('#total').should('have.text', '12');
    cy.get('.digit').contains('3').click();
    cy.get('#total').should('have.text', '3');
    cy.get('.digit').contains('4').click();
    cy.get('#total').should('have.text', '34');
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', '46');

    cy.get('.digit').contains('9').click();
    cy.get('#total').should('have.text', '9');
    cy.get('.digit').contains('8').click();
    cy.get('#total').should('have.text', '98');
    cy.get('.operation').contains('-').click();
    cy.get('#total').should('have.text', '98');
    cy.get('.digit').contains('7').click();
    cy.get('#total').should('have.text', '7');
    cy.get('.digit').contains('6').click();
    cy.get('#total').should('have.text', '76');
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', '22');
  });

  it('연산자 버튼을 먼저 입력하여 계산 실행', () => {
    cy.get('.operation').contains('-').click();
    cy.get('#total').should('have.text', '0');
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '1');
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', '-1');
  });
});
