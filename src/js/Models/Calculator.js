import { OPERATION } from '../Utils/Constant.js';

export default class Calculator {
  constructor(numbers, op) {
    this.numbers = numbers;
    this.op = op;
  }

  getOperation() {
    if (this.op === OPERATION.ADD) {
      return this.add(this.numbers);
    }

    if (this.op === OPERATION.SUBTRACT) {
      return this.minus(this.numbers);
    }

    if (this.op === OPERATION.MUTIPLY) {
      return this.multiply(this.numbers);
    }

    if (this.op === OPERATION.DIVIDE) {
      return this.divide(this.numbers);
    }

    return this.numbers[0];
  }

  add(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }

  minus(numbers) {
    return numbers.reduce((a, b) => a - b);
  }

  multiply(numbers) {
    return numbers.reduce((a, b) => (a * b));
  }

  divide(numbers) {
    return numbers.reduce((a, b) => Math.floor(a / b));
  }
}
