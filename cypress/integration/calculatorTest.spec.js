const inputNumber = (digits) => {
  digits.split('').reduce((number, digit) => {
    if (number.length > 2) return number;
    if (digit === '-') {
      cy.get('.operation').contains(digit).click();
      return number;
    }

    cy.get('.digit').contains(digit).click();
    if (number.length === 0 && digit === '0') return number;
    cy.get('#total').should('have.text', number + digit);

    return number + digit;
  }, '');
};

const operateNumber = (num1, op, num2, eqaul, result) => {
  inputNumber(num1);
  cy.get('.operation').contains(op || '+').click();
  inputNumber(num2 || '0');
  cy.get('.operation').contains(eqaul).click();
  cy.get('#total').should('have.text', result);
};

const clickAC = () => {
  cy.get('.modifier').click();
  cy.get('#total').should('have.text', '0');
};

describe('calculator-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('숫자를 눌렀을 때 화면에 표시되고, 입력된 수는 누적된다.', () => {
    inputNumber('123');
  });

  it('숫자가 3개이상 입력된 후에는 숫자가 더이상 입력되지 않는다.', () => {
    inputNumber('12345');
  });

  it('두 수의 덧셈이 가능하다', () => {
    operateNumber('999', '+', '51', '=', '1050');
  });

  it('두 수의 뺄셈이 가능하다', () => {
    operateNumber('999', '-', '51', '=', '948');
  });

  it('두 수의 곱셈이 가능하다', () => {
    operateNumber('654', 'X', '46', '=', '30084');
  });

  it('두 수의 나눗셈이 가능하다', () => {
    operateNumber('654', '/', '46', '=', '14');
  });

  it('기존 total이 0일 때, 입력되는 0은 반영하지 않는다.', () => {
    inputNumber('00123');
  });

  it('완성되지 않은 수식은 alert(완성되지 않은 수식입니다)로 경고하기.', () => {
    const stub = cy.stub();

    inputNumber('9');
    cy.get('.operation').contains('X').click();
    cy.on('window:alert', stub);
    cy
      .get('.operation').contains('=').click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('완성되지 않은 수식입니다.');
      });
  });

  it('사칙연산을 선택하지 않으면 처음에 입력한 숫자를 표시한다.', () => {
    operateNumber('9', null, null, '=', '9');
  });

  it('두 수의 나눗셈에서 0으로 나눌 경우 결과에 \'오류\'를 출력한다.', () => {
    operateNumber('6', '/', '0', '=', '오류');
  });

  it('첫번째 숫자로 음수를 입력할 수 있다.', () => {
    operateNumber('-09', null, null, '=', '-9');
  });

  it('AC를 누르면 0으로 초기화된다.', () => {
    inputNumber('12');
    clickAC();
    operateNumber('-999', '-', '51', '=', '-1050');
  });
});
