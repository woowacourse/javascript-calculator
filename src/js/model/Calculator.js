import { commonValidate, validateNotAZero } from "../utils/validations.js";

export default class Calculator {
  add(number1, number2) {
    commonValidate(number1, number2);

    return number1 + number2;
  }

  subtract(number1, number2) {
    commonValidate(number1, number2);

    return number1 - number2;
  }

  multiply(number1, number2) {
    commonValidate(number1, number2);

    return number1 * number2;
  }

  divide(number1, number2) {
    commonValidate(number1, number2);
    validateNotAZero(number2);

    return Math.floor(number1 / number2);
  }
}
