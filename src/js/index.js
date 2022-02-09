import {
  DOM,
  ERROR_MESSAGE,
  ONE_THOUSAND,
  TYPE,
  OPERATION,
  ONE_HUNDRED,
  ZERO,
} from "./lib/constants.js";

class Calculator {
  constructor() {
    this.clearCalculator();
    this.initDOM();
    this.initHandler();
  }

  clearCalculator() {
    this.firstOperand = 0;
    this.secondOperand = null;
    this.currentOperator = null;
  }

  initDOM() {
    this.calculatorElement = document.querySelector(
      `.${DOM.CALCULATOR_CLASS_NAME}`
    );
    this.totalElement = document.querySelector(`#${DOM.TOTAL_ID}`);
  }

  initHandler() {
    this.calculatorElement.addEventListener(
      "click",
      this.onCalculatorClick.bind(this)
    );
  }
  onCalculatorClick(e) {
    const {
      target: { className: targetClassName, textContent: targetTextContent },
    } = e;
    this.triggerCalculatorAction({
      targetClassName,
      targetTextContent,
    });
  }

  triggerCalculatorAction({ targetClassName, targetTextContent }) {
    try {
      if (this.isDigitClick({ targetClassName })) {
        this.addToOperand(targetTextContent);
      }
      if (this.isValidOperatorClick({ targetClassName, targetTextContent })) {
        this.createOperator(targetTextContent);
      }
      if (this.isEqualClick({ targetClassName, targetTextContent })) {
        this.calculate();
      }
      if (this.isModifierClick({ targetClassName })) {
        this.clearCalculator();
      }
      this.rerender();
    } catch (error) {
      alert(error);
    }
  }
  isDigitClick({ targetClassName }) {
    return targetClassName === DOM.DIGIT_CLASS_NAME;
  }

  isValidOperatorClick({ targetClassName, targetTextContent }) {
    return (
      targetClassName === DOM.OPERATION_CLASS_NAME &&
      targetTextContent !== OPERATION.EQUAL &&
      !this.secondOperand
    );
  }

  isEqualClick({ targetClassName, targetTextContent }) {
    return (
      targetClassName === DOM.OPERATION_CLASS_NAME &&
      targetTextContent === OPERATION.EQUAL
    );
  }

  isModifierClick({ targetClassName }) {
    return targetClassName === DOM.MODIFIER_CLASS_NAME;
  }

  rerender() {
    this.totalElement.textContent = `${this.firstOperand}${
      this.currentOperator ? this.currentOperator : ""
    }${this.secondOperand ? this.secondOperand : ""}`;
  }
  // 피연산자를 생성, 수정한다
  addToOperand(numberStr) {
    if (
      this.currentOperator &&
      this.isDigitOkay(this.secondOperand, ONE_HUNDRED)
    ) {
      this.secondOperand = this.secondOperand
        ? Number(this.secondOperand + numberStr)
        : Number(numberStr);
      return;
    }
    if (this.isDigitOkay(this.firstOperand, ONE_HUNDRED)) {
      this.firstOperand = Number(this.firstOperand + numberStr);
      return;
    }
    throw Error(ERROR_MESSAGE.NUMBER_SIZE_ERROR);
  }
  createOperator(operatorStr) {
    this.currentOperator = operatorStr;
  }

  hasEmptyParameters(number1, number2) {
    return number1 === TYPE.UNDEFINED || number2 === TYPE.UNDEFINED;
  }

  hasNonNumbers(number1, number2) {
    return typeof number1 !== TYPE.NUMBER || typeof number2 !== TYPE.NUMBER;
  }

  isDigitOkay(number, standard) {
    return number < standard;
  }

  isNumberZero(number) {
    return number === 0;
  }

  checkParameter(number1, number2) {
    if (this.hasEmptyParameters(number1, number2)) {
      throw Error(ERROR_MESSAGE.PARAMETER_ERROR);
    }
    if (this.hasNonNumbers(number1, number2)) {
      throw Error(ERROR_MESSAGE.TYPE_ERROR);
    }
  }

  checkDenominator(number) {
    if (this.isNumberZero(number)) {
      throw Error(ERROR_MESSAGE.DENOMINATOR_ERROR);
    }
  }

  calculate() {
    try {
      let result;
      const operands = [this.firstOperand, this.secondOperand];
      if (this.currentOperator === OPERATION.ADD) {
        result = this.add(...operands);
      }
      if (this.currentOperator === OPERATION.SUBTRACT) {
        result = this.subtract(...operands);
      }
      if (this.currentOperator === OPERATION.MULTIPLY) {
        result = this.multiply(...operands);
      }
      if (this.currentOperator === OPERATION.DIVIDE) {
        result = this.divide(...operands);
      }
      this.clearCalculator();
      this.firstOperand = result;
    } catch (error) {
      alert(error);
    }
  }

  add(number1, number2) {
    this.checkParameter(number1, number2);
    return number1 + number2;
  }

  subtract(number1, number2) {
    this.checkParameter(number1, number2);
    return number1 - number2;
  }

  multiply(number1, number2) {
    this.checkParameter(number1, number2);
    return number1 * number2;
  }

  divide(number1, number2) {
    this.checkParameter(number1, number2);
    this.checkDenominator(number2);
    return Math.floor(number1 / number2);
  }
}

const calculator = new Calculator();
