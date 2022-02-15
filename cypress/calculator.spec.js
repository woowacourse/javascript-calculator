describe("구현 결과가 요구사항과 일치해야 한다.", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("2개의 숫자에 대해 덧셈이 가능하다.", () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('+').click();
    cy.get('.digit').contains('2').click();
    cy.get('.digit').contains('3').click();
    cy.get('#calculate-button').contains('=').click();

    cy.get('#total').should('have.text', '33');
  });

  it("2개의 숫자에 대해 뺄셈이 가능하다.", () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('-').click();
    cy.get('.digit').contains('9').click();
    cy.get('#calculate-button').contains('=').click();

    cy.get('#total').should('have.text', '1');
  });

  it("2개의 숫자에 대해 나눗셈이 가능하다.", () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains('2').click();
    cy.get('#calculate-button').contains('=').click();

    cy.get('#total').should('have.text', '5');
  });

  it("2개의 숫자에 대해 곱셈이 가능하다.", () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('X').click();
    cy.get('.digit').contains('2').click();
    cy.get('#calculate-button').contains('=').click();

    cy.get('#total').should('have.text', '20');
  });

  it("AC(All Clear) 버튼을 누르면 0으로 초기화 한다", () => {
    cy.get('.digit').contains('2').click();
    cy.get('.digit').contains('8').click();
    cy.get('#clear-button').click();

    cy.get('#total').should('have.text', '0');
  });

  it("숫자를 4자리수 이상 입력하면 alert 메세지가 뜬다", () => {
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    cy.get('.digit').contains('2').click();
    cy.get('.digit').contains('8').click();
    cy.get('.digit').contains('2').click();
    cy.get('.digit')
      .contains('8')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("숫자는 2개까지만 입력할 수 있다.", () => {
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    cy.get('.digit').contains('2').click();
    cy.get('.digit').contains('8').click();
    cy.get('.operation').contains('+').click();
    cy.get('.digit').contains('3').click();
    cy.get('.digit').contains('4').click();
    cy.get('.operation')
      .contains('X')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("계산 결과를 표현할 때 소수점 이하는 버림한다.", () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains('3').click();
    cy.get('#calculate-button').contains('=').click();

    cy.get('#total').should('have.text', '3');
  });
})

