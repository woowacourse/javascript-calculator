import { ERROR_MESSAGE } from './Constant.js';

export default class Validator {
  isValidExpression(digit, operation) {
    return digit === '' && operation !== '' ? alert(ERROR_MESSAGE.INVALID_EXPRESSION) : true;
  }
}
