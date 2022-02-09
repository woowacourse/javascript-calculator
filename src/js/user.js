import {
  ACButton,
  digitButton,
  operationButton,
  totalText,
} from './elements.js';
import { MAX_LENGTH, EXCEPTION, OPERATOR, MOUSE_EVENT } from './constants.js';

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
      if (this.num1.length >= MAX_LENGTH) {
        return alert(EXCEPTION.OUT_OF_RANGE);
      }
      this.num1 += digit;
      this.calculator.updateTotalText(digit);
    } else {
      // 두 번째 숫자 입력
      if (this.num2.length >= MAX_LENGTH) {
        return alert(EXCEPTION.OUT_OF_RANGE);
      }
      this.num2 += digit;
      this.calculator.updateTotalText(digit);
    }
  }

  clickOperatorButton(operator) {
    if (
      operator === OPERATOR.EQUAL &&
      this.num1 &&
      this.operator &&
      this.num2
    ) {
      // 정상 계산 (=)
      this.calculator.calculate(
        parseInt(this.num1),
        parseInt(this.num2),
        this.operator
      );
      this.init();
      this.num1 = totalText.innerHTML;
    } else if (operator !== OPERATOR.EQUAL && this.num1 && !this.operator) {
      // 연산자 입력
      if (this.num1.length > MAX_LENGTH) {
        return alert(EXCEPTION.OUT_OF_RANGE);
      }
      this.operator = operator;
      this.calculator.updateTotalText(operator);
    } else {
      // 비정상 계산 (=)
      return alert(EXCEPTION.UNCORRECT_VALUE);
    }
  }

  registerEventListener() {
    ACButton.addEventListener(MOUSE_EVENT.CLICK, () => {
      this.clickACButton();
    });

    for (let index = 0; index < digitButton.length; index++) {
      digitButton[index].addEventListener(MOUSE_EVENT.CLICK, () => {
        this.clickDigitButton(digitButton[index].innerHTML);
      });
    }

    for (let index = 0; index < operationButton.length; index++) {
      operationButton[index].addEventListener(MOUSE_EVENT.CLICK, () => {
        this.clickOperatorButton(operationButton[index].innerHTML);
      });
    }
  }
}
