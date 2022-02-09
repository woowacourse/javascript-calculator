import Calculator from "./Calculator.js";

export default class Model {
  constructor() {
    this.calculator = new Calculator();
    this.userInputString = "";
  }

  addUserInputString(character) {
    this.userInputString += character;

    return this.userInputString;
  }

  calculate() {
    let result;

    if (this.userInputString.includes("+")) {
      const [number1, number2] = this.userInputString.split("+");

      result = this.calculator.add(Number(number1), Number(number2));
    }

    return result;
  }

  initializeUserInputString() {
    this.userInputString = "";
  }
}
