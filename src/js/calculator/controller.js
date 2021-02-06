import {
  add,
  minus,
  multiply,
  divide,
  dropDecimalPoint,
} from "../utils/operator.js";
import {
  isNumberLowerThreeChar,
  isOperatorLowerTwoChar,
} from "../utils/valid.js";
import { INITIAL_NUMBER, ERROR_MESSAGE } from "../utils/constants.js";

import CalculatorModel from "./model.js";
import CalculatorView from "./view.js";

class CalculatorController {
  constructor() {
    this.model = new CalculatorModel();
    this.view = new CalculatorView();
    this.handleNumber();
    this.handleOperator();
    this.handleReset();
  }

  addInput(value) {
    if (this.model.getExpression() === INITIAL_NUMBER && !isNaN(value)) {
      this.model.setExpression(value);
    } else {
      this.model.setExpression(this.model.getExpression() + value);
    }
  }

  addNumber(num) {
    if (isNumberLowerThreeChar(this.model.getExpression())) {
      this.addInput(num);
      this.view.showResult(this.model.getExpression());
    }
  }

  addOperator(operator) {
    if (isOperatorLowerTwoChar(this.model.getExpression())) {
      this.addInput(operator);
      this.view.showResult(this.model.getExpression());
    }
  }

  operate() {
    const expression = this.model.getExpression();
    const inputOperator = expression.replace(/[0-9]/g, "");
    const [num1, num2] = expression.split(/[X+-/]/).map(x => parseInt(x));
    const operateList = {
      "+": add(num1, num2),
      "-": minus(num1, num2),
      "X": multiply(num1, num2),
      "/": dropDecimalPoint(divide(num1, num2)),
      "": num1,
    };

    if ((inputOperator && !num2) || (inputOperator === "/" && num2 === 0)) {
      this.model.setExpression(ERROR_MESSAGE);
    } else {
      this.model.setExpression(operateList[inputOperator]);
    }
    this.view.showResult(this.model.getExpression());
  }

  reset() {
    this.model.setExpression(INITIAL_NUMBER);
    this.view.showResult(this.model.getExpression());
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

export default CalculatorController;
