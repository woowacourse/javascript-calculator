describe("구현 결과가 요구사항과 일치해야 한다.", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("2개의 숫자에 대해 덧셈이 가능하다.", () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('+').click();
    cy.get('.digit').contains('2').click();
    cy.get('.digit').contains('0').click();
    cy.get('#calculate-equal').click();

    cy.get('#total').should('have.text', '30');
  });

  it("2개의 숫자에 대해 뺄셈이 가능하다.", () => {
    cy.get('.digit').contains('2').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('-').click();
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('0').click();
    cy.get('#calculate-equal').click();

    cy.get('#total').should('have.text', '10');
  });

  it("2개의 숫자에 대해 나눗셈이 가능하다.", () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains('2').click();
    cy.get('#calculate-equal').click();

    cy.get('#total').should('have.text', '5');
  });

  it("2개의 숫자에 대해 곱셈이 가능하다.", () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('X').click();
    cy.get('.digit').contains('2').click();
    cy.get('#calculate-equal').click();

    cy.get('#total').should('have.text', '20');
  });

  it("양의 정수만 나눌 수 있다.", () => {
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains('0').click();
    cy.get('#calculate-equal')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("AC(All Clear) 버튼을 누르면 0으로 초기화 한다", () => {
    cy.get('.digit').contains('2').click();
    cy.get('.digit').contains('8').click();
    cy.get('.modifier').click();

    cy.get('#total').should('have.text', '0');
  });

  it("계산 결과를 표현할 때 소수점 이하는 버림한다.", () => {
    cy.get('.digit').contains('1').click();
    cy.get('.digit').contains('0').click();
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains('3').click();
    cy.get('#calculate-equal').click();

    cy.get('#total').should('have.text', '3');
  });

  it("숫자는 한번에 최대 3자리 수까지 입력 가능하다.", () => {
    cy.get(".digit").contains('1').click();
    cy.get(".digit").contains('2').click();
    cy.get(".digit").contains('3').click();
    cy.get(".digit").contains('4').click();

    cy.get("#total").should("have.text", "123");
  });

  it("2개의 숫자만 계산이 가능하다.", () => {
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    cy.get(".digit").contains('1').click();
    cy.get('.operation').contains('+').click();
    cy.get(".digit").contains('2').click();
    cy.get('.operation')
    .contains('+')
    .click()
    .then(() => {
      expect(alertStub).to.be.called;
    });
  });

  it("누적계산은 가능하다", () => {
    cy.get(".digit").contains('1').click();
    cy.get('.operation').contains('+').click();
    cy.get(".digit").contains('2').click();
    cy.get('#calculate-equal').click();
    cy.get('.operation').contains('+').click();
    cy.get(".digit").contains('3').click();
    cy.get('#calculate-equal').click();

    cy.get("#total").should("have.text", "6");
  });

  it("연산자는 숫자사이에 와야한다", () => {
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    cy.get('.digit').contains('1').click();
    cy.get('.operation').contains('+').click();
    cy.get('.operation')
      .contains('/')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
})