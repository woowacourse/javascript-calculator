export default class Calculator {
  constructor() {
    this.digits = document.getElementsByClassName('digit');
    this.operators = document.getElementsByClassName('operator');
    this.display = document.getElementById('total');
    this.equal = document.getElementById('equal');
    this.clear = document.querySelector('.modifier');
    this.numLenChecker = 0;

    this.addListeners();
  }

  addListeners() {
    for (let i = 0; i < this.digits.length; i++) {
      this.digits[i].addEventListener('click', () =>
        this.printDigit(this.digits[i].innerHTML),
      );
    }

    for (let i = 0; i < this.operators.length; i++) {
      this.operators[i].addEventListener('click', () =>
        this.printOperator(this.operators[i].innerHTML),
      );
    }

    this.equal.addEventListener('click', this.calculate.bind(this));
    this.clear.addEventListener('click', this.printAC.bind(this));
  }

  printDigit(digit) {
    if (this.numLenChecker === 3) {
      alert('숫자는 3자리까지만 입력이 가능합니다.');
      return;
    }
    this.numLenChecker++;
    if (this.display.innerHTML === '0') {
      this.display.innerHTML = digit;
    } else {
      this.display.innerHTML += digit;
    }
  }

  printOperator(operator) {
    this.numLenChecker = 0;
    this.display.innerHTML += operator;
  }

  calculate() {
    const currInput = this.display.innerHTML;
    const pattern = /[+-/X]/g;
    const operator = currInput.match(pattern)[0];
    const digits = currInput.split(operator);
    const digit1 = parseInt(digits[0]);
    const digit2 = parseInt(digits[1]);

    if (operator) {
      this.printResult(digit1, digit2, operator);
    }
  }

  printResult(digit1, digit2, operator) {
    let result;
    if (operator === '+') {
      result = digit1 + digit2;
    } else if (operator === '-') {
      result = digit1 - digit2;
    } else if (operator === '/') {
      result = Math.floor(digit1 / digit2);
    } else if (operator === 'X') {
      result = digit1 * digit2;
    }

    this.display.innerHTML = result;
  }

  printAC() {
    const result = '0';
    this.numLenChecker = 0;
    this.display.innerHTML = result;
  }
}

new Calculator();
