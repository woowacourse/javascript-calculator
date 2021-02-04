import {
  MAX_LENGTH_ALERT,
  MAX_DIGIT_LENGTH,
  BASE,
} from '../constants/index.js';
export default class Calculator {
  constructor() {
    // 연산 하기
    // 값 출력
    this.number = 0;
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
    const digit = Number(innerText);
    if (className !== 'digit') {
      return;
    }
    this.addDigit(digit);
    this.render();
  }

  addDigit(digit) {
    const currentValue = this.number * BASE + digit;
    if (String(currentValue).length > MAX_DIGIT_LENGTH) {
      return alert(MAX_LENGTH_ALERT);
    }
    this.number = currentValue;
  }

  render() {
    const $total = document.querySelector('#total');
    $total.innerText = this.number;
  }
}
