const operateNumber = (num1, op, num2, op2, res) => {
  cy.get(".digit").contains(num1).click();
  cy.get("#total").should("have.text", num1);
  cy.get(".operation").contains(op).click();
  cy.get("#total").should("have.text", num1 + op);
  cy.get(".digit").contains(num2).click();
  cy.get("#total").should("have.text", num1 + op + num2);
  cy.get(".operation").contains(op2).click();
  cy.get("#total").should("have.text", res);
};

describe("ui-click", () => {
  beforeEach(() => {
    // 페이지 접속. 띄워진 서버 port를 작성해주세요.
    cy.visit("http://localhost:5500/");
  });

  // 계산기 초기 값은 0 이다 (따로 설정 안할시)
  it("계산기 초기 값은 0이다", () => {
    cy.get("#total").should("have.text", 0);
  });

  it("두수를 더한다", () => {
    operateNumber("1", "+", "3", "=", "4");
  });

  it("두수를 뺀다", () => {
    operateNumber("5", "-", "2", "=", "3");
  });

  it("두수를 곱한다", () => {
    operateNumber("1", "X", "3", "=", "3");
  });

  it("두수를 나눈다", () => {
    operateNumber("5", "/", "3", "=", "1");
  });

  // AC 누르면 초기화된다
  it("AC 버튼을 누르면 초기화된다", () => {
    cy.get(".modifier").click();
    cy.get("#total").should("have.text", 0);
  });
});

// 유효성 검사
describe("check valid operator", () => {
  it("숫자가 3자리 초과인지 확인한다", () => {
    const { isNumberLowerThreeChar } = require("../../../src/js/valid.js");
    expect(!isNumberLowerThreeChar("43+102")).to.equal(true);
    expect(isNumberLowerThreeChar("529*34")).to.equal(true);
  });

  it("연산자가 두번 연속 나오는지 확인한다", () => {
    const { isOperatorLowerTwoChar } = require("../../../src/js/valid.js");
    expect(!isOperatorLowerTwoChar("18+")).to.equal(true);
    expect(isOperatorLowerTwoChar("324")).to.equal(true);
  });
});

// 소수점 버리기
describe("drop decimal point", () => {
  it("소수점을 버린다", () => {
    const { dropDecimalPoint } = require("../../../src/js/operator.js");
    expect(dropDecimalPoint(1.533)).to.equal(1);
  });
});
