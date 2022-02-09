import { ERROR_MESSAGES } from "../constants.js";

function isEnoughParameter(number1, number2) {
  return number1 && number2;
}

function isNumber(number1, number2) {
  return typeof number1 === "number" && typeof number2 === "number";
}

export function commonValidate(number1, number2) {
  if (!isEnoughParameter(number1, number2)) {
    throw new Error(ERROR_MESSAGES.NOT_ENOUGH_PARAMETER);
  }

  if (!isNumber(number1, number2)) {
    throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
  }
}

export function validateNotAZero(num) {
  if (num === 0) {
    throw new Error(ERROR_MESSAGES.DIVIDED_BY_ZERO);
  }
}
