// Given - 사용자가 처음에 페이지에 접속하고 나면 , 디스플레이 값이 0이다.
// When
//  - 유저는 2를 클릭하고, 디스플레이에 2가 보여진다.
//  - 유저는 +버튼을 클릭한다.
//  - 유저는 4를 클릭하고, 디스플레이에 4가 보여진다.
//  - 유저는 =버튼을 클릭한다.
// Then
// - 디스플레이 값은 6이 된다.
describe("계산기 기능", () => {
  before(() => {
    cy.visit("http://127.0.0.1:5500/javascript-calculator/");
  });

  function getRandomInput(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  function operate(firstInput, operator, secondInput, is, result) {
    firstInput.split("").forEach((number) => {
      cy.get(".digit").contains(number).click();
    });
    cy.get("#total").should("have.text", firstInput);
    cy.get(".operation").contains(operator).click();

    secondInput.split("").forEach((number) => {
      cy.get(".digit").contains(number).click();
    });
    cy.get("#total").should("have.text", secondInput);

    cy.get(".operation").contains(is).click();
    cy.get("#total").should("have.text", result);

    return result;
  }

  function operateManyTimes(inputs, operators, is) {
    inputs[0].split("").forEach((number) => {
      cy.get(".digit").contains(number).click();
    });
    cy.get("#total").should("have.text", inputs[0]);
    cy.get(".operation").contains(operators[0]).click();
    inputs[1].split("").forEach((number) => {
      cy.get(".digit").contains(number).click();
    });
    cy.get("#total").should("have.text", inputs[1]);
    cy.get(".operation").contains(is).click();
    cy.get("#total").should("have.text", "53");

    cy.get(".operation").contains(operators[1]).click();
    inputs[2].split("").forEach((number) => {
      cy.get(".digit").contains(number).click();
    });
    cy.get("#total").should("have.text", inputs[2]);
    cy.get(".operation").contains(is).click();
    cy.get("#total").should("have.text", "212");

    cy.get(".operation").contains(operators[2]).click();
    inputs[3].split("").forEach((number) => {
      cy.get(".digit").contains(number).click();
    });
    cy.get("#total").should("have.text", inputs[3]);
    cy.get(".operation").contains(is).click();
    cy.get("#total").should("have.text", "207");
  }

  function testCase1(testName, operator) {
    it(testName, () => {
      const firstInput = getRandomInput(0, 1000);
      const secondInput = getRandomInput(0, 1000);
      let result = 0;
      if (operator === "+") {
        result = Number(firstInput) + Number(secondInput);
      } else if (operator === "-") {
        result = Number(firstInput) - Number(secondInput);
      } else if (operator === "X") {
        result = Number(firstInput) * Number(secondInput);
      } else if (operator === "/") {
        result = Math.floor(Number(firstInput) / Number(secondInput));
      }

      operate(firstInput, operator, secondInput, "=", result);
    });
  }

  function testCase2(testName) {
    it(testName, () => {
      const inputs = ["50", "3", "4", "5"];
      const operaters = ["+", "X", "-"];

      operateManyTimes(inputs, operaters, "=");
    });
  }

  function testCase3(testName) {
    it("AC를 눌렀을 때, total 값이 0으로 초기화 된다.", () => {
      cy.get(".modifier").click();
      cy.get("#total").should("have.text", "0");
    });
  }

  it("사용자가 처음에 페이지에 접속하고 나면 , 디스플레이 값이 0이다.", () => {
    cy.get("#total").should("have.text", "0");
  });

  testCase1("2개의 숫자를 곱한다.", "X");
  testCase1("2개의 숫자를 더한다.", "+");
  testCase1("2개의 숫자를 뺀다.", "-");
  testCase1("2개의 숫자를 나눈다.", "/");

  testCase2("연속 계산하는 경우 입니다.");

  testCase3("AC를 눌렀을 때, total 값이 0으로 초기화 된다.");
});
