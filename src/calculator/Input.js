import { totalBox } from '../store.js';
import {
  OPERAND_LENGTH_LIMIT,
  OPERAND_LENGTH_EXCEEDED_LIMIT,
  OPERATOR_EXISTANCE_ERROR,
  SHOULD_INPUT_LEFT_OPERAND,
} from '../contants.js';

export default class Input {
  static isValidLength(operand) {
    if (operand.length >= OPERAND_LENGTH_LIMIT) {
      alert(OPERAND_LENGTH_EXCEEDED_LIMIT);
      return false;
    }
    return true;
  }

  static isInputValueValid(inputValue) {
    if (isNaN(inputValue)) {
      return Input.isInputOperatorValid();
    }

    return Input.isInputOperandValid();
  }

  static isInputOperatorValid(operator) {
    if (totalBox.isOperatorExist()) {
      alert(OPERATOR_EXISTANCE_ERROR);
      return false;
    }
    if (totalBox.isLeftOperandEmpty()) {
      alert(SHOULD_INPUT_LEFT_OPERAND);
      return false;
    }
    return true;
  }

  static isInputOperandValid(operand) {
    const latestOperand = totalBox.getLatestOperand();

    return Input.isValidLength(latestOperand);
  }
}
