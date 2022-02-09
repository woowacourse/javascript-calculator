import Operation from './Operation.js';
import { EMPTY_STRING, ZERO } from './constants.js';

class Formula {
  constructor() {
    this.initializeData();
  }

  initializeData() {
    this.numbers = [EMPTY_STRING, EMPTY_STRING];
    this.operator = EMPTY_STRING;
  }

  offset() {
    return this.operator === EMPTY_STRING ? 0 : 1;
  }

  result() {
    return this.numbers[0] + this.operator + this.numbers[1];
  }

  setNumber(value) {
    this.setCurNumber(this.isCurNumberZero() ? value : this.getCurNumber() + value);
  }

  setOperator(operator) {
    this.operator = operator;
  }

  isCurNumberZero() {
    return this.getCurNumber() === ZERO;
  }

  setCurNumber(value) {
    this.setNumberByIndex(this.offset(), value);
  }

  setNumberByIndex(index, value) {
    this.numbers[index] = value;
  }

  getCurNumber() {
    return this.numbers[this.offset()];
  }

  toInts() {
    return this.numbers.map(Number);
  }

  calculate() {
    return new Operation(this.toInts(), this.operator).operate();
  }
}

export default Formula;