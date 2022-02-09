it("2개의 숫자에 대해 덧셈이 가능하다", () => {
  cy.visit("index.html"); // 문서를 방문

  // 2 + 9 = 11
  // 2 버튼을 누른다.
  cy.get(".digit").contains(2).click();

  // + 버튼을 누른다.
  cy.get(".operation").contains("+").click();

  // 9 버튼을 누른다.
  cy.get(".digit").contains(9).click();

  // = 버튼을 누른다.
  cy.get(".operation").contains("=").click();

  // 11이 나오는지 확인한다.
  cy.get("#total").should("have.text", "11");
});

it("2개의 숫자에 대해 뺄셈이 가능하다", () => {
  cy.visit("index.html"); // 문서를 방문

  // 9 - 2 = 7
  // 9 버튼을 누른다.
  cy.get(".digit").contains(9).click();

  // - 버튼을 누른다.
  cy.get(".operation").contains("-").click();

  // 2 버튼을 누른다.
  cy.get(".digit").contains(2).click();

  // = 버튼을 누른다.
  cy.get(".operation").contains("=").click();

  // 7이 나오는지 확인한다.
  cy.get("#total").should("have.text", "7"); // total이 특정 text를 가지고 있어야 한다
});

it("2개의 숫자에 대해 곱셈이 가능하다", () => {
  cy.visit("index.html"); // 문서를 방문

  // 2 * 9 = 18
  // 2 버튼을 누른다.
  cy.get(".digit").contains(2).click();

  // * 버튼을 누른다.
  cy.get(".operation").contains("X").click();

  // 9 버튼을 누른다.
  cy.get(".digit").contains(9).click();

  // = 버튼을 누른다.
  cy.get(".operation").contains("=").click();

  // 18이 나오는지 확인한다.
  cy.get("#total").should("have.text", "18");
});

it("2개의 숫자에 대해 나눗셈이 가능하다", () => {
  cy.visit("index.html");

  // 8 / 2 = 4
  // 8 버튼을 누른다.
  cy.get(".digit").contains(8).click();

  // + 버튼을 누른다.
  cy.get(".operation").contains("/").click();

  // 2 버튼을 누른다.
  cy.get(".digit").contains(2).click();

  // = 버튼을 누른다.
  cy.get(".operation").contains("=").click();

  // 4가 나오는지 확인한다.
  cy.get("#total").should("have.text", "4");
});
