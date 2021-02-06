import { add, minus, multiply, divide, dropDecimalPoint } from "./operator.js";
import { isNumberLowerThreeChar, isOperatorLowerTwoChar } from "./valid.js";

import CalculatorView from "./view.js";

class Calculator {
  constructor() {
    this.calculatorView = new CalculatorView();
    this.operator = "0";
    this.handleNumber();
    this.handleOperator();
    this.handleReset();
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
      this.calculatorView.showResult(this.operator);
    }
  }

  addOperator(operator) {
    if (isOperatorLowerTwoChar(this.operator)) {
      this.addInput(operator);
      this.calculatorView.showResult(this.operator);
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

    if (inputOperator === "/" && num2 === 0) {
      this.operator = "error";
    } else {
      this.operator = operateList[inputOperator];
    }
    this.calculatorView.showResult(this.operator);
  }

  reset() {
    this.operator = "0";
    this.calculatorView.showResult(this.operator);
  }

  handleNumber() {
    const digitBtns = document.querySelector(".digits");
    digitBtns.addEventListener("click", e => {
      this.addNumber(e.target.innerHTML);
    });
  }

  handleOperator() {
    const operationBtns = document.querySelector(".operations");
    operationBtns.addEventListener("click", e => {
      if (e.target.innerHTML === "=") {
        return this.operate();
      }

      return this.addOperator(e.target.innerHTML);
    });
  }

  handleReset() {
    const modifierBtn = document.querySelector(".modifier");
    modifierBtn.addEventListener("click", () => {
      this.reset();
    });
  }
}

export default Calculator;
