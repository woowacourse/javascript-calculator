import Calculator from './Calculator.js';
import { ERROR_MESSAGE } from '../Utils/Constant.js';

export default class CalculatorModel {
  init() {
    this.numbers = [];
    this.operation = '';
    this.result = '';
    return this;
  }

  setNumbers(num) {
    this.numbers.push(num);
  }

  setOperation(operation) {
    this.operation = operation;
  }

  setResult() {
    this.result = new Calculator(this.numbers, this.operation).getOperation();
  }

  getOperation() {
    return this.operation;
  }

  getNumbersLength() {
    return this.numbers.length;
  }

  getResult() {
    return this.result === Infinity ? ERROR_MESSAGE.INVALID_RESULT : this.result;
  }
}
