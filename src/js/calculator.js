import { totalText } from './elements.js';
import { EXCEPTION, OPERATOR, TYPE, INITIAL_NUMBER } from './constants.js';

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

  divisionLogic(num1, num2) {
    const result = this.divide(num1, num2);

    if (typeof result === TYPE.NUMBER) {
      totalText.innerHTML = result;
    } else {  // ERROR
      return alert(EXCEPTION.DIVISION_BY_ZERO);
    }
  }

  calculate(num1, num2, operator) {
    switch (operator) {
      case OPERATOR.ADD:
        totalText.innerHTML = this.add(num1, num2);
        break;

      case OPERATOR.SUBSTRACT:
        totalText.innerHTML = this.substract(num1, num2);
        break;

      case OPERATOR.MULTIPLY:
        totalText.innerHTML = this.multiply(num1, num2);
        break;

      case OPERATOR.DIVIDE:
        this.divisionLogic(num1, num2);
        break;
    }
  }

  AC() {
    totalText.innerHTML = INITIAL_NUMBER;
  }

  updateTotalText(text) {
    if (totalText.innerHTML === INITIAL_NUMBER) {
      totalText.innerHTML = '';
    }
    totalText.innerHTML += text;
  }
}
