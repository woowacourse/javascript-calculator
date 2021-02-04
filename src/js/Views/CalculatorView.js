import View from './View.js';

export default class CalculatorView extends View {
  setup($element) {
    this.init($element);
    this.bindDigitClickEvent();
    return this;
  }

  bindDigitClickEvent() {
    Array.from(this.$element.querySelectorAll('.digit')).forEach((digit) => {
      digit.addEventListener('click', () => this.onClickDigitHandler(digit.innerText));
    });
  }

  onClickDigitHandler(digit) {
    console.log(digit);
    this.emit('clickDigit', digit);
  }

  showDigit(digit) {
    this.$element.querySelector('#total').innerText = digit;
  }
}