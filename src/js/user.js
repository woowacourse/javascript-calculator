import {
  ACButton,
  digitButtons,
  operationButtons,
  totalText,
} from './elements.js';
import {
  MAX_LENGTH,
  EXCEPTION,
  OPERATOR,
  MOUSE_EVENT,
  INITIAL_NUMBER,
} from './constants.js';

export default class User {
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
    } else {
      // 두 번째 숫자 입력
      if (this.num2.length >= MAX_LENGTH) {
        return alert(EXCEPTION.OUT_OF_RANGE);
      }
      this.num2 += digit;
    }
    this.calculator.updateTotalText(digit);
  }

  clickToCalculate() {
    this.calculator.calculate(
      parseInt(this.num1),
      parseInt(this.num2),
      this.operator
    );
    this.init();
    if (totalText.innerHTML !== INITIAL_NUMBER) {
      this.num1 = totalText.innerHTML;
    }
  }

  clickToEnterOperator(operator) {
    if (this.num1.length > MAX_LENGTH) {
      return alert(EXCEPTION.OUT_OF_RANGE);
    }
    this.operator = operator;
    this.calculator.updateTotalText(operator);
  }

  clickOperatorButton(operator) {
    if (
      operator === OPERATOR.EQUAL &&
      this.num1 &&
      this.operator &&
      this.num2
    ) {
      this.clickToCalculate();
    } else if (operator !== OPERATOR.EQUAL && this.num1 && !this.operator) {
      this.clickToEnterOperator(operator);
    } else {
      return alert(EXCEPTION.INCORRECT_VALUE);
    }
  }

  registerEventListener() {
    const { CLICK } = MOUSE_EVENT;

    ACButton.addEventListener(CLICK, () => {
      this.clickACButton();
    });
    for (let index = 0; index < digitButtons.length; index++) {
      digitButtons[index].addEventListener(CLICK, () => {
        this.clickDigitButton(digitButtons[index].innerHTML);
      });
    }
    for (let index = 0; index < operationButtons.length; index++) {
      operationButtons[index].addEventListener(CLICK, () => {
        this.clickOperatorButton(operationButtons[index].innerHTML);
      });
    }
  }
}
