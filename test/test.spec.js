// cypress commands 자동완성하는 방법
// ref) http://www.apimirror.com/cypress/guides/tooling/intelligent-code-completion
/// <reference types="Cypress" />

// 1. 테스트 코드 연습
// ref)https://docs.cypress.io/guides/getting-started/writing-your-first-test#Write-a-real-test

// given, when, then 3가지로,
// given: 구체적인 초기 상태를 주고,
// when: 특정 액션을 취한 후,
// then: 나와야할 결과값과 동일한지 체크한다.

describe("hello cypress", () => {
    it("Does not do much!", () => {
        expect(true).to.equal(true);
    });
});

// - Visit a web page.
describe("My First Test", () => {
    it("Visites the Kitchen Sink", () => {
        cy.visit("https://example.cypress.io");
    });

    // - Search for an element and click event
    it(`finds the content "type"`, () => {
        cy.contains("type").click();
        // 잠시 멈추기
        // cy.pause(); // eslint 에러
    });

    // - Assert about the content on the page.
    it(`clicking "type" navigates to a new url`, () => {
        cy.url().should("include", "/commands/actions");
    });

    it("Gets, types and asserts", () => {
        cy.get(".action-email")
            .type("hansuhwa2005@gmail.com")
            .should("have.value", "hansuhwa2005@gmail.com");
    });
});

// 2. cypress method
// ref) https://docs.cypress.io/api/commands/get
