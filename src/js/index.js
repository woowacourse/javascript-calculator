import $ from "./utils/dom.js";
import arrayToNumber from "./utils/arrayToNumber.js";
import { SELECTORS, OPERATIONS, INITIAL_NUMBER, MAX_DIGIT_SIZE, ERROR_MESSAGES } from "./constants.js";

class Calculator {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      this.addEventListeners();
      this.initState();
    });
  }

  addEventListeners() {
    $(SELECTORS.digits).addEventListener('click', (e) => {
      if (this.calculatedResult !== 0) {
        this.reset();
      }

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

    $(SELECTORS.operations).addEventListener('click', (e) => {
      const operation = e.target.getAttribute('data-operation');

      // 이전의 결과 값이 남아 있는데, +,- 같은 연산을 하는 경우
      if (this.calculatedResult) {
        // firstNumArray에 이전 결과값을 채운다
        this.firstNumberArray = `${this.calculatedResult}`.split('').map((numStr) => Number(numStr));
        this.secondNumberArray = [];
        this.calculatedResult = 0;
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

      // =이 아닌데(+, -, *, /) 피연산자가 2개 꽉 차있다면
      if (operation !== OPERATIONS.equal && (this.firstNumberArray.length > 0 && this.secondNumberArray.length > 0)) {
        alert(ERROR_MESSAGES.onlyTwoOperlands);
        return;
      }

      if (operation === OPERATIONS.equal) {
        const firstNum = arrayToNumber(this.firstNumberArray);
        const secondNum = arrayToNumber(this.secondNumberArray);
        const result = this.calculate(firstNum, secondNum);
        // 에러가 발생해서 null을 리턴한 경우, 계산기를 초기화 해버린다
        if (result === null) {
          this.reset();
          return;
        }
        this.calculatedResult = result;
        this.renderTotal(`${this.calculatedResult}`);
        this.currentOperation = '';
        return;
      }
      this.currentOperation = operation;
    });

    $(SELECTORS.modifier).addEventListener('click', () => {
      this.reset();
    });
  }

  isOverMaxDigitSize(numArr) {
    return numArr.length >= MAX_DIGIT_SIZE;
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
    $(SELECTORS.total).innerText = result;
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
    if (secondNum === 0) {
      alert(ERROR_MESSAGES.divideWithPositiveNumber);
      return null;
    }
    return Math.floor(firstNum / secondNum);
  }
}

new Calculator();
