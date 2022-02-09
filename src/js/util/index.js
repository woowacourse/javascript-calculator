import { OPERATORS, RULES, ERROR_MESSAGES } from '../constant/index.js';

export const counter = {
  [OPERATORS.ADD]: (firstOperand, secondOperand) => {
    return firstOperand + secondOperand;
  },
  [OPERATORS.SUBSTRACT]: (firstOperand, secondOperand) => {
    return firstOperand - secondOperand;
  },
  [OPERATORS.MULTIPLY]: (firstOperand, secondOperand) => {
    return firstOperand * secondOperand;
  },
  [OPERATORS.DIVIDE]: (firstOperand, secondOperand, callback) => {
    if (secondOperand === RULES.ZERO_NUMBER) {
      callback();
      alert(ERROR_MESSAGES.DIVIDED_NOT_ZERO);
    }
    return Math.floor(firstOperand / secondOperand);
  },
};

export const convertToNumber = (value) => {
  return parseInt(value, 10);
};

export const isExceedOperandLength = (operand) => {
  if (operand.length === RULES.MAX_OPERAND_LENGTH) {
    alert(ERROR_MESSAGES.EXCEED_THREE_LENGTH);
    return true;
  }

  return false;
};

export const isNotEnterTwoNumbers = (firstOperand, secondOperand) => {
  if (firstOperand === RULES.INITIAL_VALUE || secondOperand === RULES.INITIAL_VALUE) {
    alert(ERROR_MESSAGES.ENTER_TWO_NUMBERS);
    return true;
  }

  return false;
};
