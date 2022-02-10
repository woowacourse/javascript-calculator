import { $ } from './util.js';

class Calculator {
  constructor() {
    this.selectDOM();
    this.attachEvents();
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
    const clickedDigit = event.target.innerText;

    if (this.$total.innerText === '0') {
      this.$total.innerText = clickedDigit;

      return;
    }

    this.$total.innerText += clickedDigit;
  }

  handleOperator(event) {
    const clickedOperator = event.target.innerText;

    this.renderTotal(clickedOperator);
  }

  handleModifier() {
    this.$total.innerText = '0';
  }

  renderTotal(clickedOperator) {
    if (!this.isEqual(clickedOperator)) {
      this.$total.innerText += clickedOperator;

      return;
    }

    const currentInputArray = this.$total.innerText.split('');

    this.$total.innerText = this.calc(this.preprocess(currentInputArray));
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
      if (operator === '/') {
        return this.divide(numberStack.shift(), numberStack.shift());
      }

      return false;
    });
  }

  add(leftNumber, rightNumber) {
    return leftNumber + rightNumber;
  }

  divide(leftNumber, rightNumber) {
    return Math.floor(leftNumber / rightNumber);
  }
}

const calculator = new Calculator();
