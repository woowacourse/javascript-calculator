describe("ui-click", () => {
  beforeEach(() => {
    // 페이지 접속. 띄워진 서버 port를 작성해주세요.
    cy.visit("http://localhost:5500/");
  });

  // 숫자 UI 클릭하면 입력된다
  /*   it("숫자를 클릭하면 입력된다", () => {
    cy.get(".digit").each((num, i, array) => {
      num.click();
      cy.get("#total").should("have.text", num[0].outerText);
    });
  }); */

  // 연산 기호를 클릭하면 입력된다 - 하드코딩
  it("연산 기호를 클릭하면 입력된다", () => {
    cy.get(".operation").eq(0).click().should("have.text", "/");
    cy.get("#total").should("have.text", "/");
    cy.get(".operation").eq(1).click().should("have.text", "X");
    cy.get("#total").should("have.text", "*");
    cy.get(".operation").eq(2).click().should("have.text", "-");
    cy.get("#total").should("have.text", "-");
    cy.get(".operation").eq(3).click().should("have.text", "+");
    cy.get("#total").should("have.text", "+");
  });
  // = 기호 클릭하면 계산되고 소수점 이하는 버린다

  // AC 누르면 초기화된다

  // 최대 입력 길이는 3자리 수이다
});
