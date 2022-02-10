import { NUMBER, OPERATIONS, ERROR_MESSAGES, INITIAL_VALUE } from "../constants.js";
import Calculator from "./Calculator.js";

export default class Model {
  static operate(inputString, operation) {
    const operationSwitch = {
      [OPERATIONS.PLUS]: Calculator.add,
      [OPERATIONS.MINUS]: Calculator.subtract,
      [OPERATIONS.MULTIPLY]: Calculator.multiply,
      [OPERATIONS.DIVIDE]: Calculator.divide,
    };

    if (inputString.includes(operation)) {
      const [number1, number2] = inputString.split(operation);

      return operationSwitch[operation](Number(number1), Number(number2));
    }
  }

  constructor() {
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
    if (
      this.userInputString.split(/[+\-X/]+/).filter((elem) => typeof Number(elem) === "number")
        .length > NUMBER.COUNT_MAXIMUM
    ) {
      alert(ERROR_MESSAGES.MAXIMUM_NUMBER_COUNT);

      this.initializeDigitCount();
      this.initializeUserInputString();

      return INITIAL_VALUE;
    }

    const operation = this.userInputString.split("").find((char) => "+-X/".includes(char));

    return Model.operate(this.userInputString, operation);
  }

  initializeUserInputString() {
    this.userInputString = "";
  }
}
