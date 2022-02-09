import { EXCEPTION } from './constants.js';
 
export default class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }
  
  substract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    if (num2 == 0) {
      return new Error(EXCEPTION.DIVISION_BY_ZERO);
    }

    return Math.floor(num1 / num2);
  }
}
