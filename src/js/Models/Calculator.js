export default class Calculator {
  constructor(numbers, op) {
    this.numbers = numbers;
    this.op = op;
  }

  getOperation() {
    if (this.op === '+') {
      return this.add(this.numbers);
    }

    if (this.op === '-') {
      return this.minus(this.numbers);
    }

    if (this.op === 'X') {
      return this.multiply(this.numbers);
    }

    return -1;
  }

  add(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }

  minus(numbers) {
    console.log(numbers);
    return numbers.reduce((a, b) => a - b);
  }

  multiply(numbers) {
    return numbers.reduce((a, b) => (a * b));
  }
}
