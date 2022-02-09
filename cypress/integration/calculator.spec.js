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

// AC(All Clear)버튼을 누르면 0으로 초기화 한다.
// 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// 숫자는 2개까지만 입력할 수 있다.
// 계산 결과를 표현할 때 소수점 이하는 버림한다.
