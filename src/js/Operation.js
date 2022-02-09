class Operation {
  constructor(numbers, operator) {
    this.numbers = numbers;
    this.operator = operator;
    this.operationFns = {
      '+': this.add,
      '-': this.minus,
      '/': this.division,
      'x': this.multi,
    };
  }

  operate() {
    return this.operationFns[this.operator](this.numbers);
  }

  add(numbers) {
    return numbers[0] + numbers[1];
  }

  minus(numbers) {
    return numbers[0] - numbers[1];
  }

  division(numbers) {
    return Math.floor(numbers[0] / numbers[1]);
  }

  multi(numbers) {
    return numbers[0] * numbers[1];
  }
}

export default Operation;