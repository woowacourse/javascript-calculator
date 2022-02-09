import { NUMBER, OPERATIONS, ERROR_MESSAGES, INITIAL_VALUE } from "../constants.js";
import Calculator from "./Calculator.js";

export default class Model {
  constructor() {
    this.calculator = new Calculator();
    this.userInputString = "";
    this.digitCount = NUMBER.INITIAL_RESULT;
  }

  addUserInputString(character) {
    if (typeof character === "number") {
      this.digitCount += NUMBER.INCREASE_ONE;

      if (this.digitCount > NUMBER.DIGIT_COUNT_MAXIMUM) {
        alert(ERROR_MESSAGES.MAXIMUM_DIGITS);

        this.initializeDigitCount();
        this.initializeUserInputString();

        return INITIAL_VALUE;
      }
    }

    this.userInputString += character;

    return this.userInputString;
  }

  initializeDigitCount() {
    this.digitCount = NUMBER.INITIAL_RESULT;
  }

  calculate() {
    let result;

    if (
      this.userInputString.split(/[\+\-X/]+/).filter((elem) => typeof Number(elem) === "number")
        .length > NUMBER.COUNT_MAXIMUM
    ) {
      alert(ERROR_MESSAGES.MAXIMUM_NUMBER_COUNT);

      this.initializeDigitCount();
      this.initializeUserInputString();

      return INITIAL_VALUE;
    }

    if (this.userInputString.includes(OPERATIONS.PLUS)) {
      const [number1, number2] = this.userInputString.split(OPERATIONS.PLUS);

      result = this.calculator.add(Number(number1), Number(number2));
    }

    if (this.userInputString.includes(OPERATIONS.MINUS)) {
      const [number1, number2] = this.userInputString.split(OPERATIONS.MINUS);

      result = this.calculator.subtract(Number(number1), Number(number2));
    }

    if (this.userInputString.includes(OPERATIONS.MULTIPLY)) {
      const [number1, number2] = this.userInputString.split(OPERATIONS.MULTIPLY);

      result = this.calculator.multiply(Number(number1), Number(number2));
    }

    if (this.userInputString.includes(OPERATIONS.DIVIDE)) {
      const [number1, number2] = this.userInputString.split(OPERATIONS.DIVIDE);

      result = this.calculator.divide(Number(number1), Number(number2));
    }

    return result;
  }

  initializeUserInputString() {
    this.userInputString = "";
  }
}
