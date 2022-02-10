import { $ } from './util.js';

class Calculator {
  constructor() {
    this.selectDOM();
    this.attachEvents();

    this.currentNumberLength = 0;
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

    if (this.currentNumberLength > 3) return;

    const clickedDigit = event.target.innerText;
    this.renderNumber(clickedDigit);
  }

  handleOperator(event) {
    const clickedOperator = event.target.innerText;

    if (this.isEqual(clickedOperator) && !this.isOperatorUsed) return;
    if (!this.isEqual(clickedOperator) && this.isOperatorUsed) return;

    this.currentNumberLength = 0;
    this.renderTotal(clickedOperator);
  }

  handleModifier() {
    this.currentNumberLength = 0;
    this.isOperatorUsed = false;
    this.$total.innerText = '0';
  }

  renderNumber(clickedDigit) {
    if (this.$total.innerText === '0') {
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

      this.currentNumberLength = this.$total.innerText === '0' ? 0 : this.$total.innerText.length;

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
    return element >= '0' && element <= '9';
  }

  isEqual(clickedOperator) {
    return clickedOperator === '=';
  }

  calc([numberStack, operatorStack]) {
    return operatorStack.map((operator) => {
      if (operator === '+') {
        return this.add(numberStack.shift(), numberStack.shift());
      }
      if (operator === '-') {
        return this.subtract(numberStack.shift(), numberStack.shift());
      }
      if (operator === 'X') {
        return this.multiply(numberStack.shift(), numberStack.shift());
      }
      if (operator === '/') {
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
    return Math.floor(leftNumber / rightNumber);
  }
}

const calculator = new Calculator();
