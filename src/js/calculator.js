import { EXCEPTION } from './constants.js';
import { totalText } from './elements.js';

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

  calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        totalText.innerHTML = this.add(num1, num2);
        break;

      case '-':
        totalText.innerHTML = this.substract(num1, num2);
        break;

      case 'X':
        totalText.innerHTML = this.multiply(num1, num2);
        break;

      case '/':
        let result = this.divide(num1, num2);

        if (typeof result == 'number') {
          totalText.innerHTML = result;
        } else {
          return alert(EXCEPTION.DIVISION_BY_ZERO);
        }
        break;
    }
  }

  AC() {
    totalText.innerHTML = '0';
  }

  updateTotalText(text) {
    if (totalText.innerHTML === '0') {
      totalText.innerHTML = text;
    } else {
      totalText.innerHTML += text;
    }
  }
}
