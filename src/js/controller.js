import { add, minus, multiply, divide, dropDecimalPoint } from "./operator.js";
import { isNumberOverThreeChar, isOperatorOverTwoChar } from "./valid.js";

class Calculator {
  constructor() {
    this.operator = "0";
  }

  addInput(value) {
    this.operator += value;
  }

  addNumber(num) {
    // 숫자값 받기
    // 유효성 검사
    // 통과시 string에 넣기
  }

  addOperator(operator) {
    // 연산자값 받기
    // 유효성 검사
    // 통과시 string에 넣기
  }

  operate() {
    const inputOperator = this.operator.replace(/[0-9]/g, "");
    const [num1, num2] = this.operator.split(/[*+-/]/).map(x => parseInt(x));
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

  reset() {
    this.operator = "0";
  }
}

export default Calculator;
