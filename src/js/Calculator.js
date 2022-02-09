import { $ } from './utils/dom.js';
import Validator from './validator.js';
import { NUMBERS } from './utils/constants.js';

export default class Calculator {
  constructor () {
    this.firstNumber = '';
    this.secondNumber = '';
    this.operand = '';
    this.total = '';
  }

  setFirstNumber(number) {
    if (Validator.isLongerThanThree(this.firstNumber)) {
      return;
    }
    this.firstNumber += number;
  }

  setSecondNumber(number) {
    if (Validator.isLongerThanThree(this.secondNumber)) {
      return;
    }
    this.secondNumber += number;
  }

  setOperand(operand) {
    this.operand = operand;
  }

  setTotal(total) {
    this.total = total;
  }

  add(number1, number2) {
    if (Validator.hasTwoNumbers(number1, number2) || Validator.isNumbers(number1, number2)) {
      return;
    }
    return number1 + number2;
  }

  subtract(number1, number2) {
    if (Validator.hasTwoNumbers(number1, number2) || Validator.isNumbers(number1, number2)) {
      return;
    }
    return number1 - number2;
  }

  multiply(number1, number2) {
    if (Validator.hasTwoNumbers(number1, number2) || Validator.isNumbers(number1, number2)) {
      return;
    }
    return number1 * number2;
  }

  divide(number1, number2) {
    if (Validator.hasTwoNumbers(number1, number2) || Validator.isNumbers(number1, number2)) {
      return;
    }
    return Math.floor(number1 / number2);
  }

  calculate() {
    switch (this.operand) {
      case '+': 
        this.total = this.add(+this.firstNumber, +this.secondNumber);
        break;
      case '-': 
        this.total = this.subtract(+this.firstNumber, +this.secondNumber);
        break;
      case 'X': 
        this.total = this.multiply(+this.firstNumber, +this.secondNumber);
        break;
      case '/': 
        this.total = this.divide(+this.firstNumber, +this.secondNumber);
        break;
    }
  }

  render() {
    $('#total').textContent = this.firstNumber + this.operand + this.secondNumber;
  }

  renderTotal() {
    $('#total').textContent = this.total;
  }

  reset() {
    this.firstNumber = '';
    this.secondNumber = '';
    this.operand = '';
    this.total = '';
    $('#total').textContent = 0;
  }
}

