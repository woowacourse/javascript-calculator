import {
  DOM,
  ERROR_MESSAGE,
  ONE_THOUSAND,
  TYPE,
  OPERATION,
  ZERO,
} from "./lib/constants.js";

class Calculator {
  constructor() {
    // 이벤트 핸들러를 붙일 돔 요소를 가져온다.
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
    // 핸들러 함수를 정의하고
    // 여기서 핸들러를 바인딩
    this.clickEventListener = (e) => {
      const {
        target: { className: targetClassName, textContent: targetTextContent },
      } = e;
      if (targetClassName === DOM.DIGIT_CLASS_NAME) {
        this.addToOperand(targetTextContent);
        return;
      }
      if (
        targetClassName === DOM.OPERATION_CLASS_NAME &&
        targetTextContent !== OPERATION.EQUAL
      ) {
        this.createOperator(targetTextContent);
        return;
      }

      if (targetClassName === DOM.OPERATION_CLASS_NAME) {
        // 결과 표시 함수
        return;
      }

      if (targetClassName === DOM.MODIFIER_CLASS_NAME) {
        this.clearCalculator();
        return;
      }
    };
    this.calculatorElement.addEventListener("click", this.clickEventListener);
  }
  addToOperand(numberStr) {
    if (this.currentOperator) {
      // 두번째 피연산자
      this.secondOperand = this.secondOperand
        ? Number(this.secondOperand + numberStr)
        : Number(numberStr);
    }
    //첫번째 피연산자
    this.firstOperand = Number(this.firstOperand + numberStr);
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

  hasDigitOver(number1, number2, standard) {
    return number1 >= standard || number2 >= standard;
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
    if (this.hasDigitOver(number1, number2, ONE_THOUSAND)) {
      throw Error(ERROR_MESSAGE.NUMBER_SIZE_ERROR);
    }
  }

  checkDenominator(number) {
    if (this.isNumberZero(number)) {
      throw Error(ERROR_MESSAGE.DENOMINATOR_ERROR);
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
    return number1 / number2;
  }
}

const calculator = new Calculator();
