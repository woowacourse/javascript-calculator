import { MAX_LENGTH_ALERT, MAX_DIGIT_LENGTH } from '../constants/index.js';
export default class Calculator {
  constructor() {
    // 연산 하기
    // 값 출력
    this.number = '';
    this.operator = '';
    this.total = 0;
    this.initializeEventListener();
  }

  initializeEventListener() {
    const $digitContainer = document.querySelector('.digits');
    $digitContainer.addEventListener(
      'click',
      this.onClickDigitButton.bind(this)
    );
  }

  onClickDigitButton({ target: { className, innerText } }) {
    const digit = innerText;
    if (className !== 'digit') {
      return;
    }
    this.addDigit(digit);
  }

  addDigit(digit) {
    let currentValue = this.number + digit;
    if (currentValue.length > MAX_DIGIT_LENGTH) {
      return alert(MAX_LENGTH_ALERT);
    }
    this.number = currentValue;
  }
}
