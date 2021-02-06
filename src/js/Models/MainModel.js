import Calculator from './Calculator.js';

export default class CalculatorModel {
  init() {
    this.numbers = [];
    this.operation = '';
    return this;
  }

  setNumbers(num) {
    this.numbers.push(num);
  }

  setOperation(operation) {
    this.operation = operation;
  }

  getOperation() {
    return this.operation;
  }

  getNumbersLength() {
    return this.numbers.length;
  }

  getResult() {
    return new Calculator(this.numbers, this.operation).getOperation();
  }
}
