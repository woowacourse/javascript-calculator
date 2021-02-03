/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("숫자 입력1", () => {
    cy.get(".digits>.digit").eq(0).click();
    cy.get(".digits>.digit").eq(1).click();
    cy.get(".digits>.digit").eq(2).click();

    cy.get(".operations>.operation").eq(0).click();

    cy.get(".digits>.digit").eq(2).click();

    cy.get("#total").should("have.value", "141");
  });

  it("숫자 입력2", () => {
    cy.get(".digits>.digit").eq(3).click();
    cy.get(".digits>.digit").eq(4).click();
    cy.get(".digits>.digit").eq(5).click();

    cy.get(".operations>.operation").eq(1).click();

    cy.get(".digits>.digit").eq(0).click();
    cy.get(".digits>.digit").eq(1).click();

    cy.get("#total").should("have.value", "64092");
  });

  it("숫자 입력3", () => {
    cy.get(".digits>.digit").eq(6).click();
    cy.get(".digits>.digit").eq(7).click();
    cy.get(".digits>.digit").eq(8).click();

    cy.get(".operations>.operation").eq(2).click();

    cy.get(".digits>.digit").eq(7).click();
    cy.get(".digits>.digit").eq(8).click();

    cy.get("#total").should("have.value", "300");
  });

  it("숫자 입력4", () => {
    cy.get(".digits>.digit").eq(9).click();
    cy.get(".digits>.digit").eq(9).click();
    cy.get(".digits>.digit").eq(7).click();

    cy.get(".operations>.operation").eq(3).click();

    cy.get(".digits>.digit").eq(3).click();
    cy.get(".digits>.digit").eq(6).click();
    cy.get(".digits>.digit").eq(9).click();

    cy.get(".operations>.operation").eq(4).click();
    cy.get("#total").should("have.value", "632");
  });

  it("숫자 클릭 후 All Clear", () => {
    cy.get(".digits>.digit").eq(3).click();
    cy.get(".modifier").click();

    cy.get("#total").should("have.value", "0");
  });

  it("숫자, 연산자 클릭 후 All Clear", () => {
    cy.get(".digits>.digit").eq(3).click();
    cy.get(".operations>.operation").eq(0).click();
    cy.get(".modifier").click();

    cy.get("#total").should("have.value", "0");
  });

  it("3개가 최대", () => {
    cy.get(".digits>.digit").eq(0).click();
    cy.get(".digits>.digit").eq(1).click();
    cy.get(".digits>.digit").eq(2).click();
    cy.get(".digits>.digit").eq(6).click();

    cy.get("#total").should("have.value", "987");
    cy.get(".digits>.digit").eq(0).click();
    cy.get(".digits>.digit").eq(1).click();
    cy.get(".digits>.digit").eq(2).click();
    cy.get(".digits>.digit").eq(6).click();

    cy.get("#total").should("have.value", "987");
  });

  it("소수점 버리기", () => {
    cy.get(".digits>.digit").eq(8).click();
    cy.get(".digits>.digit").eq(9).click();

    cy.get(".operations>.operation").eq(0).click();

    cy.get(".digits>.digit").eq(6).click();

    cy.get(".operations>.operation").eq(4).click();
    cy.get("#total").should("have.value", "3");
  });
});
