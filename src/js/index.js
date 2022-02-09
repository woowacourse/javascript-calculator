class Calculator {
  constructor() {}

  checkParameter(number1, number2) {
    if (number1 === undefined || number2 === undefined) {
      throw Error("두 개의 인자를 입력해주세요.");
    }
    if (typeof number1 !== "number" || typeof number2 !== "number") {
      throw Error("인자 타입 지정");
    }
    if (number1 >= 1000 || number2 >= 1000) {
      throw Error("3자리수 이하만 가능");
    }
  }

  checkDenominator(number) {
    if (number === 0) {
      throw Error("분모가 0일 수 없음");
    }
  }

  add(number1, number2) {
    this.checkParameter(number1, number2);
    return number1 + number2;
  }

  subtract(number1, number2) {
    this.checkParameter(number1, number2);
    return number1 - number2;
  }

  multiply(number1, number2) {
    this.checkParameter(number1, number2);
    return number1 * number2;
  }

  divide(number1, number2) {
    this.checkParameter(number1, number2);
    this.checkDenominator(number2);
    return number1 / number2;
  }
}

const calculator = new Calculator();

// try {
//   console.log(calculator.divide(100, 0));
// } catch (error) {
//   alert(error);
// }
// console.log(calculator.add(100, 100));
// console.log(calculator.add(1000, 1000));
// console.log(calculator.add("", 1000));
// console.log(calculator.add());
// console.log(calculator.add("string", "string"));
// console.log(calculator.add(100, "string"));
// console.log(calculator.divide(100, 10));
// console.log(calculator.divide(100, 0));
