/* eslint-disable max-lines-per-function */
import { $ } from './util.js';
import { DIGIT, LENGTH, RESULT, SIGN } from './constants.js';

class Calculator {
  constructor() {
    this.selectDOM();
    this.attachEvents();

    this.currentNumberLength = LENGTH.DEFAULT;
    this.isOperatorUsed = false;
  }

  selectDOM() {
    this.$total = $('#total');
    this.$digits = $('.digits');
    this.$operations = $('.operations');
    this.$modifier = $('.modifier');
  }

  attachEvents() {
    this.$digits.addEventListener('click', this.handleDigit.bind(this));
    this.$operations.addEventListener('click', this.handleOperator.bind(this));
    this.$modifier.addEventListener('click', this.handleModifier.bind(this));
  }

  handleDigit(event) {
    this.currentNumberLength += 1;

    if (this.currentNumberLength > LENGTH.MAX) return;

    const clickedDigit = event.target.innerText;
    this.renderNumber(clickedDigit);
  }

  handleOperator(event) {
    const clickedOperator = event.target.innerText;

    if (this.isEqual(clickedOperator) && !this.isOperatorUsed) return;
    if (!this.isEqual(clickedOperator) && this.isOperatorUsed) return;

    this.currentNumberLength = LENGTH.DEFAULT;
    this.renderTotal(clickedOperator);
  }

  handleModifier() {
    this.currentNumberLength = LENGTH.DEFAULT;
    this.isOperatorUsed = false;
    this.$total.innerText = RESULT.DEFAULT;
  }

  renderNumber(clickedDigit) {
    if (this.$total.innerText === RESULT.DEFAULT) {
      this.$total.innerText = clickedDigit;

      return;
    }

    this.$total.innerText += clickedDigit;
  }

  renderTotal(clickedOperator) {
    if (this.isEqual(clickedOperator)) {
      this.isOperatorUsed = false;

      const currentInputArray = this.$total.innerText.split('');
      this.$total.innerText = this.calc(this.preprocess(currentInputArray));

      this.currentNumberLength =
        this.$total.innerText === RESULT.DEFAULT ? RESULT.DEFAULT : this.$total.innerText.length;

      return;
    }

    if (!this.isOperatorUsed) {
      this.isOperatorUsed = true;
      this.$total.innerText += clickedOperator;
    }
  }

  preprocess(currentInputArray) {
    const numberStack = [];
    const operatorStack = [];
    let tempNumber = '';

    for (let i = 0; i < currentInputArray.length; i += 1) {
      if (this.isDigit(currentInputArray[i])) {
        tempNumber += currentInputArray[i];

        continue;
      }
      numberStack.push(Number(tempNumber));
      tempNumber = '';
      operatorStack.push(currentInputArray[i]);
    }
    numberStack.push(Number(tempNumber));

    return [numberStack, operatorStack];
  }

  isDigit(element) {
    return element >= DIGIT.MIN && element <= DIGIT.MAX;
  }

  isEqual(clickedOperator) {
    return clickedOperator === SIGN.EQUAL;
  }

  calc([numberStack, operatorStack]) {
    return operatorStack.map((operator) => {
      if (operator === SIGN.ADD) {
        return this.add(numberStack.shift(), numberStack.shift());
      }
      if (operator === SIGN.SUBTRACT) {
        return this.subtract(numberStack.shift(), numberStack.shift());
      }
      if (operator === SIGN.MULTIPLY) {
        return this.multiply(numberStack.shift(), numberStack.shift());
      }
      if (operator === SIGN.DIVIDE) {
        return this.divide(numberStack.shift(), numberStack.shift());
      }
    });
  }

  add(leftNumber, rightNumber) {
    return leftNumber + rightNumber;
  }

  subtract(leftNumber, rightNumber) {
    return leftNumber - rightNumber;
  }

  multiply(leftNumber, rightNumber) {
    return leftNumber * rightNumber;
  }

  divide(leftNumber, rightNumber) {
    if (!rightNumber) {
      return RESULT.DIVIDE_BY_ZERO;
    }

    return Math.floor(leftNumber / rightNumber);
  }
}

const calculator = new Calculator();
