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

describe('비정상 시나리오에 대해 사용자에게 alert를 띄운다. ', () => {
  it('사용자가 수를 0으로 나눌 경우 alert를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get('.digit').contains(5).click();
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains(0).click();
    cy.get('.operation')
      .contains('=')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });

    cy.get('.modifier').click();
  });

  it('연산자가 두번 이상 눌렸을 경우 alert를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get('.digit').contains(5).click();
    cy.get('.operation').contains('/').click();
    cy.get('.operation')
      .contains('+')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });

    cy.get('.modifier').click();
  });

  it('세자리를 초과하는 수가 입력됐을 경우 alert를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    const num = '1234';

    for (let i = 0; i < num.length - 1; i++) {
      cy.get('.digit').contains(parseInt(num[i])).click();
    }
    cy.get('.digit')
      .contains(parseInt(num[3]))
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });

    cy.get('.modifier').click();
  });

  it('숫자 2개와 연산자를 입력하기 전에 `=`을 눌렀을 경우 alert를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get('.digit').contains(8).click();
    cy.get('.operation').contains('/').click();

    cy.get('.operation')
      .contains('=')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });

    cy.get('.modifier').click();
  });

  it('첫 번째 숫자가 입력되기 전에 연산자가 먼저 입력될 경우 alert를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get('.operation')
      .contains('/')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });

    cy.get('.modifier').click();
  });
});
