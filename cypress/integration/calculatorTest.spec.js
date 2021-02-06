describe('calculator-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('숫자를 눌렀을 때 화면에 표시되고, 입력된 수는 누적된다.', () => {
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '1');
    cy.get('.digit').contains('2').click();
    cy.get('#total').should('have.text', '12');
    cy.get('.digit').contains('3').click();
    cy.get('#total').should('have.text', '123');
  });

  it('숫자가 3개이상 입력된 후에는 숫자가 더이상 입력되지 않는다.', () => {
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '1');
    cy.get('.digit').contains('2').click();
    cy.get('#total').should('have.text', '12');
    cy.get('.digit').contains('3').click();
    cy.get('#total').should('have.text', '123');
    cy.get('.digit').contains('4').click();
    cy.get('#total').should('have.text', '123');
    cy.get('.digit').contains('5').click();
    cy.get('#total').should('have.text', '123');
  });

  it('AC를 누르면 0으로 초기화된다.', () => {
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '1');
    cy.get('.digit').contains('2').click();
    cy.get('#total').should('have.text', '12');

    cy.get('.modifier').click();
    cy.get('#total').should('have.text', '0');
  });

  it('두 수의 덧셈이 가능하다', () => {
    cy.get('.digit').contains('9').click();
    cy.get('#total').should('have.text', '9');
    cy.get('.digit').contains('9').click();
    cy.get('#total').should('have.text', '99');
    cy.get('.digit').contains('9').click();
    cy.get('#total').should('have.text', '999');
    cy.get('.operation').contains('+').click();
    cy.get('.digit').contains('5').click();
    cy.get('#total').should('have.text', '5');
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '51');
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', '1050');
  });

  it('두 수의 뺄셈이 가능하다', () => {
    cy.get('.digit').contains('9').click();
    cy.get('#total').should('have.text', '9');
    cy.get('.digit').contains('9').click();
    cy.get('#total').should('have.text', '99');
    cy.get('.digit').contains('9').click();
    cy.get('#total').should('have.text', '999');
    cy.get('.operation').contains('-').click();
    cy.get('.digit').contains('5').click();
    cy.get('#total').should('have.text', '5');
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '51');
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', '948');
  });

  it('두 수의 곱셈이 가능하다', () => {
    cy.get('.digit').contains('6').click();
    cy.get('#total').should('have.text', '6');
    cy.get('.digit').contains('5').click();
    cy.get('#total').should('have.text', '65');
    cy.get('.digit').contains('4').click();
    cy.get('#total').should('have.text', '654');
    cy.get('.operation').contains('X').click();
    cy.get('.digit').contains('4').click();
    cy.get('#total').should('have.text', '4');
    cy.get('.digit').contains('6').click();
    cy.get('#total').should('have.text', '46');
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', '30084');
  });

  it('두 수의 나눗셈이 가능하다', () => {
    cy.get('.digit').contains('6').click();
    cy.get('#total').should('have.text', '6');
    cy.get('.digit').contains('5').click();
    cy.get('#total').should('have.text', '65');
    cy.get('.digit').contains('4').click();
    cy.get('#total').should('have.text', '654');
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains('4').click();
    cy.get('#total').should('have.text', '4');
    cy.get('.digit').contains('6').click();
    cy.get('#total').should('have.text', '46');
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', '14');
  });

  it('기존 total이 0일 때, 입력되는 0은 반영하지 않는다.', () => {
    cy.get('.digit').contains('0').click();
    cy.get('#total').should('have.text', '0');
    cy.get('.digit').contains('0').click();
    cy.get('#total').should('have.text', '0');
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '1');
    cy.get('.digit').contains('2').click();
    cy.get('#total').should('have.text', '12');
    cy.get('.digit').contains('0').click();
    cy.get('#total').should('have.text', '120');
  });

  it('완성되지 않은 수식은 alert(완성되지 않은 수식입니다)로 경고하기.', () => {
    const stub = cy.stub();

    cy.get('.digit').contains('9').click();
    cy.get('#total').should('have.text', '9');
    cy.get('.operation').contains('X').click();
    cy.on('window:alert', stub);
    cy
      .get('.operation').contains('=').click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('완성되지 않은 수식입니다.');
      });
  });

  it('사칙연산을 선택하지 않으면 처음에 입력한 숫자를 표시한다.', () => {
    cy.get('.digit').contains('9').click();
    cy.get('#total').should('have.text', '9');
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', '9');
  });

  it('두 수의 나눗셈에서 0으로 나눌 경우 결과에 \'오류\'를 출력한다.', () => {
    cy.get('.digit').contains('6').click();
    cy.get('#total').should('have.text', '6');
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains('0').click();
    cy.get('#total').should('have.text', '0');
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', '오류');
  });
});
