it("2개의 숫자에 대해 덧셈이 가능하다.", () => {
  cy.visit("index.html");

  // 2 + 9 = 11
  cy.get(".digit").contains(2).click();
  cy.get(".operation").contains("+").click();
  cy.get(".digit").contains(9).click();
  cy.get(".operation").contains("=").click();
  cy.get("#total").should("have.text", "11");
});

it("2개의 숫자에 대해 뺄셈이 가능하다.", () => {
  cy.visit("index.html");

  // 7 - 2 = 5
  cy.get(".digit").contains(7).click();
  cy.get(".operation").contains("-").click();
  cy.get(".digit").contains(2).click();
  cy.get(".operation").contains("=").click();
  cy.get("#total").should("have.text", "5");
});

it("2개의 숫자에 대해 곱셈이 가능하다.", () => {
  cy.visit("index.html");

  // 2 * 9 = 18
  cy.get(".digit").contains(2).click();
  cy.get(".operation").contains("X").click();
  cy.get(".digit").contains(9).click();
  cy.get(".operation").contains("=").click();
  cy.get("#total").should("have.text", "18");
});

it("2개의 숫자에 대해 나눗셈이 가능하다.", () => {
  cy.visit("index.html");

  // 5 / 2 = 2
  cy.get(".digit").contains(5).click();
  cy.get(".operation").contains("/").click();
  cy.get(".digit").contains(2).click();
  cy.get(".operation").contains("=").click();
  cy.get("#total").should("have.text", "2");
});

it("AC(All Clear)버튼을 누르면 0으로 초기화 한다.", () => {
  cy.visit("index.html");

  cy.get(".digit").contains(4).click();
  cy.get(".modifier").contains("AC").click();
  cy.get("#total").should("have.text", "0");
});

it("자리 수가 3보다 큰 수를 입력할 경우 alert를 보여준다.", () => {
  cy.visit("index.html");

  const alertStub = cy.stub();
  cy.on("window:alert", alertStub);

  cy.get(".digit").contains(4).click();
  cy.get(".digit").contains(4).click();
  cy.get(".digit").contains(4).click();
  cy.get(".digit")
    .contains(4)
    .click()
    .then(() => {
      expect(alertStub).to.be.called;
    });
});

it("숫자가 3개 이상 입력되면 alert를 보여준다.", () => {
  cy.visit("index.html");

  const alertStub = cy.stub();
  cy.on("window:alert", alertStub);

  cy.get(".digit").contains(3).click();
  cy.get(".operation").contains("+").click();
  cy.get(".digit").contains(4).click();
  cy.get(".operation").contains("+").click();
  cy.get(".digit").contains(4).click();
  cy.get(".operation")
    .contains("=")
    .click()
    .then(() => {
      expect(alertStub).to.be.called;
    });
});

// 계산 결과를 표현할 때 소수점 이하는 버림한다.
