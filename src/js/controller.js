import { add, minus, multiply, divide, dropDecimalPoint } from "./operator.js";

class Calculator {
  constructor() {
    this.operator = "0";
  }

  addInput(value) {
    this.operator += value;
  }

  operate(operation) {
    const inputOperator = operation.replace(/[0-9]/g, "");
    const [num1, num2] = operation.split(/[*+-/]/).map(x => parseInt(x));
    if ("+" === inputOperator) {
      this.operator = add(num1, num2);
    } else if ("-" === inputOperator) {
      this.operator = minus(num1, num2);
    } else if ("*" === inputOperator) {
      this.operator = multiply(num1, num2);
    } else if ("/" === inputOperator) {
      this.operator = dropDecimalPoint(divide(num1, num2));
    }

    return this.operator;
  }

  reset() {}
}

export default Calculator;
