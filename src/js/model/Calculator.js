import { commonValidate, validateNotAZero } from "../utils/validations.js";

export default class Calculator {
  static add(number1, number2) {
    commonValidate(number1, number2);

    return number1 + number2;
  }

  static subtract(number1, number2) {
    commonValidate(number1, number2);

    return number1 - number2;
  }

  static multiply(number1, number2) {
    commonValidate(number1, number2);

    return number1 * number2;
  }

  static divide(number1, number2) {
    commonValidate(number1, number2);
    validateNotAZero(number2);

    return Math.floor(number1 / number2);
  }
}
