import $ from "./utils/dom.js";
import arrayToNumber from "./utils/arrayToNumber.js";
import { SELECTORS, OPERATIONS } from "./constants.js";

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
      if (!this.currentOperation) {
        this.firstNumberArray.push(digit);
        return;
      }
      this.secondNumberArray.push(digit);
    });

    this.$operations.addEventListener('click', (e) => {
      const operation = e.target.getAttribute('data-operation');
      if (operation === OPERATIONS.equal) {
        const firstNum = arrayToNumber(this.firstNumberArray);
        const secondNum = arrayToNumber(this.secondNumberArray);
        const result = this.calculate(firstNum, secondNum);
        console.log('result :', result);
        this.currentOperation = '';
        return;
      }
      this.currentOperation = operation;
    });

    this.$modifier.addEventListener('click', () => {
    });
  }

  initState() {
    this.currentOperation = '';
    this.firstNumberArray = [];
    this.secondNumberArray = [];
  }

  reset() {
    this.initState();
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
