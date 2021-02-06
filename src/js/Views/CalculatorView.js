import View from './View.js';

export default class CalculatorView extends View {
  setup($element) {
    this.init($element);
    this.bindDigitClickEvent();
    this.bindACClickEvent();
    this.bindOperationClickEvent();
    return this;
  }

  bindDigitClickEvent() {
    Array.from(this.$element.querySelectorAll('.digit')).forEach((digit) => {
      digit.addEventListener('click', () => this.onClickDigitHandler(digit.innerText));
    });
  }

  onClickDigitHandler(digit) {
    this.emit('clickDigit', parseInt(digit, 10));
  }

  showDigit(digit) {
    this.$element.querySelector('#total').innerText = digit;
  }

  bindACClickEvent() {
    this.$element.querySelector('.modifier').addEventListener('click', () => {
      this.onClickACHandler();
    });
  }

  onClickACHandler() {
    this.emit('clickAC');
  }

  bindOperationClickEvent() {
    Array.from(this.$element.querySelectorAll('.operation')).forEach((operation) => {
      operation.addEventListener('click', () => {
        this.onClickOperationHandler(operation.innerText);
      });
    });
  }

  onClickOperationHandler(operation) {
    this.emit('clickOperation', operation);
  }
}
