import { ERROR, MAX_LENGTH } from './utils/constants.js';

export default class Validator {
  static hasTwoNumbers(number1, number2) {
    if(!number1 || !number2) {
      alert(ERROR.NOT_TWO_NUMBERS);
      return false;
    }
  }

  static isNumbers(number1, number2) {
    if(typeof number1 !== 'number' || typeof number2 !== 'number') {
      alert(ERROR.NOT_NUMBERS);
      return false;
    }
  }

  static isLongerThanThree(number) {
    if (number.length > MAX_LENGTH) {
      return true;
    }
  }
}
