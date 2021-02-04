describe('click event', () => {
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
    cy.get('.digit').contains('2').click();

    cy.get('#total').should('have.text', '12');
  });

  it('세 자리 숫자 초과 입력', () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('2').click();
    cy.get('.digit').contains('3').click();
    cy.get('.digit').contains('4').click();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('숫자는 세자리까지 입력이 가능해요!!');
    });
    cy.get('#total').should('have.text', '123');
  });

  it('AC 버튼 입력', () => {
    cy.get('.modifier').click();
    cy.get('#total').should('have.text', '0');
  });

  it('더하기 연산', () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('2').click();
    cy.get('.operation').contains('+').click();
    cy.get('.digit').contains('3').click();
    cy.get('.digit').contains('4').click();
    cy.get('.operation').contains('=').click();

    cy.get('#total').should('have.text', '46');
  });

  it('빼기 연산', () => {
    cy.get('.digit').contains('9').click();
    cy.get('.digit').contains('8').click();
    cy.get('.operation').contains('-').click();
    cy.get('.digit').contains('7').click();
    cy.get('.digit').contains('6').click();
    cy.get('.operation').contains('=').click();

    cy.get('#total').should('have.text', '22');
  });

  it('결과가 음수인 빼기 연산', () => {
    cy.get('.digit').contains('5').click();
    cy.get('.digit').contains('4').click();
    cy.get('.operation').contains('-').click();
    cy.get('.digit').contains('7').click();
    cy.get('.digit').contains('6').click();
    cy.get('.operation').contains('=').click();

    cy.get('#total').should('have.text', '-22');
  });

  it('곱하기 연산', () => {
    cy.get('.digit').contains('9').click();
    cy.get('.digit').contains('8').click();
    cy.get('.digit').contains('7').click();
    cy.get('.operation').contains('X').click();
    cy.get('.digit').contains('6').click();
    cy.get('.digit').contains('5').click();
    cy.get('.digit').contains('3').click();
    cy.get('.operation').contains('=').click();

    cy.get('#total').should('have.text', '644511');
  });

  it('나누기 연산', () => {
    cy.get('.digit').contains('9').click();
    cy.get('.digit').contains('8').click();
    cy.get('.digit').contains('7').click();
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains('6').click();
    cy.get('.digit').contains('5').click();
    cy.get('.digit').contains('3').click();
    cy.get('.operation').contains('=').click();

    cy.get('#total').should('have.text', '1');
  });

  it('0으로 나누기 연산', () => {
    cy.get('.digit').contains('9').click();
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('=').click();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('0으로 나눌 수 없습니다!!');
    });
    cy.get('#total').should('have.text', '0');
  });
});
