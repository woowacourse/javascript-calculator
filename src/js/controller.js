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
    const operateList = {
      "+": add(num1, num2),
      "-": minus(num1, num2),
      "X": multiply(num1, num2),
      "/": dropDecimalPoint(divide(num1, num2)),
    };

    this.operator = operateList[inputOperator];
    this.showResult();
  }

  reset() {
    this.operator = "0";
    this.showResult();
  }
}

export default Calculator;
