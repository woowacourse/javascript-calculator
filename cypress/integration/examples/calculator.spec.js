describe("ui-click", () => {
  beforeEach(() => {
    // 페이지 접속. 띄워진 서버 port를 작성해주세요.
    cy.visit("http://localhost:5500/");
  });

  // 계산기 초기 값은 0 이다 (따로 설정 안할시)
  it("계산기 초기 값은 0이다", () => {
    cy.get("#total").should("have.text", 0);
  });

  // 숫자 UI 클릭하면 입력된다
  it("숫자를 클릭하면 입력된다", () => {
    cy.get(".digit").each(num => {
      cy.get(num).click();
      cy.get("#total").should("have.text", num[0].outerText);
    });
  });

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

  // AC 누르면 초기화된다
  it("AC 버튼을 누르면 초기화된다", () => {
    cy.get(".modifier").click();
    cy.get("#total").should("have.text", 0);
  });
});
