import { add, minus, multiply, divide, dropDecimalPoint } from "./operator.js";
import { isNumberLowerThreeChar, isOperatorLowerTwoChar } from "./valid.js";

class Calculator {
  constructor() {
    this.operator = "0";
  }

  showResult() {
    const resultInput = document.querySelector("#total");
    resultInput.innerHTML = this.operator;
  }

  addInput(value) {
    if (this.operator === "0" && !isNaN(value)) {
      this.operator = value;
    } else {
      this.operator += value;
    }
  }

  addNumber(num) {
    if (isNumberLowerThreeChar(this.operator)) {
      this.addInput(num);
      this.showResult();
    }
  }

  addOperator(operator) {
    if (isOperatorLowerTwoChar(this.operator)) {
      this.addInput(operator);
      this.showResult();
    }
  }

  operate() {
    const inputOperator = this.operator.replace(/[0-9]/g, "");
    const [num1, num2] = this.operator.split(/[X+-/]/).map(x => parseInt(x));
    if ("+" === inputOperator) {
      this.operator = add(num1, num2);
    } else if ("-" === inputOperator) {
      this.operator = minus(num1, num2);
    } else if ("X" === inputOperator) {
      this.operator = multiply(num1, num2);
    } else if ("/" === inputOperator) {
      this.operator = dropDecimalPoint(divide(num1, num2));
    }

    this.showResult();
  }

  reset() {
    this.operator = "0";
    this.showResult();
  }
}

export default Calculator;
