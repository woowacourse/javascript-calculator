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
    if (className !== 'digit' && className !== 'operation') {
      return;
    }
    this.calculate(innerText);
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
    this.total = this.operate(this.total, this.number);
    this.operator = input === 'X' ? '*' : input;
    this.number = 0;
  }

  isDigit(input) {
    return !isNaN(input);
  }

  addDigit(digit) {
    const currentValue = this.number * BASE + digit;
    if (String(currentValue).length > MAX_DIGIT_LENGTH) {
      alert(MAX_LENGTH_ALERT);

      return;
    }
    this.number = currentValue;
  }

  operate(num1, num2) {
    const operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };
    if (this.operator === '' || this.operator === '=') {
      return this.number;
    }

    return Math.floor(operations[this.operator](num1, num2));
  }

  render(input) {
    const $total = document.querySelector('#total');
    $total.innerText = this.isDigit(input) ? this.number : this.total;
  }
}
