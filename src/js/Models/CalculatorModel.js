import Calculator from './Calculator.js';

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
    return this.result === Infinity ? '오류' : this.result;
  }
}
