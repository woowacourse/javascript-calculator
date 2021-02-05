/// <reference types="cypress" />

context("e2e", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it(`결과창(#total)의 기본 값이 "0"이어야 한다.`, () => {
    cy.get("#total").should("have.text", "0");
  });

  it(`결과창(#total)이 "0"일 때 숫자(.digit)을 클릭하면 그 숫자가 결과값이 되어야 한다.`, () => {
    cy.get(".digit").contains("1").click();
    cy.get("#total").should("have.text", "1");
  });

  it(`결과창(#total)이 "0"일 때 숫자(.digit) "0"을 클릭하면 결과창(#total)에 "0"이 출력되어야 한다.`, () => {
    cy.get(".digit").contains("0").click();
    cy.get("#total").should("have.text", "0");
  });
});
