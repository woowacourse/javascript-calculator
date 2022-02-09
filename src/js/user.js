import {
  ACButton,
  digitButton,
  operationButton,
  totalText,
} from './elements.js';
import { MAX_LENGTH, EXCEPTION } from './constants.js';

export class User {
  constructor(calculator) {
    this.calculator = calculator;
    this.init();
    this.registerEventListener();
  }

  init() {
    this.num1 = '';
    this.num2 = '';
    this.operator = '';
  }

  clickACButton() {
    this.calculator.AC();
    this.init();
  }

  clickDigitButton(digit) {
    if (!this.operator) {
      // 첫 번째 숫자 입력
      if (this.num1.length > MAX_LENGTH) {
        return alert(EXCEPTION.OUT_OF_RANGE);
      }
      this.num1 += digit;
      if (totalText.innerHTML === '0') {
        totalText.innerHTML = digit;
      } else {
        totalText.innerHTML += digit;
      }
    } else {
      // 두 번째 숫자 입력
      if (this.num2.length > MAX_LENGTH) {
        return alert(EXCEPTION.OUT_OF_RANGE);
      }
      this.num2 += digit;
      totalText.innerHTML += digit;
    }
  }

  clickOperatorButton(operator) {
    if (operator === '=' && this.num1 && this.operator && this.num2) {
      this.num1 = parseInt(this.num1);
      this.num2 = parseInt(this.num2);

      switch (this.operator) {
        case '+':
          totalText.innerHTML = this.calculator.add(this.num1, this.num2);
          break;

        case '-':
          totalText.innerHTML = this.calculator.substract(this.num1, this.num2);
          break;

        case 'X':
          totalText.innerHTML = this.calculator.multiply(this.num1, this.num2);
          break;

        case '/':
          let result = this.calculator.divide(this.num1, this.num2);

          if (typeof result == 'number') {
            totalText.innerHTML = result;
          } else {
            return alert(EXCEPTION.DIVISION_BY_ZERO);
          }
          break;
      }
      this.init();
      this.num1 = totalText.innerHTML;
    } else if (operator !== '=' && this.num1 && !this.operator) {
      if (this.num1.length > MAX_LENGTH) {
        return alert(EXCEPTION.OUT_OF_RANGE);
      }

      this.operator = operator;
      totalText.innerHTML += operator;
    } else {
      return alert(EXCEPTION.UNCORRECT_VALUE);
    }
  }

  registerEventListener() {
    ACButton.addEventListener('click', () => {
      this.clickACButton();
    });

    for (let index = 0; index < digitButton.length; index++) {
      digitButton[index].addEventListener('click', () => {
        this.clickDigitButton(digitButton[index].innerHTML);
      });
    }

    for (let index = 0; index < operationButton.length; index++) {
      operationButton[index].addEventListener('click', () => {
        this.clickOperatorButton(operationButton[index].innerHTML);
      });
    }
  }
}
