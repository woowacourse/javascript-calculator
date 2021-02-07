/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/javascript-calculator");
  });

  // https://on.cypress.io/interacting-with-elements

  it("+ 연산자 테스트", () => {
    // https://on.cypress.io/type
    cy.get(".digit").eq(1).click();
    cy.get(".operation").eq(3).click();
    cy.get(".digit").eq(1).click();
    cy.get(".operation").eq(4).click();
    cy.get("#total").should("have.value", "16");
    // .type() with special character sequences
    // .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
    // .type("{del}{selectall}{backspace}")

    // // .type() with key modifiers
    // .type("{alt}{option}") //these are equivalent
    // .type("{ctrl}{control}") //these are equivalent
    // .type("{meta}{command}{cmd}") //these are equivalent
    // .type("{shift}")

    // // Delay each keypress by 0.1 sec
    // .type("slow.typing@email.com", { delay: 100 })
    // .should("have.value", "slow.typing@email.com");
  });
});
