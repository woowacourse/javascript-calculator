const { expect } = require("chai");
const { describe } = require("mocha");

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

// 사칙 연산을 수행한다
describe("operate number", () => {
  it("두수를 더한다", () => {
    const { add } = require("../../../src/js/operator.js");
    expect(add(2, 3).to.equal(5));
  });

  it("두수를 뺀다", () => {
    const { minus } = require("../../../src/js/operator.js");
    expect(minus(3, 1).to.equal(2));
  });

  it("두수를 곱한다", () => {
    const { multiply } = require("../../../src/js/operator.js");
    expect(multiply(2, 3).to.equal(6));
  });

  it("두수를 나눈다", () => {
    const { divide } = require("../../../src/js/operator.js");
    expect(divide(4, 2).to.equal(2));
  });
});

// 유효성 검사
describe("check valid operator", () => {
  it("숫자가 3자리 초과인지 확인한다", () => {
    const { isNumberOverThreeChar } = require("../../../src/js/valid.js");
    expect(isNumberOverThreeChar("43+102").to.equal(false));
    expect(isNumberOverThreeChar("529*34").to.equal(true));
  });

  it("연산자가 두번 연속 나오는지 확인한다", () => {
    const { isOperatorOverTwoChar } = require("../../../src/js/vaild.js");
    expect(isOperatorOverTwoChar("18+").to.equal(false));
    expect(isOperatorOverTwoChar("324").to.equal(true));
  });
});
