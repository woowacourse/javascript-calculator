it("2개의 숫자에 대해 덧셈이 가능하다", () => {
  cy.visit("index.html");
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
