import {
  MAX_LENGTH_ALERT,
  MAX_DIGIT_LENGTH,
  BASE,
} from '../constants/index.js';

export default class Calculator {
  constructor() {
    this.number = 0;
    this.operator = '';
    this.total = 0;
    this.initializeEventListener();
  }

  initializeEventListener() {
    const $calculator = document.querySelector('.calculator');
    $calculator.addEventListener('click', this.onClickButton.bind(this));
  }

  onClickButton({ target: { className, innerText } }) {
    if (
      className !== 'digit' &&
      className !== 'operation' &&
      className !== 'modifier'
    ) {
      return;
    }
    className !== 'modifier' ? this.calculate(innerText) : this.reset();
    this.render(innerText);
  }

  calculate(input) {
    if (this.isDigit(input)) {
      this.addDigit(Number(input));

      return;
    }
    if (this.total === 0 && this.number === 0) {
      return;
    }
    this.total = this.operate(this.total, this.operator, this.number);
    this.operator = input === 'X' ? '*' : input;
    this.number = 0;
  }

  isDigit(input) {
    return !isNaN(input);
  }

  addDigit(digit) {
    if (String(this.number).length === MAX_DIGIT_LENGTH) {
      alert(MAX_LENGTH_ALERT);

      return;
    }
    this.number = this.number * BASE + digit;
  }

  operate(num1, op, num2) {
    const operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };
    if (op === '' || op === '=') {
      return num2;
    }

    return operations[op](num1, num2);
  }

  reset() {
    this.number = 0;
    this.operator = '';
    this.total = 0;
  }

  render(input) {
    const $total = document.querySelector('#total');
    $total.innerText = this.isDigit(input)
      ? this.number
      : this.formatTotal(this.total);
  }

  formatTotal(input) {
    return Math.floor(input);
  }
}
