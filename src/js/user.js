import { ACButton, digitButton, operationButton, totalText } from './elements.js';
import { AC } from './AC.js';
import { maxLength, EXCEPTION } from './constants.js';
import Calculator from './calculator.js'

export class User {
  constructor() {
    this.init();
    this.calculator = new Calculator();
    this.registerEventListener();
  }

  init() {
    this.num1 = '';
    this.num2 = '';
    this.operator = '';
  }

  registerEventListener() {
    ACButton.addEventListener('click', () => {
      AC();
      this.init();
    });

    for (let index = 0; index < digitButton.length; index++) {
      digitButton[index].addEventListener('click', () => {
        if (!this.operator) { // 첫 번째 숫자 입력
          if (this.num1.length > maxLength) {
            return alert(EXCEPTION.OUT_OF_RANGE);
          }
          this.num1 += digitButton[index].innerText;
          if (totalText.innerHTML === '0') {
            totalText.innerHTML = digitButton[index].innerText;
          } else {
            totalText.innerHTML += digitButton[index].innerText;
          }
        } else {  // 두 번째 숫자 입력
          if (this.num2.length > maxLength) {
            return alert(EXCEPTION.OUT_OF_RANGE);
          }
          this.num2 += digitButton[index].innerText;
          totalText.innerHTML += digitButton[index].innerText;
        }
      });
    }

    for (let index = 0; index < operationButton.length; index++) {
      operationButton[index].addEventListener('click', () => {
        if (
          operationButton[index].innerText === '=' &&
          this.num1 && this.operator && this.num2
        ) {
          this.num1 = parseInt(this.num1);
          this.num2 = parseInt(this.num2);

          switch (this.operator) {
            case '+':
              totalText.innerHTML = this.calculator.add(this.num1, this.num2)
              break;

            case '-':
              totalText.innerHTML = this.calculator.substract(this.num1, this.num2)
              break;

            case 'X':
              totalText.innerHTML = this.calculator.multiply(this.num1, this.num2)
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
        } else if (
          operationButton[index].innerText !== '=' &&
          this.num1 && !this.operator
        ) {
          if (this.num1.length > maxLength) {
            return alert(EXCEPTION.OUT_OF_RANGE);
          }

          this.operator = operationButton[index].innerText;
          totalText.innerHTML += operationButton[index].innerText;
        } else {
          return alert(EXCEPTION.UNCORRECT_VALUE);
        }
      })
    }
  }
}