import Calculator from "./Calculator.js";

export default class Model {
  constructor() {
    this.calculator = new Calculator();
    this.userInputString = "";
    this.digitCount = 0;
  }

  addUserInputString(character) {
    if (typeof character === "number") {
      this.digitCount += 1;

      if (this.digitCount > 3) {
        alert("alert");

        this.initializeDigitCount();
        this.initializeUserInputString();

        return "0";
      }
    }

    this.userInputString += character;

    return this.userInputString;
  }

  initializeDigitCount() {
    this.digitCount = 0;
  }

  calculate() {
    let result;

    if (
      this.userInputString.split(/[\+\-X/]+/).filter((elem) => typeof Number(elem) === "number")
        .length > 2
    ) {
      alert("숫자는 두개까지 입력 가능합니다.");

      this.initializeDigitCount();
      this.initializeUserInputString();

      return "0";
    }

    if (this.userInputString.includes("+")) {
      const [number1, number2] = this.userInputString.split("+");

      result = this.calculator.add(Number(number1), Number(number2));
    }

    if (this.userInputString.includes("-")) {
      const [number1, number2] = this.userInputString.split("-");

      result = this.calculator.subtract(Number(number1), Number(number2));
    }

    if (this.userInputString.includes("X")) {
      const [number1, number2] = this.userInputString.split("X");

      result = this.calculator.multiply(Number(number1), Number(number2));
    }

    if (this.userInputString.includes("/")) {
      const [number1, number2] = this.userInputString.split("/");

      result = this.calculator.divide(Number(number1), Number(number2));
    }

    return result;
  }

  initializeUserInputString() {
    this.userInputString = "";
  }
}
