import $ from "./utils/dom.js";
import arrayToNumber from "./utils/arrayToNumber.js";
import { SELECTORS, OPERATIONS, INITIAL_NUMBER, MAX_DIGIT_SIZE, ERROR_MESSAGES } from "./constants.js";

class Calculator {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      this.bindElements();
      this.addEventListeners();
      this.initState();
    });
  }

  bindElements() {
    this.$total = $(SELECTORS.total);
    this.$modifier = $(SELECTORS.modifier);
    this.$digits = $(SELECTORS.digits);
    this.$digit = $(SELECTORS.digit);
    this.$modifier = $(SELECTORS.modifier);
    this.$operations = $(SELECTORS.operations);
    this.$operation = $(SELECTORS.operation);
  }

  addEventListeners() {
    this.$digits.addEventListener('click', (e) => {
      const digit = parseInt(e.target.innerText, 10);

      if (!this.currentOperation && this.isOverMaxDigitSize(this.firstNumberArray)) {
        alert(ERROR_MESSAGES.underMaxDigitSize);
        return;
      }

      if (!this.currentOperation) {
        this.firstNumberArray.push(digit);
        this.renderTotal(this.firstNumberArray.join(''));
        return;
      }

      if (this.isOverMaxDigitSize(this.secondNumberArray)) {
        alert(ERROR_MESSAGES.underMaxDigitSize);
        return;
      }

      this.secondNumberArray.push(digit);
      this.renderTotal(this.secondNumberArray.join(''));
    });

    this.$operations.addEventListener('click', (e) => {
      const operation = e.target.getAttribute('data-operation');

      // 이전의 결과 값이 남아 있는데, +,- 같은 연산을 하는 경우
      if (this.calculatedResult) {
        // firstNumArray에 이전 결과값을 채운다
        this.firstNumberArray = `${this.calculatedResult}`.split('').map((numStr) => Number(numStr));
        this.secondNumberArray = [];
        this.calculatedResult = null;
      }

      // validation
      // =인데, 피연산자가 하나라도 없다면 ERROR
      if ((operation === OPERATIONS.equal) && (this.firstNumberArray.length === 0 || this.secondNumberArray.length === 0)) {
        alert(ERROR_MESSAGES.operationBetweenNumber);
        return;
      }

      // =이 아닌데(+, -, *, /) 첫번째 피연산자가 없다면
      if (operation !== OPERATIONS.equal && (this.firstNumberArray.length === 0)) {
        alert(ERROR_MESSAGES.operationBetweenNumber);
        return;
      }

      if (operation === OPERATIONS.equal) {
        const firstNum = arrayToNumber(this.firstNumberArray);
        const secondNum = arrayToNumber(this.secondNumberArray);
        this.calculatedResult = this.calculate(firstNum, secondNum);
        this.renderTotal(`${this.calculatedResult}`);
        this.currentOperation = '';
        return;
      }
      this.currentOperation = operation;
    });

    this.$modifier.addEventListener('click', () => {
      this.reset();
    });
  }

  isOverMaxDigitSize(numArr) {
    if (numArr.length >= MAX_DIGIT_SIZE) {
      return true;
    }
    return false;
  }

  initState() {
    this.currentOperation = '';
    this.firstNumberArray = [];
    this.secondNumberArray = [];
    this.calculatedResult = INITIAL_NUMBER;
    this.renderTotal(this.calculatedResult);
  }

  reset() {
    this.initState();
  }

  renderTotal(result) {
    this.$total.innerText = result;
  }

  calculate(firstNum, secondNum) {
    if (this.currentOperation === OPERATIONS.plus) {
      return this.add(firstNum, secondNum);
    }
    if (this.currentOperation === OPERATIONS.minus) {
      return this.minus(firstNum, secondNum);
    }
    if(this.currentOperation === OPERATIONS.multiply) {
      return this.multiply(firstNum, secondNum);
    }
    if (this.currentOperation === OPERATIONS.divide) {
      return this.divide(firstNum, secondNum);
    }
  }

  add(firstNum, secondNum) {
    return firstNum + secondNum;
  }

  minus(firstNum, secondNum) {
    return firstNum - secondNum;
  }

  multiply(firstNum, secondNum) {
    return firstNum * secondNum;
  }

  divide(firstNum, secondNum) {
    return Math.floor(firstNum / secondNum);
  }
}

new Calculator();
